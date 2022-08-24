// No.1
function changeWord (selectedText, changedText, text) {
    return text.replace(selectedText, changedText);
}
const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu'

console.log(changeWord('mencintai', 'membenci', kalimat1))
console.log(changeWord('Bromo', 'Semeru', kalimat2))
// No.1 END

// No.2
const checkTypeNumber = givenNumber => {
    if (givenNumber%2 == 0 && typeof givenNumber == 'number' && typeof givenNumber !== 'string' && typeof givenNumber !== 'object') {
        return "GENAP"
    } else if(givenNumber%2 !== 0 && typeof givenNumber == 'number' && typeof givenNumber !== 'string' && typeof givenNumber !== 'object') {
        return "GANJIL"
    } else if(givenNumber == null){
        return "Error: Bro Where is the parameter?"
    } else{
        return "Error: Invalid Data Type"
    }
}
console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())
// No.2 END