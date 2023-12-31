describe('Lets Automate SafeSign WebApp!', function() {

  it('Login', function() {

    cy.visit("https://safesignnz-stg.azurewebsites.net/auth/login");

    const email = 'admin@safesignnz.com';
    const password = '123';

    cy.get(':nth-child(1) > .form-control').type(email)
    cy.get('.position-relative > .form-control').type(password)
    cy.wait(3000)

    cy.get('.btn-block').click();

    cy.url().should('include', 'https://safesignnz-stg.azurewebsites.net/')
    // cy.get('.sidebar-wrapper.close_icon').trigger('mouseover')
    cy.get("#sidebar-menu").click()

    
    
    

    // cy.get('#checkbox1').should('be.visible')
    //cy.get('#checkbox1').invoke('css', 'opacity', '1');

    //cy.get('.text-muted').check()

    // // Assertion to verify successful login
    // cy.wait(6000); 
    // Submit the login form
 


   //dashboard

  //  cy.title().should('eq',"Dashboard")//verifying title
  //  cy.wait(4000)

  //  cy.get(':nth-child(7) > .sidebar-link').click()//click on reporting
  //  cy.wait(4000)
  //  cy.get('h3').should('have.text',"Reporting")//assertions

  //  cy.wait(4000)
  //  cy.go('back')//go bck to home page
  //  cy.title().should('eq',"Dashboard")//verify ttile again
  // cy.get('.sidebar-list').click({ multiple: true })
 
  
  // cy.get('.submenu-title').click({ force: true });

  

  })

  });