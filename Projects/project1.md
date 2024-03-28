# Project related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-xqn9ep?file=index.html)

# Solution Code

## Project One

```Javascript

console.log("Avinash")

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(buttons);

  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
    if (e.target.id == 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = 'white';
    }
  });
});


```

