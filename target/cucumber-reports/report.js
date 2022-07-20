$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeaturesFiles/EmailFeature.feature");
formatter.feature({
  "name": "Tentukan email valid atau tidak",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Valid email",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "saya memasukan email \"budi@gmail.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.saya_memasukan_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "saya test formatnya",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.saya_test_formatnya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya mesti \"benar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid email",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "saya memasukan email \"budiaja.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.saya_memasukan_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "saya test formatnya",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.saya_test_formatnya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya mesti \"salah\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeaturesFiles/Login.feature");
formatter.feature({
  "name": "Login aplikasi GTPL BANK",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login dengan kredensial valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sedang berada di halaman login",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.user_sedang_berada_di_halaman_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan userID \"mngr422723\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.user_memasukan_userID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan Password \"gAtUgyr\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.user_memasukan_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan tombol login dan sistem memprosesnya",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.user_menekan_tombol_login_dan_sistem_memprosesnya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User harus berada di halaman \"Welcome To Manager\u0027s Page of GTPL Bank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.User_harus_berada_di_halaman(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login dengan kredensial tidak valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sedang berada di halaman login",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.user_sedang_berada_di_halaman_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan userID \"gAtUgyr233\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.user_memasukan_userID(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan Password \"gAtUgyr23\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.user_memasukan_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan tombol login dan sistem memprosesnya",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.user_menekan_tombol_login_dan_sistem_memprosesnya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User melihat alert \"User is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.user_melihat_alert(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeaturesFiles/Palindrom.feature");
formatter.feature({
  "name": "check string palindrom",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "valid palindrome",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "saya masukan string \"bebeb\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.PalindromeStepDef.saya_masukan_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.PalindromeStepDef.saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.PalindromeStepDef.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "invalid palindrome",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "saya masukan string \"baik\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.PalindromeStepDef.saya_masukan_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.PalindromeStepDef.saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.PalindromeStepDef.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeaturesFiles/Register.feature");
formatter.feature({
  "name": "Register Aplikasi GTPL Bank",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register dengan email valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sedang berada di halaman register",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegisterStepDef.user_sedang_berada_di_halaman_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan email \"yanwarsolah@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegisterStepDef.user_memasukan_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan tombol submit",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.RegisterStepDef.user_menekan_tombol_submit()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: unexpected command response\n  (Session info: chrome\u003d103.0.5060.53)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ranto-HP-Laptop-14-cm0xxx\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.15.0-41-generic\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.53, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: /tmp/.com.google.Chrome.axfVEA}, goog:chromeOptions: {debuggerAddress: localhost:44931}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f6eda5e909231d532a6f4ceee5e5cf2e\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.submit(RemoteWebElement.java:88)\n\tat stepdefs.RegisterStepDef.user_menekan_tombol_submit(RegisterStepDef.java:38)\n\tat ✽.User menekan tombol submit(file:///home/ancient/Documents/java/Cucumber-jc/src/test/resources/FeaturesFiles/Register.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "User akan melihat kredensial yang diberikan",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegisterStepDef.user_akan_melihat_kredensial_yang_diberikan()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Register dengan email valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sedang berada di halaman register",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.RegisterStepDef.user_sedang_berada_di_halaman_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan email \"yanwarsolah.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.RegisterStepDef.user_memasukan_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan tombol submit",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.RegisterStepDef.user_menekan_tombol_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User akan melihat pesan validasi \"Email ID is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.RegisterStepDef.user_akan_melihat_pesan_validasi(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});