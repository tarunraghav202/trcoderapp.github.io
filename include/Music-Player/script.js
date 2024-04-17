const button = document.querySelector("#ply-btn");
  const icon = document.querySelector("#ply-btn > i");
  const audio = document.querySelector("audio");
  
  button.addEventListener("click", () => {
  if (audio.paused) {
  audio.volume = 1.0;
  audio.play();
  icon.classList.remove('fa-play');
  icon.classList.add('fa-pause');
  
  } else {
  audio.pause();
  icon.classList.remove('fa-pause');
  icon.classList.add('fa-play');
  }
  button.classList.add("fade");
  });
 
 
/* Please put your Google Drive API URL below*/
var GoogleDriveAPI = "https://www.googleapis.com/drive/v3/files?q=%" +Folder_ID+ "%27+in+parents&key=" +Api_Key;

/* this tells the page to wait until jQuery has loaded, so you can use the Ajax call */
$(document).ready(function(){
  $.ajax({
    url: GoogleDriveAPI,
    dataType: 'json',
      error: function(){
        alert('API FAILED to load data');
      },
    success:function(results){
    
 /*   
    results.files.forEach(function(element) {
    var data = "https://drive.google.com/uc?export=download&confirm=yTib&id=" +element.id;
    
   alert(element.id);
    }); // end of forEach
 */ 
    
 
   var list = results.files.map(function(item) {
   return "https://drive.google.com/uc?export=download&confirm=yTib&id=" +item.id;
   }).join(', ');
   
   // alert(list);
 
 
 // https://www.googleapis.com/drive/v3/files/{my file ID}?alt=media&key={my API key}
/*
 var list = results.files.map(function(item) {
 return "https://www.googleapis.com/drive/v3/files/" +item.id+ "?alt=media&key=" +Api_Key;
 }).join(', ');
 
  //alert(list);
 */
 
 
var audioSources = list.split(',');
let audioSource = audioSources[Math.floor(Math.random() * audioSources.length)];

var audio = document.getElementById("audio-player");// use the constructor in JavaScript, just easier that way
audio.addEventListener("load", function() {
  audio.play();
  // $("#playBtn").click();
}, true);
audio.src = audioSource;
audio.autoplay = true; // add this


  }  // end of success fn
     }) // end of Ajax call
   }) // end of $(document).ready() function
