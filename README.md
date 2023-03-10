# Smart TV Streaming App

A streaming app catalogue for resource-constrained Smart TVs.

![](https://github.com/0xevm1/smart-tv-streamingapp/blob/main/streamingapp.png)

- The app is using React to render the exact same layout within a virtual DOM, with the scaffolding to use Typescript as seen by the `.tsx` files instead of React's `.jsx` file types

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
