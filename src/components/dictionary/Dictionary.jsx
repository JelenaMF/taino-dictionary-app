/**import dependencies */
import { useEffect, useState} from 'react';

/** import components */
import {
    aWords
} from "../../data";

export default function Dictionary(){
    const [selected, setSelected] = useState('A');
    const [data, setData] = useState('');
    const letters = [ "A", "B", "Bo", "C", "Ch", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "Sh", "T", "U", "V", "W", "X", "Y", "Z" ]
    return(
        <div className="wrapper">
            <div className="letterLinks">
                <ul>
                    {letters.map((letter, i) => (
                        <li key={i}>
                            <a href="">{letter}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}