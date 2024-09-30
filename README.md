# vue-dashboard

This template is a sample app to display data from JSONPLaceholder.

This consist of a simple header, sidebar, and a table with title and content.  The table will display the title and content pulled from 
the JSONPLaceholder api.

Clicking on the title will open a modal pop up to show the full details of the article as well as loading of the commentes made to it. 
The comments are loaded lazy and you will see a delay at times but will display a revolving sprite to indicate a delay in presenting 
the information.

There is a second header presented in the code using the DaisyUI framework to allow a better responsive and mobile layout - 
I primarily use DaisyUI in most my developments as it presents most common modules for navigating, cards and inputs in a responsive design.
It is based on tailwind and it easily consolidates tailwind code to a shorter and more maintainable way. 

Daisy UI has an easier implementation of Theming which can allow a multitude of themes to a project. I did not implement it here as 
it was not in the specs.  I just wanted to point out that adding daisy ui to an existing tailwindcss project can enhance the ui and be able
to co-exist with the tailwind code.

A final note - i could not effectively get Dark mode of tailwind to work correctly.  as mentioned previously, i could have used DaisyUI theming
but decided to comply with the specs.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
