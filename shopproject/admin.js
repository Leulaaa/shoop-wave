function submi(){
    
    var em=document.getElementById('em').value;
    
    var es= document.getElementById('es');

    var eu= document.getElementById('eu').value;
   


    es.innerText = '';
    

   
    
    if(!validateem(em)){
        errorem.innerText="email must contain @ only";
        return;
        
    }
    es.innerText='Successfully submited!';
        
     
    if(validateeu(eu)){
        getElementById(es);
        
        
    }

    


}   
function validatefuln(eu) {
    var re = es ;
    return re.test(eu);
}
function validateem(em) {
    var re = /\S+@\S+\.\S+/;
    return re.test(em);
}