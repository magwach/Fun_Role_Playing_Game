let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
//The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const xpText = document.querySelector("#xpText");
const monsterHealthText = document.querySelector("#monsterHealth");

function goTown()
{
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    text.innerText = "You enter the store.";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown ;
}

function goStore()
{
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    text.innerText = "You enter the store.";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
}

function goCave() {

}

function fightDragon()
{

}

function buyHealth()
{

}

function buyWeapon()
{

}

//initializing the buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;