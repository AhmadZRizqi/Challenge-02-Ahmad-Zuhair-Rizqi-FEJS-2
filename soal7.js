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