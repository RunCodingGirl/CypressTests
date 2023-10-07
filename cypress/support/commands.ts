import '@testing-library/cypress/add-commands';
import * as loginSelector from "./selectors/login-selector";
import * as commonselector from "./selectors/common-selector";

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      login(username: string, password: string): Chainable;
      greetings(name1:string, name2:string): Chainable;
    }
  }
}
 
Cypress.Commands.add("login", (username, password) => {
  cy.visit('/login')
  cy.get(commonselector.acceptCookiesButton).click();
  cy.get(loginSelector.emailAddressField).type(username);
  cy.get(loginSelector.passwordField).type(password);
  cy.get(loginSelector.loginbutton).click();
});


