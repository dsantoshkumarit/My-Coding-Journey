# Strings
- **Strings**: Sequece/Array of characters
- **Characters**: Stored in computer as binary of ASCII/UTF-8 encoding.
    - Capitals letters ASCII values: 'A' to 'Z' - 65 to 90
    - Small letters ASCII values : 'a' to 'z' - 97 to 122
    - Digits ASCII values : '0' to '9' - 48 to 57
    - Eg:
        ```c
        char ch = '9'; 
        // '9' => 57(ASCII) => 00111001(Stored as Binary in Computer) 
        // 1ch = 1 Byte
        ```
    - Character Case conversion:
        - CharCode of 'a' - CharCode of 'A' = 97 - 65 = 32
        - CharCode of 'a' = CharCode of 'A' + 32 ( i.e., LowerCase = UpperCase + 32 )
        - CharCode of 'A' = CharCode of 'a' - 32 ( i.e., UpperCase = LowerCase - 32 )
    ```js
    // Charcode of a character:
    console.log('A'.charCodeAt(0)); // 65
    
    // Character from a charcode:
    console.log(String.fromCharCode(65)); // "A"

    //Lower-case character to upper-case character:
    console.log(String.fromCharCode('a'.charCodeAt(0)-32)); // "A"

    //upper-case character to Lower-case character:
    console.log(String.fromCharCode('A'.charCodeAt(0)+32)); // "a"
    ```