function longestWord(text){
    let wordArray = text.split(' ')
    console.log(wordArray)
    console.log (wordArray.length)
    var result ="";
for (let i = 0; i < wordArray.length; i++){
    if (wordArray.length < wordArray[i].length){
    result = wordArray[i];
    }
    return result
}
}
longestWord("text")
