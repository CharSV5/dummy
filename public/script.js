// $(document).ready(function(){
//
// });

function clickMe() {
  fetch('/getdata')
    .then(response => response.json())
    .then(json => {
      console.log(json)
    });
}