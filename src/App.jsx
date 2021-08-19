/** dependency imports */
import './App.scss';


/** import components */
import Search from './components/search/Search';
import Dictionary from './components/dictionary/Dictionary';

function App() {
  //setting up initial state using react hooks "useState"
 // const [data, setData] = useState('');
  
  //function to fetch information on button click setting the data accordingly 
  
  return (
    <div className="App">
      <h1>The Taino Dictionary</h1>
      <div className="sections">
      <Dictionary />
      <Search />
      </div>
      
    </div>
  );
}

export default App;
