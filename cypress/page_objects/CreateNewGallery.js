class CreatePage {

    get titleInput() {
      return cy.get("#title");
    }
  
    get descriptionInput() {
      return cy.get("#description");
    }
  
    get imageUrlInput() {
      return cy.get("#imageUrl");
    }
  
    get submitButton() {
      return cy.contains("Submit");
    }
  
    createGallery(title, description, imageUrl) {
      this.titleInput.type(title);
      this.descriptionInput.type(description);
      this.imageUrlInput.type(imageUrl);
      this.submitButton.click();
    }
  }
  
  export const createPage = new CreatePage();