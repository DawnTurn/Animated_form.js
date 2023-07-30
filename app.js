const inputs = document.querySelectorAll('input')
const arrows = document.querySelectorAll('.bx-down-arrow-alt')
const body = document.querySelector('body')
const users = document.querySelectorAll('.user')
const completed = document.querySelector('.completed')


arrows[0].addEventListener('click', () => {
    errorValidation(inputs[0], users[0])
    validate(inputs[0], users[0], users[1])
})

arrows[1].addEventListener('click', () => {
    validateEmail(inputs[1], users[1])
})

arrows[2].addEventListener('click', () => {
    errorValidation(inputs[2], users[2])
    if (inputs[2].value.length > 5){
        fade(users[2], completed)
    }
})

function errorValidation(input, user) {
    if (input.value === "" || input.value.length < 6) {
    body.classList.add("red-error");
    user.classList.add("shake");
    setTimeout(() => {
        user.classList.remove("shake");
    }, 1000);
    }
}

function validate(input, user1, user2) {
    if (input.value.length > 5) {
      body.classList.remove("red-error");
      user1.classList.add("fade-out");
      user2.classList.add("fade-in");
    }
}

function fade(user1, user2){
    body.classList.remove('red-error')
    user1.classList.remove('fade-in')
    user2.classList.add('fade-in')
}

function validateEmail(email, user) {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailValidation.test(email.value)){
        fade(users[1], users[2])
    }
    else{
        body.classList.add("red-error");
        user.classList.add("shake");
        setTimeout(() => {
        user.classList.remove("shake");
        }, 1000);
    }
}