# MotionSprite Manual
This covers everything you need to know to make and use MotionSprite animations in your projects.<br>
This will be covered in sections:
<ul>
    <li[About</li>
    <ul>
         <li>Uses</li>
         <li>Limitations</li>
    </ul>
  <li>Editor</li>
  <ul>
       <li>Basics</li>
       <li>Syntax</li>
  </ul>
  <li>Extension</li>
  <ul>
       <li>Loading animation files</li>
       <li>Rendering</li>
       <li>Setting properties</li>
  </ul>
</ul>

## -About-
MotionSprite is a math-based animation tool. It is designed for efficiency over ease of use. It does not use keyframes, instead, it uses mathematical functions to set properties, which turn into animated graphics!

### Uses
Even though you can theoretically use this for any kind of animation in your games, it is mostly designed for motion graphics, environment visuals and effects. Animating characters like a player for a platformer IS POSSIBLE, but not easy to do.

### Limitations
Because of no keyframes, you are limited to how much patience you have to figure out math functions. Along that, the extension can't render more than around 50 animated sprites every frame at a resonable frame rate, due to how updating sprite skins works in PenguinMod. You can get around this by using pen and doing instanced rendering, where you only render an animation once per frame and then stamp it in a bunch of places.

## -Editor-
The editor can be opened from the "Animation editor" button in the block palette, or by going to [https://theshovel.rocks/MotionSprite/](https://theshovel.rocks/MotionSprite/)
### Basics
The editor is made out of a viewport, 4 pannels and a bar.<br>

On the top left you have the part list. There you can add, remove, re-order and assign textures to parts of your animation. On the bottom left you have the property inspector. Once you click a
part's name, you can view and edit its properties. Click on the pen icon on any of
them to start editing them. We will talk more about this in the "Syntax" section of this
page. <br> ![Screenshot_20241028_175710](https://github.com/user-attachments/assets/c7258590-3797-4704-81f7-7cb9f9d950f9)


On the top right you have the texture list. There you can add, remove and replace
textures. On the bottom right you have the variable controls. There you can mess
around with the dynamic variables explained in the "Syntax" section.<br>![Screenshot_20241028_175741](https://github.com/user-attachments/assets/c93c665a-7730-4bd5-971c-748b12a3bd8a)


At the top of the viewport you can see a bar. It has 2 buttons that lead to different
submenus. The "File" submenu lets you Open, Save and exit the current file you are editing.
The "Anim" submenu contains an animation manager. You can use the animation manager
to create, delete, edit and rename animations from the current file. The top bar
also shows you the current file and selected animation.![Screenshot_20241028_175752](https://github.com/user-attachments/assets/538d3588-9bf1-4970-89d8-601e1f4f2051)


### Syntax
This is what you'll have to use to animate your parts. Inside the property of a part you can type mathematical
functions. These will result into a value that the property will take every frame the animation is rendered.<br> <br>Here is a list of all the functions you can use:
<ul>
<li> cos(a): Returns the cosine of a.</li>
<li> sin(a): Returns the sine of a.</li>
<li> abs(a): Returns the absolute value of a.</li>
<li> sqrt(a): Returns the square root of a.</li>
<li> pow(a, b): Returns a to the power of b.</li>
<li> max(a, b, ...): Returns the largest of zero or more numbers.</li>
<li> min(a, b, ...): Returns the smallest of zero or more numbers.</li>
<li> clamp(value, min, max): Clamps a value between a minimum and maximum value. Returns value if it is between min and max, returns min if value is less than min, and max if value is greater than max.</li>
<li> round(a): Returns the value of the number a rounded to the nearest integer.</li>
<li> floor(a): Returns the largest integer less than or equal to a.</li>
<li> ceil(a): Returns the smallest integer greater than or equal to a.</li>
<li> mod(a, b): Returns a % b, but handles negative numbers correctly.</li>
<ul>

##### Variables
There are special variables that you can use in your animations to make them more dynamic:
<ul>
<li> time: It gets the current timer of the animation. Usually used with a timer that updates every frame as an input.</li>
<li> ai: Short for "animation intensity", is a value that can be used to change the intensity of your current animation.</li>
<li> xvel: Can be used to change the animation based on movement.</li>
<li> yvel: Can be used to change the animation based on movement.</li>
<ul>

##### Examples
Making something move back and forth ``cos(time*5)*25`` where 5 is the speed and 25 is the distance. This is between
-25 and 25.<br>

https://github.com/user-attachments/assets/3518e127-c6cb-4f19-bf0b-04148378f55f


If you want it between 0 and 25 you can do ``abs(cos(time*5)*25)``.<br>

https://github.com/user-attachments/assets/9c9586b3-8fa6-44bf-ba49-048910a13763

Here is an example of how the velocity variables work.<br>

https://github.com/user-attachments/assets/8642f6fd-6c09-4089-a151-c4428b68ffe1

## -Extension-
You can load the extension into your project from this link ``https://extensions.penguinmod.com/extensions/TheShovel/qoan-renderer.js``, or you can start a fresh project with the extension loaded by [clicking here](https://studio.penguinmod.com/editor.html?extension=https://extensions.penguinmod.com/extensions/TheShovel/qoan-renderer.js).

### Loading animation files
Theres 2 ways to load an animation file:<br><br>
1. You can load it into your project by clicking "Manage animation files" in the block pallette:<br>[IMAGE]<br>
This will save the animation you loaded into the project file. When you save and re-open your PenguinMod project, your animation files will be there.<br>
This will only load the animation as a file. To load the file to be usable, you have to put the file block, into the "load file from" block input, like this:
<br>[VIDEO]<br>
<br>
2. You can load it from a link with the "load file from" block. This won't save the file into your project, but it's useful for asset streaming. It has to be a direct link to the file, like this:<br>[VIDEO]<br>

### Rendering
Once you have loaded an animation, you can render it onto a sprite, with the "render animation" block. The first input is for the animation name that from the file, and the 2nd input is the name that you loaded the file as.<br>
NOTE: Once you do this, the animation won't update every frame. You have to call the "render animation" block every time you want to update the sprite's animation.

#### Rendering options
Theres some blocks that let you set options for rendering, depending on your needs.<br><br>
You can enable or disable anti aliasing, which is a technique used to smooth out jagged edges in the animation. This can be set with this block:<br>[IMAGE]<br>
<br>
You can change the resolution the animation renders at. This can be used to increase performance depending on the project. Many low resolution animations will render faster than many high resolution animations, but will look worse. This can be set with this block:<br>[IMAGE]<br>

### Setting properties
When you render your animation, you will notice that it doesn't move! That's because you have to set the variables used manually. This can be done by using the "set" block. These variables are the ones explained in the [Syntax](https://github.com/TheShovel/MotionSprite/blob/main/docs.md#syntax) section.<br><br>
For the "Time" variable it's recommended to set a timer that updates every frame. This is not done by default because it gives you control over how the animation plays. You can make it go faster or slower by using your own values.
