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
        return this.trees / this.area;
    }
}

class Street extends Property { // Subclase para calles
    constructor(type  = 'Street', name, yearOfBuilded, longStreet, classStreet = 'normal') {
        super(type, name, yearOfBuilded);
        this.longStreet = longStreet;
        this.classStreet = classStreet;
    }
}

//¿Hay forma de copiar valores del constructor inicial?

const park1 = new Park('Park', 'Natural Park', 1940, 10000, 6000);
const park2 = new Park('Park', 'Old Park', 1920, 5000, 5000);
const park3 = new Park('Park', 'Recreative Park', 1999, 600, 6000);
const park4 = new Park('Park', 'New Park', 2010, 20000, 10000);

const street1 = new Street('Street', 'Main Street', 1918, 20);
const street2 = new Street('Street', 'Diagonal Street', 1935, 30, 'big');
const street3 = new Street('Street', 'Secondary Street', 1998, 5, 'small');

