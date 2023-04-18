Feature: Validar tela home site VR

    Background: Acessar o site da VR
        Given acessar site VR

    @testearriel @acessosite
    Scenario: Validar home do site da VR
        Then devo visualizar as informacoes do site

    @testeregressivo
    Scenario Outline: Validar home do site da VR
        Given acesso a pagina do site
        And clico no botao pra voce
        And clico no botao unde usar meu vr
        Then devera ser apresentado tela do google com mapa