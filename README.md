# 17.-link-fontello

1. link rel="stylesheet" href="style.css" /

2.  <style>
        @import url("style.css");
    </style>

두가지 방식이 있다. 

1. 링크를 걸면 파일이 늘어나 용량이 줄어들지 않음에도 경제적인 이유는
    브라우저에서는 캐시라는 개념이 있기 때문이다. 이미 저장된 파일을
    불러오는 방식이기 때문에 경량화되는 파일이 중요함.

2. 코드의 가시성 증가
