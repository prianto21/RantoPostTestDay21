package stepdefs;

import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class EmailFeatureStepDef {
	
	String email="";
	String hasilCek="";
	@Given("saya memasukan email {string}")
	public void saya_memasukan_email(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    this.email=string;
	}

	@When("saya test formatnya")
	public void saya_test_formatnya() {
	    // Write code here that turns the phrase above into concrete actions
		if(this.email.contains("@")) {
			this.hasilCek="benar";
		}else {
			this.hasilCek="salah";
		}
	}

	@Then("hasilnya mesti {string}")
	public void hasilnya_harus(String string) {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertTrue(this.hasilCek.equals(string));
	  
	}
}
