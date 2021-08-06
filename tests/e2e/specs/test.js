// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/posts/new"); // 1.
    cy.get("input.post-title") // 2.
      .type("My First Post"); // 3.
  });
});
