function maxSubarraySum (arr, num){
    if (num >arr.length){
        return null;
    }
    var max = -Infinity; //array can have only negative numbers
    for(let i=0; i <arr.length-num+1;i++){ // the last place we can start the window is the num +1
        var temp = 0;
        for (let j=0;j<num;j++){
            temp +=arr[i+j];
        }
        if(temp>max){
            max=temp;
        }
    }
    return max;
}

console.log(maxSubarraySum([1,2,3,4,5,6,6],3));