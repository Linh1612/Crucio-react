import React from "react";
import { useState, useEffect } from "react";

export default function BodyContent7(){

    const [start, setStart] = useState(false);
    useEffect(()=>{
        const handleScoll = () => {
            if(window.scrollY >= 3612){
                setStart(true)
            } 
        }
        window.addEventListener('scroll',handleScoll)
    })

    return(
        <div className="body-content7">
            {start && (
                    content7Items.map((item) =>
                    <Content7Items key = {item.id}
                    className = {item.className}
                    count = {item.count}
                    paragraph = {item.paragraph}
                    />
                    )
            )}
        </div>
    )
}

function Content7Items(props) {
    return (
        <div className={props.className}>
            <h3 className={props.count}> </h3>
            <h4>{props.paragraph}</h4>
        </div>
    )
}

const content7Items = [
    {
        "id":71,
        "className": "parameter",
        "count": "count1",
        "paragraph": "Clients",
    },
    {
        "id":72,
        "className": "parameter",
        "count": "count2",
        "paragraph": "Projects",
    },
    {
        "id":73,
        "className": "parameter",
        "count": "count3",
        "paragraph": "Awards",
    },
    {
        "id":74,
        "className": "parameter",
        "count": "count4",
        "paragraph": "Coffee",
    }
]
