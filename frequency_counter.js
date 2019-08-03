function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0; i<arr1.length; i++){
        var power = Math.pow(arr1[i],2);
        let correctIndex = arr2.indexOf(power);
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex,1);
    }
    return true;
    
}

console.log(same([1,2,3],[9,1,4]));