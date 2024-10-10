function submi(){
    var fuln=document.getElementById('fuln').value;
    var em=document.getElementById('em').value;
    

    var errorfuln= document.getElementById('errorfuln');
    var errorem= document.getElementById('errorem');

    var submits= document.getElementById('submits');


    errorfuln.innerText = '';
    errorem.innerText = '';

   if(!validatefuln(fuln)){
        errorfuln.innerText="Name must contain A-Z or a-z only";
        return;
        
    }
    
    if(!validateem(em)){
        errorem.innerText="email must contain @ only";
        return;
        
    }
    submits.innerText='Successfully submited!';

    


}   
function validatefuln(fuln) {
    var re = /^[A-Za-z]+$/;
    return re.test(fuln);
}
function validateem(em) {
    var re = /\S+@\S+\.\S+/;
    return re.test(em);
}

// 

let list1 = document.querySelector('.list1')

document.querySelector('#menu').onclick = () =>{
    list1.classList.toggle('active');
}



let serch = document.querySelector('.serch')

document.querySelector('#ser').onclick = () =>{
    serch.classList.toggle('active');
}
