
import {element, by} from 'protractor';

export class BasePage{
    //set locator for find lowest value

    public async do_find_lowest_value (locator:string){
        return await element.all(by.className(locator)).last()       
    }  
    
    //set locator for click on lowest value
    public async do_click_lowest_value(locator:string){
        return await element.all(by.className(locator)).last().click()
    }
    //set locator for find date text and actions
    public async find_date_text(locator:string){
        return await element(by.className(locator)).getText()
    }

    //fset locator for ind element text and actions
    public async find_element_text(locator:string){
        return await element(by.className(locator)).getText()
    }
    //set locator for click on number button 

    public async do_click_number_button(locator:string){
        return await element(by.className(locator))
    }
    //set locator for validation phone number and valid array of phone numbers 
    public async do_valid_phone_number(locator:string)
    {
        return await element.all(by.css(locator)).map(ele => ele.getText())
    }
}
