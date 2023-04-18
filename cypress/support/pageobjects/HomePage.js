/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const homeElements = new HomeElements
const url = Cypress.config("baseUrl")

class HomePage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

//    visualizar() {
  //      cy.visit('contain', 'Compre online')
    //}

    // Visualizar mensagem de erro "Usuário ou senha inválidos."
    visualizarMensagem() {
        cy.get(loginElements.mensagemSucesso()).should('contain', 'Compre online')
    }    
    
}

export default HomePage;
