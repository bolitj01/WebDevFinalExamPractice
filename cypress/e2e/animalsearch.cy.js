describe("Tag Search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Clears the database", () => {
    cy.get('[data-testid="clear"]').click();
    cy.get('[data-testid="result"]').should("contain", "All animals deleted.");
  });

  it("Uploads an animal searches for it", () => {
    cy.get('[data-testid="animal"]').type("Lion");
    cy.get('[data-testid="url"]').type("https://i1.sndcdn.com/avatars-zlqzZpaIOogVFZ5a-jjNVHw-t500x500.jpg");
    cy.get('[data-testid="upload"]').click();
    cy.get('[data-testid="result"]').should("contain", "Animal Lion uploaded!");
    cy.get('[data-testid="query"]').type("Lion");
    cy.get('[data-testid="search"]').click();
    //Check image src is correct
    cy.get('[data-testid="image"]').should("have.attr", "src", "https://i1.sndcdn.com/avatars-zlqzZpaIOogVFZ5a-jjNVHw-t500x500.jpg");
  });
});
