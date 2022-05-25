Cypress.Commands.add('preencheTudo',function(){
	cy.get('#firstName').type('Joel')
	cy.get('#lastName').type('Aicalica')
	cy.get('#email').type('teste@teste.com')
	cy.get('#open-text-area').type('Uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii adoroooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',{delay:0})
	cy.get('button[type="submit"]').click()
})