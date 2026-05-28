# PFVue Official Learning Links

This document collects official learning resources for frontend foundations and the Vue ecosystem.

Use it together with the local practice repository:

- learn the concept from the official docs
- come back to PFVue and modify the matching lesson or app file

## 1. Frontend Foundations

### HTML

- MDN HTML overview: [developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- MDN HTML basics: [developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- MDN basic HTML syntax: [developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

Use these with:

- `foundations/01_html_structure`
- `foundations/02_forms_and_inputs`

### CSS

- MDN CSS introduction: [developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)
- MDN CSS reference hub: [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

Use these with:

- `foundations/03_css_selectors`
- `foundations/04_box_model`
- `foundations/05_flex_layout`
- `foundations/06_grid_layout`
- `foundations/07_responsive_basics`

### JavaScript

- MDN JavaScript beginner course: [developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- MDN JavaScript guide: [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- MDN JavaScript language overview: [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview)

Use these with:

- `foundations/08_js_variables_and_types`
- `foundations/09_functions_and_scope`
- `foundations/10_arrays_and_objects`
- `intermediate/13_es6_syntax`
- `intermediate/15_modules_and_reuse`

### DOM, Events, Storage, and Fetch

- MDN Fetch API: [developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- MDN Web Storage API: [developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- MDN localStorage: [developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

Use these with:

- `foundations/11_dom_query_and_events`
- `foundations/12_form_and_local_storage`
- `intermediate/14_async_and_fetch`
- `intermediate/16_small_todo_app`
- `intermediate/17_search_filter_app`

## 2. Vue Official Docs

- Vue introduction: [vuejs.org/guide/introduction.html](https://vuejs.org/guide/introduction.html)
- Vue quick start: [vuejs.org/guide/quick-start.html](https://vuejs.org/guide/quick-start.html)
- Vue Chinese quick start: [cn.vuejs.org/guide/quick-start](https://cn.vuejs.org/guide/quick-start)
- Reactivity fundamentals: [vuejs.org/guide/essentials/reactivity-fundamentals.html](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
- Component basics: [vuejs.org/guide/essentials/component-basics](https://vuejs.org/guide/essentials/component-basics)
- Composables: [vuejs.org/guide/reusability/composables](https://vuejs.org/guide/reusability/composables)
- Single-File Components: [vuejs.org/guide/scaling-up/sfc](https://vuejs.org/guide/scaling-up/sfc)
- TypeScript overview: [vuejs.org/guide/typescript/overview](https://vuejs.org/guide/typescript/overview)
- TypeScript with Composition API: [vuejs.org/guide/typescript/composition-api](https://vuejs.org/guide/typescript/composition-api)
- Composition API FAQ: [vuejs.org/guide/extras/composition-api-faq](https://vuejs.org/guide/extras/composition-api-faq)

Use these with:

- `vue3_core/19_create_app_and_template`
- `vue3_core/20_ref_and_reactive`
- `vue3_core/21_computed_and_watch`
- `vue3_core/22_component_props_emits`
- `vue3_core/23_slots_and_dynamic_components`
- `vue3_core/24_form_binding`
- `vue3_core/25_lifecycle_and_refs`
- `advanced/26_composables`
- `advanced/30_typescript_with_vue`

## 3. Vite Official Docs

- Vite guide: [vite.dev/guide/](https://vite.dev/guide/)
- Why Vite: [vite.dev/guide/why.html](https://vite.dev/guide/why.html)
- Building for production: [vite.dev/guide/build](https://vite.dev/guide/build)
- Static deployment: [vite.dev/guide/static-deploy.html](https://vite.dev/guide/static-deploy.html)

Use these with:

- `modules/`
- `app/`

## 4. Vue Router Official Docs

- Vue Router introduction: [router.vuejs.org/introduction](https://router.vuejs.org/introduction)
- Vue Router getting started: [router.vuejs.org/guide/](https://router.vuejs.org/guide/)
- Programmatic navigation: [router.vuejs.org/guide/essentials/navigation](https://router.vuejs.org/guide/essentials/navigation)

Use these with:

- `advanced/27_vue_router`
- `app/src/router/index.js`

## 5. Pinia Official Docs

- Pinia home: [pinia.vuejs.org](https://pinia.vuejs.org/)
- Pinia introduction: [pinia.vuejs.org/introduction](https://pinia.vuejs.org/introduction)
- Pinia core concepts: [pinia.vuejs.org/core-concepts.html](https://pinia.vuejs.org/core-concepts.html)

Use these with:

- `advanced/28_pinia_store`
- `app/src/stores/session.js`
- `app/src/stores/tasks.js`

## 6. Recommended Reading Order

### Stage A: pure frontend basics

1. HTML basics
2. CSS introduction
3. JavaScript guide
4. Fetch API
5. Web Storage API

### Stage B: Vue foundations

1. Vue quick start
2. Reactivity fundamentals
3. Component basics
4. Composables
5. Single-File Components

### Stage C: real Vue app workflow

1. Vite guide
2. Vue Router getting started
3. Pinia core concepts
4. TypeScript overview

## 7. Best Local File Entry Points

If you want a compact route through this repository, start here:

1. `README.md`
2. `foundations/README.md`
3. `intermediate/README.md`
4. `vue3_core/README.md`
5. `projects/README.md`
6. `app/README.md`

Then move into the real app:

1. `app/src/main.js`
2. `app/src/router/index.js`
3. `app/src/stores/tasks.js`
4. `app/src/views/DashboardView.vue`
5. `app/src/components/TaskEditor.vue`
