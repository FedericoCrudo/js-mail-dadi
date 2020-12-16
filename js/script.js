var element = document.getElementById('gioca');
  element.addEventListener('click',
  function() {
    
    var nutente=Math.floor(Math.random() * (6 )+1);
    var ncomputer=Math.floor(Math.random() * (6 )+1);
    var message="";
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
    document.getElementById("nutente").innerHTML=nome;  
    document.getElementById("offerta").innerHTML=offerta;  
  
    }
  
    }    
);   

   

