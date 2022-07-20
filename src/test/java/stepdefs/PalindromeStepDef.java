package stepdefs;

import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
public class PalindromeStepDef {
	String testPalindrome;
	boolean isPalindrome;
	@Given("saya masukan string {string}")
	public void saya_masukan_string(String string) {
	    testPalindrome=string;
	}

	
	@When("saya test apakah palindrome")
	public void saya_test_apakah_palindrome() {
	   String hasilBalik=new StringBuilder(testPalindrome).reverse().toString();
	   isPalindrome=testPalindrome.equalsIgnoreCase(hasilBalik);
	}
	
	@Then("hasilnya harus {string}")
	public void hasilnya_harus(String string) {
		boolean expectedResult=Boolean.parseBoolean(string);
		if(expectedResult) {
			assertTrue(isPalindrome);
		}else {
			assertFalse(isPalindrome);
		}
	}
	
	
}
