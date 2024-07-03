const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //specPattern: ["*/.feature", "cypress/integration/*/.cy{js,jsx,ts,tsx}"],
    chromeWebSecurity: false,

    setupNodeEvents(on, config){
      on('file:preprocessor', cucumber());
      return config;
    },
    specPattern: "cypress/e2e/stepDefinitions/*.feature",
  }, 
});