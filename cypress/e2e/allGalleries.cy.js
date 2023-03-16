/// <reference types="Cypress" />
import { loginPage } from "../page_objects/loginPage";
import { allGalleriesPage } from "../page_objects/allGalleries";

describe("all galleries page test", () => {
    beforeEach("visit gallery app and log in", () => {
      cy.visit("/login");
      loginPage.login("nedovic.filip@gmail.com", "Test12345");
      cy.url().should("not.include", "/login");
    });
  
    it("all galleries successfully loaded", () => {
      allGalleriesPage.allGalleriesHeading
        .should("be.visible")
        .and("have.text", "All Galleries");
    });

    it("test pagination", () => {
        allGalleriesPage.galleriesGrid.children().should("have.length", 10);
        allGalleriesPage.loadMoreButton.click();
        allGalleriesPage.galleriesGrid.children().should("have.length", 20);
        allGalleriesPage.loadMoreButton.click();
    });

    it("search for specific gallery", () => {
        let searchTerm = "najnovija galerija";
        allGalleriesPage.search(searchTerm);
    });    
});