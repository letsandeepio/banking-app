/// <reference types="cypress" />

import { createTestAccount1, createTestAccount2 } from "../utils/helpers";

describe("bank accounts", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should allow user to create multiple bank accounts", () => {
    // Create Test Account #1
    createTestAccount1();

    // Create Test Account #2
    createTestAccount2();
  });

  it("should allow the user to delete an account", () => {
    // Create Test Account #1
    createTestAccount1();

    // Delete the Test Account # 1

    cy.get('[data-cy="deleteAccount"]').click();
    cy.get('[data-cy="deleteAccountConfirm"]').click();

    cy.get('[data-cy="accountList"]').should(
      "not.contain.text",
      "Test Account 1"
    );
  });
});
