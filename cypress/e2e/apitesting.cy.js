describe("HTTP REQUEST",()=>{
    it("GET CALL",()=>{
        cy.request('GET','https://reqres.in/api/users?page=2')
        .its('status')
        .should('equal',200)
    })
    it("POST CALL",()=>{
        cy.request(
            {
              method:'POST',
              url:'https://reqres.in/api/users',
              body:{
                name:"morpheus",
                job:"leader"

              }
            })
        .its('status')
        .should('equal',201)
    })
    it("PUT CALL",()=>{
        cy.request(
            {
              method:'PUT',
              url:'https://reqres.in/api/users/2',
              body:{
                name:"morpheus",
                job:"QA"

              }
            })
        .its('status')
        .should('equal',200)
    })
    it("DELETE CALL",()=>{
        cy.request(
            {
              method:'DELETE',
              url:'https://reqres.in/api/users/2'
            })
        .its('status')
        .should('equal',204)
    })
})