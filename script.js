let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let cong = document.querySelector(".winner");

const congmsg =(winner)=>{
cong.classList.remove("winner");
cong.classList.add("winnerShow");
cong.innerText = `Congragulation Winner is ${winner}`
}
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]
let printVal = true;

 const resetGame =()=>{
    boxes.forEach((box)=>{
      box.innerText = "";
      box.disabled = false;
    }) 
    printVal = true;

 } 

boxes.forEach((box)=>
box.addEventListener("click",()=>{
  if(printVal === true){
    box.innerText = "O"
    printVal = false}
    else{
      box.innerText = "X"
      printVal = true;
      }
      box.disabled= true
      CheckWin();
    })
);

CheckWin =()=>{
for(let pattern of winPatterns){
   let arr1 = boxes[pattern[0]].innerText
   let arr2 = boxes[pattern[1]].innerText
   let arr3 = boxes[pattern[2]].innerText 

   if(arr1 != "" && arr2 != "" && arr3 != ""){
    if (arr1 === arr2 && arr2 === arr3){
      console.log("Winner")
      boxes.forEach((box)=>{         
        box.disabled = true;
        congmsg(arr1);

        console.log(arr1,arr2,arr3)
      }) 
      
    }
   }
  }
}
resetBtn.addEventListener("click",resetGame);

