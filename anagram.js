function validAnagram(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    let stringContents1 ={};
    let stringContents2 ={};
    for (let val of str1){
        stringContents1[val] = (stringContents1[val] || 0) +1;
    }    
    for (let val of str2){
        stringContents2[val] = (stringContents2[val] || 0) +1;
    }
    for (let key in stringContents1){
        if (!(key in stringContents2)){
            return false;
        }
        if(stringContents2[key] !== stringContents1[key]){
            return false;
        }
    }
    return true;
    
}
console.log(validAnagram("anny","yann"));