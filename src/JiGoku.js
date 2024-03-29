import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import createPersistedState from 'use-persisted-state';
import Kanji from "./data/Kanji"
import Words from "./data/Words";
import CharactersOfWords from "./data/CharactersOfWords";
import KanjiSelector from "./KanjiSelector";
import QuestionStack from "./QuestionStack";

const JiGoku = (props) => {

    const useKnowledgeState = createPersistedState('knowledge');
    const useJlptState = createPersistedState('jlpt');

    const rate = 0.35;

    const [selectedKanji, setSelectedKanji] = useState([6]);
    const [knowledge, setKnowledge] = useKnowledgeState({
        2: { lastTest: new Date() - 1 * 24 * 3600 * 1000, successCount: 1 },
        3: { lastTest: new Date() - 1 * 24 * 3600 * 1000, successCount: 2 },
        4: { lastTest: new Date() - 1 * 24 * 3600 * 1000, successCount: 1 },
        5: { lastTest: new Date() - 1 * 24 * 3600 * 1000, successCount: 0 },
        6: { lastTest: new Date() - 1 * 24 * 3600 * 1000, successCount: 2 },
        12: { lastTest: new Date() - 4 * 24 * 3600 * 1000, successCount: 1 },
        13: { lastTest: new Date() - 4 * 24 * 3600 * 1000, successCount: 2 },
        14: { lastTest: new Date() - 4 * 24 * 3600 * 1000, successCount: 10 },
        15: { lastTest: new Date() - 4 * 24 * 3600 * 1000, successCount: 7 },
        16: { lastTest: new Date() - 4 * 24 * 3600 * 1000, successCount: 4 },
        20: { lastTest: new Date() - 4 * 24 * 3600 * 1000, successCount: 5 },
        25: { lastTest: new Date() - 8 * 24 * 3600 * 1000, successCount: 0 }
    });

    const [jlptLevels, setJlptLevels] = useJlptState(['4']);

    const updateJlptLevels = (levels) => {
        let future = [...levels];
        setJlptLevels(future);
    }

    const knowledgeScore = (entry) => {
        return entry.successCount * Math.exp(-rate * ((new Date() - entry.lastTest) / (24 * 3600 * 1000)))
    }

    const kanjiKnowledge = () => {

        let know = {};

        for (let i = 0; i < Kanji.length; i++) {
            let kanji = Kanji[i];
            let words = Words.filter((entry) => entry.testKanji === kanji.idx);

            let score = -1;
            let runningScore = null;
            let hasError = false;

            for (let j = 0; j < words.length; j++) {
                if (knowledge[words[j].idx] != null) {
                    runningScore += (knowledgeScore(knowledge[words[j].idx])) / words.length;
                    if (knowledge[words[j].idx].successCount === 0) {
                        hasError = true;
                        //console.log('has error', words[j], kanji.idx);
                    }
                }
            }

            if (runningScore != null) {
                score = runningScore;
            }

            if (hasError) {
                score = 0;
            }

            //console.log(kanji.idx, score);

            know[kanji.idx] = score;
        }

        return know;
    }

    const updateSelectedKanji = selection => {
        console.log('updateSelectedKanji', selection);
        setSelectedKanji([...selection]);
    }

    return (
        <HashRouter>
            <div className="rootGrid">
                <h1>字国 JiGoku</h1>
                <div className="content">
                    <Route exact path="/">
                        <KanjiSelector
                            Kanji={Kanji.filter(entry =>{
                                return jlptLevels.includes(''+entry.jlpt);
                            })}
                            Words={Words}
                            selectedKanji={selectedKanji}
                            updateSelectedKanji={updateSelectedKanji}
                            jlptLevels={jlptLevels}
                            updateJlptLevels={updateJlptLevels}
                            kanjiKnowledge={kanjiKnowledge()} />
                    </Route>
                    <Route path="/words">
                        <QuestionStack
                            Words={Words.filter((entry) => jlptLevels.includes(''+entry.jlpt))}
                            CharactersOfWords={CharactersOfWords}
                            selectedKanji={selectedKanji}
                            jlptLevels={jlptLevels}
                            setKnowledge={setKnowledge}
                            knowledge={knowledge} />
                    </Route>
                </div>
            </div>
        </HashRouter>
    );
}

export default JiGoku;