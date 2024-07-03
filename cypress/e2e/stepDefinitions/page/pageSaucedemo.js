import saucElements from "../elements/elementsSaucedemo";
import { URLs } from "../elements/urls";

class saucemoPage {
    acessarSistema() {
        cy.visit(URLs.SITE_A);
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

    selecionoOrdemZa() {
        cy.get(saucElements.FILTROS.SELECIONATIPOFILTRO).select('Name (Z to A)');
    }

    confirmaOrdemZa() {
        cy.get(saucElements.CONFIRMAFILTRO.FILTROZTOA).should('contain', 'Test.allTheThings() T-Shirt (Red)');
    }

    SelecionoOrdemAz() {
        cy.get(saucElements.FILTROS.SELECIONATIPOFILTRO).select('Name (A to Z)');

    }

    confirmaOrdemAz() {
        cy.get(saucElements.CONFIRMAFILTRO.FILTROATOZ).should('contain', 'Sauce Labs Backpack');
    }

    SelecionoOrdemPrMenor() {
        cy.get(saucElements.FILTROS.SELECIONATIPOFILTRO).select('Price (low to high)');

    }

    confirmaPrecoMenor() {
        cy.get(saucElements.CONFIRMAPRECO.FILTROMENOR).should('contain', '$7.99');
    }

    SelecionoOrdemPrMaior() {
        cy.get(saucElements.FILTROS.SELECIONATIPOFILTRO).select('Price (high to low)');

    }

    confirmaPrecoMaior() {
        cy.get(saucElements.CONFIRMAPRECO.CONFIRMAMAIOR).should('contain', '$49.99');
    }

    incluirProdutoNoCarro() {
        cy.get(saucElements.CARRINHO.ADDPRODUTOAOCARRINHO).click();
    }

    cliqueNoCarro() {
        cy.get(saucElements.CARRINHO.CLICARNOCARRINHO).click();
    }

    confirmaProdutoCarro() {
        cy.get(saucElements.CORFIMACAO.CONFIRMAPRODUTOCARRINHO).should('contain', 'Your Cart');
    }

    botaoCompra() {
        cy.get(saucElements.BOTOES.BOTAOCOMPRA).click();
    }

    cadastroCompra() {
        cy.get(saucElements.CADASTROCOMPRA.PRIMEIRONOME).type('Alex');
        cy.get(saucElements.CADASTROCOMPRA.SEGUNDONOME).type('Nascimento');
        cy.get(saucElements.CADASTROCOMPRA.CAIXAPOSTAL).type('60335060');

    }

    btnContinuaCompra() {
        cy.get(saucElements.BOTOES.BOTAOCONTINUAR).click();
    }

    btnFimCompra() {
        cy.get(saucElements.BOTOES.BTNFIMCOMPRA).click();
    }

    ConfirmaCompra() {
        cy.get(saucElements.CORFIMACAO.CONFIRMACOMPRA).should('contain', 'Thank you for your order!');
    }

    botaoCancelamentoCompra() {
        cy.get(saucElements.BOTOES.BTNCANCELACOMPRA).click();
    }

    botaoRemoveTlInicio() {
        cy.get(saucElements.BOTOES.BTNREMOVETLI).click();
    }

    nomeProduto() {
        cy.get(saucElements.DADOSDOPRODUTO.NOMEPRODUTO).should('contain', 'Sauce Labs Backpack');
    }

    valorProduto() {
        cy.get(saucElements.DADOSDOPRODUTO.VALORDOPRODUTO).should('contain', '$29.99');
    }

    msgErroProduto() {
        cy.get(saucElements.MENSAGEMERRODADOS.MSGERRODADOS).should('contain', 'Error: First Name is required');
    }

}

export default saucemoPage;