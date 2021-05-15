# Fitness Tracker ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

<p align="center">
  <img src="./public/assets/img/demo.gif" alt="MongoDB Fitness Tracker">
</p>
<p align="center">

  <p align="center">
    <br />
    <a href="https://fitness-tracker-4.herokuapp.com/">View Live Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#acceptance-criteria">Acceptance Criteria</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#future-improvements">Future Improvements</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
<br>

## Overview

Fitness Tracker is an Express.js web application which allows users to track their daily workouts. The application utilizes Mongoose ODM in order to maintain and interact with a MongoDB database.

### Technologies Used

Employee Directory utilizes the following packages:

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose ODM](https://mongoosejs.com/)
- [Semantic](https://semantic-ui.com/)

### Acceptance Criteria

```
When the user loads the page, they should be given the option to create a new workout or continue with their last workout.
The user should be able to:

- Add exercises to the most recent workout plan.
- Add new exercises to a new workout plan.
- View the combined weight of multiple exercises from the past seven workouts on the stats page.
- View the total duration of each workout from the past seven workouts on the stats page.

```

## Getting Started

To get a local copy of this project up and running follow these simple steps.

### Prerequisites

First you must install [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/get-npm) if you haven't done so already. Once this is done, follow the installation instructions below to run the application locally.

### Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/kevin-aminzadeh/node-fitness-tracker
   ```
2. Navigate to the repository directory and run the following command to install the necessary NPM packages.
   ```sh
   npm install
   ```
3. Run the app start script.
   ```sh
   npm start
   ```

This project uses the `Nodemon` NPM package to enable hot reloading of the server during development. In order to utilize this functionality, run the following script instead of the app start script:

```sh
npm run watch
```

## Future Improvements

Due to the relative simplicity of this project, there are various avenues for improvement.

Some noteworthy improvements which could be made include:

- Implementing user authentication.
- Implementing a historical data view.
- Implementing a better UI in order to increase user retention and provide a more engaging overall user experience.

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).
