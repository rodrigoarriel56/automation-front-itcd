Feature: Validar funcionalidade de onde utilizar

    Background: Acessar o site da VR
        Given acessar site VR

    @teste @regressivo
    Scenario: Validar funcionalidade de onde utilizar meu VR
        Then devo visualizar as informacoes do site
        And clico no botao pra voce
        And clico no botao unde usar meu vr
        When preencho campo endereco <endereco>
        When seleciono cartao na lista
        And clico no botao confirmar
        And clico no botao buscar
        Then devera ser apresentado tela do google com mapa e os estabecimentos

        Examples:
            | endereco                                               | 
            | Rua Sousa Lima - Barra Funda, São Paulo - SP, Brasil   |
