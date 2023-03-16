class AllGalleriesPage {

    get allGalleriesHeading() {
        return cy.get("h1");
    }

    get galleriesGrid() {
    return cy.get(".grid");
    }

    search(searchTerm) {
      this.searchInput.type(searchTerm);
      this.filterButton.click();
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

    allGalleriesPage(filterText) {
      this.filterBox.type(filterText);
      this.filterButton.click();
      this.loadMoreButton.click();
      this.firstGalleryTitle.click();
  };
};
  
  export const allGalleriesPage = new AllGalleriesPage();
