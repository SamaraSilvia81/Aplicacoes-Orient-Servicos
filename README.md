# Node Js + Express

**Pacote normal:** Quando que vamo susar qunado o pacote estiver em produção
Dependencia só quando está desenvolviendo e não para todar o projeto, então usa-se o --save-dev

## Babel
Incluir tabelas em uma aplicação node - A versão do node depende da versão do JS

## Transpilação 
Babel pega o seu código que é JS e transforma em outra versão JS que é padrão.
Ele pega JS moderno e transforma em um JS que o Node entenda.
Ele só transforma o código em tempo de desenvolvimento

## Preset
Configurações padrões já pré-determinadas que facilita as opções do babel.

## .env.sample

Variáveis para executar o código como o "name" e afins.

## Porta 3000

O ideal é ter a porta do projeto em uma variável de ambiente.

## Cors

Limita o acesso de outros usuários para o meu site.

## Handle vs Middleware

Handle - Uma função com dois parâmetros - req e res.
Middleware - Tem três parâmetros - req, res e next (próxmo middle ou pro próximo código.)
