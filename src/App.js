import './App.css';
import Algorithms from './Algorithms';
import Visualization from './Visualization';
import {useState} from 'react'

function App() {
  const [myframes,Setmframes] = useState("");
  const [myrefstr,Setmrefstr] = useState("");
  const [algo,Setmalgo] = useState("");
  const [flag,Setflag] = useState(0);
  const [data,Setdata] = useState([]);
  return (
    <div className="my__div">
      <Algorithms Setmyframes={Setmframes} Setmyrefstr={Setmrefstr} Setmyalgo={Setmalgo} myflag={flag} setflag = {Setflag} daata={data} setdata = {Setdata}/>
      <Visualization frames={myframes} refstr={myrefstr} alggo={algo} flagg={flag} mydata={data}/>
    </div>
  );
}export default App;
