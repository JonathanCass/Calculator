$(document).ready(function(){

	var outputString = ""
	var outputArray = []
	var actualOutput = 0
	var total = 0
	var sOp = "+"
	
	
  
	$("#clearB").click(function(){
		$("#output").val("")
		outputString = ""
		$(".digits").css("background-color","#551a8b")
		$(".operations").css("background-color","red")
	})
	$(".digits").click(function(){
		outputString += $(this).attr('name')
		$("#output").val(outputString)
		$(this).css("background-color", "orange")
	})
	$(".operations").click(function(){
		outputString += " "+ $(this).attr('name') +" "
		$("#output").val(outputString)
		$(this).animate({backgroundColor: "#59BAE3"}, 333, function() {$(this).toggle( "explode" ) });
		$(this).toggle( "explode" )
	})
	$("#equals").click(function(){
		outputArray = outputString.split(" ")
		console.log(outputArray)
		actualOutput = outputArray.reduce(function(a,b){
			if (b == "+" || b == "-" || b == "X" || b == "/"){
				sOp = b
				total = Number(a)
				return a
			}
			else{
				switch(sOp){
					case "+":
						total = Number(total) + Number(b)
						return total
					case "-":
						total = Number(total) - Number(b)
						return total
					case "X":
						total = Number(total) * Number(b)
						return total
					case "/":
						total = Number(total) / Number(b)
						return total
				}
			}
		})
		outputString = actualOutput
		$("#output").val(outputString)
		$(".digits").css("background-color","#551a8b")
		$(".operations").css("background-color","red")
	})
})
