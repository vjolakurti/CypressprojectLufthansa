import { loginPage } from "../../pages/loginLogoutPage"
import { dashboardPage } from "../../pages/dashboardPage"

describe("Dashboard test", () => {
  before(() => {
    cy.visit("https://demo.nopcommerce.com/",{failOnStatusCode: false})

    loginPage.fillLoginForm({
      email: "annadoe@gmail.com",
      password: "A123456!",
    })
    loginPage.submit()
  })

  it("should navigate to Notebooks and apply filters", () => {
    dashboardPage.navigateToNotebooks()
    dashboardPage.applyDisplayFilter("9")
    dashboardPage.applyAttributeFilter("attribute-16GB")
    dashboardPage.clearAttributeFilter("attribute-16GB")
  })

  it("should add items to Wishlist and Shopping Cart", () => {
    dashboardPage.addToWishlist(2)
    dashboardPage.addToWishlist(3)
    dashboardPage.addToShoppingCart(5)
    dashboardPage.addToShoppingCart(6)
    dashboardPage.verifyMenuCounts(2, 2)
  })
})
