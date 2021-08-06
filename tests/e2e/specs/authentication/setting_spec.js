describe("/settings", () => {
  beforeEach(() => {
    cy.login()
    cy.visit("#/settings")
  })
  it("Setting Page", () => {
    cy.contains("h1", "Your Settings")
  })
})
