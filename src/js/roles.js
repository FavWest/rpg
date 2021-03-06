import Inventory from "./inventory.js";

const db_roles = [
    {
        role: "warrior",
        physical: 4,
        mental: 2,
        currentHP: 10,
        maxHP: 10,
        physicalDefBonus: 0,
        mentalDefBonus: 0,
        physicalDmgBonus: 0,
        mentalDmgBonus: 0,
        climb: true
    },
    {
        role: "mage",
        physical: 1,
        mental: 4,
        currentHP: 8,
        maxHP: 8,
        physicalDefBonus: 0,
        mentalDefBonus: 0,
        physicalDmgBonus: 0,
        mentalDmgBonus: 0,
    },
    {
        role: "rougue",
        physical: 3,
        mental: 3,
        currentHP: 8,
        maxHP: 8,
        physicalDefBonus: 0,
        mentalDefBonus: 0,
        physicalDmgBonus: 0,
        mentalDmgBonus: 0,
    },
    {
        role: "popStar",
        physical: 2,
        mental: 2,
        currentHP: 10,
        maxHP: 10,
        physicalDefBonus: 0,
        mentalDefBonus: 0,
        physicalDmgBonus: 0,
        mentalDmgBonus: 0,
    },
]

export default db_roles;