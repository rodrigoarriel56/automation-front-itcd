class HomeElements {
    
    btnManutencaoParametros = () => cy.xpath("//mat-expansion-panel-header[@id='mat-expansion-panel-header-0']/span/mat-panel-title")

    btnBensImoveis = () => cy.xpath("//*/text()[normalize-space(.)='Bens Imóveis']/parent::*")

    btnBensMoveis = () => cy.xpath("//*/text()[normalize-space(.)='Bens Móveis']/parent::*")    

}

export default HomeElements;
