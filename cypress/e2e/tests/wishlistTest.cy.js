import { loginPage } from '../pages/loginPage';
import { dashboardPage } from '../pages/dashboardPage';
import { wishlistPage } from '../pages/wishlistPage'

describe('Wishlist Test', () => {
  before(() => {
    // Precondition: Log in
    cy.visit('https://demo.nopcommerce.com/')
    loginPage.fillLoginForm({
      email: 'johndoe123@example.com', 
      password: 'Password123!',
    });
    loginPage.submit()
  });

  it('should add items to the wishlist and verify functionality', () => {
    dashboardPage.navigateToNotebooks()
    dashboardPage.addToWishlist(1)
    dashboardPage.addToWishlist(2)

    cy.get('.wishlist-qty').should('contain', '(2)') 
    
    wishlistPage.navigateToWishlist()
    wishlistPage.verifyWishlistItemCount(2) 
    wishlistPage.verifyItemInWishlist('Apple MacBook Pro 13-inch')
  })
})