const isPalindrome = (A, l, r) =>{
    while(l < r){
        if(A[l] !== A[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}

