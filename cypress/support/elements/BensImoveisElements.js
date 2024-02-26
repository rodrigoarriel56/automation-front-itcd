class BensImoveisElements {

    btnBensImoveis = () => cy.xpath('//*/text()[normalize-space(.)="Bens Imóveis"]/parent::*')

    btnImoveisExterior = () => cy.xpath('//*/text()[normalize-space(.)="add"]/parent::*')

    btnImoveisRurais = () => cy.xpath('//*/text()[normalize-space(.)="Imóveis Rurais"]/parent::*')

    btnImoveisUrbanos = () => cy.xpath('//*/text()[normalize-space(.)="Imóveis Urbanos"]/parent::*')

}

export default BensImoveisElements;