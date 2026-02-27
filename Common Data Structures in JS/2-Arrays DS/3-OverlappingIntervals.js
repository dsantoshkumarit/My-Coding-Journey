/*
    Merge 2 intervals:
    => Overlapping condition: 
        2 intervals - (s1,e1), (s2,e2)
        => Overlap happens when s2 <= e1 || e2 >= s1
        Merged interval = min(s1,s2) |--------| max(e1,e2)
        1) s1(3) |-------| e1(6)
                s2(4) |-------| e2(7)
            Merged interval = s1(3) |-------| e2(7)
        2) s1(3) |-------------| e1(6)
                s2(4) |-----| e2(5)
            Merged interval = s1(3) |-------| e1(6)
    => Non overlapping condition:
        2 intervals - (s1,e1), (s2,e2)
        => No overlap happens when - e1 < s2 || e2 < s1

    Real time use case : When we want to know when all the employees are having meetings and when they are free.

*/

/* Merge Intervals
Problem Description:
Given a collection of intervals, merge all overlapping intervals.

Problem Constraints:
1 <= Total number of intervals <= 100000.

Input Format:
First argument is a list of intervals.

Output Format:
Return the sorted list of intervals after merging all the overlapping intervals.

Example Input:
Input 1:
[1,3],[2,6],[8,10],[15,18]
Example Output:
Output 1:
[1,6],[8,10],[15,18]

Example Explanation:
Explanation 1:
Merge intervals [1,3] and [2,6] -> [1,6].
so, the required answer after merging is [1,6],[8,10],[15,18].
No more overlapping intervals present.
*/

/* Brute force : TC : O(n^2), SC : O(1)
    A simple approach is to start from the first interval and compare it 
    with all other intervals for overlapping, if it overlaps with any other interval, 
    then remove the other interval from the list and merge the other into the first interval. 
    Repeat the same steps for the remaining intervals after the first.
*/
/*
    Optiomized approach : TC:O(NlogN), SC:O(1)
 */
const mergeIntervals = function(A){
    const n = A.length;
    A.sort((iv1,iv2)=>iv1[0]-iv2[0]);
    if(n === 1){
        return A;
    }
    let l = A[0][0], r = A[0][1];
    let new_intervals = [];
    for(let i = 1; i<n; i++){
        let st = A[i][0], end = A[i][1];
        if( r < st){
            new_intervals.push([l,r]);
            l = st;
            r = end;
        }
        else{
            l = Math.min(l, st);
            r = Math.max(r, end);
        }
    }
    new_intervals.push([l,r]);// Last remaining overlapped or non-overlapped interval
    return new_intervals;
}