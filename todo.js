   
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(response){
       return response.json();
        
        
    })
    .then(function(data){
      
        for(var i=0;i<data.length;i++){
            if((`${data[i].completed}`)=="false"){
                document.getElementById("content").innerHTML+="<dl>"+`<input type="checkbox" class="check" onchange="chk()"/> ${data[i].title}`+"</dl>";
            
              }
            else{
                document.getElementById("content").innerHTML+="<dl>"+`<input type="checkbox" onclick="return false;" checked/> ${data[i].title}`+"</dl>"; 
                
            }                
        }   
       
    })
   
    .catch(function(error){
        console.log(error);
    });

function chk(){
    
    new Promise(function(resolve,reject){
    var check = Array.from(document.querySelectorAll(".check"));
    var count=0;
    for (var i = 0; i <check.length; i++) {
        if (check[i].checked) { 
            count++;     
        
           if(count==5){
             resolve();
            }
           
        }  
    }     
        reject("");
})

.then(function(){
    alert("Congrats 5 Tasks have been Successfully Completed");
})
.catch(function(error){
    console.log(error);
})
}