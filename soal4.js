// No.4 ------------------------------------------------------
function isValidPassword(email){
    let upperCase = /[A-Z]/g;
    let lowerCase = /[a-z]/g;
    let numbers = /[0-9]/g;
    let uniqueChara = /@/g;

    if (email != null){
        if (email.length >= 8){
            if (upperCase.test(email) == true){
                if (lowerCase.test(email) == true){
                    if (numbers.test(email) == true){
                        return true + " (Karena memenuhi requirement, " + email + " teridiri dari setidaknya 8 karakter dengan 1 huruf besar, 1 huruf kecil, dan 1 angka)"
                    } else {
                        return false + " (Karena " + email + " tidak memiliki angka)"
                    }
                } else {
                    return false + " (Karena "+email+" tidak memiliki huruf kecil)"
                }
            } else {
                return false + " (Karena "+email+" tidak memiliki huruf besar)"
            }
        } else if(uniqueChara.test(email) == true && upperCase.test(email) == false && lowerCase.test(email) == false) {
            return false + " (Karena "+email+" hanya terdiri dari unique characters)"
        } else {
            return false + " (Karena "+email+" kurang dari 8 huruf)"
        }
    } else {
        return "ERROR: Password tidak boleh kosong"
    }
}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword('@'))
console.log(isValidPassword())
// No.4 END --------------------------------------------------