class DashboardPage {
  navigateToNotebooks() {
    cy.get('.notmobile > :nth-child(1) > [href="/computers"]').click()
    cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click()
    
  }


  applyFilter() {
    cy.get('#attribute-option-6').check()
    cy.get('#attribute-option-9').check()
  }

  removeFilter(){
    cy.get('#attribute-option-6').click()
    cy.get('#attribute-option-9').click()
  }


  addToWishlist(index) {
    cy.get('.product-item .product-title a').eq(index).click();
    cy.get('[id^="add-to-wishlist-button"]').click().click()
    cy.get('.bar-notification').should('contain', 'The product has been added to your wishlist')
  }

  addToShoppingCart(index) {
    cy.get('.product-item .product-title a').eq(index).click();
    cy.get('[id^="add-to-cart-button"]').click().click()
    cy.get('.bar-notification').should('contain', 'The product has been added to your shopping cart')
  }


}

export const dashboardPage = new DashboardPage()
