## Goal - How can you use animations in a webpage?

Animations make your website more interactive and engaging for users.

It is possible to use just plain css, but with JavaScript you can create more complex animations.
Especially with libraries like GSAP (GreenSock Animation Platform).

By the end of the session, you will have an animated webpage featuring GSAP animations
based on the music video 'Groove is in the heart from DeeLite'.

-----
## 1. Introduction to GSAP

1. **What is GSAP?**
    1. GSAP (GreenSock Animation Platform) is a JavaScript library for creating animations.
    2. Movement, rotation, scaling, opacity
    3. It also has some plugins for more advanced animations. Think of smooth scrolling, scroll-based animations, etc.

2. **Basic Concepts:**
    1. gsap.to(): Animates properties from current to target values.
    2. gsap.from(): Animates properties from specific values to their current state.
    3. gsap.fromTo(): Defines both starting and ending values.
    4. Video: https://www.youtube.com/watch?v=fXfI5qkF8dU
    5. gsap.timeline(): Sequencing tool to play animations in a certain sequence.
    6. Extended cheat sheet: https://gsap.com/cheatsheet/

3. **Advanced animations with plugins**
    1. ScrollTrigger: Allows animations to trigger based on scrolling.
    2. SplitText: Allows animations on text.
    3. MorphSVG: Allows animations on SVGs.
    4. DrawSVG: Allows animations on SVG paths.
    5. Plugins: https://gsap.com/docs/v3/Plugins/

-----
## 2. Setup and exercises to learn basic concepts

1. Create a new project `deelite_gsap`.
2. Create a `package.json` file.
3. Install the npm package `vite` (live server to preview their work).
4. Search for the package `gsap-trial` on npmjs.com and install the it.
   (The gsap-trial package is the trial version of the gsap package. This trial version contains all available plugins.
   However, most plugins can't be used in production because you didn't pay for it).
5. Create a and add the following files:
    * `index.html`
    * `styles.css`
    * `main.js`
6. Add the following code to the `index.html` file:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>GSAP Animations</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
   <header>
       <h1>Groove is in the heart</h1>
       <p>Dee Lite</p>
   </header>
   <main>
       <h1>Groovy</h1>
   </main>
   <footer>
       Do not put this online! All images and music is copyrighted.
       Also, you are using the gsap-trial version which is not free for commercial use!
   </footer>
   
   <script src="main.js"></script>
   </body>
   </html>
   ```

7. **Basic Styling** Add simple CSS to style the page:

   ```css
   
   html {
       font-family: Arial, sans-serif;
       font-size: 16px;
   }
   
   * {
       margin: 0;
       padding: 0;
   }
   
   main {
       background-image: url('assets/groovy_background.png');
   }
   ```

8. **First Animation**

```javascript
gsap.from("header h1", {duration: 1, y: -50, opacity: 0, ease: "bounce.out"});
```

Also try the methods `gsap.to()` and `gsap.fromTo()` and find out what the difference is.

-----
## 4. Advanced Animations: Using Timelines

1. **What is a Timeline?**
    1. A gsap.timeline() allows sequencing multiple animations.
    2. Create a Timeline Animation:
       Modify the code in such a way that the header text in the main tag is animated first and then the main text.
       You may choose the kind of animation, its duration and easing yourself.

-----
**5. Wrap-Up Project: Groove is in the heart**
1. Work in duos, BUT you both work in your own repo!
2. Create a webpage `groovy.html` based on the music video 'Groove is in the heart' from DeeLite.
3. Use GSAP to for animations.
4. Use at least one scroll-based animation using ScrollTrigger.
5. Use the audio file `Deee Lite - Groove Is In The Heart.mp3` and try to sync the animations with the music.
6. Demo the result to the class, showcasing the animations they created.

Examples: 
* https://www.caveworld.com/
* https://santa.tote.co.jp/
* https://bruno-simon.com/
* http://www.rleonardi.com/interactive-resume/
* https://heyblackmagic.com/
* https://wild-memory-radio.wetransfer.com/
* https://bmsgfes.tokyo/
* https://thebreedling.com/
* https://tomomi-shibakusa.com/
  

-----
## Additional Resources

* GSAP Getting Started Guide: https://greensock.com/get-started/
A beginner-friendly guide for setting up GSAP and understanding its basics.

* GSAP Official Documentation: https://greensock.com/docs/
Detailed documentation for all GSAP methods, plugins, and examples.

* GSAP Tutorials: https://greensock.com/learning/
A collection of tutorials for all levels of GSAP users, from beginner to advanced.

* CodePen GSAP Examples: https://codepen.io/collection/DwVYmL
Explore various GSAP animations and experiment with them in real-time.

* ScrollTrigger Plugin Documentation: https://greensock.com/scrolltrigger/
Learn how to create scroll-based animations with GSAP’s ScrollTrigger plugin.

* Full video course on ScrollTrigger: https://www.youtube.com/watch?v=WEky7V490Rs&list=PLMPgoZdlPumexxtvuPUB3TY7LExI1N_Xp

