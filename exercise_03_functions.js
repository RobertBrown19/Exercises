// Exercises: Functions

// Driving Age

function canDrive (userAge) {
    let yearsUntilDriver = 16 - userAge;
    if (userAge < 16) {
        console.log(`Sorry, you still have ${yearsUntilDriver} years until you can drive.`);
    } else {
        console.log("Drive into the sunset!")
    }
}

canDrive(14); // `Sorry, you still have 2 years until you can drive.`
canDrive(26); // "Drive into the sunset!

// The World Translator
function translator (lang) {
    const translations = {
        english: "Hello World",
        french: "Bonjour le monde",
        japanese: "konnichiwa sekai",
        indonesian: "Halo Dunia",
        german: "Hallo welt",
        dutch: "Hallo Wereld"
    };
    if (translations[lang] === undefined) {
        console.log("Language not found!!")
    } else {
        console.log(translations[lang]); // does not work with translations.lang ??
    }
}

translator ("japanese"); // "konnichiwa sekai"
translator ("french"); // "Bonjour le monde"
translator ("frenc"); // "Language not found!!"

// the age calculator

function calculateAge (birthYear, year = new Date().getFullYear()) { // If year is not entered Date() will get the current year
    lowerAge = year - birthYear - 1;
    higherAge = year - birthYear;

    console.log (`You are either ${lowerAge} or ${higherAge}`);
}

calculateAge (2000, 2022); // you are either 21 or 22
calculateAge (1994, 2021); // You are either 26 or 27
calculateAge (1985); // You are either 35 or 36

// The Lifetime Supply Calculator

function calculateSupply (age, ammountPerDay) {
    let maxAge = 85;
    let daysToSupply = (maxAge - age) * 365;
    let roundAmmountPerDay = Math.round(ammountPerDay);
    let requiredSupply = daysToSupply * roundAmmountPerDay;
    alert(`You will need ${requiredSupply} to last you until the ripe old age of ${maxAge}`);
}

calculateSupply (36, 2); // You will need 35770 to last you until the ripe old age of 85
calculateSupply (36, 2.3); // You will need 35770 to last you until the ripe old age of 85
calculateSupply (43, 6); // You will need 91980 to last you until the ripe old age of 85

// The Geometrizer

function calcCircumference (radius) {
    let circumference = 2 * radius * Math.PI;
    console.log("The circumference is", circumference);
}

calcCircumference (10); // The circumference is 62.83185307179586

function calcArea (radius) {
    let area = Math.PI * Math.pow (radius, 2);
    console.log("The area is " + area);
}

calcArea (15); // the area is 706.8583470577034

// The temperature Converter

function celsiusToFahrenheit (celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C is " + fahrenheit + "°F");
}

celsiusToFahrenheit(27); // 27°C is 80.6°F

function fahrenheitToCelsius (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(fahrenheit + "°F is " + celsius + "°C");
}

fahrenheitToCelsius (90); // 90°F is 32.2222222222222°C


// Working with Users

const users = [
    {
      email: "groucho@ga.co",
      password: "chicken",
      isAdmin: true
    },
    {
      email: "harpo@ga.co",
      password: "elephant",
      isAdmin: false
    },
    {
      email: "gummo@ga.co",
      password: "pinkFairyArmadillo",
      isAdmin: true
    },
    {
      email: "zeppo@ga.co",
      password: "dumboOctopus",
      isAdmin: false
    }
];

function allowLogin (email, password) {
    let loggedIn = false;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].email === email && users[i].password === password) {
            loggedIn = true;
            break; // break the for loop once the user is found
        } 
    }
    if (loggedIn) {
        console.log("You are logged in");
    } else {
        console.log("Sorry, something went wrong");
    }
    return loggedIn;
}

allowLogin ("gummo@ga.co", "pinkFairyArmadillo");
allowLogin ("gummo@ga.co", "pinkfairyw1ngs");

function createAccount (email, password, isAdmin = false) {
    let existingAccount = false;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].email === email) {
            existingAccount = true;
            break; // break the for loop once the user is found
        } 
    }
    if (existingAccount) {
        console.log("Account already exists");
    } else {
        users.push({email: email, password: password, isAdmin: isAdmin});
        console.log("Your account has been created");
    }
}

createAccount ("gummo@ga.co", "pinkFairyArmadillo", true);
createAccount ("gummo2@ga.co", "p1nkfa1ryw1ngs", false);

function checkAdmin (email, password) {
    let isAdmin = false;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].email === email && users[i].password === password && users[i].isAdmin) {
            isAdmin = true;
            break; // break the for loop once the user is found
        } 
    }
    return isAdmin;
}

function searchUser (email) {
    userId = users.findIndex (i => i.email === email);
    return userId;
}

function deleteAccount (email, password, deleteEmail = email) {
    let loggedIn = allowLogin (email, password);
    let isAdmin = checkAdmin(email, password);
    let deleteId = searchUser(deleteEmail);
    if (loggedIn && (deleteEmail === email || isAdmin)){
        if (deleteId !== -1){
            users.splice(deleteId, 1);
            console.log("you have deleted Account:", deleteEmail);
        } else {
            console.log("Account not found");
        }
    } else {
        console.log("you do not have permission to delete Account:", deleteEmail);
    }
}

deleteAccount ("zeppo@ga.co", "dumboOctopus"); // Can delete own account
deleteAccount ("gummo2@ga.co", "p1nkfa1ryw1ngs", "gummo@ga.co"); // Cannot delete another user
deleteAccount ("gummo@ga.co", "pinkFairyArmadillo", "gummo2@ga.co"); // Admin can delete other user

function updateAccount (email, password, updateEmail = email) {
    let loggedIn = allowLogin (email, password);
    let isAdmin = checkAdmin(email, password);
    let updateId = searchUser(updateEmail);
    if (loggedIn && (updateEmail === email || isAdmin)){
        if (updateId !== -1){
            let newEmail = prompt (`Enter new email for ${updateEmail} (leave blank to keep current email)`);
            if (newEmail) {
                users[updateId].email = newEmail;
                console.log(updateEmail, "Email set to:", newEmail);
            };
            newPassword = prompt (`Enter new password for ${updateEmail} (leave blank to keep current email)`);
            if (newPassword) {
                users[updateId].password = newPassword;
                console.log(updateEmail, "Password set to:", newPassword)
            };
            if (isAdmin) {
                let allowAdmin = prompt (`Allow admin for ${updateEmail}. (Enter true/false)`)
                if (allowAdmin === "true"){
                    users[updateId].isAdmin = true;
                    console.log(updateEmail, "is an admin");
                }else if (allowAdmin === "false") {
                    users[updateId].isAdmin = false;
                    console.log(updateEmail, "is not an admin");
                };
            }
        } else {
            console.log("Account not found");
        }
    } else {
        console.log("you do not have permission to update Account:", updateEmail);
    }
    console.log(users[updateId]);
}

updateAccount ("harpo@ga.co", "elephant","harpo@ga.co")
updateAccount ("gummo@ga.co", "pinkFairyArmadillo","harpo@ga.co")


// A transit Application

const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];

function travelFrom (fromStation, toStation) {
    let fromStationIndex = stations.findIndex(i => i.toLowerCase() === fromStation.toLowerCase());
    if (fromStationIndex === -1) {
        console.log(`Depature Station ${fromStation} not found`)
        return;
    }
    let toStationIndex = stations.findIndex(i => i.toLowerCase() === toStation.toLowerCase());
    if (toStationIndex === -1) {
        console.log(`Destination Station ${toStation} not found`)
        return;
    }
    let numOfStops = Math.abs(toStationIndex - fromStationIndex) - 1;
    let stationList = "";
    console.log(`To go from ${stations[fromStationIndex]} to ${stations[toStationIndex]} - you'll need to go through ${numOfStops} stops`);
    if (fromStationIndex < toStationIndex) {
        for (let i = fromStationIndex; i <= toStationIndex; i +=1) {
            stationList = stationList + "-" + stations[i] + " \n";
        }
    } else {
        for (let i = fromStationIndex; i >= toStationIndex; i -=1) {
            stationList = stationList + "-" + stations[i] + " \n";
        }
    }
    console.log(stationList);
}

travelFrom("cEntrAl", "CirCular quAy");
travelFrom("CirCular quAy", "cEntrAl");
travelFrom("Kings Cross", "cEntrAl");

