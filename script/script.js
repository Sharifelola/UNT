let hamburger = document.getElementById("hamburger");
let isNavOn = 0;
let navCloseButton = document.getElementById("navCloseButton");
hamburger.addEventListener("click", () => {
        displayHideMenu()
})
navCloseButton.addEventListener("click",()=>{
    hideHideMenu();
})


function displayHideMenu() {
    let hideNav = document.querySelector("header #hideNav");
    hideNav.style.display = "block";

}

function hideHideMenu() {
    let hideNav = document.querySelector("header #hideNav");
    hideNav.style.display = "none";
}


// ajoute le footer

let  footer = `
    <div class="foot">
        <div class="first">
            <h3>Université Des Nouvelles Technologies</h3>
            <p>Une institution dédiée à ,<br>l'excellence académique et <br> au développement personnel.</p>
        </div>
        <div class="second">
            <h3>Contact</h3>
            <p>Avenue de l'Indépendance</p>
            <p>01 BP 1091 Bobo-Dioulasso 01</p>
            <p>Bobo-Dioulasso</p>
            <p>Burkina Faso</p>
            <p><a href="mailto:info@Univ-UNT.com">info@Univ-UNT.com</a></p>
            <div class="image">
                <a href="Accueil.html"><img src="assets/img/y1 (6).svg" alt=""></a>
                <a href="Accueil.html"><img src="assets/img/y1 (2).svg" alt=""></a>
                <a href="Accueil.html"><img src="assets/img/y1 (3).svg" alt=""></a>
                <a href="Accueil.html"><img src="assets/img/y1 (4).svg" alt=""></a>
                <a href="Accueil.html"><img src="assets/img/y1 (5).svg" alt=""></a>
            </div>
        </div>
        <div class="end">
            <h3>Horaires</h3>
            <p>Lundi-Vendredi:8h00-18h00</p>
            <p>Samedi: 9h00-13h00</p>
        </div>
    </div>
    <div class="fin">
        <em><span class="copy">&copy</span> 2026 Universite Des Nouvelles Technologies.Tous droits réservés.</em>
    </div>
`;

// L'injection magique dans la balise <footer>
document.getElementById("myFooter").innerHTML = footer;