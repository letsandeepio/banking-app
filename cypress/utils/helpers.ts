export const createTestAccount1 = () => {
  cy.get('[data-cy="newAccountSideBar"]').click();
  cy.contains("Account Information");

  cy.get("#account-name").clear().type("Test Account 1");
  cy.get("#starting-balance").clear().type("1000");

  cy.get('[data-cy="createAccount"]').click();

  cy.get('[data-cy="accountList"]').contains("Test Account 1");
};

export const createTestAccount2 = () => {
    cy.get('[data-cy="newAccount"]').click();
    cy.contains("Account Information");

    cy.get("#account-name").clear().type("Test Account 2");
    cy.get("#starting-balance").clear().type("1000");

    cy.get('[data-cy="createAccount"]').click();

    cy.get('[data-cy="accountList"]').contains("Test Account 2");
}