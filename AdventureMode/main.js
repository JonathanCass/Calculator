$(document).ready(function(){

	var outputString = ""
	var outputArray = []
	var actualOutput = 0
	var total = 0
	var sOp = "+"
	
	$("#clearB").click(function(){
		$("#output").val("")
		outputArray=[]
		outputString = ""
	})
	$(".digits").click(function(){
		outputString += $(this).attr('name')
		$("#output").val(outputString)
	})
	$(".operations").click(function(){
		outputString += " "+ $(this).attr('name') +" "
		$("#output").val(outputString)
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
	})
})
