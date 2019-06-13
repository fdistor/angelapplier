const puppeteer = require("puppeteer");
const { user, password } = require("../config/config.js");

const navigateToLogin = async page => {
  const homepage = "https://angel.co";

  await page.goto(homepage);
  await page.waitForSelector(".auth.login");
  await page.click(".auth.login");
};

const logInUser = async page => {
  await page.waitForSelector("#user_email");
  await page.click("#user_email");
  await page.type("#user_email", user);
  await page.waitForSelector("#user_password");
  await page.click("#user_password");
  await page.type("#user_password", password);
  await page.click(".c-button");
  await page.waitForNavigation({ waitUntil: "networkidle2" });
};

const getRecruiterName = async page => {
  await page.waitForSelector(".name");
  const span = await page.$(".name");
  return await page.evaluate(element => element.textContent, span);
};

const clickOnButton = async (page, selector) => {
  await page.click(".c-button--lg");
};

const applyToJob = async (page, job) => {
  const applyButton = ".buttons.js-apply.applicant-flow-dropdown";
  await page.goto(job.link);
  await page.waitForSelector(applyButton);
  await clickOnButton(page, applyButton);

  const name = await getRecruiterName(page);
  console.log(name);
};

const applyToAllJobs = async (page, jobs) => {
  jobs.forEach(job => {});
};

const autoApply = async jobs => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 10
  });

  const homepage = "https://angel.co";
  const page = await browser.newPage();

  await navigateToLogin(page);
  await logInUser(page);

  await applyToJob(page, jobs[0]);

  await page.waitFor(3000);

  // Close Browser once finished
  await browser.close();
};

module.exports = { autoApply };