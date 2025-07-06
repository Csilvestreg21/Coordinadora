const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/report.json',
  output: 'reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Project": "Coordinadora",
    "Plataforma": "API - Automatización",
    "Ejecutado por": "Cata",
    "Fecha": new Date().toLocaleString(),
  },
};

reporter.generate(options);
