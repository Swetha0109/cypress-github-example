describe("open the orangeHRM",()=>{
// test suite or test senario
it("open orangeHRM",()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
cy.get('.oxd-button').click();
})




})