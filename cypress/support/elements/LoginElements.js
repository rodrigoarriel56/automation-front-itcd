class LoginElements {

    inputUsername = () => cy.get('#username')

    inputPassword = () => cy.get('#password')

    btnLogin = () => cy.get('#kc-login')

    mensagemSucesso = () => cy.xpath('//*/text()[normalize-space(.)=Bem vindo,]/parent::*')

}

export default LoginElements;