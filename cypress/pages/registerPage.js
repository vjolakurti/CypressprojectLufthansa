class RegisterPage {
  fillForm({ fistName, lastName, day, month, year, email, company, password }) {
    cy.get(".ico-register",{ timeout: 80000 }).click()
    cy.get("#gender-male").click()
    cy.get("#FirstName").type(fistName)
    cy.get("#LastName").type(lastName)
    cy.get('[name="DateOfBirthDay"]').select(day)
    cy.get('[name="DateOfBirthMonth"]').select(month)
    cy.get('[name="DateOfBirthYear"]').select(year)
    cy.get("#Email").type(email)
    cy.get("#Company").type(company)
    cy.get("#Password").type(password)
    cy.get("#ConfirmPassword").type(password)
  }
  submitForm() {
    cy.get("#register-button").click()
  }
  verifySuccess() {
    cy.get(".result", { timeout: 10000 }).should("contain", "Your registration completed")
  }
}

export const registerPage = new RegisterPage()
