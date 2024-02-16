/* global Given, Then, When */

import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import OndeUsarPage from '../pageobjects/OndeUsarPage'
const loginPage = new LoginPage
const homePage = new HomePage
const ondeUsarPage = new OndeUsarPage


Given("acessar site VR", () => {
    loginPage.acessarSite();
})

Then("devo visualizar as informacoes do site", () => {
    homePage.visualizarMensagem();
})

And("clico no botao pra voce", () => {
    homePage.clicarBotaoPraVoce();
})

When("preencho campo endereco", () => {
    ondeUsarPage.preencherEndereco();
})

When("seleciono cartao na lista", () => {
    ondeUsarPage.selecioneCartao();
})

And("clico no botao confirmar", () => {
    ondeUsarPage.btnConfirmar();
})

And("clico no botao buscar", () => {
    ondeUsarPage.btnBuscar();
})

Then("devera ser apresentado tela do google com mapa", () => {
    homePage.campoEnderecoVisivel();
})