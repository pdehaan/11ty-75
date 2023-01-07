---
title: Posts
permalink: "posts/"
eleventyExcludeFromCollections: true
---

# {{ title }}

{% for post in collections.posts reversed %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}
