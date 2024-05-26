/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import saucemoPage from "../page/pageSaucedemo"

const SaucemoPage = new saucemoPage

Given("realizo o acesso ao sistema", () => {
    SaucemoPage.acessarSistema();
    SaucemoPage.credenciaisSistema();
    SaucemoPage.btnAcesso();
})

When("clico no carrinho", () => {
    SaucemoPage.cliqueNoCarro();
})

And("removo o produto do carrinho", () => {
    SaucemoPage.botaoRemoveTlInicio();
})

Then("o produto será removido do carro e volto para o shopping", () => {
    SaucemoPage.acessoTelaInicial();
})