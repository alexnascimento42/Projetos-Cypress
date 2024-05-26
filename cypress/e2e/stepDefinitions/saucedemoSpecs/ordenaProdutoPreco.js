/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import saucemoPage from "../page/pageSaucedemo"

const SaucemoPage = new saucemoPage

Given("realizo o acesso ao sistema", () => {
    SaucemoPage.acessarSistema();
    SaucemoPage.credenciaisSistema();
    SaucemoPage.btnAcesso();
})

When("seleciono para ordenar por menor preço", () => {
    SaucemoPage.SelecionoOrdemPrMenor();
})

Then("os produtos são exibidos em ordem crescente de preço", () => {
    SaucemoPage.confirmaPrecoMenor();
})

When("seleciono para ordenar por maior preço", () => {
    SaucemoPage.SelecionoOrdemPrMaior();
})

Then("os produtos são exibidos em ordem decrescente de preço", () => {
    SaucemoPage.confirmaPrecoMaior();
})