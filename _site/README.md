# Instructions on Adding Posts
- Create an empty .md (markdown) file using this format: yyyy-mm-dd-TITLE.md
- Place it in the _posts folder
- Now add the following at the very top of the empty file:
```
---
layout: post
title: 
description: 
image:
tags: 
comments: true
link:
---
```
- Title and description are self-explanatory. 
- Using the image attribute is tricky and I don't recommend it, since I think there should be more flexibility. Leave it blank for now and to add images anywhere you want, simply use this: ```![alt text](url)```
- A little note here: Please add all pictures to assets/images/post-images. I usually create a new folder for each post in assets/images/post-images. Thus, if we create a USC Covid19 post, we'd create a folder called "USC Covid19" within assets/images/post-images. Thus, the url for images would now be in this format: 
```/../../assets/images/post-images/post-folder-name-of-choice/filename```

- Ex. 
```![](/../../assets/images/post-images/briggs1/46b2080a90e02acb4c64b1c105c6f9e0.jpg)```
This is an example of an article named briggs1. A folder briggs1 was created with the image 46b2080a90e02acb4c64b1c105c6f9e0.jpg 

- When you click on a post on the index page, you'll be brought to the page specifically for the post. On the very top will be a clickable title, which brings us to the URL specified in the "link" attribute. 
- For "tags," any words separated by a space will automatically be displayed on top of the index page. 
- Simply add content like as regular markdown file

# Robert
- Added TAGS functionality. Test buttons now appear on "All Pages." I added some code in main.scss and main.js to implement it.
- To change banner height, go to _header.scss in _sass/layout and alter the .wrapper-header margin-top attribute. Next, go to assets/css/main.scss. Change the height attribute of #banner-content. 
- To make post title clickable (directs to an article), simply add a 'link:' attribute to the front matter
- To change the banner, go to _layouts/home.html. At the very top of the body element will be the banner. Simply change the ```<p>``` and ```<a>``` elements to alter text and link. 
