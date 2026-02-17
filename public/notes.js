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

/* ---------- EVENTS ---------- */

logoutBtn.addEventListener("click", logout);
addBtn.addEventListener("click", addNote);

/* ---------- FUNCTIONS ---------- */

function logout() {
localStorage.removeItem("token");
window.location.href = "/index.html";
}

function addNote() {
const text = noteInput.value.trim();
if (!text) return alert("Add Some Text First 📝");


// create note element
const div = document.createElement("div");
div.className = "note";

const textSpan = document.createElement("div");
textSpan.className = "note-text";
textSpan.innerText = text;

const deleteBtn = document.createElement("button");
deleteBtn.className = "delete";
deleteBtn.innerText = "Delete";

// delete behavior (temporary UI only)
deleteBtn.addEventListener("click", () => {
    div.remove();
});

div.appendChild(textSpan);
div.appendChild(deleteBtn);
notesList.appendChild(div);

// clear input
noteInput.value = "";

}
