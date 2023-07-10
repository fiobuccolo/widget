

class Plan {
    constructor(serviceName,planName,planDescription,planAmount){
    this.serviceName = serviceName;
    this.planName = planName;
    this.planAmount = parseInt(planAmount);
    this.planDescription = planDescription
    }}

class User{

}


 // 1) Funcion para Alta de planes
 const ServiceCreation = document.getElementById("ServiceCreation");
 ServiceCreation.addEventListener("click",()=>{
    completarPlan();
    console.log("hola")
 });


 const completarPlan =()=>{
    // ---- AGREGAR NODOS -----
    console.log("hola2")
   const ServiceForm = document.getElementById("ServiceForm");
    //LIMPIAR HTML
       // EVENTO SUBMIT
       ServiceForm.addEventListener("submit", ()=>{

         //Evito el comportamiento por default de formulario, de recargar la pagina
         event.preventDefault();
         


        const serviceName = document.getElementById("serviceName").value;
        const planName = document.getElementById("data-plan-name").value;
        const planDescription = document.getElementById("data-plan-description").value;
        const planType = document.getElementById("data-plan-type").value;
        console.log(`tipo: ${planType}`)  
        const planAmount = document.getElementById("data-plan-amount").value;
        const planFrecuency = document.getElementById("data-plan-frecuency").value;
        const planCycles = document.getElementById("data-plan-billying-cycles").value;
        const planPaymentDay = document.getElementById("data-plan-payment-day").value;
        let editable = document.getElementById("editable").checked;
        console.log(serviceName)
        console.log(`editable: ${editable}`)
        const plan = new Plan(serviceName,planName,planDescription,planAmount);
        nuevoBotonUelz.setAttribute("data-service-name", serviceName)
        nuevoBotonUelz.setAttribute("data-plan-name", planName)
        nuevoBotonUelz.setAttribute("data-plan-description", planDescription)
        nuevoBotonUelz.setAttribute("data-plan-amount", planAmount)
        if (planType) {nuevoBotonUelz.setAttribute("data-plan-type", planType)}
            else{nuevoBotonUelz.setAttribute("data-plan-type", "unique")};
        if(planFrecuency) nuevoBotonUelz.setAttribute("data-plan-frecuency", planFrecuency)
        if(planCycles) nuevoBotonUelz.setAttribute("data-plan-frecuency", planCycles)
        if(planPaymentDay) nuevoBotonUelz.setAttribute("data-plan-frecuency", planPaymentDay)
        nuevoBotonUelz.setAttribute("data-customer-not-editable",editable)


         
       
       
       
           })
}

