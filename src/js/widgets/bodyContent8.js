import React from "react";

export default function BodyContent8(){
    return(
        <div className="body-content8">
            <div className="text-center">
                <h2>OUR PORTFOLIO</h2>
                <hr/>
            </div>
            <div className="taskbar">
                <ul>
                    <li><a href="#all">All</a></li>
                    <li><a href="#graphicDesign">Graphic Design</a></li>
                    <li><a href="#webDesign">Web Design</a></li>
                    <li><a href="#webDevelopment">Web Development</a></li>
                </ul>
            </div>
            <div className="works">
                {
                    content8Items.map((item) =>
                    <Content8Items key = {item.id}
                    parent = {item.parent}
                    father = {item.father}
                    children = {item.children}
                    headline = {item.headline}
                    paragraph = {item.paragraph}
                />
                )
                }
            </div>
            <div className="bg-btn">
					<button className="btn">LOAD MORE</button>
            </div>
        </div>
    )
}

function Content8Items (props) {
    return (
        <div className={props.parent}>
            <div className={props.father}>
                <div className={props.children}>
                    <h2>{props.headline}</h2>
                    <p>{props.paragraph}</p>
                </div>
            </div>
        </div>
    )
}

const content8Items = [
    {
        "id": 81,
        "parent": "work-1",
        "father": "bg-1",
        "children": "work-info",
        "headline": "Project #1",
        "paragraph": "Project Description",
    },
    {
        "id": 82,
        "parent": "work-2",
        "father": "bg-2",
        "children": "work-info",
        "headline": "Project #2",
        "paragraph": "Project Description",
    },
    {
        "id": 83,
        "parent": "work-3",
        "father": "bg-3",
        "children": "work-info",
        "headline": "Project #3",
        "paragraph": "Project Description",
    },
    {
        "id": 84,
        "parent": "work-4",
        "father": "bg-4",
        "children": "work-info",
        "headline": "Project #4",
        "paragraph": "Project Description",
    },
    {
        "id": 85,
        "parent": "work-5",
        "father": "bg-5",
        "children": "work-info",
        "headline": "Project #5",
        "paragraph": "Project Description",
    },
    {
        "id": 86,
        "parent": "work-6",
        "father": "bg-6",
        "children": "work-info",
        "headline": "Project #6",
        "paragraph": "Project Description",
    },
    {
        "id": 87,
        "parent": "work-7",
        "father": "bg-7",
        "children": "work-info",
        "headline": "Project #7",
        "paragraph": "Project Description",
    },
    {
        "id": 88,
        "parent": "work-8",
        "father": "bg-8",
        "children": "work-info",
        "headline": "Project #8",
        "paragraph": "Project Description",
    }
]