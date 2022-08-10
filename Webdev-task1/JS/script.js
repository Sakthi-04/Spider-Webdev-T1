const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const startbtn = document.getElementById('startbtn');
const btn1 = document.getElementById('player1button');
const btn2= document.getElementById('player2button');
const table = document.getElementById('table1');
const p1wins = document.getElementById('player1wins');
const p2wins = document.getElementById('player2wins');
const array1=[0,0,0,0,0];
const array2=[0,0,0,0,0];
function player1() {
    num2.style.display='none';
    num1.style.display='block';
    var randomNum = Math.floor(Math.random() * 5 + 1);
    num1.textContent = randomNum;
    index=randomNum-1;
    array1[index]+=1;
    const image = new Image();
    table.rows[randomNum].cells[1].innerHTML=""
    if (array1[index]===1){image.src= 'images/head.png';}
    else if (array1[index]===2){image.src= 'images/body.png';}
    else if (array1[index]===3){image.src= 'images/legs.png';}
    else if (array1[index]===4){image.src= 'images/hands.png';}
    else if (array1[index]===5){image.src= 'images/gun.png';}
    else if (array1[index]===6){image.src= 'images/gun-1b.png';}
    else if (array1[index]===7){image.src= 'images/gun-2b.png';}
    else if (array1[index]>=8){image.src= 'images/gun-3b.png';}
    table.rows[randomNum].cells[1].appendChild(image);


    btn2.style.display='block';
    btn1.style.display='none';
    shoot();
    var count=0
    if (array1[0]>=8){var count=count+1};
    if (array1[1]>=8){var count=count+1};
    if (array1[2]>=8){var count=count+1};
    if (array1[3]>=8){var count=count+1};
    if (array1[4]>=8){var count=count+1};
    if (count===5){
        btn2.style.display='none';
        btn1.style.display='none';
          p1wins.style.display='block';
        p1wins.style.display=alert("Player 1 wins");
        num1.style.display='none';
        num2.style.display='none';
    }}
function player2() {
    num1.style.display='none';
    num2.style.display='block';
    var randomNum = Math.floor(Math.random() * 5 + 1);
    num2.textContent = randomNum;
    index=randomNum-1;
    array2[index]+=1;
    const image = new Image();
    table.rows[randomNum].cells[2].innerHTML=""
    if (array2[index]===1){image.src= 'images/head.png';}
    else if (array2[index]===2){image.src= 'images/body.png';}
    else if (array2[index]===3){image.src= 'images/legs.png';}
    else if (array2[index]===4){image.src= 'images/hands.png';}
    else if (array2[index]===5){image.src= 'images/gun.png';}
    else if (array2[index]===6){image.src= 'images/gun-1b.png';}
    else if (array2[index]===7){image.src= 'images/gun-2b.png';}
    else if (array2[index]>=8){image.src= 'images/gun-3b.png';}
    table.rows[randomNum].cells[2].appendChild(image);
    btn1.style.display='block';
    btn2.style.display='none';
    shoot();
    var count=0
    if (array2[0]>=8){var count=count+1};
    if (array2[1]>=8){var count=count+1};
    if (array2[2]>=8){var count=count+1};
    if (array2[3]>=8){var count=count+1};
    if (array2[4]>=8){var count=count+1};
    if (count===5){
        btn2.style.display='none';
        btn1.style.display='none';
        p2wins.style.display='block';
        p2wins.style.display=alert("Player 2 wins");
        num1.style.display='none';
        num2.style.display='none';
    }}
    function shoot(){
      if (array1[index]>=5){
          var nums1 = prompt("Enter the box to shoot your opponent");
          if(array2[nums1-1]>=4){

            array2[nums1-1]=0;
            table.rows[nums1].cells[2].innerHTML=""
          }
       }
       else if (array2[index]>=5) {
         var nums2 = prompt("Enter the box to shoot your opponent");
         if(array1[nums2-1]>=4){

           array1[nums2-1]=0;
           table.rows[nums2].cells[1].innerHTML=""
         }
       }
    }

startbtn.addEventListener('click',function(){btn1.style.display='block'},onclick=function(){startbtn.style.display='none'});

btn1.addEventListener('click',player1);
btn2.addEventListener('click',player2);
