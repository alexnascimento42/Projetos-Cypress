/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageCadastro from "../page/pageTinnova";

const pageCadastro = new PageCadastro

Given("estou na tela de cadastro", () => {
    pageCadastro.acessarSite();
    pageCadastro.clicarBotaoCadastro();
})

When("clico no botão de consulta", () => {
    pageCadastro.btnConsulta();
})

And("clico no botão voltar", () => {
    pageCadastro.btnVoltar();
})

Then("retorno para a tela inicial", () => {
    pageCadastro.confirmaTelaInicio();
})