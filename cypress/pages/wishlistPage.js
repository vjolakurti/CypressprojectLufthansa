class WishlistPage {
  
    navigateToWishlist() {
      cy.get('.wishlist-label').click()
      cy.url().should('include', '/wishlist')
    }
  
    
    verifyWishlistItemCount(expectedCount) {
      cy.get('.wishlist-item').should('have.length', expectedCount)
    }
  
  
    verifyItemInWishlist(itemName) {
      cy.get('.wishlist-content').should('contain', itemName)
    }
  }
  
  export const wishlistPage = new WishlistPage()