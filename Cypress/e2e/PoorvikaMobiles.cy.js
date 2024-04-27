import poorvikaMobiles from "../PageObject/Poorvikapage";

describe('Poorvika Mobiles', () => {
    //test senario

    it('Poorvika Mobiles', () => {
        //test case
        cy.visit('https://www.poorvika.com/');
        poorvikaMobiles.iphone();
        poorvikaMobiles.smartPhones();
        poorvikaMobiles.basicPhones();

    })


})