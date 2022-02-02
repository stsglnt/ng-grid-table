describe('Table Component', () => {
  beforeEach(() => {
    cy.viewport('macbook-15')
    cy.visit('')
  })

  it('should test selector behavior', () => {
    cy.get('.header > :nth-child(3)').contains('00:05')
    // select 2nd option 30m
    cy.get('.mat-form-field-flex').click();
    cy.get('#mat-option-1 > .mat-option-text').click();
    cy.get('.header > :nth-child(3)').contains('00:30')

    // select 3rd option 60m
    cy.get('.mat-form-field-flex').click();
    cy.get('#mat-option-2 > .mat-option-text').click();
    cy.get('.header > :nth-child(3)').contains('01:00')
  })

})
