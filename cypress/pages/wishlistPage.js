class WishlistPage {
  
    navigateToWishlist() {
      cy.get('.wishlist-label').click()
      cy.url().should('include', '/wishlist')
    }
  
    
    verifyWishlistItemCount(expectedItemCount) {
      cy.get('.wishlist-content .table-wrapper .cart tbody tr')
        .should('have.length', expectedItemCount);
    }
  
  
    verifyItemInWishlist(itemName) {
      cy.get('.wishlist-content').should('contain', itemName)
    }
  }
  
  export const wishlistPage = new WishlistPage()