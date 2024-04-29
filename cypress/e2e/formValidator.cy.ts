describe('Check form', () => {
  it('Validator Start', () => {
    cy.visit('http://localhost:3000/')

    cy.fixture('creeds.json').then((item) => {})

    // cy.get(`[data-cy-card="${type}"]`).click()
    // cy.get('[data-cy-modal-selector="package"]').should('have.attr', 'data-cy-modal-val', type)
    // cy.get('[data-cy-close="close"]').click()
  })
})
