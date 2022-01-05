//    { char: '今', knowledge: 0.3, },

//Kanji	Bushu	Grade	StrokeCount	kanji to kana	JLPT	KanjiOfWords index	Meaning	Knowledge	last test	first successful test

const csv = [
    "人	9	1	2	1	4	11021	person	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "一	1	1	1	2	4	11520	one	2	9/1/06 10:55 AM	8/22/06 10:12 PM",
    "二	7	1	2	3	4	11134	two	2	9/1/06 10:55 AM	8/22/06 10:09 PM",
    "三	1	1	3	4	4	11494	three	2	9/1/06 10:00 AM	8/24/06 6:08 PM",
    "日	72	1	4	5	4	6046	day{}sun{}Japan	2	8/29/06 10:19 PM	8/24/06 6:08 PM",
    "四	31	1	5	6	4	8986	four	2	8/31/06 9:09 PM	8/24/06 6:08 PM",
    "五	1	1	4	7	4	11123	five	2	9/1/06 10:00 AM	8/24/06 6:08 PM",
    "六	8	1	4	8	4	10297	six	2	8/31/06 9:09 PM	8/22/06 10:09 PM",
    "七	5	1	2	9	4	11512	seven	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "八	12	1	2	10	4	10319	eight	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "九	4	1	2	11	4	11219	nine	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "十	24	1	2	12	4	9625	ten	2	9/1/06 10:55 AM	8/24/06 6:08 PM",
    "円	13	1	4	13	4	10234	circle{}yen{}round	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "百	1	1	6	14	4	3826	hundred	2	8/31/06 9:09 PM	8/22/06 10:09 PM",
    "千	4	1	3	15	4	9624	thousand	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "月	74	1	4	17	4	5777	month{}moon	2	9/1/06 10:00 AM	9/1/06 10:00 AM",
    "火	86	1	4	20	4	4534	fire	2	8/29/06 10:19 PM	8/22/06 10:09 PM",
    "水	85	1	4	21	4	4996	water	2	8/31/06 9:09 PM	8/22/06 5:26 PM",
    "木	75	1	4	22	4	5695	tree{}wood	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "金	167	1	8	23	4	750	gold	2	8/29/06 10:19 PM	8/22/06 5:26 PM",
    "土	32	1	3	24	4	8880	soil{}earth{}ground{}Turkey	2	9/1/06 10:55 AM	8/22/06 10:09 PM",
    "本	2	1	5	25	4	5646	book{}present{}main{}true{}real{}counter for long things	2	8/31/06 9:09 PM	8/22/06 10:09 PM",
    "大	37	1	3	26	4	8521	large{}big	2	9/1/06 10:55 AM	8/24/06 6:08 PM",
    "小	42	1	3	27	4	7916	little{}small	2	8/29/06 10:19 PM	8/22/06 10:09 PM",
    "中	2	1	4	28	4	11277	in{}inside{}middle{}mean{}center	2	8/29/06 10:12 PM	8/22/06 10:09 PM",
    "雨	173	1	8	30	4	419	rain	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "下	1	1	3	31	4	11395	below{}down{}descend{}give{}low{}inferior	2	8/31/06 9:09 PM	8/24/06 6:08 PM",
    "上	25	1	3	32	4	11441	above{}up	2	9/1/06 10:55 AM	8/22/06 10:09 PM",
    "川	47	1	3	33	4	7802	stream{}river	2	8/31/06 9:09 PM	8/22/06 10:09 PM",
    "山	46	1	3	34	4	7826	mountain	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "生	100	1	5	44	4	4064	life{}genuine{}birth	2	8/31/06 9:09 PM	8/22/06 5:26 PM",
    "年	4	1	6	45	4	7624	year	2	9/1/06 10:00 AM	8/31/06 9:09 PM",
    "先	10	1	6	50	4	10407	before{}ahead{}previous{}future{}precedence	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "入	11	1	2	52	4	10341	enter{}insert	2	8/27/06 12:38 AM	8/22/06 10:09 PM",
    "出	2	1	5	53	4	10104	exit{}leave	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "休	9	1	6	60	4	10851	rest{}day off{}retire{}sleep	2	9/1/06 10:55 AM	8/22/06 10:09 PM",
    "見	147	1	7	63	4	2084	see{}hopes{}chances{}idea{}opinion{}look at{}visible	2	9/1/06 10:00 AM	8/22/06 10:09 PM",
    "左	48	1	5	75	4	7781	left	2	8/31/06 9:09 PM	8/22/06 10:09 PM",
    "右	30	1	5	76	4	9360	right	2	9/1/06 10:00 AM	8/24/06 10:55 PM",
    "名	36	1	6	82	4	9229	name{}noted{}distinguished{}reputation	2	8/31/06 9:09 PM	8/22/06 10:09 PM",
    "男	102	1	7	101	4	3972	male	2	8/31/06 9:09 PM	8/24/06 6:08 PM",
    "女	38	1	3	102	4	8446	woman{}female	2	9/1/06 10:55 AM	8/24/06 6:08 PM",
    "子	39	1	3	103	4	8326	child{}first sign of Chinese zodiac{}sign of the rat	2	9/1/06 10:00 AM	9/1/06 10:00 AM",
    "学	39	1	8	109	4	8241	study{}learning{}science	2	9/1/06 10:00 AM	8/24/06 6:08 PM",
    "校	75	1	10	115	4	5516	exam{}school{}printing{}proof{}correction	2	8/29/06 10:12 PM	8/24/06 6:08 PM",
    "車	159	1	7	133	4	1372	car	2	8/27/06 11:01 PM	8/24/06 6:08 PM",
    "気	84	1	6	134	4	5029	spirit{}mind	2	8/31/06 9:09 PM	8/24/06 6:08 PM",
    "天	1	1	4	141	4	8505	heavens{}sky{}imperial	2	9/1/06 10:00 AM	8/24/06 6:08 PM",
    "白	106	1	5	205	4	3830	white	2	9/1/06 10:00 AM	8/24/06 6:08 PM",
    "万	1	2	3	16	4	11505	ten thousand	2	8/31/06 9:09 PM	8/24/06 6:08 PM",
    "分	12	2	4	38	4	10054	part{}minute of time{}segment{}share{}degree{}one's lot{}duty{}understand{}know{}rate{}1%{}chances{}shaku/10	2	9/1/06 10:00 AM	8/24/06 6:08 PM",
    "国	31	2	8	40	4	8901	country	2	8/29/06 10:19 PM	8/24/06 6:08 PM",
    "時	72	2	10	42	4	5939	time{}hour	2	8/29/06 10:19 PM	8/24/06 10:55 PM",
    "間	169	2	12	43	4	599	interval{}space	2	8/31/06 9:09 PM	8/24/06 6:08 PM",
    "前	12	2	9	47	4	9885	in front{}before	2	9/1/06 10:00 AM	8/24/06 6:08 PM",
    "後	60	2	9	48	4	7286	behind{}back{}later	2	9/1/06 10:00 AM	8/24/06 6:08 PM",
    "午	4	2	4	49	4	9621	noon{}seventh sign of Chinese zodiac{}sign of the horse	2	9/1/06 10:00 AM	8/24/06 6:08 PM",
    "今	9	2	4	51	4	11006	now	2	8/29/06 10:19 PM	8/24/06 6:08 PM",
    "聞	169	2	14	64	4	2729	hear{}ask{}listen	2	8/31/06 9:09 PM	8/24/06 6:08 PM",
    "語	149	2	14	67	4	1784	word{}speech{}language	2	9/1/06 10:55 AM	8/24/06 6:08 PM",
    "行	144	2	6	68	4	2265	going{}journey	2	8/31/06 9:09 PM	8/24/06 6:08 PM",
    "来	4	2	7	69	4	5593	come{}due{}next{}cause{}become	2	9/1/06 10:55 AM	8/24/06 10:55 PM",
    "東	4	2	8	71	4	5585	east	2	9/1/06 10:55 AM	8/24/06 10:55 PM",
    "西	146	2	6	72	4	2155	west{}Spain	2	8/29/06 10:19 PM	8/24/06 10:55 PM",
    "北	21	2	5	73	4	9653	north	2	8/29/06 10:19 PM	8/24/06 10:55 PM",
    "南	24	2	9	74	4	9598	south	2	8/29/06 10:19 PM	8/24/06 10:55 PM",
    "外	36	2	5	83	4	8607	outside	2	9/1/06 10:55 AM	8/24/06 10:55 PM",
    "半	3	2	5	88	4	9613	half{}middle{}odd number{}semi-{}part-	2	9/1/06 10:00 AM	8/24/06 10:55 PM",
    "長	168	2	8	95	4	661	long{}leader	2	8/31/06 9:09 PM	8/24/06 10:55 PM",
    "電	173	2	13	108	4	392	electricity	2	9/1/06 10:00 AM	8/24/06 10:55 PM",
    "母	80	2	5	112	4	5139	mama{}mother	2	8/31/06 9:09 PM	8/26/06 3:30 AM",
    "父	88	2	4	113	4	4354	father	2	9/1/06 10:00 AM	8/26/06 3:30 AM",
    "毎	80	2	6	116	4	5128	every	2	9/1/06 10:00 AM	8/26/06 3:30 AM",
    "書	129	2	10	131	4	5827	write	2	8/29/06 10:19 PM	8/26/06 3:30 AM",
    "高	189	2	10	190	4	55	tall{}high{}expensive	2	9/1/06 10:55 AM	8/26/06 3:30 AM",
    "話	149	2	13	238	4	1825	tale{}talk	2	9/1/06 10:55 AM	8/26/06 3:30 AM",
    "読	149	2	14	244	4	1757	read	2	9/1/06 10:00 AM	8/26/06 3:30 AM",
    "友	29	2	4	264	4	9510	friend	2	9/1/06 10:55 AM	8/26/06 3:30 AM",
    "食	184	2	9	322	4	172	eat{}food	2	9/1/06 10:00 AM	8/27/06 12:38 AM",
    "何	9	2	7	390	4	10721	what	2	8/29/06 10:19 PM	8/27/06 12:38 AM"
];

const Kanji = csv.map(
    (entry, index) => {
        const cols = entry.split('\t');
        return {
            idx: index + 2,
            char: cols[0],
            jlpt: parseInt(cols[5])
        }
    }
)

export default Kanji;