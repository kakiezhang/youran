var site_url = '';
var nav  = [ '#about', '#lastest', '#dogs', '#breeding', '#contact' ];

$(document).ready(function(){
	setBkgPos();
	
	for ( i = 0; i < nav.length; i++ ) {
		//$(nav[i]).bind( 'mouseover', mMouseOver );
		//$(nav[i]).bind( 'mouseout', mMouseOut );
		$(nav[i]).bind( 'click', mClick );
	}
	
	for ( i = 0; i < nav.length; i++ ) {
		if ( $(nav[i]).get(0).className.indexOf('active') >= 0 ){
			$(nav[i])
				.animate({ backgroundPosition:'(' + _getHPos( nav[i] ) +'px -30px}'},"fast",
					function(){ 
						$(this)
							.children()
								.animate({backgroundPosition:'(0px -40px)'},20)
								.animate({backgroundPosition:'(0px -20px)'},"fast");
						$(this)
							.animate({backgroundPosition:'(' + _getHPos( nav[i] ) +'px 50px)'},"fast")
							.animate({backgroundPosition:'(' + _getHPos( nav[i] ) +'px 25px)'},"fast");
						var parent = this;
						$(this)
							.children()
								.animate( {backgroundPosition:'(0px -45px)'},"fast",function(){
											$(parent).animate({backgroundPosition:'(' + _getHPos( parent.id ) +'px 25px)'},"fast");
											$(parent).css({backgroundImage: 'url(./img/nav.png)'});
									});
					});
			break;
		}
	}
}); 

function _getHPos( id )
{
	for ( i = 0; i < nav.length; i++ ){
		if ( '#' + id == nav[i] ){
			return i*(-98);
		}
	}	
	
	return 0;
}

function setBkgPos()
{
	for ( i = 0; i < nav.length; i++ ){
		$(nav[i]).css({backgroundPosition: i*(-98) + 'px -25px'});
		$(nav[i] + ' div').css({ backgroundPosition: '0px -60px'});
	}
}

function mMouseOver(e)
{
	if ( this.className.indexOf('active') >= 0  ){
		return;
	}
	
	$(this)
		.stop()
		.css({backgroundImage: 'url(./img/nav_over.png)',cursor: 'pointer'})
		.animate({ backgroundPosition:'(' + _getHPos( this.id ) +'px -30px)'},"fast",
			function(){ 
				$(this)
					.children()
						.animate({backgroundPosition:'(0px -40px)'},20)
						.animate({backgroundPosition:'(0px -20px)'},"fast");
				$(this)
					.animate({backgroundPosition:'(' + _getHPos( this.id ) +'px 50px)'},"fast")
					.animate({backgroundPosition:'(' + _getHPos( this.id ) +'px 25px)'},"fast");
				var parent = this;
				$(this)
					.children()
						.animate( {backgroundPosition:'(0px -45px)'},"fast",
							function(){
								$(parent).css({backgroundImage: 'url(./img/nav.png)'});
							});
			
			});
}

function mMouseOut(e)
{			
	if ( this.className.indexOf('active') >= 0  ){
		return;
	}
	
	$(this)
		.stop()
		.animate({backgroundPosition:'(' + _getHPos( this.id ) +'px 40px )'}, "fast", 
			function(){
				$(this).children().animate({backgroundPosition:'(0px 70px)'}, "fast");
				$(this).animate( {backgroundPosition:'(' + _getHPos( this.id ) +'px -40px)'}, "fast", 
					function(){
						$(this).animate( {backgroundPosition:'(' + _getHPos( this.id ) +'px -25px)'}, "fast",
							function(){
								$(this).children().css({ backgroundPosition:'0px -60px'});
							})
					})
			})
		.css({backgroundImage: 'url(./img/nav.png)', cursor: ''});
}

function mClick(e)
{
	location.href = this.id;
}
