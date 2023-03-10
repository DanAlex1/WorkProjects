function isPalindrome(x){
    function reversedNum(num){
        return(
            parseFloat(
                num
                .toString()
                .split('')
                .reverse()
                .join('')
            )
        )
    }
    return x === reversedNum(x);
}
module.exports = isPalindrome;