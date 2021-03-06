/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/*
 * Basic Count Up from Date and Time
 * Author: @mrwigster / https://guwii.com/bytes/count-date-time-javascript/
 */
window.onload = function() {
	// Month Day, Year Hour:Minute:Second, id-of-element-container
	countUpFromTime("Mar 19, 2020 12:00:00", 'countup1'); // ****** Change this line!
  };
  function countUpFromTime(countFrom, id) {
	countFrom = new Date(countFrom).getTime();
	var now = new Date(),
		countFrom = new Date(countFrom),
		timeDifference = (now - countFrom);
	  
	var secondsInADay = 60 * 60 * 1000 * 24,
		secondsInAHour = 60 * 60 * 1000;
	  
	days = Math.floor(timeDifference / (secondsInADay) * 1);
	hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
	mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
	secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
	var idEl = document.getElementById(id);
	idEl.getElementsByClassName('days')[0].innerHTML = days;
	idEl.getElementsByClassName('hours')[0].innerHTML = hours;
	idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
	idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
  
	clearTimeout(countUpFromTime.interval);
	countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }

/**
* This allows the tag buttons to toggle selected/unselected
* 
*/
var taglist = [];
$(".tagoff").click(function (e) {
	e.preventDefault();        
	$(this).toggleClass('tagon');	//class tagon literally means Tag selected.
    	$(this).toggleClass('tagoff');  
    	
    	
    	refresh();
});

//refreshes posts to reflect selected tags
function refresh(){
	var onlist = document.getElementsByClassName('tagon');

    	taglist = [];
    	for (let m = 0; m < onlist.length; m += 1) {
    		taglist.push(onlist[m].getAttribute("value"));
    	}
	var list = document.getElementsByClassName('postobjects');
	if(taglist.length == 0){
		for (let m = 0; m < list.length; m += 1) {
			list[m].style.display = "";
		}
	}
	for (let m = 0; m < list.length; m += 1) {
		if(taglist.length == 0){
			break;
		}
		var contents = list[m].getElementsByClassName('findtags')[0].innerHTML;
		const pressedTag = contents.split("&nbsp;");
		for (let i = 0; i < taglist.length; i += 1) {
			if(pressedTag.indexOf(taglist[i]) > -1){
				list[m].style.display = "";
				break;
				
			}else{
				list[m].style.display = "none";
			
			}
		}
	}
}

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.browser == 'edge' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			skel.on('change', function() {

				if (skel.breakpoint('medium').active)
					(off)();
				else
					(on)();

			});

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load pageshow', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Clear transitioning state on unload/hide.
			$window.on('unload pagehide', function() {
				window.setTimeout(function() {
					$('.is-transitioning').removeClass('is-transitioning');
				}, 250);
			});

		// Fix: Enable IE-only tweaks.
			if (skel.vars.browser == 'ie' || skel.vars.browser == 'edge')
				$body.addClass('is-ie');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height() - 2;
				}
			});

		// Tiles.
			var $tiles = $('.tiles > article');

			$tiles.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					$link = $this.find('.link'),
					x;

				// Image.

					// Set image.
						$this.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set position.
						if (x = $img.data('position'))
							$image.css('background-position', x);

					// Hide original.
						$image.hide();

				// Link.
					if ($link.length > 0) {

						$x = $link.clone()
							.text('')
							.addClass('primary')
							.appendTo($this);

						$link = $link.add($x);

						$link.on('click', function(event) {

							var href = $link.attr('href');

							// Prevent default.
								event.stopPropagation();
								event.preventDefault();

							// Start transitioning.
								$this.addClass('is-transitioning');
								$wrapper.addClass('is-transitioning');

							// Redirect.
								window.setTimeout(function() {

									if ($link.attr('target') == '_blank')
										window.open(href);
									else
										location.href = href;

								}, 500);

						});

					}

			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() {
					$window.trigger('scroll');
				});

				$window.on('load', function() {

					$banner.scrollex({
						bottom:		$header.height() + 10,
						terminate:	function() { $header.removeClass('alt'); },
						enter:		function() { $header.addClass('alt'); },
						leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
					});

					window.setTimeout(function() {
						$window.triggerHandler('scroll');
					}, 100);

				});

			}

		// Banner.
			$banner.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img');

				// Parallax.
					$this._parallax(0.275);

				// Image.
					if ($image.length > 0) {

						// Set image.
							$this.css('background-image', 'url(' + $img.attr('src') + ')');

						// Hide original.
							$image.hide();

					}

			});

		// Menu.
			var $menu = $('#menu'),
				$menuInner;
			
			var $menu1 = $('#menu1'),
				$menu1Inner;

			$menu.wrapInner('<div class="inner"></div>');
			$menuInner = $menu.children('.inner');
			$menu._locked = false;

			
			$menu1.wrapInner('<div class="inner"></div>');
			$menu1Inner = $menu1.children('.inner');
			$menu1._locked = false;
			
			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu1._lock = function() {

				if ($menu1._locked)
					return false;

				$menu1._locked = true;

				window.setTimeout(function() {
					$menu1._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu1._show = function() {

				if ($menu1._lock())
					$body.addClass('is-menu1-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu1._hide = function() {

				if ($menu1._lock())
					$body.removeClass('is-menu1-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menu1._toggle = function() {

				if ($menu1._lock())
					$body.toggleClass('is-menu1-visible');

			};

			$menuInner
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 250);

				});

			$menu1Inner
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu1._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 250);

				});

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();
					event.preventDefault();

					$body.removeClass('is-menu-visible');

				})
				.append('<a class="close" href="#menu">Close</a>');

			$menu1
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();
					event.preventDefault();

					$body.removeClass('is-menu1-visible');

				})
				.append('<a class="close" href="#menu1">Close</a>');

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$menu._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});
			$body
				.on('click', 'a[href="#menu1"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu1._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$menu1._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu1._hide();

				});
				
	});

})(jQuery);
