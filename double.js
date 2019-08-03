function double(arr){
    let newArr =[];
    for (let i=0;i<arr.length;i++){
        newArr.push(2*arr[i]);
    }
    return newArr;
}

var arr=[1,2,3,4,5,6];

console.log(double(arr));