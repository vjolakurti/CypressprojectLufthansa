// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register'
beforeEach(() => {
    // Modify User-Agent for every test
    cy.visit('https://demo.nopcommerce.com/', {failOnStatusCode: false}, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
      },
    });
  });
  Cypress.Cookies.defaults({
    preserve: ['__cfduid', '__cf_bm'], // Cloudflare cookies
  });
  before(() => {
    cy.setCookie('__cfduid', 'your-cookie-value');
    cy.setCookie('__cf_bm', 'your-cookie-value');
  });