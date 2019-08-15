var list = ["Apple", "Banana", "Grapes", "Pineapple", "Mango", "Orange"];
var price = [50, 30, 40, 20, 70, 60];
var length = list.length;
var total = [];
var multiples = 1;
var lengthofitems = [];
var totallength;
var digit = [];
var classstore = [];
var n = 0;

for(i=0; i<length; i++){
	$("ul").append("<li>"+list[i]+"&nbsp&nbsp&nbsp<i class='prices'>Rs."+price[i]+"</i><button onclick='ction("+i+")' class='btn btn-success' id='but"+i+"'>Add</button></li>");
}

function ction(i) {
	lengthofitems.push($('.item'+i).length);
	totallength = lengthofitems.reduce(myLength);
	if(jQuery.inArray(i, digit) !== -1){
		var d = i;
		if(list[i] != classstore[classstore.length-1]){
			totallength = $('#product'+i).text().slice(0, -1);
			classstore.push(list[i]);
			n = 1;
		}
		if(n == 1){
			totallength = $('#product'+i).text().slice(0, -1);
			if(totallength == 0){
				totallength += 1;
			}
		}
	}
	console.log(digit);
	if(totallength > 0 && lengthofitems!=0 && i==d){
		multiples = 1;
		for(var y=0; y<totallength; y++){
			multiples = multiples + 1;
		}
		document.getElementById("product"+i).innerHTML = multiples + 'x';
	}else{
		$("ol").append("<li class='item"+i+"'>"+list[i]+"&nbsp&nbsp&nbsp<i class='multiple' id='product"+i+"'></i><i class='prices'>Rs."+price[i]+"</i><button class='btn btn-danger' onclick='btnn("+i+")'>Remove</button></li>");
		lengthofitems = [];
		digit.push(i);
		multiples = 1;
		totallength = 0;
		classstore.push(list[i]);
	}
	total.push(price[i]);
	document.getElementById("total").innerHTML = total.reduce(mySum);
}

function btnn(i) {
	var m = 0;
	if(m == 0){
		multiples = $('#product'+i).text().slice(0, -1);
	}
	if(multiples < 2){
		$('.item'+i).remove();
		lengthofitems = [];
		var index = digit.indexOf(i);
		if (index > -1) {
   			digit.splice(index, 1);
		}
	}
	else if(multiples==2){
		multiples = multiples - 1;
		lengthofitems.pop();
		document.getElementById("product"+i).innerHTML = ' ';
		m = 1;
	}else {
		lengthofitems.pop();
		multiples = multiples - 1;
		document.getElementById("product"+i).innerHTML = multiples + 'x';
	}
	console.log(digit);
	$('ol').each(function() {
			 if(!$(this).has('li').length){
			 	document.getElementById("total").innerHTML = 0;
			 	total = [];
			 }else{
			 	for(var x=0; x<total.length; x++){
			 		if(total[x]==price[i]){
			 			total.splice(x,1);
			 			break;
			 		}
			 	}
			 	mySub();
			 }
	});
}

function myLength(total, num) {
	return total + num;
}

function mySum(total, num) {
		return total + num;
}

function mySub(){
	var sum = 0;
    for(var j=0; j<total.length; j++){
            if(isNaN(total[j])){
            	continue;
            }
          	sum = sum + total[j];
       }
    document.getElementById("total").innerHTML = sum;
}

if (total.length == 0) {
	document.getElementById("total").innerHTML = 0;
}