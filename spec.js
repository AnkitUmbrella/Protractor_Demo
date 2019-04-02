// Ruuning two multiple Tests
describe('Enter name feature', function(){

it('Should enter name as Tom', function(){

   browser.get('http://juliemr.github.io/protractor-demo/');
   browser.driver.sleep(3000);
   element(by.model('first')).sendKeys(3);
   element(by.model('second')).sendKeys(3);
   element(by.id('gobutton')).click();

});

});

 describe('Yahoo title test', function(){

    it('Get title test', function(){
    browser.driver.sleep(10000);
    browser.get('https://in.yahoo.com/');
    var title = browser.getTitle();
    expect(title==='Yahoo');

   });

  });


