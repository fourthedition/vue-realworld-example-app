/*
Title:  ทดสอบการลงทะเบียน
Tester: Sirawit B.
Date:   6 Aug 2564
*/
/*
Title:  ทดสอบการเข้าสู่ระบบ
Tester: Sirawit B.
Date:   6 Aug 2564
*/
describe("/register", () => {
  // เริ่มต้นไปที่หน้า Login
  beforeEach(() => {
    cy.visit("#/register");
  });
  it("First Time with Signup", () => {
    cy.contains("h1", "Sign up");
  });
  it("Get username", () => {
    const numRandom = Math.floor(Math.random() * 10000);
    cy.get("[data-test=username]").type(`test${numRandom}`);
  });
  it("Get email", () => {
    const numRandom = Math.floor(Math.random() * 10000);
    cy.get("[data-test=email]").type(`fourth${numRandom}@test.com`);
  });
  it("Get password", () => {
    const numRandom = Math.floor(Math.random() * 10000);
    cy.get("[data-test=password]").type(`test${numRandom}`);
  });
});
