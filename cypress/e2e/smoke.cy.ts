describe('App loads (smoke)', () => {
  it('renders login component', () => {
    cy.visit('/');
    cy.get('app-login').should('be.visible');
  });
});

describe('Login – success case', () => {
  it('accepts correct credentials and shows a green success message', () => {
    cy.visit('/');

    cy.get('input[name="username"]').clear().type('huzaifa');
    cy.get('input[name="password"]').clear().type('huzaifa123');
    cy.contains('button', 'Login').click();

    // message appears and is green
    cy.contains('p', /login successful/i)
      .should('be.visible')
      .and('have.css', 'color', 'rgb(0, 128, 0)'); // green
  });
});

describe('Login page (simple)', () => {
  it('shows the form, accepts typing, and stays on the page when submit is clicked', () => {
    cy.visit('/');

    // form is visible
    cy.contains('h2', 'Login').should('be.visible');
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.contains('button', 'Login').should('be.visible');

    // type into fields
    cy.get('input[name="username"]').type('alice');
    cy.get('input[name="password"]').type('secret');

    // click submit; we just confirm we stayed on the same page (no full reload)
    cy.contains('button', 'Login').click();
    cy.contains('h2', 'Login').should('be.visible');
  });
});
