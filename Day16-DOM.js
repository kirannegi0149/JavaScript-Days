  //DOM(Document Object Model)
  function showTime()
  {
    let date = new Date();
    let h= date.getHours();
    let m= date.getMinutes();
    let s = date.getSeconds();
    var time = h + ":" + m + ":" + s +"";
  
  document.getElementById("display").innerText = time;
  setTimeout(showTime,1000);
} 
showTime();

function printValue(){
    const ele = document.querySelector("#year");
    const ele1 = ele.value;
    document.querySelector("#printValue").append(ele1);
}