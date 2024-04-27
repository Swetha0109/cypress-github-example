    describe('handle dropdowns',()=>{
    //test suite or test senario
                it.skip('dropdown with select', ()=>
                {

                cy.visit('https://www.zoho.com/commerce/free-demo.html')
                cy.get('#zcf_address_country')
                .select('Italy')
                .should('have.value','Italy')
                })

             it.skip('dropdown without select', ()=>
            {

                cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
                cy.get('#select2-billing_country-container').click();
                cy.get('input.select2-search__field').type('Italy').type('{enter}');
                cy.get('#select2-billing_country-container').should('have.text','Italy');
                
        
        
                })
            it.skip('Auto Suggested dropdown without select', ()=>
            {

                    cy.visit('https://www.wikipedia.org/')
                    cy.get('#search-form').type('Delhi')
                    cy.get('.suggestion-title').contains('Delhi University').click();
                            
            
            })
            it('Dynamic dropdown without select', ()=>
            {

                    cy.visit('https://www.google.com/')
                    cy.get('input[type="search"]').type('cypress automation')
                    //cy.get('div."matches vertical">cr-realbox-match')
                            
            
            })
        
    
    

    })