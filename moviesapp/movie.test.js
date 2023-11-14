const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("add movie", async () => {
  await driver.get("http://localhost:3000");

  await driver.wait(until.elementLocated(By.name("movieTitle")), 5000);
  await driver.findElement(By.name("movieTitle")).sendKeys("Rubber duck", Key.RETURN);

  await driver.sleep(3000);
});

test("watch movie", async () => {
  await driver.wait(until.elementLocated(By.css("#movie-0")), 5000);
  await driver.findElement(By.css("#movie-0")).click();
  await driver.sleep(3000);  

});

test("delete", async () => {
  await driver.wait(until.elementLocated(By.className("delete-btn")), 5000);
  await driver.findElement(By.className("delete-btn")).click();  

  await driver.sleep(3000);
});