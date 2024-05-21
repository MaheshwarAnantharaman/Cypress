describe("Sokos Hotels",()=>{
    it("Room Reservation",()=>{
        cy.visit('https://www.sokoshotels.fi/en')
        cy.get('div[class="sc-825a091e-5 gpLRGc"] button:nth-child(2)').click()
        cy.get('input[data-test-id="city-or-hotel"]').type('bre')
        cy.get('input[aria-activedescendant="downshift-142-item-0"]').each(($hotel)=>{
           if($hotel.text().includes('Break Sokos Hotel Bomba')){
            cy.wrap($hotel).click()
           }
        })
        cy.get('body > div:nth-child(2) > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1').type('16.05.2024')
        cy.get('body > div:nth-child(2) > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').type('17.05.2024')
        cy.get('.sc-b035052a-0.sc-29e46207-0.eOfWBe.eWKWBG.sc-1b60a1ab-13.hXWFsz.availabilitySearch_availability-search-hide-small__67gJG.sc-1b60a1ab-13.hXWFsz.availabilitySearch_availability-search-hide-small__67gJG').type('2')
        cy.get('button[type="submit"]').click()
    })
})