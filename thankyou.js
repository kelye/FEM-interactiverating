window.onload = function(){
    var passedRating = localStorage.getItem('rating');

    var selected = "You selected "+ passedRating +" out of 5"
    document.getElementById('final-rating').innerHTML= selected;
}

