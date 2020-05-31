---
layout: post
title: Github로 블로그만들기(6)-포스트 작성하고, 업로드하기!
---
지금까지의 모든 과정<br />
> [Github로 블로그만들기(1)-Jekyll의 동작방식](https://changemin.github.io/2019/06/29/(1)What-is-Jekyll/)<br />
> [Github로 블로그만들기(2)-Jekyll개발환경을 만들자!](https://changemin.github.io/2019/06/29/(2)install-jekyll/)<br />
> [Github로 블로그만들기(3)-Jekyll예제 블로그 만들기!](https://changemin.github.io/2019/06/29/(3)jekyll-sample/)<br />
> [Github로 블로그만들기(4)-Jekyll테마 Github에 적용시키기!](https://changemin.github.io/2019/06/29/(4)apply-jekyll-theme/)<br />
> [Github로 블로그만들기(5)-템플릿 커스터마이징하기!](https://changemin.github.io/2019/06/29/(5)custom-jekyll/)<br />

5개의 이전 포스팅들의 대미를 장식할 Jekyll 블로그 튜토리얼에 관한 마지막 포스트이다.

1. > ![posting(1)](/../public/images/post.2019-06-29/posting(1).PNG)다음과 같이 자신의 지킬 파일경로에 진입해서 <strong class="highlight-yellow">bundle exec jekyll serve</strong>명령어를 통해 jekyll파일을 local에서 실행시켜 본다. 
2. > ![posting(2)](/../public/images/post.2019-06-29/posting(2).PNG)jekyll들의 파일들을 살펴보면 <strong class="highlight-yellow">_posts</strong>라는 이름의 폴더가 존재한다. 이 폴더 안에 새로운 포스트 파일을 만들어서 작성하면 된다. 나는 "2019-06-29-first.md"라는 마크다운 파일을 만들었다. ~~참 쉽죠잉~~<strong class = "highlight-red">※여기서 주의해야 하는 것이 있다. 파일 이름은 <strong class="highlight-green">[년도-월-일-포스트이름.md]</strong>의 형식을 지켜주어야한다.</strong>
3. > ![posting(3)](/../public/images/post.2019-06-29/posting(3).PNG) 포스팅 마크다운 파일을 만들때는 다음과 같은 형식을 지켜주어야 한다. 
>> <code>--- <br />layout: post<br />title: 제목<br /> ---</code>

4. > 위와 같은 형식을 포스팅 마크다운 문서 앞에다 표기를 해주어야하고, 내용은 마크다운 문법에 따라 작성하면 된다. <br />[Github로 블로그만들기(6)-포스트 작성하고, 업로드하기!](https://changemin.github.io/2019/06/30/markdown/) <br />마크다운 문법에 관한 내용은 다음을 참고하자.

<h1 class="last-comment">오늘은 6개의 Jekyll포스팅 방법에 관한 내용을 마무리 지었다. 많은 사람들이 이 포스팅들을 보고 자신의 블로그를 만들고, 추억도 쌓는 등의 활동을 할 수 있었으면 좋겠다!<br /><br />Github로 블로그 만들기 시리즈 끝!</h1>