$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFactArray.length));
	$("#factText").text(booFactArray[number])
})

var booFactArray = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass, Boo has released two books" ]

// Change text to pink
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

// Change text to orange
$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})

// Change text to green
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

// Make box bigger
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// Make box shrink
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})
