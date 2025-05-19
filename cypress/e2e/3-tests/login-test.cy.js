const { validCredentials, invalidCredentials } = require('../../../test-data/test-data')

describe('Credentials Validation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login.html')
  })

  invalidCredentials.forEach(({ email, password, isValid }) => {
    it(`should ${isValid ? 'validate' : 'deny'} this credential -> email: ${email} password: ${password}`, () => {
  
      cy.get('#email').clear().type(email);
      cy.get('#password').clear().type(password);
  
      cy.get('.btn').click();
  
      cy.get('#email').invoke('attr', 'class').then((emailClass) => {
        cy.get('#password').invoke('attr', 'class').then((passwordClass) => {
  
          const emailIsValid = emailClass === 'valid';
          const passwordIsValid = passwordClass === 'valid';
  
          if (isValid && emailIsValid && passwordIsValid) {
            expect(true).to.be.true;
          } else if (!isValid && (!emailIsValid || !passwordIsValid)) {
            expect(true).to.be.true;
          } else {
            throw new Error(`Validation has failed:
              Credential = ${isValid ? 'valid' : 'invalid'}
              email.class = ${emailClass}
              password.class = ${passwordClass}
            `);
          }
        });
      });
    });
  });
  

    it('should allow login with valid credentials', () => {
      cy.get('#email').type(validCredentials.email);
      cy.get('#password').type(validCredentials.password);
      cy.get('.btn').click();

      cy.title().should('eq', 'Login Efetuado');
    });
});
