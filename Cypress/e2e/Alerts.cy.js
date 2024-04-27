describe('Alerts',()=>{
//test senario , test suite

// java script alert
it('JS Alert',()=>{

cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
cy.get('button[onclick="jsAlert()"]').click();


})





})