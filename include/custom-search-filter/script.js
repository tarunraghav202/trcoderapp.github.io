/* By Jamal Hassouni*/

document.getElementById("value").addEventListener("keyup", filterSearch);
function filterSearch(){
   var value,name,profile,i;
   value = document.getElementById('value').value.toUpperCase();
profile = document.getElementsByClassName('profile');
  for(i=0;profile.length;i++){
    name = profile[i].getElementsByClassName('name');
    if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
     // profile[i].style.display ="block";
     var to_hide_div = profile[i];
     $(to_hide_div).slideDown();
    
    }else{
     // profile[i].style.display = "none";
     var to_hide_div = profile[i];        
     $(to_hide_div).slideUp();
      
    }
  }  
}