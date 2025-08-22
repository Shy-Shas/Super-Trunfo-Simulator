function create_random_numer() {
    let random = Math.floor(Math.random() * 100) + 1;
    return random;
}

//--------------------------------------------------------------//
function create_cards() {
    class card {
        constructor(name, life, attack, speed) {
            this.name = name;
            this.life = life;
            this.attack = attack;
            this.speed = speed;
        };
    };

    const NAMES = [
    "Grimfang the Devourer","Thornhide Basilisk","Embermaw Drake","Nyxshade Wraith","Frosthorn Behemoth",
    "Vilebloom Hydra","Ashclaw Revenant","Dreadspire Lich","Skullgnaw Troll","Zephyrbane Harpy", "Dragão Sombrio",
    "Grifo Flamejante","Mantícora","Quimera","Lich","Beholder","Troll da Neve","Elemental do Caos","Espectro da Cripta",
    "Minotauro","Hidra de Fogo","Gárgula","Demônio Abissal","Ent Ancião","Serpente Marinha","Wendigo","Banshee","Gnoll",
    "Kraken","Cavaleiro da Morte"];
    
    let results = [];

    NAMES.forEach(name => {
        results.push(new card(name, create_random_numer(), create_random_numer(), create_random_numer()))
    });

    return results;
};

//--------------------------------------------------------------//
function create_deck(game_deck) {
    let personal_deck = [];

    for (let i = 0; i < 10; i++) {
        personal_deck.push(game_deck[Math.floor(Math.random() * game_deck.length)]);
    };

    return personal_deck;
};

//--------------------------------------------------------------//
function start_game() {
    for (let [index, card] of player_cards.entries()) {
        //functions
        function win() {
        console.log('Player wins!')
        player_cards.push(enemy_cards[index])
        enemy_cards.splice(index, 1)
        };

        function lose() {
            console.log('Player loses!')
            player_cards.splice(index, 1)
            enemy_cards.push(card)
        }
        //--------------------------------------------------------------//
        //consts and variables
        const atributes = ['life', 'attack', 'speed']; 

        //--------------------------------------------------------------//
        //program game
        let act = prompt(` ${card.name}: life = ${card.life}, attack = ${card.attack}, speed = ${card.speed}
            \n choose and atribute ${atributes}:` );
        
        if (!atributes.includes(act)) {
            console.log('Atribute non existant!')
        }
        else{
            if (enemy_cards.length <= 0) break;   
            else {
            //--------------------------------------------------------------//
            // attributes comparation
            //life
            if (act == 'life') {
                console.log(`${card.name}: life = ${card.life} vs ${enemy_cards[index].name}: life = ${enemy_cards[index].life}`);
                if (card.life > enemy_cards[index].life) {
                    win()
                } 
                else {
                    if (card.life < enemy_cards[index].life) {
                        lose()
                    } 
                    else{
                        console.log("It's a tie")
                    }
                }
            }
            //attack
            if (act == 'attack') {
                console.log(`${card.name}: attack = ${card.attack} vs ${enemy_cards[index].name}: attack = ${enemy_cards[index].attack}`);
                if (card.attack > enemy_cards[index].attack) {
                    win()
                } 
                else {
                    if (card.attack < enemy_cards[index].attack) {
                        lose()
                    } 
                    else{
                        console.log("It's a tie")
                    }
                }
            }
            //speed
            if (act == 'speed') {
                console.log(`${card.name}: speed = ${card.speed} vs ${enemy_cards[index].name}: speed = ${enemy_cards[index].speed}`);
                if (card.speed > enemy_cards[index].speed) {
                    win()
                } 
                else {
                    if (card.speed < enemy_cards[index].speed) {
                        lose()
                    } 
                    else{
                        console.log("It's a tie")
                    }
                }
            }
            }
        }
    }
}

var cards = create_cards();

var player_cards = create_deck(cards);
var enemy_cards = create_deck(cards);

start_game();