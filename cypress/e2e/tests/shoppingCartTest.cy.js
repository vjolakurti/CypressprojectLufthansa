import { loginPage } from "../../pages/loginLogoutPage"
import { dashboardPage } from "../../pages/dashboardPage"
import { shoppingCartPage } from "../../pages/shoppingCartPage"

describe("Shopping Cart Test", () => {
  before(() => {
    cy.visit("https://demo.nopcommerce.com/", {failOnStatusCode: false})
    loginPage.fillLoginForm({
      email: 'annadoe@gmail.com',
      password: 'A123456!',
    })
    loginPage.submit()
  })
  
  it("should verify shopping cart functionality", () => {
    shoppingCartPage.navigateToCart()
    shoppingCartPage.verifyButtons()
    shoppingCartPage.verifyPriceTotal()
    shoppingCartPage.verifyPriceColor()
  })
})
