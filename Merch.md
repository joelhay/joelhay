---
title: joelhay.com merch
layout: landing
description: Support Our Research!
image: assets/images/covidvaccine.png
nav-menu: true
show_tile: true
comments: true
---

<!-- Main -->
<div id="main">

<!-- Two -->
<section id="two" class="spotlights">
	<section>
		<a class="image">
			<img src="{% link assets/images/socialdistance.png %}" alt="" data-position="center center" style="border-radius: 8px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"/>
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>Social Distance</h3>
				</header>
				<p>* JUST RELEASED * <br><br> Limited Time Only. <br> This item is NOT available in stores. <br><br> Guaranteed safe checkout: PAYPAL | VISA | MASTERCARD </p>
				<ul class="actions">
					<li><a href="https://www.gearbubble.com/socialdistancetshirt" class="button" target="_blank">BUY IT NOW</a></li>
				</ul>
			</div>
		</div>
	</section>
<!---->
	<section>
		<a class="image">
			<img src="{% link assets/images/covidvaccine.png %}" alt="" data-position="top center" style="border-radius: 8px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"/>
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>COVID Vaccine Mug</h3>
				</header>
				<p>* JUST RELEASED * <br><br> Limited Time Only. <br> This item is NOT available in stores. <br><br> Guaranteed safe checkout: PAYPAL | VISA | MASTERCARD</p>
				<ul class="actions">
					<li><a href="https://www.gearbubble.com/covidvaccinemug" class="button" target="_blank">BUY IT NOW</a></li>
				</ul>
			</div>
		</div>
	</section>
	<section>
		<a class="image">
			<img src="{% link assets/images/superspreader.png %}" alt="" data-position="25% 25%" style="border-radius: 50%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"/>
		</a>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>Super Spreader</h3>
				</header>
				<p>Our New Mask Was Just Released. <br>100% Made In The USA! <br>Not Sold In Stores. <br><br> Buy Yours Now. <br><br> Guaranteed safe checkout: <br>PAYPAL | VISA | MASTERCARD</p>
				<ul class="actions">
					<li><a href="https://www.gearbubble.com/superspreadermask" class="button" target="_blank">BUY IT NOW</a></li>
				</ul>
			</div>
		</div>
	</section>
</section>
{% if page.comments %}
	<div class="inner disqus">
		<div id="disqus_thread"></div>
		<script>
			var disqus_config = function () {
			this.page.url = '{{ page.url | absolute_url }}';  
			this.page.identifier = '{{ page.url }}'; 
			};
			(function() { // DON'T EDIT BELOW THIS LINE
			var d = document, s = d.createElement('script');
			s.src = 'https://joelhay-com.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
			})();
		</script>
		<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
	</div>                         
{% endif %}
</div>
