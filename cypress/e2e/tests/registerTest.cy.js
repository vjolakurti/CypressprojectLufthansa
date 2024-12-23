import { registerPage } from "../../pages/registerPage";

describe("Register test", () => {
  it("should register a new user successfully", () => {
    cy.visit("https://demo.nopcommerce.com/",{failOnStatusCode: false,})
    
    registerPage.fillForm({
      fistName: "Anna",
      lastName: "Doe",
      day: "3",
      month: "July",
      year: "1995",
      company: "Testers",
      email: "annadoe@gmail.com",
      password: "A123456!",
    })
    registerPage.submitForm()
    registerPage.verifySuccess()
  })
})
