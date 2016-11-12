// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotesGenerated = [];

// function which generates a random number between 1 and 8 and then passes that to the quotes arrays
// and then returns the random quote object from the quotes array
function getRandomQuote()
{
	//var randomNumber = Math.floor(Math.random() * 8);
	var aRandomNumber;


	// Loop through and get a rnadom number until we get one that was not previously provided.
	do
	{
		aRandomNumber = Math.floor(Math.random() * 8);

	}  while (quotesGenerated[aRandomNumber] !== undefined && quotesGenerated[aRandomNumber] === true)

	quotesGenerated[aRandomNumber] = true;
	console.log(aRandomNumber + ' ' + quotes[aRandomNumber].quote);
	return quotes[aRandomNumber];
}

/*
* Functions to get random color values for the backgrounds
*/
function getRandomColorRGBValue()
{
	return Math.floor( Math.random() * 255) + 1;
}

function getRandomColor()
{
	return color = 'rgb(' + getRandomColorRGBValue() + ',' + getRandomColorRGBValue() + ',' + getRandomColorRGBValue() + ')';

}

// function which takes the random quote object and uses the properties to generate an HTML string
// to display on the page when the user clicks on the 'show another quote' button
// if a citation and/or year exist then the HTML string additional displays those properties
function printQuote()
{
	var randomQuote = getRandomQuote();
	

	var quoteHTML = '<p class="quote">' + randomQuote.quote +  '</p>';
	quoteHTML +=  '<p class="source"> ' + randomQuote.source;
	
	if ("citation" in randomQuote)
		quoteHTML +=  '<span class="citation">' + randomQuote.citation +  '</span>';
	
	if ("year" in randomQuote)
		quoteHTML +=  '<span class="year">' + randomQuote.year + '</span>  </p>';

	if ("tags" in randomQuote)
		quoteHTML +=  '<p class="tags"> Tags: ' + randomQuote.tags + '</p>';
	
		
	// Set the quote the newly generated HTML based on what is available in the object
	document.getElementById('quote-box').innerHTML = quoteHTML;

	var randomColor = getRandomColor();
	document.body.style.backgroundColor = randomColor;
	document.getElementById('loadQuote').style.backgroundColor = randomColor;

}

