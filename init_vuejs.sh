#!/bin/bash

NOME_PROJETO="vuejs-tutorial"

#Atualizar npm:
sudo npm install -g npm

#Instalar o vue-cli versão 3:
sudo npm install -g @vue/cli

#Inicializar um projeto com WebPack:
sudo vue create webpack $NOME_PROJETO

#Entrar na pasta do projeto
cd $NOME_PROJETO