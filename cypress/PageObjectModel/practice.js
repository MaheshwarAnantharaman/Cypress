class Homepage{
    url(){
        return cy.visit('https://practicetestautomation.com/practice-test-login/')
    }
    assertionTitle1(){
        return cy.title().should('include','Test Login')
    }
    username(){
        return cy.get('#username').eq(0).type('student')
    }
    password(){
        return cy.get('#password').eq(0).type('Password123')
    }
    submit(){
        return cy.get('button[id="submit"]').click()
    }
    urlAssertion(){
        return cy.url().should('include','https://practicetestautomation.com/logged-in-successfully/')
    }
    pageTitleAssertion(){
        return cy.get('p strong').should('have.text','Congratulations student. You successfully logged in!')
    }
    logOutAssertion(){
        return cy.get('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').should('be.visible')
    }
    logOutButtonClick(){
        return cy.get('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click()
    }
    incorrectUser(){
        return cy.get('#username').eq(0).type('incorrectUser')
    }
    errorDisplay1(){
        return cy.get('.show').should('be.visible')
    }
    errorMessage1(){
        return cy.get('.show').should('have.text','Your username is invalid!')
    }
    incorrectPass(){
        return cy.get('#password').eq(0).type('incorrectPassword')
    }
    eroorMessage2(){
        return cy.get('.show').should('have.text','Your password is invalid!')
    }

}
export default Homepage