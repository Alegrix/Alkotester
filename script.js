alert ('Вы проходите алкотест');
 let i = prompt ('Введите число')
 let sum = prompt ('Введите это число +1')
if (sum == i+1)
 {
  let x = Math.floor(Math.random() * 11);
  let y = Math.floor(Math.random() * 11);
  let choice = Math.floor(Math.random() * 4);
   if (choice==1) 
    {
    let choice1 = prompt(`x=${x}` + ` y=${y}` + '  x+y=?');
     if (choice1==x+y)
     {
       alert('Наливай ещё '+`x+y=${x+y}`)
     }
     else
     {
       alert ('Хватит бухать')
     }
    }
   if (choice==2) 
    {
    let choice2 = prompt(`x=${x}` + ` y=${y}` + '  x-y=?');
     if (choice2==x-y)
        {
          alert('Наливай ещё '+`x-y=${x-y}`)
        }
     else
        {
         alert ('Хватит бухать')
        }
    }
   if (choice==3) 
    {
    let choice3 = prompt(`x=${x}` + ` y=${y}` + '  x*y=?');
     if (choice3==x*y)
       {
         alert('Наливай ещё '+`x*y=${x*y}`)
       }
     else
       {
         alert ('Хватит бухать')
       }
    } 
   else 
   {
     if (y!=0) 
     {
      let choice4 = prompt(`x=${x}` + ` y=${y}` + '  x/y=?');
      if (choice4==x/y)
       {
         alert('Наливай ещё  '+`x/y=${x/y}`)
       }
      else
       {
        alert ('Хватит бухать')
       }
     }
     else
     {
       alert ('На ноль делить нельзя') 
     }
   }
 }
else
 {
  alert ('Хватит бухать')
 }