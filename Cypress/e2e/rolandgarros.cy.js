describe("open Rolandgarros website",()=>{
//test suite
it('open Rolandgarros website',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });
cy.visit('https://www.rolandgarros.com/en-us/');
//cy.wait(6000);

cy.get('#privacy-overlay').click();
// cy.get('#popin_tc_privacy_button_3')
// cy.get('#popin_tc_privacy_button_3').click();
// cy.get('.menu-mobile').click();
// cy.get('#Tournament > a').click();




})



})