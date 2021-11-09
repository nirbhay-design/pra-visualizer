import './App.css';
import Algorithms from './Algorithms';
import Visualization from './Visualization';
import {useState} from 'react'

function App() {
  const [myframes,Setmframes] = useState("");
  const [myrefstr,Setmrefstr] = useState("");
  const [algo,Setmalgo] = useState("");
  return (
    <div className="my__div">
      <Algorithms Setmyframes={Setmframes} Setmyrefstr={Setmrefstr} Setmyalgo={Setmalgo}/>
      <Visualization frames={myframes} refstr={myrefstr} alggo={algo}/>
    </div>
  );
}export default App;
