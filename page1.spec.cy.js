describe('Login Test', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page1')
        })
  })

  describe('Login Test1', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page1')
      cy.contains('table')
        })
  })

  describe('Login Test2', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/#/page1')
      cy.get('.ant-table-column-sorters').click().should('have.value', 'Joe Black')
        })
  })


