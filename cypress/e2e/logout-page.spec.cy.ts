import * as loginSelector from "../support/selectors/login-selector";

describe('Logout Tests', () => { 
    it('should log out ', () => {
        cy.login(Cypress.env('userName'), Cypress.env('userPassword'));
        cy.get(loginSelector.logoutButton).click();
        cy.get(loginSelector.signOutButton).click();
        cy.url().should('eq', Cypress.config().baseUrl);
    });
});

