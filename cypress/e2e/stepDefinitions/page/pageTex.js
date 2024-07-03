import cadElements from "../elements/locators";

import { faker } from "@faker-js/faker"

class PageCadastro {
    acessarSite() {
        cy.visit(cadElements.ACESSO.ACESSOSITE)
        cy.get(cadElements.ACESSO.VALIDACAOSITE).should('contain', 'Complete suas informações e boa sorte !')
    }

    cadastroCandidato() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        cy.get(cadElements.CADASTRO.CAMPONOME).type(`${firstName}`)
        cy.get(cadElements.CADASTRO.CAMPOSOBRENOME).type(`${lastName}`)
        cy.get(cadElements.CADASTRO.CAMPOCARGO).select('Sênior').should('have.value', '3')
        cy.get(cadElements.CADASTRO.CAMPOEMAIL).type(faker.internet.email(firstName))
        cy.get(cadElements.CADASTRO.TIPOPROGRAMA).click()
        cy.get(cadElements.CADASTRO.TIPOLINGUAGEMJS).click()
        cy.get(cadElements.CADASTRO.TIPOLINGUAGEMJV).click()
        cy.get(cadElements.CADASTRO.TEXTOEXPERIENCIA).type('Atuo na área de Tecnologia, como QA, utilizando varias tecnologias solicitadas no mercado.')
        cy.get(cadElements.CADASTRO.BOTAOCONCLUIDO).click()
    }

    validacaoPagina() {
        cy.get(cadElements.VALIDACAO.VALIDACAOAPOSCADASTRO).should('contain', 'TEx © Todos os direitos reservados.')
    }

}

export default PageCadastro;