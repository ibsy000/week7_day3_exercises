// console.log('Callbacks!!!!!!!!!')

/*
    JavaScript Callbacks
*/

function filter(anArray){
    let output = [];
    for (let element of anArray){
        if (element % 2 !== 0){ // Logic that determines if num is odd
            output.push(element);
        };
    };
    return output;
}

let numbers = [5, 10, 15, 20, 25, 30];
console.log(filter(numbers));


// Create a function to filter out based on any true condition from a function

function filterWithCallback(anArr, callbackFn){
    let output = [];
    for (let element of anArr){
        if (callbackFn(element)){ // Logic that determines if element should be filtered
            output.push(element);
        };
    };
    return output;
}

function isOdd(num){
    return num % 2 === 1
}

console.log(filterWithCallback(numbers, isOdd));

console.log(filterWithCallBack(numbers, num => num >= 20))



console.log(filterWithCallBack(['red', 'orange', 'yellow', 'green'], color => color.length >5))


// isOdd and cName are considered callback functions 
// (because they are functions passed into another function as an argument to be executed later)
// filterWithCallback is considered a higher-order function (because it accepts a function as an argument)
console.clear()


// Async Example

function first(){
    console.log('First started');
    setTimeout(() => console.log('First'), 3000);
};


function second(){
    console.log('Second');
};


// first();
// second();

// Real Life Example

// Create a function that will take in a song name, download the song, and then play the son

// function downloadSong(songName){
//     console.log(`Downloading ${songName}...`)
//     setTimeout(() => {
//         console.log('Finished Downloading')
//         return songName
//     }, 3000)
// }

// function playSong(songName){
//     let song = downloadSong(songName);
//     console.log(`${song} is playing`)
// }

// playSong('Wonderwall');

// Fix the Issue with CALLBACKS!!

function downloadSong(songName, downloadTime, callback){
    console.log(`Downloading ${songName}...`)
    setTimeout(() => {
        // Script to download the song
        console.log(`Finished downloading ${songName}`)
        // Execute callback once finished downloading
        callback(songName)
    }, downloadTime)
}

function playSong(song){
    console.log(`${song} is playing`)
}

// downloadSong('Wonderwall', 3000, playSong);


// // Download a song and then send it to a friend
// downloadSong('Brown Eyed Girl', 2000, (s) => console.log(`Sending ${s} to friend`));
// downloadSong('Hey Ya', 1000, s => console.log(`I love ${s}`))


const song1 = 'Wonderwall';
const song2 = 'Stairway to Heaven';
const song3 = 'Back in Black';



// Handling Errors 

// function downloadSong2(songName, callback){
//     console.log(`Searching for ${songName} in our database...`);
//     setTimeout(() => {
//         // Simulate a valid song choice
//         let song;
//         if (songName.length > 3){
//             song = {
//                 title: songName,
//                 artist: 'Pitbull',
//                 duration: '3:25'
//             }
//         } else {
//             song = {}
//         }
//         callback(song)
//     }, 3000);
// };

// let songChoice = 'ABC';

// downloadSong2(
//     songChoice,
//     s => console.log(`${s.title} by ${s.artist} is now playing for the next ${s.duration}`)
// );


function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`Searching for ${songName} in our database...`);
    setTimeout(() => {
        // Simulate a valid song choice
        if (songName.length > 3){
            let song = {
                title: songName,
                artist: 'Pitbull',
                duration: '3:25'
            }
            callbackSuccess(song);
        } else {
            let song = {}
            callbackFail(song);
        }
    }, 3000);
};

let songChoice = 'Stairway to Heaven';

function playSong(s){
    console.log(`${s.title} by ${s.artist} is now playing for the next ${s.duration}`)
}

function handleNoSong(s){
    console.log(`${s} is not a valid song choice`)
}

downloadSong2(
    songChoice,
    playSong,
    handleNoSong
);
downloadSong2(
    'Wonderwall',
    playSong,
    handleNoSong
);