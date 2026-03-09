# 1. Toggle Letter Case:
## Given a string consisting of only alphabets(either lowercase or uppercase). Print all the characters of string in such a way that for all lowercase character, print its uppercase character and for all uppercase character, print its lowercase character.
` Eg: "aDgbHJe" -> "AdGBhjE"
```
Observations:
   'a' - 32 -> 'A'
   'A' + 32 -> 'a'
```

```js
const toggleChar = (str) => {
    let toggleStr = '';
    for(let i=0; i<str.length; i++){
        const charCodeAtIndex = str.charCodeAt(i); 
        if(charCodeAtIndex >= 97){ // if(str[i] >= 'a' && str[i] <='z'>){...}
            toggleStr += String.fromCharCode(charCodeAtIndex-32);
        }
        else{
            toggleStr += String.fromCharCode(charCodeAtIndex+32);
        }
    }
    return toggleStr;
};
```
- TC : O(N)
- SC : O(1)