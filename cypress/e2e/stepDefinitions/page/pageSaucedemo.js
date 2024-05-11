import saucElements from "../elements/elementsSaucedemo";

class saucemoPage {

    acessarSistema(){
        cy.visit(saucElements.SITE.ACESSARSITE);
    }

    credenciaisSistema(){
        cy.get(saucElements.ACESSO.USUARIO).type('standard_user');
        cy.get(saucElements.ACESSO.SENHA).type('secret_sauce');
    }

    btnAcesso(){
        cy.get(saucElements.BOTOES.BOTAOACESSO).click();
    }

    acessoTelaInicial(){
        cy.get(saucElements.CORFIMACAO.CONFIRMAACESSO).should('contain','Swag Labs');
    }
}

export default saucemoPage;