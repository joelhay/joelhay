---
layout: landing
title: Key Points
description: Key Points + COVID-19 Daily Graphs
image: assets/images/Picture1.jpg
nav-menu: true
comments: true
---
<!-- Main -->
<div id="main">

<!-- One -->
<section id="one">
	<div class="inner kpts-timer">
		<div class="countup" id="countup1">
			<span class="timeel timertitle">Since Lockdown</span>
			<div style="display: inline-block;">
				<span class="timeel days">00</span>
				<span class="timeel timeRefDays">days</span>
			</div> 
			<div style="display: inline-block;">
				<span class="timeel hours">00</span>
				<span class="timeel timeRefHours">hours</span>
			</div>
			<div style="display: inline-block;">
				<span class="timeel minutes">00</span>
				<span class="timeel timeRefMinutes">minutes</span>
			</div>
			<div style="display: inline-block;">
				<span class="timeel seconds">00</span>
				<span class="timeel timeRefSeconds">seconds</span>
			</div>
        </div>
		<header class="major">
			<h2>As I've been saying since March, this virus was present everywhere since 2019, and the CDC has confirmed this - so why are we implementing lockdowns and mandatory masking months later?</h2>
		</header>
		<div class="key-points">
                <a href="More Cases Don't Equal.html" class="button special red"><p class="no-margin">More Cases Don't Equal Excess Deaths</p><p class="no-margin">CDC Mortality Tracker</p></a>
				
        </div>
	</div>
</section>

<!-- Two -->
<section id="two" class="spotlights">
	<section>
		
		<img class="image" src="{% link assets/images/operation-theatre-in-hospital-1524337.jpg %}" alt="" data-position="center center" />
	
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>WHY TEST STORED BLOOD SAMPLES?</h3>
				</header>
				<p>Because 1) COVID-19 was present everywhere long before the lockdowns, 2) although antibody tests are imperfect, they will show that the prevalence was the same in late 2019 as it is today.</p>
				<ul class="actions">
					<li><a href="/assets/Articles/WHY%20TEST%20STORED%20BLOOD%20SAMPLES.html" class="button link">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>
    

	<section>
		
		<img class="image" src="{% link assets/images/radio-studio-1315232-1600x1200.jpg %}" alt="" data-position="top center" />
		
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>WHY CONTACT TRACING DOESN’T WORK</h3>
				</header>
				<p>Because 1) the virus is very contagious and everywhere already, 2) contact tracing is disruptive to people’s lives and can lead to discriminatory practices, and 3) it is unknown how to use any such contact tracing data to reduce C19 transmission risk.</p>
				<ul class="actions">
					<li><a href="/assets/Articles/WHY CONTACT TRACING DOESN’T WORK.html" class="button">Learn more</a></li>
				</ul>
			</div>
		</div>
	</section>

	<section>

		<img class="image" src="{% link assets/images/tonik-hAZ3TNzQP6w-unsplash.jpg %}" alt="" data-position="25% 25%" style="height: 500px;"/>

		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>WHAT SHOULD WE DO?</h3>
				</header>
				<p>Maintain infection precaution measures for high-risk individuals (e.g. nursing home residents, immunocompromised, elderly with comorbidities), including appropriate PPE, handwashing, and avoidance of large groups.
                Reopen all schools, colleges and universities as quickly as possible.  As of May 1, 2020, only 9 children under the age of 15 and only 50 under the age of 25 were reported to have died in the US.
                Allow any and all businesses to open completely if they are willing to do so and decide what social distancing measures they would like to implement.</p>
                <p style="text-align: center;">Relax and use common sense.  Panic doesn’t help</p>
				<!--
                <ul class="actions">
					<li><a href="generic.html" class="button">Learn more</a></li>
				</ul>
                -->
			</div>
		</div>
	</section>

</section>

<!-- Three -->
<section id="three">
	<div class="inner">
		<header class="major">
			<a href="https://joelhay.github.io/" target="_blank"><h3 id="covid-graph-title" style="margin-bottom: 0;">COVID-19 Daily Graphs</h3></a>
		</header>
		<p>Brought to You By The COVID-19 Econometric Modeling Team</p>
		<ul class="actions">
			<li><a href="https://joelhay.github.io/" class="button" target="_blank">Click For Link to Graph</a></li>
		</ul>
	</div>
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



