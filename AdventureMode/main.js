$(document).ready(function(){

	var outputString = ""
	var outputArray = []
	var actualOutput = 0
	var total = 0
	var sOp = "+"
	var numCheck = false // Prevents entering operations unless previous input was a number
	
  
	$("#clearB").click(function(){
		$("#output").val("")
		outputString = ""
		$(".digits").animate({backgroundColor : "#551a8b"},1000,function(){})
		$(".operations").animate({backgroundColor : "red"},1000,function(){})
		numCheck = false
	})
	$(".digits").click(function(){
		outputString += $(this).attr('name')
		$("#output").val(outputString)
		$(this).animate({backgroundColor : "#D35400"},222,function(){})
		numCheck = true
	})
	$(".operations").click(function(){
		if(numCheck){
			outputString += " "+ $(this).attr('name') +" "
			$("#output").val(outputString)
			$(this).animate({backgroundColor: "#59BAE3"}, 333, function() {$(this).toggle( "explode" ) });
			$(this).toggle( "explode" )
			numCheck = false
		}
		else{
			alert("ERROR can not input operation!")
		}
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
		$(".digits").animate({backgroundColor : "#551a8b"},1200,function(){})
		$(".operations").animate({backgroundColor : "red"},1200,function(){})
	})
})
