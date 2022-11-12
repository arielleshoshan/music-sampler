// assign variables
let infoDivs = document.querySelectorAll('.info-div');
let albumCovers = document.querySelectorAll('.album-cover');
let players = document.querySelectorAll('audio');

// function to hide all divs
function hideAll() {
  infoDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when any album is clicked, make the suitable div appear
albumCovers.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

// to not break audio

players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });


    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'innerspeaker':
        document.querySelector('#innerspeakerStuff')
        	.style.display = 'block';
          players.forEach(function(el) {
                  el.pause();
                  el.currentTime = 0;
              });
        break;
      case 'lonerism':
        document.querySelector('#lonerismStuff')
        	.style.display = 'block';
          players.forEach(function(el) {
                  el.pause();
                  el.currentTime = 0;
              });
        break;
      case 'currents':
        document.querySelector('#currentsStuff')
        .style.display = 'block';
        players.forEach(function(el) {
                el.pause();
                el.currentTime = 0;
            });
        break;
      case 'slowrush':
        document.querySelector('#slowrushStuff')
        .style.display = 'block';
        players.forEach(function(el) {
                el.pause();
                el.currentTime = 0;
            });
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()
