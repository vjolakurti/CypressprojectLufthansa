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
    dashboardPage.applyFilter()
    dashboardPage.removeFilter()
   })

  it("should add items to Wishlist and Shopping Cart", () => {
   dashboardPage.addToWishlist(2)
   dashboardPage.addToShoppingCart(2)
  
   })
})
