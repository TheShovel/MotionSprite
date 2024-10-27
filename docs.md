# MotionSprite Manual
This covers everything you need to know to make and use MotionSprite animations in your projects.<br>
This will be covered in sections:
<ul>
  <li>Editor</li>
  <ul>
       <li>Basics</li>
       <li>Syntax</li>
  </ul>
  <li>Renderer</li>
  <ul>
       <li>Implementation</li>
       <li>Importing animation files</li>
       <li>Properties</li>
       <li>Instanced rendering</li>
       <li>Applying effects</li>
  </ul>
</ul>
Remember that you will need basic knowledge of Pen+, PenguinMod/TurboWarp and
writinng a pen based renderer.

## -Editor-
### Basics
The editor is made out of a viewport and 4 pannels.<br>

On the top left you have the part list. There you can add, remove, re-order and assign textures to parts of your
animation. On the bottom left you have the property inspector. Once you click a
part's name, you can view and edit its properties. Click on the pen icon on any of
them to start editing them. We will talk more about this in the "Syntax" section of this
page. <br>

On the top right you have the texture list. There you can add, remove and replace
textures. On the bottom right you have the variable controls. There you can mess
around with the dynamic variables explained in the "Syntax" section.

### Syntax
This is what you'll have to use to animate your parts. Inside the property of a part you can type mathematical
functions. These will result into a value that the property will take every frame the animation is rendered.<br>
Everything under the JavaScript Math function will work. Here is a list of all the functions you can use:<br>
abs, acos, acosh, asin, asinh, atan, atanh, atan2, ceil, cbrt, expm1, clz32, cos, cosh, exp, floor, fround, hypot, imul, log, log1p, log2, log10, max, min, pow, random, round, sign, sin, sinh, sqrt, tan, tanh, trunc

##### Variables
There are special variables that you can use in your animations to make them more dynamic.
<ul>
<li> time: It gets the current timer of the animation. It starts when the animation is loaded.</li>
<li> ai: Short for "animation intensity", is a value that can be used to change the intensity of your current animation.</li>
<li> xvel: Can be used to change the animation based on movement.</li>
<li> yvel: Can be used to change the animation based on movement.</li>
<ul>

The way you set them is by setting a runtime variable with the variable name followed by the id, like this
``ai1`` or ``xvel`` and so on. (Remember that they all should be lowercase)

##### Examples
Making something move back and forth ``cos(time*5)*25`` where 5 is the speed and 25 is the distance. This is between
-25 and 25. If you want it between 0 and 25 you can do ``abs(cos(time*5)*25)``.<br>
You can clamp a value between 2 numbers by doing ``min(max(100, 25), 50)`` where 25 is the minimum value, and 50 is the
maximum value, while 100 is the value beling clamped. You get the idea. It's just the JavaScript Math object.

## -Renderer-
### Implementation
You can load all the extensions required and a sprite with the renderer using this extension: URL<br>
Keep in mind that this was made for Pen projects. Your project must already be a Pen based project for this to work!<br>
You can drag the custom block into any other sprite you are using. (you will probably want to move it into the sprite
that renders everything in your game)<br>
After you do that, you can just place the custom block anywhere in your code! It works just like stamping a costume, but
instead you are stamping a whole animated element!

### Importing animation files
To import an animation, you must first decide how you will store your animations.<br>

If you want to store them in your project, you will have to load the file into a Scratch variable. You can do this by copy
pasting the contents of your animation file into the value of a variable (via the variables tab) or you can do something with
the files extension as shown bellow:<br>
IMAGE HERE<br>

But... if you want to load it externally (from a server or local file in Electron build) you will have to fetch it. There
is an example bellow:<br>
IMAGE HERE<br>

#####WARNING
Keep in mind that that no matter how you store your animation, it must then be set into a runtime variable. You will use the name
of that runtime variable in the animation's file input (mentioned in the properties section), like in the examples above.<br>
This is done for performance reasons. If you would input the animation directly into the input, that data would have to be
parsed to the block every frame.

### Properties
The custom block has a couple of inputs. Here is what all of them do:
<ul>
<li> x: X position where the animation will be rendered.</li>
<li> y: Y position where the animation will be rendered.</li>
<li> direction: The rotation that the animation will be rendered in.</li>
<li> file: The name of the runtime variable that stores the animation. (look at the "Importing animation files" section)</li>
<li> anim: The name of the animation from the file that will be rendered.</li>
<li> size: Size that the animation will be rendered in.</li>
<li> id: Unqiue number that you set to an animated component.</li>
<li> flip: What direction the animation is flipped in. 1 is normal and -1 is flipped.</li>
<ul>

### Instanced rendering
If you want to render the same animation multiple times quickly in different positions on the screen, you can use the same id
for all of them. This will not load them as different animations and save a lot of memory usage.<br>
You can use this to make stuff like drop shadows as shown bellow:<br>
IMAGE HERE<br>

### Applying effects
You can apply any effect that works on a Pen+ square stamp, to an animation. All you have to do it set the effect before rendering
the animation. Bellow is an example of tinting an animation:<br>
IMAGE HERE<br>
