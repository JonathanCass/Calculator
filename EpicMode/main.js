$(document).ready(function(){
	var outputString = ""
	var outputArray = []
	var actualOutput = 0
	var total = 0
	var sOp = "+"		// stores operator when reading input string in reduce operation
	var numCheck = false // Prevents entering operations unless previous input was a number
	var rebel = true		// tracks theme true for rebel, false for imperial
	var digitB = "#551a8b"   // color of digit buttons
	var operB = "red"	//color of operations buttons
	var digitC = "#943919"    //colors digits change when clicked

	document.getElementById('eCSS').disabled = true 

  	$("#clearB").click(function(){
		$(".digits").animate({backgroundColor : digitB},1000,function(){})
		$(".operations").animate({backgroundColor : operB},1000,function(){})
		$("#output").animate({color: "#FFFFFF"}, 1000, function() {$("#output").animate({color : "#000000"},1000,function(){})});
		function myReset(){
			$("#output").val("0")
			outputString = "0"
			numCheck = false}		
		setTimeout(myReset,1000)			
	})
	$(".digits").click(function(){
		outputString += $(this).attr('name')
		$("#output").val(outputString)
		$(this).animate({backgroundColor : digitC},222,function(){})
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
		$(".digits").animate({backgroundColor : digitB},1200,function(){})
		$(".operations").animate({backgroundColor : operB},1200,function(){})
	})
	$("#themeSwitch").click(function(){
		if(rebel){
			document.getElementById('rCSS').disabled = true
			document.getElementById('eCSS').disabled = false
			digitB = "green"
			operB = "black"
			digitC = "red"
			rebel = false
			$(".digits").animate({backgroundColor : digitB},1000,function(){})
			$(".operations").animate({backgroundColor : operB},1000,function(){})
		}
		else{
			document.getElementById('rCSS').disabled = false
			document.getElementById('eCSS').disabled = true
			digitB = "#551a8b"
		 	operB = "red"
		 	digitC = "#943919" 
			rebel = true
			$(".digits").animate({backgroundColor : digitB},1000,function(){})
			$(".operations").animate({backgroundColor : operB},1000,function(){})
		}
	})
})
