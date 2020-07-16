---
layout: post
title: 깃허브 사용법!(git설치와 간단한 명령어)
---
## 깃허브를 사용하는 이유
깃허브는 개발자들의 Facebook이다. 서로의 코드를 공유하고, 좋아요(star)를 표시하며, 다른 사용자의 코드를 공유하는 등의 활동을 할 수 있다. 

내가 생각하는 Github의 가장 장점은 변화를 효과적으로 기록할 수 있다는 것이다. 몇 라인의 코드를 추가했는지, 언제 코드를 작성했는지를 잘 보여준다.

또한 깃허브는 함께 개발을 할 때 가장 빛을 낸다.

![Mygithub](/public/images/post.2019-06-27/MyGithub.PNG)
위는 필자의 Github Page이다. [나의 Github Page](http://github.com/Changemin)

- - -
## Git bash 설치하기 
Git bash는 git을 사용하기 위한 툴이다.

1. > ![install-git(1)](/public/images/post.2019-06-27/install-git(1).PNG)
우선 Git Bash 설치파일을 받기 위해 공식 홈페이지인 [https://git-scm.com/](https://git-scm.com/) 으로 가서 오른쪽 중간에 있는 *Download 2.22.0 for Windows*를 누른다. 

2. > ![install-git(2)](/public/images/post.2019-06-27/install-git(2).PNG)
자동으로 설치파일이 설치된다. 자동으로 설치가 안될경우 버튼을 눌러 수동으로 설치한다.
3. > ![install-git(3)](/public/images/post.2019-06-27/install-git(3).PNG)
설치된 .exe파일을 실행하고 Next
4. > ![install-git(4)](/public/images/post.2019-06-27/install-git(4).PNG)
다음과 같은 기본 설정에서 Next
5. > ![install-git(5)](/public/images/post.2019-06-27/install-git(5).PNG)
기본 설정 Next~
6. > ![install-git(6)](/public/images/post.2019-06-27/install-git(6).PNG)
이것도 기본 설정 Next
7. > ![install-git(7)](/public/images/post.2019-06-27/install-git(7).PNG)
User the OpenSSL library -> Next
8. > ![install-git(8)](/public/images/post.2019-06-27/install-git(8).PNG)
기본 설정 Next
9. > ![install-git(9)](/public/images/post.2019-06-27/install-git(9).PNG)
Use MinTTY -> Next
10. > ![install-git(10)](/public/images/post.2019-06-27/install-git(10).PNG)
Enable file system caching, Enable Git Credential Manager chech -> Next
11. > ![install-git(11)](/public/images/post.2019-06-27/install-git(11).PNG)
새로운 기능들을 선택해서 적용할 수 있다. 나는 아무것도 선택하지 않았다!
12. > ![install-git(12)](/public/images/post.2019-06-27/install-git(12).PNG)
준비가 모두되었다. 이제 install 을 눌러 설치하면 된다!
13. > ![install-git(13)](/public/images/post.2019-06-27/install-git(13).PNG)
다음과 같이 준비가 설치가 되었다! *git --version*명령어를 통해 버전을 확인할 수 있다. 
- - -

## **Git 명령어 모음**
> **git init**

* git init은 자신의 계정에 새로운 저장소를 만들고 초기화한다. 

> **git clone [저장소 url]**

* git clone은 github 사이트에서 저장소를 나의 local저장소로 불러오는데 사용한다.

> **git status**

* git status는 파일의 상태를 확인한다. 이전의 git에서 commit을 할 수정사항이 있는지 볼 수 있다.

> **git add [파일이름]**

* git add는 Untracked file을 tracked file로 만들어 준다.

> **git stage .**

* git stage는 git add의 전체 확장형이라고 보면된다. add는 파일 하나만 관리 할 수 있는 것에 비해, stage는 모든 파일을 add한다고 생각하자. stage뒤에 붙는 .은 그 경로의 모든 파일을 의미한다.

> **git commit -m "Commit메세지"**

* git commit을 통해 간단히 commit 메세지를 적어볼 수 있다.

> **git push**

* git push는 commit된 파일을 최종적으로 github에 업로드 해준다.

- - -