describe('Login Test1', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
        })
  })
  
  describe('My First Test', () => {
    it('Login Test1', () => {
      cy.visit('#/sign_in?last_page=/')
      cy.contains('Automation')
      cy.get('#normal_login_username')
      .type('testuser')
      cy.get('#normal_login_password')
      .type('pl123')
      cy.get('.ant-btn').click()
     })
  })

 
