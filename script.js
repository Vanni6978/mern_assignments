let total = 0;
let tip = 0;
let billsplit=0;



billSplit = () =>{
  let total= document.getElementById('total').value;
  let num_of_persons = document.getElementById('persons').value;
  let tip=document.getElementById('tip').value;
  billsplit=(parseInt(total)+parseInt(tip))/parseInt(num_of_persons);

  if(tip > 0 && num_of_persons>0){
      billsplit=(parseInt(total)+parseInt(tip))/parseInt(num_of_persons);
    
    document.getElementById('total').style.display = 'block';
    document.getElementById('tip').style.display = 'block';
    document.getElementById('billsplit').innerHTML ="Bill Split " + billsplit;

  }
  else {
    document.getElementById('total').style.display = 'block';
    document.getElementById('tip').style.display = 'block';
    document.getElementById('billsplit').innerHTML ="Bill Split " + billsplit;
  }

}