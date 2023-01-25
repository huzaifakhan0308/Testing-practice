stringLength = (string) => {
    let count = 0
    for (let i = 0; i <= string.length; i++){
        count = i
    }
    return count;
}

reverseString = (string) => {
  let reverseString = string
  reverseString = reverseString.split('')
  reverseString = reverseString.reverse()
  reverseString = reverseString.join('')
    
    return reverseString;
}

const calculator = {
    add : function(a,b){
        return a + b
    },
    
    subtract : function(a,b){
        return a - b
    },
    
    divide : function(a,b){
        return a / b
    },
    
    multiply : function(a,b){  
        return a * b
    }
}

capitalize = (string) => {
    const capitalize = string
    if(string){
        capitalize[0] = string[0].toUpperCase()
        return capitalize
    }
}

module.exports = {
    StringLength: stringLength,
    ReverseString: reverseString,
    Calculator: calculator,
    Capitalize: capitalize,
};