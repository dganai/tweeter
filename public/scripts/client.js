/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//const { render } = require("express/lib/response");



// Fake data taken from initial-tweets.json
$(document).ready(function () {

const createTweetElement = function (tweet) {
  const $tweet = $(`
  <article class="tweet">
  <header>
  <div>
  <img src=${tweet['user'].avatars}>    
  <p>${tweet['user'].name}</p>
  </div>
  <p>${tweet['user'].handle}</p>
  </header>
  <p>${tweet['content'].text} </p>
  <footer>
  <p>${timeago.format(tweet['created_at'])}</p>  
  <div>
  <i class="fa-solid fa-flag"></i> 
  <i class="fa-solid fa-retweet"></i>  
  <i class="fa-solid fa-heart"></i>
  </div>
  </footer>
  </article`)
  
  return $tweet;
  
};

// function takes in an array of tweet objects and appends to the #tweets-container
const renderTweets = function(tweets) {

  // loops through tweets
  for (const tweet of tweets) {

      // calls createTweetElement for each tweet
      let $tweet = createTweetElement(tweet);
      
      // takes return value and appends to tweets container
      $('.tweets-container').append($tweet);
    
    
    }
    
}

// event listener for submit tweet button
$('.new-tweet > form').submit(function(event) {
  
  // prevent default behavior
  event.preventDefault();

  // serialize data
  let $formData = $(this).serialize();

  // post request that sends serialized data form $formData to server
  $.post("/tweets", $formData);

});

// function for fetching tweets from /tweets

const loadTweets = function () {
  $.getJSON('/tweets', function(data) {
    renderTweets(data)
  })
}




 loadTweets();




})

