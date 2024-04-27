describe("using fixtures",()=>{
//test suite or test senario
it("using fixtureswe write test case",()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.fixture("login.json").then((user)=>{

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.username);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user.password);
cy.get('.oxd-button').click();
cy.screenshot();


})

})



})