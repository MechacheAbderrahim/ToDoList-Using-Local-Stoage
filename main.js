var champ = document.getElementById('task');
var add = document.getElementById('add');
var liste = document.getElementById('liste');
var n = 0;
var list = [];

function chargementListe(){
    if(localStorage.getItem('liste')){
        list = localStorage.getItem('liste').split(',');
        n = list.length;
    
        nbtache(n);
        for (let i = 0; i < list.length; i++) {
            newTache = '<li>'+ list[i] +
            '<span><i class="fa-solid fa-pen" id="edit"></i> <i class="fa-solid fa-circle-xmark" id="del"></i></span></li>';
            liste.innerHTML += newTache;
        }
        }else {
            nbtache(0);
        }
}

add.addEventListener('click',ajouter);
function ajouter(){
    if(champ.value!=''){
        newTache = '<li>'+ champ.value +'<span><i class="fa-solid fa-pen" id="edit"></i> <i class="fa-solid fa-circle-xmark" id="del"></i></span></li>';
        liste.innerHTML += newTache;
        list.append(champ.value);
        localStorage.setItem('liste',list);
        champ.value='';
        n++;
        nbtache(n);
        }else{
            alert("please enter a task")
        }

    }
    
clear.addEventListener('click',effacer);
function effacer(){
    liste.innerHTML = '';
    localStorage.removeItem('liste');
    list =[];
    n = 0;
    nbtache(n);
    }

function init(){
    champ.value="";
    champ.focus();
    chargementListe();
}
window.onload = init();

function nbtache(x){
    document.title = 'TO DO LIST ('+x+')';
    if (x==0) {
        document.title = 'TO DO LIST';
    }
}

liste.addEventListener('click', taskAction);
function taskAction(event){
    var elt = event.target;
    var sp = elt.parentNode;
    var li = sp.parentNode;
    var t = li.innerText;
    
    // localStorage.removeItem('liste');
    if(elt.id=="del"){
        liste.removeChild(li);
        efface(list,t);
        localStorage.setItem('liste',list);
    }
}

function efface(lis,text){
    var i = 0;
        while( i < lis.length ){
            if( (lis[i]) == text ){
                while( i < (lis.length-1) ){
                    lis[i] = lis [i+1];
                    i = i+1;
                }
                lis.pop();
            }   
            i = i+1;        
        }
}