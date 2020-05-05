/* First function(Book bot) has been commented for my benefit
   There are comments saying what the following function does
*/
//Save Data
var saveData = {
    brainCells: 0,
    money: 0,
    books: 0,
    bookCosts: 3.0,
    magicians: 0,
    magiciansCost: 10.0,
    videos: 0,
    videoCosts: 30.0,
    bonks: 0,
    bonkCosts: 70.0
};
//First load of money and brain cells
document.getElementById('brainCells').innerHTML = saveData.brainCells;
document.getElementById('totalMoney').innerHTML = saveData.money;
//Say something/Book bot brain and money increase functions
function brain() {
    saveData.brainCells = saveData.brainCells + 1;
    document.getElementById('brainCells').innerHTML = saveData.brainCells;
}
function money() {
    saveData.money = saveData.money + 0.10;
    document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
}
//Say something increase on button click
var Say = document.getElementById("Say");
Say.addEventListener("click", money);
Say.addEventListener("click", brain);

//Book bot first load
document.getElementById('bookAmount').innerHTML = saveData.books;
document.getElementById('bookCost').innerHTML = saveData.bookCosts;
//Book bot increase function
function buyBook() { 
    if(saveData.money >= saveData.bookCosts) {
        //Change amount owned, money, and cost
        saveData.books = saveData.books + 1; 
        saveData.money = saveData.money - saveData.bookCosts;
        saveData.bookCosts = (Math.round((Math.pow(saveData.bookCosts, 1.1)) * 10) / 10).toFixed(1);
        //Change number in html
        document.getElementById('bookCost').innerHTML = saveData.bookCosts;
        document.getElementById('bookAmount').innerHTML = saveData.books; 
        document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
        //Increase brain and number every second
        window.setInterval(function(){ brain(saveData.books); }, 1000);
        window.setInterval(function(){ money(saveData.books); }, 1000);
    }
}
//Activate buyBook function on button click
bookBot.addEventListener("click", buyBook);
//Magician brain and money increase functions
function brain4() {
    saveData.brainCells = saveData.brainCells + 4;
    document.getElementById('brainCells').innerHTML = saveData.brainCells;
}
function money4() {
    saveData.money = saveData.money + 0.40;
    document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
}
//Magician first load
document.getElementById('magicAmount').innerHTML = saveData.magicians;
document.getElementById('magicCost').innerHTML = saveData.magiciansCost;
//Magician increase function
function buyMagic() { 
    if(saveData.money >= saveData.magiciansCost) {
        saveData.magicians = saveData.magicians + 1; 
        saveData.money = saveData.money - saveData.magiciansCost;
        saveData.magiciansCost = (Math.round((Math.pow(saveData.magiciansCost, 1.12)) * 10) / 10).toFixed(1);
        document.getElementById('magicCost').innerHTML = saveData.magiciansCost;
        document.getElementById('magicAmount').innerHTML = saveData.magicians; 
        document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$'; 
        window.setInterval(function(){ brain4(saveData.magicians); }, 1000);
        window.setInterval(function(){ money4(saveData.magiciansCost); }, 1000);
    }
}
magician.addEventListener("click", buyMagic);
//Video bot brain and money increase functions
function brain8() {
    saveData.brainCells = saveData.brainCells + 8;
    document.getElementById('brainCells').innerHTML = saveData.brainCells;
}
function money8() {
    saveData.money = saveData.money + 0.80;
    document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
}
//Video bot increase function
document.getElementById('videoAmount').innerHTML = saveData.videos;
document.getElementById('videoCost').innerHTML = saveData.videoCosts;
function buyVideo() { 
    if(saveData.money >= saveData.videoCosts) {
        saveData.videos = saveData.videos + 1; 
        saveData.money = saveData.money - saveData.videoCosts;
        saveData.videoCosts = (Math.round((Math.pow(saveData.videoCosts, 1.12)) * 10) / 10).toFixed(1);
        document.getElementById('videoCost').innerHTML = saveData.videoCosts;
        document.getElementById('videoAmount').innerHTML = saveData.videos; 
        document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$'; 
        window.setInterval(function(){ brain8(saveData.videos); }, 1000);
        window.setInterval(function(){ money8(saveData.videos); }, 1000);
    }
}
videoBot.addEventListener("click", buyVideo);
//Bonk bot brain and money increase functions
function brain20() {
    saveData.brainCells = saveData.brainCells + 20;
    document.getElementById('brainCells').innerHTML = saveData.brainCells;
}
function money20() {
    saveData.money = saveData.money + 2.0;
    document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
}
//Bonk bot increase function
document.getElementById('bonkAmount').innerHTML = saveData.bonks;
document.getElementById('bonkCost').innerHTML = saveData.bonkCosts;
function buyBonk() { 
    if(saveData.money >= saveData.bonkCosts) {
        saveData.bonks = saveData.bonks + 1; 
        saveData.money = saveData.money - saveData.bonkCosts;
        saveData.bonkCosts = (Math.round((Math.pow(saveData.bonkCosts, 1.12)) * 10) / 10).toFixed(1);
        document.getElementById('bonkCost').innerHTML = saveData.bonkCosts;
        document.getElementById('bonkAmount').innerHTML = saveData.bonks; 
        document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$'; 
        window.setInterval(function(){ brain20(saveData.bonks); }, 1000);
        window.setInterval(function(){ money20(saveData.bonks); }, 1000);
    }
}
bonkBot.addEventListener("click", buyBonk);

//Save function
function save() {
    localStorage.setItem("gamesave",JSON.stringify(saveData));
}
Save.addEventListener("click", save);
//Load function
function load() {
    var savegame = JSON.parse(localStorage.getItem("gamesave"));
    if (typeof savegame.brainCells !== "undefined") saveData.brainCells = savegame.brainCells;
    if (typeof savegame.money !== "undefined") saveData.money = savegame.money;
    if (typeof savegame.books !== "undefined") saveData.books = savegame.books;
    if (typeof savegame.bookCosts !== "undefined") saveData.bookCosts = savegame.bookCosts;
    if (typeof savegame.magicians !== "undefined") saveData.magicians = savegame.magicians;
    if (typeof savegame.magiciansCost !== "undefined") saveData.magiciansCosts = savegame.magiciansCosts;
    if (typeof savegame.videos !== "undefined") saveData.videos = savegame.videos;
    if (typeof savegame.videoCosts !== "undefined") saveData.videoCosts = savegame.videoCosts;
    if (typeof savegame.bonks !== "undefined") saveData.bonks = savegame.bonks;
    if (typeof savegame.bonkCosts !== "undefined") saveData.bonkCosts = savegame.bonkCosts;
    document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
    document.getElementById('brainCells').innerHTML = saveData.brainCells;
    document.getElementById('bookCost').innerHTML = saveData.bookCosts;
    document.getElementById('bookAmount').innerHTML = saveData.books; 
    document.getElementById('magicCost').innerHTML = saveData.magiciansCost;
    document.getElementById('magicAmount').innerHTML = saveData.magicians; 
    document.getElementById('videoCost').innerHTML = saveData.videoCosts;
    document.getElementById('videoAmount').innerHTML = saveData.videos;
    document.getElementById('bonkCost').innerHTML = saveData.bonkCosts;
    document.getElementById('bonkAmount').innerHTML = saveData.bonks; 
}
Load.addEventListener("click", load);
