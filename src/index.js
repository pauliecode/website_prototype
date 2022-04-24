let playerCountry;
let username;

const axiesCountries = ["Germany", "Italy"]

class Player {
    constructor(hp, divisonsNumber){
        this.hp = hp;
        this.divisonsNumber = divisonsNumber;
    }

    attack() {
        this.divisonsNumber = this.divisonsNumber - 10;
    }

    defend() {
        this.hp = this.hp - 30;
    }
}

class Germany {
    constructor(hp, divisonsNumber){
        this._hp = hp;
        this._divisonsNumber = divisonsNumber;
    }

    attack() {
        this._divisonsNumber = this._divisonsNumber - 10;
    }

    defend() {
        this._hp = this._hp - 30;
    }

    get hp() {
        return this._hp
    }
    
    get divisonsNumber() {
        return this._divisonsNumber
    }
}

class Italy {
    constructor(hp, divisonsNumber){
        this._hp = hp;
        this._divisonsNumber = divisonsNumber;
    }

    attack() {
        this._divisonsNumber = this._divisonsNumber - 10;
    }

    defend() {
        this._hp = this._hp - 30;
    }

    get hp() {
        return this._hp
    }
    
    get divisonsNumber() {
        return this._divisonsNumber
    }

    
}

let germanyObj = new Germany(160, 341)
let italyObj = new Italy(120, 59)



document.getElementById("start-game-button").addEventListener("click", countrySelect);
document.getElementById("attack-germany-button").addEventListener("click", attackGermany);

function countrySelect() {
    const countrySelectorValue = document.getElementById("countrySelector").value;
    if (countrySelectorValue == "Pick a country") {
        console.log(countrySelectorValue)
        alert("That's not a valid country!")
    } else {
        const usernameValue = document.getElementById("username-input").value;
        console.log(usernameValue);
    
        playerCountry = countrySelectorValue;
        localStorage.setItem("playerCountry", playerCountry);
        username = usernameValue;
        console.log(playerCountry);
    
        document.getElementById("selected-country-text").innerHTML = "Welcome " + username + "! You have chosen " + playerCountry
        
        switch (playerCountry) {
            case "United States of America":
                let player = new Player(150, 91);
                break;
            case "France":
                player = new Player(100, 100);
            case "United Kingdom":
                player = new Player(130, 43);
        }
    }

    document.getElementById("germanyHp").innerHTML = "HP: " + germanyObj.hp;
    document.getElementById("germanyDivisions").innerHTML = "Divisions: " + germanyObj.divisonsNumber;

    document.getElementById("italyHp").innerHTML = "HP: " + italyObj.hp;
    document.getElementById("italyDivisions").innerHTML = "Divisions: " + italyObj.divisonsNumber;
}

function attackGermany() {
    playerCountry = localStorage.getItem("playerCountry")

    if (playerCountry == "United States of America") {
        germanyObj.defend()
        document.getElementById("germanyHp").innerHTML = "HP: " + germanyObj.hp;
    }
}