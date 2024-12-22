class DashboardPage {
  navigateToNotebooks() {
    cy.get("ul.top-menu > li").contains("Computers").trigger("mouseover")
    cy.contains("Notebooks").click()
    cy.url().should("include", "/notebooks")
  }

  applyDisplayFilter() {
    cy.get("select#products-pagesize").select(displayOption);
    cy.get(".product-item").should(
      "have.length",
      displayOption === "9" ? 6 : 0
    )
  }
  applyAttributeFilter(attribute) {
    cy.get(`input[id="${attribute}"]`).check()
    cy.get(".product-item").should("have.length", 1)
  }

  clearAttributeFilter(attribute) {
    cy.get(`input[id="${attribute}"]`).uncheck()
    cy.get(".product-item").should("have.length", 6)
  }

  addToWishlist(itemIndex) {
    cy.get(".product-item")
      .eq(itemIndex - 1)
      .find(".add-to-wishlist-button")
      .click();
    cy.get(".bar-notification").should(
      "contain",
      "The product has been added to your wishlist"
    )
  }

  addToShoppingCart(itemIndex) {
    cy.get(".product-item")
      .eq(itemIndex - 1)
      .find(".add-to-cart-button")
      .click();
    cy.get(".bar-notification").should(
      "contain",
      "The product has been added to your shopping cart"
    )
  }

  verifyMenuCounts(wishlistCount, cartCount) {
    cy.get(".wishlist-qty").should("contain", `(${wishlistCount})`)
    cy.get(".cart-qty").should("contain", `(${cartCount})`)
  }

  addToWishlist(itemIndex) {
    cy.get('.product-item').eq(itemIndex - 1).find('.add-to-wishlist-button').click()
    cy.get('.bar-notification').should('contain', 'The product has been added to your wishlist')
  }
}

export const dashboardPage = new DashboardPage()
