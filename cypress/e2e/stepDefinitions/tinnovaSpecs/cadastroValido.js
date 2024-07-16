/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageCadastro from "../page/pageTinnova";

const pageCadastro = new PageCadastro

Given("que estou na tela de cadastro", () => {
pageCadastro.acessarSite();
pageCadastro.clicarBotaoCadastro();
})

When("clico no botão adicionar", () => {
pageCadastro.btnAdicionar();
})

And("insiro os dados validos", () => {
pageCadastro.dadosValidos();
})

And("clico no botão guardar", () => {
pageCadastro.btnGuardar();
})

Then("o cadastro é realizado com sucesso", () => {

})