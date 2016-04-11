$(document).on("ready", function(){
	showTextOne();
})

$('body').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
})

function showTextOne(){
	$("#text_one").addClass("animated zoomInDown");
	$("#text_one").removeClass("hide");
}

function fadeOutTextOne(){
	$("#text_one").removeClass("zoomInDown");
	$("#text_one").addClass("zoomOutDown");
}

function hideTextOne(){
	$("#text_one").addClass("hide");
}

function showVideo(){
	startVideo();
	//countDown();
	$("#player").addClass("animated fadeIn");
	$("#player").removeClass("hidden");
}