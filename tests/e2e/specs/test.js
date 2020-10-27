// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("https://stefanseeger.github.io/vue-test-ts/");
    cy.contains("h1", "Welcome to Stefans Vue.js + TypeScript App");
  });
});
