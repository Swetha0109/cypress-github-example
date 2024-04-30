//import {letcode} from "..//PageObject/LetCode";
describe('LetCode Signup', () => {

    //test scenario or test suit
    it('LetCode Signup Functionality', () => {
        cy.visit('https://letcode.in/signup');
        const email = `bindu${Math.floor(Math.random() * 10000)}@gmail.com`;
        const name = `bindu${Math.floor(Math.random() * 10000)}`;
        const password = "Sweth@123";
        // cy.fixture('LetCode.json').then((el) => {
        cy.get('[placeholder="Enter your name"]').type(name);
        cy.get('[placeholder="Enter valid email address"]').type(email);
        cy.get('[type="password"]').type(password);
        cy.get('label.checkbox').click();
        cy.writeFile('cypress/fixtures/singup_credentials.json', {email, password });
        cy.get('.control > .button').click();
        cy.wait(6000);
        cy.get('.navbar-burger').click();
        // cy.get('.buttons > .button').click();
        // cy.pause();
        
        // })
    })
   
    it.skip('Letcode Signin functionality', () => {
        cy.readFile('cypress/fixtures/singup_credentials.json').then(Credential=>{ 
            cy.wait(6000);
            cy.get('.navbar-burger').click();
            cy.get('[href="/signin"]').click();
            cy.get("input[name='email']").type(Credential.email);
            cy.get("input[placeholder='Enter password']").type(Credential.password);
            cy.get("form[class='ng-valid ng-dirty ng-touched'] button[class='button is-primary']").click();
        })
    });

})