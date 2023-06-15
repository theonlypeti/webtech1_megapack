//uprimne vam poviem som uplne v roti a vyhoreny uz a ani neviem co sa tu deje, ale aspon som sa naucil ze co nebudem robit ked budem velky.. weby lol
//je to trocha funni 4h pred deadlineom najst breaking bugy
//nezajem bude ako bude 0b here i come

//no a to este aj na mobil spravit dakujem pekne este coby nie sak neviem ani div centrovat nie este na mobily optimalizovat notak ale kde sme to

const filter = document.querySelector("#filter") //input field
const section = document.querySelector("#section") //kde budu obrazky??
var sortable = Sortable.create(section);
var images = [] //a toto su zas... nejake obrazky

// ak v localstorage nie je nic pod polozkou filter, bude vracat null, ja chcem raddej prazdny string //uprimne nechapem naco to tu je
if(!localStorage.getItem("filter")) {
    localStorage.setItem("filter", "")
}

// nastavenie vyhľadavania z localStorage do filter elementu po refresh
filter.value = localStorage.getItem("filter")

// section ako vstupny parameter kvoli principu stateless
const addImageToSection = (image, section) => { //the fuck is a stateless
    const img = document.createElement("a") //why is everything const
    img.href = `./jsonimages/${image.filename}`;
    //img.setAttribute("data-lightbox","image-1");
    img.setAttribute("title",image.title + " | " + image.description);
    img.setAttribute("data-id",image.filename);
    img.setAttribute("rel","lightbox[gallery]");
    img.setAttribute("alt",image.description);
    //img.setAttribute("data-description",image.description);
    //img.classList = ["image"]

    const img2 = document.createElement("img") //why is everything const
    img2.src = `./jsonimages/${image.filename}`;
    img.innerHTML = img2.textContent;
    img.appendChild(img2) //the fuck is a Node and why do i have to clone it,edit: nvm dont clone this bitch
    //$("image").last().wrap(img.textContent);
    section.appendChild(img) //the fuck is a Node and why do i have to clone it,edit: nvm dont clone this bitch

}

filter.addEventListener("input", event => {
    localStorage.setItem("filter", event.target.value)
    section.innerHTML = ''
    images
        // vyfiltrovanie obrazkov v poli podľa ich nazvu "title"
        .filter(image => ((image.title.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1) || (image.description.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1))) //the fuck is this shit //okay zevraj toto je "if value in title" len jsovsky
        // vlozenie vyfiltrovanych obrazkov do section
        .forEach(image => addImageToSection(image, section))
})

// načítanie dát z json súboru
if(!localStorage.getItem("poradie")){
fetch("./images.json")
    .then(res => res.json())
    .then(data => {
        images.push(...data) //tri bodky su urcite cool vec ale ngl ani tutorialy mi nepomohli

        // toto je duplicitny kod, mozete spravit funkciu //kamo ja sa bojim hocičoho dotknut
        images
            // filter podľa localStorage
            .filter(image => (image.title.indexOf(localStorage.getItem("filter")) != -1) || (image.description.indexOf(localStorage.getItem("filter")) != -1))
            .forEach(image => addImageToSection(image, section))
    })}
else{
    console.log(localStorage.getItem("poradie"));
    var poradie = localStorage.getItem("poradie").split(",");
    fetch("./images.json")
        .then(res => res.json())
        .then(data => {
            images.push(...data)

            poradie.forEach(obrazok => {a = images.find(image => image.filename == obrazok);
                if(a!=undefined){
                    if ((a.title.indexOf(localStorage.getItem("filter")) != -1) || (a.description.indexOf(localStorage.getItem("filter")) != -1)){
                        addImageToSection(a,section);
                    }
                }
                })
    //images
        // filter podľa localStorage
        //.filter(image => (image.title.indexOf(localStorage.getItem("filter")) != -1) || (image.description.indexOf(localStorage.getItem("filter")) != -1))
        //.forEach(image => addImageToSection(image, section));
})}

/*sortable.delegate.after('drag:end', function (e) {
    console.log("dragged");
})*/
console.log(document.querySelector("#section"));
console.log($("#section"));

document.querySelector("#section").addEventListener('dragend', function () {
    //niekedy to neregistruje ked velmi rychle flickujete soo plz dont do that
    console.log("dragged and dropped");
    console.log(sortable.toArray())
    localStorage.setItem("poradie",sortable.toArray());
});
//zadanie filtra zresetuje poradie do povodneho. to neni bug to je *feature*