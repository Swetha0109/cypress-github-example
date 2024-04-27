/// <reference types='cypress'/>
describe('Blur',()=>{

it('blur commands',()=>{

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get('input[name="username"]').focus().type('Admin').blur({ force: true });

})




})