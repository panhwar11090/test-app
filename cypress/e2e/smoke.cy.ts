// cypress/e2e/smoke.cy.ts (you can keep all 3 describes here)

describe('App loads (smoke)', () => {
  it('renders login component', () => {
    cy.visit('/');
    cy.get('app-root', { timeout: 20000 }).should('exist');
    cy.get('app-login', { timeout: 20000 }).should('be.visible');
    cy.contains('h2', 'Login', { timeout: 20000 }).should('be.visible');
  });
});

describe('Login – success case', () => {
  it('accepts correct credentials and shows a green success message', () => {
    cy.visit('/');
    cy.get('app-root', { timeout: 20000 }).should('exist');

    cy.get('input[name="username"]').clear().type('huzaifa');
    cy.get('input[name="password"]').clear().type('huzaifa123');
    cy.contains('button', 'Login').click();

    cy.contains('p', /login successful/i, { timeout: 20000 })
      .should('be.visible')
      .and('have.css', 'color', 'rgb(0, 128, 0)');
  });
});

describe('Login page (simple)', () => {
  it('shows form and accepts typing', () => {
    cy.visit('/');
    cy.get('app-root', { timeout: 20000 }).should('exist');

    cy.contains('h2', 'Login', { timeout: 20000 }).should('be.visible');
    cy.get('input[name="username"]').should('be.visible').type('alice');
    cy.get('input[name="password"]').should('be.visible').type('secret');
    cy.contains('button', 'Login').should('be.visible').click();
  });
});
