const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function updateName () {
    const name = input.value.trim();
    output.textContent = name || 'Anonymous';
}

input.addEventListener('input',updateName);