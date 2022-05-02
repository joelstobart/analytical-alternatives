import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './whereandwhen.css';

function getDate() {
    return new Date()
        .toLocaleString('en-GB', { hour:'2-digit', minute:'2-digit', second:'2-digit', timeZoneName: 'short', year: 'numeric', month: 'short', day: '2-digit' })
        .toUpperCase();
}

function WhereAndWhen() {
    return (
        <div className="WhereAndWhen">
            <Typewriter
                options={{loop:true, devMode:true}}
                onInit={(typewriter)=> {
                    typewriter
                        .typeString(getDate())
                        .pauseFor(600)
                        .deleteAll()
                        .typeString("30UXC9957009343")
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