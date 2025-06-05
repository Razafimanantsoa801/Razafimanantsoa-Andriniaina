    function loisirs(numero){
    var image;
    if (numero==1) {
        image="basketball.jpg"
    }

    else {
        image="guitare.jpeg"
    }

    document.getElementById('monImage').src = image;
}