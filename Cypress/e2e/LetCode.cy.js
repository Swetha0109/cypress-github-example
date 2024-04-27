import {letcode} from "..//PageObject/LetCode";
describe('LetCode Signup', () => {
    //test scenario or test suit
    it('LetCode Signup Functionality', () => {
        //cy.visit('https://letcode.in');
        // cy.fixture('LetCode.json').then((el) => {
        //     cy.get('[placeholder="Enter your name"]').type(el.name);
        //     cy.get('[placeholder="Enter valid email address"]').type(el.email);
        //     cy.get('[type="password"]').type(el.password);
        //     cy.get('label.checkbox').click();
        //     cy.get("button[class='button is-primary']").click();
        // })
        //letcode.signupUserDetails();
        letcode.signinUserDetails();
    })


})