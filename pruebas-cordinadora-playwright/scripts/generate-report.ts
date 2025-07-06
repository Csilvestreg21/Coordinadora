// generate-report.ts
import reporter from 'cucumber-html-reporter';

const options = {
  theme: 'bootstrap' as const,
  jsonFile: 'reports/report.json',  // donde se guarda el resultado JSON
  output: 'reports/report.html',    // HTML de salida
  reportSuiteAsScenarios: true,
  launchReport: true,               // 👈 abre el reporte en el navegador
  metadata: {
    "Proyecto": "Pruebas Coordinadora",
    "Ambiente": "Test",
    "Herramientas": "Playwright + Cucumber + Screenplay",
    "Fecha": new Date().toLocaleString()
  }
};

reporter.generate(options);
