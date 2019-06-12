# Tutorial de VueJS (v3)

## Inicializar o projeto
### Atualizar o npm
Para inicializar o projeto, primeiramente atualizar o npm:
`npm install -g npm`

### Instalar o vue-cli (v3)
`npm install -g @vue/cli`

### Inicializar um projeto na pasta <NOME_PROJETO>:
`vue create <NOME_PROJETO>`

## Configuração do Visual Studio Code:
### Abertura do projeto
No VisualStudio Code, abra o projeto na pasta **<NOME_PROJETO>**.

### Instalação do debugger
No marketplace, busque a extensão *Debugger for Chrome*. Após a instalação, na barra lateral, irá aparecer a opção de debug.
Se for a primeira vez, ao clicar, será criado o arquivo **launch.json**.
Ao clicar novamente no ícone de play, automaticamente será criado a pasta `.vscode` e já abrirá o navegador em modo debug.

Alternativamente, pode pressionar F5 duas vezes.

- launch.json
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

## Instalação do executor de scripts (NPM-Scripts)
Para instalar, busque no marketplace por **NPM-Scripts**.
Isso criará uma seção dentro de **EXPLORER** (local onde são encontrados os arquivos).
O NPM-Scripts mapeia os comandos contidos no package.json na seção scripts.

*Obs: O projeto deve ser aberto na pasta webpack, ou seja, na pasta que contiver o arquivo package.json*

## O Vue não possui gerador de código, mas existe um pacote que permite criar de forma semelhante ao angular-cli.
Para instalar, `npm install -g vue-generate-component`
Para mais informações veja em: https://www.npmjs.com/package/vue-generate-component

## Instalação do Bootstrap 3
`npm install bootstrap@3.3.5 --save`

## Formatar os arquivos
Pela recomendação de alguns foruns, o ideal é executar o lint. Com o linter instalado durante o comando `vue create`, obriga a compilação somente quando o lint estiver passando.