let modalBox = document.getElementById('modal-box');
let closeicon = document.querySelector('.close-icon');



function showModal(){
    setTimeout(() => {
        modalBox.style.display = 'block'
    }, 3000);
}

// function closeModal(){
//     modalBox.style.display = 'none'
// }

closeicon.onclick = function(){
    modalBox.style.display = 'none'
}