class PageObjects{

    getByName(key){
        return cy.get(`[name="${key}"]`);
    }
    
}
export const pageObjects = new PageObjects();