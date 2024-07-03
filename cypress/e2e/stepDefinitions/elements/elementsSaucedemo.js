const saucElements = {
    ACESSO: {
        USUARIO: 'input[name= "user-name"]',
        SENHA: 'input[name= "password"]'
    },

    BOTOES: {
        BOTAOACESSO: 'input[name= "login-button"]',
        BOTAOCONTINUAR: '[data-test="continue"]',
        BTNFIMCOMPRA: '[data-test="finish"]',
        BTNCANCELACOMPRA: '[data-test="cancel"]',
        BTNREMOVETLI: '[data-test="remove-sauce-labs-backpack"]',
        BOTAOCOMPRA: '[data-test="checkout"]'
    },

    CORFIMACAO: {
        CONFIRMAACESSO: '.app_logo',
        CONFIRMACOMPRA: '[data-test="complete-header"]',
        CONFIRMAPRODUTOCARRINHO: '[data-test="title"]'
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
    },

    CONFIRMAPRECO: {
        FILTROMENOR: ':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]',
        CONFIRMAMAIOR: ':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]'
    },

    CARRINHO: {
        ADDPRODUTOAOCARRINHO: '[data-test="add-to-cart-sauce-labs-backpack"]',
        CLICARNOCARRINHO: '[data-test="shopping-cart-link"]',
    },

    CADASTROCOMPRA: {
        PRIMEIRONOME: '[data-test="firstName"]',
        SEGUNDONOME: '[data-test="lastName"]',
        CAIXAPOSTAL: '[data-test="postalCode"]'
    },

    DADOSDOPRODUTO: {
        NOMEPRODUTO: '[data-test="inventory-item-name"]',
        VALORDOPRODUTO: '[data-test="inventory-item-price"]'
    },

    MENSAGEMERRODADOS: {
        MSGERRODADOS: '[data-test="error"]'
    }


}

export default saucElements;