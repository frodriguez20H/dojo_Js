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
    constructor(type, name, yearOfBuilded, trees, area) {
        super(type, name, yearOfBuilded);
        this.trees = trees;
        this.area = area;
    }

    ageOfPark() {  // Calcula la edad del parque
        let age;
        age = new Date().getFullYear() - this.yearOfBuilded;
        return age;
    }

    densityTrees() { // Calcula la densidad del parque.
        let den;
        den = this.trees / this.area;
        return den;
    }
}