# HVA

Haruhi Variance Authority, is a package focused on the implementation of variability on components inside React and Svelte, mostly.
Is based out of CVA, just simpler, it has a similar syntax, but don't need to extend props.

**FIRST MAJOR CHANGE**.</br>
The packaged has been reduced on complexity and its even more compact than before.

## Installation
```bash
npm i @slimy/hva
```
```bash
pnpm add @slimy/hva
```

## Important information
The package has been only tested on React and Svelte. It may work on other frameworks, but it's not guaranteed, if you want to test it on other frameworks, please, open an issue.

## Usage
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
<script>
    import hva from '@slimy/hva';

    export let intent: 'primary' | 'secondary' = 'primary';

    const button = hva({
        intent: {
            primary: [styles]
        },
        class: $$props.class // This should be defined always

        // You can add other styles here as well
    })
    $: classes = `${button({ intent, size, class: $$props.class })}`
</script>
<button class={classes}>Click me</button>
```

With that the package should work and now you can use the props of intent, the only thing is that on Svelte the "autocompletion" inside the props doesn't work, I am working on it.

