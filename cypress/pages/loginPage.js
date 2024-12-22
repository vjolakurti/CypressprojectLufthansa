class LoginPage {
  fillLoginForm({ email, password }) {
    cy.get(".ico-login").click()
    cy.get("#Email").type(email)
    cy.get("#Password").type(password)
  }
  submit() {
    cy.get(".login-button").click()
  }
  verifySuccess() {
    cy.contains("Welcome to our store").should("be.visible")
    cy.get(".ico-logout").should("be.visible")
  }
  logout() {
    cy.get(".ico-logout").click()
  }
}

export const loginPage = new LoginPage()
