import { Builder, By, Key, until, WebDriver } from 'selenium-webdriver';
import 'chromedriver'; // Make sure to install 'chromedriver' using npm or yarn

async function example() {
    // Set up Selenium WebDriver
    let driver: WebDriver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to a webpage
        await driver.get('https://www.example.com');

        // Wait for a specific element to load
        await driver.wait(until.elementLocated(By.css('h1')), 10000);

        // Extract text from an element
        let headingElement = await driver.findElement(By.css('h1'));
        let headingText = await headingElement.getText();
        console.log('Heading:', headingText);

        // Other interactions like clicking buttons, filling forms, etc. can be done similarly

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the browser
        await driver.quit();
    }
}

example();
