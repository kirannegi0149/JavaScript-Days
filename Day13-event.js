function change() 
{
    let ele= document.getElementsByTagName("h1");
    ele[0].innerHTML="JavaScript DOM Day1";
    ele[0].style.backgroundColor="red";

    let ele1= document.getElementsByTagName("p");
    ele1[0].innerText="New Param";

    let ele2=document.getElementsById("main");
    ele2.style.display="flex";
}