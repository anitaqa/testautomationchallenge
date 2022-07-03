describe('Page 2 Test', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page2')
        })
  })

  describe('Page 2 Test1', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page2')
      cy.contains('form')
        })
  })

  describe('Page 2 Failure Test1', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page2')
      cy.contains('table')
        })
  })
