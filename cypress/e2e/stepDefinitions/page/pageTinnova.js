import TiElements from "../elements/elementsTinnova";
import { URLs } from "../elements/urls";


class PageCadastro {
    acessarSite() {
        cy.visit(URLs.SITE_C);
    }

    validaSite() {
        cy.get(TiElements.TELAINICIAL.VALIDACAOTELA).should('contain', 'Boa sorte, e divirta-se no processo, isso é uma experiência. aproveite ao máximo');
    }

    clicarBotaoCadastro() {
        cy.get(TiElements.TELAINICIAL.BOTAOTELAINICIAL).click({ force: true });
    }

    btnAdicionar() {
        cy.get(TiElements.CADASTRO.BOTAOADICIONAR).click({ force: true });
    }

    dadosValidos() {
        cy.get(TiElements.DADOSCADASTRO.NOME).type('Alex Nascimento');
        cy.get(TiElements.DADOSCADASTRO.EMAIL).type('alexnascimento@tinnova.com.br');
        cy.get(TiElements.DADOSCADASTRO.CPF).type('032.063.754-45');
        cy.get(TiElements.DADOSCADASTRO.TELEFONE).type('85982130021');
    }

    dadosInvalidos() {
        cy.get(TiElements.DADOSCADASTRO.NOME).type('123456789');
        cy.get(TiElements.DADOSCADASTRO.EMAIL).type('abcdefghstfd');
        cy.get(TiElements.DADOSCADASTRO.CPF).type('gjughufhudhusdh');
        cy.get(TiElements.DADOSCADASTRO.TELEFONE).type('ahushudhudhduhdijcij');
    }

    btnGuardar() {
        cy.get(TiElements.CADASTRO.BOTAOGUARDAR).click({ force: true });
    }

    msgErroCadastro() {
        cy.get(TiElements.MENSAGEMERROCADASTRO.MENSAGEMERRO).should('contain', 'Todos os campos devem ser preenchidos');
    }

    btnErroCadastro() {
        cy.get(TiElements.MENSAGEMERROCADASTRO.BOTAOERRO).click();
    }

    dadosImcompletos() {
        cy.get(TiElements.DADOSCADASTRO.NOME).type('123456789');
        cy.get(TiElements.DADOSCADASTRO.EMAIL).type('abcdefghstfd');
    }

    btnConsulta() {
        cy.get(TiElements.CONSULTA.BOTAOCONSULTAR).click();
    }

    btnVoltar() {
        cy.get(TiElements.CONSULTA.BOTAOVOLTAR).click();
    }

    confirmaTelaInicio() {
        cy.get('img[src="https://tinnova.com.br/wp-content/uploads/2021/05/logo_dark.png"]').should('be.visible')
    }

    btnAlterar() {
        cy.get(TiElements.ALTERACAO.BOTAOALTERAR).click();
    }
    
    alteracaoNome(){
        cy.get(TiElements.ALTERACAO.ALTERACAONOME).type('Antonio José');
    }

    btnAtualizar(){
        cy.get(TiElements.ALTERACAO.BOTAOATUALIZAR).click();
    }


}

export default PageCadastro;