# AngelList Auto Applier (DOES NOT WORK AS OF MAY 2019)

![Demo](https://media.giphy.com/media/gH8m2AHvrdlccpyH6n/giphy.gif)

This is a node application intended to automatically apply to jobs for you on AngelList. This will access a Google Sheet that
you own and visit the Angel job URLs. It will scrape the company name, position title, recruiter name and use these along with
your provided cover letter to type a cover letter and send the application. It will then look up the recruiter's email. It willupdate your Google sheet with the company name, position title, recruiter name and e-mail, date applied, and that you did apply.

[Check out the full demo](https://youtu.be/h60e014AXtQ)

## Installing

1. Clone this repo to your computer
1. In a terminal while in the root of this project, run `npm install`

## Prerequisites

- Node
- AngelList account
- Google Sheet that you own and its ID
- Google Drive API Key
- Clearbit API Key

_Note: Your Angel UI **MUST** look like this_
![Old UI](https://i.imgur.com/xRnM1co.png)

_and **NOT** look like this_

![New UI](https://i.imgur.com/XNRqL9X.png)

### Google Sheet and ID

This project requires specific columns for your Google Sheet so you can copy this [Sheet](https://docs.google.com/spreadsheets/d/18RXGQy3v7jEDDOS50eFLO0TiulMijNyv9DGprSmkeyU/edit#gid=0) to ensure you have the correct columns.

**If you are creating your own Google Sheet, ensure the jobs you want to apply to are in the FIRST spreadsheet.**

To get the ID, in your Google Sheet URL, the ID follows after `/d/` and before `/edit#gid=0`.

For example,
[https://docs.google.com/spreadsheets/d/**`18RXGQy3v7jEDDOS50eFLO0TiulMijNyv9DGprSmkeyU`**/edit#gid=0]()

Copy and paste this ID in the `sheetsID` parameter in `config/config.js`.

### Getting a Google Drive API Key and Enabling Access For This Project

For a video, check out [Twilio's tutorial](https://youtu.be/UGN6EUi4Yio?t=14) until 2:30.

For text based directions, click [here](https://github.com/fdistor/angel_autoapplier/tree/master/readme).

### Getting a Clearbit API Key

1. [Sign up](https://clearbit.com/signup) for a Clearbit account if you don't have one
1. Visit the [Clearbit Console](https://dashboard.clearbit.com/)
1. Click on **API** on the side dashboard
1. Copy the ****secret API key**** and paste it between the quotation marks in the file `clearbit_key.example.js` under the `keys` folder
1. **MAKE SURE TO RENAME `clearbit_key.example.js` TO `clearbit_key.js`**

## Running the Program

Given you completed the Prerequisites of this project, you need to edit two files before you can run this app. **This app must not be run headless otherwise AngelList will detect you are a bot.**

1. In `config/config.example.js`, edit the file name to be `config.js` and edit the following parameters:

- `user` to be your email for AngelList (e.g. `hello@world.com`)
- `password` to be your password for AngelList
- `myFullName` to be your name since this will show up in the cover letter

2. In `src/coverLetter.js`, edit the `coverLetter` variable to your desired cover letter.

- If you don't want to include a snippet about the company, don't use the snippet variable in your cover letter
- Currently, the example cover letter will look like this (where the items in between brackets will be replaced with data scraped from the job posting):

```
Hi [Recruiter name],

I'm interested in the [Position Title]. What [Company Name] is doing [Snippet] is great and I want to be a part of it.

From,

[Your Name]
```

3. In a terminal while at the root of the project, type `npm run apply`.

## Built With

- [Puppeteer](https://github.com/GoogleChrome/puppeteer) - Automation framework used to scrape data and apply to jobs
- [Clearbit Prospector API](https://clearbit.com/docs#prospector-api) - Used to fetch recruiter e-mails
- [Google Sheets API](https://github.com/theoephraim/node-google-spreadsheet) - Used to fetch user URLs and update info about job applied

## Motivation

Currently looking for a job and I wanted to automate my very redundant job application process.
I recently made an auto "apply" node application for Vettery as shown [here](https://github.com/fdistor/vettery_autoapply)
and I wanted to take it a step further. I also wanted to take a break from learning iOS development and jump back
into JavaScript.

## Authors

- **Francis Distor** - _Initial work_ - [Github](https://github.com/fdistor)

## Need to do

- Error handling when job data does not exist
- Error handling when URL is not valid
- Give user option to not input a cover letter and handle scenario where a job requires a cover letter
- Send follow-up emails after a week (or user specified)

## Acknowledgments

- [Albert Tu](https://github.com/AlbertLapTu) for giving it a try
