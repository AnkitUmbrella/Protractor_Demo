// Running two multiple it blocks
describe('Running multiple test', function(){
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');

       var firstname=  element(by.model('first')),
       var secondname= element(by.model('second')),
       var button= element(by.id('gobutton'));



        //1 TC
        it('Get the title of page', function(){
       expect(browser.getText()).toEqual('Super Calculator');

        });


        //2 TC
        it('Should add 2 numbers', function(){
         firstname.sendKeys(1);
         secondname.sendKeys(3);
         button.click();


        });

         //3 TC
       
        //2 TC
        it('Should add 2 numbers', function(){
            firstname.sendKeys(1);
            secondname.sendKeys(3);
            button.click();
   
   
        });    

    });

    });
