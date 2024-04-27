import {login} from "../PageObject/Loginpage";

describe('Orange HRM',()=>{
it('Test Login',()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
login.correctUsernameAndPassword();

})


})