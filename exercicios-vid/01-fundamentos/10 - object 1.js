/* JSON não é objeto em ActionScrpit, apesar da sintaxe  ser semelhante. 
 * JSON é um arquivo de texto. */

const prod1 = {}
prod1.nome = 'Hover Skate Notebook'
prod1.preco = 8997.96
prod1['Desconto legal'] = 0.40 //  não usar espaços em atributos
prod1['DescontoLegal'] = 0.40 //  não usar espaços em atributos

console.log(prod1)

const character1 = {
    name: 'Akara',
    birth: '1298',
    class: 'witch',
    specialty1: 'bat soup',
    specialty2: 'snake poison',
    spells: {
        fire: {
            self: 'Inner Flame',
        },
        ice: {
            self: 'Cold Hands',
            target: 'Frozen Blood'
        }
    }
}

console.log(character1)

/* {
 *     key1: 'value',
 *     key2: 'value'  
 * } */
   
const object1 = {
    key1: '1',
    key2: '2'
}
console.log(object1)


console.log(
    `
The JSON format: 

{
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}

{
    "name": "Madelleine Rennard",
    "birth": "1298",
    "class": "Witch",
    "specialty1": "Bat soup",
    "specialty2": "Snake poison",
    "fire_spell": "Inner flame",
    "ice_spell": "Frozen blood"
}
    `
)

// JSON  Format - pode ser validado buscando por 'JSON validator' */