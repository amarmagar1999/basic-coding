
// Quiz programe
const Answers = ["Nepal","Wright Brothers","Galileo Galilei",7];
console.log(Answers[3]);

const list = document.querySelectorAll('.list');
const answerDisplay = document.querySelectorAll(".displayAnswer");

for(let i=0;i<list.length;i++) {
   list[i].addEventListener('click', () => {
      if(list[i].innerHTML === Answers[0]) {
         answerDisplay[0].style.visibility = "visible";
      }else if(list[i].innerHTML === Answers[1]) {
         answerDisplay[1].style.visibility = "visible";
      }else if(list[i].innerHTML === Answers[2]){
         answerDisplay[2].style.visibility = "visible";
      }else if(+list[i].innerHTML === Answers[3]){
         answerDisplay[3].style.visibility = "visible";
      }else {
         alert("Your Answer is Wrong😥");
      }
      console.log(list[i].innerHTML);
   });
}