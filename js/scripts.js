// Loading Screen 

window.onload = function() {
    setTimeout(function() {
      Snowflake.init(document.getElementById('snow'));
    }, 500);
  }

  function Redirect() 
  {  
      window.location="./html/chess.html"; 
  } 
  setTimeout('Redirect()', 3000);