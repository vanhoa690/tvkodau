const btn = document.getElementById("btn");

btn.addEventListener("click", () => removeAccents(tx.value));
 
function removeAccents(str) {
  let tx = document.getElementById("tx");
  let toggle = document.getElementById("toggle");
  let show = document.getElementById("show");
  show.innerHTML = '';
  let result = '';
  str = str.trim();
  let content = str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
 if (toggle.checked) {
     result = content.replace(/ +/g, "-");
  } else {
      result = content.replace(/ +/g, " ");
  }
  // let result = content.split(" ").join('-').toLowerCase();
  // console.log(result);
  show.innerHTML = result;
  // box.appendChild(show);
}
