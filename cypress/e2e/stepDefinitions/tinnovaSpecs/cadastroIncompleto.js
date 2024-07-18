/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageCadastro from "../page/pageTinnova";

const pageCadastro = new PageCadastro

Given("entro na tela de cadastro", () => {
    pageCadastro.acessarSite();
    pageCadastro.clicarBotaoCadastro();
})

When("clico no botão adicionar", () => {
    pageCadastro.btnAdicionar();
})

And("não insiro todos os dados", () => {
    pageCadastro.dadosImcompletos();
})

And("clico no botão guarda", () => {
    pageCadastro.btnGuardar();
})

Then("mensagem solicitando alguns dados", () => {
    pageCadastro.msgErroCadastro();
    pageCadastro.btnErroCadastro();
})