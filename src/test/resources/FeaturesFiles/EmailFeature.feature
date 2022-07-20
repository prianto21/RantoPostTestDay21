Feature: Tentukan email valid atau tidak

Scenario: Valid email
Given saya memasukan email "budi@gmail.com"
When saya test formatnya 
Then hasilnya mesti "benar"

Scenario: Invalid email
Given saya memasukan email "budiaja.com"
When saya test formatnya 
Then hasilnya mesti "salah"

