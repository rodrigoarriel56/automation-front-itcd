/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements

import CausaMortisElements from '../elements/CausaMortisElements'
const causaMortisElements = new CausaMortisElements

class OndeUsarElements {

    CausaMortis() {
        cy.get(causaMortisElements.btnCausaMortis()).click()
        cy.get(causaMortisElements.btnCalculoImposto()).click()
    }

    // Ainda não tem a tela de calculo do imposto.
    
    preencherEndereco() {
        cy.get(ondeUsarElements.preencherEndereco()).click()
    }

    // Preencher campo endereco
    preencherEndereco(endereco) {
        cy.get(ondeUsarElements.preencherEndereco()).type(endereco)
    }

    // Clicar no campo de seleção de cartões
    selecioneCartao() {
        cy.get(ondeUsarElements.selecioneCartao()).click()
    }

    // Selecionar cartão a ser pesquisado    
    cartaoUtilizar() {
        cy.get(ondeUsarElements.cartaoUtilizar).click()
    }
    
    // Clicar no botão confirmar busca por onde utilizar cartão
    btnConfirmar() {
        cy.get(ondeUsarElements.btnConfirmar()).click()
    }

    // Clicar no botão buscar
    btnBuscar() {
        cy.get(ondeUsarElements.btnBuscar()).click()
    }

    // Validar botão de ajuda visivél
    btnAjuda() {
        cy.get(ondeUsarElements.btnAjuda()).should('contain', 'Ajuda')
    }

    
}

export default OndeUsarElements;
