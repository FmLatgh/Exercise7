## Goal - Set up a project for a web application
Until now, when you started a new project, you probably created an index.html, a css file and a javascript file 
in a folder and started developing.

While this is great for a small project,
it is not sufficient when you work on a larger project.

In this lesson you will learn how to set up a project for a web application in a more professional way.

### What is a project setup?
A project setup is a folder structure that you and your team will use when developing a new project.

It will help you to keep your code clean,
to make sure that everyone can easily find their way in the project.

This is a good example of a folder structure you could start with:
```
project-name/
│
├── public/             // All assets (images, videos, etc.) go here
│   ├── images/
│   └── ...
│
├── src/                // All code go here, except index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
│
├── .gitignore          // Files and folders that you don't want to push to GitHub
│
├── index.html          // The main html file
│
├── node_modules/       // All npm packages go here
│
├── package.json        // Information about the project and the npm packages
│
└── README.md           // Information about the project, instructions on using it, etc.
```

### Exercise: set up a project for a web application

Follow these steps:
1. Create a new folder on your computer and name it `food_data_app`.
2. Open the folder in Webstorm.
3. Create the following folders and files:
    * public/
        * images/
    * src/
        * css/
            * style.css
        * js/
            * main.js
    * .gitignore
    * index.html
    * README.md
4. Open a terminal in Webstorm and run the following command:
   ```
   npm init
   ```
   Answer the questions. It will result in a `package.json` file in your project.
5. Create a `.gitignore` file and add the following content:
   ```
   .idea 
   node_modules/
   ```
6. Add the following content to the `README.md` file:
   ```
   # Setup
   This is a project setup for a web application to display data about food.
   ```   
7. Copy the entire folder `food_data_app` to this folder and push it to GitHub.

### Exercise: build a web application
When you have set up a project for a web application, you will want to deploy it.
This means that you will make the application available on the internet.

Before you can deploy a web application, you will have to build it.
This means that you will have to check and minify the code and make sure that everything is working correctly.

There are several tools you can use to build a web application:
* One tool is Webpack. Webpack bundles your code into a single file.
* Another tool that recently gained popularity is Vite. 

We will learn to use the latter in this exercise:
1. Open the project `food_data_app` you've created earlier.
2. Open a terminal in Webstorm.
3. Run the following command:
   ```
   npm install -D vite
   ```
   This will install Vite in your project.
4. Type `vite` to start the development server.
5. Open the browser and go to `http://localhost:[port]`. 
 
Now you can develop and work on your project. 
When done, it is time to build the project.
1. Run the following command:
   ```
   vite build
   ```
   This will create a `dist` folder with the compiled code.
2. Test the compiled code by running the following command:
   ```
   vite preview
   ```
   This will start a server that will serve the compiled code.

When everything is working correctly, it is time to deploy the application.
The only folder you need to deploy is the `dist` folder!


### Exercise: deploy a web application
When you have finished a web application, you probably want to deploy it (put it online).

There are different ways to deploy a web application:
* One way is to use GitHub Pages. This is a free service that will host your website for you.
Drawback is that you can only host static websites that don't use a backend.
* Another way is to use a hosting service like CloudFlare, Netlify, Render or Vercel. These services will host your website for you and you can use a backend.
* Each of them has their own advantages and disadvantages.

In this exercise, you will learn how to deploy a web application using Render:
1. Go to https://render.com/ and create an account.
2. Create a new static site.
3. Choose the GitHub repository where your project is stored (you might need to give permissions).
4. Choose the branch you want to deploy: `master`
5. Choose the build command:
   ```
   npm install && npm run build
   ```
6. Choose the publish directory:
   ```
    dist/
    ```
   
Now your web application is deployed and you can visit it by going to the URL provided by Render.


Alternatively, you can deploy your web application to CloudFlare:
1. Change your `package.json` file to include the following scripts:
   ```
   "scripts": {
     "build": "vite build",
     "serve": "vite preview"
   }
   ```
2. Push the changes to GitHub.
3. Go to https://dash.cloudflare.com/ and create an account.
4. Click `Add` and choose `Pages`.
5. Connect your GitHub account. (You might need to give CloudFlare access to your repositories.)
6. Then choose the GitHub repository where your project is stored.
7. Leave the build command empty.
8. Change the build output directory to: `dist/`
