import React from "react";

export default function BodyContent12() {
    return (
        <div className="body-content12">
            <div className="img-logo">
                {
                    content12Items.map((item) =>
                    <Content12Items key = {item.id}
                    URL = {item.URL}
                    />
                    )
                }
            </div>
        </div>
    )
}

const preURL = "https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client"
const title = "logo"

function Content12Items(props) {
    return (
        <img src={preURL + props.URL} alt={title}/>
    )
}

const content12Items = [
    {
        "id": 121,
        "URL": "1-150x150.png"
    },
    {
        "id": 122,
        "URL": "2-150x150.png"
    },
    {
        "id": 123,
        "URL": "3-132x150.png"
    },
    {
        "id": 124,
        "URL": "4.png"
    },
    {
        "id": 125,
        "URL": "5.png"
    },
    {
        "id": 126,
        "URL": "6.png"
    }
]