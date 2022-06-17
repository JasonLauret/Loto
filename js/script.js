const baliseGrille49 = document.getElementById("grille49");
const baliseGrille10 = document.getElementById("grille10");
const baliseFlash = document.getElementById("flash");

for(let i = 1; i < 50; i++){
    //baliseGrille49.innerHTML = baliseGrille49.innerHTML + '<span class="numero">'+ i +'</span>';
    baliseGrille49.innerHTML = baliseGrille49.innerHTML + `<span class="numero">${i}</span>`;
    //baliseGrille49.innerHTML += `<span class="numero">${i}</span>`; // += concatène avec la valeur de gauche
}

for(let i = 1; i < 11; i++){
    baliseGrille10.innerHTML = baliseGrille10.innerHTML + `<span class="numero1">${i}</span>`;
}

baliseFlash.addEventListener("click",function(){
        
    let baliseActive = document.querySelectorAll("span.active, span.activered");
    console.log(baliseActive);

    baliseActive.forEach(function(baliseActive){
        baliseActive.classList.remove("active", "activered");
    })
    
    let tabGrille = [];
    for(let i = 0; i < 5;i++){
        let numero = Math.floor(Math.random()*49 + 1);
        if(tabGrille.includes(numero)){
            i--; // i = i -1
        }else{
            tabGrille.push(numero);
        }
    } 
    let chance =  Math.floor(Math.random()*10 + 1);

    for(let i = 0; i < 5;i++){
        let css = `#grille49 span:nth-child(${tabGrille[i]})`
        let spanActif = document.querySelector(css);
        setTimeout(function(){
            spanActif.classList.add("active");
        },300*i);
    }

    let css = `#grille10 span:nth-child(${chance})`
    let spanActif = document.querySelector(css);
    setTimeout(function(){
        spanActif.classList.add("activered");
    },1400);
    console.table(tabGrille);
    console.log(spanActif);
    
});