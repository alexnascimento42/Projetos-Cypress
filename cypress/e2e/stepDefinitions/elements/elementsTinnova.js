const TiElements = {
    TELAINICIAL: {
        VALIDACAOTELA: '.sc-hKMtZM',
        BOTAOTELAINICIAL: '.sc-bczRLJ'
    },

    CADASTRO: {
        BOTAOADICIONAR: '.sc-hKMtZM > :nth-child(3)',
        BOTAOGUARDAR: '.sc-bczRLJ'
    },

    DADOSCADASTRO: {
        NOME: 'input[name="name"]',
        EMAIL: 'input[name="email"]',
        CPF: 'input[name="cpf"]',
        TELEFONE: 'input[name="phone"]'
    },

    MENSAGEMERROCADASTRO: {
        MENSAGEMERRO: '.swal-text',
        BOTAOERRO: '.swal-button'
    },

    CONSULTA: {
        BOTAOCONSULTAR: ':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(2)',
        BOTAOVOLTAR: '.sc-bczRLJ'
    },

    ALTERACAO: {
        BOTAOALTERAR: ':nth-child(1) > [style="width: 15%; justify-content: flex-start;"] > :nth-child(3)',
        ALTERACAONOME: ':nth-child(2) > .sc-iqcoie',
        BOTAOATUALIZAR: '.sc-bczRLJ'
    }

}

export default TiElements;