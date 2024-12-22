class ShoppingCartPage {
  navigateToCart() {
    cy.get(".cart-label").trigger("mouseover");
    cy.contains("Go to cart").should("be.visible").click();
    cy.url().should("include", "/cart");
  }

  verifyButtons() {
    cy.get('button[name="updatecart"]').should("be.visible");
    cy.get('a[class="continue-shopping-button"]').should("be.visible");
    cy.get('button[name="checkout"]').should("be.visible");
  }

  verifyPriceTotal() {
    let totalPrice = 0;

    cy.get(".cart-item .unit-price")
      .each(($el) => {
        const price = parseFloat($el.text().replace("$", ""))
        totalPrice += price
      })
      .then(() => {
        cy.get(".cart-total .value").should(($total) => {
          const displayedTotal = parseFloat($total.text().replace("$", ""))
          expect(displayedTotal).to.equal(totalPrice)
        })
      })
  }

  verifyPriceColor() {
    cy.get(".cart-item .unit-price").should(
      "have.css",
      "color",
      "rgb(0, 0, 255)"
    )
  }

  removeItem(itemIndex) {
    cy.get(".cart-item")
      .eq(itemIndex - 1)
      .find(".remove-btn")
      .click();
  }
  verifyCartItemCount(expectedCount) {
    cy.get(".cart-item").should("have.length", expectedCount)
  }
  verifyCartIsEmpty() {
    cy.get(".order-summary-content").should(
      "contain",
      "Your Shopping Cart is empty!"
    )
  }
}

export const shoppingCartPage = new ShoppingCartPage()
