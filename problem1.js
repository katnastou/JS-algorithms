//write a function which takes in a string and returns counts of each character in the string


function charCount(str){
    //make object to return
    var result = {};
    var lstr = str.toLowerCase();
    var regex =/[0-9a-z]/;
    //loop over string, for each character
    for (var i=0; i<=str.length; i++){
        var char = lstr[i];
        if (regex.exec(char)){
            if(result[char] >0 ){
            //if the char is a number/letter AND is key in object, add one to count
                result[char]++;
            } else {
            // if char is a number/letter AND is not in the object, add it and set value to 1
                result[char] = 1;
            }
        }
    }
        // if char is something else (space, period etc) dont do anything
    // return an object, keys chars values count
    return result;
}

//var example = charCount("hello  theree JH 1323245");

//console.log(example); //

function charCount2(str){
    //make object to return
    var result = {};
    var lstr = str.toLowerCase();
    var regex =/[0-9a-z]/;
    //loop over string, for each character
    for (var char of lstr){
        if (regex.exec(char)){
            if(result[char] >0 ){
            //if the char is a number/letter AND is key in object, add one to count
                result[char]++;
            } else {
            // if char is a number/letter AND is not in the object, add it and set value to 1
                result[char] = 1;
            }
        }
    }
        // if char is something else (space, period etc) dont do anything
    // return an object, keys chars values count
    return result;
}

//var example2 = charCount2("hello  theree JH 1323245");

//console.log(example2); //

function charCount3(str){
    //make object to return
    var result = {};
    
    var regex =/[0-9a-z]/;
    //loop over string, for each character
    for (var char of str){
        if (regex.exec(char)){
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
        // if char is something else (space, period etc) dont do anything
    // return an object, keys chars values count
    return result;
}

//var example3 = charCount3("hello  theree JH 1323245");

//console.log(example3); //

function charCount4(str){
    //make object to return
    var result = {};
    //loop over string, for each character
    for (var char of str){
        if (isAlphaNumeric(char)){
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
        // if char is something else (space, period etc) dont do anything
    // return an object, keys chars values count
    return result;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && //[0-9]
        !(code > 64 && code < 91) && //[A-Z]
        !(code > 96 && code < 123)) { //[a-z]
            return false;
        }
    return true;
}

var example4 = charCount4("hello  theree JH 1323245");

console.log(example4); //