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

And("incluo dados solicitados", () => {
    SaucemoPage.cadastroCompra();
})

And("clico no botão para continuar", () => {
    SaucemoPage.btnContinuaCompra();
})

And("realizo o cancelamento da compra", () => {
    SaucemoPage.botaoCancelamentoCompra();
})

Then("será redirecionado para tela principal", () => {
    SaucemoPage.acessoTelaInicial();
    SaucemoPage.botaoRemoveTlInicio();
})