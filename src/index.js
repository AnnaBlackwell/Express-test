var $ = require('jquery')

var newImage = "<img src='https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=59edb7974cdcc37b973c35b24855b93b'>"

$(document).ready(function(){
	$(".button").click(function(){
		console.log("click")
		$(".image").append(newImage)
	})
})
