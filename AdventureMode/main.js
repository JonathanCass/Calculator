$(document).ready(function(){

	var output1 = ""
	var outputArray = []
	var actualOutput = 0
	var oaCounter = 0
	var checker = true //when checker is true calculator is fresh / cleared 
	// therefore the array is empty and can be pushed to, after that set to false and numbers are stacked in
	// when stack is cleared or total is calculated then set checker to false

	
	$("#clearB").click(function(){
		console.log(outputArray)
		$("#output").val("")
		outputArray=[]
		output1 = ""
		oaCounter = 0
		checker = true 
	})
	$(".digits").click(function(){
		output1 += $(this).attr('name')
		if(checker){
			outputArray.push($(this).attr('name'))
			checker=false
		}
		else{
			outputArray[oaCounter] += $(this).attr('name')
		}
		$("#output").val(output1)
		console.log(oaCounter)
		console.log(outputArray)
	})
	$(".operations").click(function(){
		output1 += " "+ $(this).attr('name') +" "
		outputArray.push($(this).attr('name'))
		$("#output").val(output1)
		oaCounter += 2
		checker = true
		console.log(oaCounter)
		console.log(outputArray)
	})
	$("#equals").click(function(){
		$("#output").val("")
		actualOutput = Number(outputArray[0])
		for( i=1; i < outputArray.length -1 ; i += 2)
			switch(outputArray[i]){
				case "+":
					actualOutput += Number(outputArray[i+1])
					break;
				case "-":
					actualOutput -= Number(outputArray[i+1])
					break;
				case "X":
					actualOutput *= Number(outputArray[i+1])
					break;
				case "/":
					actualOutput /= Number(outputArray[i+1])
					break;
			}
			$("#output").val(actualOutput)
			outputArray=[]
			output1 = actualOutput
			outputArray[0] = actualOutput
			oaCounter = 0
			checker = true 
		})
			
})
