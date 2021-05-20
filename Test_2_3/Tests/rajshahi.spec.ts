import {RajshahiPage} from '../Pages/RajshahiPage'
import {browser} from 'protractor'
import testData from '../TestData/testdata.json'
describe("test rajshahi page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/rajshahi")
    });
    it('find lowest value', async() => {
        let rajshahiPage = new RajshahiPage()
        await rajshahiPage.do_find_lowest_value(testData.locator.lowest_add_value)   
    });
    it('click on loweat value', async() => {
        let rajshahiPage = new RajshahiPage()
        await rajshahiPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await rajshahiPage.do_click_lowest_value(testData.locator.lowest_add_value)
        
    });
    it('find date text', async() => {
        let rajshahiPage = new RajshahiPage()
        await rajshahiPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await rajshahiPage.do_click_lowest_value(testData.locator.lowest_add_value)
        let ele = await rajshahiPage.find_date_text(testData.locator.date_text)
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let rajshahiPage = new RajshahiPage()
        await rajshahiPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await rajshahiPage.do_click_lowest_value(testData.locator.lowest_add_value)
        let text = await rajshahiPage.find_element_text(testData.locator.element_text)
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let rajshahiPage = new RajshahiPage()
        await rajshahiPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await rajshahiPage.do_click_lowest_value(testData.locator.lowest_add_value)
        await rajshahiPage.do_click_number_button(testData.locator.number_button)
        
    });
    it('valid_phone_number', async() => {
        let rajshahiPage = new RajshahiPage()
        await rajshahiPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await rajshahiPage.do_click_lowest_value(testData.locator.lowest_add_value)
        await rajshahiPage.do_click_number_button(testData.locator.number_button) 
        let numbers = await rajshahiPage.do_valid_phone_number(testData.locator.valid_number)
        
        numbers.map((number:string) => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(number)).toBe(true)
        })
        
    });
})