/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageCadastro from "../page/pageTinnova";

const pageCadastro = new PageCadastro

Given("estou na tela de cadastro", () => {
    pageCadastro.acessarSite();
    pageCadastro.clicarBotaoCadastro();
})

When("clico no botão para alterar", () => {
    pageCadastro.btnAlterar();
})

And("realizo a alteração", () => {
    pageCadastro.alteracaoNome();
})

And("clico no botão atualizar", () => {
    pageCadastro.btnAtualizar();
})

Then("retorno para a tela inicial", () => {
    pageCadastro.confirmaTelaInicio();
})