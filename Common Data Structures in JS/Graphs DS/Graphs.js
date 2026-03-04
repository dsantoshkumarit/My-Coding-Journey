import { Queue } from "../Queues DS/Queue";
import {MinHeap} from "../Heaps DS/Heap";

// Adj 2-D array from given edges array A = [[1,2],[3,4],[5,6]]
const V = 5;
const vis = new Array(V).fill(false);
const adj = [];
const A = [     
                [1, 2], 
                [4, 1], 
                [2, 4],
                [3, 4],
                [5, 2], 
                [1, 3] 
            ];

// Creating adjacency matrix from the given egdes input array "A".
for(let [u,v] of A){
    if(adj[u]){
        adj[u].push(v);
    }
    else{
        adj[u] = [v];
    }
}



// Depth First Search : TC:O(V+E), SC:O(V+E) 
const solveDFS = () => {
    const DFS = (u, vis, adj) => {
        vis[u] = true;
        print(u); //can be replaced with other operations
        if(adj[u]){
            for(let v of adj[u]){
                if(!vis[v]){
                    DFS(v);
                }
            }
        }
    };
    for(let u = 1; u <= V; u++){
        if(!vis[u]){
            DFS(u);
        }
    }
}

// ======= Cycle detection =====//
//param A : integer - No of nodes
//param B : array of array of integers, Edges u1->v1 - [[u1,v1],[u1,v2],...]
//return an integer
const cycleDetectionDFS = (A, B) => {
    const vis = new Array(A+1).fill(false);
    const path = new Array(A+1).fill(false);
    const adj = [];
    for(let [u,v] of B){
        if(adj[u]){
            adj[u].push(v);
        }
        else{
            adj[u] = [v];
        }
    }
    const DFS = (u) => {
        vis[u] = true;
        path[u] = true;
        // console.log("===>",u);
        if(adj[u]){
            for(let v of adj[u]){
                if(path[v]){
                    return true;
                }
                if(!vis[v] && DFS(v)){
                    return true;
                }
            }
        }
        path[u] = false;
        return false;
    };

    for(let u = 1; u <= A; u++){
        if(!vis[u] && DFS(u)){
            return 1;
        }
    }
    return 0;
}


// ==== No of islands ==== //
A = [ 
    [0, 1, 0]
    [0, 0, 1]
    [1, 0, 0]
];
const noOfIslands = (A) => {
    const N = A.length;
    const M = A[0].length;
    let count = 0;
    const rows = [-1, 0, 1, -1, 1, -1, 0, 1];
    const cols = [-1, -1, -1, 0, 0, 1, 1, 1];
    let vis = [];
    for(let i=0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(vis[i]){
                vis[i].push(false);
            }
            else{
                vis[i] = [false];
            }
        }
    }

    const DFS = (i,j) => {
        vis[i][j] = true;
        for(let k = 0; k < rows.length; k++){
            let x = i + rows[k];
            let y = j + cols[k];
            if(x >= 0 && x < N && y >= 0 && y < M && !vis[x][y] && A[x][y] === 1){
                DFS(x,y);
            }
        }
    };

    for(let i=0; i < N; i++){
        for(let j=0; j < M; j++){
            if(!vis[i][j] && (A[i][j] === 1)){
                count++;
                DFS(i,j);
            }
        }
    }
    return count;
}


// ===== Breadth First Search : TC:O(V+E), SC:O(V)
const SolveBFS = () => {
    const BFS = (u) => {
        vis[u] = true;
        Q.enq(u);
        while(!Q.isEmpty()){
            const node = Q.deq();
            for(let v of adj[node]){
                if(!vis[v]){
                    Q.enq(v);
                    vis[v] = true; // To not add common node twice 
                }
            }
        }        
    };
    const Q = new Queue();
    for(let u=1; u<=V; u++){
        if(!vis[u]){
            BFS(u);
        }
    }
};

// ===== Cycle Detection BFS : TC:O(V+E) ,SC:O(V+E)
//param A : integer
 //param B : array of integers
 //param C : array of integers
 // B[i] -> C[i]
 //return an integer
/* Eg: 
    A = 2
    B = [1, 2]
    C = [2, 1] 
*/
    const CycleDetectionBFS = function(A, B, C){
    const adj = [];
    for(let i=0; i<B.length; i++){
        if(adj[B[i]]){
            adj[B[i]].push(C[i]);
        }
        else{
            adj[B[i]] = [C[i]];
        }
    }
    const inDegree = (A,C) => {
        const inDeg = new Array(A+1).fill(0);
        for(let i=0; i<C.length; i++){
            inDeg[C[i]]++;
        }
        return inDeg;
    };
    const inDeg = inDegree(A,C);
    let count = 0;
    const q = new Queue();
    // console.log("indeg",inDeg);
    // console.log("adj",adj);

    for(let i=1;i<=A;i++){
        if(inDeg[i] === 0){
            q.enq(i);
        }
    }
    while(!q.isEmpty()){
        const u = q.deq().data;
        count++;
        // console.log("u",u);// for topological sort
        if(adj[u]){
            for(let v of adj[u]){
                inDeg[v]--;
                if(inDeg[v] === 0){
                    q.enq(v);
                }
            } 
        }
    }
    // console.log("count",count);
    return +(count === A);
}

//========= Prims Algo:
// B[i] => B[i][0] -> B[i][1], weight : B[i][2]
const solvePrims = function(A, B){
    A = 4
    B = [  
            [1, 2, 1],
            [2, 3, 4],
            [1, 4, 3],
            [4, 3, 2],
            [1, 3, 10]  
        ]
    const vis = new Array(A+1).fill(false);
    const h = new MinHeap();
    const adj = [];
    for(let i=0; i<B.length; i++){
        const u = B[i][0], v = B[i][1], wt = B[i][2];
        if(adj[u]){
            adj[u].push({v:v,wt:wt});
        }
        else{
            adj[u] = [{v:v,wt:wt}];
        }
        if(adj[v]){
            adj[v].push({v:u,wt:wt});
        }
        else{
            adj[v] = [{v:u,wt:wt}];
        }
    }
    let sum = 0;
    vis[1] = true;
    for(let obj of adj[1]){
        h.insertMinHeap({v:obj.v, wt : obj.wt});
    }
    while(!h.isEmpty()){
        const {v,wt} = h.getMin();
        if(!vis[v]){
            vis[v] = true;
            sum += wt;
            for(let adjv of adj[v]){
                if(!vis[adjv.v]){
                    h.insertMinHeap({
                        v:adjv.v, wt:adjv.wt
                    });
                }
            }
        }
    }
    return sum;
}

//============== Kruskal's Algo:
/*
    A = 3
    B = [ 
            [1, 2, 2]
            [1, 3, 2]
            [2, 3, 3]
        ]
*/
const solveKruskals = function(A,B){
    const parent = [];
    for(let i=0; i<=A; i++){
        parent[i] = i;
    }
    const root = (x) => {
        while(x != parent[x]){
            x = parent[x];
        }
        return x;
    }; 
    const isDisjoint = (x,y) => {
        const rx = root(x);
        const ry = root(y);
        if(rx !== ry){
            parent[ry] = rx;
            return true;
        }
        return false;
    };
    const adj = [];
    for(let i=0; i<B.length;i++){
        const [u,v,wt] = B[i];
        adj[i] = {u,v,wt,i};
    }
    adj.sort((a,b) => a.wt - b.wt);
    const ans = new Array(B.length).fill(0);
    for(let i=0; i<adj.length;i++){
        const {u,v,wt,i} = adj[i];
        if(isDisjoint(u,v)){
            ans[i] = 1;
        }
    }
    return ans;
}

//========= Dijkstra's Algo:
// A = 6
// B = [   [0, 4, 9]
//         [3, 4, 6] 
//         [1, 2, 1] 
//         [2, 5, 1] 
//         [2, 4, 5] 
//         [0, 3, 7] 
//         [0, 1, 1] 
//         [4, 5, 7] 
//         [0, 5, 1] ] 
// C = 4

// Output 1:  Smallest distance path from C to all other points
// D = [7, 6, 5, 6, 0, 6]
const solveDijkstras = (A, B, C) => {
    const dis = new Array(A).fill(-1);
    const adj = [];
    for(let i=0; i<B.length; i++){
        const [u, v, wt] = B[i];
        if(adj[u]){
            adj[u].push({v:v, wt:wt});
        }
        else{
            adj[u] = [{v:v, wt:wt}]
        }
        if(adj[v]){
            adj[v].push({v:u, wt:wt});
        }
        else{
            adj[v] = [{v:u, wt:wt}];
        }
    }
    dis[C] = 0;
    const h = new MinHeap();
    if(adj[C]){
        for(let obj of adj[C]){
            h.insertMinHeap(obj);
        }
    }
    while(!h.isEmpty()){
        const {v,wt} = h.getMin();
        if(dis[v] === -1){
            dis[v] = wt;
            if(adj[v]){
                for(let obj of adj[v]){
                    if(dis[obj.v] === -1){
                        h.insertMinHeap({v:obj.v, wt: wt+obj.wt});
                    }
                }
            }
        }
    }
    return dis;
};