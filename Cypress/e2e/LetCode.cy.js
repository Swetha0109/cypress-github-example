//import {letcode} from "..//PageObject/LetCode";
describe('LetCode Signup', () => {
    //test scenario or test suit
    it('LetCode Signup Functionality', () => {
        cy.visit('https://letcode.in/signup');
        const email=`bindu1${Math.floor(Math.random* 10000)}@gmail.com`;
        const name=`bindu1${Math.floor(Math.random*1000)}`;
        const password="swetha";
        //cy.fixture('LetCode.json').then((el) => {
            cy.get('#name').type(name);
            cy.get('#email').type(email);
            cy.get('#pass').type(password);
            cy.get('.checkbox').click();
            cy.get("button[class='button is-primary']").click();
        // })
        
    })


})