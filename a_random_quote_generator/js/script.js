/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


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


function getRandomQuote () {
    randomNum = Math.floor(Math.random() * quotes.length);
    var i = randomNum;
    return quotes[i];
}



function printQuote () {
  var randomQuote = getRandomQuote();
  var html = '';
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if ( randomQuote.citation ) {
    html += '<span class="citation">' + randomQuote.citation + '</span>'
  };
  if ( randomQuote.year ) {
    html += '<span class="year">' + randomQuote.year + '</span>'
  };
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}



document.getElementById('loadQuote').addEventListener("click", printQuote, false);

