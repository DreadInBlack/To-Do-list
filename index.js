<script>
var	myList = document.getElementsByTagName('li');
var i;
for ( i = 0; i < myList.lengrth; i++) 
{
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close"
	span.appendChild(txt);
	myList[i].appendChild(span)
}
var list=document.querySelector('ul');
list.addEventListener('click',function(ev)){
	if (ev.target.tagName == 'LI') {
		ev.target.classList.toggle('checked');
	}
},false;
function newElement(){
	var li = document.createElement("li");
	var inputValue = document.getElementsById("myInput").value;
	var	t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue =='') {
		alert("");
	}
	else{
		document.getElementsById("myInput").value = "";
		var span = document.createElement("SPAN");
		var	txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		li.appendChild(span);
		for(i=0; i<close.lenght; i++)
		{
			close[i].onclick = function()
			{
				var	div = this.parentElement;
				div.style.display = "none";
			}
		}
	}
}
</script>