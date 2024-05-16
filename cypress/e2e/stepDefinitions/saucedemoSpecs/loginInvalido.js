/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import saucemoPage from "../page/pageSaucedemo"

const SaucemoPage = new saucemoPage

Given("acesso ao sistema", () => {
    SaucemoPage.acessarSistema();
})

When("incluo usuario e senha invalidos", () => {
    SaucemoPage.credenciaisSistemaInvalida();
})

And("clico no botão login", () => {
    SaucemoPage.btnAcesso();
})

Then("será informada uma mensagem de erro", () => {
    SaucemoPage.msgErroSistema();
})