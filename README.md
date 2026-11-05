# React Quiz ([Demo](https://react-quiz-sdys.onrender.com/))

A React-based quiz application that tests your knowledge of React fundamentals through interactive multiple-choice questions.

The application retrieves quiz questions from a JSON Server API, tracks your progress, calculates your score, and displays your results when you complete the quiz.

## ✨ Features

- **Interactive Quiz:** Answer multiple-choice questions about React.
- **Dynamic Questions:** Retrieve quiz questions from a JSON Server API.
- **Progress Tracking:** Keep track of your current question and overall quiz progress.
- **Score Calculation:** Earn points based on the correct answers.
- **Quiz Timer:** Complete the quiz within the available time.
- **Results Screen:** View your final score after completing the quiz.
- **Restart Quiz:** Start a new attempt and test your knowledge again.
- **Component-Based Architecture:** Built with reusable React components.
- **Modern Development Setup:** Powered by Vite for a fast development experience.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React 19 | Building the user interface |
| JavaScript (ES Modules) | Application logic |
| Vite | Development server and build tool |
| JSON Server | Mock REST API for quiz questions |
| HTML5 | Application structure |
| CSS3 | Application styling |
| ESLint | Code quality and linting |


### Directory Overview

| Directory / File | Description |
|---|---|
| `data/` | Contains the JSON data used by the quiz API. |
| `data/questions.json` | Stores the quiz questions, answer options, correct answers, and points. |
| `public/` | Contains static assets served directly by Vite. |
| `src/` | Contains the React application source code and components. |
| `index.html` | HTML entry point for the application. |
| `package.json` | Defines project dependencies and npm scripts. |
| `package-lock.json` | Locks dependency versions for consistent installations. |
| `vite.config.js` | Configures the Vite development and build environment. |
| `eslint.config.js` | Contains ESLint configuration for code quality checks. |
| `.gitignore` | Specifies files and directories Git should ignore. |


### Start the JSON Server

The application uses JSON Server to serve quiz questions from `data/questions.json`.

Open a terminal in the project directory and run:

```bash
npm run server
```

The API will be available at:

```text
http://localhost:8000/questions
```

### 5. Start the React Development Server

Open another terminal in the project directory and run:

```bash
npm run dev
```

Vite will start the development server. Open the URL displayed in your terminal, typically:

```text
http://localhost:5173
```

**Important:** Both the JSON Server and the React development server must be running for the application to retrieve questions and function correctly.
## 🧠 Quiz Data

Quiz questions are stored in:

```text
data/questions.json
```

Each question contains the following properties:

| Property | Description |
|---|---|
| `question` | The question displayed to the user. |
| `options` | An array of possible answers. |
| `correctOption` | The index of the correct answer in the options array. |
| `points` | The number of points awarded for a correct answer. |

Example:

```json
{
  "question": "Which is the most popular JavaScript framework?",
  "options": [
    "Angular",
    "React",
    "Svelte",
    "Vue"
  ],
  "correctOption": 1,
  "points": 10
}
```

The `correctOption` property uses zero-based indexing. In this example, the correct answer is `React`, which is at index `1`.

## 📖 Learning Objectives

This project provides practical experience with:

- Building interactive user interfaces using React.
- Understanding React components and props.
- Managing application state.
- Handling user interactions and events.
- Fetching data from a REST API.
- Working with asynchronous JavaScript.
- Implementing conditional rendering.
- Tracking quiz progress and calculating scores.
- Using Vite for modern React development.
- Integrating JSON Server as a mock backend.
- Managing a project using Git and GitHub.
