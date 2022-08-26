// No.3 ------------------------------------------------------
function checkEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email != null) {
        if (emailRegex.test(email) == true){
            return "VALID"
        } else if (emailRegex.test(email) == false){
            if (email.match('@')) {
                return "INVALID"
            } else {
                return 'Error: email must contain "@" character'
            }
        } 
    } else {
        return "Error: Type email first"
    }
}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
console.log(checkEmail())
// No.3 END --------------------------------------------------