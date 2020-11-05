// https://docs.cypress.io/api/introduction/api.html
/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Stefan's Vue.js + TypeScript App");
  });
});
