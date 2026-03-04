const printSquareMatrixDiagonals = (mat) => {
    const N = C = mat.length;
    console.log("D1:")
    for(let i=0; i<N;i++){
        console.log(mat[i][i]);
    }
    
    console.log("D2:")
    for(let i=0; i<N;i++){
        console.log(mat[i][N-1-i]);
    }
};
/* 
    TC:O(N)
    SC:O(1)
*/

const printAllDiagonals = (mat) => {
    const M = mat.length;
    const N = mat[0].length;
    for(let j=0; j<N; j++){
        let r = 0,c = j;
        let str = '';
        while(r < M && c>=0){
            str += mat[r][c];
            r++;
            c--;
        }
        console.log("Diag:", str);
    }
    for(let i = 1; i < M; i++)
    {
        let r = i, c = N-1;
        let str = '';
        while(r < M && c>=0){
            str += mat[r][c];
            r++;
            c--;
        }
        console.log("Diag:", str);
    }
};
/* 
    TC:O(M*N) - As we are visiting all the matrix elements
    SC:O(M+N)
*/