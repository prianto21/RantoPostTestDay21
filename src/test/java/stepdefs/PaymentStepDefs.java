package stepdefs;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class PaymentStepDefs {
	WebDriver driver;

	@Given("user berada di halaman payment {string}")
	public void user_berada_di_halaman_payment(String string) {
		System.setProperty("webdriver.chrome.driver", "/home/ancient/Downloads/chromedriver_linux64/chromedriver");
		this.driver = new ChromeDriver();
		driver.get(string);
	}

	@When("user memilih {string}")
	public void user_memilih(String string) {
		WebElement cardNumber = driver.findElement(By.xpath("//select[@name='quantity']"));
		cardNumber.sendKeys(string);
	}

	@When("user mensubmit buy now")
	public void user_mensubmit_buy_now() {
		WebElement buyNow = driver.findElement(By.xpath("//input[@value='Buy Now']"));
		buyNow.sendKeys(Keys.RETURN);
	}

	@When("user fill card number {string}")
	public void user_fill_card_number(String string) {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			WebElement cardNumber = driver.findElement(By.xpath("//input[@id='card_nmuber']"));
			cardNumber.sendKeys(string);

		} catch (Exception e) {

		}
	}

	@When("user fill exp Month {string}, exp Year {string} dan ccv code {string}")
	public void user_fill_exp_Month_exp_Year_dan_ccv_code(String expMonth, String expYear, String ccvCode) {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		try {
			WebElement expMonth1 = driver.findElement(By.xpath("//select[@id='month']"));
			expMonth1.sendKeys(expMonth);
			WebElement expYear1 = driver.findElement(By.xpath("//select[@id='year']"));
			expYear1.sendKeys(expYear);
			WebElement cvCode = driver.findElement(By.xpath("//input[@id='cvv_code']"));
			cvCode.sendKeys(ccvCode);
		} catch (Exception e) {

		}

	}

	@When("klik pay")
	public void klik_pay() {
		WebElement pay = driver.findElement(By.xpath("//input[@name='submit']"));
		pay.click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@Then("user mendapatkan pesan {string}")
	public void user_mendapatkan_pesan(String string) {
		WebElement info = driver.findElement(By.xpath("//h2[normalize-space()='Payment successfull!']"));
		assertEquals(info.getAttribute("innerHTML"), string);
		driver.close();
	}

}
