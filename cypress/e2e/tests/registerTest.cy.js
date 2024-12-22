import { registerPage } from "../../pages/registerPage";

describe("Register test", () => {
  it("should register a new user successfully", () => {
    cy.visit("https://demo.nopcommerce.com/",{ 
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
          },
          failOnStatusCode: false,
     })
    cy.document().then((doc) => {
        cy.log("Page Title: ", doc.title);
        if (doc.title.includes("Attention Required")) {
            cy.log("Cloudflare challenge detected.");
          cy.wait(60000); // Wait for Cloudflare to resolve
          cy.reload();    // Reload the page
        }else {
            cy.log("No Cloudflare challenge detected.");
          }
      });
  
      //cy.get(".header-links", { timeout: 30000 }).should("be.visible");
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
