# Haruhi Variance Authority
<center>Your new variant manager, with simplicity and minified.</center>

## What is HVA?
HVA is a variant manager, that allows you to create variants for you components to later on, use them in your code.

_For being this simple, it can be used with Astro integrations without any trouble or error._

### What is a variant?
**A variant is a component that has a different style, but the same functionality.**

> _For example, a button with a different color, or a card with a different background._

So Haruhi, manages that for you in a simple way.

## How to Install it?
You can install it using npm:
```bash
npm install @slimy/hva
```
Or using Pnpm:
```bash
pnpm install @slimy/hva
```
Or using Yarn:
```bash
yarn add @slimy/hva
```

**Note:** Yarn is yet to be supported.

## How to use it?

**First of all, have in count two things, HVA doesn't support type safety right now, and it has been tested only in React and Svelte, is as simple as it can be.**

### React
```jsx
import hva from '@slimy/hva';

const button = hva({
    intent: {
        primary: [styles]
    }
    // You can add other styles here as well
})

export function Button({intent, className, ...props}) {
    return <button className={button({intent, className})}>Click me</button>
}
```

### Svelte
```html
<script lang="ts">
import hva from '@slimy/hva'

  export let intent: 'primary' | 'secondary' = 'primary';
  
  const styles = hva({
    intent: {
      primary: [styles]
    }  
  });

  $: haru = `${styles({ intent, class: $$props.class })}`;
</script>

<button class={haru}>Click me!</button>
```

Then you can use it like this in both React and Svelte:
```jsx
<Button intent="primary" />
```

## How to contribute?
Making an issue is the most helpful way possible, I will try to fix it as soon as possible.

If you want to contribute to the code, you can make a pull request, and I will review it as soon as possible.

## License
This project is licensed under the MIT License.

