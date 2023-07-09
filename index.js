function recordRating(element){
    // console.log( value.value);
    localStorage.setItem('rating', element.value);
    return element.value;
}



function ifClicked(){
    const ratingElement =  document.getElementsByName('rating');
    console.log(ratingElement)
    document.addEventListener('click', function classClicked(event){
        console.log(event.target.name);
  
        ratingElement.classList.toggle('rating-clicked');

    
        
    });
    
}

window.onload = function(){
    const selectedRating = document.querySelector('#final-rating');
    if(selectedRating){
    var passedRating = localStorage.getItem('rating');
    var selected = "You selected "+ passedRating +" out of 5"
    document.getElementById('final-rating').innerHTML= selected;
    }
    else{
        return;
    }
}
