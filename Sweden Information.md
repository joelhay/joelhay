---
layout: post
title: Sweden Information
description: Sweden vs. U.S.A COVID-19 deaths and development for patients in intensive care units with Covid-19 due to the coronavirus. 
image: assets/images/flag-3632235_1920.jpg
nav-menu: true
image-details: assets/images/Swedish Flag.jpg
comments: true
---

<script> function load_Sweden() { 
  const url = "https://mfjx6tjima.execute-api.us-west-1.amazonaws.com/RetrieveSwedenDeaths"; 

  fetch(url) 
  .then(response => response.text()) 
  .then(contents => document.getElementById("graphcaption").innerHTML += " Had the US been able to maintain Sweden's reported C19 Death Rate of " + "" + contents.substring(1, contents.length - 1) + " Per Million People, fewer Americans would be dead. Sweden never wore masks or locked down.") .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) } </script>
<img onload="load_Sweden()" style="" src="/assets/images/Swedish Flag.jpg" alt="">



<div class="inner">
 <a href="https://www.aier.org/article/sweden-despite-variants-no-lockdowns-no-daily-covid-deaths/" style="font-size: 130%; margin-bottom: 20px;"><h3 id="hometitle" style="text-decoration: underline;">Sweden: Despite Variants, No Lockdowns, No Daily Covid Deaths</h3></a>

  <h3 id="graphcaption">Sweden, unlike the US, decided to explain to people the risks and best practices, 
    but did not close schools, stores, or other activities.  As a result, they have attained herd immunity and have a lower death rate than the US.</h3>
    <iframe id="graph" src="https://ourworldindata.org/grapher/total-covid-deaths-per-million?tab=chart&yScale=linear&year=latest&time=2020-01-31..latest&country=SWE~USA&region=Europe" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
  <br><br>
</div>

<h3 style="text-decoration: underline;">Compare the Norwegian C19 ICU cases with Sweden Data</h3>
<img class="resize-image" src="/assets/images/number-of-new-patients-w.jpeg" alt="">

All Swedish ICU figures are taken from the Swedish Intensive Care Registry but have been compiled by SVT. Only the number in the top card shows the current situation - the others do not show how many are in intensive care right now - but how many have so far been enrolled in intensive care due to Covid-19.



<a href="https://www.svt.se/datajournalistik/corona-i-intensivvarden/" class="button next scrolly">Let's See It!</a>

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
