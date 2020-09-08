/* First function(Book bot) has been commented for my benefit
   There are comments saying what the following function does
*/
//Save Data
var saveData = {
    brainCells: 0,
    money: 0.0,
    books: 0,
    bookCosts: 3.0,
    magicians: 0,
    magiciansCost: 10.0,
    videos: 0,
    videoCosts: 30.0,
    bonks: 0,
    bonkCosts: 70.0
};
//Update html function
function updateHTML(){
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
//Create alert function
function addAlert(message) {
    $('#alerts').append(
        '<div class="alert alert-info alert-dismissible fade show text-center">' + message +
            '<button type="button" class="close" data-dismiss="alert">' +
            '&times;</button>' + '</div>');
};
//First load of money and brain cells
document.getElementById('brainCells').innerHTML = saveData.brainCells;
document.getElementById('totalMoney').innerHTML = saveData.money;
//Say something/Book bot brain and money increase functions
function brain(number) {
    saveData.brainCells = saveData.brainCells + number;
    document.getElementById('brainCells').innerHTML = saveData.brainCells;
}
function money(number) {
    saveData.money = saveData.money + (number/10);
    document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
}
//Book bot first load
document.getElementById('bookAmount').innerHTML = saveData.books;
document.getElementById('bookCost').innerHTML = saveData.bookCosts;
//Book bot increase function
function buyBook(number) { 
    if(saveData.money >= saveData.bookCosts) {
        //Change amount owned, money, and cost
        saveData.books = saveData.books + 1; 
        saveData.money = saveData.money - saveData.bookCosts;
        saveData.bookCosts = (Math.round((Math.pow(saveData.bookCosts, 1.1)) * 10) / 10).toFixed(1);
        //Change number in html
        document.getElementById('bookCost').innerHTML = saveData.bookCosts;
        document.getElementById('bookAmount').innerHTML = saveData.books; 
        document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
    }
}
//Magician brain and money increase functions
function brain4(number) {
    saveData.brainCells = saveData.brainCells + (number * 4);
    document.getElementById('brainCells').innerHTML = saveData.brainCells;
}
function money4(number) {
    saveData.money = saveData.money + ((number/10) * 4);
    document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
}
//Magician first load
document.getElementById('magicAmount').innerHTML = saveData.magicians;
document.getElementById('magicCost').innerHTML = saveData.magiciansCost;
//Magician increase function
function buyMagic(number) { 
    if(saveData.money >= saveData.magiciansCost) {
        saveData.magicians = saveData.magicians + 1; 
        saveData.money = saveData.money - saveData.magiciansCost;
        saveData.magiciansCost = (Math.round((Math.pow(saveData.magiciansCost, 1.12)) * 10) / 10).toFixed(1);
        document.getElementById('magicCost').innerHTML = saveData.magiciansCost;
        document.getElementById('magicAmount').innerHTML = saveData.magicians; 
        document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$'; 
    }
}
//Video bot brain and money increase functions
function brain8(number) {
    saveData.brainCells = saveData.brainCells + (number * 8);
    document.getElementById('brainCells').innerHTML = saveData.brainCells;
}
function money8(number) {
    saveData.money = saveData.money + ((number/10)* 8);
    document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
}
//Video bot increase function
document.getElementById('videoAmount').innerHTML = saveData.videos;
document.getElementById('videoCost').innerHTML = saveData.videoCosts;
function buyVideo(number) { 
    if(saveData.money >= saveData.videoCosts) {
        saveData.videos = saveData.videos + 1; 
        saveData.money = saveData.money - saveData.videoCosts;
        saveData.videoCosts = (Math.round((Math.pow(saveData.videoCosts, 1.11)) * 10) / 10).toFixed(1);
        document.getElementById('videoCost').innerHTML = saveData.videoCosts;
        document.getElementById('videoAmount').innerHTML = saveData.videos; 
        document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$'; 
    }
}
//Bonk bot brain and money increase functions
function brain20(number) {
    saveData.brainCells = saveData.brainCells + (number * 20);
    document.getElementById('brainCells').innerHTML = saveData.brainCells;
}
function money20(number) {
    saveData.money = saveData.money + ((number/10)* 20);
    document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$';
}
//Bonk bot increase function
document.getElementById('bonkAmount').innerHTML = saveData.bonks;
document.getElementById('bonkCost').innerHTML = saveData.bonkCosts;
function buyBonk(number) { 
    if(saveData.money >= saveData.bonkCosts) {
        saveData.bonks = saveData.bonks + 1; 
        saveData.money = saveData.money - saveData.bonkCosts;
        saveData.bonkCosts = (Math.round((Math.pow(saveData.bonkCosts, 1.1)) * 10) / 10).toFixed(1);
        document.getElementById('bonkCost').innerHTML = saveData.bonkCosts;
        document.getElementById('bonkAmount').innerHTML = saveData.bonks; 
        document.getElementById('totalMoney').innerHTML = (Math.round(saveData.money * 10) / 10).toFixed(1) + '$'; 
    }
}
//Production
window.setInterval(function(){
   brain(saveData.books);
   money(saveData.books);
   brain4(saveData.magicians);
   money4(saveData.magicians);   
   brain8(saveData.videos);
   money8(saveData.videos);
   brain20(saveData.bonks);
   money20(saveData.bonks);
}, 1000);
//Auto Save 
window.setInterval(function(){
	save();
}, 300000);
//Save function
function save() {
    localStorage.setItem("gamesave",JSON.stringify(saveData));
	addAlert('Game has been saved!');
};
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
    updateHTML();
	addAlert('Game has been loaded!');
}
Load.addEventListener("click", load);
//Delete Save function
function deleteSave() {
	localStorage.removeItem("gamesave");
	saveData.brainCells = 0;
    saveData.money = 0.0;
    saveData.books = 0;
    saveData.bookCosts = 3.0;
    saveData.magicians = 0;
    saveData.magiciansCost = 10.0;
    saveData.videos = 0;
    saveData.videoCosts = 30.0;
    saveData.bonks = 0;
    saveData.bonkCosts = 70.0;
    updateHTML();
	addAlert('Game has been deleted!');
}
Delete.addEventListener("click", deleteSave);
