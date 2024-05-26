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

Then("o produto será apresentado no carro", () => {
    SaucemoPage.confirmaProdutoCarro();
})