import { loginPage } from "../../pages/loginPage"

describe("Login test", () => {
 
  it("should log in and log out successfully", () => {
    cy.visit("https://demo.nopcommerce.com/",{failOnStatusCode: false})

    loginPage.fillLoginForm({
      email: 'annadoe@gmail.com',
      password: 'A123456!'
    })

    loginPage.submit()
    loginPage.verifySuccess()
    loginPage.logout()
  })
})
