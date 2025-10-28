# CLIHC Versión 2023.1.0.13

## Sitio web para el CLIHC 2023

Sitio [web de difusión de CLIHC 2023](https://clihc2021.laihc.org/) organizado por la [SIGCHI Latin American HCI Community (LAIHC)](http://www.laihc.org/).

### Technology used

* Vue.js ^3.2.37: [Vue](https://vuejs.org/) (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces.

### What is this repository for?

* Llevar el control del desarrollo del sitio CLIHC 2023
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)
* [Flujo de trabajo de Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)
* [A successful Git branching model (original)](https://nvie.com/posts/a-successful-git-branching-model/)

Changelog format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Pasos para levantar el sitio

Clonamos el proyecto e instalamos las dependencias

``` bash
git clone git@github.com:Human-Computer-Interaction-Lab-IHCLab/CLIHC.git clihc

cd clihc/application
npm install
```

Para desarrollar:

``` bash
npm run dev
```

Para Producción:

``` bash
npm run build
cp ../documentation/.htaccess dist/.htaccess
cp ../CHANGELOG.md dist/CHANGELOG.md
```

Sincronizar la carpeta `clihc/application/dist` en VSCode con la [extensión SFTP](https://github.com/liximomo/vscode-sftp). Para su configuración revisar el archivo `clihc/.vscode/sftp.json`.
