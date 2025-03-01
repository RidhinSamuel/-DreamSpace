# Dream Space

Dream Space is a project aimed at creating a seamless and efficient environment for managing and navigating through various functionalities. This document provides a brief history of the project's setup and key changes.

## History

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

# Project Steps
### Step 1: Init React Project using Vite
```bash
npm create vite@latest my-react-app -- --template react
```
### Step 2: Install Tailwind
Read [Tailwind](https://tailwindcss.com/docs/guides/vite) documentation for installation and configuration.
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### Step 3: Add to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```
### Step 4: Create Folders for API and Client
```bash
mkdir api client
npm init -y
npm install express
```

### Step 5: Set Up Backend with Node.js, Express, and Nodemon
1. Navigate to the `api` folder:
    ```bash
    cd api
    ```

2. Initialize a Node.js project:
    ```bash
    npm init -y
    ```

3. Install Express and Nodemon:
    ```bash
    npm install express
    npm install nodemon --save-dev
    ```

4. Create `app.js`:
    ```javascript
    import express from 'express';

    const app = express();

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    ```

5. Update [package.json](http://_vscodecontentref_/3) to include `nodemon` in `devDependencies` and add `dev` script:
    ```json
    "scripts": {
      "dev": "nodemon app.js",
      "start": "node app.js"
    }
    ```

### Step 6: Install Mongoose and Connect to MongoDB
1. Install Mongoose:
    ```bash
    npm install mongoose
    ```

2. Create a [.env](http://_vscodecontentref_/4) file in the [api](http://_vscodecontentref_/5) folder with the following content:
    ```dotenv
    CONNECT="save connection string here"
    ```

3. Update `app.js` to connect to MongoDB
