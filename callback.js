console.log("callback function")

// callback function


function myfync(){
    console.log("hellow")
}



function my(a){
     a()
}

my(myfync)

let arr = [1,2,3,4]

 function fil(ele){
    return ele > 2
 }

 let x = arr.filter((fil))

 console.log(x)


 // function returning function






 let r = 1

 function may(){

    console.log(r)
    
  
 }


  
 
 

 may()


 function m(){
   function hellow(){
      console.log("hellow")
   }
 return hellow

 }
 let ans = m()

ans()

// ca


let array = [1,2,3,4]

function fore(a,b){
   return a,b
}

  
  console.log(array.map((fore)))


// console.log(mo)

// console.log(array)