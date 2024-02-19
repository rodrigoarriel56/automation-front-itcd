class ParametrizacaoGeralElements {
    
    btnManutencaoParametros = () => cy.xpath("//mat-expansion-panel-header[@id='mat-expansion-panel-header-0']/span/mat-panel-title")

    btnBensImoveis = () => cy.xpath("//*/text()[normalize-space(.)='Bens Imóveis']/parent::*")

    btnBensMoveis = () => cy.xpath("//*/text()[normalize-space(.)='Bens Móveis']/parent::*")
    
    btnPrazo = () => cy.xpath("//*/text()[normalize-space(.)='Prazos']/parent::*")

    btnQuantitativos = () => cy.xpath("//*/text()[normalize-space(.)='Quantitativos']/parent::*")

    btnOutros = () => cy.xpath("//*/text()[normalize-space(.)='Outros']/parent::*")

}

export default ParametrizacaoGeralElements;
