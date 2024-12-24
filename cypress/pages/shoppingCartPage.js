class ShoppingCartPage {
  navigateToCart() {
    cy.get('.ico-cart').click();
    cy.url().should("include", "/cart");
  }

  verifyButtons() {
    cy.get('button[name="updatecart"]').should("be.visible");
    cy.get('.continue-shopping-button').should("be.visible");
    cy.get('button[name="checkout"]').should("be.visible");
  }

  removeItem(itemIndex) {
    cy.get('.table-wrapper .cart tbody tr').should('not.have.length', 0)
    cy.get('.table-wrapper .cart tbody tr')
    .find('td.remove-from-cart')
    .find('.remove-btn')
    .click().click()
  }
  
  verifyCartIsEmpty() {
    cy.contains('Your Shopping Cart is empty!').should('be.visible')
  }
}

export const shoppingCartPage = new ShoppingCartPage()
