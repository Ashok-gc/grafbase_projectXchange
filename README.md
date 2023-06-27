# ProjectXchange - README

This repository contains the ProjectXchange project, a platform for sharing and managing projects. Follow the instructions below to set up and run the project.

## Installation

1. Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org](https://nodejs.org) and follow the installation instructions.

2. Open a terminal or command prompt and navigate to the directory where you want to create the project.

3. Run the following command to create a new Next.js project using Create Next App:

   ```bash
   npx create-next-app@latest
   ```

4. Change into the newly created project directory:

   ```bash
   cd ProjectXchange
   ```

5. Install the `@grafbase/sdk` package as a dev dependency by running the following command:

   ```bash
   npm install @grafbase/sdk --save-dev
   ```

6. Initialize the Grafbase project by running the following command:

   ```bash
   npx grafbase init --config-format typescript
   ```

7. Install the `node-fetch` and `next-auth` packages by running the following commands:

   ```bash
   npm install node-fetch@latest
   npm install next-auth
   ```

## Running the Client

To run the client site for ProjectChange, follow these steps:

1. Make sure you are in the root directory of the project.

2. Run the following command to start the client site:

   ```bash
   npm run dev
   ```

3. Open your web browser and visit `http://localhost:3000` to access the ProjectChange client site.

## Running the Server

To run the server for ProjectChange, follow these steps:

1. Make sure you are in the root directory of the project.

2. Run the following command to start the server:

   ```bash
   npx grafbase@0.24 dev
   ```

3. Open your web browser and visit `http://localhost:4000` to access the ProjectChange server.

## Additional Notes

- Ensure both the client and server are running simultaneously for the full functionality of ProjectChange.

- Modify the necessary configuration files and components as per your requirements.

- Refer to the documentation of `@grafbase/sdk`, `node-fetch`, and `next-auth` for any further customization or usage details.

- For any questions or issues related to ProjectChange, feel free to create an issue on the project's GitHub repository.

Thank you for using ProjectChange! Enjoy managing your projects!