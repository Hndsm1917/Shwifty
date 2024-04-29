import proposals from '../../src/configs/proposals'

describe('Pick Package Test', () => {
  it('Card Picks correct type', () => {
    cy.visit('http://localhost:3000/')

    proposals.forEach(({ type }) => {
      cy.get(`[data-cy-card="${type}"]`).click()
      cy.get('[data-cy-modal-selector="package"]').should('have.attr', 'data-cy-modal-val', type)
      cy.get('[data-cy-close="close"]').click()
    })
  })
})
