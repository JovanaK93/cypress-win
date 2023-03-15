/// <reference types="Cypress" />
import { loginPage } from "../page_objects/loginPage";
import { allGalleries } from "../page_objects/allGalleries";

describe("all galleries page test", () => {
    beforeEach("visit gallery app and log in", () => {
      cy.visit("/login");
      loginPage.login("nedovic.filip@gmail.com", "Test12345");
      cy.url().should("not.include", "/login");
    });
  
    it("all galleries successfully loaded", () => {
      allGalleries.allGalleriesHeading
        .should("be.visible")
        .and("have.text", "All Galleries");
    });
  
    it("can filter galleries by text", () => {
      allGalleries.filterGalleries("Nature");
      allGalleries.firstGalleryTitle
        .should("be.visible")
        .and("contain.text", "Nature");
    });
  
    it("can load more galleries", () => {
      allGalleries.loadMoreGalleries();
      cy.get(".box-title").should("have.length.greaterThan", 10);
    });
  
    it("can navigate to the first gallery", () => {
      allGalleries.allGalleries();
      cy.url().should("include", "/galleries/");
    });
  
    it("can navigate to a gallery by index", () => {
      allGalleries.allGalleries(2);
      cy.url().should("include", "/galleries/");
    });
  });
  