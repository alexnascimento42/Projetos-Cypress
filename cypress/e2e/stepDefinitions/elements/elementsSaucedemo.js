const saucElements = {
    SITE: {
        ACESSARSITE: '/'
    },

    ACESSO: {
        USUARIO: 'input[name= "user-name"]',
        SENHA: 'input[name= "password"]'
    },

    BOTOES: {
        BOTAOACESSO: 'input[name= "login-button"]'
    },

    CORFIMACAO: {
        CONFIRMAACESSO: '.app_logo'
    },

    MENSAGEMERROACESSO: {
        MSGERRO: '[data-test="error"]'
    },

    FILTROS: {
        SELECIONATIPOFILTRO: '[data-test="product-sort-container"]'
    },

    CONFIRMAFILTRO: {
        FILTROZTOA: '[data-test="item-3-title-link"] > [data-test="inventory-item-name"]',
        FILTROATOZ: '[data-test="item-4-title-link"]'
    }


}

export default saucElements;