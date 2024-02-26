# cypress-cucumber-structure

1 - Configuração do Ambiente Cypress:
```
Instalar Node.js
```
```
Escolher uma IDE de JavaScript para programar
```
2- Passo de um clone no projeto
```
git clone https://github.com/rodrigoarriel56/automation-front-itcd.git
```
3- Passo de entrar na pasta do projeto
```
cd automation-front-itcd
```
``` 
4- Comando para validar que o Cypress esta instalado e configurado na maquina:
```
npx cypress open
``` 
5- Instalar o Cypress com Cucumber executando o seguinte comando na raíz da pasta do seu projeto
```
npm install
```
6 - Passo de execução dos testes
6.1 - Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code:

```
Para executar os testes via terminal: npx cypress run
```
```
Para executar os testes via browser: npx cypress run --browser chrome --no-exit
```
```
Para executar os testes via script salvo em package.json: npm run test:chrome    

```
```
Para executar os testes com geração de relatorio da Allure: npm run test:allure    

```

7 - Passo criado para testes de acionamento das Actions
