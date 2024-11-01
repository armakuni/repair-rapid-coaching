module.exports = {
  default: [
    '--require-module ts-node/register', // To use TypeScript
    '--require src/features/steps/**/*.steps.ts', // Use directory with wildcard
    '--format progress', // Use desired output format
    'src/features/**/*.feature', // Path to your feature files
    '--format json:./reports/cucumber_report.json', // Generate JSON report
  ].join(' '),
};
