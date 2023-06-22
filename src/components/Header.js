import React from "react";
import logo from "../Images/face.png"


export default function Header(){
    return(
        <div className="header">
            <img src={logo} alt="Logo" className="logo-img"></img>
            <h1 className="logo-name">Meme Generator</h1>
        </div>
    )
}