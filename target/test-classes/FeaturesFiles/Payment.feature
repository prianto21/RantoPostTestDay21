Feature: Test Payment

Scenario: memasukan data valid di payment
Given user berada di halaman payment "https://demo.guru99.com/payment-gateway/index.php"
When user memilih "5"
And user mensubmit buy now
And user fill card number "1234123412341234" 
And user fill exp Month "07", exp Year "2022" dan ccv code "123"
And klik pay
Then user mendapatkan pesan "Payment successfull!"
