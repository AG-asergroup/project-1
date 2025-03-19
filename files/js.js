let cards = document.getElementsByClassName('crd');
let currentindex = 0;
function showCards() {
    cards[currentindex].classList.remove('active');
    currentindex= (currentindex + 1) % cards.length;
    cards[currentindex].classList.add('active');
}
setInterval(showCards,4000);

let closeBtn = document.getElementById("closeSale");
closeBtn.onclick = function closeSale(){
    document.getElementById("sale").style.display= "none";
}