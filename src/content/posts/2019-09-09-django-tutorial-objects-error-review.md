---
layout: post
title: Django Class has no 'objects' member 오류
---
## 문제의 발단
> ![Django python](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuksJ-XWEbY6bGGpYy95rPqcHHt_yL-BGsz-Hfj15Our0-Hf56Q)

[Django tutorial](https://docs.djangoproject.com/ko/2.2/intro/tutorial03/)을 보며 Django에 대해 학습하던 도중, <span class="highlight-yellow">Django Class has no 'objects' member</span> 이라는 오류를 만나게 되었다. 조금 찾아보니, 이것은 코드 자체의 문제가 아니라 Visual Studio code의 문제라고 한다.

    pip install pylint-django

위의 명령어를 cmd창에 입력하게 되면 pip를 통해 pylint-django를 install하게 된다. 

그 후 Visual Studio Code의 <span class="highlight-green">Ctrl+Shift+P</span>으로 Pallete를 열고 <span class="highlight-green">Python: Select Linter</span>를 선택, pylint를 선택해준다.

문제해결!

[참고-stack overflow](https://stackoverflow.com/questions/45135263/class-has-no-objects-member) 

이해가 안된다면 위의 링크를 한번 보자. 영어가 어렵지 않으니 쉽게 이해할 수 있다.

