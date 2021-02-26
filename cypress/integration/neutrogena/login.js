class Login
{

//open the nertrogen site
visit()
{
	cy.visit("https://www.neutrogena.com")
}

// Verify the page title
 verifyPageTitle() {
    cy.title().should('be.equal', 'Skin Care Products for Healthier Skin | Neutrogena®')
}

//click on the profile icon and visit to login page
profileIcon()
{
	cy.get('#wrapper > div.top-banner > div.header-guts-wrapper > div.user-info > a > svg').invoke('show')
    cy.contains('Login').click({force: true})
}

// Enter the username value
    fillEmail(value)
	{
		const field=cy.get('#dwfrm_login_username')
		field.clear()
		field.type(value)
		return this
	}

// Enter the password value
	fillPassword(value)
	{
		const field=cy.get('#dwfrm_login_password')
		field.clear()
		field.type(value)
		return this
	}

	// Click of sumbit CTA 
	submit()
	{
		const button=cy.get('.large')
		button.click()
	}

   //verify the validation message for blank field submission
	verifyValidationMessage() 
   {
		cy.contains('This field is required.').should('have.class', 'error')
		cy.wait(1000)
	}

	//verify the validation message for Incorrect credentials field submission
	verifyIncorrectEmailField()
		{
		cy.contains('Please enter a valid email address.').should('have.class', 'error')
		.wait(3000)
	}

	//verify the validation message for Incorrect credentials field submission

	verifyIncorrectCredentialsField() 
		{
		cy.contains('Sorry, this does not match our records. Check your spelling and try again.').should('have.class', 'error-form')
	}

  }

export default Login


