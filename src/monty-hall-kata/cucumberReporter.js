import reporter from 'cucumber-html-reporter';

const options = {
    theme: 'bootstrap',
    jsonFile: './reports/cucumber_report.json',
    output: './reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "0.0.1",
        "Test Environment": "STAGING",
        "Browser": "Chrome  130.0.6723.70",
        "Platform": "MacOS Sequoia",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }

};

reporter.generate(options);
