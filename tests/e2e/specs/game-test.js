// https://docs.cypress.io/api/introduction/api.html

describe('Game', () => {
  it('should have a grid', () => {
    cy.visit('/#/game');
    cy.get('.game')
      .find('.grid');
  });
});
