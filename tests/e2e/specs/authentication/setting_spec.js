/*
Title:  ทดสอบการตั้งค่า
Tester: Sirawit B.
Date:   8 Aug 2564
*/
describe("/settings", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("#/settings");
  });
  it("Setting Page", () => {
    cy.contains("h1", "Your Settings");
  });
  it("Upload Picture", () => {
    cy.get("#pictureURL").type("https://picsum.photos/200/300");
  });
  it("Get Bio", () => {
    cy.get("#bio1").type(`Tester Fourth`);
  });
  it("Get Email", () => {
    cy.get("#email1").type("fourth@example.com");
  });
  it("Get Password", () => {
    cy.get("#password1").type("fourth1234");
  });
  it("Confirm", () => {
    cy.get("#updateSetting").click();
  });
});
