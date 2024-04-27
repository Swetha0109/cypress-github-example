   import 'cypress-iframe'
   
   describe('handling Iframes',()=>{
        //test suite or test senario
            it.skip('Approach1',()=>{

            cy.visit('https://the-internet.herokuapp.com/tinymce');
            let iframe=cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);
            iframe.clear().type('Welcome to Swetha{ctrl+a}')
            cy.get('button[aria-label="Bold"]').click();
                
            })
                
            it.skip('Approach2 by using custom command',()=>{

                cy.visit('https://the-internet.herokuapp.com/tinymce');
                cy.getIframe('#mce_0_ifr').clear().type('Welcome to Swetha{ctrl+a}')
                cy.get('button[aria-label="Bold"]').click();
                    
                })
        it('Approach3 by using cypress iframe plugin',()=>{
                    cy.visit('https://the-internet.herokuapp.com/tinymce');
                    cy.frameLoaded('#mce_0_ifr'); //load the frame
                    cy.iframe('#mce_0_ifr').clear().type('Welcome Swetha{ctrl+a}')
                    cy.get('button[aria-label="Bold"]').click();
                        
                    })
        })