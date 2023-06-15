function validateEverything(){
    if(logAge()){
        if (validateEmail()){
            if(document.getElementById("mesto").value.length != 0){
                console.log("odoslané!");
                let formular = document.getElementById("formular");
                console.log(formular)
                formular.submit()
                return;
            }
            else{
                document.getElementById("mestotext").style.color = "#ff0000";
                //alert("Bunka \"Mesto\" je požadované!");
            }
        }
    }
    console.log("Bad")
}

function logAge() {
    let narod = new Date(document.getElementById("datum").value);
    //calculate month difference from current date in time
    let month_diff = Date.now() - narod.getTime();

    //convert the calculated difference in date format
    let age_dt = new Date(month_diff);

    //extract year from date
    let year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    let age = Math.abs(year - 1970);

    //display the calculated age
    console.log(document.getElementById("age").value)
    console.log("Age of the date entered: " + age + " years");
    if (document.getElementById("age").value.valueOf() === age){
        console.log("Good!");
        return 1;
    } else {
        alert("Dátum narodenia a vek sa nezhodujú!")
        console.log("bad!");
        return 0;
    }

}

function validateEmail(){
    let adresa = document.getElementById("email");
    if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{3,}@(?:[a-zA-Z0-9-]+\.){1,}(?:[a-zA-Z0-9-]{2,4})$/.test(adresa.value))){
        alert("Invalidná e-mailová adresa!");
        return 0;
    }
    else{
        console.log("nice")
        return 1;
    }

}

let ParentList=document.getElementById("parent");
let ChildList=document.getElementById("child");
let ChildChildList=document.getElementById("childchild");
let zoznam=[]
let zoznam2 = []

zoznam["a"]=["aa", "ab"]
zoznam["b"]=["ba","bb"]

zoznam2["aa"]=["aaa", "aab"]
zoznam2["ab"]=["aba","abb"]
zoznam2["ba"]=["baa","bab"]
zoznam2["bb"]=["bba","bbb"]

zoznam["a"].forEach(function(item){ ChildList.options[ChildList.options.length]= new Option(item); });
zoznam2["aa"].forEach(function(item){ ChildChildList.options[ChildChildList.options.length]= new Option(item); });


ParentList.onchange = function() {
    let thisArr = zoznam[ParentList.value];
    ChildList.options.length = 0
    thisArr.forEach(function (item) {
        ChildList.options[ChildList.options.length] = new Option(item);
    });

    let thisArr2 = zoznam2[ChildList.value];
    ChildChildList.options.length = 0
    thisArr2.forEach(function (item) {
        ChildChildList.options[ChildChildList.options.length] = new Option(item);
    });
}

ChildList.onchange = function() {
    let thisArr2 = zoznam2[ChildList.value];
    ChildChildList.options.length = 0
    thisArr2.forEach(function(item){ ChildChildList.options[ChildChildList.options.length]= new Option(item); });
}

let webtechQ=document.getElementsByClassName("webtechquestion");

let webtechNie=document.getElementById("Nie");

webtechNie.onchange=function () {
        webtechQ[0].style.visibility = 'hidden';
        webtechQ[1].style.visibility = 'hidden';
}

let webtechAno=document.getElementById("Ano");

webtechAno.onchange=function () {
        webtechQ[0].style.visibility = 'visible';
        webtechQ[1].style.visibility = 'visible';

}

let OtherCheckbox=document.getElementById("othercheckbox");
OtherCheckbox.onchange=function () {
    let OtherAnimal=document.getElementById("otherAnimal");
    if(OtherCheckbox.value){
    OtherAnimal.style.visibility="visible";
    }
    else
    {
        OtherAnimal.style.visibility="hidden";
    }
}
document.getElementById("mesto").oninput=function(ev){document.getElementById("mestotext").textContent = ev.currentTarget.value.length + "/30"}
