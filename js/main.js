//Weather => Fox
//Input State get weather and random fox for your trouble :3


let us_eastCoast = ['Maine','New Hampshire','Vermont','Massachusetts', 'New York','Rhode Island', 
    'Connecticut','New Jersey','Pennsylvania', 'Delaware', 'Maryland', 'District of Columbia', 'West Virginia',
    'Ohio', 'Kentucky', 'Tennessee', 'Indiana', 'Wisconsin', 'Illinois', 'Alabama', 'Georgia', 'North Carolina',
    'South Carolina', 'Florida', 'Mississippi', 'Minnesota', 'Iowa', 'Missouri', 'Arkansas', 'Louisiana', 'Puerto Rico'
];
let us_westCoast = ['North Dakota', 'South Dakota', 'Nebraska', 'Kansas', 'Oklahoma',  'Montana', 'Wyoming', 
    'Colorado',  'Idaho',  'Washington', 'Oregon', 'California', 'Hawaii',
    'Alaska'
];
let us_desert = ['Utah','Nevada','Arizona','New Mexico','Texas']

function getRanNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRanNum(1,124);
console.log(randomNum);

document.querySelector('button').addEventListener('click',getRealRegion);

async function getRealRegion() {
  const wildCardInput = document.querySelector('#wildCard').value;
  const kagi = '573e39e3da904aa38cf155148250310';
  const wildCardUrl = `http://api.weatherapi.com/v1/current.json?key=${kagi}&q=${wildCardInput}`;

  try {
    const response = await fetch(wildCardUrl);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    
    const locCountry = data.location.country;
    const locName = data.location.name;

    document.querySelector('#temp_f').innerText = data.current.temp_f;
    document.querySelector('#weatherConditions').innerText = data.current.condition.text;
    document.querySelector('#country').innerText = locCountry;
    document.querySelector('#locName').innerText = locName;

    //getPokeRegion(locName, locCountry);
    getFox();

  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function getFox() {
  
  //const wildCardUrl = `https://randomfox.ca/images/${randomNum}.jpg`;
  const wildCardUrl = `https://randomfox.ca/floof/?ref=apilist.fun`;

    fetch(wildCardUrl) //fetch at this url
        .then(response => response.json()) //then get the response data
        .then(fetched => { //renamed to fetched because the actual data array is called 'data' smh
            console.table(fetched)
            document.querySelector('#sprite').src = fetched.image;
        }) //then start using the data
        .catch(error => console.error(error)); //catch errors instead of crashing or something
}

