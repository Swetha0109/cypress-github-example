
        describe('Check Ui Elements',()=>
        {
        //test suite or test senario
           /* it('Checking Radio Buttons',()=>
            {
                 cy.visit("https://testautomationpractice.blogspot.com/")

                 // visibility of Radio Buttons
                 cy.get("input#male").should('be.visible');
                 cy.get("input#female").should('be.visible');
                 
                //selecting Radio Buttons

                 cy.get('input#male').check().should('be.checked');
                 cy.get("input#female").should('not.be.checked');

                 cy.get("input#female").check().should('be.checked');
                 cy.get('input#male').should('not.be.checked');


                    
            })*/

            it('Checking Check Boxes',()=>
            {
                 cy.visit("https://testautomationpractice.blogspot.com/")

                 // visibility of Check Boxes
                 //cy.get("input#sunday").should('be.visible');

                 // Selecting the Check Box
                 //cy.get("input#sunday").check().should('be.checked');
                 
                 //Unselecting the Check Box
                // cy.get("input#sunday").uncheck().should('not.be.checked');

                 //Selecting all the check boxes
                // cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked');

                 //unselect all the Check Boxes
                 //cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked');

                 //How to check multiple check Box amoung multiple checkBoxes
                 // select first checkbox
                 cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked');
                 cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked');;

                    
            })
            

        })