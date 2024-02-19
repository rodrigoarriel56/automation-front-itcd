/// <reference types="Cypress" />

import ParametrizacaoGeralElements from '../elements/ParametrizacaoGeralElements'
import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const parametrizacaoGeralElements = new ParametrizacaoGeralElements
const url = Cypress.config("baseUrl")

class ParametrizacaoGeralPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
    
    // Clica no botão parametrização
    clicarBtnParametrizacaoGeral() {
        cy.get(parametrizacaoGeralElements.btnManutencaoParametros).click()
        cy.pause()
    }
    // Clica no botão bens imoveis
    clicarBtnImoveis() {
        cy.get(parametrizacaoGeralElements.btnBensImoveis).click()
        cy.pause()
    }    

    // Clica no botão bens moveis
    clicarBtnMoveis() {
        cy.get(parametrizacaoGeralElements.btnBensMoveis).click()
        cy.pause()
    }

    // Clica no botão Prazo
    clicarBtnPrazo() {
        cy.get(parametrizacaoGeralElements.btnPrazo).click()
        cy.pause()
    }

    // Clica no botão Quantitativos
    clicarBtnQuantitativos() {
        cy.get(parametrizacaoGeralElements.btnQuantitativos).click()
        cy.pause()
    }

    // Clica no botão Quantitativos
    clicarBtnOutros() {
        cy.get(parametrizacaoGeralElements.btnOutros).click()
        cy.pause()
    }

    
    // Quando o ambiente normaliza, continuar com o desenvolimento de objetos visiveis em tela
    // Valida compa visivel
    campoVisivel() {
        cy.visit('#colocar mensagem visivel')
    }

    mensagemVisivel() {        
        cy.get(parametrizacaoGeralElements.endereco()).should('contain', 'Digite o nome ou endereço de um lugar')
    }

    campoEnderecoVisivel() {        
        cy.get('#endereco')
    }

        // Validar botão de Compre online"
        visualizarMensagem() {
            cy.get(parametrizacaoGeralElements.mensagemSucesso()).should('contain', 'Compre online')
    }    
    
    
    
}

export default ParametrizacaoGeralPage;
