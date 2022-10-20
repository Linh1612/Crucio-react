import React from "react";

export default function BodyContent7(){
    return(
        <div className="body-content7">
            {
                content7Items.map((item) =>
                <Content7Items key = {item.id}
                className = {item.className}
                headline = {item.headline}
                paragraph = {item.paragraph}
                />
                )
            }
        </div>
    )
}

function Content7Items(props) {
    return (
        <div className={props.className}>
            <h3>{props.headline}</h3>
            <h4>{props.paragraph}</h4>
        </div>
    )
}

const content7Items = [
    {
        "id":71,
        "className": "parameter",
        "headline": "150",
        "paragraph": "Clients",
    },
    {
        "id":72,
        "className": "parameter",
        "headline": "620",
        "paragraph": "Projects",
    },
    {
        "id":73,
        "className": "parameter",
        "headline": "25",
        "paragraph": "Awards",
    },
    {
        "id":74,
        "className": "parameter",
        "headline": "940",
        "paragraph": "Coffee",
    }
]