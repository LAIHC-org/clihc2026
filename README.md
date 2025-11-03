# CLIHC Versión 2026.1.0.4

## Sitio web para el CLIHC 2026

Sitio [web de difusión de CLIHC 2026](https://clihc2026.laihc.org/) organizado por la [Latin American HCI Community (LAIHC)](http://www.laihc.org/).

### Technology used

* Vue.js ^3.2.37: [Vue](https://vuejs.org/) (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces.

### What is this repository for?

* Llevar el control del desarrollo del sitio CLIHC 2026
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
```

---

## 🚀 Despliegue en GitHub Pages

El sitio se publica automáticamente mediante la rama `gh-pages`.

### 📦 Compilar y desplegar

1. Asegúrate de estar en el directorio raíz del proyecto:

   ```bash
   cd laihc-website
   ```

2. Ejecuta el siguiente comando:

   ```bash
   npm run deploy
   ```

   Esto:

   * Compila el sitio (`npm run build`)
   * Publica el contenido de `dist/` en la rama `gh-pages` usando [gh-pages](https://www.npmjs.com/package/gh-pages)

3. Una vez desplegado, el sitio estará disponible en:

   📍 [https://laihc-org.github.io/laihc/](https://laihc-org.github.io/laihc/)

> Asegúrate de que en la configuración del repositorio, en **Settings > Pages**, esté seleccionada la rama `gh-pages` como fuente del sitio.

---
