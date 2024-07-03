/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import cadastroPage from '../page/pageTex';

const CadastroPage = new cadastroPage

Given("que estou na página de cadastro de candidatos", () => {
    CadastroPage.acessarSite();
})

When("insiro os dados solicitados para cadastro", () => {
    CadastroPage.cadastroCandidato();
})

Then("o cadastro deve ser enviado com sucesso", () => {
    CadastroPage.validacaoPagina();
})