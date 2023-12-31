describe("Let reset the password" , function(){
    it('Forgot Password' , function(){

        const email = "m.usman.khalid1995@gmail.com"

        //visit the page
        cy.visit("https://safesignnz-stg.azurewebsites.net/auth/login")
        cy.wait(3000)

        
        //click on forgot password
        cy.get('.ml-2').click()
 
        //enter email
        cy.get('input').type(email)

        cy.wait(3000)

        //click Continue
        cy.get('.mt-3').click()
        cy.get('.toasted-container.top-right').should('have.text','An email has been sent with reset password info')
        
        cy.wait(5000)

        //click on login now
        cy.get('.ml-2').click()

        

    })
})