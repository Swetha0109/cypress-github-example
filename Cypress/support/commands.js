/// <reference types="cypress"/>



Cypress.Commands.add('getIframe',(iframe)=>{

  return cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        })