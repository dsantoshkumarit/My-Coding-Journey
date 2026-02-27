# ===== Inclusion and Exclusion =====

Constraints : i <= j
1. Both included - [2,5] => 2,3,4,5 => (5-2)+1 = 4
    - [i,j] => count = j - i + 1 
2. Both excluded - (2,5) => 3,4 => 5 - 2 - 1 = 2
    - (i,j) => count = j - i - 1
3. One included and one excluded - (2,5] => 3,4,5 => 5 - 2 = 3
                                    (or)
                                    [2,5) => 2,3,4 => 5 - 2 = 3
    - [i,j) or (i,j] => count = j - i

# ===== AP and GP =====
1. AP : a = 1st value in AP; d = Common difference in AP
    - 1,2,3,4,5,.... a = 1, d = 1 
    - S(n) = a*(n*(n+1))/2
    - T(n) = a + (n-1) * d;
2. GP : a = 1st value in GP; r = Common ratio in GP
    - 5,10,20,40,80,....; a = 5, r = 2 
    - a*r^0, a*r^1, a*r^2, a*r^3,.....
    - S(n) = (a * (r^n - 1))/(r-1); for r != 1
    - T(n) = a * (r^(n - 1));

# ===== AP and GP =====
- No of Sub-Arrays for an array of length-N = (N*(N+1))/2
- Eg:
<pre>
    let A = [1,2,3]
    => Sub-Arrays:
        [1]   [2]   [3]
        [1,2] [2,3]
        [1,3]
        ----- ----- ----
          3  +  2  +  1 = 6 = 3(3+1)/2 = 6 
</pre>
# ===== Recursion Time complexity  and Space complexity =====
- Recursion TC : (No. of calls )*(Time taken in each call)
    - For (No. of calls): 
        - Draw recursion tree and each node in the tree is a call.
        - Mention all the calls and sum them.
        - Eg : At each step we make 2 calls-
            <pre>
                            n  ------------------- 2^0 = 1
                            /\
                           /  \
                          /    \
                      (n-1)    (n-2) ------------- 2^1 = 2
                        /\        /\
                       /  \      /  \
                      /    \    /    \
                  (n-2)  (n-3)(n-3) (n-4) -------- 2^2 = 4
                    /
                   /
                 .........................
                ..............................
             (1),(0) ..... .....................  ---------- 2^(n-1)  
            No. of calls = 2^0 + 2^1 + .... + 2^(n-1) = 2^n - 1   
            </pre>   

    - For (Time taken in each call):
        - Find the number of lines of code.
            Eg :Time taken in each call = 10 lines = constant time
    - Therefore recursion TC = 2^n * constant time = O(2^n)       
- Recursion SC : Height of the tree.
    - From above eg: Recursion SC = O(n) -> As max "n" calls are in memory stack.

# ============== 2D-Array ===========
<pre>
        0   1   2
0    |  a   b   c   |
1    |  d   e   f   |
2    |  g   h   i   |
</pre>
- In a 2D-Array 
    - Diagonals(top left to bottom right) - (i-j) is same for that diagonal.
        - Eg: diag(d,h) => d -> (i-j) = 1 - 0 = 1 ; h -> 2 - 1 = 1 ;
    - Antidiagonals( top right to bottom left) - (i+j) is same for that antidiagonal
        - Eg: anti-diag(f,h) => f -> (i+j) = 1 + 2 = 3; h -> 2 + 1 = 3 ;