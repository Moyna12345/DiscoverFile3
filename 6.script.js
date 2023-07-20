// Dynamic Field Creation With javascript

const addBtn = document.querySelector(".add");

const input = document.querySelector(".inp-group");



function removeInput(){
    this.parentElement.remove();
}



function addInput(){
    const name = document.createElement("input");
    name.type="text";
    name.placeholder = "Enter Your Name";

    const email = document.createElement("input");
    email.type="email";
    email.placeholder="Enter Your Email";

    const Email = document.createElement("input");
    Email.type="text";
    Email.placeholder = "Enter Your Name";

    const Input = document.createElement("input");
    Input.type="Input";
    Input.placeholder="Enter Your Email";

    const Name = document.createElement("input");
    Name.type="text";
    Name.placeholder = "Enter Your Name";

    const Your = document.createElement("input");
    Your.type="Your";
    Your.placeholder="Enter Your Email";



    const btn=document.createElement("a");
    btn.className = "delete";
    btn.innerHTML ="&times";

    btn.addEventListener("click", removeInput);

    const flex=document.createElement("div");
    flex.className ="flex"; 
    
    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(email);
   
    flex.appendChild(Email);
    flex.appendChild(Input);
    flex.appendChild(Name);
    flex.appendChild(Your);
    flex.appendChild(btn);
}


addBtn.addEventListener("click", addInput);