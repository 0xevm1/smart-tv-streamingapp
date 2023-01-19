# MakeItBetter
A repo where you make the choice

Please take this code and make it better. How you do that is up to you.

Originally this code was written to work out how data was handled on a low powered connected TV device. The implementation of the browser on that device could only take ES5 code. Instead of using Babel to convert modern JS, it was just written in ES5. We frequently deal with different browser restrictions, under powered devices and levels of HTML, JS and CSS support.

To make this code better you can convert it to Typescript, convert it to React, do both? Make it modern and make sure it runs. Keep it simple.

Clone this repo, create a branch from main, make your changes and submit a PR. Please leave a description of what was changed and why.

Please don't spend longer than an hour.

## What was changed

- The app is now using React to render the exact same layout within a virtual DOM, with the scaffolding to use Typescript as seen by the `.tsx` files instead of React's `.jsx` file types

- Visually this looks the same, not sure if that was the intent but in practice we would scope out the nature of what design to implement. It was tempting to show off different designs of how the movies were displayed, but adhering to the keep it simple restriction I left the layout the same, understanding that there are still resource constrained devices out there.

- The typescript use is limited to mapping the data model passed from the parent component to the child as `props`.

- Also intentional is that it still accesses only the first category of titles. This project is now very extendable to display many categories without performance issues.

- Dynamically passing the title ID to each Poster allows for quick object isolation and lookup

## Available Scripts

In the project directory, you can run:

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