let greenCharacter = document.createElement('img')
newImage(greenCharacter,'assets/green-character.gif', '100px', '100px' )

let pineTree = document.createElement('img')
newImage(pineTree, 'assets/pine-tree.png', '450px', '200px');

let tree = document.createElement('img')
newImage(tree, 'assets/tree.png', '200px', '300px')

let pillar = document.createElement('img')
newImage(pillar, 'assets/pillar.png', '350px', '100px')

let crate = document.createElement('img')
newImage(crate, 'assets/crate.png', '150px', '200px')

let well = document.createElement('img')
newImage(well, 'assets/well.png', '500px', '425px')

let sword = document.createElement('img')
newItem(sword, 'assets/sword.png', '500px', '405px')

let shield = document.createElement('img')
newItem(shield, 'assets/shield.png', '165px', '100px')

let staff = document.createElement('img')
newItem(staff,  'assets/staff.png', '600px', '100px')

function newItem(name, source, left, bottom) {
    name.src = source
    name.style.position = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)
    name.addEventListener('dblclick', function(){
        name.remove()
    })
}

function newImage(name, source, left, bottom) {
    name.src = source
    name.style.position = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)
}

/*
Function Declaration:
function greet() {
    console.log('hello there');
}

Call / Invoke the Function:
greet();

Function Expression:
const speak = function(){
    console.log('good day!')
};

Invoke the Function:
speak()

Pass Values into Functions - Name is an Argument:
const speak = function(name){
    console.log('good day $(name)');
};

Takes value and assigns it to name variable - Function Parameter:
speak('mario');

const speak = function(name = 'luigi', time = 'night'){
    console.log('good $(time) $(name)');
}

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
}

const calcArea = function(radius){
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log(area);

Checkout Functions:
funaction addItem(name, price){
    let items = []
    let item = { name: name, price: price }
    items.push(item)
}
function getTotal(){
    let toal = 0;
    for(let i=0; i < items.length; i++)
}

addItem('pants', 40);
*/
