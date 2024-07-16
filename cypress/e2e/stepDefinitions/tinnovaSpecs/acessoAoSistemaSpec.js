/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageCadastro from "../page/pageTinnova";

const pageCadastro = new PageCadastro

Given("que acesso site da Tinnova", () => {
pageCadastro.acessarSite();
})

When("valido a pagina", () => {
pageCadastro.validaSite();
})

Then("clico no botão entrar", () => {
pageCadastro.clicarBotaoCadastro();
})