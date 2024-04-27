import {pageObjects} from "../PageObject/PageObjects";

export class Login   {

correctUsernameAndPassword(){
    pageObjects.getByName('username').type('Admin {enter}');
    pageObjects.getByName('password').type('admin123');

}
incorrectUsernameAndPassword(){
    pageObjects.getByName('username').type('admin {enter}');
    pageObjects.getByName('password').type('admin123');

}



}
export const login = new Login();