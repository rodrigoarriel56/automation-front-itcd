class CausaMortisElements {
    
    btnCausaMortis = () => cy.xpath("//*/text()[normalize-space(.)=''causa mortis'']/parent::*")

    btnCalculoImposto = () => cy.xpath("//*/text()[normalize-space(.)='Cálculo do Imposto']/parent::*")    

    btnMulta = () => cy.xpath("//*/text()[normalize-space(.)='Multa']/parent::*")

    btnObrigatoriedadeDocumentos = () => cy.xpath("//*/text()[normalize-space(.)='Obrigatoriedade dos Documentos']/parent::*")

    btnPerfilAcesso = () => cy.xpath("//*/text()[normalize-space(.)='Perfil de Acesso']/parent::*")

    btnPrazo = () => cy.xpath("//div[@id='cdk-accordion-child-1']/div/button[5]/span")

}

export default CausaMortisElements;
