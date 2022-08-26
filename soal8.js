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