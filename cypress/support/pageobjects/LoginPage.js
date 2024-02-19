/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Preencher campo de usuário
    preencherUsername() {
        cy.get(loginElements.inputUsername()).type('12345678901')
        cy.pause()
    }

    // Preencher campo de senha
    preencherPassword() {
        cy.get(loginElements.inputPassword()).type('12345678')
        cy.pause()
    }

    // Clicar em botão login
    btnLogin() {
        cy.get(loginElements.btnLogin()).click()
    }

    // Mensagem de boas vindas
    mensagemBoasVindas() {
        cy.get(loginElements.mensagemSucesso()).should('contain', 'Bem vindo')
    }

    
}

export default LoginPage;
