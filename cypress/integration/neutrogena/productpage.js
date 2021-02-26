class Product
{

//open the nuetrogena site
visit()
{
  cy.visit("https://www.neutrogena.com")
  .wait(3000)

}

// Verify the page title
 verifyPageTitle() {
    cy.title().should('be.equal', 'Skin Care Products for Healthier Skin | Neutrogena®')
}

//Click on Nevigation menu and select the product
menuItem()
{
//Click on "skin care" nav menu bar
  cy.get('#navigation ul.menu-category.level-1 > li:nth-child(2) > a')
    .click({force: true})
    .wait(3000)

//click on "masks" product type in dropdown
  cy.get('#navigation li:nth-child(2) > div > div > div.menu-groupings > div:nth-child(3) > ul > li:nth-child(5) > a')
    .click({force: true})
  cy.contains('Masks').should('have.class', 'nav-subcat-link')
   .wait(3000)
}

// select the first product from PLP (product list page)
  selectProduct()
  {
    //select the first product "Hydro Boost Hydrating 100% Hydrogel Mask" from PLP
    cy.get('.tile-hover-img').first().click()
    cy.contains('Hydro Boost Hydrating 100% Hydrogel Mask').should('have.class', 'product-name')
    .wait(3000)
  }

// Checking for alternate product image
 reviewProductImage()
 {
  //Click on the alternate image "Hydro Boost Hydrating 100% Hydrogel Mask" from PDP
 cy.get('#pdpMain div.product-col-1.product-image-container.product-col-1-main > div#thumbnails > ul > div > div > li:nth-child(2) > a > img')
 .click()
 .wait(3000)
}

VerifyCheckBox(){
//Click on repeat-deliverty checkbox
cy.get('.repeat-delivery-label')
  .click()
//cy.contains('Repeat Delivery').should('have.class', 'pdp-replenish pdp-replenish-header')
.wait(3000) 

// selecting the "Every 30 days" option from dropdown
cy.get('#dwopt_6815420_omxSubscriptionID') 
  .select('Every 30 days')
  .should('have.value','1')
  .wait(3000) 
}

numberOfProduct()
{
// select the number of product from dropdown
cy.get('#Quantity').select('5')
  .should('have.value','5')
  .wait(3000)
}

// switching to description tab
descriptionTab()
{
//click on "Ingredients" tab
  cy.get('.pdpIngredients').click()
  cy.contains('Ingredients').should('have.class', 'tab-label')
  .wait(3000)

//click on "How To Use" tab
  cy.get('.pdpHowToUse').click()
  cy.contains('How To Use').should('have.class', 'tab-label')
  .wait(3000)
}


hoverReview()
{
  //click on review stars
  cy.get('.bv_avgRating_component_container')
    .click()
  //cy.contains('Reviews').should('have.class', 'bv-action-bar')
    .wait(3000)
}

// searching for review by instering the value
 searchReview(value)
  {
    const field=cy.get('#bv-text-field-search-contentSearch1')
    field.clear()
    field.type(value)
    //click on search bar and type, search for review
    cy.get('#BVRRSearchContainer button[type="button"].bv-content-btn.bv-content-search-btn.bv-focusable > span.bv-search-control-icon')
      .click({force: true})
      .wait(3000)
      cy.contains('Search Results').should('have.class', 'bv-action-bar-header')
      .wait(3000)
     
     //click on forward arrow to go to the next page
    cy.get('#bv-content-list-products-wrapper span.bv-content-btn-pages-next')
      .click()
      .wait(3000)

       //click on close button
       cy.get('#bv-mbox-close-label')
         .click({force: true})
         .wait(3000)
}

chooseReview()
{   
//Click the mostHelpful once
  cy.get('#BVRRContainer div.bv-control-bar-sort > div > div > button[type="button"] > span.bv-dropdown-arrow')
  .click()
  .wait(3000)
  cy.get('#data-bv-dropdown-item-mostHelpful')
  .click()
  cy.contains('5 out of 5 stars.').should('have.class', 'bv-off-screen')
  .wait(3000)

//Click the positive once
  cy.get('#BVRRContainer div.bv-control-bar-sort > div > div > button[type="button"] > span.bv-dropdown-arrow')
  .click()
  .wait(3000)
  cy.get('#data-bv-dropdown-item-positive')
  .click()
  cy.contains('5 out of 5 stars.').should('have.class', 'bv-off-screen')
  .wait(3000)

//Click the negative once
  cy.get('#BVRRContainer div.bv-control-bar-sort > div > div > button[type="button"] > span.bv-dropdown-arrow')
  .click()
  .wait(3000)
  cy.get('#data-bv-dropdown-item-negative')
  .click()
  //cy.contains('1 out of 5 stars.').should('have.class', 'bv-off-screen')
  .wait(3000)

//Click the most recent once
  cy.get('#BVRRContainer div.bv-control-bar-sort > div > div > button[type="button"] > span.bv-dropdown-arrow')
  .click()
  .wait(3000)
  cy.get('#data-bv-dropdown-item-mostRecent')
  .click()
  //cy.contains('1 out of 5 stars.').should('have.class', 'bv-off-screen')
  .wait(3000)
}
}
export default Product


