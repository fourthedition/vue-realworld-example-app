// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("login", () => {
  // cy.visit('#/login')
  // cy.get("[data-test=email]").type("fourth@example.com");
  // cy.get("[data-test=password]").type("fourth1234{enter}");
  // cy.hash().should("eq", "#/");
  cy.request({
    method: "POST",
    url: "http://localhost:8080/api/user/login",
    body: {
      user: {
        email: "fourth@example.com",
        password: "fourth1234"
      }
    }
  }).then(res => {
    window.localStorage.setItem("jwt", res.body.user.token)
  })
})
