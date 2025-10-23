# **Assignment Building a slot machine**

Step by step, you're going to create a slot machine. Read the
instructions bellow carefully.

## 1.  **Let's get started**

a.  A project already has been made for you in the folder \'slot_machine\'. 
Open it in another WebStorm instance. Push regularly!

b.  Create a new component \'Reel.vue\'

c.  Give it a state: currentNumber

d.  Give currentNumber a random number on creation between 1 - 5.

e.  Show currentNumber in the template.

f.  Use the \'Reel.vue\' component in the \'App.vue\' component.

## 2.  **That, but make it pretty**

a.  Show images instead of numbers.

b.  Create the border.

c.  Extra: Can you animate the rolling of the reel?

![A slot machine with a number seven Description automatically
generated](media/img1.png)

## 3.  **More is better!**

a.  Show multiple reels on your screen.

b.  Make the number of reels dependent on a state variable
    'numberOfReels'. Use a for-loop for that with the right
    directive.

c.  Create an 'increase' button and a 'decrease' button.

d.  Add or remove a reel when the user clicks on one of the buttons.

![A screenshot of a slot machine Description automatically
generated](media/img2.png)

## 4.  **Spin to win**

a.  Create a spin button.

b.  Make the reels 'spin' (change numbers) when the user clicks the
    button (watch for a property change).

c.  Pass this value to the parent component (Execute a method in the
    parent that was passed in a property with the new value as an
    argument.)

![A screenshot of a slot machine Description automatically
generated](media/img3.png)

## 5.  **Win to spin**

a.  Make the reels communicate their random number to the parent
    component.

b.  Make a win condition in the parent component.

c.  Connect the communicated numbers to the win condition.

d.  Show whether the player has won.

e.  Keep track of the credits that a player has (how many times they
    can spin) in a separate component.

f.  When there are three of the same numbers, increase the credits
    by one, otherwise decrease the credits by one

## 6.  **A 'reel' challenge**

a.  Add hold buttons to the reels which make you hold the number for
    one turn.

b.  Add more than one win line (also diagonal)
