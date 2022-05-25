/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
	beforeEach(function(){
		cy.visit('./src/index.html')
	})
	it('verifica o título da aplicação', function() {
		cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })
	it('Preencher campos e enviar forms', function() {
		cy.get('#firstName').type('Joel')
		cy.get('#lastName').type('Aicalica')
		cy.get('#email').type('teste@teste.com')
		cy.get('#open-text-area').type('Uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii adoroooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',{delay:0})
		cy.get('button[type="submit"]').click()
		cy.get('.success').should('be.visible')
  })
	it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
		cy.get('#firstName').type('Joel')
		cy.get('#lastName').type('Aicalica')
		cy.get('#email').type('testeteste.com') // sem arroba
		cy.get('#open-text-area').type('Uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii adoroooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',{delay:0})
		cy.get('button[type="submit"]').click()

		cy.get('.error').should('be.visible') 
  })

	it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
		
		cy.preencheTudo()


		
		cy.get('.success').should('be.visible') 
  })

  it('Seleção botão YT por texo', function() {

		cy.get('#product').select('YouTube').should('have.value','youtube')
		
				
  })

  it('Teste com Check, campos seleçao unica', function() {

		cy.get('input[type="radio"]').should('have.length',3).each(function($radio){
			cy.wrap($radio).check()
			cy.wrap($radio).should('be.checked')}
		)
		
		
				
  })


   
  it('Upload de arquivos', function() {

		cy.get('input[type="file"]')
		.should('not.have.value')
		.selectFile('./cypress/fixtures/example.json') // .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})  para simular arrastando o arquivo
		.should(function($input){
			expect($input[0].files[0].name).to.equal('example.json')
		})
		
				
  })

   it.only('Pagina em nova aba', function() {

		cy.get('#privacy a').should('have.attr','target','_blank')
		
				
  })

})



