// Exercise: The DOM Detective

// The title of the page
let title = document.querySelector("title");
// The logo in the nav
let logo = document.querySelector(".navi_banner_logo");
// The "Find Your Course" button in the nav
myCourse = document.querySelector("[href$=findyourcourse");
// The heading that says "Learning Today, Leading Tomorrow"
let heading = document.querySelector("h1");
// All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
let courseGrid = document.querySelectorAll(".courses-grid_item");
// The amount of campuses around the world
let numCampuses = document.querySelector(".facts_list_item_quantity");
// The number of instructors
let numInstructors = document.querySelector("a[href*='teach'] div");
// The logos of GA's featured clients and hiring partners
let partners = document.querySelector(".Employers__list___1cuG_");
// GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
let socialLinks = document.querySelectorAll("a[class*='social']");
// The input where you add your email to sign up for the newsletter (in the footer)
let footerInput = document.querySelector("input[class*='footer']");


// Exercises: Working with the CSSOM

// Replace the Logo

// Visit Google's website in Chrome, and open up the console.
// Find the Google logo and store it in a variable using DOM traversal
let logo = document.querySelector("img[src*='logo'");

// Save the current src attribute into a variable
let logoSrc = logo.getAttribute("src");

// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// You can use this url for the Yahoo Logo: https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg
// Hint: You may need to figure out how to remove the srcset attribute for this!
logo.srcset = "";
logo.src = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg";

// Find the Google search button and store it in a variable.
// search is not a button it is of type input also this does not always link the item even though it sets the variable to the right value
let searchButton = document.querySelector("input[value$='Search'");
// Modify the text of the button so that it says "Yahooo!" instead
searchButton.value = "Yahooo!" // this does not always work as the variable does not always seem to link to the item on the page??