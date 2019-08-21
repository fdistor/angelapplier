const { gmailUser, gmailPassword, myFullName } = require('../config/config.js');
const options = {
	user: gmailUser,
	pass: gmailPassword,
	to: 'francis.distor@gmail.com',
	subject: 'test'
};
const send = require('gmail-send')(options);

// send({ text: 'test' })
// 	.then(result => console.log(result))
// 	.catch(err => console.error('Error:', err));

class FollowUp {
	constructor(jobs) {
		this.jobs = jobs;
		this.updatedJobs = null;
	}

	createOptions(email, position) {
		const subject = `${position} - ${myFullName} application`;

		return {
			user: gmailUser,
			pass: gmailPassword,
			to: email,
			subject
		};
	}

	createLetter(firstName, date, position, company) {
		return `Hi ${firstName},\n\n\
I hope this finds you well! I recently applied through AngelList on ${date} for the ${position} \
position, but I have not yet heard back. I understand you are busy so I wanted to follow up on my \
application and reiterate my interest in ${company}.\n\n\
Thank you for your time and consideration and I look forward to hearing back!\n\n\
Best,\n\n\
${myFullName}
`;
	}

	getFirstName(fullName) {
		return fullName.split(' ')[0];
	}

	async followUpOneJob(job) {
		const { email, position, recruiter } = job;
		const options = this.createOptions(email, position);
	}

	followUpAllJobs(jobs) {
		jobs.forEach(job => this.followUpOneJob);
	}
}

const ne = new FollowUp();
console.log(
	ne.createLetter('Yasmine', 'Aug 11', 'Software Engineer', 'Google')
);
