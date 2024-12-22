import { loginPage } from "../pages/loginPage"
import { dashboardPage } from "../pages/dashboardPage"
import { shoppingCartPage } from "../pages/shoppingCartPage"

describe("Empty Shopping Cart Test", () => {
  before(() => {
    cy.visit("https://demo.nopcommerce.com/")
    loginPage.fillLoginForm({
      email: "johndoe123@example.com",
      password: "Password123!",
    });
    loginPage.submit()
    dashboardPage.navigateToNotebooks()
    dashboardPage.addToShoppingCart(5)
    dashboardPage.addToShoppingCart(6)
  })

  it("should remove all items from the shopping cart", () => {
    shoppingCartPage.navigateToCart();
    shoppingCartPage.verifyCartItemCount(2)
    shoppingCartPage.removeItem(1)
    shoppingCartPage.verifyCartItemCount(1)
    shoppingCartPage.removeItem(1)
    shoppingCartPage.verifyCartIsEmpty()
  })
})
