/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//Tested on console, works fine
var quotes = [
  {
   quote : "Knowing what's right doesn't mean much unless you do what's right." , 
   source : "Franklin Roosevelt"
  },
  {
   quote : "Why fit in when you were born to stand out!" , 
   source : "Dr. Seuss"
  },
  {
   quote : "I know nothing with any certainty, but the sight of the stars makes me dream." , 
   source : "Vincent van Gogh"
  },
  {
   quote : "It matters not what someone is born, but what they grow to be" , 
   source : "J. K. Rowling" ,
   citaton : "Harry Potter and the Goblet of Fire" 
  },
  {
   quote : "I believe great people do things before they are ready." , 
   source : "Amy Poehler" ,
   year : "2015"
  },
  {
   quote : "Believing takes practice." , 
   source : "J. M. Barrie" ,
   citation : "Peter Pan"
  }
];

//Tested on console, works fine.
function getRandomQuote () {
    randomNum = Math.floor(Math.random() * quotes.length) + 1;
    var i = randomNum;
    return quotes[i];
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote () {
  var randomQuote = getRandomQuote();
  var html = '';
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  html += '</p>'; 
  return randomQuote;
}

console.log(printQuote()); //Error encountered up to this point


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

/*document.getElementById('loadQuote').addEventListener("click", printQuote, false);*/


// Remember to delete the comments that came with this file, and replace them with your own code comments.