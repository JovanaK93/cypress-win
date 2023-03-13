class CreatePage {

    get titleInput() {
      return cy.get("#title");
    }
  
    get descriptionInput() {
      return cy.get("#description");
    }
  
    get imageUrlInput() {
      return cy.get(":url");
    }
  
    get submitButton() {
      return cy.get(":submit").eq(0);
    }
  
    createGallery(title, description, imageUrl) {
      this.titleInput.type(title);
      this.descriptionInput.type(description);
      this.imageUrlInput.type(url);
      this.submitButton.click();
    }
  }
  
  export const createPage = new CreatePage();