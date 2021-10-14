import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import './searchBarAndButton.css';

export default function searchBarAndButton ({keywords}) {
    const enteredKeywords = {} //replace with a call to the selector

    return (
        <section>
            <li>
               //an onClick on the button will go here
               {} //replace with api for search results consisting of a list of articles 
            </li>
        </section>
    )
}


