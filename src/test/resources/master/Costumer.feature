Feature: add telecom master custumer

  Scenario: Menambahkan costumer baru data terisi
  Given costumer sedang berada dihalaman add costumer "email..."
  When costumer memilih "done"
  And costumer memasukan nama "melsi" dan "gogo"
  And costumer memasukan email "melsi@gmail.com"
  And costumer memasukan address "bandung"
  And costumer memasukan telp "09912304913"
  And costumer klik submit dan di proses
  Then costumer harus mendapatkan pesan sukses "Acces Details to Guru99 Telecom"
   
