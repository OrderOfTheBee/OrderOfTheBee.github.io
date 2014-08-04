var smoothScrolling = false;
var imgHeight;
var earlyBy;


$(function(){


    // sticky header popout
    var stickyHeader = $('.stickyheader .navbar').eq(0);
    var stickyHeight = stickyHeader.height();
    var speed = 500;
    var headerShown = false;
    $(document).scroll(function(){
    	if($(document).scrollTop() > stickyHeight && !headerShown){
    		stickyHeader.stop().animate({'margin-top': 0}, speed);
	    	headerShown = true;
    	} else if ($(document).scrollTop() < stickyHeight && headerShown){
			stickyHeader.stop().animate({'margin-top': '-100%'}, speed);
	    	headerShown = false;
    	}
    });
    if($(document).scrollTop() > stickyHeight && !headerShown){
		stickyHeader.stop().animate({'margin-top': 0}, speed);
    	headerShown = true;
	} else if ($(document).scrollTop() < stickyHeight && headerShown){
		stickyHeader.stop().animate({'margin-top': '-100%'}, speed);
    	headerShown = false;
	}

    $('.navbar a').click(function(){
    	var which = $(this).attr('href');
    	selectHeaderMenuItem(which);
    });

    adjustLinks();
	
});


function selectHeaderMenuItem(which){
	$('.navbar a').removeClass('active');
	$('.navbar a[href='+which+']').addClass('active');
}

function adjustLinks(){
	var stickyHeader = $('.stickyheader .navbar').eq(0);
    var stickyHeight = stickyHeader.height();

	$('.navbar a:not([href=#home]), a.smooth').smoothScroll({
    	offset: -stickyHeight, 
    	preventDefault: true, 
    	beforeScroll: function(){
			smoothScrolling = true;
    	},
    	afterScroll: function(){
			smoothScrolling = false;
	    	var which = $(this).attr('href');
	    	selectHeaderMenuItem(which);
	    }
	});
	$('.navbar a[href=#home]').smoothScroll({
		
    	offset: -stickyHeight - imgHeight, 
    	preventDefault: true, 
    	beforeScroll: function(){
			smoothScrolling = true;
    	},
    	afterScroll: function(){
			smoothScrolling = false;
	    	var which = $(this).attr('href');
	    	selectHeaderMenuItem(which);
	    }
	});
	$('a.gototop').smoothScroll({
    	preventDefault: true, 
    	beforeScroll: function(){
			smoothScrolling = true;
    	},
    	afterScroll: function(){
			smoothScrolling = false;
	    	var which = $(this).attr('href');
	    	selectHeaderMenuItem(which);
	    }
	});
}

