/* global Given, Then, When */

import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage
const homePage = new HomePage


Given("acessar site VR", () => {
    loginPage.acessarSite();
})

Then("devo visualizar as informacoes do site", () => {
    homePage.visualizarMensagem();
})