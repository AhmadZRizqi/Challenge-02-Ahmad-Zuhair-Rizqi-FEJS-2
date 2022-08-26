// -----------------------Challenge-02------------------------
// ---------------Ahmad Zuhair Rizqi [FEJS-2]-----------------

// No.1 ------------------------------------------------------
function changeWord (selectedText, changedText, text) {
    return text.replace(selectedText, changedText);
}
const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu'

console.log(changeWord('mencintai', 'membenci', kalimat1))
console.log(changeWord('Bromo', 'Semeru', kalimat2))
// No.1 END --------------------------------------------------

// No.2 ------------------------------------------------------
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
// No.2 END --------------------------------------------------

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

// No.7 ------------------------------------------------------
function hitungTotalPenjualan(dataPenjualan){
    let totalPenjualan = 0;
    if (typeof dataPenjualan == 'object'){
        for (let i = 0; i < dataPenjualanPakAldi.length; i++){
            totalPenjualan = dataPenjualanPakAldi[i].totalTerjual + totalPenjualan
        }
        return totalPenjualan
    } else if (dataPenjualan == null){
        return 'Error: Data parameter tidak boleh kosong'
    } else {
        return 'Error: Tipe data parameter salah, harus berupa object'
    }
}
    
const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ]

  console.log(hitungTotalPenjualan(dataPenjualanPakAldi))
  console.log(hitungTotalPenjualan(0))
  console.log(hitungTotalPenjualan())
// No.7 END --------------------------------------------------

// No.8 ------------------------------------------------------
function getInfoPenjualan(dataPenjualan){
    infoPenjualan = {
        totalKeuntungan: 0,
        totalModal: 0,
        persentaseKeuntungan: 0 ,
        produkBukuTerlaris: '',
        penulisBukuTerlaris: '',
    }
    let bukuTerlaris = '';
    let penjualanTerlaris = 0;
    let persentase = 0;
    let keuntungan = 0;
    let modal = 0;
    let labaKotor = 0;
    let penulisTerlaris = '';
    if (typeof dataPenjualan == 'object') {
        for (let i = 0; i < dataPenjualanNovel.length; i++){
            modal = (dataPenjualanNovel[i].hargaBeli * (dataPenjualanNovel[i].totalTerjual + dataPenjualanNovel[i].sisaStok)) + modal
            const toRupiah = modal.toString().split('').reverse().join('')
            const regex = toRupiah.match(/\d{1,3}/g)
            const rupiah = "Rp. " + regex.join('.').split('').reverse().join('')
            infoPenjualan.totalModal = (rupiah)
        } 
        for (let i = 0; i < dataPenjualanNovel.length; i++){
            labaKotor = (dataPenjualanNovel[i].hargaJual * dataPenjualanNovel[i].totalTerjual) + labaKotor
            
        }
        keuntungan = labaKotor - modal
        const toRupiah = keuntungan.toString().split('').reverse().join('')
        const regex = toRupiah.match(/\d{1,3}/g)
        const rupiah = "Rp. " + regex.join('.').split('').reverse().join('')
        infoPenjualan.totalKeuntungan = (rupiah)
        persentase = ((keuntungan/modal) * 100)
        infoPenjualan.persentaseKeuntungan = persentase + ' %'
        for (let i = 0; i < dataPenjualanNovel.length; i++){
            let terkini = [];
            terkini.push(penjualanTerlaris)
            penjualanTerlaris = dataPenjualanNovel[i].totalTerjual
            if(terkini < penjualanTerlaris){
                penulisTerlaris = dataPenjualanNovel[i].penulis
            } 
            infoPenjualan.penulisBukuTerlaris = penulisTerlaris
        }
        for (let i = 0; i < dataPenjualanNovel.length; i++){
            let terkini = [];
            terkini.push(penjualanTerlaris)
            penjualanTerlaris = dataPenjualanNovel[i].totalTerjual
            if(terkini < penjualanTerlaris){
                bukuTerlaris = dataPenjualanNovel[i].namaProduk
            } 
            infoPenjualan.produkBukuTerlaris = bukuTerlaris
        }
        return infoPenjualan
    } else if (dataPenjualan == null) {
        return 'Error: Parameter tidak boleh kosong'
    } else {
        return 'Error: Tipe data parameter bukan object'
    }
}

const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  
  console.log(getInfoPenjualan(dataPenjualanNovel))
  console.log(getInfoPenjualan(0))
  console.log(getInfoPenjualan())
// No.8 END --------------------------------------------------