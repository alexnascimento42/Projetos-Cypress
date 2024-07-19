/// <reference types = "Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PageCadastro from "../page/pageTinnova";

const pageCadastro = new PageCadastro

Given("estou na tela de cadastro", () => {
    pageCadastro.acessarSite();
    pageCadastro.clicarBotaoCadastro();
})

When("clico no botão para alterar", () => {
    cy.get(':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(3)').click();
})

And("realizo a alteração", () => {
    cy.get(':nth-child(2) > .sc-iqcoie').type('Antonio José');
})

And("clico no botão atualizar", () => {
    cy.get('.sc-bczRLJ').click();
})

Then("retorno para a tela inicial", () => {
    pageCadastro.confirmaTelaInicio();
})