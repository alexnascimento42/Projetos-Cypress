Feature: Loja Saucedemo

Realizar testes na loja virtual, verificar cadastro e outros processos da loja

Scenario: acesso ao sistema
Given acesso ao sistema
When incluo usuario e senha
And clico no botão login
Then acesso a pagina inicial