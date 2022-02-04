/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function () {

  const createTweetElement = function (tweetData) {
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

  }

// function takes in an array of tweet objects and appends to the #tweets-container






})