Feature: Login aplikasi GTPL BANK
Scenario: login dengan kredensial valid
Given User sedang berada di halaman login
When User memasukan userID "mngr422723"
And User memasukan Password "gAtUgyr"
And User menekan tombol login dan sistem memprosesnya
Then User harus berada di halaman "Welcome To Manager's Page of GTPL Bank"

Scenario: login dengan kredensial tidak valid
Given User sedang berada di halaman login
When User memasukan userID "gAtUgyr233"
And User memasukan Password "gAtUgyr23"
And User menekan tombol login dan sistem memprosesnya
Then User melihat alert "User is not valid"
