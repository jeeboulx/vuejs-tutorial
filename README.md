# Tutorial de VueJS

## Inicializar o projeto
### Atualizar o npm
Para inicializar o projeto, primeiramente atualizar o npm:
`npm install -g npm`

### Instalar o vue-cli (v3)
`npm install -g @vue/cli`

### Inicializar um projeto com WebPack, atribuindo de forma manual o Router:
`vue create webpack <NOME_PROJETO>`

## Configuração do Visual Studio Code:
### Abertura do projeto
No VisualStudio Code, abra o projeto na pasta **webpack**.

### Instalação do debugger
**Para vue-cli (v3):**

No marketplace, busque a extensão *Debugger for Chrome*. Após a instalação, na barra lateral, irá aparecer a opção de debug.
Ao clicar no ícone de play, automaticamente será criado a pasta `.vscode` e já abrirá o navegador em modo debug.

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

**Versões anteriores:**

Na versão anterior do vue-cli, seria necessário a configuração adicional, conforme apresentado abaixo:

- launch.json
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "vue: chrome",
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

- config/index.js

Substituir a entrada `devtool: 'cheap-module-eval-source-map'` por `devtool: 'source-map'`.

## Instalação do executor de scripts (NPM-Scripts)
Para instalar, busque no marketplace por **NPM-Scripts**.
Isso criará uma seção dentro de **EXPLORER** (local onde são encontrados os arquivos).
O NPM-Scripts mapeia os comandos contidos no package.json na seção scripts.

*Obs: O projeto deve ser aberto na pasta webpack, ou seja, na pasta que contiver o arquivo package.json*

