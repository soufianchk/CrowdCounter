let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let resetEl = document.getElementById('save-el');
function increment() {
  count++;
  document.getElementById('count-el').innerText = count;
}
function save(){
        let countSr = count + "-";
        saveEl.innerText += countSr;
        count = 0;
        countEl.innerText = count;

  }
  function reset(){
    count=0;
    countEl.innerText = count;
    saveEl.innerText = "Previous Entries: ";

  }
// Path: index.html

