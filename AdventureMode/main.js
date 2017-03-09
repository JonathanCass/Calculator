$(document).ready(function(){

	var inputString =""
	var input1
	var input2
	var output1 =""

	$(".digits").click(function(){
		output1 += this.name
		$("#output").val(output1)
		})
	$(".operations").click(function(){
		output1 += this.name
		$("#output").val(output1)
		})	
})
