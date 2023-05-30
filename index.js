let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let saveCount = 1
let saveTotal = 0
let base = "Equation"

function increment() {
    if(saveCount <= 5){
        count += 1
        countEl.textContent = count    
    }    
}

function save() {
    if(saveCount < 5){
        let countStr = count + " + "
        saveEl.textContent += countStr
        saveTotal += count
        countEl.textContent = 0
        count = 0
        saveCount++
           
    }   
    else if(saveCount == 5){
        saveTotal += count 
        let countStr = count + " = " + saveTotal
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
        saveCount++
    }
    else{
        countEl.textContent = 0
        count = 0        
    }
}
function clear() {
    saveCount = 1
    saveTotal = base
    saveEl.document.getElementById("save-el") = saveTotal
}
