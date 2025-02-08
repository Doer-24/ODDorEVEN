let number = document.getElementById('number');
let add = document.getElementById('add');
let del = document.getElementById('delete');
let enter = document.getElementById('enter');
let num=[];

add.addEventListener('click', addnumber);
del.addEventListener('click', deletemumber);
enter.addEventListener('click', output);

function deletenumber() {
    num.pop(); 
    listnumber(); 
    
    document.getElementById("even").innerHTML = "";
    document.getElementById("odd").innerHTML = "";
}

function addnumber(){
    let numin = number.value.trim();
    if (numin !==""){
        num.push(Number(numin));
        number.value ="";
        listnumber()
    }
}

function listnumber(){
    document.getElementById("numlist").innerHTML = num.join (", ");
}

function output(){
    document.getElementById("even").innerHTML = "";
    document.getElementById("odd").innerHTML = "";
    for(let x = 0; x<num.length;x++){
        num[x];
        if (num[x]%2 == 0){
            document.getElementById("even").innerHTML += num[x] + " is a even number.<br>";
        }
        else{
            document.getElementById("odd").innerHTML += num[x] + " is a odd number.<br>";
        }
    }
}

//D☼