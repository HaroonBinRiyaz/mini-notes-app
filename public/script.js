const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

registerForm.addEventListener("submit", async(e)=>{
    e.preventDefault();

    const data = new FormData(registerForm);//collects all the input values from html form and pack them in special object
    const body = Object.fromEntries(data.entries());// converts FormData into normal json like object

    const res = await fetch("/api/register", {
        method: "POST",
        headers: {"Content-type": "application/json"},//the data is in json. 
        body: JSON.stringify(body) //only JSON string travels over the network
    })

    const json = await res.json();
    document.getElementById("registerMsg").innerText = json.message;

    if (res.ok) {
        registerForm.reset();
    }

})

loginForm.addEventListener("submit", async(e)=>{
    e.preventDefault();

    const data = new FormData(loginForm);
    const body = Object.fromEntries(data.entries());

    const res = await fetch("/api/login", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(body)
    })

    const json = await res.json();
    document.getElementById("loginMsg").innerText = json.message;
    console.log("Token: ", json.token);

    if (res.ok && json.token) {
    localStorage.setItem("token", json.token);   // ⭐ store token
    console.log("Token saved");
    window.location.href = "./notes.html";

}
    
    
})