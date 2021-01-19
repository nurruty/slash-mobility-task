## SlashMobility Assignment

First intall the dependencies running:

### `yarn install` or `npm install`

To start the project run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Clarifications

- As the example was a pdf the colors used are probably not exactly the same.
- The Header's icon shown in the pdf was not available on https://materialdesignicons.com/, therefore I tried to find something similar.

## Project Structure

To create the project I used the create-react-app module. Otherwise from the template files I structured the project with the following folders:

- api: This folder contains all the api calls. Here is where axios is imported and all the request/response logic is found here, and only here.
- components: Here are the UI components used in the task. This components do not have any business logic, in that way they can be reused.
- constants: The list of action types used in the project.
- pages: This folder has the only view the project has. If any more pages were created they would be here. Each file is a component connected to Redux.
- redux: Is divided in an actions folder, and a reducers folder. Also has the configureStore file.
- sagas: This folder should have all the sagas used in the project. In this case only the one that fetches the albums from the api.
- scss: This folder contains a variables.scss file where the design system variables are kept. This way any change in colors, fonts, etc are centralized here.
- utils: A utils file with useful functions.

# Improvements

- Firstly to create the second page asked in the task
- Create an api to persist the favourite albums. At this moment if the user refreshes the page, that data is lost.
