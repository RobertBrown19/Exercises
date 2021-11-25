// Exercise: Objects

// The Reading List

// Keeps track of which books you have read and which books you want to read!

// Create an array of objects which descibes books: title, author, haveRead.
// [{title: "Book 1 Title", author: The books author, haveRead: true/false},
// {title: "Book 2 Title", author: The books author, haveRead: true/false},]
let readingList = [
    {title: "Divergent", author: "Veronica Roth", haveRead: true},
    {title: "Insergent", author: "Veronica Roth", haveRead: true},
    {title: "The Two Towers", author: "J. R. R. Tolkien", haveRead: false},
    {title: "Allegiant", author: "Veronica Roth", haveRead: true},
    {title: "The Fellowship of the Ring", author: "J. R. R. Tolkien", haveRead: false},
    {title: "Four", author: "Veronica Roth",haveRead: true},
    {title: "The Return of the King",author: "J. R. R. Tolkien", haveRead: false},
];

for (i in readingList) {
    if (readingList[i].haveRead){
        console.log (`You have already read ${readingList[i].title}, by ${readingList[i].author}`);
    } else {
        console.log (`You still need to read ${readingList[i].title}, by ${readingList[i].author}`);
    }
}

// The Recipe Card


// create an object that holds recipe information: title, number of serves, ingredients

let recipeCard = {
    title: "Penang Curry Chicken",
    numOfServings: 6,
    ingredients: [
        "1kg of Diced Chicken Breast",
        "3/4 Jar of Valcom Panaeng Curry Paste - adjust for taste",
        "300ml Coconut Cream",
        "500ml Cream",
        "1 packet of Cream of Chicken soup powder",
        "4 cups of Rice"
    ],
    directions: [
        "Start Rice cooking as per packet directions",
        "Lightly oil large pan",
        "Cook Diced Chicken Breast",
        "Drain excess water",
        "Stir in Panang curry paste",
        "Stir in Coconut Cream & Cream",
        "Add Cream of Chicken powderd soup and stir until disolved",
        "Reduce heat and stir occasionaly until desired sauce thickness has been achieved",
        "serve with Rice",
    ]
}

let ingredentList = ``;
let cookingDirections = ``;

for (i in recipeCard.ingredients) {
    ingredentList = ingredentList + `- ${recipeCard.ingredients[i]} \n`;
}

for (i in recipeCard.directions) {
    cookingDirections = cookingDirections + `${i}. ${recipeCard.directions[i]} \n\n`;
}
console.log(`${recipeCard.title}

Serves: ${recipeCard.numOfServings}

Ingredients:

${ingredentList}

Directions:

${cookingDirections}`);

// The Movie Database

let favMovie = {
    title: "Howl's Moving Castle",
    duration: 119,
    director: "Hayao Miyazaki",
    stars: [
        "Chieko Baisho",
        "Takuya Kimura",
        "Tatsuya Gashuin",
    ]
};

let starsList = favMovie.stars.slice(0,-1).join(", ")+" and "+favMovie.stars.slice(-1);
console.log(`${favMovie.title} last for ${favMovie.duration} minutes, and was directed by ${favMovie.director}. Stars: ${starsList}`);



