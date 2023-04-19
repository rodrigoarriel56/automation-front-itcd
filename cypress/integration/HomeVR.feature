Feature: Validar tela home site VR

    Background: Acessar o site da VR
        Given acessar site VR

    @testearriel @testeregressivo
    Scenario: Validar home do site da VR
        Then devo visualizar as informacoes do site
        And clico no botao pra voce
        And clico no botao unde usar meu vr
        Then devera ser apresentado tela do google com mapa