$(function(){
  // Variables
  var defil=true;  // Utile pour stopper le defilement automatique
  var largeur_miniature = 310; //Largeur des miniature (marge comprise)
  var largeur_big = 910; //Largeur des grandes images
  var active_next = true; //Rend synchrone le slider
  var active_back = true; // Rend synchrone le slider
  
  //mettre premier li a la fin
  var firstImg = $("#slideBoutique .overflowPopin ul li:first-child img").attr("src");
  $("#slideBoutique .overflowPopin ul").append("<li><img src=\""+firstImg+"\"></li>");
  
  function maj(){
    var max = -(($('#slideBoutique .overflow ul > li').length*largeur_miniature)-(3*largeur_miniature));
	
	if(parseInt($("#slideBoutique .overflow").css("margin-left"))==0)
	{
		$("#slideBoutique .precedent").css("display","none");
	} else {
		$("#slideBoutique .precedent").css("display","block");
	}
	
	if(parseInt($("#slideBoutique .overflow").css("margin-left"))<max)
	{
		$("#slideBoutique .suivant").css("display","none");
	} else {
		$("#slideBoutique .suivant").css("display","block");
	}
  }
  
  //Ouverture et Fermeture de la popin au bon emplacement
  function showPopin(pos)
  {
     var marge=-((pos*largeur_big)-largeur_big);
     $("#slideBoutique .overflowPopin").css("margin-left",marge);
     $("#slideBoutique #masque").fadeIn(100); 
    $("#slideBoutique #masque2").fadeIn(100); 
    $("#slideBoutique #popin").slideDown(100); 
  }
  $("#slideBoutique #masque").click(function(){
     $("#slideBoutique #popin").slideUp(100);
    $("#slideBoutique #masque").fadeOut(100);
    $("#slideBoutique #masque2").fadeOut(100);
  });
  $("#slideBoutique .close").click(function(){
    $("#slideBoutique #popin").slideUp(100);
    $("#slideBoutique #masque").fadeOut(100);
    $("#slideBoutique #masque2").fadeOut(100);
  });
  
  $("#slideBoutique .overflow li img").click(function(){
    defil=false;
    var pos = $(this).parent("li").attr('class');
    pos = pos.substr(2);
    showPopin(pos);
  });

  //Fonction next et back du petit slider
  function next(){
	if(active_next == true)
	{
		active_next = false;
		
		 var max = -(($('#slideBoutique .overflow ul > li').length*largeur_miniature)-(2.5*largeur_miniature));
    var max2 = -(($('#slideBoutique .overflow ul > li').length*largeur_miniature)-(3*largeur_miniature));
		 
		if(parseInt($("#slideBoutique .overflow").css("margin-left"))>max)
		{
        if(parseInt($("#slideBoutique .overflow").css("margin-left"))>max2)
		    {
		      $("#slideBoutique .overflow").animate({
		    	marginLeft: "-="+largeur_miniature+"px"
		      }, 500, function(){ active_next = true; maj();} );
        } else {
            $("#slideBoutique .overflow").animate({
		    	marginLeft: "-="+(largeur_miniature/2)+"px"
		      }, 500, function(){ active_next = true; maj();} );
        }
		} else {
		   $("#slideBoutique .overflow").animate({
			marginLeft: "0px"
		  }, 500, function(){ active_next = true; maj();});
		}
	
	}
    
  }
  
  function back(){
	if(active_back == true)
	{
    
		active_back = false;
		 if(parseInt($("#slideBoutique .overflow").css("margin-left"))<0)
		{
      if(parseInt($("#slideBoutique .overflow").css("margin-left"))>(-largeur_miniature))
         {
           $("#slideBoutique .overflow").animate({
			marginLeft: "0"
		  }, 500, function(){active_back=true; maj();} );
         } else {
         
		  $("#slideBoutique .overflow").animate({
			marginLeft: "+="+largeur_miniature+"px"
		  }, 500, function(){active_back=true; maj();} );
    }
    } else { active_back=true; maj();}
	}
  }
  
  $("#slideBoutique .suivant").click(function(){
     defil=false;
    next();
    
  });
  
  $("#slideBoutique .precedent").click(function(){
    defil=false;
    back();
  });
  //Fonction next et back du grand slider
  
  $("#slideBoutique .suivantPopin").click(function(){
	  if(active_next == true)
			{
				active_next=false;
		 var max = -(($('#slideBoutique .overflow ul > li').length*largeur_big)-(largeur_big));
		if(parseInt($("#slideBoutique .overflowPopin").css("margin-left"))>max)
		{
		  $("#slideBoutique .overflowPopin").animate({
			marginLeft: "-="+largeur_big+"px"
		  }, 500, function(){ active_next = true; } );
		} else {
      $("#slideBoutique .overflowPopin").animate({
			marginLeft: "-="+largeur_big+"px"
		  }, 500, function(){ 
          $("#slideBoutique .overflowPopin").css("margin-left","0");
          active_next = true; 
     } );
      
      /*
		   $("#slideBoutique .overflowPopin").animate({
			marginLeft: "0px"
		  }, 500, function(){ active_next = true; } );
      */
		}
	}
      });
    
    $("#slideBoutique .precedentPopin").click(function(){
		if(active_back == true)
		{
			active_back=false;
			  var marge = parseInt($("#slideBoutique .overflowPopin").css("margin-left"));
			 if(marge<0)
			{
			  $("#slideBoutique .overflowPopin").animate({
				marginLeft: "+="+largeur_big+"px"
			  }, 500, function(){active_back=true;});
			} else {
				active_back=true;
			}
		}
    });
      
    
    
  
  
});
