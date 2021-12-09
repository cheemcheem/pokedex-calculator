[![CD](https://github.com/cheemcheem/pokedex-calculator/actions/workflows/CD.yml/badge.svg?branch=main)](https://github.com/cheemcheem/pokedex-calculator/actions/workflows/CD.yml)

# PokéDex Calculator

A simple way to check how you are going to obtain the missing Pokémon in your Pokédex.

Note: uses the PokéAPI GraphQL endpoint which has a hard limit of 100 calls/hour before your IP is blocked. To get around this, the API is only called once and all required data is cached to local storage using Apollo GraphQL.

## Feature List

| Status | Feature                                                                                            |
| :----: | -------------------------------------------------------------------------------------------------- |
|   ✅   | Allows you to note Pokémon you are missing from your PokéDex and check them off as you fill it up. |
|   ✅   | Persists data on device even after refreshing the page                                             |
|   ✅   | Shows a Pokémon's evolutions and evolution requirements                                            |
|   ✅   | Select from the Sinnoh PokéDex                                                                     |
|   ✅   | Looks passable on mobile devices                                                                   |
|   ✅   | Bubblegum theme                                                                                    |
|   ❌   | Select from any PokéDex                                                                            |
|   ❌   | Looks passable on desktop devices                                                                  |
|   ❌   | Accessibility concerns                                                                             |
|   ❌   | Shows other information about Pokémon, e.g. picture, description                                   |
|   ❌   | PWA support / offline usage                                                                        |
|   ❌   | Can handle split evolutions                                                                        |
|   ❌   | Refined UI                                                                                         |

## Building / Testing

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
