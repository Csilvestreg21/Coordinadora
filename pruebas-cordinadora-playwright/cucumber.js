
module.exports = {
    default: {
      require: [
        "src/steps/**/*.ts",
        "src/support/hooks.ts",
        "src/support/world.ts"
      ],
      requireModule: ["ts-node/register"],
      format: ["progress", "html:reports/report.html"],
      publishQuiet: false,
      tags: ""
    }
  }
  