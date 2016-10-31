$(document).ready(function(){
  
  var number="";
  var oldNumber="";
  var show="";
  var operator="";
  var resultdiv = $("#result");
  var processdiv=$("#process");
  var done = false;
  var negative =false;
                    
  
  $(".numbers").click(function(){
    if (done==true){
      $("#rc").click();
    }
    number+=$(this).text();
    // operator = "";
    show = show.concat("",$(this).text());
    resultdiv.text(number);
    processdiv.text(show);
    
    
  });
  $(".operators").click(function(){
    if(operator.length>0){
      return;
    }else{
    operator=$(this).text();
      console.log(operator);
      console.log(done);
    oldNumber=number;
    number = "";
    show = show.concat("",operator);
    processdiv.text(show);
    }
  });
  $("#equal").click(function(){
    console.log(done);
    console.log(operator);
    done=true;

    if (operator=="+"){
      number = (parseFloat(oldNumber,10) + parseFloat(number,10)).toString(10);
      show = show.concat("=",number);
      resultdiv.text(number);
      processdiv.text(show);
    }else if (operator=="-"){
      number = (parseFloat(oldNumber,10) - parseFloat(number,10)).toString(10);
      show = show.concat("=",number);
       resultdiv.text(number);
        processdiv.text(show);
    }else if (operator=="*"){
      number = (parseFloat(oldNumber,10) * parseFloat(number,10)).toString(10);
      show = show.concat("=",number);
       resultdiv.text(number);
        processdiv.text(show);
    }else if (operator=="/"){
      number = (parseFloat(oldNumber,10) / parseFloat(number,10)).toString(10);
      show = show.concat("=",number);
      resultdiv.text(number);
        processdiv.text(show);
    }
    $("#rc").click(function(){
      number="";
      oldNumber="";
      show="";
      operator="";
      resultdiv.text("0");
      processdiv.text("0");
      done=false;
    });
    $("#ce").click(function(){
      number=number.slice(0,-1);
      console.log(number);
      show = show.slice(0,-1);
      console.log(show);
      resultdiv.text("0");
      if (show.length>0){
        processdiv.text(show);
      }else{
        processdiv.text("0");
      }
        

    });
     $("#decimal").click(function(){
      if (number===""){
        number="0."; 
        show = "0.";
      }else{
        number += ".";
        show += ".";
      }
       console.log(number);
    resultdiv.text(number);
    processdiv.text(show);
    });
    
    $("#negative").click(function(){
      if (negative){
        number="-"+number;
        show = "-"+number;
        negative= true;
        resultdiv.text(number);
        processdiv.text(show);
      }else{
        number="-"+number;
        negative= false;
      }
       console.log(number);
    resultdiv.text(number);
    processdiv.text(show);
    });
    
  });
  
  
  
  
});