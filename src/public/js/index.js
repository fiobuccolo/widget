

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
        const planFrequency = document.getElementById("data-plan-frequency").value;
        const planCycles = document.getElementById("data-plan-billying-cycles").value;
        const planPaymentDay = document.getElementById("data-plan-payment-day").value;
      //   ---- customer attributes -----
        const customerEmail = document.getElementById("data-customer-email").value;
        const customerCif = document.getElementById("data-customer-cif").value;
        const customerName = document.getElementById("data-name").value;
        const customerSurname = document.getElementById("data-surname").value;
        const customerPrefix = document.getElementById("data-prefix").value;
        const customerPhone = document.getElementById("data-phone").value;
        const customerCountry = document.getElementById("data-country").value;
        const customerCity = document.getElementById("data-city").value;
        const customerPostalCode = document.getElementById("data-postal-code").value;
        const customerAddress = document.getElementById("data-address").value;
        const customerExternalId = document.getElementById("data-external-customer-id").value;
        let nonEditable = document.getElementById("editable").checked;
        // -------
        console.log(serviceName)
        console.log(`editable: ${nonEditable}`)
        const plan = new Plan(serviceName,planName,planDescription,planAmount);
        nuevoBotonUelz.setAttribute("data-service-name", serviceName)
        nuevoBotonUelz.setAttribute("data-plan-name", planName)
        nuevoBotonUelz.setAttribute("data-plan-description", planDescription)
        nuevoBotonUelz.setAttribute("data-plan-amount", planAmount)
        if (planType) {nuevoBotonUelz.setAttribute("data-plan-type", planType)}
            else{nuevoBotonUelz.setAttribute("data-plan-type", "Unique")};
        if(planFrequency) nuevoBotonUelz.setAttribute("data-plan-frequency", planFrequency)
        if(planCycles) nuevoBotonUelz.setAttribute("data-plan-billying-cycles", planCycles)
        if(planPaymentDay) nuevoBotonUelz.setAttribute("data-plan-payment-day", planPaymentDay)
        // customer atributes
        if(customerEmail) nuevoBotonUelz.setAttribute("data-customer-email", customerEmail)
        if(customerCif) nuevoBotonUelz.setAttribute("data-customer-cif", customerCif)
        if(customerName) nuevoBotonUelz.setAttribute("data-name", customerName)
        if(customerSurname) nuevoBotonUelz.setAttribute("data-surname", customerSurname)
        if(customerPrefix) nuevoBotonUelz.setAttribute("data-prefix", customerPrefix)
        if(customerPhone) nuevoBotonUelz.setAttribute("data-phone", customerPhone)
        if(customerCountry) nuevoBotonUelz.setAttribute("data-country", customerCountry)
        if(customerCity) nuevoBotonUelz.setAttribute("data-city", customerCity)
        if(customerPostalCode) nuevoBotonUelz.setAttribute("data-postal-code", customerPostalCode)
        if(customerAddress) nuevoBotonUelz.setAttribute("data-address", customerAddress)
        if(customerExternalId) nuevoBotonUelz.setAttribute("data-external-customer-idl", customerExternalId)
        
        if(nonEditable)
            {console.log("entre al if de remove-- deberia ser true")
            nuevoBotonUelz.setAttribute("data-customer-not-editable","")
            }else{
               console.log("entre al else de remove-- deberia ser false")
               nuevoBotonUelz.removeAttribute("data-customer-not-editable")
            }


         
       
       
       
           })
}

