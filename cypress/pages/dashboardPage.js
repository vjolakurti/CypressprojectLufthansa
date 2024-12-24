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


  addToWishlist() {
    cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();
    cy.get('#add-to-wishlist-button-4').click().click()
    cy.get('.bar-notification').should('contain', 'The product has been added to your wishlist')
  }

  addToShoppingCart() {
    cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();
    cy.get('#add-to-cart-button-9').click().click()
    cy.get('.bar-notification').should('contain', 'The product has been added to your shopping cart')
  }
}

export const dashboardPage = new DashboardPage()
