describe('Bag Page Tests', () => {
    beforeEach(() => {
      cy.visit('/cart');
    });

    it('check cart default state',() =>{
      cy.contains('Your bag is empty').should('be.visible');
    })
  })