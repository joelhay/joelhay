---
layout: post
title: Swedish ICU Info
description: Here you can follow the development for patients who have so far been cared for in intensive care units with Covid-19 due to the coronavirus. 
image: assets/images/flag-3632235_1920.jpg
nav-menu: true
image-details: assets/images/Swedish Flag.jpg
comments: true
---
<img class="" style="" src="/assets/images/Swedish Flag.jpg" alt="">

All figures are taken from the Swedish Intensive Care Registry but have been compiled by SVT. Only the number in the top card shows the current situation - the others do not show how many are in intensive care right now - but how many have so far been enrolled in intensive care due to Covid-19.

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
