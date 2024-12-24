import { loginPage } from '../../pages/loginLogoutPage';
import { dashboardPage } from '../../pages/dashboardPage';
import { wishlistPage } from '../../pages/wishlistPage'

describe('Wishlist Test', () => {
  before(() => {
    // Precondition: Log in
    cy.visit('https://demo.nopcommerce.com/', {failOnStatusCode: false})
    loginPage.fillLoginForm({
      email: "annadoe@gmail.com",
      password: "A123456!",
    });
    loginPage.submit()
  });

  it('should add items to the wishlist and verify functionality', () => {
    dashboardPage.navigateToNotebooks()
    dashboardPage.addToWishlist(1)
    dashboardPage.addToWishlist(2)
    
    wishlistPage.navigateToWishlist()
    wishlistPage.verifyWishlistItemCount(2) 
    wishlistPage.verifyItemInWishlist('Apple MacBook Pro 13-inch')
  })
})