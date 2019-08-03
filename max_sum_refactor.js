function maxSubarraySum (arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    //we calculate the first sliding window once
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum=maxSum;
    //in the first iteration
    for(let i = num; i < arr.length; i++){
        //we subtract the first value of the array and we add the one following the num number of digits
        tempSum = tempSum - arr[i-num] + arr[i];
        //we find the max and assign it to the value we want to return
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1,2,3,4,5,6,6],3));