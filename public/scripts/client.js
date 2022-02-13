/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Fake data taken from initial-tweets.json
$(document).ready(function() {

  // hide tweet err message on load
  $("div.error").hide();

  // escape function for handling XSS
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };



  const createTweetElement = function(tweet) {
    const $tweet = $(`
  <article class="tweet">
  <header>
  <div>
  <img src=${tweet['user'].avatars}>    
  <p>${tweet['user'].name}</p>
  </div>
  <p>${tweet['user'].handle}</p>
  </header>
  <p>${escape(tweet['content'].text)} </p>
  <footer>
  <p>${timeago.format(tweet['created_at'])}</p>  
  <div>
  <i class="fa-solid fa-flag"></i> 
  <i class="fa-solid fa-retweet"></i>  
  <i class="fa-solid fa-heart"></i>
  </div>
  </footer>
  </article`);
  
    return $tweet;
  
  };

  // function takes in an array of tweet objects and appends to the #tweets-container
  const renderTweets = function(tweets) {

    // loops through tweets
    for (const tweet of tweets) {

      // calls createTweetElement for each tweet
      let $tweet = createTweetElement(tweet);
      
      // takes return value and appends to tweets container
      $('.tweets').append($tweet);
    
    
    }
    
  };



  

  // event listener for submit tweet button
  $('.new-tweet > form').submit(function(event) {
    // prevent default behavior
    event.preventDefault();
  
    // form validation - check if tweet submitted is valid or not
    let $tweetText = $("#tweet-text").val();

    // hide tweet err message before submit
    $("new-tweet textarea").removeClass("error");
    $("div.error").hide();
     

    // if blank input
    if (!$tweetText) {
      $("div.error > p").html("Oh no! You must type something before submitting a tweet!");
      $("div.error").slideDown(175);
      $(".new-tweet textarea").addClass("error");
      return;
    }
   
    // if input is more than 140 characters
    if ($tweetText.length > 140) {
      $("div.error > p").html("Uh oh! Your tweet has surpassed the character limit.");
      $(".new-tweet textarea").addClass("error");
      $("div.error").slideDown(175);
      return;
    }


    // serialize data once form is validated from above
    let $formData = $(this).serialize();
    
    // post request that sends serialized data form $formData to server
  
    $.post("/tweets", $formData)
   
    // once post req succesful -> get submitted tweet from /tweets endpoint
    .then(function () {
    $.getJSON("/tweets")
      .then(function(data) {
        
        // take last tweet from /tweets
        let $lastTweet = data[data.length - 1];
        
        // take new tweet element and add to tweet container
        let $newTweet = createTweetElement($lastTweet);
        $('.tweets').prepend($newTweet);
      });
      

      });
    
      // clear form and reset char count
      $(this).children("textarea").val("");
      $(this).children('output').html("140");




  });

  // function for fetching tweets from /tweets

  const loadTweets = function() {
    $.getJSON('/tweets', function(data) {
      renderTweets(data);
    });
  };




  loadTweets();




});

