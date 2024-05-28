const select = document.getElementById('breeds');

fetch('https://api.nookipedia.com/villagers', {
    headers: {
    'X-API-KEY': '9c048400-948a-4ae7-931e-a6259fd320ba'
}})
  .then(response => response.json())
  .then(array => getRandomVillager(array))
//   .then(villager => console.log(villager))
  .then(villager => displayVillager(villager))
  .catch(error => console.error('Error:', error));

function getRandomVillager(array) {
    let randomNumber = Math.floor(Math.random() * 488);
    return array[randomNumber];
}

function displayVillager(villager) {
    const card = document.getElementById('card');
    const html = `
        <img id='villager-img' src='${villager.image_url}'>
        <div id='quote-container'>
            <span id='name' style='background-color: #${villager.title_color}'>${villager.name}</span>
            <p>${villager.quote}</p>
            <p>#${villager.phrase}</p>
        </div>
        <ul>
            <li id='species'><span>Species: </span><span>${villager.species}</span></li>
            <li id='personality'><span>Personality: </span><span>${villager.personality}</span></li>
            <li id='hobby'><span>Hobby: </span><span id='villager-hobby'></span></li>
            <li id='birthday'><span>Birthday: </span><span>${villager.birthday_month} ${villager.birthday_day}</span></li>
        </ul>
    `;
    const nameDiv = document.querySelector('#name');
    //;
    // nameDiv.style.backgroundColor = 'villager.title_color';

    // const hobby = document.getElementById('villager-hobby');

    // if (villager.personality == 'Jock') {
    //     hobby.innerHTML = 'Fitness';
    // } else if (villager.personality == 'lazy') {
    //     hobby.innerHTML = 'Watching TV';
    // } else if (villager.personality == 'cranky') {
    //     hobby.innerHTML = 'Complaining';
    // } else if (villager.personality == 'normal') {
    //     hobby.innerHTML = '?';
    // } else if (villager.personality == 'snooty') {
    //     hobby.innerHTML = 'Going to the opera';
    // } else if (villager.personality == 'peppy') {
    //     hobby.innerHTML = 'Cheering friends on';
    // } else if (villager.personality == 'smug') {
    //     hobby.innerHTML = 'Bragging';
    // } else if (villager.personality == 'big sister' || villager.personality == 'enum' || villager.personality == 'uchi' || villager.personality == 'sisterly') {
    //     hobby.innerHTML = 'Supporting friends and family';
    // } else {
    //     hobby.innerHTML = '?';
    // }
    card.innerHTML = html;
    const img = document.querySelector('#villager-img');
    if (villager.gender.toLowerCase() == 'male') {
        img.style.border = '5px solid var(--border-blue)';
    } else if (villager.gender.toLowerCase() == 'female') {
        img.style.border = '5px solid var(--border-pink)';
    } else {
        img.style.border = '5px solid orange';
    }
}


