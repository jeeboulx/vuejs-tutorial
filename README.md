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

Na raiz do projeto, criar o arquivo **vue.config.js** e colar o seguinte trech de código:

```
module.exports = {
    configureWebpack: {
      devtool: 'source-map'
    }
}
```

- launch.json
```
{
    "version": "0.2.0",
    "configurations": [
      {
        "type": "chrome",
        "request": "launch",
        "name": "vuejs: chrome",
        "url": "http://localhost:8080",
        "webRoot": "${workspaceFolder}/src",
        "breakOnLoad": true,
        "sourceMapPathOverrides": {
          "webpack:///src/*": "${webRoot}/*"
        }
      }
    ]
  }
```

Ao clicar novamente no ícone de play, será aberto um Chrome que estará plugado com o código.

Referência: https://forum.vuejs.org/t/debugging-vue-files-with-visual-studio-code/8022/16

## Instalação do executor de scripts (NPM-Scripts)
Para instalar, busque no marketplace por **NPM-Scripts**.
Isso criará uma seção dentro de **EXPLORER** (local onde são encontrados os arquivos).
O NPM-Scripts mapeia os comandos contidos no package.json na seção scripts.

*Obs: O projeto deve ser aberto na pasta webpack, ou seja, na pasta que contiver o arquivo package.json*

## O Vue não possui gerador de código, mas existe um pacote que permite criar de forma semelhante ao angular-cli.
Para instalar, `npm install -g vue-generate-component`
Para mais informações veja em: https://www.npmjs.com/package/vue-generate-component

