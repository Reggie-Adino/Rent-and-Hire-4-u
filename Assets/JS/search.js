const searchButton = document.querySelector('#search-btn');
const search= document.querySelector('#search');

searchButton.addEventListener("click", function(e){
    e.preventDefault();
    
    console.log(search.value);
    

})