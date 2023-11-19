# Unlimited Colors using Javascript

Unlimited Colors is a project built using the concepts of `events` and `DOM` in Javascript. Events are occurrences that can trigger certain functionality, and can result in certain behaviour. A common example of an event, is a “click”, or a “hover”.

## Here are some examples of JavaScript events:

- click: This event is fired when an element is clicked.
- mouseover: This event is fired when the mouse cursor moves over an element.
- mouseout: This event is fired when the mouse cursor moves away from an element.
- submit: This event is fired when a form is submitted.
- change: This event is fired when the value of an input element changes.
- keydown: This event is fired when any keys of the keyboard is pressed.

`To listen to such events, Javascript provides "addEventListener() method"`.

## About AI and other information

> **Important**
> I didn't focus on beautifying the UI here, but rather on understanding the logic and implementing it.

I used [chatGPT](https://www.chatgpt.com/) as my _pair programmer_ to provide me with a boilerplate of CSS to beautify this project. Using chatGPT as my _pair programmer_ helped me to focus more on logic side than the UI side. Plus it also helped me to save a lot of time.

_Other AI tools used: [GitHub Copilot](https://github.com/features/copilot)_ and [phind](https://www.phind.com/)

## Thought process
_It is simple_
- I want a minimalistic UI to display changing of the background colors.
- There will be two buttons on the screen. Start and Stop button.
- When the user clicks on the `Start button` the background should start changing the colors every second.
- When the user clicks on the `Stop button` the background should stop changing colors.
- That is it.

## Code explanation
- First thing is first. I asked my _pair programmer_ [chatGPT](https://www.chatGPT.com/) to give me a boilerplate of background changer app along with some CSS styling and this is what it gave me 👇
```html
<!-- HTML -->
<body>
    <div id="main">
        <h1>Unlimited Colors</h1>
        <button id="start">Start</button>
        <button id="stop">Stop</button>
    </div>
</body>
```
```css
/* CSS */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

#main {
    text-align: center;
}

#main h1 {
    margin-bottom: 20px;
}

#main button {
    padding: 10px 20px;
    margin: 0 5px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}

#main button#start {
    background-color: #4CAF50;
    color: white;
    border: none;
        }

#main button#stop {
    background-color: #f44336;
    color: white;
    border: none;
}
```
- The next step is to create the hex code for all the colors.
```javascript
// generate random colors
const randomColors = function() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
```
- When the user clicks on the start button, the background should change the color every second. Here the `Events` in Javascript play a very important role.
- `setInterval()` method allows to change the color every second.
```javascript
let startInterval;

// start
const startChangingColor = function() {
    if (!startInterval) {
        startInterval = setInterval(changeColor, 1000)
    }

    function changeColor() {
        document.querySelector('h1').style.color = '#fff'; // change font color to white
        document.body.style.backgroundColor = randomColors();
    }
}
document.querySelector("#start").addEventListener("click", startChangingColor)
```
- When the user clicks on the stop button, the background should stop changing the color.
- `clearInterval()` method allows to do so.
```javascript
// stop
const stopChangingColor = function() {
    clearInterval(startInterval)
    document.querySelector("h1").style.color = "#000" // change font color to black
    startInterval = null;
}

document.querySelector("#stop").addEventListener("click", stopChangingColor)
```
- Now my background changer project is ready 🎉

> Click [here](https://github.com/edsondsouza/unlimited-colors/blob/main/script.js) to see the final code. 

>[Project Link](https://edsondsouza.github.io/unlimited-colors/)

# Setup the repo in your local environment
- Clone the repo
  ``` 
  git clone https://github.com/edsondsouza/unlimited-colors.git
  ```

> If you liked the project please do drop a ⭐

# Follow me on socials
[BioDrop](https://www.biodrop.io/edsondsouza)