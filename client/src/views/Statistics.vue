<template>
    <form v-on:submit.prevent="pushStatistic">
        <label>ADD STATISTIC</label>
        <input type="text" placeholder="LOG" v-model="store.log" />
        <input type="text" placeholder="VALUE" v-model="store.val" />
        <button type="submit">PUSH</button>
    </form>
    <form v-on:submit.prevent="postData">
        <label>ADD STATISTIC TO DATE</label>
        <input type="text" placeholder="TOTAL" v-model="store.total" />
        <input type="text" placeholder="COOKIES" v-model="store.cookies" />
        <input type="text" placeholder="PASSWORDS" v-model="store.passwords" />
        <input type="text" placeholder="WALLETS" v-model="store.wallets" />
        <input type="text" placeholder="AUTOFILLS" v-model="store.autofills" />
        <input type="text" placeholder="SOCIAL" v-model="store.social" />
        <input type="text" placeholder="CARDS" v-model="store.cards" />
        <input type="datetime-local" placeholder="DATE" v-model="store.date" />
        <button type="submit">PUSH</button>
    </form>
    <form v-on:submit.prevent="pushSetLogs">
        <label>ADD LOGS</label>
        <input type="text" placeholder="LENGHT" v-model="counter" />
        <button type="submit">PUSH</button>
    </form>
    <form v-on:submit.prevent="pushCountryData">
        <label>ADD COUNTRY STATISTIC</label>
        <button type="submit">PUSH</button>
    </form>
</template>

<script setup>
import { useStatisticStore } from "../state"
const store = useStatisticStore()
const { pushStatistic, pushDateStatistic } = store

var countryNAme = [
  "Afghanistan",
  "Angola",
  "Albania",
  "United Arab Emirates",
  "Argentina",
  "Armenia",
  "Antarctica",
  "French Southern and Antarctic Lands",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Burundi",
  "Belgium",
  "Benin",
  "Burkina Faso",
  "Bangladesh",
  "Bulgaria",
  "The Bahamas",
  "Bosnia and Herzegovina",
  "Belarus",
  "Belize",
  "Bolivia",
  "Brazil",
  "Brunei",
  "Bhutan",
  "Botswana",
  "Central African Republic",
  "Canada",
  "Switzerland",
  "Chile",
  "China",
  "Ivory Coast",
  "Cameroon",
  "Democratic Republic of the Congo",
  "Republic of the Congo",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Northern Cyprus",
  "Cyprus",
  "Czech Republic",
  "Germany",
  "Djibouti",
  "Denmark",
  "Dominican Republic",
  "Algeria",
  "Ecuador",
  "Egypt",
  "Eritrea",
  "Spain",
  "Estonia",
  "Ethiopia",
  "Finland",
  "Fiji",
  "Falkland Islands",
  "France",
  "Gabon",
  "England",
  "Georgia",
  "Ghana",
  "Guinea",
  "Gambia",
  "Guinea Bissau",
  "Equatorial Guinea",
  "Greece",
  "Greenland",
  "Guatemala",
  "Guyana",
  "Honduras",
  "Croatia",
  "Haiti",
  "Hungary",
  "Indonesia",
  "India",
  "Ireland",
  "Iran",
  "Iraq",
  "Iceland",
  "Israel",
  "Italy",
  "Jamaica",
  "Jordan",
  "Japan",
  "Kazakhstan",
  "Kenya",
  "Kyrgyzstan",
  "Cambodia",
  "South Korea",
  "Kosovo",
  "Kuwait",
  "Laos",
  "Lebanon",
  "Liberia",
  "Libya",
  "Sri Lanka",
  "Lesotho",
  "Lithuania",
  "Luxembourg",
  "Latvia",
  "Morocco",
  "Moldova",
  "Madagascar",
  "Mexico",
  "Macedonia",
  "Mali",
  "Myanmar",
  "Montenegro",
  "Mongolia",
  "Mozambique",
  "Mauritania",
  "Malawi",
  "Malaysia",
  "Namibia",
  "New Caledonia",
  "Niger",
  "Nigeria",
  "Nicaragua",
  "Netherlands",
  "Norway",
  "Nepal",
  "New Zealand",
  "Oman",
  "Pakistan",
  "Panama",
  "Peru",
  "Philippines",
  "Papua New Guinea",
  "Poland",
  "Puerto Rico",
  "North Korea",
  "Portugal",
  "Paraguay",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Western Sahara",
  "Saudi Arabia",
  "Sudan",
  "South Sudan",
  "Senegal",
  "Solomon Islands",
  "Sierra Leone",
  "El Salvador",
  "Somaliland",
  "Somalia",
  "Republic of Serbia",
  "Suriname",
  "Slovakia",
  "Slovenia",
  "Sweden",
  "Swaziland",
  "Syria",
  "Chad",
  "Togo",
  "Thailand",
  "Tajikistan",
  "Turkmenistan",
  "East Timor",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Taiwan",
  "United Republic of Tanzania",
  "Uganda",
  "Ukraine",
  "Uruguay",
  "USA",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Vanuatu",
  "West Bank",
  "Yemen",
  "South Africa",
  "Zambia",
  "Zimbabwe"
]


// id: number,
//     num: string,
//     ip: { 
//         i: string, 
//         co: string, 
//         countrycode: string 
//     },
//     browse: { 
//         Edge: number, 
//         Brave: number, 
//         Opera: number, 
//         Chrome: number, 
//         Safari: number, 
//         Firefox: number, 
//         Vivaldi: number
//     },
//     passwords: number,
//     wallets: string[],
//     build: string,
//     date: Date;
//     port: string,

async function pushCountryData() {
    var body = countryNAme.map(cn => ({ country: cn, length: Math.ceil(Math.random() * (Math.random() * 20) ) }))
    for (let i = 0; i < countryNAme.length; i++) {
        try {
           
            const response = await fetch("http://localhost:3000/map", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({
                    country: countryNAme[i],
                    length: `${Math.ceil(Math.random() * 476)}`
                })
            })
        } catch (error) {
            console.error(error)
        }
    }
}
var day = 1
var counter = 0




async function pushSetLogs() {
    // if (counter == 0) return
    function parseTime(time) {
    if (time % 2 == 0) {
        return time < 10 ? `0${time}:00` : `${time}:00`
    } else {
        return time < 10 ? `0${time}:30` : `${time}:30`
    }
}
    for (let i = 0; i <= counter; i++ ) {
        try {
            const response = await fetch("http://localhost:3000/statistic-logs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({
                    num: `${Math.ceil(Math.random() * 100)}lorem${Math.ceil(Math.random() * 100)}num_log${Math.ceil(Math.random() * 10000000000000000)}')}`,
                    ip: {
                        i: `127.0.0.1`,
                        co: `Russian`,
                        countrycode: `RU`
                    },
                    browse: {
                        Edge: Math.ceil(Math.random() * 100), 
                        Brave: Math.ceil(Math.random() * 100), 
                        Opera: Math.ceil(Math.random() * 100), 
                        Chrome: Math.ceil(Math.random() * 100), 
                        Safari: Math.ceil(Math.random() * 100), 
                        Firefox: Math.ceil(Math.random() * 100), 
                        Vivaldi: Math.ceil(Math.random() * 100)
                    },
                    passwords: Math.ceil(Math.random() * 100),
                    wallets: ['bnb', 'atomic', 'electrum'],
                    build: "NA",
                    date: new Date(`2023-02-20 ${parseTime(i)}`),
                    port: Math.ceil(Math.random() * 10) > 5 ? "Open" : "New",
                })
            }).then(req => console.log(day, req))
        } catch (error) {
            console.error(error)
        }
    }
    day++
}


function postData() {
    for (let i = 0; i < 24; i++) {
        let total = Math.ceil(Math.random() * 100),
            cookies = Math.ceil(Math.random() * 200),
            passwords = Math.ceil(Math.random() * 30),
            wallets = Math.ceil(Math.random() * 20),
            autofills = Math.ceil(Math.random() * 10),
            social = Math.ceil(Math.random() * 10),
            cards = Math.ceil(Math.random() * 17),
            date = new Date(Date.parse(new Date().toISOString()) + 1349 * 60000 * (i + 1))


        async function push() {
            const res = await fetch("http://localhost:3000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({
                    total,
                    cookies,
                    passwords,
                    wallets,
                    autofills,
                    social,
                    cards,
                    date
                })
            }).then(res => console.log(res))

        }
        push()
        counter += 30
    }
}

</script>

<style>
template {
    display: flex
}

label {
    color: black;

}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    margin: 150px auto;
}

button,
input {
    margin-top: 10px;
    width: 100%;
    padding: 5px 10px;
    outline: none;
    border: 1px solid green;
    border-radius: 10px;
}

button {
    background: white;
    color: green;
}</style>