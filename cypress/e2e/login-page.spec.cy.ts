describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
  })

  it('should successfully log in', () => {
    cy.login(Cypress.env('userName'), Cypress.env('userPassword'));

  })

  it('should show an error message with invalid credentials', () => {
    const invalidUsername = 'invalid_username';
    const invalidPassword = 'invalid_password';
    cy.login(invalidUsername, invalidPassword);
    cy.contains('The Email Address field is not a valid e-mail address.').should('be.visible');
  })
});