# PFVue

PFVue is an English-first frontend and Vue 3 practice repository for daily training.

The goal is simple:

- keep every lesson small and runnable
- practice frontend syntax by reading and editing real code
- move from HTML, CSS, and JavaScript into Vue 3 step by step
- build real project instincts instead of stopping at demos
- leave room for TypeScript, routing, state management, testing, and project architecture

## Two Layers

This repository now has two complementary layers:

1. lesson-first practice folders for step-by-step training
2. a real Vite + Vue 3 app workspace in `app/` for formal project structure practice

Use them together:

- learn syntax and concepts in `foundations/`, `intermediate/`, `vue3_core/`, and `advanced/`
- apply them in `projects/`
- then move into `app/` to practice real routing, Pinia state, source structure, and mock API flow

## Formal App Workspace

The `app/` directory is a real Vite + Vue 3 workspace.

It includes:

- Vite project structure
- Vue Router
- Pinia
- mock API modules
- composables
- page and component separation

Open this guide first:

- `app/README.md`

Then study these files in order:

1. `app/src/main.js`
2. `app/src/router/index.js`
3. `app/src/stores/session.js`
4. `app/src/stores/tasks.js`
5. `app/src/views/DashboardView.vue`
6. `app/src/components/TaskEditor.vue`

## Official Learning Links

For a concentrated list of official frontend, Vue, Vite, Router, and Pinia learning resources, open:

- `docs/official-learning-links.md`

## Start Here

If you want the simplest navigation path through this repository, open these files first:

1. `docs/README.md`
2. `docs/practice-map.md`
3. `docs/folder-guide.md`
4. `docs/official-learning-links.md`
5. `docs/vue-official-roadmap.md`

This gives you:

- the repository map
- the folder roles
- the official doc links
- the best route for your current level
- a Vue official-guide-aligned study route

## Learning Path

### 1. Foundations

The `foundations/` folder is for frontend syntax drills.

Suggested order:

1. `01_html_structure`
2. `02_forms_and_inputs`
3. `03_css_selectors`
4. `04_box_model`
5. `05_flex_layout`
6. `06_grid_layout`
7. `07_responsive_basics`
8. `08_js_variables_and_types`
9. `09_functions_and_scope`
10. `10_arrays_and_objects`
11. `11_dom_query_and_events`
12. `12_form_and_local_storage`

Topics covered:

- semantic HTML
- common form controls
- CSS selectors
- box model and spacing
- Flexbox
- Grid
- responsive layout basics
- JavaScript variables and data types
- functions and scope
- arrays and objects
- DOM querying and event handling
- simple browser storage

### 2. Intermediate Practice

The `intermediate/` folder moves from syntax into browser-oriented coding.

Suggested order:

1. `13_es6_syntax`
2. `14_async_and_fetch`
3. `15_modules_and_reuse`
4. `16_small_todo_app`
5. `17_search_filter_app`
6. `18_dashboard_mock_app`

Topics covered:

- destructuring and spread syntax
- arrow functions and template strings
- promises and `async` / `await`
- `fetch`
- error handling
- ES modules
- reusable helpers
- small multi-file browser exercises

### 3. Vue 3 Core

The `vue3_core/` folder is for the framework basics you need before real project work.

Suggested order:

1. `19_create_app_and_template`
2. `20_ref_and_reactive`
3. `21_computed_and_watch`
4. `22_component_props_emits`
5. `23_slots_and_dynamic_components`
6. `24_form_binding`
7. `25_lifecycle_and_refs`

Topics covered:

- `createApp`
- template syntax
- `ref` and `reactive`
- `computed`
- `watch`
- props and emits
- slots
- dynamic components
- `v-model`
- lifecycle hooks
- template refs

### 4. Advanced Vue Practice

The `advanced/` folder is where Vue practice starts to look like a real engineering workflow.

Suggested order:

1. `26_composables`
2. `27_vue_router`
3. `28_pinia_store`
4. `29_api_layer`
5. `30_typescript_with_vue`
6. `31_table_form_dialog_patterns`
7. `32_auth_and_permission_shape`
8. `33_testing_with_vitest`
9. `34_performance_and_code_split`
10. `35_project_architecture`

Topics covered:

- composables and reusable logic
- route design
- state management with Pinia
- request and response flow
- TypeScript with Vue
- common admin patterns
- authentication shape
- permission-driven UI
- unit testing
- lazy loading
- performance awareness
- folder structure and maintainability

### 5. Projects

The `projects/` folder turns syntax and patterns into real product-shaped work.

Suggested order:

1. `01_component_playground`
2. `02_admin_dashboard`
3. `03_real_world_app`

Use these projects to practice:

- component splitting
- route design
- page state management
- API integration
- form workflows
- error and loading states
- refactoring
- production-style structure

### 6. Modules And Tooling

The `modules/` folder is for project tooling and frontend engineering setup.

Topics to practice here:

- `npm init`
- `package.json`
- Vite setup
- TypeScript config basics
- ESLint
- Prettier
- path aliases
- environment variables
- script organization

## 12-Week Roadmap

### Weeks 1-2

Focus on HTML and CSS.

Goals:

- write static pages without copying line by line
- build login, profile, article, and dashboard layouts
- understand spacing, layout, and responsive structure

### Weeks 3-4

Focus on JavaScript basics and DOM work.

Goals:

- manipulate lists and objects comfortably
- respond to clicks and form input
- render, update, and delete DOM content

### Week 5

Focus on modern JavaScript.

Goals:

- use ES6 syntax naturally
- handle async flows with `fetch`
- split logic into modules

### Week 6

Focus on TypeScript basics for frontend work.

Goals:

- read and write simple types
- type props, state, and API responses
- reduce guessing in component code

### Week 7

Focus on Vue 3 basics.

Goals:

- understand how Vue renders
- use `ref`, `reactive`, and template syntax
- convert small JavaScript exercises into Vue pages

### Week 8

Focus on components and communication.

Goals:

- split pages into components
- use props, emits, and slots correctly
- manage local form state cleanly

### Week 9

Focus on routing and global state.

Goals:

- build a small multi-page app
- use Vue Router and Pinia together
- manage navigation, page state, and shared data

### Week 10

Focus on composables and real UI patterns.

Goals:

- extract reusable state logic
- build search, filter, table, dialog, and form flows
- improve code organization

### Week 11

Focus on testing and optimization.

Goals:

- write basic unit tests for components and composables
- understand lazy loading and render cost
- tidy project structure

### Week 12

Focus on a complete Vue 3 project.

Goals:

- finish a small but real admin-style system
- include login shape, CRUD pages, loading states, and error states
- do one review pass for architecture and readability

## Daily Practice Loop

Use the repository in loops:

1. Read one lesson.
2. Predict what the page or script will do.
3. Run it.
4. Change one rule or one input.
5. Run it again.
6. Rebuild a smaller version from memory later.

Good modifications to try:

- convert a static page into a responsive page
- replace repeated markup with loops and data rendering
- move repeated logic into a helper
- convert DOM code into a Vue component
- add empty, loading, and error states
- refactor one large file into smaller modules

## Repository Layout

```text
PFVue/
  app/              # real Vite + Vue 3 application workspace
  foundations/      # HTML, CSS, JS syntax drills
  intermediate/     # DOM, async, modules, browser mini apps
  vue3_core/        # Vue 3 essentials
  advanced/         # router, pinia, composables, testing, architecture
  projects/         # end-to-end practice projects
  modules/          # tooling and project setup practice
  assets/           # local assets for pages and demos
```

## Training Rules For Yourself

- keep examples small
- make every lesson runnable
- do not jump to UI libraries too early
- learn JavaScript before leaning on Vue abstractions
- revisit old lessons and rewrite them more cleanly
- prefer one clear concept per lesson

## Next Expansion Ideas

- add interview-focused frontend questions
- add browser performance exercises
- add accessibility drills
- add SSR and Nuxt entry-level practice later
- add deployment practice with Vercel or Netlify later
