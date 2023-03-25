import React, {useState } from "react";
import Card from "./Card";

function List() {

    const users = [
        {
            Name: "phing",
            Job: "Student",
            Hobby: "Listen to music"
        },
        {
            Name: "phing",
            Job: "Student",
            Hobby: "Listen to music"
        },
        {
            Name: "phing",
            Job: "Student",
            Hobby: "Listen to music"
        },

    ]
    return(
        <div className="List">
            {users.map((item, index) => {
                return <Card newuser={item} key= {index}/>
            })}
        </div>
    )


    
}
export default List;

