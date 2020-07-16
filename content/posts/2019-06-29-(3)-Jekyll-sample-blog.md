---
layout: post
title: Github로 블로그만들기(3)-Jekyll예제 블로그 만들기!
---
이전 포스트[『Github로 블로그만들기(2)-Jekyll개발환경을 만들자!』](https://changemin.github.io/2019/06/29/install-jekyll/) 에서 구축한 개발환경을 통해 Jekyll 예제 파일을 만들어보자!
# jekyll 예제 파일 만들기
1. > ![jekyll-sample(1)](/../public/images/post.2019-06-29/jekyll-sample(1).PNG)자신이 Jekyll예제 파일을 만들고자 하는 곳에 cmd를 통해 들어간다.(Git bash로도 가능하다)<br /><strong class ="highlight-red">※cmd 창에서 cd [파일경로] (ex.cd Desktop)을 입력하면 그 경로로 진입할 수 있다.<strong>
2. > ![jekyll-sample(2)](/../public/images/post.2019-06-29/jekyll-sample(2).PNG)sample을 만들고자 하는 경로에 <strong class ="highlight-yellow">jekyll new [jekyll샘플이름]</strong>을 입력한다. 나는 새로운 Jekyll블로그를 myblog라고 해두었다.

3. > ![jekyll-sample(3)](/../public/images/post.2019-06-29/jekyll-sample(3).PNG)바탕화면의 *myblog*파일에 들어가면 <i class ="highlight-red">_posts, _config, about.md</i>등의 파일을 확인할 수 있다.

4. > ![jekyll-sample(4)](/../public/images/post.2019-06-29/jekyll-sample(4).PNG)그 후 다시 콘솔창에 가서 <strong class ="highlight-yellow">jekyll serve</strong>를 입력하게 되면, <strong class ="highlight-blue">http://127.0.0.1:4000/</strong>의 주소를 부여받게 된다. 이는 Local에서 Jekyll의 사이트를 확인할 수 있는 주소이다. Jekyll파일에 수정사항이 생겼을 때는 *F5*로 새로고침을 해서 수정사항을 확인할 수 있다.

5. > ![jekyll-sample(5)](/../public/images/post.2019-06-29/jekyll-sample(5).PNG)다음과 같은 예제 사이트를 만든 것을 확인할 수 있다. 

# 사이트의 제목을 바꾸어보자!
Jekyll의 사이트에 대한 정보는 대부분 **_config.yml**안에 있다. ![jekyll-sample(6)](/../public/images/post.2019-06-29/jekyll-sample(6).PNG)에서 <strong class ="highlight-blue">title: Your awesome title</strong>의 값을 수정해보자
> ![jekyll-sample(7)](/../public/images/post.2019-06-29/jekyll-sample(7).PNG) 다음과 같이 title이 *Hello new world*로 바뀐것을 볼 수 있다. 
<h1 class="last-comment">오늘은 Jekyll의 예제 파일 생성과 간단한 수정에 대해 알아보았다. 다음에는 자신이 원하는 테마를 찾고, 찾은 테마를 자신의 웹사이트로 등록시키는 과정을 알아보도록 하자!</h1>