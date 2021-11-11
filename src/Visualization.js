import React from 'react'
import './visual.css'
//impprt {useTable} from 'reac'
import {fifo,lru,opr,nfu} from './page'


// function fifo(f,rs) {
//     var pg=[];
//     var ms=[];
//     //queue<int> q;
//     var q=[];
//     //vector<vector<int>> v(f,vector<int> (rs.size(),-1));
//     //const INT_MIN=-1000000;
//     //const INT_MAX=10000000;
    
//     //console.log(obj.length);
//     var v=[]
//     for(let i=0;i<f;i++){
//         v.push([]);
//         for(let j=0;j<rs.length;j++){
//             v[i].push(-1);

//         }
//     }
   
//     let miss =0;
//     let cycle = 0;
//     for (let i =0;i<rs.length;i++) {
//         var cur=[];
//         let page = rs[i];
//         let find=false;
//         let emp = false;
//         if (i !== 0) {
//             for (let j =0;j<f;j++) {
//                 v[j][i] = v[j][i-1];
//             }
//         }
        
        
//         for (let j =0;j<f;j++) {
//             if (v[j][i] !==-1 && v[j][i] === page) {
//                 find =true;
//                 break;
//             } else if (v[j][i] === -1){
//                 emp = true;
//             }
//         }
//         if (!find) {
//             q.push(page);
//             ms.push(0);
//             //process.stdout.write("0 ");
//             miss++;
//             if (emp) {
//                 v[cycle][i] = page;
//                 cycle = (cycle + 1)%f;
//             } else {
//                 let fif = q[0];
//                 q.shift();
//                 for (let ii =0;ii<f;ii++) {
//                     if (v[ii][i] === fif) {
//                         v[ii][i] = page; 
//                         break;
//                     }
//                 }
//             }
//             //replace page
//         }
//         else {
//             ms.push(1);
//             //process.stdout.write("1 ");
//         }
//         for(let j=0;j<f;j++){
//             cur.push(v[j][i]);
//         }
//         pg.push(cur); 
//     }
//     return [pg,ms];

// }

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
function per(x,y){
    var a=(x*1.0)/y;
    var b= a*100;
    return Math.round(b*100)/100;
}

function Visualization({frames,refstr,alggo,flagg}) {
    const algodesc = {
        "fifo":"This is the simplest page replacement algorithm. In this algorithm, the operating system keeps track of all pages in the memory in a queue, the oldest page is in the front of the queue. When a page needs to be replaced page in the front of the queue is selected for removal. ",
        "lru":"In this algorithm page will be replaced which is least recently used. ",
        "opr":"In this algorithm, pages are replaced which would not be used for the longest duration of time in the future. ",
        "nru":"This algorithm removes a page at random from the lowest numbered non-empty class. Implicit in this algorithm is that it is better to remove a modified page that has not been referenced in atleast one clock tick than a clean page that is in heavy use.",
        "sca":"In the Second Chance page replacement policy, the candidate pages for removal are considered in a round robin matter, and a page that has been accessed between consecutive considerations will not be replaced.",
    } 
    var fun;
    if(alggo==="FIFO"){
        fun=fifo;
    }
    else if(alggo==="LRU" ){
        fun=lru;
    }
    else if(alggo==="OPR"){
        fun=opr;
    }
    else if(alggo==="NRU"){
        fun=nfu;
    }
    else{
        fun=fifo;
    }
    const k=convert(refstr);
    const s1=fun(frames,k);
    var arr1=s1[0];
    var arr2=s1[1];
    var miss=s1[2];
    for(let i=0;i<arr1.length;i++){
        if(arr2[i]===1)
        arr1[i].push("✓");
        else arr1[i].push("✗");

    }
    
    //var n=arr1.length;
    //var m=Number(frames);
    return (
        <div className="visualization__algorithms">
            {(flagg>=1)?<><center><h1> Visualization </h1></center>
            <br/>
            <table className="tablemy">
                <tr className="tablemyyy"> 
                    {arr1[0].map((item,ind)=>{
                        if(ind === arr1[0].length-1){
                            return <td className="firsttd">{"Hit/Miss"}</td>
                            
                        }else {
                            return <td className="firsttd">{"frame"+ind}</td>

                        }
                    })}
                </tr>
                {arr1.map((items,index)=>{
                    return <tr className="tablemyy"> {items.map((item,ind)=>{
                        if(ind === items.length-1){
                            if (item === "✓"){
                                return <td className="tablemy__img1">{item}</td>
                                
                            } else {
                                return <td className="tablemy__img2">{item}</td>
                            }
                        } else{
                            if (item === -1){
                                return <td className="tablemyy">Empty_Frame</td>
                            } else {
                                return <td className="tablemyy">{item}</td>
                            }
                        }
                    })}</tr>
                    
                })}

                
            </table>
        
            <br/>

            {/* <div className="infoText"> */}
            <div className="table__summary">
                <h2> Summary Reports </h2>
                <div className="list__div">

                    <li>Frames are - {(frames.length >0)?frames:"nothing to show here"}</li>
                    <li>Reference String - {(refstr.length > 0)?refstr:"nothing to show here"}</li>
                    <li>Algorithm - {(alggo.length >0)?alggo:"nothing to show here"} </li>
                    <li>No. of Page Faults - {(frames.length >0)?miss:"nothing to show here"} </li>
                    {/* <li>Page Faults percentage : {per(miss,arr2.length)}% <span class="extra"> It shows the percentage of total pages which resulted in page faults or page misses.</span> <br/></li>
                    <li>Hit rate percentage : {100-per(miss,arr2.length)}% <span class="extra"> It is the percentage of total pages which are in the memory when we access them i,e, the percentage of HIT pages.</span> <br/></li> */}
                    <li>Page Faults percentage - {(alggo.length >0)?per(miss,arr2.length) + "%":"NULL"} </li>
                    <li>Hit rate percentage - {(alggo.length >0)?100-per(miss,arr2.length)+ "%":"NULL"} </li>
                </div>
            </div>
            </>:<div className="initial__heading"><h3>Hey! Let's Visualize Some Page Replacement Algorithms! 
                </h3>
                <h3>Choose Your Favourite Algorithm For Visualization 😊</h3>

                <h4>Want to read more about it ? <a href="https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/">Visit</a> </h4>
                </div>}
            {/* </div> */}
           
        </div>
    )
}

export default Visualization
