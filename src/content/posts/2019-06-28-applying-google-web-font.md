---
layout: post
title: 구글 웹폰트 적용하기!
---
## 구글 웹폰트란?
웹폰트는 사용자가 가지고 있지 않은 폰트를 웹페이지에서 사용할 수 있는 방법이다. 폰트를 서버에서 다운로드하는 방식이라고 할 수 있다. 구글에서 제공하는 웹폰트 서비스는 무료로 상업적으로 이용해도 된다는 장점이 있다.

## 구글 웹폰트 적용시키기

1. > ![google-webfont(1)](/../public/images/post.2019-06-28/google-webfont(1).PNG)[구글 웹폰트](http://fonts.google.com)에 접속한다.

2. > ![google-webfont(2)](/../public/images/post.2019-06-28/google-webfont(2).PNG)*[Laguage]*탭에서 *Korean*을 선택한다.

3. > ![google-webfont(3)](/../public/images/post.2019-06-28/google-webfont(3).PNG)**Black Han Sans**로 적용을 시켜보겠다. **Black Han Sans**를 클릭해 접속한다.

4. > ![google-webfont(4)](/../public/images/post.2019-06-28/google-webfont(4).PNG)다음과 같이 폰트에 대한 다양한 정보(글씨, 디자이너, 사용자층 등)를 볼 수 있다.

5. > ![google-webfont(5)](/../public/images/post.2019-06-28/google-webfont(5).PNG)페이지 상단의 *+SELECT THIS FONT*를 클릭하면 페이지 아래에 탭이 뜨면서 선택이 된다.
6. > ![google-webfont(6)](/../public/images/post.2019-06-28/google-webfont(6).PNG)탭을 클릭하면 다음과 같이 나오게 되는데, 탭이 제공하는 HTML태그를 복사한다.

7. > <div class="colorscripter-code" style="color:#010101; font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important; overflow:auto"><table class="colorscripter-code-table" style="margin:0; padding:0; border:none; background-color:#fafafa; border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px; border-right:2px solid #e5e5e5"><div style="margin:0; padding:0; word-break:normal; text-align:right; color:#666; font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height:130%"><div style="line-height:130%">1</div></div></td><td style="padding:6px 0"><div style="margin:0; padding:0; color:#010101; font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#010101">&lt;</span><span style="color:#066de2">link</span>&nbsp;<span style="color:#0a9989">href</span>=<span style="color:#df5000">"https://fonts.googleapis.com/css?family=Black+Han+Sans&amp;display=swap"</span><span style="color:#0a9989"></span>&nbsp;<span style="color:#0a9989">rel</span>=<span style="color:#df5000">"stylesheet"</span><span style="color:#0a9989"></span><span style="color:#010101">&gt;</span></div></div></td><td style="vertical-align:bottom; padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none; color:white"><span style="font-size:9px; word-break:normal; background-color:#e5e5e5; color:white; border-radius:10px; padding:1px">cs</span></a></td></tr></table></div> 웹사이트에서 제공해주는 다음과 같은 코드를 HTML코드의 *<head>*태그 안에 넣어준다.


8. > <div class="colorscripter-code" style="color:#010101; font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; position:relative !important; overflow:auto"><table class="colorscripter-code-table" style="margin:0; padding:0; border:none; background-color:#fafafa; border-radius:4px;" cellspacing="0" cellpadding="0"><tr><td style="padding:6px; border-right:2px solid #e5e5e5"><div style="margin:0; padding:0; word-break:normal; text-align:right; color:#666; font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height:130%"><div style="line-height:130%">1</div></div></td><td style="padding:6px 0"><div style="margin:0; padding:0; color:#010101; font-family:Consolas, 'Liberation Mono', Menlo, Courier, monospace !important; line-height:130%"><div style="padding:0 6px; white-space:pre; line-height:130%"><span style="color:#ff3399">font-family</span><span style="color:#4DA51B">:&nbsp;'Black&nbsp;Han&nbsp;Sans'</span><span style="color:#ff3399"></span>,&nbsp;sans-serif;</div></div></td><td style="vertical-align:bottom; padding:0 2px 4px 0"><a href="http://colorscripter.com/info#e" target="_blank" style="text-decoration:none; color:white"><span style="font-size:9px; word-break:normal; background-color:#e5e5e5; color:white; border-radius:10px; padding:1px">cs</span></a></td></tr></table></div>CSS에서 웹 폰트를 적용시키고 싶을 때마다 다음과 같이 CSS코드를 추가하면 된다.

<h1 style="font-family: 'Black Han Sans';">동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세. <br /><br />이런식으로 적용시킬 수 있다. 구글 웹폰트를 잘 활용하면 정말 까리뽕쌈한 사이트를 제작할 수 있다.</h1>

- - -