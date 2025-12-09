# Assignment - Vue State 

# Learn about State (10 minutes)

1. Go to <https://vuejs.org/tutorial/#step-1> and complete step 1 and 3:

- Make sure you select 'Composition' in the reference on the top left!!
- READ first.
- It\'s about understanding(!) what\'s happening, not about speed.

# Watch video (10 minutes) about State in Vue
Watch the video below, stop the video and try the code parts for
yourself in the project:

- Go to <https://www.youtube.com/watch?v=qZXt1Aom3Cs&t=720s> and watch
    the following: user generator mini project (12:00 / 22:30)

# Answer questions about the video (10 minutes)

> Please don't use AI unless you're going to let it explain things you don't yet understand.  

Write down the answers:

- What is the syntax to add state to your component?
using ref() from vue. Which can be changed using .value and reactive() for objects.

- What does \<img v-bind:src={url} alt=""\> mean?
this binds the src attribute of the img tag to the url variable in the component's state.

- What is the shorter version for *v-bind:src={url}*?
:src={url}

- What is the difference between *v-bind* and *v-model*?
v-bind is used to bind an attribute to a variable, while v-model creates a two-way binding between a form input and a variable.
For example, v-bind can be used to set a value of an img tag, while model takes
an input field and already listens to changes and updates the variable automatically
