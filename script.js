// Map of Phonetic Urdu characters for the virtual keyboard
const phoneticUrduCharacters = {
    a: 'ا', b: 'ب', c: 'ک', d: 'د', e: 'ع', f: 'ف', g: 'گ', h: 'ہ', i: 'ی', j: 'ج',
    k: 'ک', l: 'ل', m: 'م', n: 'ن', o: 'و', p: 'پ', q: 'ق', r: 'ر', s: 'س', t: 'ت',
    u: 'ؤ', v: 'ڈ', w: 'و', x: 'کس', y: 'ے', z: 'ز'
    // Add more characters as needed
};

const textarea = document.getElementById('urdu-textarea');

// Function to convert English characters to Phonetic Urdu characters
function convertToPhoneticUrdu(character) {
    return phoneticUrduCharacters[character.toLowerCase()] || character;
}

// Function to add characters to the textarea when a button is clicked
function addToTextarea(character) {
    const convertedCharacter = convertToPhoneticUrdu(character);
    textarea.value += convertedCharacter;
}

// Function to copy the Urdu text to clipboard
function copyToClipboard() {
    textarea.select();
    document.execCommand('copy');
    alert('Urdu text copied to clipboard!');
}

// Function to create and append virtual keyboard buttons in QWERTY layout
function createKeyboardButtons() {
    const keyboardContainer = document.querySelector('.virtual-keyboard');
    const row1 = 'qwertyuiop';
    const row2 = 'asdfghjkl';
    const row3 = 'zxcvbnm';

    for (const char of row1) {
        const button = document.createElement('button');
        button.innerText = char.toUpperCase();
        button.addEventListener('click', () => addToTextarea(char));
        keyboardContainer.appendChild(button);
    }

    keyboardContainer.appendChild(document.createElement('br'));

    for (const char of row2) {
        const button = document.createElement('button');
        button.innerText = char.toUpperCase();
        button.addEventListener('click', () => addToTextarea(char));
        keyboardContainer.appendChild(button);
    }

    keyboardContainer.appendChild(document.createElement('br'));

    for (const char of row3) {
        const button = document.createElement('button');
        button.innerText = char.toUpperCase();
        button.addEventListener('click', () => addToTextarea(char));
        keyboardContainer.appendChild(button);
    }
}

// Create keyboard buttons on page load
createKeyboardButtons();
