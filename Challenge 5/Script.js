/*
Suppose that you're working in a small town
administration, and you're in charge of two 
twon elements:
1. Parks
2. Streets

It's a very small twon, so right now there
are only 3 parks and 4 streets. All parks
and streets have a name and a build year.

At and end-of-year meeting, your boss wants a 
final report with the following:

1. Tree density of each park in the town
(formula: number of trees/park area)
2. Average age of each town's park
(formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all strets:
tiny/small/normal/big/huge. If the size is unknown,
the default is normal.

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses,
template strings, default parameters, maps, arrow functions,
destructuring, etc.
*/

//=============================================================================
class Property {
    constructor(type, name, yearOfBuilded) {  // Constructor básico.
    this.type = type;
    this.name = name;
    this.yearOfBuilded = yearOfBuilded;
    }
}

class Park extends Property { // Subclase para Parkes
    constructor(type = 'Park', name, yearOfBuilded, trees, area) {
        super(type, name, yearOfBuilded);
        this.trees = trees;
        this.area = area;
    }

    ageOfPark() {  // Calcula la edad del parque
        return new Date().getFullYear() - this.yearOfBuilded;
    }

    densityTrees() { // Calcula la densidad del parque.
        return parseFloat(this.trees / this.area).toFixed(2);
    }
}

class Street extends Property { // Subclase para calles
    constructor(type  = 'Street', name, yearOfBuilded, longStreet, range = 3) {
        super(type, name, yearOfBuilded);
        this.longStreet = longStreet;
        this.range = range;
    }

    classifyStreet () {
        const range = new Map();
        range.set(1, 'tiny');
        range.set(2, 'small');
        range.set(3, 'normal');
        range.set(4, 'big');
        range.set(5, 'huge');
        console.log(`${this.name}, build in ${this.yearOfBuilded}, is a ${range.get(this.range)} street.`);
    }

    lengthStreet() {
        return console.log(`Street: ${this.name}, has a ${this.longStreet} kms.`);
    }
}

function averagePark(parks) {
    let numparks = parks.length;
    let sumparks = parseFloat(parks.reduce((sum,cur) => sum + cur.ageOfPark(),0)).toFixed(2);
    let aveparks = parseFloat(sumparks / numparks).toFixed(2);
    return console.log(`Averange of Parks is ${aveparks}.`);
}

function averageStreets(streets) {
    let numstreets = streets.length;
    let sumkms = parseFloat(streets.reduce((sum, cur)  => sum + cur.longStreet, 0)).toFixed(2);
    let avestreets = parseFloat(sumkms / numstreets).toFixed(2);
    return console.log(`Averange of long streets is ${avestreets}Kms and total is ${sumkms}Kms.`);
}

function showProperty(Property) {
    Property.map(
            pro => {console.log(`This property is a ${pro.type} with name \"${pro.name}\". Was builded in ${pro.yearOfBuilded}.`);
            if(pro.type === 'Park'){
                console.log(`Density of tree is ${pro.densityTrees()}.`)
            } else if (pro.type === 'Street')  {
                console.log(`Class this stree is ${pro.classifyStreet()}.`)}
    }
)};

//¿Hay forma de copiar valores del constructor inicial?

const park1 = new Park('Park', 'Natural Park', 1940, 10000, 6000);
const park2 = new Park('Park', 'Old Park', 1920, 500, 5000);
const park3 = new Park('Park', 'Recreative Park', 1999, 600, 6000);
const park4 = new Park('Park', 'New Park', 2010, 20000, 10000);

const street1 = new Street('Street', 'Main Street', 1918, 20);
const street2 = new Street('Street', 'Diagonal Street', 1935, 30, 4);
const street3 = new Street('Street', 'Secondary Street', 1998, 5, 2);

let streets = [street1, street2, street3];
let parks = [park1, park2, park3, park4];

showProperty(streets);
averageStreets(streets);
console.log('--------------------------------------------\n');
showProperty(parks);
averagePark(parks);

