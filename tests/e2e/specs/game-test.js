// https://docs.cypress.io/api/introduction/api.html

const user = {
  _id: 'pepe',
  username: 'pepe',
};

describe('Game', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a grid', () => {
    cy.getStore().invoke('commit', 'setCurrentUser', user);
    cy.visit('/#/game');
    cy.get('.game')
      .find('.grid');
  });

  it('should redirect to root if not logged', () => {
    cy.visit('/#/game');
    cy.get('.game').should('not.exist');
    cy.get('.home').should('exist');
  });
});
