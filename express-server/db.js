const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());

const products = [ 
    {
    "category" : "Zeytin & Zeytinyağı",
    "cost" : 44.25,
    "id" : 0,
    "name" : "Dolgulu Yeşil Zeytin ( Bademli ) 500 Gr",
    "subName" : "500 Gr Badem Dolgulu Zeytin"
  }, {
    "category" : "Zeytin & Zeytinyağı",
    "cost" : 19.1,
    "id" : 1,
    "name" : "Yeşil Zeytin ( Çizik ) 450 Gr",
    "subName" : "450 Gr Yeşil Edremit"
  }, {
    "category" : "Zeytin & Zeytinyağı",
    "cost" : 59.7,
    "id" : 2,
    "name" : "Naturel Sızma Zeytinyağı 750 Ml",
    "subName" : "750 Ml Naturel Sızma"
  }, {
    "category" : "Reçel & Bal",
    "cost" : 50.5,
    "id" : 3,
    "name" : "Doğal Ev Yapımı  Enginar Reçeli 450 Gr",
    "subName" : "450 gr Ev Yapımı Enginar Reçeli"
  }, {
    "category" : "Reçel & Bal",
    "cost" : 24,
    "id" : 4,
    "name" : "Ev Yapımı Domates Reçeli 800 Gr",
    "subName" : "800 Gr Domates Reçeli"
  }, {
    "category" : "Reçel & Bal",
    "cost" : 34.75,
    "id" : 5,
    "name" : "Doğal Ev Yapımı Ayva Reçeli 450 Gr",
    "subName" : "450 Gr Ayva Reçeli"
  }, {
    "category" : "Sebzeler",
    "cost" : 10.5,
    "id" : 6,
    "name" : "Kapya Biberi ( Turuncu ) 500 Gr",
    "subName" : "500 Gr Turuncu Kapya Biberi"
  }, {
    "category" : "Sebzeler",
    "cost" : 13.5,
    "id" : 7,
    "name" : "Çıtır Biber ( Tatlı )",
    "subName" : "1 Kg Çıtır Biber"
  }, {
    "category" : "Sebzeler",
    "cost" : 9.7,
    "id" : 8,
    "name" : "Salatalık",
    "subName" : "1 Kg Salatalık"
  }, {
    "category" : "Ekmek",
    "cost" : 14.9,
    "id" : 9,
    "name" : "Köy Ekmeği (750 Gr)",
    "subName" : "750 Gr Ekşi Mayalı Köy Ekmeği"
  }, {
    "category" : "Meyveler",
    "cost" : 34.9,
    "id" : 10,
    "name" : "Nar Suyu 1 Litre",
    "subName" : "1 Litre Hicaz Nar Suyu"
  }, {
    "category" : "Meyveler",
    "cost" : 9.7,
    "id" : 11,
    "name" : "Padişah Ayvası",
    "subName" : "1 Kg Padişah Ayvası"
  }, {
    "category" : "Meyveler",
    "cost" : 26.9,
    "id" : 12,
    "name" : "Üzüm Suyu",
    "subName" : "1 litre Üzüm Suyu"
  }, {
    "category" : "Hediye Paketleri",
    "cost" : 184.36,
    "id" : 13,
    "name" : "Kahvaltılık Peynir Paketi",
    "subName" : "7 çeşitli peynir paketi"
  }, {
    "category" : "Hediye Paketleri",
    "cost" : 113.44,
    "id" : 14,
    "name" : "Merhaba Paketi ",
    "subName" : "Yumurta, domates & biber, peynir..."
  }, {
    "category" : "Hediye Paketleri",
    "cost" : 347.49,
    "id" : 15,
    "name" : "Yılbaşı Paketi",
    "subName" : "Zeytinyağı, domates, bal..."
  }, {
    "category" : "Paketler",
    "cost" : 234.45,
    "id" : 16,
    "name" : "Haftanın Kırmızı Kutusu",
    "subName" : "Domates, Peynir, Biber, Zeytin... "
  }, {
    "category" : "Biber",
    "cost" : 19.8,
    "id" : 17,
    "name" : "Kaliforniya Biberi ( Kırmızı )",
    "subName" : "1 Kg Kaliforniya Kırmızı Biber"
  }, {
    "category" : "Biber",
    "cost" : 10.5,
    "id" : 18,
    "name" : "Kapya Biberi ( Kırmızı ) 500 Gr",
    "subName" : "500 Gr Kırmızı Kapya Biber"
  }, {
    "category" : "Biber",
    "cost" : 10.5,
    "id" : 19,
    "name" : "Kapya Biberi ( Sarı ) 500 Gr",
    "subName" : "500 Gr Sarı Kapya Biberi"
  }, {
    "category" : "Biber",
    "cost" : 13.9,
    "id" : 20,
    "name" : "Dolmalık Biber",
    "subName" : "1 Kg Dolmalık Biber"
  }, {
    "category" : "Domates",
    "cost" : 11.7,
    "id" : 21,
    "name" : "Mis Salkım Domates",
    "subName" : "1 Kg Mis Salkım Domates"
  }, {
    "category" : "Domates",
    "cost" : 11.7,
    "id" : 22,
    "name" : "Şeker Domates 500 Gr",
    "subName" : "500 Gr Şeker Domates"
  }, {
    "category" : "Domates",
    "cost" : 11.7,
    "id" : 23,
    "name" : "Sarı Şeker Domates 500 Gr",
    "subName" : "500 gr Sarı Şeker Domates"
  }, {
    "category" : "Domates",
    "cost" : 7.6,
    "id" : 24,
    "name" : "Minik Esmer Domates 500 Gr",
    "subName" : "500 Gr Minik Esmer Domates"
  }, {
    "category" : "peynir",
    "cost" : 29.7,
    "id" : 25,
    "name" : "Bergama Tulum Peyniri ( İnek ) 300 Gr",
    "subName" : "300 Gr. Bergama Tulumu (İnek)"
  }, {
    "category" : "Peynir",
    "cost" : 23.8,
    "id" : 26,
    "name" : "Çeçil Peyniri 250 Gr",
    "subName" : "250 Gr Çeçil Peyniri"
  }, {
    "category" : "Peynir",
    "cost" : 26.1,
    "id" : 27,
    "name" : "Çörekotlu Abaza Peyniri 250 Gr",
    "subName" : "250 Gr Çörekotlu Abaza Peyniri"
  }, {
    "category" : "Peynir",
    "cost" : 37.1,
    "id" : 28,
    "name" : "İsli Peynir 400 Gr",
    "subName" : "400 gr Tam Yağlı İsli Peynir"
  }, {
    "category" : "Salça & Turşu",
    "cost" : 17.9,
    "id" : 29,
    "name" : "Doğal Kuru Domates ( Çiftlik Sosu ) 355 Gr",
    "subName" : "355 Gr Kuru Domates"
  }, {
    "category" : "Salça & Turşu",
    "cost" : 17.9,
    "id" : 30,
    "name" : "Doğal Kuru Domates ( Zeytinyağlı ) 355 Gr",
    "subName" : "355 Gr Kurutulmuş Domates"
  }, {
    "category" : "Salça & Turşu",
    "cost" : 17.6,
    "id" : 31,
    "name" : "Ispanaklı Erişte Makarnası 260 Gr",
    "subName" : "260 Gr Elde Kesme Ispanaklı Erişte"
  }, {
    "category" : "Salça & Turşu",
    "cost" : 19.9,
    "id" : 32,
    "name" : "Doğal Domates Suyu 1365 Gr",
    "subName" : "1 Litre Katkısız Domates Suyu"
  }, {
    "category" : "Süt",
    "cost" : 34.9,
    "id" : 33,
    "name" : "Günlük Çiğ Süt ( 5 Lt )",
    "subName" : "5 Lt Çiğ İnek Sütü"
  }, {
    "category" : "Süt",
    "cost" : 34.0,
    "id" : 34,
    "name" : "Süzme Yoğurt 1 Kg ",
    "subName" : "1 Kg Süzme Yoğurt"
  }, {
    "category" : "Süt",
    "cost" : 62.4,
    "id" : 35,
    "name" : "Yayık Tereyağı 500 Gr",
    "subName" : "500 Gr Yayık Tereyağı"
  }, {
    "category" : "Süt",
    "cost" : 9.9,
    "id" : 36,
    "name" : "Günlük Çiğ Süt ( 1 Lt ) Cam Şişe",
    "subName" : "1 Lt. Günlük Çiğ Süt"
  }, {
    "category" : "Yumurta & Sucuk",
    "cost" : 10.9,
    "id" : 37,
    "name" : "Doğal Köy Yumurtası 6 Adet",
    "subName" : "6 Adet Doğal Köy Yumurtası"
  }, {
    "category" : "Yumurta & Sucuk",
    "cost" : 26.9,
    "id" : 38,
    "name" : "Doğal Köy Yumurtası 15 Adet",
    "subName" : "15 Adet Doğal Köy Yumurtası"
  }, {
    "category" : "Yumurta & Sucuk",
    "cost" : 99.9,
    "id" : 39,
    "name" : "Bez Sucuk 500 Gr",
    "subName" : "500 Gr Fermente Bez Sucuk"
  }, {
    "category" : "Yumurta & Sucuk",
    "cost" : 99.9,
    "id" : 40,
    "name" : "File Sucuk 500 Gr",
    "subName" : "500 Gr Fermente File Sucuk"
  }, {
    "category" : "Yumurta & Sucuk",
    "cost" : 65.9,
    "id" : 41,
    "name" : "Doğal Köy Yumurtası 60 Adet",
    "subName" : "60 Adet Doğal Köy Yumurtası"
  }, {
    "category" : "Zeytin & Zeytinyağı",
    "cost" : 27,
    "id" : 42,
    "name" : "Dolgulu Yeşil Zeytin ",
    "subName" : "Sarımsaklı Kekikli 500gr"
  } ]


app.get('/getProducts', cors(), (req, res) => {
    console.log("bu objeye ulaşıldı")
    return res.send(Object.values(products));
});


app.listen(5000, () => 
    console.log('Example app listening on port 5000'),
);