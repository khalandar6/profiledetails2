
$(document).ready(function (){
$(document).ajaxStart(function(){
    // Show image container
    $("#loader").show();
  });
  
  $(document).ajaxComplete(function(){
    // Hide image container
    $("#loader").hide();
  });
var array1;
var array2;
$.get("https://reqres.in/api/users?delay=3", function(data, status){
    var array = data.data;
    //console.log(array);
    var newarray= array.map(obj => ({firstName: obj.first_name, lastName: obj.last_name, image:obj.avatar }));
   array1= newarray;
   array2= newarray;
    processdata(newarray);
    
  })
 
 function processdata(array){
     var array= array;
     console.log(array);
   
     const html = array.map(user=>{
       return  `
      <td> <p><img src="${user.image}" alt="" /></p>
      <p>FirstName: ${user.firstName}</p>
       <p>LastName:${user.lastName}</p>
      </td>`;

     }).join("");
     console.log(html);
     document.querySelector("#app").insertAdjacentHTML("afterbegin",html);

 }


$("#firstlink").click(function(){
//$("tr.1st").hide();
//$("tr.2nd").hide();
    //$(this).hide();
    array1.sort((a, b) => {
    let fa = a.firstName.toLowerCase(),
        fb = b.firstName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
const html = array1.map(user=>{
       return  `
      <td> <p><img src="${user.image}" alt="" /></p>
      <p>FirstName: ${user.firstName}</p>
       <p>LastName:${user.lastName}</p>
      </td>`;

     }).join("");
     console.log(html);
     $( "tr" ).replaceWith(html);
    // document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
   
  });


  $("#secondlink").click(function(){

    array2.sort((a, b) => {
    let fa = a.lastName.toLowerCase(),
        fb = b.lastName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
const html = array2.map(user=>{
       return  `
      <td> <p><img src="${user.image}" alt="" /></p>
      <p>FirstName: ${user.firstName}</p>
       <p>LastName:${user.lastName}</p>
      </td>`;

     }).join("");
     console.log(html);
     $("tr").replaceWith(html);
   // document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
   
  });
});