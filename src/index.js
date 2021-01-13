import './styles.css';
//import './styles.css';
 import countriesTpl from './templates/countries.hbs'
import debounce from 'lodash.debounce';
// import './saas/styles.scss';

//import debounce from 'lodash.debounce';
// import refs from './js/refs';
// import fetchCountry from './js/fetch-countries';
// import showQueryResults from './js/handle-query-resuts';

let inputRef = document.querySelector('#name-input');
 const nameRefMurkup = document.querySelector('#name-output')

 inputRef.addEventListener('input', debounce(handleTextInput), 500);
function handleTextInput(event) {
    let nameCountry = '';
    nameCountry = event.target.value
     nameRefMurkup.textContent = nameCountry

fetch(`https://restcountries.eu/rest/v2/name/${nameCountry}`)
    .then(response => response.json())
    .then(nameCountry => {
        console.log(nameCountry)
        const murkup = countriesTpl(nameCountry);
        console.log(murkup)
        nameRefMurkup.insertAdjacentHTML('beforeend', murkup)
    });
 };

