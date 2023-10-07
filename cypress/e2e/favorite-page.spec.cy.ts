import * as commonselector from "../support/selectors/common-selector";

describe('Favorite Page Tests', () => {
    beforeEach( () => {
      cy.visit('/wishlist');
    });

  
    it('check favorite page default state',() =>{
      //add check for url and check that some item is displayed
    });

    it('should add an item to favorites', () => {
      cy.visit('/sale/adidas/womens#dcp=1&dppp=120&OrderBy=rank&Filter=CATG%5EShorts');
      cy.get(commonselector.acceptCookiesButton).click();

      cy.get(commonselector.wishListButton)
      .first().click();
      cy.get(commonselector.itemSelector).first().click();
      cy.get(commonselector.addToWishListButton).click(); 
  });
})
  
  
  
  