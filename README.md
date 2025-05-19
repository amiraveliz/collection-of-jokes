# Collection of Jokes

### Demo

[Collection of Jokes](https://collection-of-jokes-five.vercel.app)

### Development

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tools

Nextjs 15, React 19, React Hooks, Tailwind, Zustand, Motion and others.

## Description

The project was created to support accessibility (keyboard navigation and screen reader compatibility (voiceover)), to be SEO friendly, and responsive across all devices.

## Q&A

### 1. What's a closure? Where in the code is there a closure?

A closure allows a function to access variables from its outer scope, even after that scope has closed. It allows functions to "remember" the environment in which they were created.

Yes, we have closures in the project, in handler.js file we can find some closures. For example:

```js
const jokeByType = (type, n) => {
    return randomN(
        jokes.filter((joke) => joke.type === type),
        n
    );
};
```

The function jokeByType is not receiving the `jokes` variable as a param, and even that the function randomN is using the variable `jokes` to filter and process the result. This is because the `jokes` variable was defined in the same scope of randomN function.

### 2. Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?

#### Potential Side Effects:

1. Unintended variable sharing: If multiple closures share and modify the same
   captured variable, changes in one closure might affect others, leading to unexpected
   behavior.
2. Memory leaks: Closures keep references to variables in their enclosing scope,
   preventing JavaScript's garbage collector from reclaiming memory associated with
   those variables even if they're no longer needed elsewhere.
3. Incorrect rendering: In React components, stale closures may cause components to
   render incorrect data.

#### Side Effect in the code:

In the code we have the following block as a side effect:

```js
jokes.forEach((jk) => (jk.id = ++lastJokeId));
```

This is modifying the variable `jokes` and below we can see many other functions are
reading the same variable `jokes`. Example:

```js
const count = Object.keys(jokes).length;
const jokeById = (id) => jokes.filter((jk) => jk.id === id)[0];
```

We don’t have unexpected behaviors in this case though, as the first block is just assigning an id to the existing objects in the list. If we had a function that updates the original variable `jokes` to an empty array, for example, then it would be an unexpected behavior as other functions are reading the same variable and they expect to read the full items from the `jokes` list. Example unexpected function update:

```js
const randomTen = () => {
    jokes = jokes.slice(0, 10);
    return jokes;
};
```

In order to avoid unexpected side effects the original “shared” variable should not be modified. A new copy could be created and modified instead if needed.
