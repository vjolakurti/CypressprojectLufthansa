import { loginPage } from "../pages/loginPage"
import { dashboardPage } from "../pages/dashboardPage"
import { shoppingCartPage } from "../pages/shoppingCartPage"

describe("Shopping Cart Test", () => {
  before(() => {
    cy.visit("https://demo.nopcommerce.com/")
    loginPage.fillLoginForm({
      email: "johndoe123@example.com",
      password: "Password123!",
    })
    loginPage.submit()
    dashboardPage.navigateToNotebooks()
    dashboardPage.addToShoppingCart(5)
    dashboardPage.addToShoppingCart(6)
  })

  it("should verify shopping cart functionality", () => {
    shoppingCartPage.navigateToCart()
    shoppingCartPage.verifyButtons()
    shoppingCartPage.verifyPriceTotal()
    shoppingCartPage.verifyPriceColor()
  })
})
