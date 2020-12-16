var element = document.getElementById('gioca');
  element.addEventListener('click',
  function() {
    
    var nutente=Math.floor(Math.random() * 6 )+1;
    var ncomputer=Math.floor(Math.random() * 6 )+1;
   
    if(nutente>ncomputer){
        message="L'utente ha vinto";
       
    }
    else if(nutente<ncomputer){
        message="Il computer ha vinto";
    }
    else{
        message="Parità";
    }

     //caricamento dati
     document.getElementById("risultato").className='show box  m_top_10  pd_20';  
     document.getElementById("resultU").src = "img/"+nutente+".svg";
     document.getElementById("resultC").src = "img/"+ncomputer+".svg";
     document.getElementById("resultU").className='transition';
    document.getElementById("resultC").className='transition'; 
    document.getElementById("esito").innerHTML=
    '<span class="font_size_25 bold">'+message+'</span>'+
    '<span>'+ nutente+' - '+ncomputer+'</span>'
    ; 
     
}  
);   

   

