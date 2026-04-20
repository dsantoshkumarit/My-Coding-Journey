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