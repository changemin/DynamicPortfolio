---
layout: post
title: Github로 블로그만들기(5)-템플릿 커스터마이징하기!
---

오늘은 찾은 템플릿을 자신에 맞게 커스터마이징 시키고 적용한 것을 확인하는 것에 대해알아보자!

이전의 포스팅에서 자신의 Github 저장소에 템플릿을 fork했었다. 
1. > ![custom-jekyll(1)](/../public/images/post.2019-06-29/custom-jekyll(1).PNG)
자신이 fork한 저장소의 repository로 가서, 우측의 <strong class="highlight-green">[clone or download]</strong> 버튼을 누르고, 나오는 텍스트를 복사해둔다.
2. > ![custom-jekyll(2)](/../public/images/post.2019-06-29/custom-jekyll(2).PNG)
git bash를 통해 자신이 원하는 경로에 <strong class= "highlight-blue">git clone [복사한 텍스트]</strong>를 통해 복사해온다. <br /><strong class= "highlight-red">※[『깃허브 사용법!(git설치와 간단한 명령어)』](http://changemin.github.io/2019/06/27/about-github/)에 git 명령어를 사용하기 위한 git설치에 관한 포스팅을 해두었다! 참고하자.</strong>
3. > ![custom-jekyll(3)](/../public/images/post.2019-06-29/custom-jekyll(3).PNG)다음과 같이 바탕화면에 폴더가 생기고, 그 안에 내 Github저장소가 그대로 복사된 것을 확인 할 수 있다. 
4. > ![custom-jekyll(4)](/../public/images/post.2019-06-29/custom-jekyll(4).PNG)자신의 Jekyll샘플이 있는 경로로 접근하여 <strong class="highlight-red">gem install bundle jekyll</strong>을 통해 bundle과 jekyll을 설치한다.
5. > ![custom-jekyll(5)](/../public/images/post.2019-06-29/custom-jekyll(5).PNG)<strong class="highlight-red">bundle exec jekyll serve</strong>명령어를 통해 jekyll예제 블로그를 local에서 실행시켜준다. 다음과 같이 <strong class="highlight-yellow">http://127.0.0.1:4000</strong>의 주소를 부여한다.
6. > ![custom-jekyll(6)](/../public/images/post.2019-06-29/custom-jekyll(6).PNG)이제 변경사항이 생길때마다 바로바로 확인할 수 있다.
7. > ![custom-jekyll(7)](/../public/images/post.2019-06-29/custom-jekyll(7).PNG)먼저 <i class="highlight-blue">_config.yml</i>의 파일을 수정해보자. 나는 위와 같이 수정을 하였다. <strong class="highlight-blue">※_config.yml의 파일은 브라우저를 새로고침해도 적용되지 않는다. _config.yml의 파일을 수정했다면 <strong class="highlight-red">bundle exec jekyll serve</strong>을 통해 다시 실행시켜주어야 한다.</strong>
<h1 class="last-comment">이번 포스트에서는 자신이 찾은 템플릿의 _config.yml파일을 수정해서 진정한 자신의 사이트로 바꾸어보는 작업을 해보았다! 다음 포스팅에서는 마지막으로 포스팅을 게시하는 방법에 대해 알아보자</h1>