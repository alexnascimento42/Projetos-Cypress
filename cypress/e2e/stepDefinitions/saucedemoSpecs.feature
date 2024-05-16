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

    Scenario: ordenar produtos por preco
        Given realizo o acesso ao sistema
        When seleciono para ordenar por nome Z to A
        Then os produtos são exibidos em ordem alfabética pelo nome
		When seleciono para ordenar por nome A to Z
        Then os produtos são exibidos em ordem alfabética pelo nome