/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import saucemoPage from "../page/pageSaucedemo"

const SaucemoPage = new saucemoPage

Given("realizo o acesso ao sistema", () => {
    SaucemoPage.acessarSistema();
    SaucemoPage.credenciaisSistema();
    SaucemoPage.btnAcesso();
})

When("incluo um produto no carrinho", () => {
    SaucemoPage.incluirProdutoNoCarro();
})

And("clico no carrinho", () => {
    SaucemoPage.cliqueNoCarro();
})

And("clico no botão para continuar a compra", () => {
    SaucemoPage.botaoCompra();
})

And("não incluo dados solicitados", () => {
    SaucemoPage.btnContinuaCompra();
})

Then("será informada uma mensagem de erro nos dados", () => {
    SaucemoPage.msgErroProduto();
    SaucemoPage.botaoCancelamentoCompra();
    SaucemoPage.botaoRemoveTlInicio();
})