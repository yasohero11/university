   // start ---- > custom coursal
   var coursalItems = $(".coursal-item");
   var currentPage = 0;
   
    if($(".coursal-item.active").length != 0){
       for(let i  = 0 ; i < coursalItems.length; i++){
         element = coursalItems[i];
        if(!element.classList.contains("active")){
           element.style.display = 'none'
         }
         else
           currentPage = i;              
       }
     }else{
       for( element of coursalItems){
           element.style.display = 'none'
       }
       coursalItems[0].style.display = 'flex'
     }
   

   function next(){
     if(currentPage+1 == coursalItems.length){
       
       switchPages(currentPage , 0);
       currentPage = 0;
     }else{
       
       switchPages(currentPage,++currentPage)
       
     }
   }

   function back(){
     if(currentPage == 0){
       
       switchPages(0 , coursalItems.length-1);
       currentPage = coursalItems.length-1;
     }else  
       switchPages(currentPage,--currentPage)
   }

   function switchPages(currentIndex , nextIndex){
     let current_page = coursalItems[currentIndex];
     let next_page = coursalItems[nextIndex];
     current_page.style.display = 'none';
     current_page.classList.remove("active")
     next_page.style.display = 'flex';
     next_page.classList.add("active")
   }
/*
   document.getElementsByClassName("my-coursal")[0].addEventListener("mouseover" , ()=>{
         console.log("em")
   })
*/
  var coursalInterval = setInterval(()=>next(),3000)
  coursalInterval;

 $(".my-coursal").mouseenter(()=>{
   clearInterval(coursalInterval)
 })

 $(".my-coursal").mouseleave(()=>{
   coursalInterval = setInterval(()=>next(),3000)
   coursalInterval;
 })

 
  /*
   $(".item-image").hover(function(){
     clearInterval(coursalInterval)
   })
   */
   $("#goNext").click(()=> next())
   $("#goBack").click(()=> back())
   
   // end --- > custom coursal