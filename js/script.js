/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
by Melissa Preece
I am aiming for the grade Exceeds Expectations but will accept Meets Expectations as well.
******************************************/

//Array of 6 quote objects, some including year and citation information.
var quotes = [
  {
   quote : "Knowing what's right doesn't mean much unless you do what's right." , 
   source : "Franklin Roosevelt" ,
   tag: "Famous Politicians"
  },
  {
   quote : "Why fit in when you were born to stand out!" , 
   source : "Dr. Seuss" ,
   tag: "Authors"
  },
  {
   quote : "I know nothing with any certainty, but the sight of the stars makes me dream." , 
   source : "Vincent van Gogh" ,
   tag : "Artists"
  },
  {
    quote : "Believing takes practice." , 
    source : "J. M. Barrie" ,
    citation : "Peter Pan" ,
    tag : "Authors"
  },
  {
    quote : "It matters not what someone is born, but what they grow to be" , 
    source : "J. K. Rowling" ,
    citation : "Harry Potter and the Goblet of Fire" ,
    tag : "Authors"
  },
  {
    quote : "I believe great people do things before they are ready." , 
    source : "Amy Poehler" ,
    year : "2015" ,
    tag : "Comedians"
  }
];

//getRandomQuote function: returns one quote object randomly.
function getRandomQuote () {
    let randomNum = Math.floor(Math.random() * quotes.length);
    let i = randomNum;
    return quotes[i];
}

//printQuote function: takes randomly chosen quote object and writes and formats it to HTML doc.
function printQuote () {
  var randomQuote = getRandomQuote();
  var html = '';
  const body = document.body;
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if ( randomQuote.citation ) {
    html += '<span class="citation">' + randomQuote.citation + '</span>'
  };
  if ( randomQuote.year ) {
    html += '<span class="year">' + randomQuote.year + '</span>'
  };
  if ( randomQuote.tag ) {
    html += '<span class="tag">' + randomQuote.tag + '</span>'
  };
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  body.style.backgroundColor = randomColor();
}

//Displays new quote when "Show another quote" button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Function that randomly generates an rgb color.
function randomColor () {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

// Sets a timer that changes the quote on the page every 20 seconds
setInterval (printQuote , 20000);




