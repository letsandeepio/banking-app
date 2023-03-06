/// <reference types="cypress" />

import { createTestAccount1 } from "../utils/helpers";

describe("transactions", () => {
  beforeEach(() => {
    cy.visit("/");
    // Create Test Account #1 worth $1000 balance
    createTestAccount1("1000");
  });

  it("should allow the user to deposit into bank account", () => {
    cy.get('[data-cy="deposit"]').click();
    cy.get("#amount").clear().type("100");

    cy.get('[data-cy="submitDeposit"]').click();

    cy.get('[data-cy="accountBalance"]').should("have.text", "$1100");
  });

  it("should allow user to withdraw from bank account", () => {
    cy.get('[data-cy="withdraw"]').click();
    cy.get("#amount").clear().type("100");

    cy.get('[data-cy="submitWithdraw"]').click();

    cy.get('[data-cy="accountBalance"]').should("have.text", "$900");
  });

  it.only("shouldn't allow the user to deposit more than $10000 into bank account in single transaction", () => {
    cy.get('[data-cy="deposit"]').click();
    cy.get("#amount").clear().type("10001");

    cy.get('[data-cy="submitDeposit"]').click();

    cy.get("#amount-error").should(
      "have.text",
      "Cannot deposit more than $10,000"
    );
  });

  it("should'nt allow the user to withdraw from bank account if balance is less than $100", () => {
    cy.get('[data-cy="withdraw"]').click();
    cy.get("#amount").clear().type("900");

    cy.get('[data-cy="submitWithdraw"]').click();

    // Ensure the account have only $100 balance
    cy.get('[data-cy="accountBalance"]').should("have.text", "$100");

    cy.get('[data-cy="withdraw"]').click();
    cy.get("#amount").clear().type("100");
    cy.get('[data-cy="submitWithdraw"]').click();

    cy.get("#amount-error").should(
      "have.text",
      "Account balance cannot be less than $100."
    );
  });

  it("should'nt allow the user to withdraw from 90% of their available balance", () => {
    // Deposit $9000 into the bank account, total will be $10000
    cy.get('[data-cy="deposit"]').click();
    cy.get("#amount").clear().type("9000");

    cy.get('[data-cy="submitDeposit"]').click();

    // 90% of $10000 is $9000, trying to withdraw $9100 now
    cy.get('[data-cy="withdraw"]').click();
    cy.get("#amount").clear().type("9100");

    cy.get('[data-cy="submitWithdraw"]').click();

    // Should result in an error
    cy.get("#amount-error").should(
      "have.text",
      "Withdrawal limit is exceeded. Available balance to withdraw: $9000"
    );
  });
});