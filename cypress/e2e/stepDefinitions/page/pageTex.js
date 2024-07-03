import cadElements from "../elements/elementsTex";
import { URLs } from "../elements/urls";
import { faker } from '@faker-js/faker';

class PageCadastro {
    acessarSite() {
        cy.visit(URLs.SITE_B);
    }

    cadastroCandidato() {
        var firstName = Cypress.faker.name.firstName();
        var lastName = Cypress.faker.name.lastName();

        cy.get(cadElements.CADASTRO.CAMPONOME).type(`${firstName}`);
        cy.get(cadElements.CADASTRO.CAMPOSOBRENOME).type(`${lastName}`);
        cy.get(cadElements.CADASTRO.CAMPOCARGO).select('Sênior').should('have.value', '3');
        cy.get(cadElements.CADASTRO.CAMPOEMAIL).type(faker.internet.email(firstName));
        cy.get(cadElements.CADASTRO.TIPOPROGRAMA).click();
        cy.get(cadElements.CADASTRO.TIPOLINGUAGEMJS).click();
        cy.get(cadElements.CADASTRO.TIPOLINGUAGEMJV).click();
        cy.get(cadElements.CADASTRO.TEXTOEXPERIENCIA).type('Atuo na área de Tecnologia, como QA, utilizando varias tecnologias solicitadas no mercado.');
        cy.get(cadElements.CADASTRO.BOTAOCONCLUIDO).click();
    }

    validacaoPagina() {
        cy.get(cadElements.VALIDACAO.VALIDACAOAPOSCADASTRO).should('contain', 'TEx © Todos os direitos reservados.');
    }

}

export default PageCadastro;