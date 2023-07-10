function recordRating(element){
    // console.log( value.value);
    sessionStorage.setItem('rating', element.value);
    return element.value;
}


window.onload = function(){
    const selectedRating = document.querySelector('#final-rating');
    if(selectedRating){
    var passedRating = sessionStorage.getItem('rating');
    var selected = "You selected "+ passedRating +" out of 5"
    document.getElementById('final-rating').innerHTML= selected;
    }
    else{
        return;
    }
}
