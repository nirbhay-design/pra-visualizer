import React from 'react'
import './algo.css'
import {useState} from 'react'
import {fifo,lru,opr,nru,random,lfu,mfu,sca,mru,wset} from './page'
function convert(refstr){
    refstr=refstr.trim();
    var arr=refstr.split(" ");
    var k=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=="" && arr[i]!==" "){
        k.push(Number(arr[i]));
        }
    }
    return k;

}


function Algorithms({Setmyframes,Setmyrefstr,Setmyalgo,myflag,setflag,daata,setdata}) {
    const [frames,Setframes] = useState("");
    const [refstr,Setrefstr] = useState("");
    const visualizebutton = (e,name_algo)=>{
        e.preventDefault();
        Setmyframes(frames);
        Setmyrefstr(refstr);
        Setmyalgo(name_algo);
        // console.log(name_algo);
        // console.log(refstr); 
        // console.log(frames);
        if(frames !== "" && refstr !== ""){
            // setflag(0);
            setflag(((myflag<0)?0:myflag)+1);
        }
        // Setrefstr("");
        // Setframes("");
    }
    const Reset = (e)=>{
        e.preventDefault();
        setflag(0);
        Setframes("");
        Setrefstr("");
        setdata([]);

    }
    const Resett = (e)=>{
        e.preventDefault();
        Setmyframes(frames);
        Setmyrefstr(refstr);
        if(frames !== "" && refstr !== ""){    
            var namealgos = ["fifo","lru","opr","nru","ran","lfu","mfu","sca","mru","wset"];
            const myalgos= [fifo,lru,opr,nru,random,lfu,mfu,sca,mru,wset];
            const myk=convert(refstr);
            var mytempdata = []
            for (var i = 0;i<myalgos.length;i++){
                const arre = myalgos[i](frames,myk);
                const obj = {name:namealgos[i],miss:arre[3],hit:myk.length-arre[3]};
                mytempdata.push(obj);
            }
            setdata(mytempdata);
            // console.log(daata);
            setflag(-1);
        } else {
            setflag(-2);
        }
    }
    
    return (
        <div className="algorithms__choice">
            <div className="input__algorithms">
                <input type="text" value ={frames} onChange={(e)=>{Setframes(e.target.value)}} placeholder="Enter Number of Frames"/>
                <input type="text" value ={refstr} onChange={(e)=>{Setrefstr(e.target.value)}} placeholder="Enter Reference List (Space Separated)"/>
            </div>
            <div className="name__algorithms">
                <button className="but" id = "b1" onClick={(e)=>{visualizebutton(e,"FIFO")}}>First In First Out Algorithm</button>
                <button className="but" id = "b2" onClick={(e)=>{visualizebutton(e,"LRU")}}>Least Recetntly Used Algorithm</button>
                <button className="but" id = "b5" onClick={(e)=>{visualizebutton(e,"MRU")}}>Most Recently Used Algorithm</button>
                <button className="but" id = "b3" onClick={(e)=>{visualizebutton(e,"OPR")}}>Optimal Page Replacement Algorithm</button>
                <button className="but" id = "b4" onClick={(e)=>{visualizebutton(e,"NRU")}}>Not Recently Used Algorithm</button>
                <button className="but" id = "b8" onClick={(e)=>{visualizebutton(e,"RAN")}}>Random Page Replacement Algorithm</button>
                <button className="but" id = "b9" onClick={(e)=>{visualizebutton(e,"LFU")}}>Least Frequently Used Algorithm</button>
                <button className="but" id = "b10" onClick={(e)=>{visualizebutton(e,"MFU")}}>Most Frequently Used Algorithm</button>
                <button className="but" id = "b6" onClick={(e)=>{visualizebutton(e,"SCA")}}>Second Chance Algorithm</button>
                {/* <button className="but" id = "b7" onClick={(e)=>{visualizebutton(e,"Clk")}}>Clock Page Replacement Algorithm</button> */}
                <button className="but" id = "b11" onClick={(e)=>{visualizebutton(e,"Wait")}}>Working Set Page Replacement Algorithm</button>
                <button className="but2" onClick={(e)=>{Resett(e)}}>Compare Algorithms</button>
                <button className="but1" onClick={(e)=>{Reset(e)}}>Reset</button>
            </div>
            <div className="description__algorithms">

            </div>
        </div>
    )
}

export default Algorithms
