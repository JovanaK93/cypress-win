/// <reference types="Cypress" />
import { loginPage } from "../page_objects/loginPage";
import { createNewGallery } from "../page_objects/createNewGallery";

describe("create gallery page test", () => {
  beforeEach("visit gallery app and log in", () => {
    cy.visit("/login");
    loginPage.login("nedovic.filip@gmail.com", "Test12345");
    cy.url().should("not.include", "/login");

    createNewGallery.createGalleryLink.click();
  });

  it("can create a gallery", () => {
    createNewGallery.createGallery(
      "Test Gallery",
      "This is a test gallery",
      "https://jpeg.org/images/jpeg-home.jpg"
    );

    cy.url().should("include", "/galleries");
    cy.get(".box-title").first().should("contain.text", "Test Gallery");
  });
});
