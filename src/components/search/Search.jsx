/**imported dependencies */
import {useState} from "react";
import { FaSearch } from "react-icons/fa";

/** imported components */
import './search.scss';


/** function Search creates a search input 
 * 
 * sets up intial state using react hooks 'useState' 
 */
export default function Search(){
    const [searchWord, setSearchWord] = useState('');
    

    return (
        <div className="searchBox">
            {/**take user input */}
            <input type="text"
            placeholder="Search..."
            onChange={(e) => {
                setSearchWord(e.target.value);
            }} />
            <button onClick={ () => {
                /**call function that gets data */
            }}>
                <FaSearch size="20px" />
            </button>
        </div>
    )
}