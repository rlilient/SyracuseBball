console.log("main.js loaded");

//variables, objects, arrays

const firstName ="Rachael";
//^variable is a name that holds on to something
console.log(firstName);

const lastName = "Lilienthal";

const fullName = `Hi my name is ${firstName} ${lastName}`;

console.group(fullName);

const job= "Student";
const school="Syracuse University"

const personHeadline = document.createElement("h1");
personHeadline.innerText=`${firstName} ${lastName}` ;
//document.body.appendChild(personHeadline);

const personJob = document.createElement("h2");
personJob.innerText = job;
//document.body.appendChild(personJob);

const personSchool = document.createElement("h3");
personSchool.innerText = school;
//document.body.appendChild(personSchool);


//object, deeper level of organization, different syntax
const person = {
    name: {
        first: "rachael",
        last: "lilienthal"
    },
        job: "student",
        school: "syracuse university"
}

console.log(person.name.first);


//array, type of data type, structerd set, 
//array 
const players = [
    {
        name: {
            first: "John Bol",
            last: "Ajak"
        },
        slug: "john-bol-ajak",
        number: 2,
        year: "Red Shirt Junior",
        position: "Forward",
        height: 83, // in inches
        weight: 220, // in pounds
        hometown: {
            city: "Natinga",
            state: null,
            country: "South Sudan"
        },
        highschool: {
            name: "Westtown School",
            city: "West Chester",
            state: "Pennsylvania",
            country: "USA"
        },
    },
    {
        name: {
            first: "Chris",
            last: "Bell"
        },
        slug: "chris-bell",
        number: 0,
        year: "Freshman",
        position: "Guard",
        height: 74, // in inches
        weight: 185, // in pounds
        hometown: {
            city: "Concord",
            state: "California",
            country: "USA"
        },
        highschool: {
            name: "De La Salle High School",
            city: "Concord",
            state: "California",
            country: "USA"
        },
    },
    {
        name: {
            first: "Maliq",
            last: "Brown"
        },
        slug: "maliq-brown",
        number: 1,
        year: "Freshman",
        position: "Forward",
        hometown: {
            city: "Culpeper",
            state: "Virginia",
            country: "USA"
        },
        highschool: {
            name: "Blue Ridge High School",
            city: "Culpeper",
            state: "Virginia",
            country: "USA"
        },
        height: 80,
        weight: 215
    },
    {
        name: {
            first: "Peter",
            last: "Carey"
        },
        slug: "peter-carey",
        number: 23,
        year: "Freshman",
        position: "Forward",
        height: 80, // in inches
        weight: 245, // in pounds
        hometown: {
            city: "Sunderland",
            state: "Massachusetts",
            country: "USA"
        },
        highschool: {
            name: "Northfield Mount Hermon School",
            city: "Mount Hermon",
            state: "Massachusetts",
            country: "USA"
        }
    },
    {
        name: {
            first: "Anthony",
            last: "Clayton"
        },
        slug: "anthony-clayton",
        number: 12,
        year: "Sophomore",
        position: "Guard",
        height: 75, // in inches
        weight: 175, // in pounds
        hometown: {
            city: "Albany",
            state: "New York",
            country: "USA"
        },
        highschool: {
            name: "Avon Old Farms School",
            city: "Avon",
            state: "Connecticut",
            country: "USA"
        }
    },
    {
        name: {
            first: "Quadir",
            last: "Copeland"
        },
        slug: "quadir-copeland",
        number: 24,
        year: "Freshman",
        position: "Guard",
        height: 73, // in inches
        weight: 180, // in pounds
        hometown: {
            city: "Philadelphia",
            state: "Pennsylvania",
            country: "USA"
        },
        highschool: {
            name: "Gettysburg Area High School",
            city: "Gettysburg",
            state: "Pennsylvania",
            country: "USA"
        }
    },
    {
        name: {
            first: "Jesse",
            last: "Edwards"
        },
        slug: "jesse-edwards",
        number: 14,
        year: "Senior",
        position: "Center",
        hometown: {
            city: "Amsterdam",
            state: null,
            country: "Netherlands",
        },
        highschool: {
            name: "IMG Academy",
            city: "Bradenton",
            state: "Florida",
            country: "USA"
        },
        height: 84,
        weight: 215
    },
    {
        name: {
            first: "Shane",
            last: "Feldman"
        },
        slug: "shane-feldman",
        number: 25,
        year: "Junior",
        position: "Guard",
        height: 74, // in inches
        weight: 195, // in pounds
        hometown: {
            city: "Agoura Hills",
            state: "California",
            country: "USA"
        },
        highschool: {
            name: "Agoura High School",
            city: "Agoura Hills",
            state: "California",
            country: "USA"
        }
    },
    {
        name: {
            first: "Joseph",
            last: "Girard III"
        },
        slug: "joseph-girard-iii",
        number: 11,
        year: "Senior",
        position: "Guard",
        height: 73, // in inches
        weight: 195, // in pounds
        hometown: {
            city: "Glens Falls",
            state: "New York",
            country: "USA"
        },
        highschool: {
            name: "Glens Falls High School",
            city: "Glens Falls",
            state: "New York",
        }
    },
    {
        name: {
            first: "Mounir",
            last: "Hima"
        },
        slug: "mounir-hima",
        number: 55,
        year: "Sophomore",
        position: "Guard",
        height: 75, // in inches
        weight: 180, // in pounds
        hometown: {
            city: "Tillabéri",
            state: null,
            country: "Niger"
        },
        highschool: {
            name: "St. Benedict's Prep",
            city: "Newark",
            state: "New Jersey",
            country: "USA"
        }
    },
    {
        name: {
            first: "Stephen",
            last: "Keating"
        },
        slug: "stephen-keating",
        number: 34,
        year: "Freshman",
        position: "Forward",
        height: 81, // in inches
        weight: 230, // in pounds
        hometown: {
            city: "Fairfield",
            state: "Connecticut",
            country: "USA"
        },
        highschool: {
            name: "Fairfield Ludlowe High School",
            city: "Fairfield",
            state: "Connecticut",
            country: "USA"
        },
    },
    {
        name: {
            first: "Judah",
            last: "Mintz"
        },
        slug: "judah-mintz",
        number: 3,
        year: "Freshman",
        position: "Guard",
        height: 73, // in inches
        weight: 190, // in pounds
        hometown: {
            city: "Fort Washington",
            state: "Maryland",
            country: "USA"
        },
        highschool: {
            name: "Gonzaga College High School",
            city: "Washington",
            state: "District of Columbia",
            country: "USA"
        }
    },
    {
        name: {
            first: "Niko",
            last: "Ruffin"
        },
        slug: "niko-ruffin",
        number: 21,
        year: "Sophomore",
        position: "Guard",
        height: 73, // in inches
        weight: 170, // in pounds
        hometown: {
            city: "Cresskill",
            state: "New Jersey",
            country: "USA"
        },
        highschool: {
            name: "Paramus Catholic High School",
            city: "Paramus",
            state: "New Jersey",
            country: "USA"
        },
    },
    {
        name: {
            first: "Justin",
            last: "Taylor"
        },
        slug: "justin-taylor",
        number: 5,
        year: "Freshman",
        position: "Guard",
        height: 79, // in inches
        weight: 190, // in pounds
        hometown: {
            city: "Charlottesville",
            state: "Virginia",
            country: "USA"
        },
        highschool: {
            name: "St. Anne's-Belfield School",
            city: "Charlottesville",
            state: "Virginia",
            country: "USA"
        }
    },
    {
        name: {
            first: "Symir",
            last: "Torrence"
        },
        slug: "symir-torrence",
        number: 10,
        year: "Senior",
        position: "Guard",
        height: 74, // in inches
        weight: 195, // in pounds
        hometown: {
            city: "Syracuse",
            state: "New York",
            country: "USA"
        },
        highschool: {
            name: "Syracuse Academy of Science",
            city: "Syracuse",
            state: "New York",
            country: "USA"
        }
    },
    {
        name: {
            first: "Benny",
            last: "Williams"
        },
        slug: "benny-williams",
        number: 13,
        year: "Sophomore",
        position: "Forward",
        height: 79, // in inches
        weight: 185, // in pounds
        hometown: {
            city: "Bowie",
            state: "Maryland",
            country: "USA"
        },
        highschool: {
            name: "St. Andrew's Episcopal School",
            city: "Potomac",
            state: "Maryland",
            country: "USA"
        }
    }
];
//end of array^

const getFormattedHeight = (height) => {
    const feet = Math.floor(height/12);
    const inches = Math.floor(height % 12);
    return `${feet}' ${inches}"`;
}

let defaultPlayerPosition = "All";
let defaultPlayerYear = "All";
let defaultPlayerSortOrder = "asc";


const playersContainer = document.getElementById("playersContainer");
playersContainer.classList = "list";


const displayFormat = document.getElementById("displayFormat");
displayFormat.addEventListener("change", (event) => {
    //console.log("chnaged select menu")
    //console.log(event.target.value);
    const className = event.target.value;
    playersContainer.classList = className;
});


const playerPosition = document.getElementById("playerPosition");
playerPosition.addEventListener("change", (event) => {
    defaultPlayerPosition = event.target.value;
    //console.log(defaultPlayerPosition);
    initializePlayers();
});

const playerYear = document.getElementById("playerYear");
playerYear.addEventListener("change", (event) => {
    defaultPlayerYear = event.target.value;
    initializePlayers();
});

const playerSort = document.getElementById("playerSort");
playerSort.addEventListener("change", (event) => {
    defaultPlayerSortOrder = event.target.value;
    initializePlayers();
});



 //console.log(players[4]);
 const displayPlayers = (filteredPlayers) => {
    //console.log("displaying players!!!");
    //console.log(filteredPlayers);
   filteredPlayers.forEach((player) => {
   //console.log(player);
   //deconstructing example below
       const {name, 
           slug, 
           number, 
           position, 
           year, 
           hometown, 
           highschool, 
           height, 
           weight
       }= player;


       const {first, last} = name;
       const { city, state, country} = hometown;

       const playerArticle = document.createElement("article");
   
       const playerMainContent = document.createElement("div");
       playerMainContent.classList.add("player-main-content");

       const playerImage = document.createElement("img");
       playerImage.src = `images/${slug}-square.jpg`;
       playerImage.alt = `${first} ${last}`;
       playerImage.classList.add("player-img");
       
       const playerPrimaryColumn = document.createElement("div");
       playerPrimaryColumn.classList.add("player-column");

   //1. h2 player headline
       const playerHeadline = document.createElement("h2");
       playerHeadline.classList.add("player-headline");

       const playerHeadlineFirst = document.createElement("span");
       playerHeadlineFirst.classList.add("player-first-name");
       playerHeadlineFirst.innerText = first;
       /*playerHeadline.appendChild(playerHeadlineFirst);*/

       const playerHeadlineLast = document.createElement("span");
       playerHeadlineLast.classList.add("player-last-name");
       playerHeadlineLast.innerText = last;
       //playerHeadline.appendChild(playerHeadlineLast);

       playerHeadline.innerHTML = `${playerHeadlineFirst.outerHTML} 
       ${playerHeadlineLast.outerHTML}`;

       playerPrimaryColumn.appendChild(playerHeadline);
   //2. h3 player headline
       const playerMeta = document.createElement("h3");
       playerMeta.classList.add("player-meta");
       playerMeta.innerText = `#${number} | ${position} | ${year}`;

   //3. append the babies
       /* playerArticle.appendChild(playerImage);*/
       playerMainContent.appendChild(playerImage);

       playerPrimaryColumn.appendChild(playerHeadline);
       playerPrimaryColumn.appendChild(playerMeta);

       playerMainContent.appendChild(playerPrimaryColumn);
       /*playerMainContent.appendChild(playerMeta);*/

       

       playerArticle.appendChild(playerMainContent);

   //4. create secondary column
       const playerSecondaryColumn = document.createElement("div");
       playerSecondaryColumn.classList.add("player-secondary-column");

       const playerSecondaryMeta = document.createElement("h3");
       playerSecondaryMeta.classList.add("player-meta");
       playerSecondaryMeta.innerHTML= `${city}, ${state ? state 
           : country ? country : ''} <br /> ${highschool.name}`;

       playerSecondaryColumn.appendChild(playerSecondaryMeta);
       playerArticle.appendChild(playerSecondaryColumn);

   // 5. create tertiary column
   const playerTertiaryColumn = document.createElement("div");
   playerTertiaryColumn.classList.add("player-tertiary-column");

   const playerTertiaryMeta = document.createElement("h3");
   playerTertiaryMeta.classList.add("player-meta");
   playerTertiaryMeta.innerHTML = `${getFormattedHeight(height)} 
   <br />${weight} lbs.`;
   playerTertiaryColumn.appendChild(playerTertiaryMeta);

   playerArticle.appendChild(playerTertiaryColumn);

   //6. create CTA
   const playerCTA = document.createElement("a");
   playerCTA.classList.add("player-cta");
   playerCTA.href = `/players/${slug}`;

   playerCTAlabel = document.createElement("span");
   playerCTAlabel.classList.add("player-cta-label");
   playerCTAlabel.innerText = "Read Full Biography";

   playerCTAicon = document.createElement("img");
   playerCTAicon.classList.add("player-cta-icon");
   playerCTAicon.src = "images/angle-right.svg";
   playerCTAicon.alt = "Right arrow";

   playerCTA.innerHTML = `${playerCTAlabel.outerHTML} ${playerCTAicon.outerHTML}`;



   playerArticle.appendChild(playerCTA);



   playersContainer.appendChild(playerArticle);
   }); // forEach end
} //displayPlayers end



const initializePlayers = () => {
    //console.log("initializing!!!");
    //reset the list of players
    playersContainer.innerText = "";

    //filter the players by position
    let filteredPlayersByPosition = players.filter((player) => {
        if (defaultPlayerPosition.toLocaleLowerCase() === "all") {
            return true;
        } else {
            return player.position.toLowerCase() === defaultPlayerPosition.toLocaleLowerCase();
        }
    });
    //console.log({filteredPlayersByPosition});

    let filterPlayersByYear = filteredPlayersByPosition.filter((player) => {
        if (defaultPlayerYear.toLocaleLowerCase() === "all") {
            return true;
        } else {
            return player.year.toLowerCase() === defaultPlayerYear.toLowerCase();
        }
    });
    //console.log(filterPlayersByYear);

    if (defaultPlayerSortOrder === "asc") {
        filterPlayersByYear.sort((a,b) => a.name.last < b.name.last ? -1 : 1 );
    } else {
        filterPlayersByYear.sort((a,b) => a.name.last > b.name.last ? -1 : 1 );
    }
    //console.log({filterPlayersByYear});
    displayPlayers(filterPlayersByYear);
    //console.log(filteredPlayersByPosition);
}

//initialize!
initializePlayers();