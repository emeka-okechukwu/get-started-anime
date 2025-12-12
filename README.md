<a id="readme-top"></a>

# Get Started Anime

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setting-up-and-running-the-application">Setting Up and Running the Application</a></li>
      </ul>
    </li>
  </ol>
</details>

---

## About The Project

### Introduction

**Get Started Anime** is an anime recommendation platform that leverages the power of the **OpenAI API** to provide personalized anime suggestions based on a user's top movie preferences. The platform helps individuals who are new to anime discover shows that align with their existing movie and TV show tastes.

Check out the live version of the project here: [https://get-started-anime.vercel.app](https://get-started-anime.vercel.app)

---

### Technologies Used

- **Frontend**: React (TypeScript), HTML, CSS, Material-UI
- **Backend**:
   - Java (Spring Boot)
   - Node.js (Express)
- **APIs**: OpenAI API, The Movie Database (TMDB) API, Cohere API

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and **npm**
- [IntelliJ IDEA](https://www.jetbrains.com/idea/download) (recommended for Java backend development)
- JDK 17 or newer (for Spring Boot)

---

### Setting Up and Running the Application

#### Step 1: Clone the repository

Open your terminal and run:

  ```sh
  git clone https://github.com/emeka-okechukwu/get-started-anime.git
  ```

---

#### Step 2: Start the backend server

You can run **either** the Java backend or the Node.js backend — depending on your environment or preference.

---

##### Option 1: Spring Boot Backend (Java)

Navigate to the backend directory:

  ```sh
  cd backend-java
  ```

Open the `application.properties` file and add your API keys:

  ```sh
  openai.apiKey=your_openai_api_key
  cohere.apiKey=your_cohere_api_key
  tmdb.apiKey=your_tmdb_api_key
  ```

Build and run the backend server (ensure your JDK is set up correctly):

  ```sh
  java -jar build/libs/get-started-anime-0.0.1-SNAPSHOT.jar
  ```

The server should now be running on your specified port (default: `http://localhost:8080`).

---

##### Option 2: Express Backend (Node.js)

Navigate to the Node backend directory:

  ```sh
  cd backend-node
  ```

Create a `.env` file and include your API credentials:

  ```sh
  OPENAI_API_KEY=your_openai_api_key
  COHERE_API_KEY=your_cohere_api_key
  TMDB_API_KEY=your_tmdb_api_key
  PORT=your_port
  ```

Install dependencies:

  ```sh
  npm install
  ```

Start the backend server:

  ```sh
  node index.js
  ```

The server will start at `http://localhost:<PORT>` (default is usually `3001` or `5000`).

---

#### Step 3: Start the frontend client

Navigate to the frontend directory:

  ```sh
  cd frontend
  ```

Install frontend dependencies:

  ```sh
  npm install
  ```

Update your `config.tsx` file with your **TMDB** API key:

  ```sh
  export const TMDB_API_KEY = "your_tmdb_api_key";
  ```

Start the React development server:

  ```sh
  npm start
  ```

Open your web browser and go to:

  ```sh
  http://localhost:3000/
  ```

You should now be able to use the application locally.

---

#### Step 4: Generate recommendations

Enter your favorite movies or shows, and watch the AI generate anime recommendations curated to your preferences using **OpenAI or Cohere**.

---

<p align="right">(<a href="#readme-top">back to top</a>)</p>