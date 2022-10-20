import React from "react";

export default function BodyContent3(){
    return(
        <div className="body-content3"> {
            content3Items.map((item) =>
            <Content3Items key = {item.id}
            className = {item.className}
            backgroundColor = {item.background}
            headline = {item.headline}
            paragraph = {item.paragraph}
            />
            )
        }
        </div>
    )
 }

 function Content3Items(props) {
    return (
        <div className={props.className}>
            <h3>{props.headline}</h3>
            <p>{props.paragraph}</p>
        </div>
    )
 }

const content3Items = [
    {
       "id":31,
       "className": "row bgcolor1",
       "background": "#AD00FF",
       "headline": "RESPONSIVE",
       "paragraph": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.",
    },
    {
       "id":32,
       "className": "row bgcolor2",
       "background": "#8200BF",
       "headline": "CUSTOMIZABLE",
       "paragraph": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.",
    },
    {
       "id":33,
       "className": "row bgcolor3",
       "background": "#56007F",
       "headline": "MODERN",
       "paragraph": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.",
    }
 ]