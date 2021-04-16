const db_armor = [
    //universal armor
    {
        name: "Deflector of the World",
        type: "armor",
        class: "universal",
        physicalDefBonus: 10,
        mentalDefBonus: 10,
    },
    {
        name: "Heartless Chestpiece of the Stars",
        type: "armor",
        class: "universal",
        physicalDefBonus: 3,
        mentalDefBonus: 3,
    },
    //warrior armor
    {
        name: "heavy Armor",
        type: "armor",
        role: "warrior",
        physicalDefBonus: 2,
        mentalDefBonus: 1,
    },
    {
        name: "Breastplate of Doomed Misery",
        type: "armor",
        class: "warrior",
        physicalDefBonus: 2,
        mentalDefBonus: 4,
        mentalDmgBonus: -1,
    },
    {
        name: "Yearning Bone Battleplate",
        type: "armor",
        class: "warrior",
        physicalDefBonus: 5,
        mentalDefBonus: 1,
        physicalDmgBonus: 1,
    },
    //mage armor
    {
        name: "Light Robe",
        type: "armor",
        role: "mage",
        mentalDefBonus: 3,
    },
    {
        name: "Arcane Robe",
        type: "armor",
        class: "mage",
        physicalDefBonus: 4,
        mentalDefBonus: 2,
        physicalDmgBonus: -1,
    },
    {
        name: "Dumbledore's Robe",
        type: "armor",
        class: "warrior",
        physicalDefBonus: 1,
        mentalDefBonus: 5,
        mentalDmgBonus: 1,
    },
    //rogue armor
    {
        name: "Light Armor",
        type: "armor",
        role: "rogue",
        physicalDefBonus: 1,
        mentalDefBonus: 2,
    },
    {
        name: "Studded Lether Armor",
        type: "armor",
        class: "rogue",
        physicalDefBonus: 3,
        mentalDefBonus: 3,
    },
    {
        name: "Nightingale armor",
        type: "armor",
        class: "rogue",
        physicalDefBonus: 3,
        mentalDefBonus: 2,
        physicalDmgBonus: 1,
        mentalDmgBonus: 1,
    },
    //popstar
    {
        name: "Marching Band Suit",
        type: "armor",
        role: "popstar",
        physicalDefBonus: 1,
        mentalDefBonus: 2,
    },
    {
        name: "Jester Suit ",
        type: "armor",
        class: "rogue",
        physicalDefBonus: 3,
        mentalDefBonus: 3,
    },
    {
        name: "",
        type: "armor",
        class: "rogue",
        physicalDefBonus: 3,
        mentalDefBonus: 2,
        physicalDmgBonus: 1,
        mentalDmgBonus: 1,
    },
]

export default db_armor;

//potentially convert the ARMOR array to an Object instead and seatch through that.
//add another Object called "Amory" that will contain all of the smaller objects.