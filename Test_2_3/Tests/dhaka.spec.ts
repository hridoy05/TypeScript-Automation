import {DhakaPage} from '../Pages/DhakaPage'
import {browser} from 'protractor'
import testData from '../TestData/testdata.json'
describe("test dhaka page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/dhaka")
    });
    it('find lowest value', async() => {
        let dhakaPage = new DhakaPage()
        await dhakaPage.do_find_lowest_value(testData.locator.lowest_add_value)   
    });
    it('click on loweat value', async() => {
        let dhakaPage = new DhakaPage()
        await dhakaPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await dhakaPage.do_click_lowest_value(testData.locator.lowest_add_value)
        
    });
    it('find date text', async() => {
        let dhakaPage = new DhakaPage()
        await dhakaPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await dhakaPage.do_click_lowest_value(testData.locator.lowest_add_value)
        let ele = await dhakaPage.find_date_text(testData.locator.date_text)
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let dhakaPage = new DhakaPage()
        await dhakaPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await dhakaPage.do_click_lowest_value(testData.locator.lowest_add_value)
        let text = await dhakaPage.find_element_text(testData.locator.element_text)
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let dhakaPage = new DhakaPage()
        await dhakaPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await dhakaPage.do_click_lowest_value(testData.locator.lowest_add_value)
        await dhakaPage.do_click_number_button(testData.locator.number_button)
        
    });
    it('valid_phone_number', async() => {
        let dhakaPage = new DhakaPage()
        await dhakaPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await dhakaPage.do_click_lowest_value(testData.locator.lowest_add_value)
        await dhakaPage.do_click_number_button(testData.locator.number_button) 
        let numbers = await dhakaPage.do_valid_phone_number(testData.locator.valid_number)
        
        numbers.map((num:string) => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(num)).toBe(true)
        })
        
    });
})