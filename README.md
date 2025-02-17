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