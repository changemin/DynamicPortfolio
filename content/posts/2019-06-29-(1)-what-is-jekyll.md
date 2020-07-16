---
layout: post
title: Github로 블로그만들기(1)-Jekyll의 동작방식
---

## 들어가며 
**Jekyll**은 요즘 블로그를 만들 때 가장 많이 쓰이는 툴로 대부분의 깃헙 블로그는 이로 이루어져 있다. 나도 나의 ['변경민의 LOWIL'](http://changemin.github.io)사이트를 제작하면서 **Jekyll**을 배우고, 사용했다. 포스팅도 그렇고, 나의 사이트를 만드는 과정은 너무나도 재미있어서 다른 사람에게도 추천해주고 싶다. 약 5번에 걸쳐서 **Jekyll**사이트 만들고, 포스팅을 하는 방법에 대해 포스팅을 해보도록 하겠다! (꿀잼보장)

## **Jekyll**이란?
![Jekyll로고](https://rockylim92.github.io/images/jekyll.png)직접적인 제작에 앞서, **Jekyll**에 대해 알아보자. **Jekyll**은 개발자들이 애용하는 Github에서 개발한 툴로, 텍스트 변환엔진이라고 할 수 있다. [(Github Jekyll 정식 사이트)](https://jekyllrb-ko.github.io/) HTML, Markdown등의 마크업 언어로 글을 작성하면 정해놓은 규칙에 따라 다양한 레이아웃을 기반으로 정적 웹사이트를 만들어준다. 정적웹사이트(Stitic Website)는 서버 소프트웨어없이 HTML/CSS 등의 파일만으로도 사이트를 만들어서 <strong class="highlight-yellow">매우 빠르고 가볍다.</strong> 사용자는 *_config.yml* 이나 *_posts*폴더 등의 수정을 통해서 원하는 작업을 할 수 있다. 처음 접하는 사람에게는 어려울 수 있으나 이렇게 작성한 포스트를 push할 때는 그 쾌감이 정말 엄청나다.

## **Jekyll**의 파일구조
**Jekyll**을 사용할 때, 파일구조를 파악하고 이를 적절히 활용하는 것이 제일중요하다.(물론 HTML이나 CSS에 대한 이해도 필요하다) 그러나 생각보다 간단한 구조로 되어 있어서 배우는 것은 어렵지 않다. github에 **Jekyll**기반의 블로그를 처음 만들면, <i class="highlight-red">_include, _layouts, _posts, _site, _config.yml</i>등의 기본적인 파일이 생성된다. 이 파일들은 레이아웃을 지정하거나, 포스트를 등록하는 등의 역할이 있다. ![내 사이트의 파일구조](/../public/images/post.2019-06-28/Jekyll-file-directory.PNG) 위는 내 Jekyll 사이트의 파일구조이다. <br />설명과 같이, <i class="highlight-red">_include, _layouts, _posts, _site, _config.yml</i>파일과 경로를 확인할 수 있고, 더불어 내가 커스텀한 파일(_arvhives등)도 볼 수 있다.