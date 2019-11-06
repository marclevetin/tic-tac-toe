# React 101
## What we're making
Tic Tac Toe anyone?

Features include:
- Ability to enter player names
- a 3x3 board that allows you to enter Xs and Os
  - doesn't make you remember which piece is next
- automatically calculates winner!
- doesn't let you overwrite a space that's been taken
- button to start a new game
-

_Disclaimer: There's a lot in this project, so I might wave my hands and do some smoke and mirrors, not because I don't want to answer the question, but because I want to get through a lot of stuff._

## Anatomy of a React project
React is often used as a Single Page Application (SPA).  Important to note that CyberGrants does _not_ use React in this way.

Say "to get started, we're going to spin up a new app.  Facebook gives us `create-react-app`.  This tool brings out strong emotions in the developer world.  I'm going to use a different tool, `nano-react-app` because it's got less stuff packed in and this is a quick overview.

**Type in terminal: npm nano-react-app tictactoe-demo**

- Open up the `index.html`, go over:
  - Note the head, and add `<link rel="stylesheet" href="./src/style.css">`
  - Note the bundled `js` at the bottom
  - Note the `<div id="root"></div>`
- Go to `index.js`, talk through the file
- Go to `src` folder, open up `App.js`
  - folder is named `src` by convention
  - `App.js` is a component, it's a building block of a react app.
  - let's talk about JSX

## JSX
JSX stands for Javascript and XML.  It's a templating language that's used with React.

- You can render Javascript expressions inline by wrapping the code in curly braces.
  - Add `{ 1 + 3 }` to App.js
- As a general rule, you can use any HTML element without change.
  - CSS `class` needs to be entered as `className`.
  - Ditto for multi-word attributes: `tabindex` becomes `tabIndex`.  And the console will let you know when things are wrong.
  - Show how a rendered component translates to HTML
    - Show off the Fragment

## Components
### Virtual DOM and Lifecycle
Every component goes through a lifecycle.  Like any JS framework, there are a ton of lifecycle methods.  The important ones for today are `render` and `componentDidMount`.  The other one that is probably important is `componentWillUnmount`.

Learn more here: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

React maintains a thing called the "Virtual DOM" which is a copy of the DOM that we see on the page.  When a component has a state change, React's engine sees the change and runs through a diff-ing process to decide is the component needs to change.  It errs on the side of caution and re-renders.  There are ways to control this re-rendering, but that's outside of the scope of this demo.

We will talk more about this as the demo progresses.

## State and Props
***Use Dev Tools to show state and props***

Both state and props hold information about how the component should render.
Both state and props are plain JS objects.
State is managed _internally_ to the component.
Props are _passed into_ the component from the parent.

** If you change a component's _state_, then the Virtual DOM diff-ing process kicks off and the component _will be_ rerendered, the component's children _might_ be rerendered.

Demo example:
- Create a Game component
- Create a Board component

- Want to have multiple games on the board?

## Forms
Forms are kind funky in React.
Form fields come in two flavors: controlled and uncontrolled.
- Controlled means that the data is kept in state.  Common for text fields.
- Uncontrolled means the opposite.  Common for file uploads.

For this demo, we are going to have a couple of simple text fields - player names
- unidirectional data flow
- handleChange function
- htmlFor attribute

If this was a real form, then I'd have an `onSubmit` function as well.  This isn't a form, per se, so I'm bending the rules.  Remember, you want to write your React to compile down to valid markup!

`<magic>`In a controlled component, you can do nifty things like front-end validation.`</magic>`


## Lists and keys
"So we have the board, we have the players, let's make some squares!"

Square component
- Button that toggles X and O.
- List need to have a `key` to make it diff-ing process easier.

```
const allTheSquares = squares.map((square, index) =>
            <Square
                key={`square${index}`}
                value={squares[index]}
                onClick={() => this.handleClick(index)}
            />
        )
```

## Winning logic / Conditional rendering
Build a button to reset the game

Disable the button when the game is in progress and if there game is still going
```
<button disabled={!winner && squares.includes(null)} onClick={this.resetGame}>Reset Game</button>
```

Change the text when there is a winner:
```
const status = winner ? `Winner ${winner}` : `Next Player: ${xIsNext ? `X (${ xplayer })` : `O (${ oplayer })`}`;
```



