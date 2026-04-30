# TLE Checks:
- 1 iteration can have 10 to 100 instructions
- Online Editor - 10^9 instructions/second 
    - 1sec - 10^9 instructions 
    - 1sec -  10^7 * 100 instructions or 10^8 * 10 instructions (as iteration can have 10 to 100 instructions)
    - i.e., In 1 second the online editor execute only = 10^7 to 10^8 iterations 
- Therefore we need to make sure that our loops don't exceed 10^7 to 10^8 iterations as we will be given only 1 second or less time to execute. 
- 10^7 to 10^8 - in binary is 10*(2^20) to 100*(2^20) instructions. 
    - As 10^3 = 2^10 => 10^7 = 10^3 * 10^3 * 10 = 10 * 2^10 * 2^10 = 10 * 2^20

# MLE Checks:
- Make sure SUM or Product doesn't exceed int limit(4-Bytes = (2^8)^4 = 2^32) as int can hold value ranges : 
    - -(2^31) to (2^31) 
        - = -(2*2^30) to (2*2^30) 
        - = -(2*(2^10)^3)  to (2*(2^10)^3)
        - = -(2*(10^3)^3) to (2*(10^3)^3)
        - = -(2*10^9) to (2*10^9)
- Use long (8-Bytes) as it can hold value ranges (-2^63 to 2^63-1) = -8*(10^18) to 8*(10^18)-1

# Tips on Problem Constraints
* Analyzing the constraints can help you determine which time complexity and data structure or algorithm to use for a given problem. 
* It is important to look at the constraints whenever we are solving a problem.

Note: In Interviews, don't ask the constraints directly. Rather, tell your approach and ask the interviewer if you need to optimize further.

If,

| Constraint      | Possible Time Complexities          |
| ----------------------- | ------------------------------ |
| n <= 10^6              | O(n), O(nlogn)                |
| n <= 20                 | O(n!), O(2^n)                   |
| n <= 10^10            | O(logn), O(sqrt(n))           |

Note: These are just general guidelines. The actual time complexity can vary based on the specific problem and implementation.

It's always important to analyze the problem and determine the best approach for your specific solution.