import React from "react";
import { useState, useEffect } from "react";

export default function BodyContent1(){

    const [gototop, setGototop] = useState(false);
    useEffect(()=>{
        const handleScoll = () => {
            if(window.scrollY >= 500){
                setGototop(true)
            } else {
                setGototop(false)
            }
        }
        window.addEventListener('scroll',handleScoll)
    })

    return(
       <div id="home" className="body-content1">
            <div className="text-center">
                <h1>CRUCIO</h1>
                <hr/>
                <h2>POWERFUL WEBSITES</h2>
            </div>
            <div className="content-arrow"></div>
            {gototop && (
                <a href="#home">
                    <div className="arrow"
                        style = {{
                            position: 'fixed',
                            right: 20,
                            bottom: 20,
                        }}
                    >
                    </div>
                </a>    
            )}
        </div>
    )
}