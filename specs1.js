
describe('Running multiple test', function(){
 it('Calculating the numbers', function(){

    
    browser.get('http://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual('Super Calculator');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(3);
    element(by.id('gobutton')).click();
    

    var test= element(by.className('ng-binding'));
    expect(test.getText()).toEqual('4');


});
});
