// JavaScript Document
sfHover = function() {
	  var sfEls = document.getElementById("navMenu").getElementsByTagName("LI");
	  for (var i=0; i<sfEls.length; i++) {
	  sfEls[i].onmouseover=function() {
	  this.className+=" sfhover";
	  }
	  sfEls[i].onmouseout=function() {
	  this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
	  }
	  }
	  }
	  if (window.attachEvent) window.attachEvent("onload", sfHover);
//涓嬫媺鑿滃崟		
function MM_jumpMenu(targ,selObj,restore){ //v3.0 
eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
if (restore) selObj.selectedIndex=0;
}

//渚у鑸�
var LastLeftID = "";
function menuFix() {
var obj = document.getElementById("nav").getElementsByTagName("li");
}

function DoMenu(emid)
{
var obj = document.getElementById(emid); 
obj.className = (obj.className.toLowerCase() == "expanded"?"collapsed":"expanded");
if((LastLeftID!="")&&(emid!=LastLeftID)) //鍏抽棴涓婁竴涓狹enu
{
document.getElementById(LastLeftID).className = "collapsed";
}
LastLeftID = emid;
}

//涓氬姟棰嗗煙
$(document).ready(function() {
  jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
	  $(tab_conbox).find("li").hide();
	  $(tabtit).find("li:first").addClass("thistab").show(); 
	  $(tab_conbox).find("li:first").show();
  
	  $(tabtit).find("li").bind(shijian,function(){
		$(this).addClass("thistab").siblings("li").removeClass("thistab"); 
		  var activeindex = $(tabtit).find("li").index(this);
		  $(tab_conbox).children().eq(activeindex).show().siblings().hide();
		  return false;
	  });
  
  };
  /*璋冪敤鏂规硶濡備笅锛�*/
  $.jqtab("#tabs","#tab_conbox","click");
  $.jqtab("#item_tabs","#item_conbox","click");
  
  
});
//鍏徃鏄剧ず椤靛脊鍑哄眰

function showdiv() {            
  document.getElementById("bg").style.display = "block";
  document.getElementById("show").style.display = "block";
}
function hidediv() {
  document.getElementById("bg").style.display = 'none';
  document.getElementById("show").style.display = 'none';
}
