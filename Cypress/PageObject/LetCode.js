import { pageObjects } from "..//PageObject/PageObjects";

export class Letcode {

    signupUserDetails() {
        cy.visit('https://letcode.in/signup');
        cy.fixture('LetCode.json').then((el) => {
            pageObjects.getByName('name').type(el.name);
            pageObjects.getByName('email').type(el.email);
            pageObjects.getByName('password').type(el.password);
            cy.get('.control > .button').click();
            //cy.get("button[class='button is-primary']").click();
            //cy.get('[role="alertdialog"]').contains('Error: The email address is already in use by another account.');
            

                // cy.get('[placeholder="Enter your name"]').type(el.name);
                // cy.get('[placeholder="Enter valid email address"]').type(el.email);
                // cy.get('[type="password"]').type(el.password);


            })

   
        }
        signinUserDetails(){
            cy.visit('https://letcode.in/signin');
            cy.fixture('LetCode.json').then((el) => {
            pageObjects.getByName('email').type(el.email);
            pageObjects.getByName('password').type(el.password);
            cy.get('form.ng-dirty > .has-addons > .control > .button').click();
            
    
            })
    
        }

    
    }
    export const letcode = new Letcode();