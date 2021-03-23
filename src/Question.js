import React, { useState } from "react";

const Question = (props) => {

    return (
        <div>
            <form>
                <div className="question Jpan" lang="ja">
                    <ruby>
                        今
                        <rp>(</rp>
                        <rt>こん</rt>
                        <rp>)</rp>
                    </ruby>
                    <ruby>
                        日
                        <rp>(</rp>
                        <rt>にち</rt>
                        <rp>)</rp>
                    </ruby>
                    は
                </div>
                <input type="text" />
                <input type="submit" value="Check" />
            </form>
            <button>Proceed</button>
        </div>


    )
}

export default Question