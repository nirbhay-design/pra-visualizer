import React from 'react'
import './visual.css'
//impprt {useTable} from 'reac'
import {fifo,lru,opr} from './page'


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
    var arr=refstr.split(" ");
    var k=[];
    for(let i=0;i<arr.length;i++){
        k.push(Number(arr[i]));
    }

    return k;

}
function per(x,y){
    var a=(x*1.0)/y;
    return a*100;
}

function Visualization({frames,refstr,alggo}) {
    var fun;
    if(alggo==="FIFO"){
        fun=fifo;
    }
    else if(alggo==="LRU"){
        fun=lru;
    }
    else if(alggo==="OPR"){
        fun=opr;
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
        arr1[i].push("HIT");
        else arr1[i].push("MISS");

    }
    
    //var n=arr1.length;
    //var m=Number(frames);
    return (
        <div className="visualization__algorithms">
            <center><h1> Visualizer</h1></center>
            <br/>
            <table className="tablemy">
                {arr1.map((items,index)=>{
                    return <tr className="tablemy"> {items.map((item,ind)=>{
                        return <td className="tablemy">{item}</td>
                        })}</tr>

                })}

                
            </table>
            <br/>
            
            <li>Frames are : {(frames.length >0)?frames:"nothing to show here"} <br/></li>
            <li>Reference String: {(refstr.length > 0)?refstr:"nothing to show here"}<br/></li>
            <li> Algorithm : {(alggo.length >0)?alggo:"nothing to show here"}<br/></li>
            <li>No. of Page Faults : {miss}<br/></li>
            <li>Page Faults percentage : {per(miss,arr2.length)}%<br/></li>
            <li>Hit rate percentage: {100-per(miss,arr2.length)}%<br/></li>
           
        </div>
    )
}

export default Visualization
