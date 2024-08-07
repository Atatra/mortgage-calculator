# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

|     Label     |              Desktop               |                Mobile                |
| :-----------: | :--------------------------------: | :----------------------------------: |
|     Empty     | ![](./screenshots/desk-empty.png)  | ![](./screenshots/mobile-empty.jpg)  |
| Active/Filled |  ![](./screenshots/desk-fill.png)  |  ![](./screenshots/mobile-fill.jpg)  |
|    Results    | ![](./screenshots/desk-result.png) | ![](./screenshots/mobile-result.jpg) |
|    Errors     | ![](./screenshots/desk-errors.png) | ![](/screenshots/mobile-errors.jpg)  |

### Links

- Solution URL: [GitHub Repo](https://github.com/Atatra/mortgage-calculator)
- Live Site URL: [Mortgage Calculator Vercel](https://mortgage-calculator-rust.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties & TailwindCSS
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Zod](https://zod.dev/) - TypeScript-first schema validation - For data validation
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

- How to use Zod for form validation client-side.

- I'm starting to understand how `position: relative` affect children's behaviours, and what `position: absolute` really means.

- How to make the form completeable only with keyboard. I only needed to add the proper markups.

- That it was fairly easy to format a user input (1000 -> 1,000). But there were some exceptions to handle though, which led to unwanted behaviour that I didn't thought earlier...

  For instance, if I knew that the behaviour of my `Amount Input` would be so different from the other two, I would never have factorized them in `Input.tsx`.

### Continued development

- I probably should use CSS modules, it would prevent copy pasting the same properties too many times, and make the code more readable since my TailwindCSS classes are not organized at all (no proper ordering on attributes).

- I had trouble with changing the color of the Radio Button, it seems like it's not possible since it is browser-dependent. So I had to replace it with two divs painfully positioned with `position: relative` and `position: absolute`. Which makes it not fully responsive, the inner circle might be misplaced based on the user's browser and screen settings. Next time I'll probably use two images instead (checked, not_checked).

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - [Flexbox Froggy](https://flexboxfroggy.com/) - This helped me for semantic HTML, flexbox, and grid, because I don't know what I'm doing.
- [Zod Docs](https://zod.dev/) - [Zod Integration](https://www.youtube.com/watch?v=9UCoVM6QhnU) - For the same reason as above.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@Atatra](https://www.frontendmentor.io/profile/Atatra)
