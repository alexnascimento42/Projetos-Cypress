Feature: Cadastro de candidato Tex

    Realizar testes para cadastro de candidatos

    Scenario: Preencher todos os campos obrigatórios corretamente e enviar o formulário
        Given que estou na página de cadastro de candidatos
        When insiro os dados solicitados para cadastro
        Then o cadastro deve ser enviado com sucesso