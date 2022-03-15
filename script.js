const keranjangBelanja =[
    {
        namaBarang :'macbook',
        harga : 25000000,
        ceklis:true

},
{
    namaBarang :'iphone',
    harga : 15000000,
    ceklis: true
},
{
    namaBarang :'airpods',
    harga : 1500000,
    ceklis: false

}
]
let totalBelanja = 0
let daftarBelanjaan =[]

let totalDiskon = 0;

for(let i = 0;i < keranjangBelanja.length;i++){
    
if(keranjangBelanja[i].ceklis === true){
    totalBelanja= keranjangBelanja[i].harga + totalBelanja

 let belanja = {
      namaBarang: keranjangBelanja[i]
.namaBarang,
harga: keranjangBelanja[i].harga  }
daftarBelanjaan.push(belanja)
 }
}


const diskon = daftarBelanjaan.map((belanja)=>{
if(belanja.harga > 1000000){
totalDiskon += belanja.harga * 0.05
}
} )
const namaBarang = daftarBelanjaan.map((barang, index)=> `${index+1} ${barang.namaBarang}`)
const barangTidakDibeli = keranjangBelanja.filter((barang)=> barang.ceklis == false)
console.log(`Barang Yang Anda pilih : ${namaBarang}`)
console.log(`Total Harga belanjaan : ${totalBelanja}`)
console.log(`Total Diskon : ${totalDiskon}`)
console.log(`Total bayar : ${totalBelanja - totalDiskon}`)
console.log(barangTidakDibeli)
