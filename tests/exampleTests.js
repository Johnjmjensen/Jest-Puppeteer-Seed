
var elementObjects =require('../objects/elementObjects') 

beforeEach(async () => {
    await page.goto('https://www.wikipedia.org', {waitUntil: 'networkidle2'})
})
describe('mat.org prescription workflows',() => {

    test.each`
    add    |stuff  |Sum 
    ${'1'} |${'5'} | ${'6'}
    ${'2'} |${'4'} | ${'6'}
    ${'3'} |${'3'} | ${'6'}
    ${'4'} |${'2'} | ${'6'}
    ${'5'} |${'1'} | ${'6'}
    `('Partial Search Prescription is added to list', async ({add,stuff,Sum}) => {
        expect(parseFloat(add)+parseFloat(stuff)).toEqual(parseFloat(Sum));

    });
   
    test('get wikipedia logo', async () => {
        await page.waitForSelector(elementObjects.wikipediaSlogan)
        var slogan = await page.$eval(elementObjects.wikipediaSlogan, elementObjects.getText) 
        expect(slogan).toEqual("The Free Encyclopedia");
    });
});
