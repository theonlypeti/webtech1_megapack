function vypocitaj(){
    let x=document.getElementById("x").value;
    let y=document.getElementById("y").value;

    if ( !((0 < x)&&(x < 10)) || !((0 < y)&&(y < 10))){ //boze preco nemozu ostatne jazyky implementovat chained comparsions
        alert("Zadané čísla sú mimo rozsahu!");
    }
    else{
        let popup = document.getElementById("modal");
        popup.style.display = "block";
        generate();
    }
}

function generate(){
    let x=document.getElementById("x").value;
    let y=document.getElementById("y").value;
    let tabulka=document.getElementById("tabulka");
    console.log(["X","Y"][y>x]);
    for(let i=0; i<=y; i++){
        let row = tabulka.insertRow();
        for(let j=0; j<=x; j++){
            let cell = row.insertCell();
            if(!(j*i)){
                //cell.appendChild(document.createTextNode(Math.max(i,j)||"x")); POZRITE SA NA TOTO ONO TO BOLO TAK KRASNE!!!!! PRECO TREBA TAM TO X= A Y=
                cell.appendChild(document.createTextNode(i==j?" ":((i>j?"Y":"X")+"="+Math.max(i,j))));
                cell.classList.add("titlecell");} //td cannot be inserted with inserCell tak to potom jbm
            else{
                cell.appendChild(document.createTextNode(i*j));
            }
        }
    }
}

function closeModal(){
    console.log("hi")
    document.getElementById("modal").style.display = "none";
    document.getElementById("tabulka").innerHTML="";
}