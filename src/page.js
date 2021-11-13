function random(f,rs){
    var pg=[];
    var ms=[];
    var v=[]
    var victim=[]
    for(let i=0;i<f;i++){
        v.push([]);
        for(let j=0;j<rs.length;j++){
            v[i].push(-1);

        }
    }
    var miss=0;
    var cycle =0;

    for(let i=0;i<rs.length;i++){
        var cur=[];
        let page=rs[i];
        let find=0;
        let emp=0;
        if(i!==0){
            for(let j=0;j<f;j++){
                v[j][i]=v[j][i-1];
            }
        }
        for (let j =0;j<f;j++) {
           
            if (v[j][i] !==-1 && v[j][i] === page) {
                find =1;
                break;
            } else if (v[j][i] === -1){
                emp = 1;
            }
        }

        if (find!==1) {
            ms.push(0);
            miss=miss+1;
            if (emp===1) {
                victim.push(-1);
                v[cycle][i] = page;
                cycle = (cycle + 1)%f;
                
            } else {
                let imd = Math.floor(Math.random()*f);
                victim.push(imd);
                // console.log("chosen random page:"+imd);
                v[imd][i] = page;
            }
        }
        else {
            victim.push(-1);
            ms.push(1);
        } 
        for(let j=0;j<f;j++){
            cur.push(v[j][i]);
        }
        pg.push(cur);
    }
    // console.log(pg);
    // console.log(victim);
    return [pg,ms,victim,miss];
}

function fifo(f,rs) {
    var pg=[];
    var ms=[];
    //queue<int> q;
    var q=[];
    var victim=[];
    //vector<vector<int>> v(f,vector<int> (rs.size(),-1));
    //const INT_MIN=-1000000;
    //const INT_MAX=10000000;
    
    //console.log(obj.length);
    var v=[]
    for(let i=0;i<f;i++){
        v.push([]);
        for(let j=0;j<rs.length;j++){
            v[i].push(-1);

        }
    }
   
    let miss =0;
    let cycle = 0;
    for (let i =0;i<rs.length;i++) {
        
        var cur=[];
        let page = rs[i];
        let find=false;
        let emp = false;
        if (i !== 0) {
            for (let j =0;j<f;j++) {
                v[j][i] = v[j][i-1];
            }
        }
        
        
        for (let j =0;j<f;j++) {
            if (v[j][i] !==-1 && v[j][i] === page) {
                find =true;
                break;
            } else if (v[j][i] === -1){
                emp = true;
            }
        }
        if (!find) {
            q.push(page);
            ms.push(0);
            //process.stdout.write("0 ");
            miss++;
            if (emp) {
                victim.push(-1);
                v[cycle][i] = page;
                cycle = (cycle + 1)%f;
            } else {
                let fif = q[0];
                q.shift();
                for (let ii =0;ii<f;ii++) {
                    if (v[ii][i] === fif) {
                        victim.push(ii);
                        v[ii][i] = page; 
                        break;
                    }
                }
            }
            //replace page
        }
        else {
            victim.push(-1);
            ms.push(1);
            //process.stdout.write("1 ");
        }
        for(let j=0;j<f;j++){
            cur.push(v[j][i]);
        }
        pg.push(cur); 
    }
    
    // console.log(victim);
    return [pg,ms,victim,miss];

}


function lru(f,rs){
    const INT_MIN=-100000;
    const INT_MAX=100000;
    //console.log(INT_MIN);
    var pg=[];
    var ms=[];
    var victim = [];
    //const INT_MIN=-1000000;
    //const INT_MAX=10000000;
    var v=[]
    for(let i=0;i<f;i++){
        v.push([]);
        for(let j=0;j<rs.length;j++){
            v[i].push(-1);

        }
    }
    //console.log(v[0][0]);
    //console.log(v[0].length);
    var miss=0;

    var cycle =0;
    //console.log(rs.length);
    for(let i=0;i<rs.length;i++){
        var cur=[];
        //console.log(i);
        
        let page=rs[i];
        //console.log(page);
        let find=0;
        let emp=0;
        if(i!==0){
            for(let j=0;j<f;j++){
                v[j][i]=v[j][i-1];
            }
        }
        // for(let j=0;j<f;j++){
        //     process.stdout.write(v[j][i]+" ");
        // }
        // console.log("");
        for (let j =0;j<f;j++) {
           
            if (v[j][i] !==-1 && v[j][i] === page) {
                find =1;
                break;
            } else if (v[j][i] === -1){
                emp = 1;
            }
        }
        //console.log(emp,find);
        if (find!==1) {
            ms.push(0);
            //console.log("0 ");
            //process.stdout.write("0 ");
            miss=miss+1;
            if (emp===1) {
                //console.log("cycle" +cycle);
                victim.push(-1);
                v[cycle][i] = page;
                cycle = (cycle + 1)%f;
                
            } else {
                let imd = -1;
                let maxdis = INT_MIN;
                for (let m1 = 0;m1<f;m1++) {
                    let dis = 0;
                    let b = false;
                    for (let p1 = i-1;p1>-1;p1--) {
                        let val = rs[p1];
                        dis++;
                        if (val === v[m1][i]) {
                            b=true;
                            break;
                        }
                    }
                    if (!b) {
                        dis = INT_MAX;
                    }
                    if (dis > maxdis) {
                        maxdis = dis;
                        imd = m1;
                    }
                }
                if(imd!==-1){
                    v[imd][i] = page;
                }
                victim.push(imd);
            }
            //replace page
        }
        else {
            victim.push(-1);
            ms.push(1);
            //console.log("1 ");
            //process.stdout.write("1 ");
        } 
        for(let j=0;j<f;j++){
            cur.push(v[j][i]);
        }
        pg.push(cur);
       
        
      
    }
    // console.log(victim);
    return [pg,ms,victim,miss];
}
function opr(f,rs){
    const INT_MIN=-100000;
    const INT_MAX=100000;
//console.log(INT_MIN);
    var pg=[];
    var ms=[];
    var v=[]
    var victim = [];
    for(let i=0;i<f;i++){
        v.push([]);
        for(let j=0;j<rs.length;j++){
            v[i].push(-1);

        }
    }
    
    let miss =0;
    let cycle = 0;
    for (let i =0;i<rs.length;i++) {
        var cur=[];
        let page = rs[i];
        let find=false;
        let emp = false;
        if (i !== 0) {
            for (let j =0;j<f;j++) {
                v[j][i] = v[j][i-1];
            }
        }
        for (let j =0;j<f;j++) {
            if (v[j][i] !==-1 && v[j][i] === page) {
                find =true;
                break;
            } else if (v[j][i] === -1){
                emp = true;
            }
        }
        if (!find) {
            ms.push(0);
            //cout << "0 ";
            //process.stdout.write("0 ");
            miss++;
            if (emp) {
               
                victim.push(-1);
                v[cycle][i] = page;
                cycle = (cycle + 1)%f;
            } else {
                let imd =-1;

                let maxdis = INT_MIN;
                for (let m = 0;m<f;m++) {
                    let dis = 0;
                    let b = false;
                    for (let p = i+1;p<rs.length;p++) {
                        let val = rs[p];
                        dis++;
                        if (val === v[m][i]) {
                            b=true;
                            break;
                        }
                    }
                    if (!b) {
                        dis = INT_MAX;
                    }
                    if (dis > maxdis) {
                        maxdis = dis;
                        imd = m;
                    }
                }
                if(imd!==-1) v[imd][i] = page;
                victim.push(imd);                
            }
            //replace page
        }
        else {
            victim.push(-1);
            ms.push(1);
            //process.stdout.write("1 ");
        } 
        for(let j=0;j<f;j++){
            cur.push(v[j][i]);
        }
        pg.push(cur);
    }
    // console.log(victim);
    return [pg,ms,victim,miss];
}
function nru(f,rs){
    //console.log(INT_MIN);
        var pg=[];
        var ms=[];
        var v=[];
        var victim = [];
        for(let i=0;i<f;i++){
            v.push([]);
            for(let j=0;j<rs.length;j++){
                v[i].push(-1);
    
            }
        }
        var ref=[];
        var mod=[];
        for(let j=0;j<f;j++){
            ref.push(0);
            mod.push(0);
        }
        let miss =0;
        let cycle = 0;
        for (let i =0;i<rs.length;i++) {
            var cur=[];
            let page = rs[i];
            let find=false;
            let emp = false;
            if (i !== 0) {
                for (let j =0;j<f;j++) {
                    v[j][i] = v[j][i-1];
                }
            }
            let pos=-1;
            for (let j =0;j<f;j++) {
                if (v[j][i] !==-1 && v[j][i] === page) {
                    pos=j;
                    find =true;
                    break;
                } else if (v[j][i] === -1){
                    emp = true;
                }
            }
            if (find!==true) {
                ms.push(0);
                //console.log("0 ");
                //process.stdout.write("0 ");
                miss=miss+1;
                if (emp===true) {
                    //console.log("cycle" +cycle);
                    v[cycle][i] = page;
                    //mod[cycle]=1;
                    ref[cycle]=1;
                    victim.push(-1);
                    cycle = (cycle + 1)%f;
                    
                } else {
                    let imd = -1;
                    var v1=[];
                    var v2=[];
                    //var v3=[];
                    for(let j=0;j<f;j++){
                        if(ref[i]===1 && mod[i]===0){
                            v1.push(i);
                        }
                        else{
                            v2.push(i);
                        }
                    }
                    if(v1.length>0){
                        var n=v1.length;
                        let rn=Math.floor(Math.random()*n);
                        imd=rn;
                    }
                    else{
                        var n1=v2.length;
                        let rn1=Math.floor(Math.random()*n1);
                        imd=rn1;

                    }
                 
                    if(imd!==-1)v[imd][i] = page;
                    victim.push(imd);
                }
                //replace page
            }
            else {
                ms.push(1);
                mod[pos]=1;
                victim.push(-1);
                //console.log("1 ");
                //process.stdout.write("1 ");
            } 
            for(let j=0;j<f;j++){
                cur.push(v[j][i]);
            }
            pg.push(cur);
        }
        console.log(victim);
        return [pg,ms,victim,miss];


}

function lfu(f,rs){
    const INT_MIN=-100000;
    const INT_MAX=100000;
    //console.log(INT_MIN);
    var pg=[];
    var ms=[];
    var victim = [];
    var dict = {};
    //const INT_MIN=-1000000;
    //const INT_MAX=10000000;
    var v=[]
    for(let i=0;i<f;i++){
        v.push([]);
        for(let j=0;j<rs.length;j++){
            v[i].push(-1);

        }
    }
    //console.log(v[0][0]);
    //console.log(v[0].length);
    var miss=0;

    var cycle =0;
    //console.log(rs.length);
    for(let i=0;i<rs.length;i++){
        var cur=[];
        //console.log(i);
        
        let page=rs[i];
        //console.log(page);
        if (dict[page]===undefined){
            dict[page] = 1;
        } else {
            dict[page]+= 1;
        }
        let find=0;
        let emp=0;
        if(i!==0){
            for(let j=0;j<f;j++){
                v[j][i]=v[j][i-1];
            }
        }
        // for(let j=0;j<f;j++){
        //     process.stdout.write(v[j][i]+" ");
        // }
        // console.log("");
        for (let j =0;j<f;j++) {
           
            if (v[j][i] !==-1 && v[j][i] === page) {
                find =1;
                break;
            } else if (v[j][i] === -1){
                emp = 1;
            }
        }
        //console.log(emp,find);
        if (find!==1) {
            ms.push(0);
            //console.log("0 ");
            //process.stdout.write("0 ");
            miss=miss+1;
            if (emp===1) {
                //console.log("cycle" +cycle);
                victim.push(-1);
                v[cycle][i] = page;
                cycle = (cycle + 1)%f;
                
            } else {
                var imd=-1;
                var minn = INT_MAX;
                for (let ii=0;ii<f;ii++){
                    if (dict[v[ii][i]] < minn){
                        minn = dict[v[ii][i]];
                        imd = ii;
                    }
                }
                dict[v[imd][i]] = 0;
                v[imd][i] = page;
                victim.push(imd);
            }
            //replace page
        }
        else {
            victim.push(-1);
            ms.push(1);
            //console.log("1 ");
            //process.stdout.write("1 ");
        } 
        for(let j=0;j<f;j++){
            cur.push(v[j][i]);
        }
        pg.push(cur);
       
        
      
    }
    // console.log(pg);
    // console.log(victim);
    return [pg,ms,victim,miss];
}

function mfu(f,rs){
    const INT_MIN=-100000;
    const INT_MAX=100000;
    //console.log(INT_MIN);
    var pg=[];
    var ms=[];
    var victim = [];
    var dict = {};
    //const INT_MIN=-1000000;
    //const INT_MAX=10000000;
    var v=[]
    for(let i=0;i<f;i++){
        v.push([]);
        for(let j=0;j<rs.length;j++){
            v[i].push(-1);

        }
    }
    //console.log(v[0][0]);
    //console.log(v[0].length);
    var miss=0;

    var cycle =0;
    //console.log(rs.length);
    for(let i=0;i<rs.length;i++){
        var cur=[];
        //console.log(i);
        
        let page=rs[i];
        //console.log(page);
        if (dict[page]===undefined){
            dict[page] = 1;
        } else {
            dict[page]+= 1;
        }
        let find=0;
        let emp=0;
        if(i!==0){
            for(let j=0;j<f;j++){
                v[j][i]=v[j][i-1];
            }
        }
        // for(let j=0;j<f;j++){
        //     process.stdout.write(v[j][i]+" ");
        // }
        // console.log("");
        for (let j =0;j<f;j++) {
           
            if (v[j][i] !==-1 && v[j][i] === page) {
                find =1;
                break;
            } else if (v[j][i] === -1){
                emp = 1;
            }
        }
        //console.log(emp,find);
        if (find!==1) {
            ms.push(0);
            //console.log("0 ");
            //process.stdout.write("0 ");
            miss=miss+1;
            if (emp===1) {
                //console.log("cycle" +cycle);
                victim.push(-1);
                v[cycle][i] = page;
                cycle = (cycle + 1)%f;
                
            } else {
                var imd=-1;
                var maxx = INT_MIN;
                for (let ii=0;ii<f;ii++){
                    if (dict[v[ii][i]] > maxx){
                        maxx = dict[v[ii][i]];
                        imd = ii;
                    }
                }
                dict[v[imd][i]] = 0;
                v[imd][i] = page;
                victim.push(imd);
            }
            //replace page
        }
        else {
            victim.push(-1);
            ms.push(1);
            //console.log("1 ");
            //process.stdout.write("1 ");
        } 
        for(let j=0;j<f;j++){
            cur.push(v[j][i]);
        }
        pg.push(cur);
       
        
      
    }
    console.log(pg);
    // console.log(victim);
    return [pg,ms,victim,miss];
}


function sca(f,rs){
    const INT_MIN=-100000;
    const INT_MAX=100000;
    var que =[]; 
    //console.log(INT_MIN);
    var pg=[];
    var ms=[];
    var victim = [];
    var dict = {};
    //const INT_MIN=-1000000;
    //const INT_MAX=10000000;
    var v=[]
    for(let i=0;i<f;i++){
        v.push([]);
        for(let j=0;j<rs.length;j++){
            v[i].push(-1);
        }
    }
    //console.log(v[0][0]);
    //console.log(v[0].length);
    var miss=0;

    var cycle =0;
    //console.log(rs.length);
    for(let i=0;i<rs.length;i++){
        var cur=[];
        //console.log(i);
        
        let page=rs[i];
        //console.log(page);
        if (dict[page] === undefined) {
            dict[page] = 0;
        }
        let find=0;
        let emp=0;
        if(i!==0){
            for(let j=0;j<f;j++){
                v[j][i]=v[j][i-1];
            }
        }
        // for(let j=0;j<f;j++){
        //     process.stdout.write(v[j][i]+" ");
        // }
        // console.log("");
        for (let j =0;j<f;j++) {
           
            if (v[j][i] !==-1 && v[j][i] === page) {
                find =1;
                dict[page] = 1;
                break;
            } else if (v[j][i] === -1){
                emp = 1;
            }
        }
        //console.log(emp,find);
        if (find!==1) {
            que.push(page);
            // console.log(que);
            ms.push(0);
            //console.log("0 ");
            //process.stdout.write("0 ");
            miss=miss+1;
            if (emp===1) {
                //console.log("cycle" +cycle);
                victim.push(-1);
                v[cycle][i] = page;
                cycle = (cycle + 1)%f;
                
            } else {
                var tmparr= [];
                var imd = -1;
                var mypg = que[0];
                while (dict[mypg] === 1){
                    dict[mypg] = 0;
                    tmparr.push(mypg);
                    que.shift();
                    mypg = que[0];
                }
                que.shift();
                while(tmparr.length > 0){
                    let elem = tmparr.pop();
                    que.unshift(elem);
                }
                // console.log(que);
                for (var ii=0;ii<f;ii++){
                    if(v[ii][i] === mypg){
                        imd = ii;
                    }
                }
                v[imd][i] = page;
                victim.push(imd);
            }
            //replace page
        }
        else {
            dict[page] = 1;
            victim.push(-1);
            ms.push(1);
            //console.log("1 ");
            //process.stdout.write("1 ");
        } 
        for(let j=0;j<f;j++){
            cur.push(v[j][i]);
        }
        pg.push(cur);
       
        
      
    }
    // console.log(pg);
    // console.log(victim);
    return [pg,ms,victim,miss];
}


function mru(f,rs){
    const INT_MIN=-100000;
    const INT_MAX=100000;
    //console.log(INT_MIN);
    var pg=[];
    var ms=[];
    var victim = [];
    
    //const INT_MIN=-1000000;
    //const INT_MAX=10000000;
    var v=[]
    for(let i=0;i<f;i++){
        v.push([]);
        for(let j=0;j<rs.length;j++){
            v[i].push(-1);

        }
    }
    //console.log(v[0][0]);
    //console.log(v[0].length);
    var miss=0;

    var cycle =0;
    //console.log(rs.length);
    for(let i=0;i<rs.length;i++){
        var cur=[];
        //console.log(i);
        
        let page=rs[i];
        //console.log(page);
        
        let find=0;
        let emp=0;
        if(i!==0){
            for(let j=0;j<f;j++){
                v[j][i]=v[j][i-1];
            }
        }
        // for(let j=0;j<f;j++){
        //     process.stdout.write(v[j][i]+" ");
        // }
        // console.log("");
        for (let j =0;j<f;j++) {
           
            if (v[j][i] !==-1 && v[j][i] === page) {
                find =1;
                break;
            } else if (v[j][i] === -1){
                emp = 1;
            }
        }
        //console.log(emp,find);
        if (find!==1) {
            ms.push(0);
            //console.log("0 ");
            //process.stdout.write("0 ");
            miss=miss+1;
            if (emp===1) {
                //console.log("cycle" +cycle);
                victim.push(-1);
                v[cycle][i] = page;
                cycle = (cycle + 1)%f;
                
            } else {
                var mydice = {};
                var imd=-1;
                for (var ii = 0;ii<f;ii++){
                    if(mydice[v[ii][i]] === undefined){
                        mydice[v[ii][i]] = ii;
                    }
                }
                for (var jj=i-1;jj>=0;jj--){
                    if(mydice[rs[jj]] === undefined){
                        continue;
                    } else {
                        imd = mydice[rs[jj]];
                        break;
                    }
                }
                v[imd][i] = page;
                victim.push(imd);
            }
            //replace page
        }
        else {
            victim.push(-1);
            ms.push(1);
            //console.log("1 ");
            //process.stdout.write("1 ");
        } 
        for(let j=0;j<f;j++){
            cur.push(v[j][i]);
        }
        pg.push(cur);
       
        
      
    }
    console.log(pg);
    // console.log(victim);
    return [pg,ms,victim,miss];
}

export {fifo,lru,opr,nru,random,lfu,mfu,sca,mru};
// let g=lru(2,[1,2,2,4,5,5,3,2,1]);
// console.log(g);
// g=sca(3,[2,3,2,1,5,2,4,5,3,2,3,5]);
// console.log(g);
// g=opr(2,[1,2,2,4,5,5,3,2,1]);
// console.log(g);