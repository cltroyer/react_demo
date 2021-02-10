import './App.css';
import Local from './Local';


const city = ['Tampa', 'Riverside', 'Montgomery','Memphis','Birmingham','Pittsburgh']
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
 
  {city.map((city) => {
    return( <Local key={city} name = {city}/>)
  })}
<Local/>
    </div>
  );
}

export default App;
