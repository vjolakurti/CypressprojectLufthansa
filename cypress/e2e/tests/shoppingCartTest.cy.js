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
  
  it("should verify products can be added to shopping cart", () => {
    dashboardPage.addToShoppingCart(2)
    shoppingCartPage.navigateToCart()
    shoppingCartPage.verifyButtons()
  })
  
})
