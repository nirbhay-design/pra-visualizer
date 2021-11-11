import React from 'react'
import './algo.css'
import {useState} from 'react'

function Algorithms({Setmyframes,Setmyrefstr,Setmyalgo,myflag,setflag}) {
    const [frames,Setframes] = useState("");
    const [refstr,Setrefstr] = useState("");
    const visualizebutton = (e,name_algo)=>{
        e.preventDefault();
        Setmyframes(frames);
        Setmyrefstr(refstr);
        Setmyalgo(name_algo);
        console.log(name_algo);
        console.log(refstr); 
        console.log(frames);
        if(frames !== "" && refstr !== ""){
            setflag(myflag+1);
        }
        // Setrefstr("");
        // Setframes("");
    }
    const Reset = (e)=>{
        e.preventDefault();
        setflag(0);
        Setframes("");
        Setrefstr("");

    }
    return (
        <div className="algorithms__choice">
            <div className="input__algorithms">
                <input type="text" value ={frames} onChange={(e)=>{Setframes(e.target.value)}} placeholder="Enter Number of Frames"/>
                <input type="text" value ={refstr} onChange={(e)=>{Setrefstr(e.target.value)}} placeholder="Enter Reference List (Space Separated)"/>
            </div>
            <div className="name__algorithms">
                <button className="but" onClick={(e)=>{visualizebutton(e,"FIFO")}}>First In First Out Algorithm</button>
                <button className="but" onClick={(e)=>{visualizebutton(e,"LRU")}}>Least Recetntly Used Algorithm</button>
                <button className="but" onClick={(e)=>{visualizebutton(e,"OPR")}}>Optimal Page Replacement Algorithm</button>
                <button className="but" onClick={(e)=>{visualizebutton(e,"NRU")}}>Not Recently Used Algorithm</button>
                <button className="but" onClick={(e)=>{visualizebutton(e,"SCA")}}>Second Chance Algorithm</button>
                <button className="but" onClick={(e)=>{visualizebutton(e,"Clk")}}>Clock</button>
                <button className="but" onClick={(e)=>{visualizebutton(e,"Wait")}}>Waiting</button>
                <button className="but1" onClick={(e)=>{Reset(e)}}>Reset</button>
            </div>
            <div className="description__algorithms">

            </div>
        </div>
    )
}

export default Algorithms
