# PigKnows Sample

Fetches and displays some users as info cards with extra details in a modal.

Built with `react`, `@material-ui`, and bundled with `parcel`.

## Running

Dev mode:
```sh
yarn install
yarn run start
```

Prod mode:
```sh
yarn install
yarn run build
# Open dist/index.html in your browser manually
```

## Comments

- This UI library is very strange, in particular the `Typography` component absolutely baffled me
  - Why would this even be a thing that exists?
  - Why would I not use regular `<p>`, `<h2>`, etc... tags??
    - Besides the fact the library doesn't apply any global styles
- Styled components (CSS-in-JS) are a bad idea, especially if you have a runtime like with this one.
- For some reason it wouldn't let me use the shorthand fragment syntax `<></>`
- Hooks are still weird
