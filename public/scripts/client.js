/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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


})