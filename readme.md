# Teste Toraline

## Descrição

Teste Api de orçamento.

A Api se conecta com os dados de [https://mockend.com/juunegreiros/BE-test-api/](https://mockend.com/juunegreiros/BE-test-api/)

## Como rodar localmente?

1. clone esse repositório
2. instale as dependências utilizando o comando

    ```bash
    yarn
    ```

3. Utilize o comando  para rodar o código localmente

    ```bash
    yarn dev
    ```

4. Para a documentação das rotas acesse [http://localhost:9001/api-docs](http://localhost:9001/api-docs)

## Ambiente de produção

1. Para utilizar o código em ambiente de produção, primeiramente compile o código com

   ```bash
   yarn build
   ```

2. Em seguida rode o código com

    ```bash
    yarn start
    ```  

## Código Fonte

O código fonte segue o princípio de responsabilidade única(SRP), onde cada módulo é responsável por apenas uma função.  

- ### Router
>
>O módulo Router é responsável pelo roteamento da aplicação e divisão das tarefas. Router chama as funções de Controllers para separar os dados.  

- ### Controllers
>
>O módulo Controllers é responsável por obter os dados enviados pela requisição e enviar as resposta. Após obter os dados, o módulo passa todos ao Model. Controllers está diretamente relacionado ao framework utilizado, o express.  

- ### Models
>
>Model utiliza o javascript vanilla para processamento de dados e validações, caso necessário. Durante o processamento dos dados o módulo pode chamar Repositories, para conexão com o banco de dados.  

- ### Repositories
>
>É responsável pela conexão com o banco de dados, sendo exclusivo nessa função. Hoje utiliza o axios para fazer as requisições e retornar os dados.  

- ### Testes
>
>A pasta é responsável por armazenar os arquivos de testes que utilizam o Jest.  

- ### Errors
>
>Errors contem classes que disparam erros caso algo que não siga o comportamento padrão ocorra. Os erros são capturados pelo Middleware, que traz ao usuário uma resposta mais amigável e não derruba a aplicação em caso de algum erro.  
