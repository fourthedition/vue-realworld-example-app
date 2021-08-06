describe("#/login", () => {
  // เริ่มต้นไปที่หน้า Login
  beforeEach(() => {
    cy.visit("/login");
  });
  it("First Time with Login", () => {
    cy.contains("h1", "Sign in");
  });
  it("Link to #/register", () => {
    cy.contains("Need an account?").should("have.attr", "href", "#/register");
  });
  it("Requires Email", () => {
    cy.get("form")
      .contains("Sign in")
      .click();
    cy.get("ul.error-messages").should(
      "contain",
      "email or password is invalid"
    ); // กรณีข้อมูลแสดงผลออกมา
    // assert.isOk('everything',)
  });
  it("Requires Password", () => {
    cy.get("[data-test=email]").type("fourth@example.com{enter}");
    cy.get("ul.error-messages").should(
      "contain",
      "email or password is invalid"
    ); // กรณีข้อมูลแสดงผลออกมา
    // assert.isOk('everything')
  });
  it("Required valid Username and password", () => {
    cy.get("[data-test=email]").type("fourth@example.com");
    cy.get("[data-test=password]").type("fourth123{enter}");
    cy.get("ul.error-messages").should(
      "contain",
      "email or password is invalid"
    ); // กรณีข้อมูลแสดงผลออกมา
    // assert.isOk('everything')
  });
  it("navigation to #/ on successful login", () => {
    cy.get("[data-test=email]").type("fourth@example.com");
    cy.get("[data-test=password]").type("fourth1234{enter}");
    cy.hash().should("eq", "#/");
  });
});
