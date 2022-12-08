let myleads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulel = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    mylead.push(inputEl.value)
    renderLeads()
})    


function renderLeads() {
let listItems = ""
for (let i = 0; i < myleads.length; i++) {
    listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
}
ulel.innerHTML = listItems
}

for (let i = 0; i ,myLeads.length; i++) {
    listItems += "<ul>" + myLeads[i] + "</ul>"
}