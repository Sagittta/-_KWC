for (var row = 0; row<maze.length; row++) { 
    document.write("<TR>")  

    for (var col = 0; col<maze[row][0].length; col++) { 
      document.write("<TD STYLE='") 
      for (var cell = 0; cell<2; cell++) { 
        if (maze[row][cell][col]==1)  
          document.write(sides[cell]+": 2px black solid;") 
      } 
      if ((0==col) && (0!=row)) 
        document.write("border-left: 2px black solid;") 
      if (row==maze.length-1) 
        document.write("border-bottom: 2px black solid;") 
      if ((0==row) && (0==col))  
        document.write(" background-color:yellow;' class=start>start</TD>") 
      else 
       if ((row==maze.length-1) && (col==maze[row][0].length-1)) 
         document.write("' class=end>end</TD>") 
       else 
        document.write("'> </TD>") 
    } 
    document.write("</TR>") 
  } 
  var start = new Object 
  start.rows = 0 
  start.cols = 0 
  progress=true 
  document.onkeydown = moveIt; 
