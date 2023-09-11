describe("tags page", () => {
  it("Should display tags page and test it", () => {
    cy.visit("http://localhost:3000/tags/");

    // test title
    cy.get("h2").should("be.visible").contains("Tags");

    // test description
    cy.get(`[data-cy="description"]`)
      .should("be.visible")
      .contains("Select spesific notes based on the list of tags below.");

    // test navbar
    cy.get("nav").should("be.visible").get("a").should("be.visible").contains("は");
    cy.get(`[aria-label="switch theme"]`).should("be.visible");
    cy.get(`[data-cy="menu"]`).should("be.visible");

    // test footer
    cy.get("footer")
      .should("be.visible")
      .get("p")
      .should("be.visible")
      .contains("Crafted by Haikel");

    // test tag item
    cy.get(`[data-cy="tag-item"]`)
      .should("be.visible")
      .get("p")
      .contains("photography")
      .click("center");

    // test slug title
    cy.get("h2").should("be.visible");

    // test available note item
    cy.get(`[data-cy="note-item"]`).should("be.visible");
  });
});
