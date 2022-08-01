var champ = document.getElementById('task');
var add = document.getElementById('add');
var liste = document.getElementById('liste');

var list = [];
if(localStorage.getItem('liste')){
list = localStorage.getItem('liste').split(',');
for (let i = 0; i < list.length; i++) {
    newTache = '<li>'+ list[i] +
    '<span><i class="fa-solid fa-pen" id="edit"></i> <i class="fa-solid fa-circle-xmark" id="del"></i></span></li>';
    liste.innerHTML += newTache;
}
}

champ.value ='';
add.addEventListener('click',ajouter);
function ajouter(){
    if(champ.value!=''){
        newTache = '<li>'+ champ.value +'<span><i class="fa-solid fa-pen" id="edit"></i> <i class="fa-solid fa-circle-xmark" id="del"></i></span></li>';
        liste.innerHTML += newTache;
        i = list.length;
        list[i] = champ.value;
        localStorage.setItem('liste',list);
        champ.value='';
        }else{
            alert("please enter a task")
        }
    }
    
clear.addEventListener('click',effacer);
function effacer(){
    liste.innerHTML = '';
    localStorage.removeItem('liste');
    list =[];
    }