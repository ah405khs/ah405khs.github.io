// <![CDATA[
// 
      function startClock() { // internal clock//
	      var today=new Date();
	      var y=today.getFullYear();
	      var M=today.getMonth();
	      var d=today.getDate();
	      var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        m = checkTime(m);
  	    s = checkTime(s);
  	    M = checkDate(M);
  	    M = checkTime(M);
    
    	  if(d<10){
  	        d="0"+d;
  	    }
    	  var time=y+"-"+M+"-"+d+" "+leadingSpaces(h, 4)+":"+m+":"+s;
        document.getElementById('Display_clock').innerHTML = time;
  	     var t = setTimeout(function(){startClock()},500);
      }
        
    function leadingSpaces(n, digits) {
      var space = '';
      n = n.toString();
    
      if (n.length < digits) {
        for (var i = 0; i < digits - n.length; i++)
          space += '&nbsp;';
      }
      return space + n;
    }

    function checkTime(i) {
        if (i<10) {i = "0" + i};  // add zero in front of numbers < 10 
    	return i;
    }

    function checkDate(i) {
 	    i = i+1 ;  // to adjust real month
   	    return i;
    }
    
    
// ]]>
