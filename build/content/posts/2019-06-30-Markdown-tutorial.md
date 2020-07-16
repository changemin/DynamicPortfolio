---
layout: post
title: Markdown 언어 총정리!
---

# 1. 마크다운에 관하여
## 1.1. 마크다운이란?
> [**Markdown**](http://whatismarkdown.com/)은 <strong class = "highlight-blue">텍스트 기반의 마크업언어</strong>로 2004년 존그루버에 의해 만들어졌으며 쉽게 쓰고 읽을 수 있으며 HTML로 변환이 가능하다. 특수기호와 문자를 이용한 <strong class = "highlight-blue">매우 간단한 구조</strong>의 문법을 사용하여 웹에서도 보다 <strong class = "highlight-blue">빠르게 컨텐츠를 작성</strong>하고 보다 <strong class = "highlight-blue">직관적</strong>으로 인식할 수 있다.
마크다운이 최근 각광받기 시작한 이유는 깃헙([https://github.com](https://github.com)) 덕분이다. 깃헙의 저장소Repository에 관한 정보를 기록하는 README.md는 깃헙을 사용하는 사람이라면 누구나 가장 먼저 접하게 되는 마크다운 문서였다. 마크다운을 통해서 설치방법, 소스코드 설명, 이슈 등을 간단하게 기록하고 가독성을 높일 수 있다는 강점이 부각되면서 점점 여러 곳으로 퍼져가게 된다.

## 1.2. 마크다운의 장점과 단점
### 1.2.1. 장점
* 간결하다.
* 별도의 도구없이 작성가능하다.
* 다양한 형태로 변환이 가능하다.
* 텍스트(Text)로 저장되기 때문에 용량이 적어 보관이 용이하다.
* 텍스트파일이기 때문에 버전관리시스템을 이용하여 변경이력을 관리할 수 있다.
* 지원하는 프로그램과 플랫폼이 다양하다.

### 1.2.2. 단점
* 표준이 없다.
* 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 다르다.
* 모든 HTML 마크업을 대신하지 못한다.

****
# 2. 마크다운 사용법(문법)
## 2.1. 헤더Headers
* 큰제목: 문서 제목
    ```
    This is an H1
    ```
# This is an H1

* 작은제목: 문서 부제목
    ```
    This is an H2
    ```
## This is an H2

* 글머리: 1~6까지만 지원
```
# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6
```
# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

## 2.2. BlockQuote
이메일에서 사용하는 ```>``` 블럭인용문자를 이용한다.
```
> This is a blockqute.
```
> This is a first blockqute.
>> This is a second blockqute.
>>> This is a third blockqute.

이 안에서는 다른 마크다운 요소를 포함할 수 있다.
> ### This is a H3
> * List
>	```
>	code
>	```

## 2.3. 목록
### ● 순서있는 목록(번호)
순서있는 목록은 숫자와 점을 사용한다.
```
1. 첫번째
2. 두번째
3. 세번째
```
1. 첫번째
2. 두번째
3. 세번째

**현재까지는 어떤 번호를 입력해도 순서는 내림차순으로 정의된다.**
```
1. 첫번째
3. 세번째
2. 두번째
```
1. 첫번째
3. 세번째
2. 두번째

딱히 개선될 것 같지는 않다. ~~존 그루버가 신경안쓰고 있다고~~

### ● 순서없는 목록(글머리 기호)
```
* 빨강
  * 녹색
    * 파랑

+ 빨강
  + 녹색
    + 파랑

- 빨강
  - 녹색
    - 파랑
```
* 빨강
  * 녹색
    * 파랑

+ 빨강
  + 녹색
    + 파랑

- 빨강
  - 녹색
    - 파랑

## 2.4. 코드```<pre><code></code></pre>```
4개의 공백 또는 하나의 탭으로 들여쓰기를 만나면 변환되기 시작하여 들여쓰지 않은 행을 만날때까지 변환이 계속된다.

> 한줄 띄어쓰면 인식이 제대로 안되는 문제가 발생하곤 합니다.

```
This is a normal paragraph:

    This is a code block.
end code block.
```

<code>
```
This is a normal paragraph:
    This is a code block.
end code block.
```
</code>

실제로 적용해보면,
This is a normal paragraph:

    This is a code block.

end code block.

## 2.5. 수평선```<hr/>```
아래 줄은 모두 수평선을 만든다. 마크다운 문서를 미리보기로 출력할 때 *페이지 나누기* 용도로 많이 사용한다.
```
* * *

***

*****

- - -

---------------------------------------
```

* * *

***

*****

- - -

---------------------------------------


## 2.6. 링크
* 참조링크

```
Link: [Google][googlelink]
[googlelink]: https://google.com "Go google"
```

Link: [Google][googlelink]
[googlelink]: https://google.com "Go google"

* 인라인 링크
```
syntax: [Title](link)
```
Link: [Google](https://google.com, "google link")

* 자동연결

```
<http://example.com/>
<address@example.com>
```
<http://example.com/> <br />
<address@example.com>

## 2.7. 강조
```
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
++underline++
~~cancelline~~
```
*single asterisks* <br />
_single underscores_ <br />
**double asterisks** <br />
__double underscores__ <br />
++underline++ <br />
~~cancelline~~ <br />

## 2.8. 이미지
<code>
![Alt text](/path/to/img.jpg)<br />
![Alt text](/path/to/img.jpg "Optional title")
</code>
![석촌호수 러버덕](http://cfile6.uf.tistory.com/image/2426E646543C9B4532C7B0)
![석촌호수 러버덕](http://cfile6.uf.tistory.com/image/2426E646543C9B4532C7B0 "RubberDuck")

사이즈 조절 기능은 없기 때문에 ```<img width="" height=""></img>```를 이용한다.

<strong class = "highlight-yellow">출처 : <a href="https://gist.github.com/ihoneymon/652be052a0727ad59601"> ihoneymon - [공통] 마크다운 markdown 작성법</a>

<h1 class="last-comment">이번 포스트에서는 Jekyll로 포스팅을 할 때 사용할 마크다운 언어의 문법(사용법)에 대해 알아보았다. 포스팅할 때 잘 사용하자!</h1>