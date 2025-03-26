<h1 align="center">Wanderlust - Your Next Adventure Awaits!</h1>

<details>
<summary>Table of Contents</summary>

- [Why Wanderlust?](#why-wanderlust)
- [📝Project Overview](#project-overview)
- [😎Features](#features)
- [🛠Installation](#installation)
- [🔧Tech Stack](#tech-stack)
- [🚀Deployment](#deployment)
</details>

---

## Why Wanderlust?

Welcome to Wanderlust, your go-to platform for discovering and booking unique accommodations. We understand the desire for seamless travel experiences, and that's why we've created a user-friendly platform that connects travelers with hosts. Whether you're looking for a cozy cabin or a luxurious villa, Wanderlust makes finding your perfect stay effortless.

## 📝Project Overview

Wanderlust is a full-stack web application built using Node.js, Express.js, and MongoDB. It provides a platform for users to list their properties and for travelers to book them. The application includes features for user authentication, listing management, image handling, and review systems.

## 😎Features

- **User Authentication & Authorization:** Secure user registration, login, and role-based access control.
- **Listing Management (CRUD):** Create, read, update, and delete listings with detailed information (name, description, price, images).
- **Image Handling:** Upload and display multiple images for each listing.
- **Reviews & Ratings:** Users can leave and view reviews and ratings for listings.
- **Dynamic Frontend:** Interactive user interface built with EJS templates for a seamless experience.
- **Responsive Design:** Ensures the application is accessible and user-friendly across various devices.

## 🛠Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone <repository_url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd Wanderlust
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Configure MongoDB Atlas:
    -   Create a `.env` file in the root directory.
    -   Add your MongoDB connection string: `MONGODB_URI=your_mongodb_connection_string`.
    -   Add any other necessary environment variables.
5.  Run the application:
    ```bash
    npm start
    ```
6. Open your browser and go to `http://localhost:3000`.

## 🔧Tech Stack

| Technology   | 
|--------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) |
| ![EJS](https://img.shields.io/badge/EJS-7A8B8B?style=flat&logo=ejs&logoColor=white) |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) |



## 🚀Deployment

-   The application is deployed on Render.
-   Render configuration and environment variables are set up to connect to the MongoDB Atlas database and handle application settings.
-   Access the deployed application via the Render-provided URL.
