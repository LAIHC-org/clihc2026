# Análisis y Plan de Acción para el Sitio CLIHC 2026

Este documento sirve como guía para la refactorización y mejora del sitio web de CLIHC 2026. El objetivo es crear una arquitectura más robusta, escalable y fácil de mantener, permitiendo la edición de contenido a través de un panel de administración sin necesidad de modificar el código fuente directamente.

## 1. Análisis de la Arquitectura Actual

- **Tecnología Base:** Vue 3, Vite, vue-i18n.
- **Hospedaje:** GitHub Pages.

### Puntos Fuertes:
- **Stack Moderno:** El uso de Vue 3 y Vite proporciona una base de desarrollo rápida y eficiente.
- **Estructura Inicial:** El proyecto ya cuenta con una estructura para internacionalización (i18n) y componentes bien definidos.

### Puntos Débiles (Áreas de Mejora):

1.  **Gestión de Contenido Duplicada:**
    - **Problema:** La ruta `application/src/components/locales` contiene componentes de Vue duplicados para cada idioma (`en`, `es`, `pt`). Por ejemplo, `Description.vue` existe tres veces.
    - **Impacto:**
        - **Mantenimiento Complejo:** Un cambio en la estructura HTML o en la lógica de un componente debe replicarse manualmente en tres archivos diferentes, lo cual es propenso a errores.
        - **Violación del Principio DRY (Don't Repeat Yourself):** El código no es reutilizable, aumentando la complejidad y el tamaño del proyecto innecesariamente.

2.  **Contenido Incrustado en el Código (Hardcoded):**
    - **Problema:** Gran parte del texto y los datos (como los nombres de los ponentes, descripciones, etc.) están directamente escritos en los archivos `.vue`.
    - **Impacto:** Para actualizar cualquier texto, un usuario necesita conocimientos de Vue.js y acceso al código fuente, lo que centraliza la responsabilidad en los desarrolladores.

## 2. Limitaciones de GitHub Pages y la Solución Propuesta

- **Limitación Clave:** GitHub Pages solo sirve archivos estáticos (HTML, CSS, JS, imágenes). No puede ejecutar código de backend (como PHP, Node.js, Python) que procese formularios y escriba archivos en el servidor.
- **Error Común:** Un panel de administración tradicional que "guarda" cambios en una base de datos o en archivos del servidor no puede funcionar en este entorno.

- **Solución Propuesta: CMS basado en Git (Decap CMS)**
    - **¿Cómo funciona?**
        1. Se añade un panel de administración (una aplicación de una sola página en React) en una ruta como `/admin`.
        2. Este panel se configura para leer y escribir sobre archivos de contenido en tu repositorio (ej. `src/i18n/locales/es.json` o `src/content/ponencias.md`).
        3. Cuando un usuario autenticado (con su cuenta de GitHub) guarda cambios, **Decap CMS no escribe en el servidor**. En su lugar, **crea un nuevo commit en el repositorio de Git** con los cambios realizados.
        4. Este nuevo commit puede activar una **GitHub Action** que reconstruye el sitio estático (con `npm run build`) y lo despliega automáticamente en la rama `gh-pages`.
    - **Ventajas:** Es la solución perfecta para sitios estáticos, ya que une la facilidad de un CMS con el flujo de trabajo de Git y la gratuidad de GitHub Pages.

## 3. Propuesta de Nueva Arquitectura

### Paso 1: Centralizar el Contenido (Separar Código de Contenido)

1.  **Eliminar Componentes Duplicados:** Se eliminará el directorio `src/components/locales`. Existirá un único set de componentes en `src/components`.
2.  **Uso Exclusivo de `vue-i18n` para Textos:** Todos los textos se moverán a los archivos JSON correspondientes (`src/i18n/locales/en.json`, `es.json`, `pt.json`).
    - *Ejemplo:* En lugar de tener `<p>Hola Mundo</p>` en un componente, usaremos `<p>{{ $t('saludo') }}</p>`, y en `es.json` tendremos `{"saludo": "Hola Mundo"}`.
3.  **Markdown para Contenido Estructurado:** Para contenido más largo y con formato (como las secciones "Call for Papers" o biografías), crearemos un directorio `src/content`.
    - *Ejemplo:* `src/content/calls/papers.es.md`. El componente Vue leerá el archivo Markdown correspondiente al idioma seleccionado y lo renderizará como HTML.

### Paso 2: Implementar el Panel de Administración con Decap CMS

1.  **Configuración de Decap CMS:**
    - Se agregará un archivo `application/public/admin/config.yml`. En este archivo se definirá:
        - El backend (GitHub).
        - Las "colecciones" de contenido que se pueden editar (ej. "Páginas Globales", "Ponentes", "Organizadores").
        - Los campos para cada colección (ej. para un ponente: `nombre`, `foto`, `bio_es`, `bio_en`, `bio_pt`).
2.  **Interfaz de Administración:**
    - Se creará un archivo `application/public/admin/index.html` que cargará Decap CMS.
    - Los usuarios podrán navegar a `https://clihc.lat/admin` para acceder al panel, iniciar sesión con GitHub y editar el contenido de forma visual.

## 4. Plan de Implementación (Seguimiento de Tareas)

A continuación, se detallan las tareas a realizar. Se marcarán como completadas a medida que avancemos.

- [ ] **1. Crear este archivo `PLAN_DE_ACCION.md`.** (Completado)
- [x] **2. Refactorizar un componente como Prueba de Concepto (PoC):**
    - [x] Seleccionar un componente simple (ej. `Description.vue`).
    - [x] Mover sus textos a los archivos `json` de `vue-i18n`.
    - [x] Eliminar las versiones duplicadas y usar un único componente con `{{ $t(...) }}`.
    - [x] Validar que el cambio funciona correctamente en los tres idiomas.
- [x] **3. Refactorizar todos los componentes restantes:**
    - [x] `CallsTable.vue`: Migrado a i18n y unificado.
    - [x] `Getting-started.vue`: Migrado a i18n y unificado.
    - [x] `Message.vue`: Migrado a i18n y unificado.
    - [x] `Rates-and-registration.vue`: Migrado a i18n y unificado.
    - [x] `Speakers-small.vue`: Unificado (contenido vacío/comentado).
    - [x] `Speakers.vue`: Unificado (contenido vacío/comentado).
    - [ ] Migrar el contenido de todos los componentes de `src/components/locales` a `vue-i18n`.
    - [ ] Eliminar el directorio `src/components/locales`.
- [ ] **4. Configurar Decap CMS (Fase 1 - Básico):**
    - [ ] Añadir los archivos `admin/index.html` y `admin/config.yml`.
    - [ ] Configurar una colección simple para editar los archivos `json` de i18n.
    - [ ] Probar el flujo de edición y guardado (commit automático).
- [ ] **5. Migrar Contenido Extenso a Markdown:**
    - [ ] Crear el directorio `src/content`.
    - [ ] Mover el contenido de las páginas de "Calls" a archivos Markdown (`.md`).
    - [ ] Modificar los componentes de las vistas para que carguen y rendericen estos archivos.
- [ ] **6. Configurar Decap CMS (Fase 2 - Colecciones de Markdown):**
    - [ ] Añadir colecciones en `config.yml` para editar los nuevos archivos Markdown.
- [ ] **7. Documentar el nuevo flujo de trabajo:**
    - [ ] Crear un `README.md` para los administradores del sitio, explicando cómo usar el nuevo panel de administración.
