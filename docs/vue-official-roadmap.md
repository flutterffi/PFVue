# PFVue Vue Official Roadmap

This document reorganizes PFVue from the perspective of the official Vue learning system.

Use it when you want:

- a more systematic Vue knowledge path
- a chapter-by-chapter route closer to the official guide
- a clear mapping from Vue official topics to local PFVue practice files

Important:

- this roadmap is **Vue-system-first**
- the rest of PFVue is still **practice-first**
- use both views together for the best results

## 1. How To Use This Roadmap

For each topic:

1. read the official Vue chapter
2. locate the matching PFVue file or folder
3. modify the local example
4. add one small variation of your own

## 2. Official Vue Learning Order

This order is modeled after the official Vue guide structure.

### Stage A: Getting Started

Official topics:

- Introduction
- Quick Start
- Application instance mindset

Official docs:

- [Vue Introduction](https://vuejs.org/guide/introduction.html)
- [Vue Quick Start](https://vuejs.org/guide/quick-start.html)
- [Vue Chinese Quick Start](https://cn.vuejs.org/guide/quick-start)

PFVue mapping:

- `vue3_core/19_create_app_and_template`
- `app/README.md`
- `app/src/main.js`

What to practice locally:

- understand how Vue mounts
- compare simple CDN-style Vue pages with the real Vite app
- identify where the app starts in both styles

### Stage B: Template Syntax And Rendering Basics

Official topics:

- template syntax
- text interpolation
- directives
- conditional rendering
- list rendering
- event handling
- class and style binding

Official docs:

- [Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)
- [Conditional Rendering](https://vuejs.org/guide/essentials/conditional.html)
- [List Rendering](https://vuejs.org/guide/essentials/list.html)
- [Event Handling](https://vuejs.org/guide/essentials/event-handling.html)
- [Class and Style Bindings](https://vuejs.org/guide/essentials/class-and-style.html)

PFVue mapping:

- `vue3_core/19_create_app_and_template`
- `vue3_core/22_component_props_emits`
- `projects/01_component_playground/index.html`
- `projects/02_admin_dashboard/index.html`

What to practice locally:

- add one more `v-if` branch
- add one more `v-for` list
- bind one dynamic class and one inline style
- convert static sections into data-driven sections

### Stage C: Reactivity Core

Official topics:

- reactivity fundamentals
- computed
- watchers

Official docs:

- [Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
- [Computed Properties](https://vuejs.org/guide/essentials/computed.html)
- [Watchers](https://vuejs.org/guide/essentials/watchers.html)

PFVue mapping:

- `vue3_core/20_ref_and_reactive`
- `vue3_core/21_computed_and_watch`
- `app/src/stores/tasks.js`
- `app/src/composables/useTaskFilters.js`

What to practice locally:

- compare `ref` and `reactive`
- add a new computed value
- add a new filter derived from task data
- observe which state belongs in a component and which belongs in a store

### Stage D: Form Input Bindings

Official topics:

- `v-model`
- form state
- input and select bindings

Official docs:

- [Form Input Bindings](https://vuejs.org/guide/essentials/forms.html)

PFVue mapping:

- `vue3_core/24_form_binding`
- `projects/03_real_world_app/index.html`
- `app/src/components/TaskEditor.vue`
- `app/src/views/LoginView.vue`

What to practice locally:

- add a new field to the editor form
- add simple validation
- compare local form state in small pages vs structured form state in the formal app

### Stage E: Lifecycle And Template Refs

Official topics:

- lifecycle hooks
- template refs

Official docs:

- [Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html)
- [Template Refs](https://vuejs.org/guide/essentials/template-refs.html)

PFVue mapping:

- `vue3_core/25_lifecycle_and_refs`

What to practice locally:

- add one mount-side behavior
- focus an input automatically
- log component mount timing

### Stage F: Components Basics

Official topics:

- component basics
- props
- events
- slots
- dynamic components

Official docs:

- [Component Basics](https://vuejs.org/guide/essentials/component-basics)
- [Props](https://vuejs.org/guide/components/props.html)
- [Component Events](https://vuejs.org/guide/components/events.html)
- [Slots](https://vuejs.org/guide/components/slots.html)
- [Component v-model](https://vuejs.org/guide/components/v-model.html)

PFVue mapping:

- `vue3_core/22_component_props_emits`
- `vue3_core/23_slots_and_dynamic_components`
- `projects/01_component_playground/index.html`
- `app/src/components/TaskList.vue`
- `app/src/components/TaskEditor.vue`
- `app/src/components/SummaryCards.vue`

What to practice locally:

- split one page into two or three components
- add a prop and emitted event
- identify presentational components vs stateful containers

### Stage G: Reusability And Composition

Official topics:

- composables
- logic reuse
- Composition API patterns

Official docs:

- [Composables](https://vuejs.org/guide/reusability/composables)
- [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq)

PFVue mapping:

- `advanced/26_composables`
- `app/src/composables/useTaskFilters.js`

What to practice locally:

- extract one more composable from the dashboard
- move filter logic out of a view
- compare reusable logic with Pinia store responsibilities

### Stage H: Scaling Up With Single-File Components

Official topics:

- Single-File Components
- project structure
- tooling

Official docs:

- [Single-File Components](https://vuejs.org/guide/scaling-up/sfc)
- [Tooling](https://vuejs.org/guide/scaling-up/tooling.html)

PFVue mapping:

- `app/`
- `app/src/App.vue`
- `app/src/views/`
- `app/src/components/`

What to practice locally:

- understand why SFCs are better than only using CDN pages for bigger apps
- identify how views, components, stores, and API files are separated

### Stage I: Routing

Official topics:

- client-side routing
- route definitions
- guards
- navigation

Official docs:

- [Vue Router Introduction](https://router.vuejs.org/introduction)
- [Vue Router Guide](https://router.vuejs.org/guide/)
- [Programmatic Navigation](https://router.vuejs.org/guide/essentials/navigation)

PFVue mapping:

- `advanced/27_vue_router`
- `app/src/router/index.js`
- `app/src/views/LoginView.vue`
- `app/src/views/DashboardView.vue`
- `app/src/views/SettingsView.vue`

What to practice locally:

- add one more route
- add one auth-only route
- add one navigation link

### Stage J: State Management

Official topics:

- state management
- shared state
- Pinia

Official docs:

- [State Management](https://vuejs.org/guide/scaling-up/state-management.html)
- [Pinia Introduction](https://pinia.vuejs.org/introduction)
- [Pinia Core Concepts](https://pinia.vuejs.org/core-concepts.html)

PFVue mapping:

- `advanced/28_pinia_store`
- `app/src/stores/session.js`
- `app/src/stores/tasks.js`

What to practice locally:

- identify local state vs global state
- add a new action
- add another derived summary field

### Stage K: API And Application Data Flow

Official topics:

- async data flow
- app architecture
- separating UI from data access

Official docs:

- [Vue Scaling Up](https://vuejs.org/guide/scaling-up/)

PFVue mapping:

- `advanced/29_api_layer`
- `app/src/api/mockClient.js`
- `app/src/api/taskApi.js`

What to practice locally:

- replace mock task text with your own data
- add one more API function
- think about how a real backend would replace the mock client

### Stage L: TypeScript

Official topics:

- TypeScript overview
- Composition API with TypeScript

Official docs:

- [TypeScript Overview](https://vuejs.org/guide/typescript/overview)
- [TypeScript With Composition API](https://vuejs.org/guide/typescript/composition-api)

PFVue mapping:

- `advanced/30_typescript_with_vue`
- `app/` as the future upgrade target for TypeScript migration

What to practice locally:

- read the TS guide first
- then choose one JS file in `app/` and think about its type shape
- later migrate `stores/tasks.js` or `components/TaskEditor.vue`

## 3. What PFVue Adds Beyond The Official Vue Guide

The official Vue guide explains Vue itself.

PFVue adds extra practice layers around it:

- frontend foundations before Vue
- mini browser exercises before framework work
- page-level projects
- a formal Vite app workspace
- architecture, API shape, and project structure practice

This means:

- the official guide is the knowledge spine
- PFVue is the training ground built around that spine

## 4. Best Combined Learning Strategy

If you want the strongest route, use this pattern:

1. official Vue doc chapter
2. matching PFVue example
3. one local code modification
4. one mini extension of your own

Example:

1. read `Reactivity Fundamentals`
2. open `vue3_core/20_ref_and_reactive`
3. add a second reactive object
4. then compare the same idea inside `app/src/stores/tasks.js`

## 5. Best Next Files To Open

After reading this roadmap, continue with:

1. `docs/official-learning-links.md`
2. `vue3_core/README.md`
3. `advanced/README.md`
4. `app/README.md`
