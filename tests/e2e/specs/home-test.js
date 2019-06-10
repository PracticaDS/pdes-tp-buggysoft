// https://docs.cypress.io/api/introduction/api.html

const user = {
  _id: 'pepe',
  username: 'pepe',
};

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should show the user login input if not logged', () => {
    cy.visit('/');
    cy.get('.home').should('exist');
    cy.get('input').should('exist');
  });

  it('Should show the factories table if logged', () => {
    cy.visit('/');
    cy.getStore().invoke('commit', 'setCurrentUser', user);
    cy.get('.home').should('exist');
    cy.get('.title').should('exist');
    cy.get('table').should('exist');
  });
});
