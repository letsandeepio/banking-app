/// <reference types="cypress" />

import { createTestAccount1, createTestAccount2 } from "../utils/helpers";

describe("bank accounts", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should allow user to create multiple bank accounts", () => {
    // Create Test Account #1 with $1000 balance
    createTestAccount1("1000");

      cy.get('[data-cy="accountList"]').contains("Test Account 1");

    // Create Test Account #2 with $1000 balance
    createTestAccount2("1000");

      cy.get('[data-cy="accountList"]').contains("Test Account 2");
  });

  it("should allow the user to delete an account", () => {
    // Create Test Account #1 with $1000 balance
    createTestAccount1("1000");

    // Delete the Test Account # 1

    cy.get('[data-cy="deleteAccount"]').click();
    cy.get('[data-cy="deleteAccountConfirm"]').click();

    cy.get('[data-cy="accountList"]').should(
      "not.contain.text",
      "Test Account 1"
    );
  });

  it("should not allow the user to create an account with less than $100",()=>{
    createTestAccount1("90");

    cy.get('[data-cy="error"]').should(
      "have.text",
      "Starting balance must be less than $10000 & greater than $100"
    );
  })

   it("should not allow the user to create an account with more than $10000", () => {
     createTestAccount1("100001");

     cy.get('[data-cy="error"]').should(
       "have.text",
       "Starting balance must be less than $10000 & greater than $100"
     );
   });

});
