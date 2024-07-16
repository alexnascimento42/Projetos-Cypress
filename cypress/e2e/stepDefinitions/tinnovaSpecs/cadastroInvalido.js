/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageCadastro from "../page/pageTinnova";

const pageCadastro = new PageCadastro

Given("estou na tela de cadastro", () => {
pageCadastro.acessarSite();
pageCadastro.clicarBotaoCadastro();
})

When("clico no botão adicionar", () => {
pageCadastro.btnAdicionar();
})

And("insiro os dados invalidos", () => {
pageCadastro.dadosInvalidos();
})

And("clico em guardar", () => {
pageCadastro.btnGuardar();
})

Then("mensagem de erro", () => {
pageCadastro.msgErroCadastro();
pageCadastro.btnErroCadastro();
})