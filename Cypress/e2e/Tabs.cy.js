describe('Handle Tabs',()=>{
 
it('Approach1',()=>{
cy.visit('https://the-internet.herokuapp.com/windows')  
//parent tab
cy.get('.example>a').invoke('removeAttr','target').click();
//clicking on child tab

cy.url().should('include','/windows/new')
cy.wait(5000);

cy.go('back');
//go back to parent tab

})

it.skip('Approach2',()=>{
    cy.visit('https://the-internet.herokuapp.com/windows')  
    //parent tab
    cy.get('.example>a').then((e)=>{

       let url=e.prop('href')
    cy.visit(url);
    })
cy.url().should('include','/windows/new')
cy.url().should('include','')
    cy.wait(5000);
    cy.go('back');
    //go back to parent tab
    
    })





})