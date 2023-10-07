import * as commonselector from "../support/selectors/common-selector";
import * as homepageselector from "../support/selectors/home-page-selector";

describe('Homo Page Tests', () => {
  it('should display logo', () => {
    cy.visit('/');
    cy.get(commonselector.acceptCookiesButton).click();

    cy.url().should('eq', Cypress.config().baseUrl);

    cy.get(homepageselector.logoIcon)
      .should('be.visible');
  })
})