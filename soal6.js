// No.6 ------------------------------------------------------
function getAngkaTerbesarKedua(dataAngka) {
    if (typeof dataAngka == 'object') {
        dataAngka.sort(function(a,b){
            return b-a
        })
        terbesarKedua = dataAngka[1];
        return terbesarKedua
    } else if(dataAngka == null) {
        return "Error: Data tidak boleh kosong"
    } else {
        return "Error: Tipe data salah, harus berupa object"
    }
}
    
const dataAngka = [9,4,7,7,4,3,2,2,8]
console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())
// No.6 END --------------------------------------------------