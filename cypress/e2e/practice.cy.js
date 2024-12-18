import Homepage from "../PageObjectModel/practice"
let userdata
var homepage=new Homepage()
describe('logintest',()=>{

    it('PositiveLogin',()=>{
      cy.fixture('example.json').then((data)=>{
        data=userdata;
     
       cy.visit('/')
       homepage.assertionTitle1()
       homepage.username(userdata.username)
       homepage.password()
       homepage.submit()
       
       cy.wait(4000)
       homepage.urlAssertion()
       homepage.pageTitleAssertion()
       homepage.logOutAssertion()
       homepage.logOutButtonClick()
     // negative username test
       cy.visit('/')
       homepage.incorrectUser()
       homepage.password()
       homepage.submit()
       homepage.errorDisplay1()
       homepage.errorMessage1()
     //negative password test
       cy.visit('/')
       homepage.username()
       homepage.incorrectPass()
       homepage.submit()
       homepage.errorDisplay1()
       homepage.eroorMessage2()
    })
  })
})