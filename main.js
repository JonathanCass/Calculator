$(document).ready(function(){

	$("#add").click(function(){
		var num1=$("#num_one").val()
		var num2=$("#num_two").val()
		$("#answer").val(Number(num1)+Number(num2))
	})
	$("#subtract").click(function(){
		var num1=$("#num_one").val()
		var num2=$("#num_two").val()
		$("#answer").val(Number(num1)-Number(num2))
	})
	$("#multiply").click(function(){
		var num1=$("#num_one").val()
		var num2=$("#num_two").val()
		$("#answer").val(Number(num1)*Number(num2))
	})
	$("#divide").click(function(){
		var num1=$("#num_one").val()
		var num2=$("#num_two").val()
		$("#answer").val(Number(num1)/Number(num2))
	})
})
