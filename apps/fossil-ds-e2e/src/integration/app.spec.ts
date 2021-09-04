describe('fossil-ds', () => {
  beforeEach(() => cy.visit('/'))

  it('should display the project title', () => {
    cy.contains('h1', 'Fossil DS').should('be.visible')
  })

  it('should open the side menu if the menu icon is clicked', () => {
    cy.get('[aria-label="open drawer"]').click()
    cy.get('[role="button"]').contains('Home').should('be.visible')
  })
})
