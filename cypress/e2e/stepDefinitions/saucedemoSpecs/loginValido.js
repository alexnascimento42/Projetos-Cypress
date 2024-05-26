/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import saucemoPage from "../page/pageSaucedemo"

const SaucemoPage = new saucemoPage

Given("acesso ao sistema", () => {
    SaucemoPage.acessarSistema();
})

When("incluo usuario e senha", () => {
    SaucemoPage.credenciaisSistema();
})

And("clico no botão login", () => {
    SaucemoPage.btnAcesso();
})

Then("acesso a pagina inicial", () => {
    SaucemoPage.acessoTelaInicial();
})