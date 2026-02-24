function verifica(){
    const eserc_radio= document.querySelectorAll(".multipla"); //Per risposta multipla
    const eserc_tend= document.querySelectorAll(".tend"); //Per risposta a tendina
    const eserc_check= document.querySelectorAll(".checkbox");
    const result= document.getElementById("result")

    let giuste =0;
    eserc_radio.forEach(gruppo=>{
        const giusta=gruppo.dataset.correct;
        const selez=gruppo.querySelector("input[type=radio]:checked");
        const radios = gruppo.querySelectorAll("input[type=radio]");
radios.forEach(r => r.disabled = true);
        const opzioneCorretta = gruppo.querySelector(`input[value="${giusta}"]`);
        if (selez ){
           if(selez.value === giusta){ 
            giuste++;
            selez.closest("label").classList.add("correct");
        }else{
            selez.closest("label").classList.add("wrong");
            opzioneCorretta.closest("label").classList.add("correct");
        }}else{
            opzioneCorretta.closest("label").classList.add("correct");
        }

    })

    eserc_tend.forEach(p=>{
        
        const select=p.querySelector("select");
        if(select.value===select.dataset.correct){
            giuste++;
            select.classList.add("correct");
        } else {
        select.classList.add("wrong");
    }
    select.disabled = true;})

 eserc_check.forEach(gruppo=>{
        const correct = gruppo.dataset.correct.split(","); 
    const selezionate = Array.from(gruppo.querySelectorAll("input[type=checkbox]:checked"))
                              .map(cb => cb.value); 
    const tutteGiuste = correct.length === selezionate.length &&
                        correct.every(val => selezionate.includes(val));
   
        if (tutteGiuste ){
            giuste++;
        }
        gruppo.querySelectorAll("input[type=checkbox]").forEach(cb => {
        const label = cb.parentElement;
         cb.disabled=true;
         if (correct.includes(cb.value)) {
            label.classList.add("correct");
            
        } else if (cb.checked) {
            label.classList.add("wrong");
            
        } 
        }
    )    

    })

   
    result.textContent='Risposte corrette: '+ giuste +' su '+(eserc_radio.length+eserc_tend.length+eserc_check.length);
    
}