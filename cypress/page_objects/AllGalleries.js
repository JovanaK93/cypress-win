class HomePage {

    get filterBox() {
      return cy.get(":text");
    }
  
    get filterButton() {
      return cy.get(":button");
    }
  
    get loadMoreButton() {
      return cy.get(".btn.btn-custom");
    }

    get firstGalleryTitle() {
      return cy.get(".box-title").first();
    }
    
  
    enterFilterText(filterText) {
      this.filterBox.type(filterText);
    }

    clickFilterButton() {
      this.filterButton.click();
    }
  
    clickLoadMoreButton() {
      this.loadMoreButton.click();
    }

    clickFirstGalleryTitle() {
      this.firstGalleryTitle.click();
    }
  }
  
  export const homePage = new HomePage();
  