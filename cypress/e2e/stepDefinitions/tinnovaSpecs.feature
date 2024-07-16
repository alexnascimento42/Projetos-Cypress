Feature: Sistema de cadastro tinnova

    Realizar acesso ao sistema Tinnova e validar para realização do cadastro, edição, exclusão.

    Scenario: Acesso ao sistema
     Given que acesso site da Tinnova
     When valido a pagina
     Then clico no botão entrar

    Scenario: Cadastro valido
     Given que estou na tela de cadastro
     When clico no botão adicionar
     And insiro os dados validos
     And clico no botão guardar
     Then o cadastro é realizado com sucesso

    Scenario: Cadastro invalido
     Given estou na tela de cadastro
     When clico no botão adicionar
     And insiro os dados invalidos
     And clico em guardar
     Then mensagem de erro

    Scenario: Cadastro incompleto
     Given que estou na tela de cadastro
     When clico no botão adicionar
     And não insiro todos os dados
     And clico no botão guarda
     Then mensagem solicitando todos os dados 