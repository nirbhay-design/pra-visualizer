import React from 'react'
import './visual.css'
//impprt {useTable} from 'reac'
import {fifo,lru,opr,nru,random,lfu,mfu,sca,mru,wset} from './page'
import Idlepage from './Idlepage'
import CompareAlgorithms from './CompareAlgorithms'
// import {useState,useEffect} from 'react'



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


function Visualization({frames,refstr,alggo,flagg,mydata}) {
    const links= {
        FIFO:"https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/",
        LRU:"https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/",
        OPR:"https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/",
        NRU:"https://www.geeksforgeeks.org/not-recently-used-nru-page-replacement-algorithm/",
        MRU:"https://www.youtube.com/watch?v=H3BU_Do_l-Q",
        SCA:"https://www.geeksforgeeks.org/second-chance-or-clock-page-replacement-policy/",
        Clk:"it uses clk",
        RAN:"https://en.wikipedia.org/wiki/Page_replacement_algorithm",
        LFU:"https://en.wikipedia.org/wiki/Least_frequently_used",
        MFU:"https://prepinsta.com/operating-systems/page-replacement-algorithms/",
        Wait:"https://www.informit.com/articles/article.aspx?p=25260&seqNum=9#:~:text=In%20the%20purest%20form%20of,page%20containing%20the%20first%20instruction.",
    };
    
    const algodesc = {
        FIFO:"This is the simplest page replacement algorithm. In this algorithm, the operating system keeps track of all pages in the memory in a queue, the oldest page is in the front of the queue. When a page needs to be replaced page in the front of the queue is selected for removal. ",
        LRU:"In this algorithm page will be replaced which is least recently used in the past, before the current page. ",
        OPR:"In this algorithm, pages are replaced which would not be used for the longest duration of time in the future. ",
        NRU:"This algorithm removes a page at random from the lowest numbered non-empty class. Implicit in this algorithm is that it is better to remove a modified page that has not been referenced in atleast one clock tick than a clean page that is in heavy use. ",
        MRU:"Most recently used algorithm selects that page as victim page which is most recently used in the past. ",
        SCA:"In the Second Chance page replacement policy, we provide a second chance to the page using reference bit once a page hit is there we make the ref bit of of that page as 1 if it is 0, and again if this page needs to be replaced then we provide it a second chance by making it ref bit as 0 and replace some other page. ",
        Clk:"it uses clk",
        RAN:"it selects victim page randomly and replaces the page from that frame. ",
        LFU:"it select victim page which is least frequently used which means it keeps track of the frequency of pages so far and on page fault it replaces the page having least frequency so far. ",
        MFU:"it select victim page which is most frequently used which means it keeps track of the frequency of pages so far and on page fault it replaces the page having maximum frequency so far. ",
        Wait:"this is working set algorithm. ",
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
        fun=nru;
    }
    else if (alggo === "RAN"){
        fun=random;
    } else if (alggo === "LFU"){
        fun = lfu;
    } else if(alggo === "MFU") {
        fun = mfu;
    } else if(alggo === "SCA"){
        fun = sca;
    } else if (alggo === "MRU"){
        fun = mru;
    }
    else if(alggo==="Wait"){
        fun=wset;

    } else {
        fun = fifo;
    }
    const k=convert(refstr);
    const s1=fun(frames,k);
    var arr1=s1[0];
    var arr2=s1[1];
    var arr3 = s1[2];
    var miss=s1[3];
    for(let i=0;i<arr1.length;i++){
        if(arr2[i]===1)
            arr1[i].push("✓");
        else arr1[i].push("✗");

    }
    
    //var n=arr1.length;
    //var m=Number(frames);
    return (
        <div className="visualization__algorithms">
            {(flagg>=1)?<>
            <center><h2 style={{"text-decoration":"underline"}}> Page Replacement Algorithms </h2></center>
            <br/>
            <div className="algo__desc">
                <h2 className="algoo__head">Have a Look !</h2>
                <p className="algo__para">{algodesc[alggo]} Read more about it here: <a href={links[alggo]} style={{"color":"blue"}}>Visit</a></p>
            </div>
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
                    return <tr className="tablemyy" style={{"animation-delay":index+"s"}}> {items.map((item,ind)=>{
                        if(ind === items.length-1){
                            if (item === "✓"){
                                return <td className="tablemy__img1" >{item+`(${k[index]})`}</td>
                                
                            } else {
                                return <td className="tablemy__img2" >{item+`(${k[index]})`}</td>
                            }
                        } else{
                            if (item === -1){
                                return <td className="tablemyy" >Empty_Frame</td>
                            } else {
                                if (arr3[index] === -1)
                                    return <td className="tablemyy" >{item}</td>
                                else {
                                    if (arr3[index] === ind){
                                        return <td className="tablemyy" id="victim__page">{item + " (victim)"}</td>
                                    } else {
                                        return <td className="tablemyy" >{item}</td>
                                    }
                                }
                            }
                        }
                    })}</tr>
                    
                })}

                
            </table>
        
            <br/>

            {/* <div className="infoText"> */}
            <div className="table__summary" style={{"animation-duration":arr1.length+2+"s"}}>
                <h2> Summary Reports </h2>
                <div className="list__div">

                    <li>Frames are - {(frames.length >0)?frames:"nothing to show here"}</li>
                    <li>Reference String - {(refstr.length > 0)?refstr:"nothing to show here"}</li>
                    <li>Algorithm - {(alggo.length >0)?(alggo==="Wait")?"Working Set":alggo:"nothing to show here"} </li>
                    <li>No. of Page Hits - {(frames.length >0)?arr3.length-miss:"nothing to show here"} </li>
                    <li>Hit rate percentage - {(alggo.length >0)?(100-per(miss,arr2.length)).toFixed(2)+ "%":"NULL"} </li>
                    <li>No. of Page Faults - {(frames.length >0)?miss:"nothing to show here"} </li>
                    {/* <li>Page Faults percentage : {per(miss,arr2.length)}% <span class="extra"> It shows the percentage of total pages which resulted in page faults or page misses.</span> <br/></li>
                    <li>Hit rate percentage : {100-per(miss,arr2.length)}% <span class="extra"> It is the percentage of total pages which are in the memory when we access them i,e, the percentage of HIT pages.</span> <br/></li> */}
                    <li>Page Faults percentage - {(alggo.length >0)?per(miss,arr2.length) + "%":"NULL"} </li>
                </div>
            </div>
            </>:(flagg===0)?<div className="initial__heading">
                <Idlepage/>
                <h3>Hey! Let's Visualize Some Page Replacement Algorithms! </h3>
                <h3>Choose Your Favourite Algorithm For Visualization 😊</h3>

                <h4>Want to read more about it ? <a href="https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/">Visit</a> </h4>
                </div>:<CompareAlgorithms raiseflag={flagg} data={mydata}/>}
            {/* </div> */}
           
        </div>
    )
}

export default Visualization


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