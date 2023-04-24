// this is supposed to be the return value from GPT-4.
// but this will do for the demo
// const sampleParsedArticle = [
// 	{
// 		"sentence": "The 2016 presidential election was a contest between Hillary Clinton and Donald Trump. ",
// 		"isFact": true,
// 		"isOpinion": false,
// 		"sentiment": 0,
// 		"hasQuotes": false,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Hillary Clinton", "Democrat"], 
// 			["Donald Trump", "Republican"]
// 		]
// 	},
// 	{
// 		"sentence": "Hillary Clinton was a former Secretary of State and Senator from New York. ",
// 		"isFact": true,
// 		"isOpinion": false,
// 		"sentiment": 0.4,
// 		"hasQuotes": false,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Hillary Clinton", "Democrat"]
// 		]
// 	},
// 	{
// 		"sentence": "Donald Trump was a businessman and reality TV star. ",
// 		"isFact": true,
// 		"isOpinion": false,
// 		"sentiment": 0.4,
// 		"hasQuotes": false,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Donald Trump", "Republican"]
// 		]
// 	},
// 	{
// 		"sentence": "Hillary Clinton was the Democratic nominee. ",
// 		"isFact": true,
// 		"isOpinion": false,
// 		"sentiment": 0,
// 		"hasQuotes": false,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Hillary Clinton", "Democrat"]
// 		]
// 	},
// 	{
// 		"sentence": "Donald Trump was the Republican nominee. ",
// 		"isFact": true,
// 		"isOpinion": false,
// 		"sentiment": 0,
// 		"hasQuotes": false,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Donald Trump", "Republican"]
// 		]
// 	},
// 	{
// 		"sentence": "Hillary Clinton seemed to be the more popular choice. ",
// 		"isFact": false,
// 		"isOpinion": true,
// 		"sentiment": 0.5,
// 		"hasQuotes": false,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Hillary Clinton", "Democrat"]
// 		]
// 	},
// 	{
// 		"sentence": "Donald Trump seemed to be the more controversial choice. ",
// 		"isFact": false,
// 		"isOpinion": true,
// 		"sentiment": -0.5,
// 		"hasQuotes": false,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Donald Trump", "Republican"]
// 		]
// 	},
// 	{
// 		"sentence": "<br>",
// 		"isFact": false,
// 		"isOpinion": false,
// 		"sentiment": 0,
// 		"hasQuotes": false,
// 		"hasPoliticalNames": false,
// 		"politicalNames": []
// 	},
// 	{
// 		"sentence": "According to Hillary Clinton, Donald Trump was a \"dangerous\" choice. ",
// 		"isFact": false,
// 		"isOpinion": true,
// 		"sentiment": -0.7,
// 		"hasQuotes": true,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Hillary Clinton", "Democrat"],
// 			["Donald Trump", "Republican"]
// 		]
// 	},
// 	{
// 		"sentence": "According to Donald Trump, Hillary Clinton was a \"crook\". ",
// 		"isFact": false,
// 		"isOpinion": true,
// 		"sentiment": -0.8,
// 		"hasQuotes": true,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Donald Trump", "Republican"],
// 			["Hillary Clinton", "Democrat"]
// 		]
// 	},
// 	{
// 		"sentence": "CNN reported that Donald Trump was \"the most unpopular presidential candidate in modern history\". ",
// 		"isFact": false,
// 		"isOpinion": true,
// 		"sentiment": -0.8,
// 		"hasQuotes": true,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Donald Trump", "Republican"]
// 		]
// 	},
// 	{
// 		"sentence": "Taylor Swift endorsed Hillary Clinton. ",
// 		"isFact": true,
// 		"isOpinion": false,
// 		"sentiment": 0.5,
// 		"hasQuotes": false,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Hillary Clinton", "Democrat"]
// 		]
// 	},
// 	{
// 		"sentence": "Ted Cruz endorsed Donald Trump. ",
// 		"isFact": true,
// 		"isOpinion": false,
// 		"sentiment": 0.5,
// 		"hasQuotes": false,
// 		"hasPoliticalNames": true,
// 		"politicalNames": [
// 			["Donald Trump", "Republican"],
// 			["Ted Cruz", "Republican"]
// 		]
// 	}
// ]

const myModal = new bootstrap.Modal(document.getElementById('welcome-modal'))
  
myModal.show();

let sampleArticle
let sampleAnalysis
let sampleParsedArticle

function showArticle(num){
	if(num == 1){
		sampleArticle = article1['article']
		sampleAnalysis = article1['analysis']
	}else{
		sampleArticle = article2['article']
		sampleAnalysis = article2['analysis']
	}
	myModal.hide();

	sampleParsedArticle = parseArticle(sampleArticle, sampleAnalysis);

	displayParsedArticle(sampleParsedArticle)	

	setHeight()
}



// function to parse the article and return an array of objects
function parseArticle(article, analysis) {
	// array to store the parsed article
	let parsedArticle = [];
	// loop through each sentence in the article
	for (var i = 0; i < article.length; i++) {
		// create a new object for the sentence
		let sentenceObj = {};

		// add the sentence to the object
		sentenceObj.sentence = article[i] + " ";

		// add the isFact and isOpinion values to the object
		sentenceObj.isFact = analysis[i].isFact;
		sentenceObj.isOpinion = analysis[i].isOpinion;
		// add the sentiment value to the object
		sentenceObj.sentiment = analysis[i].sentiment;

		// add the hasQuotes value to the object
		sentenceObj.hasQuotes = analysis[i].hasQuotes;
		// add the hasPoliticalNames value to the object
		sentenceObj.hasPoliticalNames = analysis[i].hasPoliticalNames;
		// add the politicalNames array to the object
		sentenceObj.politicalNames = analysis[i].politicalNames;

		// add the sentence object to the parsed article array
		parsedArticle.push(sentenceObj);
	}
	// return the parsed article
	return parsedArticle;
}


// global variable to store the toggles
let showFactOpinion = false;
let showQuotes = false;
let showPoliticalNames = false;
let showSentiment = false;
let showLineByLine = false;
let showFrequentWords = false;

let fullArticle = "";

// function to display sampleParsedArticle in the parsed-sentences-container
function displayParsedArticle(parsedArticle) {
	// clear the container
	$("#parsed-sentences-container").empty();
	// loop through each sentence in the parsed article
	for (var i = 0; i < parsedArticle.length; i++) {
		// add sentence to the full article
		fullArticle += parsedArticle[i].sentence;

		// create a new div for the sentence
		var sentenceDiv = $("<span>");
		// add the sentence class to the div based on the sentence's isFact and isOpinion values
		if (parsedArticle[i].isFact) {
			sentenceDiv.addClass("sentence fact");
		} else if (parsedArticle[i].isOpinion) {
			sentenceDiv.addClass("sentence opinion");
		} else {
			sentenceDiv.addClass("sentence");
		}

		// if the sentence has quotes, add the quotes class
		if (parsedArticle[i].hasQuotes) {
			sentenceDiv.addClass("quotes");
		}

		// store the sentiment value in data-sentiment
		sentenceDiv.attr("data-sentiment", parsedArticle[i].sentiment);

		// add span tags around each political name
		for (var j = 0; j < parsedArticle[i].politicalNames.length; j++) {
			// create a new span tag
			var politicalNameSpan = $("<span>");
			// add the political-name class
			politicalNameSpan.addClass("political-name");
			// add the name to the span
			politicalNameSpan.html(parsedArticle[i].politicalNames[j]);
			// replace the name in the sentence with the span
			parsedArticle[i].sentence = parsedArticle[i].sentence.replace(parsedArticle[i].politicalNames[j], politicalNameSpan[0].outerHTML);
		}

		// add the sentence text to the div
		sentenceDiv.html(parsedArticle[i].sentence);
		// add the sentence div to the container
		$("#parsed-sentences-container").append(sentenceDiv);
	}
}


$("#show-fact-opinion").click(function() {
	// toggle the showFactOpinion variable
	showFactOpinion = !showFactOpinion;

	// if showFactOpinion is true, show the fact and opinion sentences
	if (showFactOpinion) {
		// mark sentences labeled as opinion as red
		$(".opinion").css("color", "red");
		// mark sentences labeled as fact as blue
		$(".fact").css("color", "blue");

		// change the button text to "<span color='blue'>Facts</span> Vs. <span color='red'>Opinions</span> <i class='fa-solid fa-minus'></i>"
		$("#show-fact-opinion").html("<span style='color:blue'>Facts</span> Vs. <span style='color:red'>Opinions</span> <i class='fa-solid fa-minus'></i>");

		// draw a pie chart showing the number of fact and opinion sentences using chart.js. The pie chart should be inside #graph-for-fact-opinion
		// create an array to store the number of fact and opinion sentences
		var factOpinionCounts = [0, 0];
		// loop through each sentence in the parsed article
		for (var i = 0; i < sampleParsedArticle.length; i++) {
			// if the sentence is a fact, increment the first element of the array
			if (sampleParsedArticle[i].isFact) {
				factOpinionCounts[0]++;
			}
			// if the sentence is an opinion, increment the second element of the array
			if (sampleParsedArticle[i].isOpinion) {
				factOpinionCounts[1]++;
			}
		}

		// create a new canvas element inside #graph-for-fact-opinion
		$("#graph-for-fact-opinion").append("<canvas id='graph-fact-opinion'></canvas>");

		// create a new chart
		var ctx = document.getElementById("graph-fact-opinion").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["Facts", "Opinions"],
				datasets: [{
					label: 'Fact vs. Opinion',
					data: factOpinionCounts,
					backgroundColor: [
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 99, 132, 0.2)'
					],
					borderColor: [
						'rgba(54, 162, 235, 1)',
						'rgba(255,99,132,1)'
					],
					borderWidth: 1
				}]
			}
		});

		// add margin to the bottom of the chart
		$("#graph-for-fact-opinion").css("margin-bottom", "20px");

	}
	else{
		$(".opinion").css("color", "black");
		$(".fact").css("color", "black");

		// change the button text to "Facts Vs. Opinions"
		$("#show-fact-opinion").html("Facts Vs. Opinions <i class='fa-solid fa-plus'></i>");

		// remove the pie chart
		$("#graph-for-fact-opinion").html('');

		// remove the margin from the bottom of the chart
		$("#graph-for-fact-opinion").css("margin-bottom", "0px");
	}
});

$("#show-quotes").click(function() {
	// toggle the showQuotes variable
	showQuotes = !showQuotes;

	// if showQuotes is true, show the quotes
	if (showQuotes) {
		// add big quotes to the beginning and end of the sentence, use font awesome
		$(".quotes").prepend("<i class='fas fa-quote-left'></i>");
		$(".quotes").append("<i class='fas fa-quote-right'></i>");

		// change the button class to btn-secondary
		$("#show-quotes").removeClass("btn-outline-secondary");
		$("#show-quotes").addClass("btn-secondary");


	}else{
		// remove the big quotes from the beginning and end of the sentence
		$(".fa-quote-left").remove();
		$(".fa-quote-right").remove();
		// remove the underline from the quotes
		$(".quotes").css("text-decoration", "none");

		// change the button class to btn-outline-secondary
		$("#show-quotes").removeClass("btn-secondary");
		$("#show-quotes").addClass("btn-outline-secondary");


	}
});

$("#show-names").click(function() {
	// toggle the showPoliticalNames variable
	showPoliticalNames = !showPoliticalNames;

	// if showPoliticalNames is true, show the political names
	if (showPoliticalNames) {
		// mark political names with grey background
		$(".political-name").css("background-color", "grey");
		// set political names to white
		$(".political-name").css("color", "white");
		// add border radius to political names
		$(".political-name").css("border-radius", "5px");
		// add padding to political names
		$(".political-name").css("padding", "2px");
		// append the party name to the political name
		$(".Republican").append(" <span class='party-label'>(R)</span>");
		$(".Democrat").append(" <span class='party-label'>(D)</span>");

		// change the button text to "Highlight Names <i class='fa-solid fa-minus'></i>"
		$("#show-names").html("Highlight Names <i class='fa-solid fa-minus'></i>");

		// create a bar chart showing the count of each political name using chart.js. The bar chart should be inside #graph-for-name
		// create an object to store the count of each political name
		var politicalNameCounts = {};
		// loop through each sentence in the parsed article
		for (var i = 0; i < sampleParsedArticle.length; i++) {
			// if the sentence has a political name, increment the count of that political name
			if (sampleParsedArticle[i].hasPoliticalNames) {
				// loop through each political name in the political names array
				for (var j = 0; j < sampleParsedArticle[i].politicalNames.length; j++) {
					// if the political name is already in the object, increment the count
					if (sampleParsedArticle[i].politicalNames[j] in politicalNameCounts) {
						politicalNameCounts[sampleParsedArticle[i].politicalNames[j]]++;
					}
					// if the political name is not in the object, add it to the object and set the count to 1
					else {
						politicalNameCounts[sampleParsedArticle[i].politicalNames[j]] = 1;
					}
				}
			}
		}

		// sort the politicalNameCounts object by the count of each political name
		let sortedPoliticalNameCounts = {};
		Object.keys(politicalNameCounts).sort(function(a,b){return politicalNameCounts[b]-politicalNameCounts[a]}).forEach(function(key) {
			sortedPoliticalNameCounts[key] = politicalNameCounts[key];
		});

		// keep only the top 10 political names
		var count = 0;
		for (var key in sortedPoliticalNameCounts) {
			if (count >= 5) {
				delete sortedPoliticalNameCounts[key];
			}
			count++;
		}

		// generate an array of color for each bar in the chart
		var colors = [];
		for (var i = 0; i < Object.keys(sortedPoliticalNameCounts).length; i++) {
			colors.push(getRandomColor());
		}

		// create a new canvas element inside #graph-for-name
		$("#graph-for-name").append("<canvas id='graph-political-names'></canvas>");

		// create a new bar chart, label the x-axis as "names", label the y-axis as "count", and use the colors array for the bar colors
		var ctx = document.getElementById("graph-political-names").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: Object.keys(sortedPoliticalNameCounts),
				datasets: [{
					label: 'Count / Name',
					data: Object.values(sortedPoliticalNameCounts),
					borderWidth: 1
				}]
			}
		});

		// add margin to the bottom of the bar chart
		$("#graph-for-name").css("margin-bottom", "20px");

	}
	else{
		// remove the background color from political names
		$(".political-name").css("background-color", "white");
		// set political names to black
		$(".political-name").css("color", "inherit");
		// remove border radius from political names
		$(".political-name").css("border-radius", "0px");
		// remove padding from political names
		$(".political-name").css("padding", "0px");
		// remove the party name from the political name span
		$(".party-label").remove();

		// change the button text to "Highlight Names <i class='fa-solid fa-plus'></i>"
		$("#show-names").html("Highlight Names <i class='fa-solid fa-plus'></i>");

		// remove the bar chart
		$("#graph-for-name").empty();

		// remove the margin from the bottom of the bar chart
		$("#graph-for-name").css("margin-bottom", "0px");
	}
});

$("#show-sentiment").click(function() {
	// toggle the showSentiment variable
	showSentiment = !showSentiment;

	// if showSentiment is true, show the sentiment
	if (showSentiment) {
		// store the sentiment score for each sentence in an array
		var sentimentScores = [];

		// create a color array for the line chart
		var colors = [];

		// get sentiment score from data-sentiment attribute for each sentence
		$(".sentence").each(function() {
			// get the sentiment score from the data-sentiment attribute
			var sentimentScore = $(this).attr("data-sentiment");
			// convert sentiment score to a float
			sentimentScore = parseFloat(sentimentScore);

			// append the sentiment score to the sentimentScores array
			sentimentScores.push(sentimentScore);

			// append the sentiment score to the beginning of the sentence as a span. If sentiment score is positive, make the span green, if negative, make the span red.
			if (sentimentScore > 0) {
				$(this).prepend("<span class='sentiment-score' style='background:green;'>"+sentimentScore+"</span> ");
				// add a green triangle right after the sentiment score to indicate positive sentiment
				$(this).find(".sentiment-score").after("<i class='fas fa-caret-right' style='color:green;'></i>");

				// add the color green to the colors array
				colors.push("green");

			}else if(sentimentScore < 0){
				$(this).prepend("<span class='sentiment-score' style='background:red;'>"+sentimentScore+"</span> ");
				// add a red triangle right after the sentiment score to indicate positive sentiment
				$(this).find(".sentiment-score").after("<i class='fas fa-caret-right' style='color:red;'></i>");

				// add the color red to the colors array
				colors.push("red");
			}else{
				// if sentiment score is 0, add a gray span with text "neutral"
				$(this).prepend("<span class='sentiment-score' style='background:gray;'>neutral</span> ");
				// add a gray triangle right after the sentiment score to indicate positive sentiment
				$(this).find(".sentiment-score").after("<i class='fas fa-caret-right' style='color:gray;'></i>");

				// add the color gray to the colors array
				colors.push("gray");
			}

		});

		// create a new canvas element inside #graph-for-sentiment
		$("#graph-for-sentiment").append("<canvas id='graph-sentiment'></canvas>");

		// create a line chart. The x-axis is the sentence number, the y-axis is the sentiment score. Y-axis is from -1 to 1.
		var ctx = document.getElementById("graph-sentiment").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: Array.from(Array(sentimentScores.length).keys()),
				datasets: [{
					label: 'Sentiment Score / Sentence Index',
					data: sentimentScores,
					borderWidth: 1,
					borderColor: colors,
					backgroundColor: colors
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							min: -1,
							max: 1
						}
					}]
				}
			}
		});

		// add margin to the bottom of the line chart
		$("#graph-for-sentiment").css("margin-bottom", "20px");

		// change the button text to "Show Sentiment <i class='fa-solid fa-minus'></i>"
		$("#show-sentiment").html("Show Sentiment <i class='fa-solid fa-minus'></i>");

	}else{
		// remove the sentiment score from the beginning of the sentence
		$(".sentiment-score").remove();
		// remove the triangle from the beginning of the sentence
		$(".fa-caret-right").remove();

		// change the button text to "Show Sentiment <i class='fa-solid fa-plus'></i>"
		$("#show-sentiment").html("Show Sentiment <i class='fa-solid fa-plus'></i>");

		// remove the line chart
		$("#graph-for-sentiment").empty();

		// remove the margin from the bottom of the line chart
		$("#graph-for-sentiment").css("margin-bottom", "0px");
	}
});

$("#show-frequent-word").click(function() {
	// toggle the showFrequentWords variable
	showFrequentWords = !showFrequentWords;

	// if showFrequentWords is true, show the frequent words in a bar chart
	if (showFrequentWords) {
		// store the frequent words in an array
		let frequentWords = getMostFrequentWords(10)
		let labels = []
		let count = []

		for (let i = 0; i < frequentWords.length; i++) {
			labels.push(frequentWords[i]['word'])
			count.push(frequentWords[i]['count'])
		}

		let labelColor = []

		// create a gradient color array for the bar chart. The color is from red to yellow, depending on the index of the word in the frequentWords array.
		for (let i = 0; i < frequentWords.length; i++) {
			let color = "rgba(255, " + (255 - (255 / frequentWords.length) * i) + ", 0, 1)";
			labelColor.push(color);
		}

		// reverse the labelColor array so that the color is from yellow to red
		labelColor.reverse();
		

		// create a new canvas element inside #graph-for-frequent-word
		$("#graph-for-frequent-word").append("<canvas id='graph-frequent-word'></canvas>");

		// create a bar chart. The x-axis is the word, the y-axis is the count.
		var ctx = document.getElementById("graph-frequent-word").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [{
					label: 'Count / Word',
					data: count, 
					backgroundColor: labelColor
				}]
			}
		});

		// add margin to the bottom of the bar chart
		$("#graph-for-frequent-word").css("margin-bottom", "20px");

		// change the button text to "Show Frequent Words <i class='fa-solid fa-minus'></i>"
		$("#show-frequent-word").html("Show Most Frequent Words <i class='fa-solid fa-minus'></i>");

	}else{
		// remove the bar chart
		$("#graph-for-frequent-word").empty();

		// remove the height of the canvas
		$("#graph-for-frequent-word").css("height", "0px");

		// remove the margin from the bottom of the line chart
		$("#graph-for-frequent-word").css("margin-bottom", "0px");

		// change the button text to "Show Frequent Words <i class='fa-solid fa-plus'></i>"
		$("#show-frequent-word").html("Show Most Frequent Words <i class='fa-solid fa-plus'></i>");
	}


});

$("#show-line-by-line").click(function() {
	// toggle the showLineByLine variable
	showLineByLine = !showLineByLine;

	// if showLineByLine is true, show the line by line view
	if (showLineByLine) {
		// change the button class to btn-secondary
		$("#show-line-by-line").removeClass("btn-outline-secondary");
		$("#show-line-by-line").addClass("btn-secondary");
		
		// change sentence class to block
		$(".sentence").css("display", "block");

	}else{
		// change the button class to btn-outline-secondary
		$("#show-line-by-line").removeClass("btn-secondary");
		$("#show-line-by-line").addClass("btn-outline-secondary");

		// change sentence class to inline
		$(".sentence").css("display", "inline");
	}

});

// function to get a random color
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// function to set the maxHeight of the control-area div
function setHeight(){
	// get the outerHeight of the div.page-header
	var headerHeight = $(".page-header").outerHeight();
	// get the outerHeight of the .page-subtitle
	var subtitleHeight = $(".page-subtitle").outerHeight();

	// the div.control-area should be 100vh minus the height of the header and the subtitle
	var controlAreaHeight = 'calc(100vh - ' + (headerHeight + subtitleHeight + 80) + 'px)';

	console.log(controlAreaHeight)

	// set the maxHeight of the div#control-area
	$("#control-area").css("height", controlAreaHeight);
	$("#control-area").css("max-height", controlAreaHeight);

	// set the maxHeight of the div#main-content
	$("#main-content").css("height", controlAreaHeight);
	$("#main-content").css("max-height", controlAreaHeight);
}


// extract most frequent words from the full article text
function getMostFrequentWords(topN){
	let lowerCaseText = fullArticle.toLowerCase();
	let words = lowerCaseText.split(" ");
	let wordCounts = {};

	let stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']

	// remove punctuation from the words
	words = words.map(function(word) {
		return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	});

	// remove empty strings from the words array
	words = words.filter(function(word) {
		return word.length > 0;
	});

	// remove stop words from the words array
	words = words.filter(function(word) {
		return !stopwords.includes(word);
	});

	// count the number of times each word appears in the text
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		if (wordCounts[word] === undefined) {
			wordCounts[word] = 1;
		} else {
			wordCounts[word] += 1;
		}
	}

	// sort the words by the number of times they appear in the text
	let sortedWords = Object.keys(wordCounts).sort(function(a, b) {
		return wordCounts[b] - wordCounts[a];
	});

	// return the top N words and their counts
	return sortedWords.slice(0, topN).map(function(word) {
		return {
			word: word,
			count: wordCounts[word]
		};
	});
}

