export const createTestAccount1 = (balance: string) => {
  cy.get('[data-cy="newAccountSideBar"]').click();
  cy.contains("Account Information");

  cy.get("#account-name").clear().type("Test Account 1");
  cy.get("#starting-balance").clear().type(balance);

  cy.get('[data-cy="createAccount"]').click();


};

export const createTestAccount2 = (balance: string) => {
  cy.get('[data-cy="newAccount"]').click();
  cy.contains("Account Information");

  cy.get("#account-name").clear().type("Test Account 2");
  cy.get("#starting-balance").clear().type(balance);

  cy.get('[data-cy="createAccount"]').click();

};