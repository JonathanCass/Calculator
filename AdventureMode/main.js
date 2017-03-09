$(document).ready(function(){

	var inputString =""
	var input1
	var input2
	var output1 = ""
	var outputArray = []
	var oaCounter = 0
	var checker = true //when checker is true calculator is fresh / cleared 
	// therefore the array is empty and can be pushed to, after that set to false and numbers are stacked in
	// when stack is cleared or total is calculated then set checker to false

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
		output1 += $(this).attr('name')
		outputArray.push($(this).attr('name'))
		$("#output").val(output1)
		oaCounter += 2
		checker = true
		console.log(oaCounter)
		console.log(outputArray)
	})
	$("#equals").click(function(){
		$("#output").val("")	
	})			
})
