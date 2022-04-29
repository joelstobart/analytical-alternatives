import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './whereandwhen.css';

function WhereAndWhen() {
    return (
        <div className="WhereAndWhen">
            <Typewriter
                options={{loop:true}}
                onInit={(typewriter)=> {
                    const date = new Date();
                    const dateString = date.toUTCString().toUpperCase()
                    typewriter
                        .typeString(dateString)
                        .pauseFor(600)
                        .deleteAll()
                        .typeString(" 30UXC9957009343")
                        .pauseFor(600)
                        .deleteAll()
                        .typeString("CENTRAL LONDON, ")
                        .pauseFor(300)
                        .typeString("UNITED KINGDOM")
                        .pauseFor(600)
                        .deleteAll()
                        .start();
                }}
            />
        </div>
    );
}

export default WhereAndWhen;