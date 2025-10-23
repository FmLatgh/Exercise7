## Goal - How can you use software from someone else in your own project?
You now know how to set up a project in a more professional way.
But you will not always have to write all the code yourself.

There are many libraries and frameworks available that you can use in your project.

You already used one in a previous lesson: `vite`.
`vite` is a library that will help you to build your project.

In this lesson you will learn how to use another library in your project.

### package.json
Information about the project is, as you know, stored in a file called `package.json`.
If you want to use a library in your project, you can add it to the `package.json` file.

### npm install
To add a library to your project, you can use the `npm install` command.
This command will download the library and add it to the `node_modules` folder in your project.

### Exercise: use a library from npm in your project
Follow these steps:
1. Open the project you created in the previous lesson.
2. Open a terminal in Webstorm.
3. Open de website npmjs.com in your browser.
4. Search for a library called 'animejs'.
5. Install the library in your project.
6. Go to the GitHub repository of the library and find the documentation.
7. Modify the `index.html` file in your project:
* Add a `div` element to the `index.html` file.
* Give the `div` element a class name and a width and height.
* Add a script tag to the `main.js` file.
8. Modify the `main.js` file in your project:
* Use the `animejs` library to animate the `div` element by using this code:

```javascript
// Import the library for animating elements in your html
import anime from '/node_modules/animejs/lib/anime.es.js';

// Use the library to animate the element with the class name 'demo'
anime({
    targets: '.demo',
    translateX: 500,
    left: '240px',
    easing: 'easeInOutQuad',
    borderRadius: ['0%', '50%'],
    rotate: '3turn',
    backgroundColor: '#000',
    duration: 3000
});
```


