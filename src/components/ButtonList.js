import React from "react";
import Button from "./Button";


const buttonList = ["All" , "Indian soap operas", "React" , "Web Development", "Live", "Java" , "DSA", "Game show", "Kitchen", "Comedy", "Tourism", "Recently uploded", "New to you", "Watched"]



const ButtonList = () => {
    return(
        <div className = "flex w-[1300px] overflow-x-auto no-scrollbar m-2 px-1">
           {buttonList.map(btn => <Button key = {btn} name = {btn}/>)}
        </div>
    )
}

export default ButtonList;
