let myleads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulel = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    mylead.push(inputEl.value)
    console.log(myleads)
})    

for (let i = 0; i < myleads.length; i++) {
    ulel.innerHTML += "<li>" + myLeads[i] + "</li>"
}