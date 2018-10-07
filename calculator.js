function insert(num){
    document.form.textview.value=document.form.textview.value+num        // here document is object,and document.form.textview.value is accessing the value form doc  
  }
  function equal()// this function works when equal sign is pressed     // it calculate the expression(Press '=' for usage)
  {
var val=document.form.textview.value;
if(val)
{
    document.form.textview.value=eval(val)                           // here eval() is function in javaScript to evaluate the expression or arguments 
  }
  }

  function clean()                                                 // This function clear the textview all at once(Press 'C' for usage)
  {
    document.form.textview.value="" ;                             // assign the textview value to null
  }
  function ba()                                                  // this function clear the textview one by one 
  {
    var exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1);// it is dereasing the textview value one by one from index 0 length of the string (Press '<'  for usage)
  }
