package runnerFiles;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features="src/test/resources/FeaturesFiles",
glue="stepdefs",
plugin = {
		"pretty",
		"html:target/cucumber-reports",
		"json:target/cucumber-reports/Cucumber2021.json"
}
		)
public class RunnerFileTestNG extends AbstractTestNGCucumberTests{
	
}
