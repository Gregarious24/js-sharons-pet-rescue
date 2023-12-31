const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        sleep: function () {
            console.log(`${this.name} needs a nap. Zzz...`);
            this.isTired = 1;
        },
        play: function () {
            if (this.isTired === 10) {
                console.log("Too tired to play.");
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
            };
        },
    }
    return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

// Log out all five objects to verify the objects and parameters were created
// console.log(sora, clover, baxter, cleo, francine);

// Call the methods to make sure they work. 
// clover.sleep();
// baxter.play();

// Log out the clover and baxter objects. Verify the 'isTired' value for Clover has changed from 5 to 1, and the 'isTired value for Baxter has increased from 5 to 6.
// // console.log(clover, baxter);