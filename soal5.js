// No.5 ------------------------------------------------------
function getSplitName(personName){
    nama = {
        firstname: '',
        middlename: '',
        lastname: '',
    }
    if (typeof personName == 'string'){
        const splitName = personName.split(' ')
        if (splitName.length == 2) {
            namaDepan = splitName[0];
            namaTengah = null;
            namaBelakang = splitName[1];
            nama.firstname = namaDepan;
            nama.middlename = namaTengah;
            nama.lastname = namaBelakang;
            return nama
        } else if (splitName.length == 1){
            namaDepan = splitName[0];
            namaTengah = null;
            namaBelakang = null;
            nama.firstname = namaDepan;
            nama.middlename = namaTengah;
            nama.lastname = namaBelakang;
            return nama
        } else if (splitName.length == 3) {
            namaDepan = splitName[0];
            namaTengah = splitName[1];
            namaBelakang = splitName[2];
            nama.firstname = namaDepan;
            nama.middlename = namaTengah;
            nama.lastname = namaBelakang;
            return nama
        } else if (splitName.length > 3){
            return "Error: Nama lebih dari 3 suku kata"
        }

    } else if (personName == null) {
        return "Error: Data tidak boleh kosong"
    } else {
        return "Error: Tipe data tidak boleh selain string"
    }

}
console.log(getSplitName('Aldi Daniela Pranata'))
console.log(getSplitName('Dwi Kuncoro'))
console.log(getSplitName('Aurora'))
console.log(getSplitName('Aurora Aurelia Sukma Darma'))
console.log(getSplitName(0))
console.log(getSplitName())
// No.5 END --------------------------------------------------