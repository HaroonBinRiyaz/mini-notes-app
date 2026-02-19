/* ---------- AUTH CHECK ---------- */

const token = localStorage.getItem("token");

if (!token) {
window.location.href = "/index.html";
}


/* ---------- ELEMENTS ---------- */

const logoutBtn = document.querySelector(".logout");
const addBtn = document.querySelector(".add-btn");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");
const deleteBtn = document.querySelector(".delete");

/* ---------- EVENTS ---------- */

logoutBtn.addEventListener("click", logout);
addBtn.addEventListener("click", addNote);
notesList.addEventListener("click", deleteNote);

/* ---------- FUNCTIONS ---------- */

function logout() {
localStorage.removeItem("token");
window.location.href = "/index.html";
}

async function addNote() {
const text = noteInput.value.trim();
if (!text) return alert("Add some text first 📝");
const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ text })
    });

    const json = await res.json();

    if (res.ok) {
        noteInput.value = "";
        loadNotes(); // refresh list from DB
    }

}

//load notes
async function loadNotes() {
    const res = await fetch("/api/notes", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const json = await res.json();

    notesList.innerHTML = "";

    json.notes.forEach(n => {
        const div = document.createElement("div");
        div.className = "note";

        const textSpan = document.createElement("div");
        textSpan.className = "note-text";
        textSpan.innerText = n.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.innerText = "Delete";
        deleteBtn.dataset.id = n._id;


        div.appendChild(textSpan);
        div.appendChild(deleteBtn);
        notesList.appendChild(div);
    });
}

async function deleteNote(e) {

    if(!e.target.classList.contains("delete")) return;

    const id = e.target.dataset.id;

    const res = await fetch(`/api/notes/delete/${id}`,{
        method : "DELETE",
        headers: {
             "Authorization": `Bearer ${token}`
        }
    });
    const json = await res.json()

    console.log(res.status);
    console.log(json);

    if(res.ok){
        loadNotes()
    }
    else{
        alert(json.message);
    }
    
}

loadNotes();



