/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import saucemoPage from "../page/pageSaucedemo"

const SaucemoPage = new saucemoPage

Given("realizo o acesso ao sistema", () => {
    SaucemoPage.acessarSistema();
    SaucemoPage.credenciaisSistema();
    SaucemoPage.btnAcesso();
})

When("seleciono para ordenar por nome Z to A", () => {
    SaucemoPage.selecionoOrdemZa();
})

Then("os produtos são exibidos em ordem alfabética pelo nome", () => {
    SaucemoPage.confirmaOrdemZa();
})

When("seleciono para ordenar por nome A to Z", () => {
    SaucemoPage.SelecionoOrdemAz();
})

Then("os produtos são exibidos em ordem alfabética pelo nome", () => {
    SaucemoPage.confirmaOrdemAz();
})