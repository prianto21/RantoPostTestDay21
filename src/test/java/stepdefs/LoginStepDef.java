package stepdefs;
import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
public class LoginStepDef {
	WebDriver driver =null;
	String baseURL="https://demo.guru99.com/V1/index.php";
	@Given("User sedang berada di halaman login")
	public void user_sedang_berada_di_halaman_login() {
		System.setProperty("webdriver.chrome.driver","/home/ancient/Downloads/chromedriver_linux64/chromedriver");
		this.driver=new ChromeDriver();
		driver.navigate().to(this.baseURL);
	}

	
	@When("User memasukan userID {string}")
	public void user_memasukan_userID(String string) {
	   driver.findElement(By.name("uid")).sendKeys(string);
	}


	@When("User memasukan Password {string}")
	public void user_memasukan_Password(String string) {
		driver.findElement(By.name("password")).sendKeys(string);
	}

	
	@When("User menekan tombol login dan sistem memprosesnya")
	public void user_menekan_tombol_login_dan_sistem_memprosesnya() {
	    driver.findElement(By.name("btnLogin")).submit();
	    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Then("User harus berada di halaman {string}")
	public void User_harus_berada_di_halaman(String string) {
	   String actual=driver.findElement(By.className("heading3")).getText();
	   assertEquals(actual, string);
	   driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	   driver.close();
	}
	
	@Then("User melihat alert {string}")
	public void user_melihat_alert(String string) {
	   Alert alert=driver.switchTo().alert();
	   String actual=alert.getText();
	   driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	   alert.accept();
	   assertEquals(actual, string);
	   driver.close();
	}
}
