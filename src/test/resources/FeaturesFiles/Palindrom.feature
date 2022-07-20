Feature: check string palindrom
	Scenario: valid palindrome
		Given saya masukan string "bebeb"
		When saya test apakah palindrome
		Then hasilnya harus "true"

	Scenario: invalid palindrome
		Given saya masukan string "baik"
		When saya test apakah palindrome
		Then hasilnya harus "false"