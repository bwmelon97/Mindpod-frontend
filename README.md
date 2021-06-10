# Mindpod-frontend

Codesandbox에서 제대로 실행되지 않는군요... Github 코드 링크를 함께 올려봅니다 T.T

[github link](https://github.com/bwmelon97/Mindpod-frontend)

## Today's Assignment
* Podcast List 만들기
    - 로그인 후 이동할 페이지입니다.
    - 팟캐스트 리스트들을 보여주면 됩니다.
* Podcast Detail 만들기
    - 위의 팟캐스트 리스트 페이지에서 팟캐스트를 클릭하면 나오는 페이지 입니다.
    - 팟캐스트의 세부 에피소드들을 보여주시면 됩니다.

### 해야할 것
 * FormErrorBox 구현 (Error는 하나만 나타나도록)
 * 다음 단계로 넘어가거나 Home <-> Login 간의 이동 시, 상하 길이 부드럽게 변경 (애니메이션)
 * Create Account는 이메일 확인 / 정보 입력 / 프사 업로드로 3 Step ( 3단계만 남음 )
 
 * Header 에 좌측은 로고, 우측 유저는 아이콘으로 대체 (혹은 프로필 이미지)
 * Main Page 팟캐스트 아이템 스타일링 (디자인 우선)     -> 기초 디자인 완료
 * Main Page 하단에 Footer 컴포넌트 제작
 * 예시 데이터 충분히 만들 것 (10개 이상)

 * Hash 태그로 검색하는 페이지 추가
 * 구독 페이지 추가
 
 * Detail 페이지 디자인                               -> 기초 디자인 완료
 * Detail 페이지에 댓글창 추가
 * Detail Podcast 전체 Rating UI 넣기
 * 시간 표기 변경하기 (패키지 찾아보자 !)

 * Host 페이지 제작
 * 첫 화면에는 Podcast List 확인
 * Podcast 선택 시, Subscriber / Review 확인
 * 팟캐스트 생성 페이지
 * 팟캐스트 업데이트 페이지

---

## 5.24. ~ 25.

```bash
- Setting Router                                  [O]
- Setting apollo-client                           [O]
- react-hooks-form -> Create Login Page, Form     [O]
- login mutation (useMutation)                    [O]
- Store Login Token (localStorage)                [O]
```

## 5.26 ~ 27.

```bash
- Render Create Account Page            [O]
- Design Create Account & Login Page    [O]
```