import saucElements from "../elements/elementsSaucedemo";

class saucemoPage {

    acessarSistema() {
        cy.visit(saucElements.SITE.ACESSARSITE);
    }

    credenciaisSistema() {
        cy.get(saucElements.ACESSO.USUARIO).type(Cypress.env('username'));
        cy.get(saucElements.ACESSO.SENHA).type(Cypress.env('password'));
    }

    credenciaisSistemaInvalida() {
        cy.get(saucElements.ACESSO.USUARIO).type(Cypress.env('usernameInvalid'));
        cy.get(saucElements.ACESSO.SENHA).type(Cypress.env('passwordInvalid'));
    }

    btnAcesso() {
        cy.get(saucElements.BOTOES.BOTAOACESSO).click();
    }

    acessoTelaInicial() {
        cy.get(saucElements.CORFIMACAO.CONFIRMAACESSO).should('contain', 'Swag Labs');
    }

    msgErroSistema() {
        cy.get(saucElements.MENSAGEMERROACESSO.MSGERRO).should('contain', 'Epic sadface: Username and password do not match any user in this service');
    }

    selecionoOrdemZa(){
        cy.get(saucElements.FILTROS.SELECIONATIPOFILTRO).select('Name (Z to A)');
    }

    confirmaOrdemZa(){
        cy.get(saucElements.CONFIRMAFILTRO.FILTROZTOA).should('contain','Test.allTheThings() T-Shirt (Red)');
    }

    SelecionoOrdemAz(){
        cy.get(saucElements.FILTROS.SELECIONATIPOFILTRO).select('Name (A to Z)');

    }

    confirmaOrdemAz(){
        cy.get(saucElements.CONFIRMAFILTRO.FILTROATOZ).should('contain','Sauce Labs Backpack');
    }
}

export default saucemoPage;