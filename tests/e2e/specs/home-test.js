// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('should have a grid', () => {
    cy.visit('/');
    cy.get('.home')
      .find('.grid');
  });
});
