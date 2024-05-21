describe("api testing",()=>{
   it("hardcode json object",()=>{
    const requestbody=
        {
            id: 7,
            email: "prabu@reqres.in",
            first_name: "Prabhu",
            last_name: "V",
        }
    
    cy.request(
        {
          method:'PUT',
          url:'https://reqres.in/api/users/2',
          body:requestbody
        })
    .then((response)=>{
        expect(response.body.first_name).to.eq("Prabhu")
        expect(response.body.id).to.eq(7)
        expect(response.body.last_name).to.eq("V")
    })
   })
   
   it("Approach using fixture",()=>{
    var requestbody;
    cy.fixture('example').then((data)=>{
        var requestbody =data
   
    cy.request(
        {
          method:'POST',
          url:'https://reqres.in/api/users/2',
          body:requestbody
        })
    .then((response)=>{
        expect(response.body.name).to.eq(requestbody.name)
        expect(response.body.job).to.eq(requestbody.job)


    })
   })
})
})