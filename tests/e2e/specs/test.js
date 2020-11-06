// https://docs.cypress.io/api/introduction/api.html
/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Should have correct anchors", () => {
    cy.visit("/");
    cy.get("a")
      .eq(0)
      .should("have.text", "Home");

    cy.get("a")
      .eq(1)
      .should("have.text", "About");
  });

  it("Should have correct header", () => {
    cy.get("h1").should(
      "have.text",
      "Welcome to GitHub Pages Vue.js + TypeScript App example"
    );
  });

  it("Should have correct p", () => {
    cy.get("p").should(
      "have.text",
      " For a guide and recipes on how to configure / customize this project, check out the vue-cli documentation. "
    );
  });
});

describe("Test Navigation", () => {
  it("Should have correct landing page", () => {
    cy.visit("/");
    cy.get("h1").should(
      "have.text",
      "Welcome to GitHub Pages Vue.js + TypeScript App example"
    );
    cy.screenshot();
  });

  it("Should correctly navigate to About", () => {
    cy.get("a")
      .eq(1)
      .click();
    cy.url().should("include", "/about");
    cy.get("h1").should("have.text", "This is an about page");
    cy.screenshot();
  });

  it("Should correctly navigate back to Home", () => {
    cy.get("a")
      .eq(0)
      .click();
    cy.url().should("include", "/");
    cy.get("h1").should(
      "have.text",
      "Welcome to GitHub Pages Vue.js + TypeScript App example"
    );
    cy.screenshot();
  });
});
