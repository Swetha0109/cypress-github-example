class PoorvikaMobiles {
    displayMobilesAndAccessories() {
        cy.get('.desktopmenu_desktopmenu__menu_section__rL0qk:nth-child(1)').trigger('mouseover').within(() => {
            cy.get(".desktopmenu_dropdown__Fua3K").invoke("show");

     
        });
        cy.wait(4000);

    }
    iphone() {
        this.displayMobilesAndAccessories();
        cy.get(".desktopmenu_desktopmenu__menu_section__rL0qk:nth-child(1) a[title='IPhones']").click();
        cy.wait(4000);
    }
    
    smartPhones() {
        this.displayMobilesAndAccessories();
        cy.get(".desktopmenu_desktopmenu__menu_section__rL0qk:nth-child(1) a[title='Smart Phones']").click();
        cy.wait(4000);
    }
    basicPhones() {
        this.displayMobilesAndAccessories();
        cy.get(".desktopmenu_desktopmenu__menu_section__rL0qk:nth-child(1) a[title='Basic Phones']").click();
    }


}
const poorvikaMobiles = new PoorvikaMobiles();
export default poorvikaMobiles;