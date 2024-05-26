Feature: Loja Saucedemo

    Realizar testes na loja virtual, verificar cadastro e outros processos da loja

    Scenario: acesso ao sistema
        Given acesso ao sistema
        When incluo usuario e senha
        And clico no botão login
        Then acesso a pagina inicial

    Scenario: acesso ao sistema invalido
        Given acesso ao sistema
        When incluo usuario e senha invalidos
        And clico no botão login
        Then será informada uma mensagem de erro

    Scenario: ordenar produtos por ordem alfabetica
        Given realizo o acesso ao sistema
        When seleciono para ordenar por nome Z to A
        Then os produtos são exibidos em ordem alfabética pelo nome
        When seleciono para ordenar por nome A to Z
        Then os produtos são exibidos em ordem alfabética pelo nome

    Scenario: ordenar produtos por preco
        Given realizo o acesso ao sistema
        When seleciono para ordenar por menor preço
        Then os produtos são exibidos em ordem crescente de preço
        When seleciono para ordenar por maior preço
        Then os produtos são exibidos em ordem decrescente de preço

    Scenario: Adicionar Produto ao Carrinho
        Given realizo o acesso ao sistema
        When incluo um produto no carrinho
        And clico no carrinho
        Then o produto será apresentado no carro

    Scenario: Remover Produto ao Carrinho
        Given realizo o acesso ao sistema
        When clico no carrinho
        And removo o produto do carrinho
        Then o produto será removido do carro e volto para o shopping

    Scenario: Realizar compra de um produto
        Given realizo o acesso ao sistema
        When incluo um produto no carrinho
        And clico no carrinho
        And clico no botão para continuar a compra
        And incluo dados solicitados
        And clico no botão para continuar
        And finalizo a compra
        Then a compra será finalizada com sucesso

    Scenario: Cancelar compra de produto
        Given realizo o acesso ao sistema
        When incluo um produto no carrinho
        And clico no carrinho
        And clico no botão para continuar a compra
        And incluo dados solicitados
        And clico no botão para continuar
        And realizo o cancelamento da compra
        Then será redirecionado para tela principal

    Scenario: Verificar Descrição dos Produtos
        Given realizo o acesso ao sistema
        When incluo um produto no carrinho
        And clico no carrinho
        And clico no botão para continuar a compra
        And incluo dados solicitados
        And clico no botão para continuar
        Then os dados do produto deverão estar corretos

    Scenario: Realizar a compra sem incluir dados
        Given realizo o acesso ao sistema
        When incluo um produto no carrinho
        And clico no carrinho
        And clico no botão para continuar a compra
        And não incluo dados solicitados
        Then será informada uma mensagem de erro nos dados