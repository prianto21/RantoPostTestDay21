package stepdefs;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class RegisterStepDef {
//	mngr422566  vamUtAj
	WebDriver driver = null;
	String baseURL = "https://demo.guru99.com/";

	@Given("User sedang berada di halaman register")
	public void user_sedang_berada_di_halaman_register() {
		System.setProperty("webdriver.chrome.driver", "/home/ancient/Downloads/chromedriver_linux64/chromedriver");
		this.driver = new ChromeDriver();
		driver.navigate().to(this.baseURL);
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	}

	@When("User memasukan email {string}")
	public void user_memasukan_email(String string) {
		driver.findElement(By.name("emailid")).sendKeys(string);
	}

	@When("User menekan tombol submit")
	public void user_menekan_tombol_submit() {
		driver.findElement(By.name("btnLogin")).submit();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Then("User akan melihat kredensial yang diberikan")
	public void user_akan_melihat_kredensial_yang_diberikan() {
		String expect= "Access details to demo site.";
		String actual=driver.findElement(By.xpath("//td/h2")).getText();
		   assertEquals(actual, expect);
		   driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		   driver.close();
	}

	@Then("User akan melihat pesan validasi {string}")
	public void user_akan_melihat_pesan_validasi(String string) {
		String actual=driver.findElement(By.id("message9")).getText();
		   assertEquals(actual, string);
		   driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		   driver.close();
	}
}
