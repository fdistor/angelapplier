const sheets = require('./spreadsheet.js');
const auto = require('./puppeteer');
const SearchRecruiterEmail = require('./clearbit');

const applyToJobsQuery = 'applied = No and haslink = TRUE';

const applyToAngel = async () => {
	const jobs = await sheets.accessSpreadsheet(applyToJobsQuery);
	const updatedJobs = await auto.autoApply(jobs);

	for (let job of updatedJobs) {
		const { domain, recruiter } = job;
		const searchRecruiterEmail = new SearchRecruiterEmail(domain, recruiter);

		job.email = await searchRecruiterEmail.searchByDomain();

		sheets.updateSpreadsheetRow(job);
	}
};

applyToAngel();
