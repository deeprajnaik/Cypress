/// <reference types="Cypress" />

import GLogin from '../neutrogena/GLogin'
import Register from  '../neutrogena/Register'
import cart from  '../neutrogena/cart'
import login from '../neutrogena/login'
import Product from '../neutrogena/productpage'
import Homepage from '../neutrogena/NTGHomepage'


describe('Neutrogena', function () {
  const signIn = new GLogin()
  const register = new Register()
  const scart = new cart()
  const lp = new login()
  const pg = new Product()
  const homepage = new Homepage()

  
  beforeEach(() => {
    cy.viewport(1366 , 768)
    //Cypress.Cookies.preserveOnce('PHPSESSID')
  })




  // it('Login', function () {
  //   signIn.visit()



  // })

  it('Register ', function (){
    register.visit()
    register.verifyPageTitle()
    //register.closeOverlay()
    register.validationMessageEmptyFields()
    register.blankSpacesValidation()
    register.passwordValidation()
    register.invalidDataValidation()
    register.fillRegistrationForm()


  })

  it('homepage', function () {
    const homepage=new Homepage()
      homepage.visit()
      homepage.verifyPageTitle()
      //homepage.verifyOverlay()
      homepage.verifyHeaderMenu()
      homepage.verifyMenuLinks()
      homepage.verifyBanner()
      //homepage.verifyCarousels()
      //homepage.verifyallsections()
      homepage.verifyFootersection()
     })

  

  it('cart ', function (){
    /*scart.visit()
    //scart.verifyPageTitle()

    //Verify empty cart test scenarios 
    scart.navigateToCart()
    scart.verifyEmptyCart()
    scart.verifyEmptyCartLogin()
    scart.navigateToCart()
    scart.verifyEmptyCartContinueShopping()
    scart.navigateToCart()
    scart.verifyEmptyCartModuleLogin()
    scart.navigateToCart()
    scart.verifyEmptyCartModuleCreate()
    scart.navigateToCart()
    scart.verifyEmptyCartModuleSunSafe() */
    
    //Verify cart features
    scart.visit()
    scart.addProductToCart()
    scart.navigateToCart()
    scart.verifyPricePresent()
    //Temporary price comparison
    scart.verifyPriceAndSubtotal()

    scart.changeQuantity()
    scart.continueShopping()
    scart.navigateToCart()
    scart.checkout()
    //scart.paypalCheckout() //Facing error with new window 
    scart.clickEditDetails()
    scart.verifyInvalidPromoCode()
    scart.removeItem() 

    /* scart.visit()
    scart.addMultipleProductToCart() //For later
    scart.navigateToCart() */
    

  })
  it('Login', function () {
  //   signIn.visit()
  //login into the neutrogena site
    lp.visit()
    lp.verifyPageTitle()
    lp.profileIcon()

    //blank field submission
    lp.submit()
    lp.verifyValidationMessage()

    //Incorrect email filed submission
    lp.fillEmail('abc@gmail')  
    lp.fillPassword('Testing@123')
    lp.submit()
    lp.verifyIncorrectEmailField()
  
   //Incorrect password filed submission
    lp.fillEmail('switzy12@gmail.com')  
    lp.fillPassword('123456')
    lp.submit()
    lp.verifyIncorrectCredentialsField()

   //Correct email and password filed submission
    lp.fillEmail('switzy12@gmail.com')  
    lp.fillPassword('Testing@123')
    lp.submit()  

   })

  it('viewing product', function (){
    
    pg.visit()
    pg.verifyPageTitle()
    pg.menuItem()
    pg.selectProduct()
    pg.reviewProductImage()
    //pg.VerifyCheckBox()
    pg.numberOfProduct()
    pg.descriptionTab()
    pg.hoverReview()
    pg.searchReview('bad review')
    pg.chooseReview()

  })



})