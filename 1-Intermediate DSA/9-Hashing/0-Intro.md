# Hashmap:
- Stores data in Key-Value pairs.
- Key - must be a unique, primitive data type.
- Value - Can by any data type.
-  We can search in O(1) time in Hashmap.
- Operations:
    - Time Complexity of all the operations in Hashmap is O(1).
    - INSERT(Key,Value): new key-value pair is inserted. If the key already exists, it does no change.
    - SIZE: returns the number of keys.
    - DELETE(Key): delete the key-value pair for given key.
    - UPDATE(Key,Value): previous value associated with the key is overridden by the new value.
    - SEARCH(Key): searches for the specified key.
- Operations in JS:
```js
        const map = new Map();
        //Insert
        map.set("a", 1);
        map.set("b", 2);
        map.set("c", 4);

        //Update
        map.set("c",3);

        //Size
        console.log(map.size);// Expected output: 3

        //Search
        console.log(map.has("a"));// Expected output: true

        //Get value
        console.log(map.get("a"));// Expected output: 1        
```
- Operations in Python:
# Hashset:
- Stores only keys.
- Key - must be a unique, primitive data type.
- Operations:
    - Time Complexity of all the operations in Hashset is O(1).
    - INSERT(Key): inserts a new key. If key already exists, it does no change.
    - SIZE: returns number of keys.
    - DELETE(Key): deletes the given key.
    - SEARCH(Key): searches for the specified key.
- Operations in JS:
```js
        const set = new Set();
        //Insert
        set.add(42);
        set.add(42);
        set.add(13);

        //Size
        console.log(set.size);// Expected output: 2

        //Search
        console.log(set.has(13));// Expected output: true
```
- Operations in Python: