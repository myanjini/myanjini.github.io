# React로 만드는 도서 관리 프론트엔드와 관제 대시보드

FastAPI 백엔드와 연계하는 Vite + React 셀프 스터디 교안 (9일 과정)

---

## S1. 웹 프론트엔드와 개발 환경

*1일차 오전, 4시간*

> 섹션 목표: 과정의 목표와 결과물을 확인하고, 실습 환경과 연계할 백엔드를 준비한 뒤 프론트엔드 관점에서 HTTP와 JSON을 다룹니다.

### S1-P1. 과정 소개와 결과물

> 학습 목표: 9일 동안 무엇을 만들고 어떤 순서로 배우는지, 교안과 예제 저장소를 어떻게 쓰는지 설명할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S1-P1-01 과정 소개와 로드맵 | 주요 개념 | 10분 |
| S1-P1-02 학습 목표와 사전 지식 | 주요 개념 | 10분 |
| S1-P1-03 최종 결과물 | 주요 개념 | 15분 |
| S1-P1-04 예제 저장소와 단계별 브랜치 | 주요 개념 | 10분 |
| S1-P1-05 정리: 과정 소개와 결과물 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S1-P1-01. 과정 소개와 로드맵

*주요 개념, 10분*

이 과정은 `FastAPI로 배우는 REST API 백엔드 개발` 과정(https://myanjini.github.io/fastapi-rest-api/index.html)에서 만든 도서 관리 REST API를 사용자가 실제로 쓰는 웹 화면으로 완성하는 프론트엔드 과정입니다. 백엔드 과정에서는 도서 등록과 조회, 저자 관계, 표지 업로드, JWT 인증, 도서 대여와 반납, 로그와 헬스 체크까지 만들었습니다. 이 과정에서는 그 API를 브라우저에서 호출해 화면에 보여 주고, 운영자가 서비스 상태를 지켜보는 관제 대시보드를 만들고, 테스트와 보안 점검을 거쳐 GitHub Actions로 AWS S3에 자동 배포합니다.

##### 9일 동안의 흐름

| 일차 | 오전 (4시간) | 오후 (3시간) |
|---|---|---|
| 1일차 | 웹 프론트엔드와 개발 환경 | 모던 JavaScript |
| 2일차 | React 기초 | 폼, 이펙트, 컴포넌트 설계 |
| 3일차 | Origin, SOP, CORS | Fetch API와 axios로 API 계층 만들기 |
| 4일차 | 라우팅과 조회 화면 | 인증 연동 |
| 5일차 | 쓰기 기능 | 서버 상태 관리 |
| 6일차 | 프론트엔드 테스트 | 프론트엔드 개발 보안 |
| 7일차 | 관제 대시보드 | 대시보드 고도화 |
| 8일차 | 도커라이징과 운영 빌드 | GitHub Actions와 S3 배포 |
| 9일차 | 미니 프로젝트 설계와 구현 | 배포와 발표 |

앞부분(1~5일차)에서 React로 화면을 만들고 백엔드와 연결하는 방법을 익히고, 가운데(6~7일차)에서 그 코드를 테스트와 보안, 관제의 관점으로 다시 보고, 뒷부분(8일차)에서 실제 서비스 형태로 배포합니다. 9일차에는 지금까지의 흐름을 그대로 써서 각자 고른 화면을 만들어 발표합니다. 앞에서 만든 코드를 뒤에서 계속 쓰므로 실습을 건너뛰지 않는 것이 중요합니다.

##### 교안 읽는 법

수업 1교시가 교안의 파트 하나입니다. 파트는 50분 수업과 10분 휴식으로 이루어지고, 50분은 여러 페이지로 나뉩니다. 페이지는 세 가지 유형이 있습니다.

| 페이지 유형 | 하는 일 |
|---|---|
| 주요 개념 | 새로운 개념을 배우고 강사가 보여 주는 과정을 함께 봅니다. 따라 입력하지 않아도 됩니다. |
| 실습 | 직접 코드를 입력하고 실행합니다. 확인할 항목을 하나씩 점검합니다. |
| 정리 | 파트의 핵심을 요약하고 확인 퀴즈를 풉니다. |

##### 수료 기준

출석 80% 이상(63시간 중 51시간 이상)이고 총점이 60점 이상이면 수료합니다.

| 평가 항목 | 비중 | 내용 |
|---|---|---|
| 일차별 실습 결과물 | 30% | 정해진 파트의 실습 결과가 실제로 동작하는지 확인합니다. |
| 미니 프로젝트 | 50% | 9일차에 만든 화면의 기능, 테스트, 보안 점검, 배포 결과를 봅니다. |
| 발표 | 20% | 설계 의도와 보안 조치를 설명하고 배포된 화면을 시연합니다. |

#### S1-P1-02. 학습 목표와 사전 지식

*주요 개념, 10분*

과정을 마치면 다음을 할 수 있습니다.

1. Vite로 React 프로젝트를 만들고 컴포넌트, 상태, 이펙트, 라우팅으로 화면을 구성합니다.
2. JSON 요청과 응답을 이해하고 Fetch API와 axios로 백엔드 API를 호출합니다.
3. 출처(Origin), 동일 출처 정책(SOP), CORS의 동작 원리를 설명하고 CORS 오류를 스스로 진단하고 해결합니다.
4. JWT 액세스 토큰과 리프레시 토큰으로 로그인, 자동 재발급, 로그아웃을 구현합니다.
5. TanStack Query로 서버 상태를 캐시하고, 변경 후 화면을 일관되게 갱신합니다.
6. Vitest, React Testing Library, MSW, Playwright로 단위부터 E2E까지 테스트합니다.
7. XSS, 토큰 저장, 보안 헤더, 의존성 점검 등 프론트엔드 개발 보안 요소를 적용합니다.
8. 관제 환경에 맞는 대시보드를 설계하고 차트 라이브러리로 상태와 추세를 시각화합니다.
9. Docker와 Nginx로 프론트엔드를 컨테이너화하고, GitHub Actions로 테스트와 S3 배포를 자동화합니다.

이 과정은 백엔드 과정을 마쳤거나, 최소한 백엔드 과정의 결과물(도서 관리 API)을 실행할 수 있는 학습자를 대상으로 합니다. 다음 지식이 있으면 학습이 수월합니다.

| 구분 | 필요한 수준 |
|---|---|
| HTML, CSS | 태그와 속성, 선택자의 기본 의미를 압니다. |
| JavaScript | 변수, 함수, 배열, 객체를 다뤄 본 경험이 있습니다. 모던 문법은 S2에서 정리합니다. |
| HTTP, REST | 메서드, 상태 코드, 헤더의 의미를 압니다. 백엔드 과정 S1에서 다룬 수준이면 충분합니다. |
| Docker | 이미지, 컨테이너, Compose의 개념을 압니다. 백엔드 과정 S8에서 다룬 수준이면 충분합니다. |

React를 처음 접하는 학습자도 따라올 수 있도록 S3에서 React의 핵심 개념을 처음부터 설명합니다.

#### S1-P1-03. 최종 결과물

*주요 개념, 15분*

과정을 마치면 다음 화면을 갖춘 웹 애플리케이션이 완성됩니다.

| 화면 | 주소 | 접근 권한 | 주요 기능 |
|---|---|---|---|
| 도서 목록 | `/` | 누구나 | 제목 검색, 저자별 보기, 정렬, 페이지 이동 |
| 도서 상세 | `/books/:bookId` | 누구나 (동작은 로그인 필요) | 표지 보기, 대여, 수정, 삭제, 표지 업로드 |
| 도서 등록, 수정 | `/books/new`, `/books/:bookId/edit` | 로그인 사용자 (수정은 소유자 또는 관리자만 성공) | 입력 검증, 바뀐 필드만 전송, 관리자 저자 추가 |
| 내 대여 | `/loans` | 로그인 사용자 | 대여 목록, 반납 |
| 로그인, 회원가입 | `/login`, `/signup` | 누구나 | 토큰 발급, 계정 생성 |
| 관제 대시보드 | `/dashboard` | 관리자 | 헬스 체크, KPI, 응답 시간, 상태 코드 분포, 로그 분석 |

완성된 프로젝트의 폴더 구조는 다음과 같습니다. 괄호 안은 그 파일을 처음 만드는 파트입니다.

```text
react-frontend/
├── .github/workflows/        # CI와 S3 배포 워크플로 (S16)
├── deploy/                   # S3 버킷 정책, OIDC 신뢰 정책 (S16)
├── e2e/                      # Playwright E2E 테스트 (S11-P39)
├── nginx/                    # Nginx 설정과 보안 헤더 (S15-P51)
├── .env.development          # 개발용 API 주소 (S6-P20)
├── .env.production           # 운영 빌드 API 주소 (S15-P50)
├── .env.test                 # 테스트용 가짜 API 주소 (S11-P36)
├── Dockerfile                # 멀티 스테이지 이미지 (S15-P52)
├── playwright.config.js
├── vite.config.js            # Vite와 Vitest 설정
└── src/
    ├── main.jsx              # 앱 시작점
    ├── App.jsx               # 라우트 정의
    ├── queryClient.js        # 서버 상태 캐시 설정 (S10-P34)
    ├── api/                  # 백엔드 호출 계층 (S6)
    ├── auth/                 # 토큰과 로그인 상태 (S8)
    ├── components/           # 공통 컴포넌트 (S7)
    ├── pages/                # 화면 (S7, S8, S9)
    ├── dashboard/            # 관제 대시보드 (S13, S14)
    ├── utils/                # 날짜, 파일 검사 같은 도우미 (S11, S12)
    └── test/                 # 테스트 공통 설정과 가짜 API (S11)
```

배포는 두 가지 형태를 모두 다룹니다. S15에서는 Nginx 컨테이너로 화면과 API를 같은 출처로 묶어 백엔드와 함께 실행하고, S16에서는 빌드 결과물을 S3 정적 웹사이트로 배포해 백엔드와 다른 출처에서 동작하게 합니다. 두 구성의 차이는 S5에서 배우는 CORS와 직접 이어집니다.

#### S1-P1-04. 예제 저장소와 단계별 브랜치

*주요 개념, 10분*

실습 코드는 GitHub의 `react-frontend` 저장소에 있습니다. 저장소 주소는 첫날 강사가 알려 줍니다. 이 저장소에는 코드가 바뀌는 파트마다 그 파트를 마친 상태가 `pN-done` 브랜치로 남아 있습니다. 예를 들어 `p21-done`은 S6-P21을 마친 코드이고, `main`은 과정을 모두 마친 최종 코드입니다.

실습 페이지 끝에는 "완성 코드: `p21-done` 브랜치"처럼 비교할 브랜치가 적혀 있습니다. 막혔을 때는 다음처럼 내 코드와 완성 코드를 비교해 다른 곳만 찾아 고칩니다.

```bash
git clone <저장소 주소> react-frontend-sample   # 예제 저장소를 내 작업 폴더와 따로 받아 둡니다.
cd react-frontend-sample
git switch p21-done                              # 비교할 시점으로 이동
git diff p20-done p21-done -- src                # 그 파트에서 바뀐 부분만 보기
```

완성 코드를 통째로 복사하지 않습니다. 복사한 코드는 다음 파트에서 고칠 때 어디를 바꿔야 할지 알 수 없게 만들고, 무엇보다 직접 입력하며 생기는 오류와 그 해결 과정이 이 과정에서 가장 중요한 학습입니다. 브랜치는 내 코드와 비교하는 용도로만 씁니다.

다음 명령은 앞으로 자주 씁니다. 모두 프로젝트 폴더에서 실행합니다.

| 명령 | 하는 일 | 처음 쓰는 곳 |
|---|---|---|
| `npm run dev` | 개발 서버 실행 | S3-P8 |
| `npm run build` | 운영 빌드 | S12-P42 |
| `npm run lint` | 코드 규칙 검사 | S12-P42 |
| `npm test` | 단위, 컴포넌트 테스트 | S11-P36 |
| `npm run test:e2e` | E2E 테스트 | S11-P39 |

#### S1-P1-05. 정리: 과정 소개와 결과물

*정리, 5분*

- 9일 동안 도서 관리 API를 사용하는 React 화면, 관제 대시보드, 테스트, 보안 점검, 자동 배포까지 완성합니다.
- 파트는 50분 수업과 10분 휴식이며, 페이지는 주요 개념, 실습, 정리로 나뉩니다.
- 막히면 예제 저장소의 `pN-done` 브랜치와 비교하되 통째로 복사하지 않습니다.

##### 확인 퀴즈

**Q1.** 이 과정의 화면이 데이터를 얻는 곳은 어디인가요?

1. Nginx 설정 파일
2. 화면 코드 안에 넣어 둔 고정 데이터
3. 백엔드 과정에서 만든 도서 관리 REST API
4. 브라우저의 localStorage

> 정답: 3번. 이 과정은 백엔드 과정의 도서 관리 API를 호출해 화면을 만듭니다.

**Q2.** 실습하다 막혔을 때 예제 저장소의 완성 코드 브랜치를 쓰는 올바른 방법은 무엇인가요?

1. 완성 코드를 통째로 복사해 덮어쓴다.
2. 내 코드와 비교해 다른 곳을 찾아 직접 고친다.
3. 다음 파트로 바로 넘어간다.
4. main 브랜치를 내려받아 실행만 해 본다.

> 정답: 2번. 브랜치는 비교용입니다. 직접 고쳐야 다음 파트에서 코드를 이어서 바꿀 수 있습니다.

### S1-P2. 브라우저, DOM, SPA

> 학습 목표: 브라우저가 화면을 만드는 과정과 SPA의 동작 방식을 설명하고 개발자 도구로 관찰할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S1-P2-01 브라우저가 화면을 만드는 방식 | 주요 개념 | 15분 |
| S1-P2-02 MPA와 SPA | 주요 개념 | 15분 |
| S1-P2-03 개발자 도구로 화면과 요청 관찰하기 | 실습 | 15분 |
| S1-P2-04 정리: 브라우저, DOM, SPA | 정리 | 5분 |
| 휴식 | | 10분 |

#### S1-P2-01. 브라우저가 화면을 만드는 방식

*주요 개념, 15분*

브라우저는 서버에서 HTML 문서를 받아 해석한 뒤, 문서 구조를 메모리 안의 나무 모양 객체로 만듭니다. 이 객체를 DOM(Document Object Model)이라고 합니다. CSS는 DOM의 각 요소가 어떤 모양으로 그려질지 정하고, JavaScript는 DOM을 읽고 바꾸어 화면을 동적으로 변화시킵니다. 즉 사용자가 보는 화면은 결국 DOM이며, 프론트엔드 개발은 "어떤 데이터가 있을 때 DOM이 어떤 모습이어야 하는가"를 정하는 일이라고 볼 수 있습니다.

DOM을 직접 고치는 코드는 화면이 복잡해질수록 관리하기 어렵습니다. 목록에 도서 하나가 추가되면 표에 행을 넣고, 전체 권수를 고치고, 빈 목록 안내 문구를 숨기는 일을 모두 손으로 맞춰야 하기 때문입니다. React는 이 문제를 "데이터(상태)를 바꾸면 화면은 React가 알아서 맞춘다"는 방식으로 해결합니다. 개발자는 상태에 따른 화면의 모습만 선언하면 됩니다. 이 개념은 S3에서 자세히 다룹니다.

##### 개발자 도구

이 과정에서는 브라우저 개발자 도구(F12)를 계속 사용합니다. Chrome 또는 Edge를 기준으로 자주 쓰는 탭은 다음과 같습니다.

| 탭 | 용도 | 주로 쓰는 곳 |
|---|---|---|
| Elements | 지금 화면의 DOM과 적용된 CSS 확인 | 화면 구조 확인 |
| Console | JavaScript 실행, 오류 메시지 확인 | 모든 실습 |
| Network | 오간 요청과 응답의 주소, 상태 코드, 헤더, 본문 확인 | API 연동, CORS, 인증 |
| Application | localStorage, sessionStorage, 쿠키 확인 | 토큰 보관 (S8) |

#### S1-P2-02. MPA와 SPA

*주요 개념, 15분*

전통적인 웹 사이트는 페이지를 이동할 때마다 서버가 완성된 HTML을 새로 만들어 보내 줍니다. 이 방식을 MPA(Multi Page Application)라고 합니다. 반면 SPA(Single Page Application)는 처음 한 번만 HTML과 JavaScript 묶음을 받고, 이후에는 JavaScript가 필요한 데이터만 API로 받아 와 화면을 다시 그립니다. 주소창의 경로가 바뀌어도 실제로는 같은 페이지 안에서 화면만 교체됩니다.

| 구분 | MPA | SPA |
|---|---|---|
| 화면을 만드는 곳 | 서버 | 브라우저(클라이언트 측 렌더링, CSR) |
| 서버가 보내는 것 | 완성된 HTML | 처음에는 HTML과 JS, 이후에는 JSON 데이터 |
| 페이지 이동 | 전체 새로고침 | 필요한 부분만 다시 그림 |
| 백엔드 역할 | 화면과 데이터 모두 담당 | 데이터 API만 담당 |

백엔드 과정에서 만든 API는 HTML이 아니라 JSON만 돌려줍니다. 따라서 이 API를 사용하는 화면은 자연스럽게 SPA 구조가 됩니다. 백엔드는 데이터와 규칙을, 프론트엔드는 화면과 사용자 경험을 맡는 분업 구조입니다.

SPA가 늘 정답은 아닙니다. 첫 화면을 그리기 전에 JavaScript를 모두 받아 실행해야 하므로 첫 표시가 늦을 수 있고, 검색 엔진이 내용을 읽기 어려울 수 있습니다. 그래서 공개 웹사이트에서는 서버에서 HTML을 미리 만들어 보내는 SSR(서버 측 렌더링)을 함께 쓰기도 합니다. 이 과정의 화면은 로그인한 사용자와 운영자가 쓰는 업무용 화면이므로 검색 노출이 필요 없고, 백엔드가 이미 JSON API로 분리되어 있어 SPA가 잘 맞습니다.

#### S1-P2-03. 개발자 도구로 화면과 요청 관찰하기

*실습, 15분*

백엔드 과정의 교안 사이트를 열어 개발자 도구에 익숙해집니다. (백엔드 실행은 다음 파트에서 준비합니다.)

1. 브라우저로 https://myanjini.github.io/fastapi-rest-api/index.html 을 엽니다.
2. F12로 개발자 도구를 열고 Elements 탭에서 목차 링크 하나를 찾습니다. 화면의 링크에 마우스 오른쪽 버튼을 누르고 "검사"를 고르면 바로 그 요소로 이동합니다.
3. Elements 탭에서 링크 글자를 두 번 눌러 다른 글자로 바꿔 봅니다. 화면이 바로 바뀌는 것을 확인합니다. 화면은 DOM이며 DOM을 바꾸면 화면이 바뀐다는 것을 직접 본 것입니다. 새로고침하면 원래대로 돌아옵니다.
4. Network 탭을 연 상태에서 다른 섹션 링크를 누릅니다. `Doc` 유형의 요청으로 새 HTML 문서 전체가 내려오는 것을 확인합니다. 이 사이트는 페이지마다 HTML을 받는 MPA 방식입니다.
5. Console 탭에서 다음을 입력해 DOM을 코드로 바꿔 봅니다.

```js
document.querySelector('h1').textContent = 'DOM을 코드로 바꿨습니다';
document.querySelectorAll('a').length; // 이 페이지의 링크 개수
```

6. 다음 질문에 답해 봅니다.
   - 4번에서 Network 탭의 첫 요청은 어떤 유형이었습니까? SPA라면 페이지 이동 때 어떤 유형의 요청이 보일까요?
   - 5번에서 바꾼 제목이 새로고침 후 사라지는 이유는 무엇입니까?

#### S1-P2-04. 정리: 브라우저, DOM, SPA

*정리, 5분*

- 사용자가 보는 화면은 DOM이며, React는 상태에 따라 DOM을 자동으로 맞추는 도구입니다.
- SPA는 처음에 HTML과 JavaScript를 받고, 이후에는 JSON 데이터만 받아 필요한 부분을 다시 그립니다.
- 개발자 도구의 Elements, Console, Network, Application 탭은 이 과정 내내 사용합니다.

##### 확인 퀴즈

**Q1.** SPA에서 다른 화면으로 이동할 때 일반적으로 서버에서 받는 것은 무엇인가요?

1. 화면에 필요한 JSON 데이터
2. CSS 파일 전체
3. 아무것도 받지 않는다.
4. 완성된 새 HTML 문서

> 정답: 1번. SPA는 처음에만 HTML과 JS를 받고, 이후에는 API로 데이터만 받아 화면을 다시 그립니다.

**Q2.** 개발자 도구에서 API 요청의 상태 코드와 응답 본문을 확인하는 탭은 무엇인가요?

1. Network
2. Sources
3. Elements
4. Application

> 정답: 1번. Network 탭에서 각 요청의 주소, 상태 코드, 헤더, 본문을 볼 수 있습니다.

### S1-P3. 개발 환경 구성과 백엔드 준비

> 학습 목표: Node.js와 편집기를 설치하고, 연계할 백엔드를 실행해 실습 데이터를 준비할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S1-P3-01 Node.js, 편집기, Git 준비 | 실습 | 15분 |
| S1-P3-02 백엔드 실행과 실습 데이터 | 실습 | 20분 |
| S1-P3-03 연계할 백엔드 API 한눈에 보기 | 주요 개념 | 10분 |
| S1-P3-04 정리: 개발 환경 구성과 백엔드 준비 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S1-P3-01. Node.js, 편집기, Git 준비

*실습, 15분*

**1) Node.js 설치**

Vite와 React Router 최신 버전은 Node.js 22.12 이상(React Router 8은 22.22 이상)을 요구합니다. https://nodejs.org 에서 LTS 버전(24 이상)을 설치한 뒤 터미널에서 버전을 확인합니다.

```bash
node -v    # v24.x.x 처럼 22.22 이상이면 됩니다.
npm -v
```

**2) 편집기와 브라우저**

편집기는 Visual Studio Code를 권장합니다. 브라우저는 Chrome 또는 Edge를 사용합니다. 이 과정에서는 브라우저 개발자 도구(F12)의 Console, Network, Application 탭을 자주 사용하므로 미리 열어 보며 위치를 익혀 둡니다.

**3) Git 확인**

예제 저장소를 받고 내 코드를 관리하려면 Git이 필요합니다. 백엔드 과정에서 설치했다면 버전만 확인합니다.

```bash
git --version
```

#### S1-P3-02. 백엔드 실행과 실습 데이터

*실습, 20분*

**3) 백엔드 준비**

백엔드 과정의 프로젝트 폴더(이 교안에서는 `book-api`라고 부릅니다)에서 백엔드 S8-P27의 Docker Compose 구성으로 API와 PostgreSQL을 실행합니다.

```bash
cd book-api
docker compose up -d --build
docker compose ps          # db와 api가 모두 running(healthy)인지 확인
curl http://127.0.0.1:8000/health
```

`{"status":"ok","database":"ok"}`가 출력되면 준비가 끝났습니다. 브라우저에서 `http://127.0.0.1:8000/docs`를 열어 Swagger UI가 보이는지도 확인합니다.

**4) 실습용 계정과 데이터**

Swagger UI에서 다음 순서로 실습 데이터를 만들어 둡니다.

1. `POST /auth/signup`으로 일반 사용자 계정과 관리자로 쓸 계정을 하나씩 만듭니다.
2. 백엔드 과정 S5-P17-03에서 다룬 `app/make_admin.py`로 관리자로 쓸 계정의 `role`을 `"admin"`으로 바꿉니다.
3. 관리자 계정으로 로그인(Swagger UI 오른쪽 위 Authorize)한 뒤 `POST /authors`로 저자 두세 명을, `POST /books`로 도서 15권 이상을 등록합니다. 페이지 이동을 확인하려면 도서가 10권을 넘어야 합니다.

**5) 작업 폴더 배치**

프론트엔드 프로젝트는 백엔드 폴더와 나란히 만듭니다. S15에서 백엔드의 Compose 파일이 상대 경로로 프론트엔드 폴더를 찾기 때문입니다.

```text
workspace/
├── book-api/          # 백엔드 과정 결과물
└── react-frontend/    # 이 과정에서 만들 프론트엔드
```

#### S1-P3-03. 연계할 백엔드 API 한눈에 보기

*주요 개념, 10분*

이 과정에서 호출하는 백엔드 API를 먼저 정리합니다. 모두 백엔드 과정에서 만든 API이며, 괄호 안은 해당 내용을 다룬 백엔드 강의입니다. 화면을 만들다가 요청 형식이나 상태 코드가 헷갈리면 이 표로 돌아옵니다.

**도서와 저자**

| 메서드와 경로 | 설명 | 요청 | 성공 | 주요 실패 |
|---|---|---|---|---|
| `GET /books` | 도서 목록 (백엔드 S4-P12) | 쿼리: `q`(제목 검색, 최대 50자), `author`(저자 이름 일치), `sort`(`id`, `price`, `-price`), `skip`, `limit` | 200, `BookPage` | 422 |
| `GET /books/{book_id}` | 도서 상세 | 없음 | 200, `BookRead` | 404 |
| `POST /books` | 도서 등록 (백엔드 S4-P13) | JSON `BookCreate` | 201, `BookRead` | 401, 409 `DUPLICATE_ISBN`, 422 `INVALID_AUTHOR` |
| `PATCH /books/{book_id}` | 도서 일부 수정 (백엔드 S4-P12) | JSON, 바꿀 필드만 | 200, `BookRead` | 401, 403, 404, 409 |
| `DELETE /books/{book_id}` | 도서 삭제 | 없음 | 204, 본문 없음 | 401, 403, 404, 409 `BOOK_HAS_LOANS` |
| `POST /books/{book_id}/cover` | 표지 업로드 (백엔드 S6-P20) | `multipart/form-data`, 필드 `file` | 200, `BookRead` | 413 `FILE_TOO_LARGE`, 415 `UNSUPPORTED_FILE_TYPE`, 422 `EMPTY_FILE` |
| `GET /authors` | 저자 목록 (백엔드 S4-P13) | 쿼리: `skip`, `limit` | 200, `AuthorRead` 배열 | |
| `POST /authors` | 저자 등록 | JSON `{"name": "..."}` | 201 | 403(일반 사용자), 409 `DUPLICATE_AUTHOR` |

**인증 (S5)**

| 메서드와 경로 | 설명 | 요청 | 성공 | 주요 실패 |
|---|---|---|---|---|
| `POST /auth/signup` | 회원가입 | JSON `{"email", "password"}` | 201, `UserRead` | 409 `DUPLICATE_EMAIL` |
| `POST /auth/token` | 로그인 | **폼 형식** `username`(이메일), `password` | 200, 토큰 | 401 `INVALID_CREDENTIALS`, 429 `TOO_MANY_ATTEMPTS` |
| `POST /auth/refresh` | 토큰 재발급 | JSON `{"refresh_token": "..."}` | 200, 토큰 | 401 |
| `POST /auth/logout` | 로그아웃 | JSON `{"refresh_token": "..."}` | 204 | |
| `GET /auth/me` | 내 정보 | 헤더 `Authorization: Bearer <토큰>` | 200, `{"id", "email", "role"}` | 401 |

**대여 (백엔드 S6-P21)와 운영 (백엔드 S8-P28)**

| 메서드와 경로 | 설명 | 요청 | 성공 | 주요 실패 |
|---|---|---|---|---|
| `POST /loans` | 대여 | JSON `{"book_id": 7}` | 201, `LoanRead` | 409 `ALREADY_LOANED`, `LOAN_LIMIT_EXCEEDED`, `OUT_OF_STOCK` |
| `POST /loans/{loan_id}/return` | 반납 | 없음 | 200, `LoanRead` | 403, 404, 409 `ALREADY_RETURNED` |
| `GET /loans/me` | 내 대여 목록 | 없음 | 200, `LoanRead` 배열 | 401 |
| `GET /health` | 헬스 체크 | 없음 | 200 `{"status": "ok", "database": "ok"}` | 503 `{"status": "error", "database": "unreachable"}` |

**주요 응답 모델**

```json
// BookPage: GET /books 응답
{ "items": [ /* BookRead 배열 */ ], "total": 23, "skip": 0, "limit": 10 }

// BookRead: 저자는 author_id가 아니라 author 객체로 들어옵니다.
{ "id": 7, "title": "파이썬 입문", "price": 18000, "isbn": "9791100000011",
  "author": { "id": 1, "name": "홍길동" }, "cover_url": "/covers/3f2a...e1.png" }

// LoanRead
{ "id": 3, "user_id": 2, "book": { "id": 7, "title": "파이썬 입문" },
  "loaned_at": "2026-11-23T06:58:12", "returned_at": null }

// 백엔드가 직접 만든 오류 (S2-P6 AppError)
{ "code": "DUPLICATE_ISBN", "message": "이미 등록된 ISBN입니다." }
```

입력 규칙도 미리 기억해 둡니다. `BookCreate`의 `title`은 1~100자, `author_id`는 0보다 큰 정수, `price`는 0 이상 1,000,000 이하의 정수, `isbn`은 생략하거나 숫자 13자리입니다. 사용자 역할 `role`은 `"user"`와 `"admin"` 두 가지이며, 도서 수정과 삭제는 그 도서를 등록한 사용자(소유자)나 관리자만 할 수 있습니다. 한 사용자가 동시에 빌릴 수 있는 도서는 3권입니다.

> 참고: `BookRead`에 `cover_url` 외에 재고(`stock`)나 소유자(`owner_id`) 필드가 포함되는지는 백엔드 구현에 따라 다릅니다. 이 교안의 화면은 위 표에 나온 필드만 사용하므로 어느 쪽이든 동작합니다. 실제 응답은 백엔드의 `/docs` 화면에서 확인합니다.

#### S1-P3-04. 정리: 개발 환경 구성과 백엔드 준비

*정리, 5분*

- Node.js 22.22 이상(LTS 24 권장), VS Code, Chrome 또는 Edge, Git을 준비했습니다.
- 백엔드는 Docker Compose로 `http://127.0.0.1:8000`에서 실행하고, `/health`와 `/docs`로 동작을 확인합니다.
- 연계 API 표는 과정 전체에서 참고하는 기준 자료이며, 요청 형식이 헷갈리면 이 표로 돌아옵니다.

##### 확인 퀴즈

**Q1.** 백엔드가 정상 실행 중인지 가장 간단히 확인하는 방법은 무엇인가요?

1. `curl http://127.0.0.1:8000/health`로 상태를 확인한다.
2. `npm run build`를 실행한다.
3. 데이터베이스 파일을 직접 연다.
4. 브라우저에서 프론트엔드 화면을 연다.

> 정답: 1번. 헬스 체크 API는 API와 데이터베이스 연결 상태를 함께 알려 줍니다.

**Q2.** 로그인 API `POST /auth/token`이 요구하는 본문 형식은 무엇인가요?

1. application/x-www-form-urlencoded
2. multipart/form-data
3. text/plain
4. application/json

> 정답: 1번. OAuth2 Password Flow를 따르므로 폼 형식으로 username과 password를 보냅니다.

### S1-P4. 프론트엔드 관점의 HTTP와 JSON

> 학습 목표: 요청과 응답의 구성 요소를 구분하고, JSON을 JavaScript 값과 서로 변환할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S1-P4-01 프론트엔드 관점에서 본 HTTP | 주요 개념 | 15분 |
| S1-P4-02 JSON | 주요 개념 | 10분 |
| S1-P4-03 JSON 변환과 백엔드 응답 읽기 | 실습 | 20분 |
| S1-P4-04 정리: 프론트엔드 관점의 HTTP와 JSON | 정리 | 5분 |
| 휴식 | | 10분 |

#### S1-P4-01. 프론트엔드 관점에서 본 HTTP

*주요 개념, 15분*

백엔드 과정에서 HTTP를 서버 입장에서 배웠다면, 이번에는 요청을 보내고 응답을 해석하는 입장에서 정리합니다.

**요청의 구성**

- 메서드: `GET`(조회), `POST`(생성, 동작 실행), `PATCH`(일부 수정), `DELETE`(삭제)
- 주소: 경로(`/books/7`)와 쿼리 문자열(`?q=파이썬&sort=price`)
- 헤더: 요청에 대한 부가 정보. 이 과정에서는 `Content-Type`(본문 형식)과 `Authorization`(인증 토큰)을 주로 씁니다.
- 본문: `POST`, `PATCH` 요청에 담는 데이터

**본문 형식 세 가지**

이 과정에서 백엔드에 보내는 본문은 세 가지 형식이 있습니다. 어떤 API가 어떤 형식을 요구하는지 정확히 맞춰야 하며, 형식이 틀리면 백엔드는 422 오류를 돌려줍니다.

| 형식 (`Content-Type`) | 모양 | 사용하는 API |
|---|---|---|
| `application/json` | `{"book_id": 7}` | 도서 등록과 수정, 회원가입, 대여, 재발급, 로그아웃 |
| `application/x-www-form-urlencoded` | `username=a%40b.com&password=1234` | 로그인(`POST /auth/token`) |
| `multipart/form-data` | 여러 부분으로 나뉜 본문, 파일 포함 가능 | 표지 업로드 |

**응답의 구성**

응답은 상태 코드, 헤더, 본문으로 이루어집니다. 프론트엔드는 상태 코드의 범위로 성공과 실패를 먼저 나누고, 본문으로 세부 내용을 읽습니다.

| 범위 | 의미 | 화면에서의 처리 예 |
|---|---|---|
| 2xx | 성공 | 결과를 보여 주거나 다음 화면으로 이동 |
| 4xx | 요청 쪽 문제 | 401이면 로그인 안내, 403이면 권한 안내, 409와 422면 입력 수정 안내 |
| 5xx | 서버 쪽 문제 | 잠시 후 다시 시도하라는 안내, 관제 화면에서는 장애로 표시 |

204 응답처럼 본문이 없는 성공도 있다는 점에 주의합니다. 도서 삭제와 로그아웃이 204를 돌려주므로, 이때 본문을 JSON으로 해석하려 하면 오류가 납니다.

#### S1-P4-02. JSON

*주요 개념, 10분*

JSON(JavaScript Object Notation)은 데이터를 주고받기 위한 텍스트 형식입니다. 이름은 JavaScript에서 왔지만 Python, Java 등 거의 모든 언어가 지원합니다. 백엔드 과정에서 Pydantic 모델이 응답을 JSON으로 바꿔 보냈다면, 프론트엔드에서는 그 JSON 텍스트를 다시 JavaScript 값으로 바꿔 사용합니다.

**문법 규칙**

- 값의 종류는 객체(`{}`), 배열(`[]`), 문자열, 숫자, 불리언(`true`, `false`), `null` 여섯 가지뿐입니다.
- 객체의 키와 문자열은 반드시 큰따옴표(`"`)로 감쌉니다. 작은따옴표는 허용되지 않습니다.
- 마지막 항목 뒤에 쉼표를 붙일 수 없습니다.
- 주석을 쓸 수 없습니다. (이 교안의 JSON 예시에 있는 `//` 주석은 설명을 위한 것이며 실제 JSON에는 넣을 수 없습니다.)

**언어별 자료형 대응**

| JSON | JavaScript | Python(백엔드) |
|---|---|---|
| 객체 `{}` | `Object` | `dict`, Pydantic 모델 |
| 배열 `[]` | `Array` | `list` |
| 문자열 | `string` | `str` |
| 숫자 | `number` | `int`, `float` |
| `true`, `false` | `boolean` | `True`, `False` |
| `null` | `null` | `None` |

**JSON에 없는 것들**

JSON으로 데이터를 주고받을 때 자주 겪는 문제는 대부분 "JSON에 없는 자료형"에서 생깁니다.

- 날짜와 시각: JSON에는 날짜 자료형이 없어서 `"2026-11-23T06:58:12"` 같은 문자열로 보냅니다. 프론트엔드에서 `new Date()`로 바꿔야 날짜로 다룰 수 있습니다. 특히 시간대 표시(`Z`, `+09:00`)가 없는 문자열은 브라우저가 현지 시각으로 해석하므로, 백엔드가 UTC로 저장한 값을 표시할 때 9시간이 어긋날 수 있습니다. 이 문제는 S9의 대여 화면에서 해결합니다.
- `undefined`: JavaScript의 `undefined`는 JSON에 없습니다. 객체를 JSON으로 바꿀 때 값이 `undefined`인 속성은 아예 빠집니다. PATCH 요청에서 "보내지 않은 필드"와 "`null`로 지운 필드"가 다르게 처리되는 이유가 여기에 있습니다.
- 아주 큰 정수: JavaScript의 `number`는 2의 53제곱보다 큰 정수를 정확히 표현하지 못합니다. ISBN처럼 숫자로만 된 긴 식별자를 백엔드가 문자열로 다루는 이유이기도 합니다.

#### S1-P4-03. JSON 변환과 백엔드 응답 읽기

*실습, 20분*

JavaScript는 두 함수로 JSON을 다룹니다. `JSON.stringify`는 값을 JSON 텍스트로 바꾸고(직렬화), `JSON.parse`는 JSON 텍스트를 값으로 바꿉니다(역직렬화).

```js
const book = { title: '파이썬 입문', price: 18000, isbn: undefined, author: { id: 1, name: '홍길동' } };

const text = JSON.stringify(book);
console.log(text);
// {"title":"파이썬 입문","price":18000,"author":{"id":1,"name":"홍길동"}}
// isbn은 undefined이므로 결과에서 빠졌습니다.

const parsed = JSON.parse(text);
console.log(parsed.author.name); // 홍길동

console.log(JSON.stringify(book, null, 2)); // 두 칸 들여쓰기로 보기 좋게 출력
```

나중에 사용할 axios와 Fetch API의 `response.json()`은 내부에서 이 변환을 대신 해 줍니다. 그래도 원리를 알아 두면 "응답이 왜 문자열로 왔는지", "보낸 필드가 왜 빠졌는지" 같은 문제를 쉽게 진단할 수 있습니다.

이제 실제 백엔드 응답을 다뤄 봅니다.

1. 브라우저 주소창에 `http://127.0.0.1:8000/books?limit=3`을 입력합니다. 화면에 JSON 텍스트가 그대로 보입니다. 이것이 백엔드가 보내는 실제 응답입니다.
2. 같은 탭에서 개발자 도구의 Console 탭을 열고 다음 코드를 입력합니다. 지금은 페이지와 API의 주소가 같아서 문제없이 동작합니다. 주소가 다른 페이지에서 같은 코드를 실행하면 어떻게 되는지는 S5에서 확인합니다.

```js
const response = await fetch('/books?limit=3');
const page = await response.json();
console.log(page.total, page.items.length);
console.table(page.items.map((b) => ({ id: b.id, title: b.title, author: b.author.name, price: b.price })));
```

3. 다음 질문에 스스로 답해 봅니다.
   - `page.total`과 `page.items.length`가 다른 이유는 무엇입니까?
   - 전체 도서의 평균 가격을 구하려면 어떤 배열 메서드를 써야 합니까? 이 응답만으로 전체 평균을 구할 수 있습니까?
   - `JSON.stringify(page.items[0], null, 2)`의 결과에서 `author`는 어떤 모양입니까?

#### S1-P4-04. 정리: 프론트엔드 관점의 HTTP와 JSON

*정리, 5분*

- 요청 본문 형식은 JSON, 폼, 멀티파트 세 가지이며 API마다 요구하는 형식을 정확히 맞춰야 합니다.
- 상태 코드의 범위(2xx, 4xx, 5xx)로 성공과 실패를 먼저 나누고, 204처럼 본문이 없는 성공도 있습니다.
- JSON에는 날짜와 `undefined`가 없으므로 변환 과정에서 생기는 차이를 의식해야 합니다.

##### 확인 퀴즈

**Q1.** `JSON.stringify({ a: 1, b: undefined })`의 결과로 알맞은 것은 무엇인가요?

1. `{"a":1}`
2. 오류가 발생한다.
3. `{"a":1,"b":undefined}`
4. `{"a":1,"b":null}`

> 정답: 1번. JSON에는 undefined가 없으므로 값이 undefined인 속성은 결과에서 빠집니다.

**Q2.** 도서 삭제 API가 204를 돌려줄 때 주의할 점은 무엇인가요?

1. 본문이 없으므로 JSON으로 해석하려 하면 오류가 난다.
2. 본문에 삭제된 도서 정보가 들어 있다.
3. 로그인이 필요하다는 뜻이다.
4. 실패한 요청이므로 다시 보내야 한다.

> 정답: 1번. 204 No Content는 본문 없는 성공 응답입니다.

---

## S2. 모던 JavaScript

*1일차 오후, 3시간*

> 섹션 목표: React 코드를 읽고 쓰는 데 필요한 모던 JavaScript 문법을 백엔드 데이터로 연습합니다.

### S2-P5. 변수, 함수, 객체와 배열

> 학습 목표: const와 let, 화살표 함수, 구조 분해, 전개 문법, 옵셔널 체이닝을 사용할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S2-P5-01 변수와 함수 | 주요 개념 | 15분 |
| S2-P5-02 구조 분해, 전개, 옵셔널 체이닝 | 주요 개념 | 15분 |
| S2-P5-03 도서 객체 다루기 연습 | 실습 | 15분 |
| S2-P5-04 정리: 변수, 함수, 객체와 배열 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S2-P5-01. 변수와 함수

*주요 개념, 15분*

React 코드는 최신 JavaScript 문법을 적극적으로 사용합니다. 이번 섹션에서는 이후 모든 코드의 기본이 되는 문법을 정리하고, 백엔드가 돌려주는 도서 데이터로 직접 연습합니다. 예제는 브라우저 Console 탭에 그대로 붙여 넣어 실행할 수 있습니다.

##### const와 let

값을 다시 대입하지 않는 변수는 `const`, 바꿔야 하는 변수는 `let`으로 선언합니다. `var`는 쓰지 않습니다. 기본은 `const`로 쓰고, 정말 바꿔야 할 때만 `let`을 쓰면 "이 값이 어디서 바뀌는가"를 추적할 일이 줄어듭니다.

```js
const PAGE_SIZE = 10;
let retries = 0;
retries += 1;      // 가능
// PAGE_SIZE = 20; // TypeError: Assignment to constant variable.

const book = { title: '파이썬 입문' };
book.title = 'FastAPI 실전'; // 가능: const는 "변수가 가리키는 대상"을 바꾸지 못하게 할 뿐, 객체 내부는 바꿀 수 있습니다.
```

마지막 줄은 React에서 자주 하는 실수와 연결됩니다. React의 state는 이렇게 내부를 직접 고치면 안 되고, 새 객체를 만들어 바꿔 끼워야 합니다(S3-P10).

##### 템플릿 리터럴

백틱(`` ` ``) 안에 `${}`로 값을 넣어 문자열을 만듭니다. 주소나 안내 문구를 만들 때 씁니다.

```js
const bookId = 7;
const url = `/books/${bookId}/cover`;
const message = `도서 ${3}권을 불러왔습니다.`;
```

##### 화살표 함수

함수를 짧게 쓰는 문법입니다. 본문이 식 하나면 중괄호와 `return`을 생략할 수 있습니다. 객체를 바로 돌려줄 때는 괄호로 감쌉니다.

```js
function add(a, b) { return a + b; }  // 함수 선언
const add2 = (a, b) => a + b;          // 화살표 함수
const toLabel = (book) => `${book.title} (${book.price}원)`;
const toRow = (book) => ({ id: book.id, title: book.title }); // 객체를 돌려줄 때는 괄호
```

React 컴포넌트는 함수 선언(`function BookRow() {}`)으로, 이벤트 처리나 배열 메서드에 넘기는 짧은 함수는 화살표 함수로 쓰는 것이 이 과정의 관례입니다.

#### S2-P5-02. 구조 분해, 전개, 옵셔널 체이닝

*주요 개념, 15분*

##### 구조 분해

객체나 배열에서 필요한 값만 꺼내 변수로 만듭니다. React 컴포넌트가 props를 받을 때, `useState`의 결과를 받을 때 항상 씁니다.

```js
const book = { id: 7, title: '파이썬 입문', price: 18000, author: { id: 1, name: '홍길동' } };

const { title, price } = book;                 // 객체 구조 분해
const { author: { name } } = book;             // 중첩된 값 꺼내기
const { isbn = '없음' } = book;                // 값이 없을 때 기본값
const [first, second] = ['가', '나'];          // 배열 구조 분해
const [count, setCount] = [0, () => {}];       // useState가 돌려주는 모양과 같습니다.

function BookRow({ book }) { /* props 객체에서 book만 꺼냅니다 */ }
```

##### 전개 문법

`...`으로 객체나 배열을 펼쳐 복사본을 만듭니다. 원본을 바꾸지 않고 일부만 바꾼 새 값을 만들 때 씁니다. React의 state 변경에 반드시 필요한 문법입니다.

```js
const changed = { ...book, price: 20000 };     // book은 그대로, price만 바뀐 새 객체
const books = [book];
const added = [...books, { id: 8, title: 'React 시작하기' }]; // 끝에 추가한 새 배열
console.log(book.price, changed.price, books.length, added.length); // 18000 20000 1 2
```

전개 문법은 한 단계만 복사합니다. `changed.author`와 `book.author`는 여전히 같은 객체이므로, 중첩된 값을 바꿀 때는 그 단계도 펼쳐야 합니다: `{ ...book, author: { ...book.author, name: '김철수' } }`.

##### 옵셔널 체이닝과 널 병합

`?.`는 앞의 값이 `null`이나 `undefined`이면 오류 없이 `undefined`를 돌려줍니다. `??`는 앞의 값이 `null`이나 `undefined`일 때만 오른쪽 값을 씁니다.

```js
const noAuthor = { title: '저자 미상 도서', author: null };
noAuthor.author.name;              // TypeError: Cannot read properties of null
noAuthor.author?.name;             // undefined
noAuthor.author?.name ?? '저자 미상'; // '저자 미상'

const page = { skip: 0 };
page.skip || 10;  // 10  ← 0을 "없음"으로 잘못 처리
page.skip ?? 10;  // 0   ← 0은 그대로
```

`||`는 0, 빈 문자열, `false`도 "없음"으로 보지만 `??`는 `null`과 `undefined`만 없음으로 봅니다. 페이지 번호나 가격처럼 0이 정상 값인 경우에는 `??`를 씁니다.

#### S2-P5-03. 도서 객체 다루기 연습

*실습, 15분*

`http://127.0.0.1:8000/docs`를 열고 Console 탭에서 아래 데이터로 연습합니다. 각 문제를 먼저 직접 풀고, 아래의 예시 답과 비교합니다.

```js
const page = {
  items: [
    { id: 1, title: '파이썬 입문', price: 18000, isbn: null, author: { id: 1, name: '홍길동' } },
    { id: 2, title: 'FastAPI 실전', price: 32000, isbn: '9791100000011', author: { id: 2, name: '김철수' } },
    { id: 3, title: '저자 미상 도서', price: 0, isbn: null, author: null },
  ],
  total: 3, skip: 0, limit: 10,
};
```

1. 구조 분해로 `page`에서 `items`와 `total`을 꺼내 `"전체 3권"`을 출력합니다.
2. 첫 번째 도서의 가격만 20000으로 바꾼 새 객체를 만들고, 원본 가격이 그대로인지 확인합니다.
3. 세 번째 도서의 저자 이름을 출력하되, 저자가 없으면 `"저자 미상"`을 출력합니다.
4. 세 번째 도서의 가격을 `?? '가격 미정'`과 `|| '가격 미정'`으로 각각 출력해 차이를 확인합니다.
5. 도서 하나를 받아 `"파이썬 입문 - 홍길동 (18,000원)"` 형태의 문자열을 돌려주는 화살표 함수 `toLabel`을 만듭니다. 가격의 천 단위 쉼표는 `price.toLocaleString('ko-KR')`로 만듭니다.

예시 답은 다음과 같습니다.

```js
const { items, total } = page;
console.log(`전체 ${total}권`);

const changed = { ...items[0], price: 20000 };
console.log(items[0].price, changed.price); // 18000 20000

console.log(items[2].author?.name ?? '저자 미상');

console.log(items[2].price ?? '가격 미정'); // 0
console.log(items[2].price || '가격 미정'); // '가격 미정'

const toLabel = (book) => `${book.title} - ${book.author?.name ?? '저자 미상'} (${book.price.toLocaleString('ko-KR')}원)`;
items.forEach((b) => console.log(toLabel(b)));
```

#### S2-P5-04. 정리: 변수, 함수, 객체와 배열

*정리, 5분*

- 기본은 `const`, 바꿔야 할 때만 `let`을 쓰며, `const`라도 객체 내부는 바뀔 수 있습니다.
- 구조 분해로 필요한 값만 꺼내고, 전개 문법으로 원본을 바꾸지 않는 복사본을 만듭니다.
- `?.`로 없는 값에 안전하게 접근하고, 0이 정상 값이면 `||` 대신 `??`를 씁니다.

##### 확인 퀴즈

**Q1.** `const p = { skip: 0 }`일 때 `p.skip ?? 10`의 결과는 무엇인가요?

1. undefined
2. null
3. 0
4. 10

> 정답: 3번. ??는 null과 undefined일 때만 오른쪽 값을 쓰므로 0은 그대로입니다.

**Q2.** 원본 `book`을 바꾸지 않고 가격만 바꾼 새 객체를 만드는 코드는 무엇인가요?

1. `Object.freeze(book)`
2. `const copy = book; copy.price = 20000`
3. `book.price = 20000`
4. `{ ...book, price: 20000 }`

> 정답: 4번. 전개 문법으로 복사본을 만들면서 일부 값만 바꿉니다. 대입만 하면 같은 객체를 가리킵니다.

### S2-P6. 배열 메서드와 모듈

> 학습 목표: map, filter, reduce 같은 배열 메서드로 데이터를 가공하고, 모듈로 코드를 나누고 가져올 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S2-P6-01 배열 메서드 | 주요 개념 | 15분 |
| S2-P6-02 모듈 | 주요 개념 | 10분 |
| S2-P6-03 백엔드 목록 데이터 가공하기 | 실습 | 20분 |
| S2-P6-04 정리: 배열 메서드와 모듈 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S2-P6-01. 배열 메서드

*주요 개념, 15분*

화면을 그릴 때는 `for` 문 대신 배열 메서드를 주로 씁니다. 배열 메서드는 원본을 바꾸지 않고 새 값을 돌려주는 것이 많아서, 앞에서 본 "원본을 바꾸지 않는다"는 원칙과 잘 맞습니다.

| 메서드 | 하는 일 | 돌려주는 것 | 원본 변경 |
|---|---|---|---|
| `map(fn)` | 각 요소를 바꾼다 | 같은 길이의 새 배열 | 없음 |
| `filter(fn)` | 조건에 맞는 요소만 남긴다 | 새 배열 | 없음 |
| `find(fn)` | 조건에 맞는 첫 요소 | 요소 또는 `undefined` | 없음 |
| `some(fn)`, `every(fn)` | 하나라도, 모두 조건에 맞는가 | 불리언 | 없음 |
| `reduce(fn, 초깃값)` | 요소를 하나의 값으로 모은다 | 모은 값 | 없음 |
| `sort(fn)` | 정렬 | 같은 배열 | **있음** |
| `forEach(fn)` | 각 요소로 무언가를 한다 | `undefined` | 없음 |

```js
const books = [
  { id: 1, title: '파이썬 입문', price: 18000, author: { name: '홍길동' } },
  { id: 2, title: 'FastAPI 실전', price: 32000, author: { name: '김철수' } },
  { id: 3, title: '데이터베이스 첫걸음', price: 21000, author: { name: '홍길동' } },
];

books.map((b) => b.title);                       // ['파이썬 입문', 'FastAPI 실전', '데이터베이스 첫걸음']
books.filter((b) => b.price >= 20000);           // FastAPI 실전, 데이터베이스 첫걸음
books.find((b) => b.id === 2)?.title;            // 'FastAPI 실전'
books.some((b) => b.price > 30000);              // true
books.reduce((sum, b) => sum + b.price, 0);      // 71000
```

`sort`는 원본 배열을 바꾸는 예외입니다. React의 state 배열을 정렬할 때는 복사본을 만든 뒤 정렬하거나, 원본을 바꾸지 않는 `toSorted`를 씁니다.

```js
const byPrice = [...books].sort((a, b) => a.price - b.price); // 복사본 정렬
const byPrice2 = books.toSorted((a, b) => a.price - b.price);  // 원본 유지 (최신 브라우저)
```

메서드는 이어서 쓸 수 있습니다. "2만 원 이상인 도서의 제목을 가격 순으로" 같은 요구를 한 줄로 표현할 수 있어, 화면 코드가 데이터의 흐름을 그대로 드러냅니다.

```js
books.filter((b) => b.price >= 20000).toSorted((a, b) => a.price - b.price).map((b) => b.title);
```

#### S2-P6-02. 모듈

*주요 개념, 10분*

프로그램을 파일 단위로 나누고, 필요한 것을 내보내고(`export`) 가져와(`import`) 씁니다. React 프로젝트는 컴포넌트, API 함수, 도우미 함수를 모두 모듈로 나눕니다.

```js
// api/books.js : 이름 붙여 내보내기 (여러 개 가능)
export async function listBooks() { /* ... */ }
export async function getBook(bookId) { /* ... */ }

// pages/BookListPage.jsx : 기본 내보내기 (파일당 하나)
export default function BookListPage() { /* ... */ }

// App.jsx : 가져오기
import BookListPage from './pages/BookListPage';      // 기본 내보내기는 원하는 이름으로
import { listBooks, getBook } from './api/books';     // 이름 내보내기는 같은 이름으로, 중괄호 안에
import * as booksApi from './api/books';              // 모두 묶어서 가져오기: booksApi.listBooks()
```

이 과정의 관례는 다음과 같습니다. 컴포넌트 파일은 컴포넌트 하나를 기본 내보내기로, API 함수와 도우미 함수는 이름 내보내기로 씁니다. 가져오는 경로의 `./`는 "현재 파일 기준"이고, `react`처럼 `./`가 없는 이름은 `node_modules`에 설치한 패키지입니다.

#### S2-P6-03. 백엔드 목록 데이터 가공하기

*실습, 20분*

백엔드에서 실제 도서 목록을 받아 배열 메서드로 가공합니다. `http://127.0.0.1:8000/docs`를 연 탭의 Console에서 진행합니다. 같은 출처이므로 그대로 요청할 수 있습니다.

```js
const page = await (await fetch('/books?limit=50')).json();
const books = page.items;
```

다음 값을 구합니다. 각 문제는 한 줄(메서드를 이어 쓴 식)로 풀어 봅니다.

1. 모든 도서 제목 배열
2. 가격이 20,000원 이상인 도서의 수
3. 평균 가격 (정수로 반올림, `Math.round`)
4. 가장 비싼 도서의 제목 (원본 배열을 바꾸지 않을 것)
5. 저자별 도서 수: `{ 홍길동: 2, 김철수: 1 }` 모양의 객체
6. 4번을 풀고 나서 `books[0]`이 처음과 같은지 확인합니다.

예시 답은 다음과 같습니다.

```js
books.map((b) => b.title);
books.filter((b) => b.price >= 20000).length;
Math.round(books.reduce((sum, b) => sum + b.price, 0) / books.length);
books.toSorted((a, b) => b.price - a.price)[0]?.title;
books.reduce((acc, b) => {
  const name = b.author?.name ?? '저자 미상';
  return { ...acc, [name]: (acc[name] ?? 0) + 1 };
}, {});
```

5번의 `[name]`은 변수 값을 속성 이름으로 쓰는 문법(계산된 속성 이름)입니다. 9일차까지 이 모양을 대시보드의 상태 코드 집계 등에서 다시 만납니다. 3번에서 `books.length`가 0이면 어떤 결과가 나오는지도 생각해 봅니다. 화면 코드에서는 빈 목록을 항상 따로 처리해야 합니다.

#### S2-P6-04. 정리: 배열 메서드와 모듈

*정리, 5분*

- `map`, `filter`, `find`, `reduce`는 원본을 바꾸지 않고 새 값을 돌려주며, 이어 쓰면 데이터 흐름이 드러납니다.
- `sort`는 원본을 바꾸므로 복사본을 정렬하거나 `toSorted`를 씁니다.
- 컴포넌트는 기본 내보내기, API와 도우미 함수는 이름 내보내기로 나눕니다.

##### 확인 퀴즈

**Q1.** 배열의 원본을 바꾸는 메서드는 무엇인가요?

1. filter
2. sort
3. reduce
4. map

> 정답: 2번. sort는 배열 자체를 정렬합니다. 원본을 지키려면 복사본을 정렬하거나 toSorted를 씁니다.

**Q2.** `export default function App()`으로 내보낸 컴포넌트를 가져오는 코드는 무엇인가요?

1. `import App from './App'`
2. `import { App } from './App'`
3. `import * from './App'`
4. `require App from './App'`

> 정답: 1번. 기본 내보내기는 중괄호 없이 원하는 이름으로 가져옵니다.

### S2-P7. Promise와 async/await

> 학습 목표: 비동기 처리의 원리를 이해하고 async/await와 Promise.all로 백엔드 요청을 다룰 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S2-P7-01 비동기와 Promise | 주요 개념 | 15분 |
| S2-P7-02 async/await와 Promise.all | 주요 개념 | 10분 |
| S2-P7-03 백엔드 요청을 순서대로, 동시에 보내기 | 실습 | 20분 |
| S2-P7-04 정리: Promise와 async/await | 정리 | 5분 |
| 휴식 | | 10분 |

#### S2-P7-01. 비동기와 Promise

*주요 개념, 15분*

네트워크 요청은 응답이 올 때까지 시간이 걸립니다. JavaScript가 응답을 기다리는 동안 멈춰 있으면 화면이 굳어 버리므로, 시간이 걸리는 작업은 "시작만 해 두고 결과가 나오면 알려 달라"는 비동기 방식으로 처리합니다.

```js
console.log('1. 요청 시작');
setTimeout(() => console.log('3. 1초 뒤 실행'), 1000);
console.log('2. 기다리지 않고 바로 다음 줄');
```

출력 순서는 1, 2, 3입니다. `setTimeout`은 함수를 예약만 하고 바로 넘어가며, 1초 뒤에 예약한 함수가 실행됩니다.

Promise는 "나중에 결과가 채워질 상자"입니다. 처음에는 대기(pending) 상태이고, 작업이 끝나면 성공(fulfilled)이나 실패(rejected) 중 하나로 정해집니다. `then`으로 성공 결과를, `catch`로 실패를 받습니다.

```js
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

fetch('/books?limit=1')            // Promise<Response>
  .then((res) => res.json())       // Promise<본문>
  .then((page) => console.log(page.total))
  .catch((err) => console.error('실패:', err.message))
  .finally(() => console.log('끝'));
```

`fetch`는 Promise를 돌려줍니다. 응답 객체의 `json()`도 본문을 끝까지 받아 해석해야 하므로 Promise를 돌려줍니다. 그래서 `then`이 두 번 이어집니다.

#### S2-P7-02. async/await와 Promise.all

*주요 개념, 10분*

`async` 함수 안에서 `await`를 쓰면 Promise의 결과가 나올 때까지 기다렸다가 다음 줄을 실행합니다. 비동기 코드를 위에서 아래로 읽히게 쓸 수 있고, 실패는 `try...catch`로 잡습니다.

```js
async function loadTotal() {
  try {
    const res = await fetch('/books?limit=1');
    const page = await res.json();
    return page.total;
  } catch (err) {
    console.error('실패:', err.message);
    return null;
  } finally {
    console.log('성공과 실패에 관계없이 실행');
  }
}
```

`async` 함수는 항상 Promise를 돌려줍니다. 그래서 `loadTotal()`의 결과를 쓰려면 다시 `await`하거나 `then`을 붙여야 합니다.

서로 기다릴 필요가 없는 요청 여러 개는 `Promise.all`로 동시에 보냅니다. 하나씩 `await`하면 시간이 더해지지만, 동시에 보내면 가장 느린 요청만큼만 걸립니다. 하나라도 실패하면 전체가 실패합니다.

```js
const [booksRes, authorsRes] = await Promise.all([fetch('/books?limit=5'), fetch('/authors')]);
const [page, authors] = await Promise.all([booksRes.json(), authorsRes.json()]);
```

S9-P29의 도서 수정 화면에서 저자 목록과 도서 정보를 이렇게 함께 불러옵니다.

#### S2-P7-03. 백엔드 요청을 순서대로, 동시에 보내기

*실습, 20분*

`http://127.0.0.1:8000/docs` 탭의 Console에서 진행합니다.

**1) 순서대로 보내기와 동시에 보내기의 시간 비교**

```js
async function sequential() {
  const t = performance.now();
  await (await fetch('/books?limit=5')).json();
  await (await fetch('/authors')).json();
  await (await fetch('/health')).json();
  return Math.round(performance.now() - t);
}

async function parallel() {
  const t = performance.now();
  await Promise.all(['/books?limit=5', '/authors', '/health'].map((u) => fetch(u).then((r) => r.json())));
  return Math.round(performance.now() - t);
}

console.log('순서대로', await sequential(), 'ms');
console.log('동시에', await parallel(), 'ms');
```

Network 탭의 Waterfall 열에서 요청 막대가 계단처럼 이어지는지, 나란히 겹치는지 확인합니다.

**2) 저자 이름과 도서 수를 함께 보여 주기**

`/authors`와 `/books?limit=50`을 동시에 받아, 저자마다 `"홍길동: 2권"`을 출력하는 `async` 함수를 작성합니다. 도서가 없는 저자도 `0권`으로 나와야 합니다.

```js
async function authorReport() {
  const [authors, page] = await Promise.all([
    fetch('/authors').then((r) => r.json()),
    fetch('/books?limit=50').then((r) => r.json()),
  ]);
  for (const a of authors) {
    const count = page.items.filter((b) => b.author?.id === a.id).length;
    console.log(`${a.name}: ${count}권`);
  }
}
await authorReport();
```

**3) 실패 다루기**

`/books/999999`를 요청하는 `async` 함수를 만들고, 상태 코드와 백엔드의 오류 본문(`code`, `message`)을 출력합니다. `catch`로 가는지, `then`으로 가는지 먼저 예상한 뒤 실행합니다.

```js
const res = await fetch('/books/999999');
console.log(res.ok, res.status, await res.json());
```

결과를 보면 404 응답도 `catch`로 가지 않습니다. 이 성질은 S6-P19에서 자세히 다루며, API 계층을 만드는 출발점이 됩니다.

#### S2-P7-04. 정리: Promise와 async/await

*정리, 5분*

- 시간이 걸리는 작업은 Promise로 표현되며, `then`/`catch` 또는 `async`/`await`와 `try`/`catch`로 다룹니다.
- 서로 의존하지 않는 요청은 `Promise.all`로 동시에 보내 기다리는 시간을 줄입니다.
- `fetch`는 404 같은 오류 응답도 정상적으로 돌려주므로 상태 코드를 직접 확인해야 합니다.

##### 확인 퀴즈

**Q1.** 다음 코드의 출력 순서로 알맞은 것은 무엇인가요? `console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C');`

1. B, A, C
2. C, A, B
3. A, B, C
4. A, C, B

> 정답: 4번. setTimeout은 0ms여도 함수를 예약만 하고 넘어가므로 지금 실행 중인 코드가 끝난 뒤에 B가 출력됩니다.

**Q2.** 서로 의존하지 않는 요청 세 개를 가장 빨리 끝내는 방법은 무엇인가요?

1. setTimeout으로 간격을 둔다.
2. 동기 함수로 바꾼다.
3. 하나씩 await한다.
4. Promise.all로 동시에 보내고 함께 기다린다.

> 정답: 4번. Promise.all은 요청을 동시에 진행시키므로 가장 느린 요청만큼만 걸립니다.

---

## S3. React 기초

*2일차 오전, 4시간*

> 섹션 목표: Vite로 React 프로젝트를 만들고 JSX, 컴포넌트, props, state, 이벤트, 리스트 렌더링으로 화면을 구성합니다.

### S3-P8. Vite 프로젝트와 실행 흐름

> 학습 목표: Vite로 React 프로젝트를 만들어 실행하고, 화면이 그려지기까지의 흐름을 설명할 수 있습니다.
>
> 완성 코드 브랜치: `p8-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S3-P8-01 Vite란 | 주요 개념 | 10분 |
| S3-P8-02 프로젝트 만들기와 Git 저장소 시작 | 실습 | 20분 |
| S3-P8-03 프로젝트 구조와 실행 흐름 | 주요 개념 | 15분 |
| S3-P8-04 정리: Vite 프로젝트와 실행 흐름 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S3-P8-01. Vite란

*주요 개념, 10분*

React 코드는 JSX 같은 브라우저가 바로 이해하지 못하는 문법을 쓰고, 수십 개의 파일과 외부 패키지로 나뉘어 있습니다. 이를 브라우저가 실행할 수 있는 형태로 바꾸고 묶는 도구가 필요합니다. Vite는 이 역할을 하는 빌드 도구로, 두 가지 모드로 동작합니다.

- 개발 서버(`npm run dev`): 파일을 미리 묶지 않고 브라우저가 요청하는 파일만 즉시 변환해 보냅니다. 파일을 저장하면 바뀐 부분만 화면에 바로 반영되는 HMR(Hot Module Replacement)을 지원합니다.
- 운영 빌드(`npm run build`): 모든 코드를 최적화해 `dist` 폴더에 정적 파일(HTML, JS, CSS)로 만듭니다. 이 파일들은 Nginx 같은 웹 서버로 제공합니다(S15).

현재 Vite는 8 버전이며, Rust로 만든 번들러 Rolldown을 사용해 빌드 속도가 크게 빨라졌습니다. 이 교안의 코드는 Vite 8, React 19, React Router 8, axios 1, Recharts 3에서 확인했습니다.

#### S3-P8-02. 프로젝트 만들기와 Git 저장소 시작

*실습, 20분*

`workspace` 폴더에서 다음 명령을 실행합니다. `--template react`는 TypeScript가 아닌 JavaScript 기반 React 템플릿을 뜻합니다.

```bash
cd workspace
npm create vite@latest react-frontend -- --template react
cd react-frontend
npm install
npm run dev
```

터미널에 `Local: http://localhost:5173/`이 나오면 브라우저로 접속합니다. Vite와 React 로고가 있는 기본 화면이 보이면 성공입니다. 개발 서버는 `Ctrl + C`로 종료합니다.

> 주소 표기에 주의합니다. 이 과정에서는 프론트엔드를 항상 `http://localhost:5173`으로 엽니다. 백엔드는 `http://127.0.0.1:8000`으로 부릅니다. 두 주소의 차이가 S5의 핵심 주제와 연결됩니다.

이제 이 폴더를 Git 저장소로 만들고 첫 커밋을 남깁니다. Vite 템플릿에는 `node_modules`와 `dist`를 제외하는 `.gitignore`가 이미 들어 있습니다.

```bash
git init -b main
git add .
git commit -m "Vite React 템플릿 생성"
```

앞으로 파트를 하나 마칠 때마다 커밋합니다. 커밋 메시지에 파트 번호를 넣어 두면(`P9: 샘플 데이터와 컴포넌트`) 나중에 예제 저장소의 브랜치와 비교하기 쉽습니다.

> 완성 코드: 막히면 예제 저장소의 `p8-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S3-P8-03. 프로젝트 구조와 실행 흐름

*주요 개념, 15분*

생성된 프로젝트의 주요 파일은 다음과 같습니다.

```text
react-frontend/
├── index.html        # 브라우저가 처음 받는 HTML. <div id="root">가 있습니다.
├── package.json      # 의존성 목록과 실행 스크립트(dev, build, lint, preview)
├── vite.config.js    # Vite 설정. React 플러그인이 등록되어 있습니다.
├── public/           # 가공 없이 그대로 제공할 파일
└── src/
    ├── main.jsx      # 시작점. React를 #root에 연결합니다.
    ├── App.jsx       # 첫 화면 컴포넌트
    └── index.css     # 전역 스타일
```

화면이 그려지는 순서는 다음과 같습니다.

1. 브라우저가 `index.html`을 받습니다. 이 파일에는 빈 `<div id="root"></div>`와 `<script type="module" src="/src/main.jsx">`가 있습니다.
2. `main.jsx`가 실행되어 `createRoot(document.getElementById('root')).render(<App />)`로 React를 `#root`에 연결합니다.
3. React가 `App` 컴포넌트를 호출해 반환된 화면을 DOM으로 만듭니다.

`main.jsx`에 있는 `<StrictMode>`는 개발 중에만 동작하는 점검 장치입니다. 잠재적인 실수를 찾기 위해 일부 함수를 일부러 두 번 실행합니다. S4-P13-01에서 다시 다룹니다.

실습을 시작하기 전에 템플릿의 예제 파일을 정리합니다. `src/assets` 폴더, `src/App.css`, `public/icons.svg`를 지우고, `index.html`에서 문서 언어와 제목을 바꿉니다. `lang` 속성은 화면 낭독기와 번역 기능이 문서의 언어를 올바르게 판단하는 데 쓰입니다.

```html
<html lang="ko">
  <head>
    <!-- 나머지는 그대로 둡니다 -->
    <title>도서 관리</title>
  </head>
```

`src/index.css`와 `src/App.jsx`는 다음처럼 바꿉니다.

`src/index.css`

```css
body {
  margin: 0;
  font: 15px/1.5 system-ui, 'Segoe UI', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
}
main {
  padding: 1.5rem;
}
```

`src/App.jsx`

```jsx
export default function App() {
  return (
    <main>
      <h1>도서 관리</h1>
      <p>React 프론트엔드 과정을 시작합니다.</p>
    </main>
  );
}
```

저장하면 브라우저 화면이 새로고침 없이 바로 바뀝니다. 이것이 HMR입니다. 확인했으면 `P8: Vite 프로젝트 정리`로 커밋합니다.

#### S3-P8-04. 정리: Vite 프로젝트와 실행 흐름

*정리, 5분*

- Vite는 개발 서버(`npm run dev`)와 운영 빌드(`npm run build`) 두 역할을 합니다.
- 브라우저는 `index.html`을 받고, `main.jsx`가 React를 `#root`에 연결한 뒤 `App`을 그립니다.
- 파트를 마칠 때마다 커밋해 두면 예제 저장소의 `pN-done` 브랜치와 비교하기 쉽습니다.

##### 확인 퀴즈

**Q1.** React 앱이 화면에 처음 연결되는 곳은 어디인가요?

1. vite.config.js
2. package.json
3. main.jsx의 createRoot(...).render(...)
4. index.css

> 정답: 3번. main.jsx가 index.html의 #root 요소에 React를 연결하고 App을 그립니다.

**Q2.** 개발 서버에서 파일을 저장하면 새로고침 없이 바뀐 부분만 반영되는 기능은 무엇인가요?

1. CORS
2. CSP
3. SSR
4. HMR

> 정답: 4번. HMR(Hot Module Replacement)은 바뀐 모듈만 교체해 화면에 바로 반영합니다.

### S3-P9. JSX, 컴포넌트, props

> 학습 목표: JSX 규칙에 맞게 화면을 작성하고, props를 받는 컴포넌트로 화면을 나눌 수 있습니다.
>
> 완성 코드 브랜치: `p9-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S3-P9-01 JSX | 주요 개념 | 15분 |
| S3-P9-02 컴포넌트와 props | 주요 개념 | 10분 |
| S3-P9-03 샘플 데이터로 도서 표 만들기 | 실습 | 20분 |
| S3-P9-04 정리: JSX, 컴포넌트, props | 정리 | 5분 |
| 휴식 | | 10분 |

#### S3-P9-01. JSX

*주요 개념, 15분*

JSX는 JavaScript 안에 HTML과 비슷한 모양으로 화면 구조를 적는 문법입니다. Vite가 JSX를 일반 JavaScript 함수 호출로 바꿔 줍니다.

```jsx
export default function App() {
  const title = '도서 관리';
  const count = 3;
  return (
    <main className="content">
      <h1>{title}</h1>
      <p>등록된 도서는 {count}권입니다.</p>
      <p>{count > 0 ? '목록을 확인하세요.' : '도서가 없습니다.'}</p>
    </main>
  );
}
```

HTML과 다른 규칙 몇 가지를 기억합니다.

- 중괄호 `{}` 안에는 JavaScript 표현식(값이 되는 식)을 넣습니다. `if`나 `for` 같은 문장은 넣을 수 없으므로 삼항 연산자, `&&`, `map`을 사용합니다.
- `class` 대신 `className`, `for` 대신 `htmlFor`를 씁니다.
- 반환하는 최상위 요소는 하나여야 합니다. 여러 요소를 묶기만 할 때는 `<>...</>`(Fragment)를 씁니다.
- 모든 태그는 닫아야 합니다. `<input>`은 `<input />`으로 씁니다.
- 중괄호에 넣은 문자열은 자동으로 이스케이프되어 HTML이 아닌 글자로 표시됩니다. 이 성질은 S12의 XSS 방어와 직결됩니다.

#### S3-P9-02. 컴포넌트와 props

*주요 개념, 10분*

컴포넌트는 화면의 한 조각을 반환하는 함수입니다. 이름은 대문자로 시작합니다. 부모 컴포넌트는 props(속성)로 자식에게 값을 전달하며, 자식은 props를 읽기만 하고 바꾸지 않습니다.

```jsx
function BookRow({ book }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author.name}</td>
      <td>{book.price.toLocaleString('ko-KR')}원</td>
    </tr>
  );
}
```

`function BookRow({ book })`는 props 객체에서 `book`만 구조 분해로 꺼낸 것입니다. 부모는 `<BookRow book={someBook} />`처럼 사용합니다.

#### S3-P9-03. 샘플 데이터로 도서 표 만들기

*실습, 20분*

백엔드에 연결하기 전에, 백엔드 `GET /books` 응답과 같은 모양의 샘플 데이터로 화면을 먼저 만듭니다. API 연결과 화면 구성을 분리해서 연습하는 것이 목적입니다. 이번 섹션의 연습용 코드는 `src/practice` 폴더에 모읍니다. S7에서 진짜 화면을 만들면 이 폴더는 지웁니다.

`src/practice/sampleBooks.js`

```js
// 백엔드 GET /books 응답(BookPage)과 같은 모양의 샘플 데이터
export const SAMPLE_PAGE = {
  items: [
    { id: 1, title: '파이썬 입문', price: 18000, isbn: null, author: { id: 1, name: '홍길동' } },
    { id: 2, title: 'FastAPI 실전', price: 32000, isbn: '9791100000011', author: { id: 2, name: '김철수' } },
    { id: 3, title: '데이터베이스 첫걸음', price: 21000, isbn: null, author: { id: 1, name: '홍길동' } },
    { id: 4, title: 'React 시작하기', price: 27000, isbn: null, author: { id: 3, name: '이영희' } },
  ],
  total: 4,
  skip: 0,
  limit: 10,
};
```

한 행을 그리는 `BookRow`와 표 전체를 그리는 `BookTable`을 만듭니다. `BookTable`은 도서 배열을 props로 받아 행마다 `BookRow`를 그립니다.

`src/practice/BookRow.jsx`

```jsx
export default function BookRow({ book }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author?.name}</td>
      <td>{book.price.toLocaleString('ko-KR')}원</td>
    </tr>
  );
}
```

`src/practice/BookTable.jsx`

```jsx
import BookRow from './BookRow';

export default function BookTable({ books }) {
  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>저자</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookRow key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
}
```

`src/App.jsx`

```jsx
import BookTable from './practice/BookTable';
import { SAMPLE_PAGE } from './practice/sampleBooks';

export default function App() {
  return (
    <main>
      <h1>도서 목록</h1>
      <BookTable books={SAMPLE_PAGE.items} />
      <p>전체 {SAMPLE_PAGE.total}권</p>
    </main>
  );
}
```

확인할 내용은 다음과 같습니다.

1. 화면에 도서 4권이 표로 나오고, 가격에 천 단위 쉼표가 붙는지 확인합니다.
2. 개발자 도구의 Elements 탭에서 `<table>` 안의 `<tr>`이 4개인지 확인합니다. 컴포넌트는 DOM에 흔적을 남기지 않고, 반환한 요소만 남습니다.
3. `sampleBooks.js`에서 한 도서의 `author`를 `null`로 바꿔 봅니다. `book.author?.name`이 없으면 어떤 오류가 나는지 `?.`를 지워서도 확인한 뒤 되돌립니다.
4. `BookTable`에 `caption` props를 추가해 표 위에 제목을 보여 주도록 바꿔 봅니다.

> 완성 코드: 막히면 예제 저장소의 `p9-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S3-P9-04. 정리: JSX, 컴포넌트, props

*정리, 5분*

- JSX의 중괄호에는 값이 되는 식만 넣고, `className`, 닫는 태그, 하나의 최상위 요소 규칙을 지킵니다.
- 컴포넌트는 props를 받아 화면을 반환하는 함수이며, 자식은 props를 읽기만 합니다.
- 화면을 먼저 샘플 데이터로 만들면 API 연결 전에 화면 구성을 따로 연습할 수 있습니다.

##### 확인 퀴즈

**Q1.** JSX에서 CSS 클래스를 지정하는 속성은 무엇인가요?

1. className
2. cssClass
3. style
4. class

> 정답: 1번. JSX는 JavaScript 예약어인 class 대신 className을 씁니다.

**Q2.** props에 대한 설명으로 옳은 것은 무엇인가요?

1. 컴포넌트 안에서 useState로 만든다.
2. 브라우저 저장소에 보관된다.
3. 자식 컴포넌트가 자유롭게 고칠 수 있다.
4. 부모가 자식에게 전달하며, 자식은 읽기만 한다.

> 정답: 4번. props는 부모에서 자식으로 흐르는 읽기 전용 값입니다.

### S3-P10. state와 이벤트

> 학습 목표: useState로 화면 상태를 만들고, 이벤트로 상태를 바꿔 화면을 다시 그릴 수 있습니다.
>
> 완성 코드 브랜치: `p10-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S3-P10-01 state와 이벤트 | 주요 개념 | 20분 |
| S3-P10-02 제목 검색 기능 만들기 | 실습 | 25분 |
| S3-P10-03 정리: state와 이벤트 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S3-P10-01. state와 이벤트

*주요 개념, 20분*

state(상태)는 컴포넌트가 기억하는 값으로, 값이 바뀌면 React가 컴포넌트를 다시 호출해 화면을 새로 그립니다. `useState` 훅으로 만듭니다.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // [현재 값, 바꾸는 함수]
  return <button onClick={() => setCount(count + 1)}>{count}번 눌렀습니다</button>;
}
```

state를 다룰 때 지켜야 할 규칙이 있습니다.

- **state는 직접 고치지 않습니다.** `book.price = 2000`처럼 고치면 React가 변경을 알아채지 못합니다. 반드시 설정 함수에 새 값을 넘깁니다. 객체와 배열은 전개 문법으로 복사본을 만들어 넘깁니다.

```jsx
setForm({ ...form, price: '2000' });       // 객체의 일부 변경
setBooks([...books, newBook]);              // 배열에 추가
setBooks(books.filter((b) => b.id !== id)); // 배열에서 제거
```

- **이전 값을 기준으로 바꿀 때는 함수형 업데이트를 씁니다.** `setCount((prev) => prev + 1)`처럼 쓰면 짧은 시간에 여러 번 호출되어도 항상 최신 값을 기준으로 계산됩니다. S13에서 헬스 체크 이력을 쌓을 때 이 방식을 씁니다.
- **훅은 컴포넌트 함수의 맨 위에서만 호출합니다.** 조건문이나 반복문 안에서 호출하면 안 됩니다.

이벤트는 `onClick`, `onChange`, `onSubmit`처럼 카멜 표기 속성에 함수를 넘겨 처리합니다. `onClick={handleClick()}`처럼 호출 결과를 넘기는 실수를 하지 않도록 주의합니다. 함수 자체를 넘겨야 합니다.

#### S3-P10-02. 제목 검색 기능 만들기

*실습, 25분*

검색어를 state로 기억하고, 입력할 때마다 목록을 거르는 기능을 만듭니다. 검색 입력 칸은 `SearchBox` 컴포넌트로 분리합니다.

`src/practice/SearchBox.jsx`

```jsx
export default function SearchBox({ keyword, onChange }) {
  return (
    <input
      type="search"
      placeholder="제목으로 검색"
      value={keyword}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
```

`src/App.jsx`

```jsx
import { useState } from 'react';
import BookTable from './practice/BookTable';
import SearchBox from './practice/SearchBox';
import { SAMPLE_PAGE } from './practice/sampleBooks';

export default function App() {
  // 입력한 검색어를 state로 기억합니다. 값이 바뀌면 App이 다시 그려집니다.
  const [keyword, setKeyword] = useState('');
  const visible = SAMPLE_PAGE.items.filter((book) => book.title.includes(keyword.trim()));

  return (
    <main>
      <h1>도서 목록</h1>
      <SearchBox keyword={keyword} onChange={setKeyword} />
      <BookTable books={visible} />
      <p>
        전체 {SAMPLE_PAGE.total}권 중 {visible.length}권 표시
      </p>
    </main>
  );
}
```

여기서 중요한 설계가 하나 있습니다. 검색어는 `SearchBox` 안이 아니라 부모인 `App`에 있습니다. 검색어를 쓰는 곳이 `SearchBox`(입력 칸 표시)와 `BookTable`(목록 거르기) 두 곳이기 때문입니다. 여러 컴포넌트가 같은 값을 써야 하면 그 값을 공통 부모로 올리고, 자식에게는 값과 "바뀌었을 때 부를 함수"를 props로 내려 줍니다. 이를 상태 끌어올리기(lifting state up)라고 합니다.

```text
App (keyword state)
 ├─ SearchBox  ← keyword, onChange=setKeyword
 └─ BookTable  ← keyword로 거른 visible
```

확인할 내용은 다음과 같습니다.

1. "입문"을 입력하면 한 권만 남고, 아래 문구가 "전체 4권 중 1권 표시"로 바뀌는지 확인합니다.
2. `visible`은 state가 아니라 매번 계산하는 값입니다. `useState`로 따로 두지 않는 이유를 생각해 봅니다. (힌트: keyword와 visible이 서로 어긋날 수 있는가?)
3. `onChange={(event) => onChange(event.target.value)}`를 `onChange={onChange(event.target.value)}`로 바꾸면 무슨 일이 일어나는지 확인한 뒤 되돌립니다.
4. 대소문자를 구분하지 않고 검색하도록 바꿔 봅니다. (`toLowerCase()`)

> 완성 코드: 막히면 예제 저장소의 `p10-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S3-P10-03. 정리: state와 이벤트

*정리, 5분*

- state가 바뀌면 React가 컴포넌트를 다시 호출해 화면을 새로 그립니다.
- state는 직접 고치지 않고 새 값으로 교체하며, 다른 값에서 계산할 수 있는 값은 state로 두지 않습니다.
- 여러 컴포넌트가 함께 쓰는 값은 공통 부모로 끌어올리고, 값과 변경 함수를 props로 내립니다.

##### 확인 퀴즈

**Q1.** `onClick={handleClick()}`의 문제점은 무엇인가요?

1. 문제가 없다.
2. 클릭할 때가 아니라 그릴 때 함수가 바로 실행된다.
3. 이벤트 객체를 받을 수 없을 뿐 동작은 같다.
4. React가 오류를 내지 않고 무시한다.

> 정답: 2번. 함수 자체(handleClick)를 넘겨야 합니다. 괄호를 붙이면 호출 결과가 넘어갑니다.

**Q2.** 검색어로 거른 목록(visible)을 state로 따로 두지 않는 이유는 무엇인가요?

1. state는 배열을 담을 수 없어서
2. keyword와 원본에서 매번 계산할 수 있고, 따로 두면 서로 어긋날 수 있어서
3. 성능이 항상 더 좋아서
4. React가 금지해서

> 정답: 2번. 계산할 수 있는 값을 state로 중복해 두면 동기화 버그가 생기기 쉽습니다.

### S3-P11. 조건부 렌더링과 리스트

> 학습 목표: 상황에 따라 다른 화면을 보여 주고, key를 지켜 리스트를 그릴 수 있습니다.
>
> 완성 코드 브랜치: `p11-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S3-P11-01 조건부 렌더링과 리스트 | 주요 개념 | 15분 |
| S3-P11-02 정렬과 빈 결과 처리 | 실습 | 30분 |
| S3-P11-03 정리: 조건부 렌더링과 리스트 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S3-P11-01. 조건부 렌더링과 리스트

*주요 개념, 15분*

화면은 상황에 따라 다른 내용을 보여 줘야 합니다. 데이터를 불러오는 화면이라면 최소한 "불러오는 중", "오류", "결과 없음", "결과 있음" 네 가지 상태를 모두 고려합니다.

```jsx
{loading && <p>불러오는 중입니다.</p>}
{error && <p className="error">{error.message}</p>}
{!loading && books.length === 0 && <p>도서가 없습니다.</p>}
```

배열은 `map`으로 요소 배열을 만들어 그립니다. 이때 각 요소에는 형제 사이에서 고유한 `key`를 줘야 합니다. React는 `key`로 어떤 행이 추가, 삭제, 이동했는지 구분합니다. 데이터베이스 `id`처럼 변하지 않는 값을 쓰고, 배열의 순번(index)은 정렬이나 삭제가 있는 목록에서는 쓰지 않습니다.

```jsx
<tbody>
  {books.map((book) => (
    <BookRow key={book.id} book={book} />
  ))}
</tbody>
```

`&&`를 쓸 때 왼쪽 값이 숫자 0이면 화면에 `0`이 그대로 찍힙니다. `{books.length && <List />}` 대신 `{books.length > 0 && <List />}`처럼 불리언으로 만들어 씁니다.

#### S3-P11-02. 정렬과 빈 결과 처리

*실습, 30분*

정렬 선택 상자를 추가하고, 검색 결과가 없을 때 안내 문구를 보여 줍니다.

`src/App.jsx`

```jsx
import { useState } from 'react';
import BookTable from './practice/BookTable';
import SearchBox from './practice/SearchBox';
import { SAMPLE_PAGE } from './practice/sampleBooks';

const SORTERS = {
  id: (a, b) => a.id - b.id,
  price: (a, b) => a.price - b.price,
  '-price': (a, b) => b.price - a.price,
};

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState('id');

  // filter는 새 배열을 돌려주므로 sort로 정렬해도 원본 데이터가 바뀌지 않습니다.
  const visible = SAMPLE_PAGE.items
    .filter((book) => book.title.includes(keyword.trim()))
    .sort(SORTERS[sort]);

  return (
    <main>
      <h1>도서 목록</h1>
      <SearchBox keyword={keyword} onChange={setKeyword} />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="id">등록순</option>
        <option value="price">가격 낮은 순</option>
        <option value="-price">가격 높은 순</option>
      </select>
      {visible.length === 0 ? <p>조건에 맞는 도서가 없습니다.</p> : <BookTable books={visible} />}
      <p>
        전체 {SAMPLE_PAGE.total}권 중 {visible.length}권 표시
      </p>
    </main>
  );
}
```

`SORTERS`는 정렬 기준 이름과 비교 함수를 짝지은 객체입니다. 선택 상자의 값(`id`, `price`, `-price`)은 백엔드 `GET /books`의 `sort` 값과 같게 맞췄습니다. S7에서 정렬을 백엔드에 맡길 때 이 값을 그대로 쓰게 됩니다.

확인할 내용은 다음과 같습니다.

1. "가격 높은 순"을 고르면 순서가 바뀌는지, 다시 "등록순"으로 돌아오는지 확인합니다.
2. `filter`가 새 배열을 돌려주기 때문에 `sort`를 바로 이어 써도 `SAMPLE_PAGE.items`가 바뀌지 않습니다. `filter`를 지우고 `SAMPLE_PAGE.items.sort(...)`로 바꾸면 "등록순"으로 돌아올 수 없게 되는 이유를 설명해 봅니다.
3. `BookTable`의 `key={book.id}`를 지우고 Console의 경고를 확인한 뒤 되돌립니다.
4. `key={index}`를 쓰면 지금은 문제가 드러나지 않습니다. 행마다 입력 칸(예: 메모)이 있다면 정렬을 바꿀 때 어떤 문제가 생길지 생각해 봅니다.
5. 존재하지 않는 제목을 검색해 "조건에 맞는 도서가 없습니다."가 나오는지 확인합니다.

> 완성 코드: 막히면 예제 저장소의 `p11-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S3-P11-03. 정리: 조건부 렌더링과 리스트

*정리, 5분*

- 데이터를 보여 주는 화면은 로딩, 오류, 빈 결과, 정상 결과를 모두 고려합니다.
- 리스트에는 형제 사이에서 고유하고 변하지 않는 `key`를 줍니다. 정렬이나 삭제가 있는 목록에 순번을 쓰지 않습니다.
- `{count && ...}`는 0이 그대로 찍히므로 `{count > 0 && ...}`처럼 불리언으로 씁니다.

##### 확인 퀴즈

**Q1.** 리스트의 key로 가장 알맞은 것은 무엇인가요?

1. 배열의 순번(index)
2. Math.random()
3. 데이터베이스의 id처럼 변하지 않는 고유 값
4. 화면에 보이는 제목

> 정답: 3번. key는 항목을 구분하는 고유하고 안정적인 값이어야 합니다. 제목은 겹칠 수 있습니다.

**Q2.** `{books.length && <BookTable />}`에서 books가 빈 배열이면 화면에 무엇이 나오나요?

1. 아무것도 나오지 않는다.
2. 0이 그대로 나온다.
3. 빈 표가 나온다.
4. 오류가 난다.

> 정답: 2번. 0은 거짓이지만 React는 숫자 0을 그대로 그립니다.

---

## S4. 폼, 이펙트, 컴포넌트 설계

*2일차 오후, 3시간*

> 섹션 목표: 제어 컴포넌트로 입력을 다루고, useEffect로 외부와 동기화하며, 컴포넌트를 나누는 기준을 익힙니다.

### S4-P12. 폼과 제어 컴포넌트

> 학습 목표: 입력 칸을 state와 연결한 제어 컴포넌트로 폼을 만들고, 입력값을 검증하고 변환할 수 있습니다.
>
> 완성 코드 브랜치: `p12-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S4-P12-01 폼과 제어 컴포넌트 | 주요 개념 | 15분 |
| S4-P12-02 도서 추가 폼 만들기 | 실습 | 30분 |
| S4-P12-03 정리: 폼과 제어 컴포넌트 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S4-P12-01. 폼과 제어 컴포넌트

*주요 개념, 15분*

입력 칸의 값을 state와 연결해 React가 항상 값을 쥐고 있게 만든 것을 제어 컴포넌트라고 합니다. 입력값을 검증하거나, 서버에 보낼 값으로 변환하거나, 오류 메시지를 칸마다 보여 줄 때 이 방식이 편리합니다.

```jsx
function SearchBox({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // 폼 제출로 페이지가 새로고침되는 기본 동작을 막습니다.
    onSearch(keyword.trim());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button type="submit">검색</button>
    </form>
  );
}
```

입력 칸의 값은 항상 문자열이라는 점을 기억합니다. `type="number"`인 칸도 `e.target.value`는 `"18000"` 같은 문자열입니다. API로 보낼 때 `Number()`로 바꿔야 백엔드가 정수로 받습니다. S9의 도서 등록 폼에서 이 변환을 함수로 분리합니다.

#### S4-P12-02. 도서 추가 폼 만들기

*실습, 30분*

샘플 목록에 도서를 추가하는 폼을 만듭니다. 목록을 바꿀 수 있어야 하므로 이제 도서 배열도 state가 됩니다.

`src/practice/AddBookForm.jsx`

```jsx
import { useState } from 'react';

const EMPTY = { title: '', author: '', price: '' };

// 입력 칸의 값을 state와 연결한 제어 컴포넌트입니다.
export default function AddBookForm({ onAdd }) {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // 페이지 새로고침을 막습니다.
    const price = Number(form.price); // 입력값은 항상 문자열이므로 숫자로 바꿉니다.
    if (!form.title.trim() || !form.author.trim()) {
      setError('제목과 저자를 입력합니다.');
      return;
    }
    if (form.price === '' || !Number.isInteger(price) || price < 0) {
      setError('가격은 0 이상의 정수입니다.');
      return;
    }
    onAdd({ title: form.title.trim(), author: { name: form.author.trim() }, price });
    setForm(EMPTY);
    setError('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="제목" value={form.title} onChange={handleChange} />
      <input name="author" placeholder="저자" value={form.author} onChange={handleChange} />
      <input name="price" type="number" placeholder="가격" value={form.price} onChange={handleChange} />
      <button type="submit">추가</button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}
```

`src/App.jsx`

```jsx
import { useState } from 'react';
import AddBookForm from './practice/AddBookForm';
import BookTable from './practice/BookTable';
import SearchBox from './practice/SearchBox';
import { SAMPLE_PAGE } from './practice/sampleBooks';

const SORTERS = {
  id: (a, b) => a.id - b.id,
  price: (a, b) => a.price - b.price,
  '-price': (a, b) => b.price - a.price,
};

export default function App() {
  const [books, setBooks] = useState(SAMPLE_PAGE.items);
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState('id');

  function handleAdd(book) {
    // 기존 배열을 고치지 않고 새 배열로 바꿔 끼웁니다.
    const nextId = Math.max(0, ...books.map((b) => b.id)) + 1;
    setBooks((prev) => [...prev, { ...book, id: nextId, isbn: null }]);
  }

  // filter는 새 배열을 돌려주므로 sort로 정렬해도 원본 데이터가 바뀌지 않습니다.
  const visible = books
    .filter((book) => book.title.includes(keyword.trim()))
    .sort(SORTERS[sort]);

  return (
    <main>
      <h1>도서 목록</h1>
      <AddBookForm onAdd={handleAdd} />
      <SearchBox keyword={keyword} onChange={setKeyword} />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="id">등록순</option>
        <option value="price">가격 낮은 순</option>
        <option value="-price">가격 높은 순</option>
      </select>
      {visible.length === 0 ? <p>조건에 맞는 도서가 없습니다.</p> : <BookTable books={visible} />}
      <p>
        전체 {books.length}권 중 {visible.length}권 표시
      </p>
    </main>
  );
}
```

코드에서 볼 부분은 다음과 같습니다.

- 입력 칸이 셋이지만 state는 `form` 객체 하나입니다. `name` 속성과 계산된 속성 이름(`[name]: value`)으로 `handleChange` 하나가 모든 칸을 처리합니다.
- 가격은 문자열로 들어오므로 `Number()`로 바꾸고, 정수인지 확인합니다. 화면 값과 데이터 값을 구분하는 습관은 S9에서 백엔드 규칙에 맞춰 더 정교해집니다.
- 폼은 새 도서를 직접 목록에 넣지 않고 `onAdd`로 부모에게 알립니다. 목록 state를 가진 `App`만 목록을 바꿉니다.
- `setBooks((prev) => [...prev, ...])`처럼 함수형 업데이트를 썼습니다. 이전 값을 기준으로 새 값을 만들 때는 이 형태가 안전합니다.

확인할 내용은 다음과 같습니다.

1. 도서를 추가하면 목록 끝에 나타나고 입력 칸이 비워지는지 확인합니다.
2. 빈 제목, 음수 가격, `12.5` 가격을 넣어 오류 메시지를 확인합니다.
3. `event.preventDefault()`를 지우고 제출하면 어떻게 되는지 확인한 뒤 되돌립니다.
4. 추가한 도서도 검색과 정렬이 되는지 확인합니다.

> 완성 코드: 막히면 예제 저장소의 `p12-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S4-P12-03. 정리: 폼과 제어 컴포넌트

*정리, 5분*

- 제어 컴포넌트는 입력 칸의 값을 state와 연결해 React가 항상 값을 쥐고 있게 합니다.
- 입력값은 항상 문자열이므로 API로 보낼 값은 숫자나 `null`로 변환합니다.
- 폼은 결과를 콜백으로 부모에게 알리고, 상태를 가진 쪽에서만 상태를 바꿉니다.

##### 확인 퀴즈

**Q1.** `<input type="number">`에서 `event.target.value`의 자료형은 무엇인가요?

1. string
2. bigint
3. 브라우저마다 다르다.
4. number

> 정답: 1번. 입력 칸의 값은 type과 관계없이 항상 문자열입니다.

**Q2.** 폼 제출 시 페이지가 새로고침되는 것을 막는 코드는 무엇인가요?

1. `return false`
2. `form.reset()`
3. `event.stopPropagation()`
4. `event.preventDefault()`

> 정답: 4번. preventDefault는 브라우저의 기본 동작(폼 제출로 인한 페이지 이동)을 막습니다.

### S4-P13. useEffect와 정리 함수

> 학습 목표: useEffect로 데이터를 불러오고 브라우저와 동기화하며, 정리 함수의 역할을 설명할 수 있습니다.
>
> 완성 코드 브랜치: `p13-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S4-P13-01 useEffect | 주요 개념 | 20분 |
| S4-P13-02 시간이 걸리는 데이터 불러오기 | 실습 | 25분 |
| S4-P13-03 정리: useEffect와 정리 함수 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S4-P13-01. useEffect

*주요 개념, 20분*

컴포넌트 함수는 화면을 계산하는 일만 해야 합니다. 네트워크 요청, 타이머, 브라우저 API 구독처럼 React 바깥과 연결하는 작업은 `useEffect` 안에서 합니다. 이런 작업을 부수 효과(side effect)라고 부릅니다.

```jsx
useEffect(() => {
  // 1) 화면이 그려진 뒤 실행됩니다.
  const timer = setInterval(() => console.log('10초마다 실행'), 10000);

  // 2) 정리 함수: 컴포넌트가 사라지거나, 의존성이 바뀌어 다시 실행되기 직전에 호출됩니다.
  return () => clearInterval(timer);
}, []); // 3) 의존성 배열: 이 값들이 바뀔 때만 다시 실행합니다. 빈 배열이면 처음 한 번만.
```

의존성 배열에는 이펙트 안에서 사용하는 props와 state를 모두 넣는 것이 원칙입니다. 빠뜨리면 이펙트가 오래된 값을 쓰는 버그가 생깁니다.

개발 모드의 `StrictMode`는 컴포넌트를 처음 그릴 때 이펙트를 "실행, 정리, 다시 실행" 순서로 한 번 더 돌립니다. 그래서 개발 중에는 Network 탭에 같은 요청이 두 번 보일 수 있습니다. 이는 정리 함수를 제대로 작성했는지 확인하기 위한 의도된 동작이며 운영 빌드에서는 일어나지 않습니다. S6에서는 정리 함수에서 이전 요청을 취소하는 방법으로 이 상황을 올바르게 처리합니다.

이 과정에서 사용하는 훅을 미리 정리하면 다음과 같습니다. 각 훅은 처음 사용하는 장에서 설명합니다.

| 훅 | 용도 | 처음 사용하는 곳 |
|---|---|---|
| `useState` | 화면 상태 | S3 |
| `useEffect` | 외부와 동기화(요청, 타이머) | S3, S7 |
| `useContext` | 여러 컴포넌트가 공유하는 값 읽기 | S8 |
| `useCallback`, `useMemo` | 함수와 계산 결과 재사용 | S8, S13 |
| `useRef` | 다시 그리지 않고 값 보관 | S13 |
| `useSyncExternalStore` | React 밖의 저장소 구독 | S13 |

#### S4-P13-02. 시간이 걸리는 데이터 불러오기

*실습, 25분*

네트워크 요청 대신 시간이 걸리는 작업을 흉내 내는 함수로, 화면을 연 뒤 데이터를 불러오는 흐름을 연습합니다. S6에서 이 자리에 진짜 API 호출이 들어갑니다.

`src/practice/sampleBooks.js`

```js
// 백엔드 GET /books 응답(BookPage)과 같은 모양의 샘플 데이터
export const SAMPLE_PAGE = {
  items: [
    { id: 1, title: '파이썬 입문', price: 18000, isbn: null, author: { id: 1, name: '홍길동' } },
    { id: 2, title: 'FastAPI 실전', price: 32000, isbn: '9791100000011', author: { id: 2, name: '김철수' } },
    { id: 3, title: '데이터베이스 첫걸음', price: 21000, isbn: null, author: { id: 1, name: '홍길동' } },
    { id: 4, title: 'React 시작하기', price: 27000, isbn: null, author: { id: 3, name: '이영희' } },
  ],
  total: 4,
  skip: 0,
  limit: 10,
};

// 네트워크 요청 대신 시간이 걸리는 작업을 흉내 냅니다. (S6에서 실제 API로 바꿉니다.)
export function loadSampleBooks(delayMs = 800) {
  return new Promise((resolve) => setTimeout(() => resolve(SAMPLE_PAGE.items), delayMs));
}
```

`src/App.jsx`

```jsx
import { useEffect, useState } from 'react';
import AddBookForm from './practice/AddBookForm';
import BookTable from './practice/BookTable';
import SearchBox from './practice/SearchBox';
import { loadSampleBooks } from './practice/sampleBooks';

const SORTERS = {
  id: (a, b) => a.id - b.id,
  price: (a, b) => a.price - b.price,
  '-price': (a, b) => b.price - a.price,
};

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 처음 그린 뒤 한 번 데이터를 불러옵니다.
  useEffect(() => {
    let ignore = false;
    loadSampleBooks().then((items) => {
      if (!ignore) {
        setBooks(items);
        setLoading(false);
      }
    });
    // 정리 함수: 화면이 사라지면 늦게 도착한 결과를 무시합니다.
    return () => {
      ignore = true;
    };
  }, []);

  // books가 바뀔 때마다 브라우저 탭 제목을 맞춥니다.
  useEffect(() => {
    document.title = `도서 관리 (${books.length}권)`;
  }, [books.length]);
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState('id');

  function handleAdd(book) {
    // 기존 배열을 고치지 않고 새 배열로 바꿔 끼웁니다.
    const nextId = Math.max(0, ...books.map((b) => b.id)) + 1;
    setBooks((prev) => [...prev, { ...book, id: nextId, isbn: null }]);
  }

  // filter는 새 배열을 돌려주므로 sort로 정렬해도 원본 데이터가 바뀌지 않습니다.
  const visible = books
    .filter((book) => book.title.includes(keyword.trim()))
    .sort(SORTERS[sort]);

  return (
    <main>
      <h1>도서 목록</h1>
      <AddBookForm onAdd={handleAdd} />
      <SearchBox keyword={keyword} onChange={setKeyword} />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="id">등록순</option>
        <option value="price">가격 낮은 순</option>
        <option value="-price">가격 높은 순</option>
      </select>
      {loading && <p>불러오는 중입니다.</p>}
      {!loading && (visible.length === 0 ? <p>조건에 맞는 도서가 없습니다.</p> : <BookTable books={visible} />)}
      <p>
        전체 {books.length}권 중 {visible.length}권 표시
      </p>
    </main>
  );
}
```

이펙트가 두 개입니다. 첫 번째는 처음 한 번 데이터를 불러오고(의존성 `[]`), 두 번째는 도서 수가 바뀔 때마다 브라우저 탭 제목을 맞춥니다(의존성 `[books.length]`). 첫 번째 이펙트의 정리 함수는 `ignore` 표시를 세워, 화면이 사라진 뒤 늦게 도착한 결과로 state를 바꾸지 않게 합니다.

확인할 내용은 다음과 같습니다.

1. 화면을 열면 0.8초 동안 "불러오는 중입니다."가 보인 뒤 목록이 나오는지 확인합니다.
2. 도서를 추가하면 브라우저 탭 제목의 권수가 바뀌는지 확인합니다.
3. `loadSampleBooks` 안에 `console.log('불러오기 시작')`을 넣고 새로고침합니다. 개발 모드에서 두 번 찍히는 이유를 S3-P8에서 배운 `StrictMode`로 설명합니다.
4. 두 번째 이펙트의 의존성 배열을 지우면(배열 자체를 없애면) 언제 실행되는지 `console.log`로 확인합니다.

> 완성 코드: 막히면 예제 저장소의 `p13-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S4-P13-03. 정리: useEffect와 정리 함수

*정리, 5분*

- 네트워크 요청, 타이머, 브라우저 API처럼 React 밖과 연결하는 작업은 `useEffect`에서 합니다.
- 의존성 배열은 다시 실행할 조건이며, 이펙트 안에서 쓰는 값은 모두 넣는 것이 원칙입니다.
- 정리 함수는 다음 실행이나 화면이 사라지기 직전에 호출되어 타이머를 끄거나 늦은 결과를 무시하게 합니다.

##### 확인 퀴즈

**Q1.** 의존성 배열이 빈 배열(`[]`)인 이펙트는 언제 실행되나요?

1. 화면이 사라질 때만
2. 실행되지 않는다.
3. 화면이 다시 그려질 때마다
4. 처음 화면에 나타난 뒤 한 번 (개발 모드의 StrictMode에서는 실행, 정리, 재실행)

> 정답: 4번. 빈 배열은 바뀔 값이 없다는 뜻이므로 처음 한 번 실행됩니다.

**Q2.** 이펙트의 정리 함수에서 하는 일로 알맞지 않은 것은 무엇인가요?

1. 진행 중인 요청을 취소한다.
2. 다음에 그릴 화면을 만들어 반환한다.
3. 늦게 도착한 결과를 무시하도록 표시한다.
4. 타이머를 끈다.

> 정답: 2번. 정리 함수는 뒷정리를 하며, 화면은 컴포넌트 함수가 반환합니다.

### S4-P14. 2일차 통합 실습: 정적 도서 목록

> 학습 목표: 컴포넌트를 나누는 기준에 따라 화면을 정리하고, 자식에서 일어난 동작을 부모가 처리하게 만들 수 있습니다.
>
> 완성 코드 브랜치: `p14-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S4-P14-01 컴포넌트를 나누는 기준 | 주요 개념 | 15분 |
| S4-P14-02 화면 컴포넌트로 정리하고 삭제 기능 추가하기 | 실습 | 30분 |
| S4-P14-03 정리: 2일차 통합 실습 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S4-P14-01. 컴포넌트를 나누는 기준

*주요 개념, 15분*

지금 `App.jsx`에는 데이터 불러오기, 검색, 정렬, 추가, 탭 제목 동기화가 모두 들어 있습니다. 동작은 하지만 기능이 늘어날수록 읽기 어려워집니다. 컴포넌트를 나눌 때는 다음 기준을 씁니다.

| 기준 | 질문 | 이 화면에서의 예 |
|---|---|---|
| 하나의 역할 | 이 컴포넌트를 한 문장으로 설명할 수 있는가? | "검색과 정렬 입력을 모은다" → `BookToolbar` |
| 상태의 위치 | 이 값을 누가 함께 쓰는가? 공통 부모는 누구인가? | `books`, `keyword`, `sort`는 목록 화면 전체가 쓰므로 화면 컴포넌트에 |
| 데이터 흐름 | 값은 위에서 아래로, 변경 요청은 아래에서 위로 흐르는가? | `BookRow`의 삭제 버튼은 `onDelete`로 알리기만 |
| 재사용 | 다른 화면에서도 같은 모양이 필요한가? | 표와 행은 다른 목록에서도 쓸 수 있다 |

나누는 것 자체가 목적은 아닙니다. 한 파일이 한 화면에 들어오고, 이름만 보고 역할을 알 수 있으면 충분합니다. 이 과정의 화면은 `pages`(주소 하나에 대응하는 화면, 상태와 데이터 불러오기 담당)와 `components`(여러 화면이 함께 쓰는 표시 담당)로 나눕니다. S7에서 이 구조를 그대로 씁니다.

#### S4-P14-02. 화면 컴포넌트로 정리하고 삭제 기능 추가하기

*실습, 30분*

목록 화면 전체를 `StaticBookPage`로 옮기고, 검색과 정렬 입력을 `BookToolbar`로 묶고, 행마다 삭제 버튼을 추가합니다.

`src/practice/BookToolbar.jsx`

```jsx
import SearchBox from './SearchBox';

// 검색과 정렬 입력을 한곳에 모은 컴포넌트입니다. 값은 부모가 가지고, 바뀐 값만 알려 줍니다.
export default function BookToolbar({ keyword, onKeywordChange, sort, onSortChange }) {
  return (
    <div>
      <SearchBox keyword={keyword} onChange={onKeywordChange} />
      <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="id">등록순</option>
        <option value="price">가격 낮은 순</option>
        <option value="-price">가격 높은 순</option>
      </select>
    </div>
  );
}
```

`src/practice/BookRow.jsx`

```jsx
export default function BookRow({ book, onDelete }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author?.name}</td>
      <td>{book.price.toLocaleString('ko-KR')}원</td>
      <td>
        <button type="button" onClick={() => onDelete(book.id)}>
          삭제
        </button>
      </td>
    </tr>
  );
}
```

`src/practice/BookTable.jsx`

```jsx
import BookRow from './BookRow';

export default function BookTable({ books, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>저자</th>
          <th>가격</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookRow key={book.id} book={book} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}
```

`src/practice/StaticBookPage.jsx`

```jsx
import { useEffect, useState } from 'react';
import AddBookForm from './AddBookForm';
import BookTable from './BookTable';
import BookToolbar from './BookToolbar';
import { loadSampleBooks } from './sampleBooks';

const SORTERS = {
  id: (a, b) => a.id - b.id,
  price: (a, b) => a.price - b.price,
  '-price': (a, b) => b.price - a.price,
};

export default function StaticBookPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 처음 그린 뒤 한 번 데이터를 불러옵니다.
  useEffect(() => {
    let ignore = false;
    loadSampleBooks().then((items) => {
      if (!ignore) {
        setBooks(items);
        setLoading(false);
      }
    });
    // 정리 함수: 화면이 사라지면 늦게 도착한 결과를 무시합니다.
    return () => {
      ignore = true;
    };
  }, []);

  // books가 바뀔 때마다 브라우저 탭 제목을 맞춥니다.
  useEffect(() => {
    document.title = `도서 관리 (${books.length}권)`;
  }, [books.length]);
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState('id');

  // 자식(BookRow)에서 일어난 삭제를 부모가 처리합니다. 상태는 가진 쪽에서만 바꿉니다.
  function handleDelete(bookId) {
    setBooks((prev) => prev.filter((b) => b.id !== bookId));
  }

  function handleAdd(book) {
    // 기존 배열을 고치지 않고 새 배열로 바꿔 끼웁니다.
    const nextId = Math.max(0, ...books.map((b) => b.id)) + 1;
    setBooks((prev) => [...prev, { ...book, id: nextId, isbn: null }]);
  }

  // filter는 새 배열을 돌려주므로 sort로 정렬해도 원본 데이터가 바뀌지 않습니다.
  const visible = books
    .filter((book) => book.title.includes(keyword.trim()))
    .sort(SORTERS[sort]);

  return (
    <main>
      <h1>도서 목록</h1>
      <AddBookForm onAdd={handleAdd} />
      <BookToolbar keyword={keyword} onKeywordChange={setKeyword} sort={sort} onSortChange={setSort} />
      {loading && <p>불러오는 중입니다.</p>}
      {!loading && (visible.length === 0 ? <p>조건에 맞는 도서가 없습니다.</p> : <BookTable books={visible} onDelete={handleDelete} />)}
      <p>
        전체 {books.length}권 중 {visible.length}권 표시
      </p>
    </main>
  );
}
```

`src/App.jsx`

```jsx
import StaticBookPage from './practice/StaticBookPage';

export default function App() {
  return <StaticBookPage />;
}
```

삭제 버튼은 `BookRow`에 있지만 도서 배열은 `StaticBookPage`에 있습니다. 그래서 `onDelete`가 `StaticBookPage → BookTable → BookRow`로 내려가고, 버튼을 누르면 `BookRow`가 `onDelete(book.id)`를 불러 부모에게 알립니다. 중간의 `BookTable`은 받은 함수를 전달만 합니다.

확인할 내용은 다음과 같습니다.

1. 검색, 정렬, 추가, 삭제가 모두 이전처럼 동작하는지 확인합니다.
2. 도서를 삭제하면 탭 제목의 권수가 줄어드는지 확인합니다.
3. 검색어를 입력한 상태에서 삭제해도 남은 결과가 올바른지 확인합니다.
4. `App.jsx`가 세 줄로 줄었습니다. 다음 섹션에서 백엔드 연결 실습 컴포넌트를 `App`에 추가할 때 이 구조가 어떤 점에서 편한지 생각해 봅니다.

> 완성 코드: 막히면 예제 저장소의 `p14-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S4-P14-03. 정리: 2일차 통합 실습

*정리, 5분*

- 컴포넌트는 하나의 역할, 상태의 위치, 데이터 흐름, 재사용을 기준으로 나눕니다.
- 값은 props로 내려가고, 변경 요청은 콜백으로 올라오며, 상태를 가진 컴포넌트만 상태를 바꿉니다.
- 주소 하나에 대응하는 화면은 `pages`, 여러 화면이 함께 쓰는 표시 컴포넌트는 `components`에 둡니다.

##### 확인 퀴즈

**Q1.** `BookRow`의 삭제 버튼이 눌렸을 때 도서 배열을 실제로 바꾸는 곳은 어디인가요?

1. 도서 배열 state를 가진 StaticBookPage
2. main.jsx
3. BookRow
4. BookTable

> 정답: 1번. 자식은 콜백으로 알리기만 하고, 상태를 가진 컴포넌트가 상태를 바꿉니다.

**Q2.** 여러 자식 컴포넌트가 같은 값을 써야 할 때 그 값을 두는 곳은 어디인가요?

1. 각 자식에 따로
2. 가장 가까운 공통 부모
3. 전역 변수
4. localStorage

> 정답: 2번. 상태 끌어올리기: 공통 부모가 값을 가지고 props로 내려 줍니다.

---

## S5. Origin, SOP, CORS

*3일차 오전, 4시간*

> 섹션 목표: 백엔드와 처음 연결하며 출처, 동일 출처 정책, CORS의 동작을 관찰하고 CORS 오류를 스스로 진단하고 해결합니다.

### S5-P15. 첫 요청과 출처

> 학습 목표: 다른 출처의 백엔드로 요청을 보내 CORS 오류를 관찰하고, 출처의 정의로 그 원인을 설명할 수 있습니다.
>
> 완성 코드 브랜치: `p15-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S5-P15-01 백엔드로 첫 요청 보내기 | 실습 | 20분 |
| S5-P15-02 출처(Origin) | 주요 개념 | 15분 |
| S5-P15-03 출처 비교 연습 | 실습 | 10분 |
| S5-P15-04 정리: 첫 요청과 출처 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S5-P15-01. 백엔드로 첫 요청 보내기

*실습, 20분*

S4까지는 샘플 데이터를 썼습니다. 이제 진짜 백엔드에 요청을 보내 봅니다. 먼저 백엔드가 실행 중인지 확인하고, 이번 파트의 관찰을 위해 백엔드가 아직 프론트엔드 주소를 허용하지 않은 상태로 둡니다. 백엔드 프로젝트의 `.env`에 `CORS_ORIGINS` 값이 있고 그 안에 `http://localhost:5173`이 이미 들어 있다면, 잠시 지우고 `docker compose up -d`로 API 컨테이너를 다시 만듭니다.

연결을 확인하는 연습용 컴포넌트를 만들고 `App`에서 함께 보여 줍니다.

`src/practice/FirstRequest.jsx`

```jsx
import { useEffect, useState } from 'react';

// S5 실습: 다른 출처(127.0.0.1:8000)의 백엔드에 첫 요청을 보내 CORS 동작을 관찰합니다.
export default function FirstRequest() {
  const [message, setMessage] = useState('요청 전');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/books?limit=3')
      .then((response) => response.json())
      .then((page) => setMessage(`도서 ${page.total}권을 받았습니다.`))
      .catch((error) => setMessage(`실패: ${error.message}`));
  }, []);

  return <p>백엔드 연결 확인: {message}</p>;
}
```

`src/App.jsx`

```jsx
import FirstRequest from './practice/FirstRequest';
import StaticBookPage from './practice/StaticBookPage';

export default function App() {
  return (
    <>
      <FirstRequest />
      <StaticBookPage />
    </>
  );
}
```

```text
Access to fetch at 'http://127.0.0.1:8000/books?limit=3' from origin 'http://localhost:5173'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the
requested resource.
```

Network 탭에서 해당 요청을 눌러 봅니다. 요청은 실제로 서버에 도착했고, 서버는 200 응답까지 보냈습니다. 백엔드 로그(`docker compose logs api`)에도 `GET /books` 요청이 200으로 기록되어 있습니다. 그런데도 JavaScript는 응답을 읽지 못했습니다. **서버가 거절한 것이 아니라 브라우저가 응답을 JavaScript에 넘겨주지 않은 것**입니다. S1-P4-03에서는 같은 코드가 잘 동작했는데, 무엇이 달라졌을까요? 이 차이를 이해하는 것이 이 장의 목표입니다.

#### S5-P15-02. 출처(Origin)

*주요 개념, 15분*

출처는 웹 주소의 **스킴(프로토콜), 호스트, 포트** 세 가지를 합친 것입니다. 경로와 쿼리는 출처에 포함되지 않습니다. 세 가지 중 하나라도 다르면 다른 출처입니다.

```text
http://localhost:5173/books/7?tab=info
└┬─┘   └───┬───┘ └┬─┘
스킴     호스트   포트      -> 출처: http://localhost:5173
```

`http://localhost:5173`을 기준으로 여러 주소를 비교하면 다음과 같습니다.

| 비교 대상 | 같은 출처인가 | 이유 |
|---|---|---|
| `http://localhost:5173/login` | 같음 | 경로만 다릅니다. |
| `https://localhost:5173` | 다름 | 스킴이 다릅니다. |
| `http://localhost:8000` | 다름 | 포트가 다릅니다. |
| `http://127.0.0.1:5173` | 다름 | 호스트 문자열이 다릅니다. 같은 컴퓨터를 가리켜도 브라우저는 다른 출처로 봅니다. |
| `http://127.0.0.1:8000` | 다름 | 호스트와 포트가 모두 다릅니다. |

S1-P4-03에서는 페이지(`http://127.0.0.1:8000/books`)와 요청 대상(`/books`)의 출처가 같았습니다. 이번에는 페이지가 `http://localhost:5173`, 요청 대상이 `http://127.0.0.1:8000`이므로 출처가 다릅니다. 이런 요청을 교차 출처(cross-origin) 요청이라고 합니다.

#### S5-P15-03. 출처 비교 연습

*실습, 10분*

다음 각 쌍이 같은 출처인지 먼저 판단한 뒤, 이유를 스킴, 호스트, 포트 중 무엇이 다른지로 설명합니다.

| 번호 | 주소 A | 주소 B |
|---|---|---|
| 1 | `http://localhost:5173/books/7` | `http://localhost:5173/login?from=/loans` |
| 2 | `http://localhost:8080` | `http://localhost:8080/api/books` |
| 3 | `https://example.com` | `https://example.com:443/books` |
| 4 | `http://react-frontend.s3-website.ap-northeast-2.amazonaws.com` | `https://api.example.com` |
| 5 | `http://localhost:5173` | `http://127.0.0.1:5173` |

정답: 1번, 2번, 3번은 같은 출처이고, 4번과 5번은 다른 출처입니다. 3번은 HTTPS의 기본 포트가 443이라 포트를 생략한 주소와 같습니다. 2번은 S15에서 Nginx 프록시로, 4번은 S16에서 S3 배포로 다시 만나는 구성입니다.

이제 5번을 직접 확인합니다. 개발 서버를 `npm run dev -- --host 127.0.0.1`로 다시 실행하고 `http://127.0.0.1:5173`으로 접속합니다. 같은 컴퓨터의 같은 서버인데도 브라우저는 다른 출처로 취급합니다. 확인했으면 다시 `npm run dev`로 실행합니다.

> 완성 코드: 막히면 예제 저장소의 `p15-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S5-P15-04. 정리: 첫 요청과 출처

*정리, 5분*

- 다른 출처의 백엔드로 보낸 요청은 서버에 도착해 처리되었지만, 브라우저가 응답을 JavaScript에 넘겨주지 않았습니다.
- 출처는 스킴, 호스트, 포트의 조합이며 경로와 쿼리는 포함되지 않습니다.
- `localhost`와 `127.0.0.1`은 같은 컴퓨터를 가리켜도 다른 출처입니다.

##### 확인 퀴즈

**Q1.** `http://localhost:5173`과 같은 출처인 주소는 무엇인가요?

1. `http://localhost:5173/books/7`
2. `http://localhost:8000`
3. `http://127.0.0.1:5173`
4. `https://localhost:5173`

> 정답: 1번. 출처는 스킴, 호스트, 포트의 조합이며 경로는 포함되지 않습니다.

**Q2.** S5-P15-01의 CORS 오류 상황에서 일어난 일로 옳은 것은 무엇인가요?

1. 서버가 403으로 거절했다.
2. 서버는 200으로 응답했지만 브라우저가 JavaScript에 응답을 넘기지 않았다.
3. 프론트엔드 코드의 문법 오류였다.
4. 요청이 서버에 도착하지 않았다.

> 정답: 2번. 단순 요청은 서버에서 처리되며, 차단은 브라우저가 응답을 읽을 때 일어납니다.

### S5-P16. 동일 출처 정책

> 학습 목표: 동일 출처 정책이 막는 것과 막지 않는 것을 구분하고, 실제 브라우저에서 관찰할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S5-P16-01 동일 출처 정책(SOP) | 주요 개념 | 20분 |
| S5-P16-02 막는 것과 막지 않는 것 관찰하기 | 실습 | 25분 |
| S5-P16-03 정리: 동일 출처 정책 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S5-P16-01. 동일 출처 정책(SOP)

*주요 개념, 20분*

동일 출처 정책(Same-Origin Policy)은 **한 출처에서 실행되는 스크립트가 다른 출처의 자원을 함부로 읽지 못하게 하는** 브라우저의 기본 보안 규칙입니다.

이 규칙이 왜 필요한지 상황을 떠올려 봅니다. 사용자가 사내 관리 시스템에 로그인한 상태로 다른 탭에서 악성 사이트를 열었습니다. 동일 출처 정책이 없다면 악성 사이트의 스크립트가 사내 시스템에 요청을 보내고, 브라우저에 남아 있는 로그인 정보가 함께 전송되어, 돌아온 응답(직원 목록, 내부 문서)을 그대로 읽어 공격자 서버로 보낼 수 있습니다. 동일 출처 정책은 이 마지막 단계인 **응답 읽기**를 막습니다.

동일 출처 정책이 막는 것과 막지 않는 것을 정확히 구분해야 합니다.

| 막는 것 (다른 출처일 때) | 막지 않는 것 |
|---|---|
| `fetch`, `XMLHttpRequest`로 받은 응답을 스크립트가 읽기 | `<img>`, `<script>`, `<link>`, `<video>`로 다른 출처 자원을 불러와 표시하기 |
| 다른 출처 `<iframe>` 안의 DOM에 접근하기 | `<form>`으로 다른 출처에 제출하기, 링크로 이동하기 |
| 다른 출처의 `localStorage`, `sessionStorage` 읽기 | 요청 자체를 서버로 보내기(단, S5-P17-01의 사전 요청 대상은 예외) |

오른쪽 열이 중요합니다. 동일 출처 정책은 주로 "읽기"를 막을 뿐 "보내기"를 완전히 막지는 않습니다. S5-P15-01에서 서버 로그에 요청이 남은 이유가 이것입니다. 그래서 동일 출처 정책만으로는 다른 사이트가 사용자 몰래 요청을 보내는 공격(CSRF)을 막을 수 없으며, S12에서 별도의 대책을 다룹니다.

#### S5-P16-02. 막는 것과 막지 않는 것 관찰하기

*실습, 25분*

`http://localhost:5173`을 열고 Console 탭에서 하나씩 실행하며 Network 탭과 백엔드 로그(`docker compose logs -f api`)를 함께 봅니다.

**1) 응답 읽기는 막힌다**

```js
await fetch('http://127.0.0.1:8000/health').then((r) => r.json());
// TypeError: Failed to fetch  (Console에 CORS 오류)
```

**2) 요청 보내기는 막히지 않는다**

`no-cors` 모드는 "응답을 읽지 않겠다"고 약속하고 다른 출처로 요청을 보내는 방식입니다. 로그인 요청을 일부러 틀린 비밀번호로 보내 봅니다.

```js
const form = new URLSearchParams({ username: 'nobody@example.com', password: 'wrong' });
const res = await fetch('http://127.0.0.1:8000/auth/token', { method: 'POST', body: form, mode: 'no-cors' });
console.log(res.type, res.status); // opaque 0 : 응답 내용은 볼 수 없습니다.
```

백엔드 로그에는 `POST /auth/token`이 401로 기록됩니다. 다른 출처의 페이지가 로그인 시도를 실제로 서버에 보낼 수 있다는 뜻입니다. 백엔드가 로그인 실패 횟수를 서버에서 제한하는 이유(백엔드 S10-P34)이자, S12에서 다룰 CSRF가 생기는 배경입니다.

**3) 이미지 같은 자원 불러오기는 막히지 않는다**

```js
const img = new Image();
img.src = 'http://127.0.0.1:8000/health?from=img';
```

Network 탭에 `health?from=img` 요청이 나타납니다. 응답이 이미지가 아니라 화면에 표시되지는 않지만, 요청 자체는 아무 제한 없이 나갑니다. `<img>`, `<script>`, `<link>`로 다른 출처의 자원을 쓰는 것은 웹의 기본 동작입니다.

**4) 저장소는 출처마다 따로 있다**

```js
localStorage.setItem('hello', 'localhost에서 저장');
```

같은 개발 서버를 `http://127.0.0.1:5173`으로도 열어(앞 파트의 방법) Console에서 `localStorage.getItem('hello')`를 실행하면 `null`이 나옵니다. 출처가 다르면 저장소도 다릅니다. 확인 후 `localStorage.removeItem('hello')`로 지웁니다.

#### S5-P16-03. 정리: 동일 출처 정책

*정리, 5분*

- 동일 출처 정책은 다른 출처의 응답을 스크립트가 읽는 것을 막습니다.
- 요청 보내기, 이미지와 스크립트 불러오기, 폼 제출은 막지 않으므로 서버 쪽 대책(요청 제한, CSRF 대책)이 따로 필요합니다.
- localStorage와 sessionStorage는 출처마다 분리됩니다.

##### 확인 퀴즈

**Q1.** 동일 출처 정책이 기본으로 막는 것은 무엇인가요?

1. 다른 출처의 이미지를 `<img>`로 표시하기
2. fetch로 받은 다른 출처의 응답을 스크립트가 읽기
3. 다른 출처로 링크 이동하기
4. 다른 출처로 폼 제출하기

> 정답: 2번. SOP는 주로 읽기를 막고, 보내기와 자원 삽입은 대부분 허용합니다.

**Q2.** `no-cors` 모드로 보낸 다른 출처 요청에 대한 설명으로 옳은 것은 무엇인가요?

1. CORS 설정 없이 모든 기능을 쓸 수 있다.
2. 요청은 서버에서 처리되지만 응답 내용은 읽을 수 없다.
3. 요청이 서버로 전송되지 않는다.
4. 응답을 JSON으로 읽을 수 있다.

> 정답: 2번. no-cors 응답은 opaque로, 상태와 본문을 볼 수 없습니다. 하지만 서버는 요청을 처리합니다.

### S5-P17. 단순 요청과 사전 요청

> 학습 목표: CORS의 단순 요청과 사전 요청의 흐름, 관련 헤더의 의미를 설명하고 Network 탭에서 확인할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S5-P17-01 CORS | 주요 개념 | 20분 |
| S5-P17-02 사전 요청 관찰하기 | 실습 | 25분 |
| S5-P17-03 정리: 단순 요청과 사전 요청 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S5-P17-01. CORS

*주요 개념, 20분*

동일 출처 정책은 안전하지만, 이 과정처럼 프론트엔드와 백엔드가 다른 출처에서 동작하는 정상적인 경우까지 막아 버립니다. CORS(Cross-Origin Resource Sharing, 교차 출처 자원 공유)는 **서버가 응답 헤더로 "이 출처는 내 응답을 읽어도 된다"고 허락하는 방법**입니다. 허락의 주체는 서버이고, 허락을 확인하고 집행하는 주체는 브라우저입니다.

##### 단순 요청

다음 조건을 모두 만족하는 요청은 단순 요청(simple request)으로 취급되어 바로 전송됩니다.

- 메서드가 `GET`, `HEAD`, `POST` 중 하나입니다.
- 직접 지정한 헤더가 `Accept`, `Accept-Language`, `Content-Language`, `Content-Type` 같은 안전 목록 헤더뿐입니다. `Authorization` 헤더가 있으면 단순 요청이 아닙니다.
- `Content-Type`이 `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` 중 하나입니다. `application/json`이면 단순 요청이 아닙니다.

단순 요청의 흐름은 다음과 같습니다.

```text
브라우저                                            서버(127.0.0.1:8000)
   │ GET /books?limit=3                                │
   │ Origin: http://localhost:5173  ─────────────────> │ 요청 처리 (로그에 기록됨)
   │                                                   │
   │ <───────────────────────────────── 200 OK         │
   │     Access-Control-Allow-Origin: http://localhost:5173  (허락한 경우에만 있음)
   │
   └ 브라우저 판단: 허락 헤더가 내 출처와 일치하면 JavaScript에 응답 전달, 없으면 차단
```

브라우저는 교차 출처 요청에 `Origin` 헤더를 자동으로 붙입니다. 서버가 응답에 `Access-Control-Allow-Origin` 헤더를 넣어 그 출처를 허락하면 JavaScript가 응답을 읽을 수 있고, 헤더가 없으면 S5-P15-01처럼 차단됩니다.

##### 사전 요청(preflight)

단순 요청이 아닌 요청은 본 요청을 보내기 전에 `OPTIONS` 메서드로 "이런 요청을 보내도 되는가"를 먼저 묻습니다. 이를 사전 요청이라고 합니다. 서버가 허락하지 않으면 본 요청은 아예 전송되지 않습니다.

```text
브라우저                                            서버
   │ OPTIONS /books                                    │
   │ Origin: http://localhost:5173                     │
   │ Access-Control-Request-Method: POST               │
   │ Access-Control-Request-Headers: authorization,content-type ──> │
   │                                                   │
   │ <──────────────────────────── 200 OK              │
   │   Access-Control-Allow-Origin: http://localhost:5173
   │   Access-Control-Allow-Methods: DELETE, GET, ..., POST
   │   Access-Control-Allow-Headers: authorization,content-type
   │   Access-Control-Max-Age: 600   (이 결과를 600초 동안 재사용)
   │                                                   │
   │ POST /books  (본 요청)                            │
   │ Authorization: Bearer eyJ...                      │
   │ Content-Type: application/json  ────────────────> │
```

이 과정에서 호출하는 API가 각각 어떤 요청에 해당하는지 정리하면 다음과 같습니다.

| 요청 | 종류 | 이유 |
|---|---|---|
| `GET /books` | 단순 요청 | GET, 특별한 헤더 없음 |
| `POST /auth/token` (로그인) | 단순 요청 | POST, 폼 형식, `Authorization` 없음 |
| `GET /auth/me` | 사전 요청 | `Authorization` 헤더 |
| `POST /books` | 사전 요청 | `application/json`, `Authorization` |
| `POST /books/{id}/cover` | 사전 요청 | `Authorization` (멀티파트 자체는 단순 형식) |
| `DELETE /books/{id}` | 사전 요청 | DELETE 메서드 |

로그인 요청이 단순 요청이라는 점에 주목합니다. 허락하지 않은 출처에서 보낸 로그인 요청도 서버까지는 도달해 처리된다는 뜻입니다. 백엔드 과정 S10-P34에서 로그인 실패 횟수를 서버에서 제한한 이유 중 하나입니다.

##### 응답 헤더 노출

CORS가 허락된 응답이라도 JavaScript가 읽을 수 있는 응답 헤더는 기본적으로 `Cache-Control`, `Content-Language`, `Content-Length`, `Content-Type`, `Expires`, `Last-Modified`, `Pragma` 일곱 가지뿐입니다. 백엔드가 보내는 `Retry-After`(로그인 잠금 시간), `X-Request-ID`, `X-Process-Time`(백엔드 S8-P28)을 프론트엔드에서 읽으려면 서버가 `Access-Control-Expose-Headers`로 명시해야 합니다.

##### 자격 증명이 포함된 요청

브라우저는 교차 출처 요청에 쿠키를 기본적으로 보내지 않습니다. 쿠키를 보내려면 프론트엔드에서 `fetch(url, { credentials: 'include' })`나 axios의 `withCredentials: true`를 지정하고, 서버는 `Access-Control-Allow-Credentials: true`를 보내야 합니다. 이때 `Access-Control-Allow-Origin`에 와일드카드 `*`를 쓸 수 없고 정확한 출처를 적어야 합니다. 이 과정의 백엔드는 토큰을 쿠키가 아니라 `Authorization` 헤더로 주고받으므로 자격 증명 설정이 필요하지 않습니다. 쿠키 방식과의 비교는 S12에서 다룹니다.

#### S5-P17-02. 사전 요청 관찰하기

*실습, 25분*

아직 백엔드가 `http://localhost:5173`을 허용하지 않은 상태에서 관찰합니다.

1. Console에서 `Authorization` 헤더를 붙인 요청을 보냅니다. Network 탭에서 `OPTIONS` 요청이 먼저 나가고 실패한 뒤, 본 요청(`GET /auth/me`)은 아예 나가지 않는 것을 확인합니다.

```js
await fetch('http://127.0.0.1:8000/auth/me', { headers: { Authorization: 'Bearer test' } });
```

2. 같은 요청에서 `Authorization` 헤더를 빼면 단순 요청이 되어 사전 요청 없이 바로 나갑니다. 두 경우의 차이를 Network 탭에서 비교합니다.

3. `curl`로 사전 요청을 흉내 내어 서버가 지금 어떻게 답하는지 확인합니다. `Access-Control-Allow-Origin` 헤더가 없거나 400이 돌아옵니다. 다음 파트에서 설정을 고친 뒤 같은 명령을 다시 실행해 비교합니다.

```bash
curl -i -X OPTIONS http://127.0.0.1:8000/books \
  -H "Origin: http://localhost:5173" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: authorization,content-type"
```

4. 백엔드 로그에서 `OPTIONS` 요청을 찾아봅니다. 이 로그는 S14-P47의 로그 분석 화면에서도 다시 만납니다.

```bash
docker compose logs api --no-log-prefix | grep OPTIONS
```

5. S1-P3-03의 API 표에서 이 과정이 호출할 API를 단순 요청과 사전 요청으로 나눠 봅니다. 앞 페이지의 표와 비교해 확인합니다.

#### S5-P17-03. 정리: 단순 요청과 사전 요청

*정리, 5분*

- CORS는 서버가 응답 헤더로 특정 출처의 읽기를 허락하는 방법이며, 허락은 서버가 하고 집행은 브라우저가 합니다.
- `Authorization` 헤더나 `application/json` 본문, `DELETE` 같은 메서드는 사전 요청(`OPTIONS`)을 먼저 일으킵니다.
- 기본으로 읽을 수 있는 응답 헤더는 몇 가지뿐이라 `Retry-After` 같은 헤더는 서버가 노출해야 합니다.

##### 확인 퀴즈

**Q1.** 다음 중 사전 요청이 일어나는 요청은 무엇인가요?

1. 폼 형식의 `POST /auth/token`
2. `Authorization` 헤더가 있는 `GET /auth/me`
3. `<img>`로 표지 불러오기
4. 헤더 없는 `GET /books`

> 정답: 2번. Authorization 헤더는 안전 목록 헤더가 아니므로 사전 요청이 먼저 일어납니다.

**Q2.** 쿠키를 포함한 교차 출처 요청에서 서버 설정으로 옳은 것은 무엇인가요?

1. 쿠키는 CORS와 관계없다.
2. 사전 요청을 끈다.
3. Access-Control-Allow-Origin에 *를 쓴다.
4. 정확한 출처를 적고 Access-Control-Allow-Credentials: true를 보낸다.

> 정답: 4번. 자격 증명이 포함되면 와일드카드를 쓸 수 없고 출처를 정확히 지정해야 합니다.

### S5-P18. 백엔드 CORS 설정과 프록시

> 학습 목표: 백엔드 CORS 설정으로 오류를 해결하고, 프록시라는 다른 방법과 CORS에 대한 흔한 오해를 설명할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S5-P18-01 백엔드 CORS 설정 고치기 | 실습 | 20분 |
| S5-P18-02 다른 해결 방법: 프록시 | 주요 개념 | 10분 |
| S5-P18-03 CORS에 대한 흔한 오해 | 주요 개념 | 15분 |
| S5-P18-04 정리: 백엔드 CORS 설정과 프록시 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S5-P18-01. 백엔드 CORS 설정 고치기

*실습, 20분*

백엔드 과정 S3-P9-04에서 `app/main.py`에 다음 설정을 넣었습니다. 허용 출처는 설정값 `cors_origins`, 즉 환경 변수 `CORS_ORIGINS`에서 읽습니다.

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**1) 허용 출처 등록**

백엔드 프로젝트의 `.env`에 프론트엔드 개발 서버의 출처를 넣습니다. 값의 형식은 백엔드 S3-P9-02에서 정의한 `Settings`를 따르며, `list[str]` 타입이라면 다음처럼 JSON 배열로 적습니다.

```dotenv
CORS_ORIGINS=["http://localhost:5173"]
```

컨테이너가 이 값을 받을 수 있도록 `compose.yaml`의 `api` 서비스 `environment`에도 한 줄을 추가합니다. Compose는 같은 폴더의 `.env`에서 `${CORS_ORIGINS}` 값을 읽어 넣어 줍니다.

```yaml
  api:
    environment:
      DATABASE_URL: postgresql+psycopg://bookapi:${POSTGRES_PASSWORD}@db:5432/bookapi
      SECRET_KEY: ${SECRET_KEY}
      CORS_ORIGINS: ${CORS_ORIGINS}
```

**2) 노출할 응답 헤더 추가 (권장)**

로그인 화면에서 잠금 시간을 안내하고 관제 화면에서 요청 ID를 활용할 수 있도록 `expose_headers`를 추가합니다. 이 설정이 없어도 이 교안의 화면은 동작하지만, S8의 로그인 잠금 안내가 기본값(15분)으로 표시됩니다.

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Retry-After", "X-Request-ID", "X-Process-Time"],
)
```

**3) 적용과 확인**

```bash
cd book-api
docker compose up -d --build api
```

`curl`로 사전 요청을 흉내 내어 서버의 응답 헤더를 직접 확인합니다.

```bash
curl -i -X OPTIONS http://127.0.0.1:8000/books \
  -H "Origin: http://localhost:5173" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: authorization,content-type"
```

응답이 `200 OK`이고 `access-control-allow-origin: http://localhost:5173`이 있으면 성공입니다. `Origin`을 `http://evil.example`로 바꿔 다시 보내면 `400 Bad Request`와 함께 `access-control-allow-origin` 헤더가 빠진 응답이 옵니다. 브라우저의 화면을 새로고침하면 이제 "도서 N권을 받았습니다."가 표시됩니다.

`allow_origins=["*"]`로 모든 출처를 허용하면 빠르게 오류를 없앨 수 있지만, 백엔드 과정 S3-P9-03에서 강조했듯이 피해야 합니다. 허용 출처는 실제로 사용하는 주소만 명시적으로 적습니다.

설정을 고친 뒤 S5-P17-02 실습의 1번과 3번을 다시 실행해 결과를 비교합니다. 확인이 끝나면 `src/App.jsx`에서 `FirstRequest`를 지우고 `StaticBookPage`만 남겨 둡니다.

#### S5-P18-02. 다른 해결 방법: 프록시

*주요 개념, 10분*

CORS는 "다른 출처의 응답을 읽을 수 있게 허락받는" 방법입니다. 반대로 **브라우저 입장에서 출처가 같아지도록 만드는** 방법도 있습니다. 프론트엔드를 제공하는 서버가 특정 경로의 요청을 백엔드로 대신 전달하는 프록시 방식입니다. 브라우저는 자기 출처(`http://localhost:5173/api/books`)로만 요청하므로 동일 출처 정책에 걸리지 않습니다. 서버끼리의 통신에는 동일 출처 정책이 적용되지 않습니다.

Vite 개발 서버는 `vite.config.js`의 `server.proxy`로 이 기능을 제공합니다.

```js
// vite.config.js (참고용, 이 과정에서는 사용하지 않습니다)
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        rewrite: (path) => path.replace(/^\/api/, ''), // /api/books -> /books
      },
    },
  },
});
```

두 방법을 비교하면 다음과 같습니다.

| 구분 | 백엔드 CORS 허용 | 프록시 |
|---|---|---|
| 브라우저가 보는 출처 | 다름 (교차 출처) | 같음 |
| 사전 요청 | 발생 | 발생하지 않음 |
| 설정 위치 | 백엔드 | 프론트엔드를 제공하는 서버 |
| 이 과정의 사용 | 개발 환경 (4~S13) | 운영 환경, Nginx (S15) |

이 과정은 개발 환경에서 일부러 CORS 방식을 사용합니다. 교차 출처 요청의 동작을 Network 탭에서 직접 보며 익히기 위해서입니다. 운영 환경에서는 S15에서 Nginx 프록시를 구성해 프론트엔드와 API를 같은 출처로 제공합니다.

#### S5-P18-03. CORS에 대한 흔한 오해

*주요 개념, 15분*

| 오해 | 사실 |
|---|---|
| CORS는 서버를 보호하는 보안 장치다. | CORS는 동일 출처 정책을 **완화**하는 장치입니다. 서버 보호는 인증과 인가가 담당합니다. |
| CORS 오류가 나면 요청이 서버에 가지 않았다. | 단순 요청은 서버에 도착해 처리됩니다. 사전 요청이 거절된 경우에만 본 요청이 전송되지 않습니다. |
| CORS를 설정하면 다른 사이트가 API를 호출하지 못한다. | `curl`, Postman, 서버 간 통신에는 CORS가 적용되지 않습니다. CORS는 브라우저만 지키는 규칙입니다. |
| 프론트엔드 코드로 CORS 오류를 고칠 수 있다. | 허락은 서버만 할 수 있습니다. 프론트엔드는 프록시로 출처를 같게 만드는 방법만 선택할 수 있습니다. |
| `localhost`와 `127.0.0.1`은 같으니 하나만 등록하면 된다. | 브라우저는 둘을 다른 출처로 봅니다. 실제로 접속하는 주소를 등록해야 합니다. |

이 표를 S15와 S16에서 다시 봅니다. Nginx 프록시 구성(S15)에서는 출처가 하나라 CORS가 필요 없고, S3 정적 웹사이트 구성(S16)에서는 화면과 API의 출처가 달라 운영 환경에서도 CORS 설정이 필요합니다.

#### S5-P18-04. 정리: 백엔드 CORS 설정과 프록시

*정리, 5분*

- 개발 환경은 백엔드의 `CORS_ORIGINS`에 실제로 접속하는 출처(`http://localhost:5173`)를 등록해 해결합니다.
- 프록시는 브라우저 입장에서 출처를 하나로 만들어 CORS가 필요 없게 합니다.
- CORS는 보안 장치가 아니라 동일 출처 정책을 완화하는 장치이며, 서버 보호는 인증과 인가가 맡습니다.

##### 확인 퀴즈

**Q1.** 개발 환경에서 CORS 오류를 해결하는 올바른 방법은 무엇인가요?

1. 프론트엔드 코드에 Access-Control-Allow-Origin 헤더를 붙인다.
2. 백엔드의 허용 출처에 프론트엔드 출처를 등록한다.
3. 브라우저의 보안 기능을 끈다.
4. allow_origins=["*"]로 모든 출처를 허용한다.

> 정답: 2번. 허락은 서버만 할 수 있으며, 허용 출처는 실제로 쓰는 주소만 명시합니다.

**Q2.** CORS에 대한 설명으로 옳은 것은 무엇인가요?

1. CORS 오류가 나면 요청은 항상 서버에 가지 않았다.
2. CORS는 브라우저만 지키는 규칙이며 서버 보호는 인증과 인가가 맡는다.
3. localhost와 127.0.0.1은 같은 출처다.
4. CORS를 설정하면 curl로도 API를 호출할 수 없다.

> 정답: 2번. curl과 서버 간 통신에는 CORS가 적용되지 않습니다.

---

## S6. Fetch API와 axios로 API 계층 만들기

*3일차 오후, 3시간*

> 섹션 목표: Fetch API와 axios로 요청을 보내고, 오류 처리가 통일된 API 계층을 만들어 화면에서 사용합니다.

### S6-P19. Fetch API와 오류 처리

> 학습 목표: Fetch API로 요청을 보내고, 상태 코드와 본문 형식, 요청 취소와 시간 제한을 올바르게 처리할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S6-P19-01 Fetch API 기본 | 주요 개념 | 10분 |
| S6-P19-02 fetch 오류 처리의 함정 | 주요 개념 | 10분 |
| S6-P19-03 본문 형식별 전송 | 주요 개념 | 10분 |
| S6-P19-04 요청 취소와 시간 제한 | 실습 | 15분 |
| S6-P19-05 정리: Fetch API와 오류 처리 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S6-P19-01. Fetch API 기본

*주요 개념, 10분*

Fetch API는 브라우저에 내장된 HTTP 요청 함수입니다. 별도 설치 없이 사용할 수 있으며 Promise를 돌려줍니다.

```js
const response = await fetch('http://127.0.0.1:8000/books?limit=3');
console.log(response.status);                    // 200
console.log(response.ok);                        // 상태 코드가 200~299이면 true
console.log(response.headers.get('content-type')); // application/json
const page = await response.json();              // 본문을 JSON으로 해석 (이것도 Promise)
```

`fetch`의 결과는 두 단계로 나뉩니다. 첫 번째 `await`는 상태 코드와 헤더가 도착했을 때 끝나고, 두 번째 `await response.json()`은 본문을 모두 받아 해석했을 때 끝납니다. 본문은 한 번만 읽을 수 있으므로 `json()`과 `text()`를 연달아 호출할 수 없습니다.

쿼리 문자열은 `URLSearchParams`로 만들면 한글과 특수 문자가 안전하게 인코딩됩니다.

```js
const params = new URLSearchParams({ q: '파이썬', sort: '-price', limit: '5' });
const response = await fetch(`http://127.0.0.1:8000/books?${params}`);
// 실제 주소: /books?q=%ED%8C%8C%EC%9D%B4%EC%8D%AC&sort=-price&limit=5
```

#### S6-P19-02. fetch 오류 처리의 함정

*주요 개념, 10분*

`fetch`를 처음 쓸 때 가장 많이 하는 실수는 "404나 500이 오면 `catch`로 간다"고 생각하는 것입니다. `fetch`는 **응답을 받기만 하면 상태 코드와 관계없이 성공으로 처리**합니다. `catch`로 가는 경우는 네트워크 연결 실패, CORS 차단, 요청 취소처럼 응답 자체를 받지 못했을 때뿐입니다.

```js
try {
  const response = await fetch('http://127.0.0.1:8000/books/999999');
  console.log('여기에 도달합니다. status =', response.status); // 404
} catch (error) {
  console.log('네트워크 오류나 CORS 차단일 때만 여기로 옵니다.');
}
```

따라서 `fetch`를 쓸 때는 `response.ok`를 직접 확인하는 함수를 만들어 두는 것이 좋습니다.

```js
async function requestJson(url, options = {}) {
  let response;
  try {
    response = await fetch(url, options);
  } catch (error) {
    if (error.name === 'AbortError') throw error; // 취소는 그대로 전달
    throw new Error('서버에 연결할 수 없습니다.');
  }
  if (response.status === 204) return null;        // 본문 없는 성공
  const body = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(body?.message ?? `요청 실패 (${response.status})`);
    error.status = response.status;
    error.code = body?.code;
    throw error;
  }
  return body;
}
```

이 함수가 하는 일은 세 가지입니다. 연결 실패와 HTTP 오류를 구분하고, 204처럼 본문이 없는 응답을 처리하며, 백엔드의 `{"code", "message"}` 오류 본문을 오류 객체에 담습니다. S6-P20-02에서는 같은 일을 axios 인터셉터로 한 곳에서 처리합니다.

#### S6-P19-03. 본문 형식별 전송

*주요 개념, 10분*

S2에서 정리한 세 가지 본문 형식을 `fetch`로 보내는 방법입니다. 핵심은 `Content-Type`과 본문의 모양을 맞추는 것입니다.

```js
const BASE = 'http://127.0.0.1:8000';

// 1) JSON: 직접 문자열로 바꾸고 Content-Type을 지정합니다.
await fetch(`${BASE}/auth/signup`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'reader@example.com', password: 'secret-1234' }),
});

// 2) 폼 형식: URLSearchParams를 본문으로 넘기면 Content-Type이 자동으로 지정됩니다.
const form = new URLSearchParams();
form.append('username', 'reader@example.com'); // 이 백엔드의 username 칸에는 이메일을 넣습니다.
form.append('password', 'secret-1234');
const tokenResponse = await fetch(`${BASE}/auth/token`, { method: 'POST', body: form });

// 3) 멀티파트: FormData를 넘깁니다. Content-Type을 직접 지정하면 안 됩니다.
const fileInput = document.querySelector('input[type=file]');
const data = new FormData();
data.append('file', fileInput.files[0]); // 백엔드가 기대하는 필드 이름 file
await fetch(`${BASE}/books/7/cover`, {
  method: 'POST',
  headers: { Authorization: 'Bearer <액세스 토큰>' },
  body: data,
});
```

멀티파트 요청에서 `Content-Type`을 직접 쓰지 않는 이유가 있습니다. 멀티파트 본문은 여러 부분을 구분하는 경계 문자열(boundary)이 필요하고, 그 값은 `Content-Type: multipart/form-data; boundary=...`에 함께 적혀야 합니다. `FormData`를 넘기면 브라우저가 경계 문자열을 만들어 헤더까지 정확히 채워 줍니다. 직접 `multipart/form-data`라고만 적으면 경계 정보가 빠져 백엔드가 본문을 해석하지 못하고 422를 돌려줍니다.

로그인을 JSON으로 보내는 실수도 흔합니다. 백엔드 과정 S5-P16에서 확인했듯이 `/auth/token`은 OAuth2 표준을 따르므로 폼 형식만 받습니다.

#### S6-P19-04. 요청 취소와 시간 제한

*실습, 15분*

사용자가 목록을 보다가 다른 화면으로 이동하면, 이전 화면에서 보낸 요청은 더 이상 필요 없습니다. 응답이 늦게 도착해 사라진 화면의 상태를 바꾸려 하거나, 검색 조건을 빠르게 바꿀 때 먼저 보낸 요청의 응답이 나중에 도착해 최신 결과를 덮어쓰는 문제가 생길 수 있습니다. `AbortController`로 이런 요청을 취소합니다.

```js
const controller = new AbortController();
fetch('http://127.0.0.1:8000/books', { signal: controller.signal })
  .then((r) => r.json())
  .catch((error) => {
    if (error.name === 'AbortError') console.log('취소되었습니다.');
  });
controller.abort(); // 요청 취소
```

React에서는 `useEffect`의 정리 함수에서 `abort()`를 호출하는 것이 기본 패턴입니다. S3에서 본 `StrictMode`의 "실행, 정리, 다시 실행"도 이 패턴으로 자연스럽게 처리됩니다. 첫 요청은 정리 단계에서 취소되고 두 번째 요청만 화면에 반영됩니다.

```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal }).then(/* ... */);
  return () => controller.abort();
}, [url]);
```

응답이 너무 오래 걸릴 때 포기하는 시간 제한은 `AbortSignal.timeout(밀리초)`로 간단히 만들 수 있습니다.

```js
await fetch('http://127.0.0.1:8000/health', { signal: AbortSignal.timeout(3000) });
```

Console에서 직접 확인합니다. 앞 페이지의 `requestJson` 함수를 먼저 붙여 넣은 뒤 실행합니다.

```js
// 1) 404는 catch로 가지 않고 requestJson이 만든 오류로 바뀝니다.
await requestJson('http://127.0.0.1:8000/books/999999').catch((e) => console.log(e.status, e.code, e.message));

// 2) 시간 제한: 1ms 안에 끝날 수 없으므로 취소됩니다.
await requestJson('http://127.0.0.1:8000/books', { signal: AbortSignal.timeout(1) }).catch((e) => console.log(e.name));

// 3) 직접 취소: 요청을 보내자마자 취소합니다. Network 탭에 (canceled)로 표시됩니다.
const controller = new AbortController();
const p = requestJson('http://127.0.0.1:8000/books', { signal: controller.signal });
controller.abort();
await p.catch((e) => console.log(e.name));
```

2번의 결과는 `TimeoutError`, 3번은 `AbortError`입니다. 화면 코드에서는 취소된 요청을 오류로 보여 주지 않도록 이 이름을 구분합니다.

#### S6-P19-05. 정리: Fetch API와 오류 처리

*정리, 5분*

- `fetch`는 응답을 받으면 상태 코드와 관계없이 성공으로 처리하므로 `response.ok`를 직접 확인합니다.
- 본문 형식은 JSON(`JSON.stringify`), 폼(`URLSearchParams`), 멀티파트(`FormData`)로 보내며, 멀티파트는 `Content-Type`을 직접 지정하지 않습니다.
- `AbortController`로 필요 없어진 요청을 취소하고 `AbortSignal.timeout`으로 시간 제한을 둡니다.

##### 확인 퀴즈

**Q1.** `fetch`로 요청했는데 서버가 404를 돌려주었습니다. 어떻게 되나요?

1. Promise가 정상 처리되고 `response.ok`가 false다.
2. 브라우저가 자동으로 다시 요청한다.
3. 응답 본문을 읽을 수 없다.
4. Promise가 거부되어 catch로 간다.

> 정답: 1번. fetch는 응답을 받으면 상태 코드와 관계없이 성공으로 처리합니다.

**Q2.** 표지 업로드에서 `Content-Type`을 직접 지정하지 않는 이유는 무엇인가요?

1. 보안 헤더라서
2. fetch가 지원하지 않아서
3. 경계 문자열(boundary)을 브라우저가 만들어 넣어야 해서
4. 백엔드가 헤더를 무시해서

> 정답: 3번. FormData를 넘기면 boundary가 포함된 Content-Type이 자동으로 만들어집니다.

### S6-P20. axios와 환경 변수

> 학습 목표: axios 인스턴스와 인터셉터로 오류 모양을 통일하고, Vite 환경 변수로 API 주소를 분리할 수 있습니다.
>
> 완성 코드 브랜치: `p20-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S6-P20-01 axios | 주요 개념 | 10분 |
| S6-P20-02 axios 인스턴스와 인터셉터 | 주요 개념 | 10분 |
| S6-P20-03 환경 변수와 첫 axios 인스턴스 | 실습 | 25분 |
| S6-P20-04 정리: axios와 환경 변수 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S6-P20-01. axios

*주요 개념, 10분*

axios는 브라우저와 Node.js에서 쓰는 HTTP 클라이언트 라이브러리입니다. Fetch API로도 모든 기능을 구현할 수 있지만, 여러 화면에서 반복되는 공통 처리를 한 곳에 모으기에는 axios가 편리합니다.

| 항목 | Fetch API | axios |
|---|---|---|
| 설치 | 필요 없음 | `npm install axios` |
| JSON 변환 | `JSON.stringify`, `response.json()` 직접 호출 | 자동 |
| 4xx, 5xx 처리 | 성공으로 취급, `response.ok` 직접 확인 | 오류로 던짐 |
| 기본 주소, 기본 헤더 | 직접 구현 | 인스턴스 설정(`baseURL`, `headers`) |
| 공통 전처리, 후처리 | 직접 감싸는 함수 작성 | 인터셉터 |
| 시간 제한 | `AbortSignal.timeout` | `timeout` 옵션 |
| 취소 | `AbortController` | `AbortController` (`signal` 옵션) |
| 본문 형식 | 직접 지정 | 객체는 JSON, `URLSearchParams`는 폼, `FormData`는 멀티파트로 자동 지정 |

이 과정은 두 도구를 모두 사용합니다. 인증 토큰, 토큰 재발급, 오류 통일, 요청 기록 같은 공통 처리가 필요한 API는 axios 인스턴스로 호출하고, 공통 처리가 필요 없고 503 응답 본문까지 그대로 읽어야 하는 헬스 체크는 Fetch API로 호출합니다.

```bash
npm install axios
```

#### S6-P20-02. axios 인스턴스와 인터셉터

*주요 개념, 10분*

인스턴스는 기본 설정을 미리 정해 둔 axios 복사본입니다. 인터셉터는 모든 요청이 나가기 직전과 모든 응답이 도착한 직후에 끼어들어 실행되는 함수입니다.

```js
import axios from 'axios';

const api = axios.create({ baseURL: 'http://127.0.0.1:8000', timeout: 10000 });

api.interceptors.request.use((config) => {
  // 모든 요청이 나가기 전에 실행됩니다. 예: 인증 헤더 붙이기 (S8)
  return config;
});

api.interceptors.response.use(
  (response) => response,  // 2xx 응답
  (error) => {             // 그 밖의 응답, 네트워크 오류, 취소
    return Promise.reject(error);
  },
);

const { data } = await api.get('/books', { params: { q: '파이썬', limit: 5 } });
```

axios 응답 객체의 본문은 `data` 속성에 들어 있습니다. 쿼리 문자열은 `params` 옵션에 객체로 넘기면 자동으로 인코딩됩니다. 오류가 나면 `error.response`에 상태 코드(`status`), 본문(`data`), 헤더(`headers`)가 있고, 응답을 받지 못했으면 `error.response`가 없습니다. 요청을 취소하면 `name`이 `CanceledError`인 오류가 발생하며 `axios.isCancel(error)`로 확인할 수 있습니다.

#### S6-P20-03. 환경 변수와 첫 axios 인스턴스

*실습, 25분*

API 주소를 코드에 직접 적으면 개발 환경과 운영 환경을 바꿀 때마다 코드를 고쳐야 합니다. Vite는 프로젝트 루트의 `.env` 파일을 읽어 `import.meta.env`로 제공합니다.

| 파일 | 적용 시점 |
|---|---|
| `.env` | 항상 |
| `.env.development` | `npm run dev` |
| `.env.production` | `npm run build` |
| `.env.local`, `.env.[모드].local` | 위와 같으며 Git에 올리지 않는 개인 설정용 |

프로젝트 루트에 `.env.development`를 만듭니다.

`.env.development`

```dotenv
# 개발 서버(npm run dev)에서 사용하는 값입니다.
# VITE_ 로 시작하는 값은 빌드 결과물에 그대로 들어가므로 비밀정보를 넣지 않습니다.
VITE_API_BASE_URL=http://127.0.0.1:8000
```

코드에서는 `import.meta.env.VITE_API_BASE_URL`로 읽습니다. 이름이 `VITE_`로 시작하는 값만 코드에 노출됩니다. 이 값들은 빌드할 때 JavaScript 파일에 문자열로 새겨지므로, 사용자가 개발자 도구에서 누구나 볼 수 있습니다. 비밀번호나 API 키 같은 비밀정보를 프론트엔드 환경 변수에 넣으면 안 되는 이유이며, S12에서 다시 다룹니다. `.env` 파일을 고친 뒤에는 개발 서버를 다시 시작해야 반영됩니다.

이제 백엔드의 오류 응답을 하나의 모양으로 바꾸는 `src/api/errors.js`와 axios 인스턴스 `src/api/client.js`를 만듭니다.

백엔드의 오류 응답은 세 가지 모양으로 올 수 있습니다. 백엔드가 직접 만든 `AppError`(`{"code", "message"}`), FastAPI가 자동으로 만드는 검증 오류(`{"detail": [...]}`), 그리고 FastAPI의 `HTTPException` 기본 형식(`{"detail": "..."}`)입니다. 화면 코드가 이 차이를 신경 쓰지 않도록 모두 `ApiError` 하나로 바꿉니다. 422 검증 오류는 `loc`의 마지막 값(입력 칸 이름)별로 메시지를 모아 `fields`에 담아 두므로, S9의 폼이 칸 옆에 오류를 표시할 수 있습니다.

`src/api/errors.js`

```js
// 백엔드 오류 응답을 화면에서 쓰기 쉬운 하나의 모양으로 바꿉니다.
// 백엔드 AppError 형식: {"code": "...", "message": "..."}
// FastAPI 기본 검증 오류(422) 형식: {"detail": [{"loc": [...], "msg": "...", "type": "..."}]}
export class ApiError extends Error {
  constructor({ status, code, message, fields = {}, retryAfter = null }) {
    super(message);
    this.name = 'ApiError';
    this.status = status; // HTTP 상태 코드, 네트워크 오류면 0
    this.code = code; // 백엔드 오류 코드 (예: DUPLICATE_ISBN)
    this.fields = fields; // 입력 칸별 오류 메시지 { title: '...' }
    this.retryAfter = retryAfter; // 429 응답의 Retry-After(초)
  }
}

const STATUS_MESSAGES = {
  400: '요청 형식이 올바르지 않습니다.',
  401: '로그인이 필요합니다.',
  403: '이 작업을 할 권한이 없습니다.',
  404: '요청한 대상을 찾을 수 없습니다.',
  409: '현재 상태에서는 처리할 수 없는 요청입니다.',
  413: '파일이 너무 큽니다.',
  415: '지원하지 않는 파일 형식입니다.',
  422: '입력값을 확인해 주세요.',
  429: '요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.',
  500: '서버에서 오류가 발생했습니다.',
  503: '서비스를 일시적으로 사용할 수 없습니다.',
};

export function toApiError(status, body, headers = {}) {
  const retryAfterRaw = headers['retry-after'];
  const retryAfter = retryAfterRaw ? Number(retryAfterRaw) : null;

  // 1) 백엔드가 직접 만든 오류
  if (body && typeof body.code === 'string') {
    return new ApiError({ status, code: body.code, message: body.message, retryAfter });
  }

  // 2) FastAPI 검증 오류: 칸 이름별로 메시지를 모읍니다.
  if (body && Array.isArray(body.detail)) {
    const fields = {};
    for (const item of body.detail) {
      const name = item.loc?.[item.loc.length - 1];
      if (name !== undefined && !fields[name]) fields[name] = item.msg;
    }
    return new ApiError({ status, code: 'VALIDATION_ERROR', message: STATUS_MESSAGES[422], fields });
  }

  // 3) detail이 문자열인 경우 (FastAPI HTTPException 기본 형식)
  if (body && typeof body.detail === 'string') {
    return new ApiError({ status, code: `HTTP_${status}`, message: body.detail, retryAfter });
  }

  // 4) 그 밖의 경우: 상태 코드로 기본 메시지를 고릅니다.
  return new ApiError({
    status,
    code: `HTTP_${status}`,
    message: STATUS_MESSAGES[status] ?? '알 수 없는 오류가 발생했습니다.',
    retryAfter,
  });
}

export const NETWORK_ERROR_MESSAGE =
  '서버에 연결할 수 없습니다. 백엔드 실행 여부와 CORS 설정을 확인해 주세요.';
```

##### axios 인스턴스: `src/api/client.js`

이번 장에서는 기본 주소, 시간 제한, 오류 통일만 담은 첫 버전을 만듭니다. S8에서 인증 처리를, S13에서 요청 기록을 이 파일에 추가합니다.

`src/api/client.js`

```js
import axios from 'axios';
import { toApiError, ApiError, NETWORK_ERROR_MESSAGE } from './errors';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// 응답 인터셉터: 모든 실패를 ApiError 하나로 통일합니다.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 화면을 떠나 취소한 요청은 오류가 아니므로 그대로 넘깁니다.
    if (axios.isCancel(error)) throw error;

    const { response } = error;
    if (!response) {
      throw new ApiError({ status: 0, code: 'NETWORK_ERROR', message: NETWORK_ERROR_MESSAGE });
    }
    throw toApiError(response.status, response.data, response.headers);
  },
);

// 백엔드가 돌려준 /covers/... 같은 경로를 화면에서 열 수 있는 주소로 바꿉니다.
export function toAssetUrl(path) {
  if (!path) return null;
  return `${API_BASE_URL}${path}`;
}
```

`toAssetUrl`은 백엔드가 돌려준 표지 경로(`/covers/...`)를 화면의 `<img>`가 열 수 있는 전체 주소로 바꿉니다. 개발 환경에서는 `http://127.0.0.1:8000/covers/...`, S15의 운영 환경에서는 `/api/covers/...`가 됩니다. `<img>`로 다른 출처의 이미지를 표시하는 것은 S5에서 본 것처럼 동일 출처 정책의 제한을 받지 않습니다.

인스턴스가 제대로 동작하는지 확인하는 연습용 컴포넌트를 만들고, `App`에서 `StaticBookPage` 위에 보여 줍니다.

`src/practice/ApiCheck.jsx`

```jsx
import { useEffect, useState } from 'react';
import { api } from '../api/client';

// S6-P20 실습: axios 인스턴스로 요청하고 오류가 ApiError로 통일되는지 확인합니다.
export default function ApiCheck() {
  const [log, setLog] = useState([]);
  const write = (line) => setLog((prev) => [...prev, line]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const { data } = await api.get('/books', { params: { sort: '-price', limit: 3 }, signal: controller.signal });
      write(`가장 비싼 3권: ${data.items.map((b) => b.title).join(', ')} (전체 ${data.total}권)`);
      try {
        await api.get('/books/999999', { signal: controller.signal });
      } catch (err) {
        write(`없는 도서 조회: status=${err.status}, code=${err.code}, message=${err.message}`);
      }
    })().catch((err) => {
      if (err.name !== 'CanceledError') write(`실패: ${err.message}`);
    });
    return () => controller.abort();
  }, []);

  return <pre>{log.join('\n')}</pre>;
}
```

`src/App.jsx`

```jsx
import ApiCheck from './practice/ApiCheck';
import StaticBookPage from './practice/StaticBookPage';

export default function App() {
  return (
    <>
      <ApiCheck />
      <StaticBookPage />
    </>
  );
}
```

확인할 내용은 다음과 같습니다.

1. `.env.development`를 만든 뒤 개발 서버를 다시 시작하고, 화면에 가장 비싼 3권과 없는 도서 조회 결과(404와 오류 코드)가 나오는지 확인합니다.
2. Console에서 `import.meta.env`를 볼 수는 없지만, 소스 코드 안에서는 `console.log(import.meta.env.VITE_API_BASE_URL)`로 값을 확인할 수 있습니다. `ApiCheck`에 잠시 넣어 확인한 뒤 지웁니다.
3. 백엔드를 `docker compose stop api`로 멈추고 새로고침해 "서버에 연결할 수 없습니다." 메시지가 나오는지 확인합니다. 확인 후 `docker compose start api`로 다시 실행합니다.

> 완성 코드: 막히면 예제 저장소의 `p20-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S6-P20-04. 정리: axios와 환경 변수

*정리, 5분*

- axios는 JSON 변환, 4xx와 5xx 오류 처리, 기본 주소와 시간 제한, 인터셉터를 제공합니다.
- 응답 인터셉터에서 모든 실패를 `ApiError` 하나로 바꿔 화면 코드가 오류 형식의 차이를 몰라도 되게 합니다.
- `VITE_`로 시작하는 환경 변수는 빌드 결과물에 공개되므로 비밀정보를 넣지 않고, 바꾼 뒤에는 개발 서버를 다시 시작합니다.

##### 확인 퀴즈

**Q1.** 응답 인터셉터에서 취소된 요청을 `ApiError`로 바꾸지 않고 그대로 넘기는 이유는 무엇인가요?

1. 취소된 요청은 성공이므로
2. 화면을 떠나 취소한 것은 오류가 아니므로 오류 메시지를 보여 주면 안 되어서
3. axios가 취소를 지원하지 않아서
4. 취소된 요청에는 상태 코드 500이 있어서

> 정답: 2번. 취소는 의도한 동작입니다. axios.isCancel로 구분해 오류로 표시하지 않습니다.

**Q2.** `VITE_` 환경 변수에 비밀 키를 넣으면 안 되는 이유는 무엇인가요?

1. 백엔드로 전송되지 않아서
2. 개발 서버에서만 동작해서
3. 빌드 결과물에 문자열로 들어가 누구나 볼 수 있어서
4. 값의 길이 제한이 있어서

> 정답: 3번. VITE_ 값은 빌드할 때 JavaScript에 새겨지므로 공개된 값으로 취급해야 합니다.

### S6-P21. API 계층 설계와 구현

> 학습 목표: 화면과 백엔드 사이에 API 함수 계층을 두고, 화면에서 API 함수를 쓰는 기본 패턴을 적용할 수 있습니다.
>
> 완성 코드 브랜치: `p21-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S6-P21-01 API 계층 설계 | 주요 개념 | 10분 |
| S6-P21-02 도서, 저자, 헬스 체크 API 함수 | 실습 | 20분 |
| S6-P21-03 컴포넌트에서 API 함수를 쓰는 기본 패턴 | 주요 개념 | 15분 |
| S6-P21-04 정리: API 계층 설계와 구현 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S6-P21-01. API 계층 설계

*주요 개념, 10분*

화면 컴포넌트마다 `axios.get('/books', ...)`를 직접 쓰면 경로나 응답 형식이 바뀔 때 여러 파일을 고쳐야 합니다. 그래서 백엔드 호출을 `src/api` 폴더에 모으고, 화면은 `listBooks()`처럼 의미 있는 이름의 함수만 사용하게 합니다. 백엔드 과정 S6-P19에서 라우터, 서비스, 저장소를 나눈 것과 같은 이유입니다.

```text
화면 컴포넌트 (pages, dashboard)
      │  listBooks(), createBook() 같은 함수만 호출
      ▼
API 함수 (api/books.js, api/auth.js, ...)
      │  경로, 메서드, 본문 형식을 알고 있음
      ▼
axios 인스턴스 (api/client.js)
      │  기본 주소, 시간 제한, 오류 통일, (S8) 토큰, (S13) 요청 기록
      ▼
백엔드 API
```

#### S6-P21-02. 도서, 저자, 헬스 체크 API 함수

*실습, 20분*

S1-P3-03의 API 표를 그대로 함수로 옮깁니다. 목록 조회 함수는 `signal`을 받아 화면이 요청을 취소할 수 있게 합니다. 등록, 수정, 삭제, 표지 업로드 함수는 S9에서 사용하지만 도서 API를 한 파일에 모아 두기 위해 지금 함께 작성합니다.

`src/api/books.js`

```js
import { api } from './client';

// GET /books?q=&author=&sort=&skip=&limit=  ->  { items, total, skip, limit }
export async function listBooks({ q, author, sort = 'id', skip = 0, limit = 10 } = {}, signal) {
  const params = { sort, skip, limit };
  if (q) params.q = q;
  if (author) params.author = author;
  const { data } = await api.get('/books', { params, signal });
  return data;
}

export async function getBook(bookId, signal) {
  const { data } = await api.get(`/books/${bookId}`, { signal });
  return data;
}

// 본문: { title, author_id, price, isbn }
export async function createBook(payload) {
  const { data } = await api.post('/books', payload);
  return data;
}

// 본문: 바꿀 필드만 보냅니다 (PATCH)
export async function updateBook(bookId, changes) {
  const { data } = await api.patch(`/books/${bookId}`, changes);
  return data;
}

export async function deleteBook(bookId) {
  await api.delete(`/books/${bookId}`); // 성공 시 204, 본문 없음
}

// multipart/form-data, 필드 이름 file
export async function uploadCover(bookId, file) {
  const form = new FormData();
  form.append('file', file);
  const { data } = await api.post(`/books/${bookId}/cover`, form);
  return data;
}
```

`src/api/authors.js`

```js
import { api } from './client';

export async function listAuthors({ skip = 0, limit = 100 } = {}, signal) {
  const { data } = await api.get('/authors', { params: { skip, limit }, signal });
  return data;
}

export async function createAuthor(name) {
  const { data } = await api.post('/authors', { name });
  return data;
}
```

`uploadCover`는 `FormData`를 그대로 넘기며 `Content-Type`을 지정하지 않습니다. S6-P19-03에서 설명한 이유 때문입니다. axios도 `FormData`를 받으면 경계 문자열이 포함된 헤더를 자동으로 만듭니다.

##### 헬스 체크: `src/api/health.js`

헬스 체크는 Fetch API로 작성합니다. 데이터베이스 장애 시 백엔드는 503과 함께 `{"status": "error", "database": "unreachable"}`를 보내는데, 관제 화면에는 이 본문 자체가 중요한 정보입니다. S6-P19-02에서 배운 대로 `fetch`는 503도 정상 응답으로 돌려주므로 본문을 그대로 읽을 수 있습니다. 응답을 받지 못한 경우(서버 중단, 네트워크 단절)는 `catch`에서 `unreachable`로 기록합니다. 응답 시간도 함께 재어 S13의 대시보드에서 사용합니다.

`src/api/health.js`

```js
import { API_BASE_URL } from './client';

// 헬스 체크는 Fetch API로 직접 호출합니다.
// 503도 의미 있는 응답이므로 상태 코드와 본문을 함께 돌려줍니다.
export async function checkHealth(signal) {
  const startedAt = performance.now();
  try {
    const response = await fetch(`${API_BASE_URL}/health`, { signal, cache: 'no-store' });
    const body = await response.json().catch(() => null);
    return {
      reachable: true,
      httpStatus: response.status,
      status: body?.status ?? 'unknown',
      database: body?.database ?? 'unknown',
      durationMs: Math.round(performance.now() - startedAt),
      checkedAt: Date.now(),
    };
  } catch (error) {
    if (error.name === 'AbortError') throw error;
    return {
      reachable: false,
      httpStatus: 0,
      status: 'unreachable',
      database: 'unknown',
      durationMs: null,
      checkedAt: Date.now(),
    };
  }
}
```

`ApiCheck`를 API 함수로 다시 작성해 확인합니다.

`src/practice/ApiCheck.jsx`

```jsx
import { useEffect, useState } from 'react';
import { getBook, listBooks } from '../api/books';
import { checkHealth } from '../api/health';

// S6-P21 실습: API 함수로 백엔드를 호출해 결과를 확인합니다.
export default function ApiCheck() {
  const [log, setLog] = useState([]);
  const write = (line) => setLog((prev) => [...prev, line]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const health = await checkHealth(controller.signal);
      write(`헬스 체크: ${health.status} / DB ${health.database} / ${health.durationMs}ms`);

      const page = await listBooks({ sort: '-price', limit: 3 }, controller.signal);
      write(`가장 비싼 3권: ${page.items.map((b) => b.title).join(', ')} (전체 ${page.total}권)`);

      try {
        await getBook(999999, controller.signal);
      } catch (err) {
        write(`없는 도서 조회: status=${err.status}, code=${err.code}, message=${err.message}`);
      }
    })().catch((err) => {
      if (err.name !== 'CanceledError' && err.name !== 'AbortError') write(`실패: ${err.message}`);
    });
    return () => controller.abort();
  }, []);

  return <pre>{log.join('\n')}</pre>;
}
```

확인할 내용은 다음과 같습니다.

1. 헬스 체크, 가장 비싼 3권, 없는 도서 조회 결과 세 줄이 출력됩니다.
2. Network 탭에서 `StrictMode` 때문에 첫 번째 요청들이 `(canceled)`로 표시되는 것을 확인합니다. 정리 함수의 `abort()`가 동작한 결과입니다.
3. `listBooks({ sort: 'title' })`처럼 백엔드가 허용하지 않는 값을 넣으면 422 응답이 `VALIDATION_ERROR`로 바뀌고 `fields.sort`에 메시지가 담기는지 확인합니다.

> 완성 코드: 막히면 예제 저장소의 `p21-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S6-P21-03. 컴포넌트에서 API 함수를 쓰는 기본 패턴

*주요 개념, 15분*

API 함수를 화면에서 사용할 때는 다음 모양을 기본으로 합니다. S7 이후의 모든 조회 화면이 이 패턴을 따릅니다.

```jsx
useEffect(() => {
  const controller = new AbortController();
  setLoading(true);
  setError(null);
  listBooks({ q, sort, skip, limit: 10 }, controller.signal)
    .then(setPage)
    .catch((err) => {
      if (err.name !== 'CanceledError') setError(err); // 취소는 오류로 표시하지 않습니다.
    })
    .finally(() => {
      if (!controller.signal.aborted) setLoading(false);
    });
  return () => controller.abort();
}, [q, sort, skip]);
```

로딩, 오류, 결과 세 가지 상태를 관리하고, 조건이 바뀌거나 화면을 떠나면 이전 요청을 취소합니다. 규모가 커지면 이 반복 코드를 TanStack Query 같은 서버 상태 관리 라이브러리로 대체할 수 있습니다. 이 과정에서는 원리를 이해하기 위해 직접 작성합니다.

#### S6-P21-04. 정리: API 계층 설계와 구현

*정리, 5분*

- 화면은 `listBooks()` 같은 의미 있는 함수만 호출하고, 경로와 본문 형식은 API 함수가, 공통 처리는 axios 인스턴스가 맡습니다.
- 헬스 체크처럼 503 응답 본문 자체가 정보인 API는 Fetch API로 직접 호출합니다.
- 화면에서는 로딩, 오류, 결과 상태를 관리하고, 조건이 바뀌거나 화면을 떠나면 이전 요청을 취소합니다.

##### 확인 퀴즈

**Q1.** API 계층을 따로 두는 가장 큰 이유는 무엇인가요?

1. 요청 속도가 빨라져서
2. 경로나 응답 형식이 바뀌어도 화면 코드를 고치지 않고 한곳만 고치면 되어서
3. CORS 오류가 사라져서
4. 테스트가 필요 없어져서

> 정답: 2번. 화면과 백엔드의 세부 사항을 분리하면 변경의 영향 범위가 줄어듭니다.

**Q2.** 헬스 체크를 axios 인스턴스가 아니라 Fetch API로 호출한 이유는 무엇인가요?

1. Fetch API가 항상 더 빨라서
2. 인증 토큰이 필요해서
3. axios가 GET을 지원하지 않아서
4. 503 응답의 본문(DB 상태)을 오류로 바꾸지 않고 그대로 읽어야 해서

> 정답: 4번. fetch는 503도 정상 응답으로 돌려주므로 본문을 그대로 읽어 관제 화면에 쓸 수 있습니다.

---

## S7. 라우팅과 조회 화면

*4일차 오전, 4시간*

> 섹션 목표: React Router로 화면을 나누고, URL 조건과 페이지네이션을 갖춘 목록과 상세 화면을 백엔드 데이터로 만듭니다.

### S7-P22. React Router와 앱 뼈대

> 학습 목표: React Router로 주소와 화면을 연결하고, 공통 레이아웃과 404 화면을 갖춘 앱의 뼈대를 만들 수 있습니다.
>
> 완성 코드 브랜치: `p22-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S7-P22-01 클라이언트 측 라우팅 | 주요 개념 | 10분 |
| S7-P22-02 라우터 구성 요소 | 주요 개념 | 10분 |
| S7-P22-03 앱 뼈대 만들기 | 실습 | 25분 |
| S7-P22-04 정리: React Router와 앱 뼈대 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S7-P22-01. 클라이언트 측 라우팅

*주요 개념, 10분*

SPA는 페이지가 하나뿐이지만, 사용자는 화면마다 고유한 주소를 기대합니다. 상세 화면 주소를 동료에게 보내거나, 뒤로 가기 버튼으로 이전 화면에 돌아가거나, 새로고침해도 같은 화면이 나와야 합니다. 클라이언트 측 라우팅은 브라우저의 History API로 서버 요청 없이 주소만 바꾸고, 주소에 맞는 컴포넌트를 그려서 이를 해결합니다.

React Router는 React의 표준 라우팅 라이브러리입니다. 현재 8 버전이며 선언형(Declarative), 데이터(Data), 프레임워크(Framework) 세 가지 모드를 제공합니다. 이 과정은 가장 단순한 선언형 모드를 사용합니다. JSX로 `<Routes>`와 `<Route>`를 적고, 데이터 불러오기는 S6에서 만든 API 함수로 직접 처리하는 방식입니다. 이전 버전에서 쓰던 `react-router-dom` 패키지 대신 `react-router` 패키지 하나만 설치합니다.

```bash
npm install react-router
```

#### S7-P22-02. 라우터 구성 요소

*주요 개념, 10분*

| 구성 요소 | 역할 |
|---|---|
| `<BrowserRouter>` | 앱 전체를 감싸 주소 변화를 React에 연결합니다. |
| `<Routes>`, `<Route path element>` | 주소 패턴과 그릴 컴포넌트를 짝지읍니다. |
| 레이아웃 라우트와 `<Outlet>` | `path` 없는 부모 `<Route>`가 공통 틀을 그리고, `<Outlet>` 자리에 자식 화면을 넣습니다. |
| `index` 라우트 | 부모 경로와 정확히 같을 때(`/`) 보여 줄 화면입니다. |
| `path="*"` | 어떤 패턴에도 맞지 않는 주소입니다. 404 화면에 씁니다. |
| `<Link to>`, `<NavLink to>` | 새로고침 없이 이동하는 링크입니다. `NavLink`는 현재 주소와 일치하면 `active` 클래스가 붙습니다. |
| `useParams()` | 주소 패턴의 변수(`/books/:bookId`) 값을 읽습니다. 값은 항상 문자열입니다. |
| `useSearchParams()` | 쿼리 문자열(`?q=...&sort=...`)을 읽고 바꿉니다. |
| `useNavigate()` | 코드에서 다른 주소로 이동합니다. 등록 후 상세 화면으로 이동할 때 씁니다. |
| `<Navigate to>` | 그려지는 순간 다른 주소로 이동합니다. S8의 로그인 보호에 씁니다. |

일반 `<a href>`를 쓰면 브라우저가 서버에 새 페이지를 요청하므로 앱 전체가 다시 시작되고 메모리의 상태(S8의 액세스 토큰 포함)가 모두 사라집니다. 앱 안의 이동에는 반드시 `<Link>`를 씁니다.

#### S7-P22-03. 앱 뼈대 만들기

*실습, 25분*

이제 연습용 화면을 정리하고 진짜 앱의 뼈대를 만듭니다. `src/practice` 폴더를 지웁니다. 여기서 익힌 컴포넌트 나누기와 상태 관리 방식은 그대로 진짜 화면에 옮겨 갑니다.

**시작점: `src/main.jsx`**

`<App />`을 `<BrowserRouter>`로 감쌉니다.

`src/main.jsx`

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

**공통 레이아웃: `src/components/Layout.jsx`**

모든 화면의 위쪽에 메뉴를 두고, 가운데 `<Outlet />` 자리에 각 화면을 그립니다. S8에서 로그인 정보와 메뉴를 추가합니다.

`src/components/Layout.jsx`

```jsx
import { NavLink, Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="app">
      <header className="topbar">
        <strong>도서 관리</strong>
        <nav>
          <NavLink to="/" end>도서 목록</NavLink>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
```

**첫 목록 화면: `src/pages/BookListPage.jsx`**

S6-P21-03의 기본 패턴대로 첫 페이지 10권을 불러와 보여 주는 첫 버전입니다. 검색과 페이지 이동은 다음 파트에서 추가합니다.

`src/pages/BookListPage.jsx`

```jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { listBooks } from '../api/books';
import ErrorMessage from '../components/ErrorMessage';

// P22 첫 버전: 첫 페이지 10권만 보여 줍니다. 검색과 페이지 이동은 P23에서 추가합니다.
export default function BookListPage() {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    listBooks({ limit: 10 }, controller.signal)
      .then(setPage)
      .catch((err) => {
        if (err.name !== 'CanceledError') setError(err);
      });
    return () => controller.abort();
  }, []);

  if (error) return <ErrorMessage error={error} />;
  if (!page) return <p className="muted">불러오는 중입니다.</p>;

  return (
    <section>
      <h1>도서 목록</h1>
      <table className="table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>저자</th>
            <th className="num">가격</th>
          </tr>
        </thead>
        <tbody>
          {page.items.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
              </td>
              <td>{book.author?.name}</td>
              <td className="num">{book.price.toLocaleString('ko-KR')}원</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="muted">전체 {page.total}권</p>
    </section>
  );
}
```

**라우트 정의: `src/App.jsx`**

`src/App.jsx`

```jsx
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import BookListPage from './pages/BookListPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
```

**공통 컴포넌트와 404 화면**

오류 표시는 여러 화면에서 반복되므로 컴포넌트로 만듭니다. `role="alert"`는 화면 낭독기가 오류를 즉시 읽도록 하는 접근성 속성입니다. 오류 코드는 응답을 받은 경우(`status > 0`)에만 괄호로 덧붙여, 운영자가 백엔드 로그와 대조할 수 있게 합니다.

`src/components/ErrorMessage.jsx`

```jsx
export default function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <div className="error" role="alert">
      {error.message}
      {error.code && error.status > 0 && <span className="muted"> ({error.code})</span>}
    </div>
  );
}
```

`src/pages/NotFoundPage.jsx`

```jsx
import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <section>
      <h1>페이지를 찾을 수 없습니다</h1>
      <Link to="/">도서 목록으로 돌아가기</Link>
    </section>
  );
}
```

**스타일: `src/index.css`**

이 과정의 화면은 관제 환경을 고려해 어두운 바탕을 사용합니다. 색은 `--status-good`처럼 역할 이름의 CSS 변수로 정의하고, 코드에서는 변수 이름만 씁니다. 색의 선택 기준은 S13에서 설명합니다. 대시보드용 스타일까지 포함한 전체 파일을 지금 작성해 둡니다.

`src/index.css`

```css
/* 관제 화면에 맞춘 어두운 바탕. 색은 역할 이름(변수)으로만 씁니다. */
:root {
  color-scheme: dark;
  --surface-0: #121211;
  --surface-1: #1a1a19;
  --surface-2: #242422;
  --border: #33332f;
  --grid: #2c2c29;
  --hover: rgba(255, 255, 255, 0.06);
  --text-primary: #f0efec;
  --text-secondary: #c3c2b7;
  --text-muted: #8f8e86;
  --series-1: #3987e5;
  --status-good: #0ca30c;
  --status-warning: #fab219;
  --status-serious: #ec835a;
  --status-critical: #d03b3b;
  font: 15px/1.5 system-ui, 'Segoe UI', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
  background: var(--surface-0);
  color: var(--text-primary);
}
* { box-sizing: border-box; }
body { margin: 0; }
a { color: var(--series-1); }
h1 { font-size: 1.5rem; margin: 0 0 1rem; }
h2 { font-size: 1.05rem; margin: 0 0 0.75rem; }
h3 { font-size: 0.85rem; margin: 0.75rem 0 0.5rem; color: var(--text-secondary); font-weight: 600; }
button, .button {
  display: inline-block; padding: 0.45rem 0.9rem; border-radius: 6px; cursor: pointer;
  border: 1px solid var(--border); background: var(--surface-2); color: var(--text-primary);
  font: inherit; text-decoration: none;
}
button:disabled { opacity: 0.5; cursor: not-allowed; }
button.danger { border-color: var(--status-critical); color: #f3b3b3; }
input, select {
  padding: 0.45rem 0.6rem; border-radius: 6px; border: 1px solid var(--border);
  background: var(--surface-1); color: var(--text-primary); font: inherit;
}
.topbar {
  display: flex; gap: 1.5rem; align-items: center; padding: 0.75rem 1.5rem;
  background: var(--surface-1); border-bottom: 1px solid var(--border);
}
.topbar nav { display: flex; gap: 1rem; flex: 1; }
.topbar nav a, .account a { color: var(--text-secondary); text-decoration: none; }
.topbar nav a.active { color: var(--text-primary); font-weight: 600; }
.account { display: flex; gap: 0.75rem; align-items: center; color: var(--text-secondary); }
.content { padding: 1.5rem; max-width: 1280px; margin: 0 auto; }
.narrow { max-width: 420px; }
.muted { color: var(--text-muted); }
.error { color: #f3a0a0; }
.notice { color: #9fe09f; }
.toolbar { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
.table { width: 100%; border-collapse: collapse; }
.table th, .table td { padding: 0.5rem 0.6rem; border-bottom: 1px solid var(--border); text-align: left; }
.table th { color: var(--text-muted); font-weight: 600; font-size: 0.85rem; }
.table tbody tr:hover { background: var(--hover); }
.num { text-align: right !important; font-variant-numeric: tabular-nums; }
.pagination { display: flex; gap: 1rem; align-items: center; margin-top: 1rem; }
.form { display: grid; gap: 1rem; max-width: 480px; }
.form label { display: grid; gap: 0.3rem; }
.detail { display: grid; grid-template-columns: 220px 1fr; gap: 2rem; }
.cover img, .cover-empty { width: 220px; aspect-ratio: 3 / 4; object-fit: cover; border-radius: 8px; }
.cover-empty { display: grid; place-items: center; background: var(--surface-2); color: var(--text-muted); }
.meta { display: grid; grid-template-columns: 80px 1fr; gap: 0.4rem; }
.meta dt { color: var(--text-muted); }
.meta dd { margin: 0; }
.actions { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }

/* 대시보드 */
.dashboard-header { display: flex; justify-content: space-between; align-items: baseline; }
.kpi-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1rem; }
.kpi, .panel { background: var(--surface-1); border: 1px solid var(--border); border-radius: 10px; padding: 1rem; }
.kpi h3 { margin: 0 0 0.5rem; }
.kpi-value { font-size: 1.75rem; font-weight: 600; margin: 0; font-variant-numeric: tabular-nums; }
.kpi-value small { font-size: 0.9rem; color: var(--text-muted); }
.kpi-hint { margin: 0.25rem 0 0; color: var(--text-muted); font-size: 0.8rem; }
.grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: 1rem; margin-bottom: 1rem; }
.status { font-weight: 600; }
.status-good { color: var(--status-good); }
.status-warning { color: var(--status-warning); }
.status-critical { color: var(--status-critical); }
.status-unknown { color: var(--text-muted); }
.strip { display: flex; gap: 2px; margin-bottom: 0.5rem; }
.strip-cell { flex: 1; height: 28px; border-radius: 3px; }
.status-bg-good { background: var(--status-good); }
.status-bg-warning { background: var(--status-warning); }
.status-bg-critical { background: var(--status-critical); }
.status-bg-unknown { background: var(--surface-2); }
.legend { display: flex; gap: 1rem; font-size: 0.8rem; flex-wrap: wrap; }
.chart-tooltip { background: var(--surface-2); border: 1px solid var(--border); padding: 0.4rem 0.6rem; border-radius: 6px; }
.log-analyzer { margin-top: 1.5rem; }
.log-analyzer > input { margin-bottom: 1rem; }
```

`http://localhost:5173`에서 상단 메뉴와 목록 10권이 보이는지, 주소창에 `/abc`를 입력하면 404 화면이 나오는지 확인합니다. 메뉴의 "도서 목록"에는 `active` 클래스가 붙어 굵게 표시됩니다.

> 완성 코드: 막히면 예제 저장소의 `p22-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S7-P22-04. 정리: React Router와 앱 뼈대

*정리, 5분*

- React Router의 선언형 모드로 주소와 화면을 연결하고, 레이아웃 라우트와 `<Outlet>`으로 공통 틀을 만듭니다.
- 앱 안의 이동은 `<Link>`로 해야 새로고침 없이 이동하고 메모리의 상태가 유지됩니다.
- 화면은 `pages`, 공통 표시는 `components`에 두며, 연습용 코드는 정리합니다.

##### 확인 퀴즈

**Q1.** 앱 안에서 다른 화면으로 이동할 때 `<a href>` 대신 `<Link to>`를 쓰는 이유는 무엇인가요?

1. a는 서버에 새 페이지를 요청해 앱이 다시 시작되고 메모리의 상태가 사라져서
2. a는 React에서 쓸 수 없어서
3. Link만 CSS를 적용할 수 있어서
4. Link가 더 빨리 그려져서

> 정답: 1번. Link는 History API로 주소만 바꾸고 화면을 교체합니다.

**Q2.** 레이아웃 라우트에서 자식 화면이 그려지는 자리를 표시하는 컴포넌트는 무엇인가요?

1. `<Outlet>`
2. `<Suspense>`
3. `<Routes>`
4. `<Navigate>`

> 정답: 1번. 부모 라우트의 element 안에 Outlet을 두면 그 자리에 일치하는 자식 화면이 그려집니다.

### S7-P23. 목록: URL 조건과 페이지네이션

> 학습 목표: 검색, 정렬, 페이지 조건을 URL로 관리하고, 백엔드의 페이지네이션 응답으로 페이지 이동을 구현할 수 있습니다.
>
> 완성 코드 브랜치: `p23-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S7-P23-01 검색 조건을 URL에 두는 이유 | 주요 개념 | 10분 |
| S7-P23-02 백엔드 페이지네이션과 화면 페이지 | 주요 개념 | 10분 |
| S7-P23-03 목록 화면 완성 | 실습 | 25분 |
| S7-P23-04 정리: 목록: URL 조건과 페이지네이션 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S7-P23-01. 검색 조건을 URL에 두는 이유

*주요 개념, 10분*

검색어, 정렬, 페이지 위치를 `useState`에만 두면 새로고침하거나 상세 화면에 갔다가 뒤로 돌아올 때 조건이 초기화됩니다. 조건을 URL 쿼리 문자열(`/?q=파이썬&sort=-price&skip=10`)에 두면 다음과 같은 이점이 있습니다.

- 새로고침, 뒤로 가기, 앞으로 가기를 해도 같은 결과가 나옵니다.
- 주소를 복사해 다른 사람에게 그대로 공유할 수 있습니다.
- "URL이 바뀌면 목록을 다시 불러온다"는 한 가지 규칙으로 데이터 흐름이 단순해집니다.

반면 사용자가 입력 중인 검색어(`keyword`)는 검색 버튼을 누르기 전까지 URL에 반영하지 않고 컴포넌트 state로 둡니다. 글자를 칠 때마다 요청이 나가지 않도록 하기 위해서입니다.

#### S7-P23-02. 백엔드 페이지네이션과 화면 페이지

*주요 개념, 10분*

백엔드는 `skip`(건너뛸 개수)과 `limit`(가져올 개수)으로 목록을 나누고, 응답에 전체 개수 `total`을 함께 보냅니다. 화면에서 쓰는 "몇 쪽"이라는 개념은 이 값으로 계산합니다.

```text
현재 페이지 = floor(skip / limit) + 1
마지막 페이지 = max(1, ceil(total / limit))
다음 페이지의 skip = skip + limit
```

예를 들어 `total`이 23이고 `limit`이 10이면 마지막 페이지는 3이며, 3쪽의 `skip`은 20입니다.

`src/components/Pagination.jsx`

```jsx
export default function Pagination({ total, skip, limit, onChange }) {
  const page = Math.floor(skip / limit) + 1;
  const lastPage = Math.max(1, Math.ceil(total / limit));
  return (
    <nav className="pagination" aria-label="페이지 이동">
      <button disabled={page <= 1} onClick={() => onChange(skip - limit)}>
        이전
      </button>
      <span>
        {page} / {lastPage} 페이지 (전체 {total}권)
      </span>
      <button disabled={page >= lastPage} onClick={() => onChange(skip + limit)}>
        다음
      </button>
    </nav>
  );
}
```

#### S7-P23-03. 목록 화면 완성

*실습, 25분*

`src/pages/BookListPage.jsx`

```jsx
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { listBooks } from '../api/books';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 10;
const SORT_OPTIONS = [
  { value: 'id', label: '등록순' },
  { value: 'price', label: '가격 낮은 순' },
  { value: '-price', label: '가격 높은 순' },
];

export default function BookListPage() {
  // 검색 조건을 URL에 두면 새로고침, 뒤로 가기, 주소 공유에도 화면이 유지됩니다.
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') ?? 'id';
  const skip = Number(searchParams.get('skip') ?? 0);

  const q = searchParams.get('q') ?? '';
  const [keyword, setKeyword] = useState(q);

  const [page, setPage] = useState(null); // { items, total, skip, limit }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function updateParams(changes) {
    const next = new URLSearchParams(searchParams);
    for (const [key, value] of Object.entries(changes)) {
      if (value === '' || value === null || value === undefined) next.delete(key);
      else next.set(key, String(value));
    }
    setSearchParams(next);
  }

  // 검색 버튼(또는 Enter)을 누르면 URL에 반영하고 첫 페이지부터 다시 봅니다.
  function handleSearch(event) {
    event.preventDefault();
    updateParams({ q: keyword.trim(), skip: '' });
  }

  // URL의 검색 조건이 바뀔 때마다 목록을 다시 불러옵니다.
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    listBooks({ q, sort, skip, limit: PAGE_SIZE }, controller.signal)
      .then(setPage)
      .catch((err) => {
        if (err.name !== 'CanceledError') setError(err);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    // 조건이 바뀌거나 화면을 떠나면 이전 요청을 취소합니다.
    return () => controller.abort();
  }, [q, sort, skip]);

  return (
    <section>
      <h1>도서 목록</h1>
      <form className="toolbar" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="제목으로 검색"
          maxLength={50}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">검색</button>
        <select value={sort} onChange={(e) => updateParams({ sort: e.target.value, skip: '' })}>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>

      <ErrorMessage error={error} />
      {loading && <p className="muted">불러오는 중입니다.</p>}

      {page && !loading && page.items.length === 0 && <p>조건에 맞는 도서가 없습니다.</p>}
      {page && page.items.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>저자</th>
              <th className="num">가격</th>
            </tr>
          </thead>
          <tbody>
            {page.items.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>
                  <Link to={`/books/${book.id}`}>{book.title}</Link>
                </td>
                <td>{book.author?.name}</td>
                <td className="num">{book.price.toLocaleString('ko-KR')}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {page && (
        <Pagination
          total={page.total}
          skip={page.skip}
          limit={page.limit}
          onChange={(nextSkip) => updateParams({ skip: nextSkip })}
        />
      )}
    </section>
  );
}
```

코드의 흐름을 정리하면 다음과 같습니다.

1. `useSearchParams`로 URL에서 `q`, `sort`, `skip`을 읽습니다. 값이 없으면 기본값을 씁니다.
2. `updateParams`는 현재 쿼리 문자열을 복사한 뒤 바꿀 값만 고치고, 빈 값은 지워서 주소를 깔끔하게 유지합니다.
3. 검색어나 정렬을 바꾸면 `skip`을 지워 첫 페이지로 돌아갑니다. 검색 결과가 5건인데 3쪽에 머물러 있으면 빈 화면이 나오기 때문입니다.
4. `q`, `sort`, `skip`이 바뀔 때마다 이펙트가 실행되어 목록을 불러오고, 이전 요청은 정리 함수에서 취소합니다.
5. 화면은 오류, 로딩, 빈 결과, 목록을 각각 다르게 보여 줍니다.

가격은 `toLocaleString('ko-KR')`로 천 단위 쉼표를 넣고, 숫자 열은 `num` 클래스로 오른쪽 정렬합니다. 숫자를 오른쪽에 맞추면 자릿수를 한눈에 비교할 수 있습니다.

`sort`의 선택지는 백엔드가 허용하는 `id`, `price`, `-price` 세 가지만 제공합니다. 사용자가 주소창에 `?sort=title`처럼 직접 입력하면 백엔드가 422를 돌려주고, 화면은 `ErrorMessage`로 "입력값을 확인해 주세요."를 표시합니다. 프론트엔드가 허용 값을 제한하더라도 최종 검증은 백엔드가 한다는 점을 확인할 수 있습니다.

> 완성 코드: 막히면 예제 저장소의 `p23-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S7-P23-04. 정리: 목록: URL 조건과 페이지네이션

*정리, 5분*

- 검색, 정렬, 페이지 조건은 URL 쿼리 문자열에 두어 새로고침, 뒤로 가기, 주소 공유에도 유지되게 합니다.
- 입력 중인 검색어는 state로 두고, 검색할 때만 URL에 반영해 요청 수를 줄입니다.
- 백엔드의 `skip`, `limit`, `total`로 화면의 현재 페이지와 마지막 페이지를 계산합니다.

##### 확인 퀴즈

**Q1.** `total`이 23, `limit`이 10일 때 3쪽의 `skip` 값은 무엇인가요?

1. 10
2. 20
3. 30
4. 3

> 정답: 2번. skip은 (페이지 - 1) x limit이므로 3쪽은 20입니다.

**Q2.** 검색 조건을 URL에 두는 이유로 알맞지 않은 것은 무엇인가요?

1. 백엔드 검증이 필요 없어진다.
2. 새로고침해도 조건이 유지된다.
3. 주소를 공유할 수 있다.
4. 뒤로 가기에도 결과가 유지된다.

> 정답: 1번. URL에 두는 것은 화면 상태 관리 방법일 뿐이며 백엔드 검증은 여전히 필요합니다.

### S7-P24. 상세 화면과 로딩, 오류 처리

> 학습 목표: 주소의 매개변수로 데이터를 불러오는 상세 화면을 만들고, 상황별 로딩과 오류 표시를 설계할 수 있습니다.
>
> 완성 코드 브랜치: `p24-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S7-P24-01 도서 상세 화면 | 실습 | 20분 |
| S7-P24-02 로딩, 오류, 빈 상태 설계 | 주요 개념 | 15분 |
| S7-P24-03 상세 화면 확인 | 실습 | 10분 |
| S7-P24-04 정리: 상세 화면과 로딩, 오류 처리 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S7-P24-01. 도서 상세 화면

*실습, 20분*

상세 화면은 주소의 `:bookId`로 도서를 조회해 보여 줍니다. S9에서 대여, 수정, 삭제, 표지 업로드 버튼을 추가하므로 지금은 조회만 구현합니다.

`src/pages/BookDetailPage.jsx`

```jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getBook } from '../api/books';
import { toAssetUrl } from '../api/client';
import ErrorMessage from '../components/ErrorMessage';

export default function BookDetailPage() {
  const { bookId } = useParams(); // 주소의 :bookId 값 (문자열)
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    getBook(bookId, controller.signal)
      .then(setBook)
      .catch((err) => {
        if (err.name !== 'CanceledError') setError(err);
      });
    return () => controller.abort();
  }, [bookId]);

  if (error) return <ErrorMessage error={error} />;
  if (!book) return <p className="muted">불러오는 중입니다.</p>;

  return (
    <section className="detail">
      <div className="cover">
        {book.cover_url ? (
          <img src={toAssetUrl(book.cover_url)} alt={`${book.title} 표지`} />
        ) : (
          <div className="cover-empty">표지 없음</div>
        )}
      </div>
      <div>
        <h1>{book.title}</h1>
        <dl className="meta">
          <dt>저자</dt>
          <dd>{book.author?.name}</dd>
          <dt>가격</dt>
          <dd>{book.price.toLocaleString('ko-KR')}원</dd>
          <dt>ISBN</dt>
          <dd>{book.isbn ?? '-'}</dd>
        </dl>
      </div>
    </section>
  );
}
```

`bookId`가 바뀌면(예: 다른 도서의 링크를 누르면) 이펙트가 다시 실행되도록 의존성 배열에 넣었습니다. 없는 번호로 접근하면 백엔드의 404 응답이 `ErrorMessage`로 표시됩니다. 표지가 있으면 S6에서 만든 `toAssetUrl`로 전체 주소를 만들어 표시하고, `alt` 속성으로 이미지의 의미를 글로 남깁니다.

상세 화면의 라우트를 등록합니다.

`src/App.jsx`

```jsx
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import BookDetailPage from './pages/BookDetailPage';
import BookListPage from './pages/BookListPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookListPage />} />
        <Route path="books/:bookId" element={<BookDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
```

#### S7-P24-02. 로딩, 오류, 빈 상태 설계

*주요 개념, 15분*

데이터를 불러오는 화면은 정상 결과보다 그 밖의 상태를 더 자주 보여 줍니다. 각 상태를 어떻게 표현할지 미리 정해 두면 화면마다 다르게 처리하는 일을 막을 수 있습니다.

| 상태 | 이 과정의 표현 | 생각할 점 |
|---|---|---|
| 처음 불러오는 중 | "불러오는 중입니다." 문구 | 빠른 응답에서는 깜빡임이 될 수 있습니다. 화면 크기가 크게 변한다면 같은 크기의 빈 틀(스켈레톤)을 쓰기도 합니다. |
| 다시 불러오는 중 | 이전 결과를 그대로 두고 문구만 표시 | 페이지를 넘길 때 표가 사라졌다 나타나면 읽던 위치를 잃습니다. S10-P34에서 더 매끄럽게 바꿉니다. |
| 빈 결과 | "조건에 맞는 도서가 없습니다." | 빈 표만 보여 주면 오류인지 결과가 없는지 구분할 수 없습니다. |
| 요청 오류 | `ErrorMessage`로 메시지와 오류 코드 | 오류 코드는 운영자가 백엔드 로그와 대조하는 데 씁니다. |
| 대상 없음(404) | 상세 화면 안에 오류 메시지 | 없는 주소 전체(`/abc`)는 404 화면, 있는 화면의 없는 데이터는 화면 안에서 안내합니다. |
| 연결 실패 | "서버에 연결할 수 없습니다..." | 백엔드 중지와 CORS 차단은 브라우저가 구분해 주지 않습니다. 메시지에 둘 다 안내합니다. |

상태 코드별로 사용자에게 무엇을 할 수 있는지 알려 주는 것이 좋은 오류 메시지의 조건입니다. S6-P20에서 만든 `toApiError`의 기본 메시지는 이 기준으로 썼습니다. 401은 로그인, 403은 권한 없음, 409는 현재 상태와의 충돌, 422는 입력 확인, 5xx는 잠시 후 다시 시도를 안내합니다.

#### S7-P24-03. 상세 화면 확인

*실습, 10분*

1. 목록에서 도서 제목을 눌러 상세 화면으로 이동하고, 브라우저 뒤로 가기로 목록에 돌아왔을 때 검색 조건과 페이지가 유지되는지 확인합니다.
2. 주소창에 `/books/999999`를 입력해 404 오류 메시지와 오류 코드가 나오는지 확인합니다.
3. 주소창에 `/books/abc`를 입력하면 어떤 오류가 나오는지 확인하고, 그 이유를 백엔드의 경로 매개변수 검증(422)으로 설명합니다.
4. 상세 화면에서 다른 도서의 주소로 바로 바꿔 입력해도 내용이 바뀌는지 확인합니다. 의존성 배열의 `bookId`가 하는 일입니다.
5. Swagger UI로 표지가 있는 도서를 만들었다면 표지가 표시되는지 확인합니다. (표지 업로드 화면은 S9-P30에서 만듭니다.)

> 완성 코드: 막히면 예제 저장소의 `p24-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S7-P24-04. 정리: 상세 화면과 로딩, 오류 처리

*정리, 5분*

- `useParams`로 주소의 매개변수를 읽고, 그 값이 바뀌면 다시 불러오도록 의존성 배열에 넣습니다.
- 로딩, 빈 결과, 요청 오류, 대상 없음, 연결 실패를 구분해 표현 방식을 정해 둡니다.
- 좋은 오류 메시지는 사용자가 다음에 무엇을 하면 되는지 알려 줍니다.

##### 확인 퀴즈

**Q1.** 상세 화면의 이펙트 의존성 배열에 `bookId`를 넣는 이유는 무엇인가요?

1. 요청을 취소하지 않기 위해
2. 넣지 않으면 오류가 나서
3. 다른 도서로 이동해 bookId가 바뀌면 다시 불러오기 위해
4. 처음 한 번만 불러오기 위해

> 정답: 3번. 같은 컴포넌트가 계속 쓰이면서 bookId만 바뀔 수 있으므로 바뀔 때 다시 불러와야 합니다.

**Q2.** 목록이 비었을 때 빈 표만 보여 주는 것의 문제는 무엇인가요?

1. 결과가 없는 것인지 오류인지 사용자가 구분할 수 없다.
2. 접근성 검사에서 오류가 난다.
3. 백엔드에 요청이 다시 나간다.
4. 성능이 나빠진다.

> 정답: 1번. 빈 결과는 명시적인 안내 문구로 다른 상태와 구분합니다.

### S7-P25. 조회 화면 통합 실습

> 학습 목표: 백엔드의 저자 조건으로 목록을 거르는 기능을 스스로 추가하고, 조회 화면 전체를 시나리오로 점검할 수 있습니다.
>
> 완성 코드 브랜치: `p25-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S7-P25-01 저자별 보기 추가하기 | 실습 | 30분 |
| S7-P25-02 조회 화면 종합 점검 | 실습 | 15분 |
| S7-P25-03 정리: 조회 화면 통합 실습 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S7-P25-01. 저자별 보기 추가하기

*실습, 30분*

백엔드 `GET /books`는 `author` 쿼리로 저자 이름이 일치하는 도서만 돌려줍니다(S1-P3-03의 API 표). 목록 화면에 저자 선택 상자를 추가합니다. 먼저 아래 요구 사항만 보고 직접 구현해 본 뒤 예시 코드와 비교합니다.

- 저자 목록은 `GET /authors`로 처음 한 번만 불러옵니다. 실패해도 목록 화면은 그대로 쓸 수 있어야 합니다.
- 선택한 저자는 다른 조건처럼 URL(`?author=홍길동`)에 둡니다.
- 저자를 바꾸면 첫 페이지부터 다시 봅니다.
- "모든 저자"를 고르면 조건을 지웁니다.

`src/pages/BookListPage.jsx`

```jsx
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { listAuthors } from '../api/authors';
import { listBooks } from '../api/books';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 10;
const SORT_OPTIONS = [
  { value: 'id', label: '등록순' },
  { value: 'price', label: '가격 낮은 순' },
  { value: '-price', label: '가격 높은 순' },
];

export default function BookListPage() {
  // 검색 조건을 URL에 두면 새로고침, 뒤로 가기, 주소 공유에도 화면이 유지됩니다.
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') ?? 'id';
  const skip = Number(searchParams.get('skip') ?? 0);
  const author = searchParams.get('author') ?? '';

  const q = searchParams.get('q') ?? '';
  const [keyword, setKeyword] = useState(q);

  const [authors, setAuthors] = useState([]);
  const [page, setPage] = useState(null); // { items, total, skip, limit }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function updateParams(changes) {
    const next = new URLSearchParams(searchParams);
    for (const [key, value] of Object.entries(changes)) {
      if (value === '' || value === null || value === undefined) next.delete(key);
      else next.set(key, String(value));
    }
    setSearchParams(next);
  }

  // 검색 버튼(또는 Enter)을 누르면 URL에 반영하고 첫 페이지부터 다시 봅니다.
  function handleSearch(event) {
    event.preventDefault();
    updateParams({ q: keyword.trim(), skip: '' });
  }

  // 저자 선택 상자에 쓸 목록은 처음 한 번만 불러옵니다.
  useEffect(() => {
    const controller = new AbortController();
    listAuthors({}, controller.signal)
      .then(setAuthors)
      .catch(() => {}); // 저자 목록이 없어도 목록 화면은 쓸 수 있으므로 조용히 넘어갑니다.
    return () => controller.abort();
  }, []);

  // URL의 검색 조건이 바뀔 때마다 목록을 다시 불러옵니다.
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    listBooks({ q, author, sort, skip, limit: PAGE_SIZE }, controller.signal)
      .then(setPage)
      .catch((err) => {
        if (err.name !== 'CanceledError') setError(err);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    // 조건이 바뀌거나 화면을 떠나면 이전 요청을 취소합니다.
    return () => controller.abort();
  }, [q, author, sort, skip]);

  return (
    <section>
      <h1>도서 목록</h1>
      <form className="toolbar" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="제목으로 검색"
          maxLength={50}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">검색</button>
        <select value={author} onChange={(e) => updateParams({ author: e.target.value, skip: '' })}>
          <option value="">모든 저자</option>
          {authors.map((a) => (
            <option key={a.id} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
        <select value={sort} onChange={(e) => updateParams({ sort: e.target.value, skip: '' })}>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>

      <ErrorMessage error={error} />
      {loading && <p className="muted">불러오는 중입니다.</p>}

      {page && !loading && page.items.length === 0 && <p>조건에 맞는 도서가 없습니다.</p>}
      {page && page.items.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>저자</th>
              <th className="num">가격</th>
            </tr>
          </thead>
          <tbody>
            {page.items.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>
                  <Link to={`/books/${book.id}`}>{book.title}</Link>
                </td>
                <td>{book.author?.name}</td>
                <td className="num">{book.price.toLocaleString('ko-KR')}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {page && (
        <Pagination
          total={page.total}
          skip={page.skip}
          limit={page.limit}
          onChange={(nextSkip) => updateParams({ skip: nextSkip })}
        />
      )}
    </section>
  );
}
```

구현에서 볼 부분은 다음과 같습니다.

- 저자 목록 이펙트와 도서 목록 이펙트를 나눴습니다. 저자 목록은 조건과 관계없이 한 번만 필요하므로 의존성이 `[]`이고, 도서 목록은 `author`를 포함한 조건이 바뀔 때마다 다시 불러옵니다. 하나의 이펙트에 넣으면 페이지를 넘길 때마다 저자 목록까지 다시 요청하게 됩니다.
- 저자 목록 실패를 `catch(() => {})`로 조용히 넘겼습니다. 보조 기능의 실패가 핵심 기능(목록 보기)을 막지 않게 한 선택입니다. 운영 중이라면 이런 실패도 기록해 두는 것이 좋습니다(S13에서 다루는 요청 기록이 이 역할을 합니다).
- 선택 상자의 값은 저자 `id`가 아니라 `name`입니다. 백엔드의 `author` 쿼리가 이름을 받기 때문입니다. API 명세에 화면을 맞춘 예입니다.

#### S7-P25-02. 조회 화면 종합 점검

*실습, 15분*

1. 목록, 상세, 404 화면이 모두 동작하는 상태인지 확인합니다.
2. 개발 서버와 백엔드를 켠 상태에서 아래 시나리오를 차례로 확인합니다.

| 번호 | 동작 | 기대 결과 |
|---|---|---|
| 1 | 첫 화면 접속 | 10권과 "1 / N 페이지 (전체 M권)" 표시 |
| 2 | "다음" 클릭 | 주소에 `?skip=10`이 붙고 다음 10권 표시 |
| 3 | 정렬을 "가격 높은 순"으로 변경 | 주소에 `sort=-price`, `skip` 제거, 첫 페이지부터 표시 |
| 4 | 검색어 입력 후 Enter | 주소에 `q=...`가 붙고 결과 표시 |
| 5 | 결과가 없는 검색어 | "조건에 맞는 도서가 없습니다." 표시 |
| 6 | 도서 제목 클릭 후 브라우저 뒤로 가기 | 검색 조건과 페이지가 그대로 유지 |
| 7 | 주소창에 `/books/999999` 입력 | 404 오류 메시지와 `BOOK_NOT_FOUND` 같은 오류 코드 표시 |
| 8 | 주소창에 `/abc` 입력 | 404 화면 표시 |
| 9 | 주소창에 `/?sort=title` 입력 | 422 검증 오류 메시지 표시 |

추가로 다음을 확인합니다.

| 번호 | 동작 | 기대 결과 |
|---|---|---|
| 10 | 저자 선택 | 주소에 `author=...`가 붙고 그 저자의 도서만 표시, 전체 권수도 바뀜 |
| 11 | 저자 선택 후 검색 | 두 조건이 함께 적용됨 |
| 12 | 백엔드에서 저자 목록만 실패하도록 `GET /authors`를 잘못된 주소로 바꿔 본다 | 선택 상자에 "모든 저자"만 있고 목록은 정상 |

3. Network 탭에서 검색어를 입력하는 동안에는 요청이 나가지 않고, 검색 버튼(Enter)을 누를 때만 나가는지 확인합니다.
4. 모두 확인했으면 `P25: 조회 화면 통합 실습`으로 커밋합니다.

> 완성 코드: 막히면 예제 저장소의 `p25-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S7-P25-03. 정리: 조회 화면 통합 실습

*정리, 5분*

- 새 조건을 추가할 때도 "URL에 두고, 바뀌면 첫 페이지로, 바뀌면 다시 불러오기" 규칙을 그대로 따릅니다.
- 조건과 무관한 데이터는 별도의 이펙트로 한 번만 불러옵니다.
- 보조 기능의 실패가 핵심 기능을 막지 않도록 실패를 나눠 처리합니다.

##### 확인 퀴즈

**Q1.** 저자 목록과 도서 목록을 하나의 이펙트에서 불러오면 생기는 문제는 무엇인가요?

1. 페이지나 검색어가 바뀔 때마다 저자 목록까지 다시 요청한다.
2. 도서 목록이 정렬되지 않는다.
3. CORS 오류가 난다.
4. 저자 목록을 불러올 수 없다.

> 정답: 1번. 이펙트는 의존성 단위로 나누어, 필요한 조건이 바뀔 때만 다시 실행되게 합니다.

**Q2.** 저자 선택 상자의 값으로 저자 이름을 쓴 이유는 무엇인가요?

1. id는 화면에 보여 줄 수 없어서
2. URL에 숫자를 쓸 수 없어서
3. 이름이 id보다 짧아서
4. 백엔드의 author 쿼리가 저자 이름으로 거르기 때문에

> 정답: 4번. 화면의 값은 API 명세에 맞춥니다.

---

## S8. 인증 연동

*4일차 오후, 3시간*

> 섹션 목표: JWT 토큰으로 로그인, 자동 재발급, 로그아웃, 역할에 따른 접근 제어를 구현합니다.

### S8-P26. SPA 인증 흐름과 토큰 보관

> 학습 목표: 액세스 토큰과 리프레시 토큰을 쓰는 SPA의 인증 흐름을 설명하고, 토큰 보관소와 인증 API 함수를 만들 수 있습니다.
>
> 완성 코드 브랜치: `p26-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S8-P26-01 SPA의 인증 흐름 | 주요 개념 | 20분 |
| S8-P26-02 토큰 보관소와 인증 API | 실습 | 15분 |
| S8-P26-03 Console로 로그인 API 확인하기 | 실습 | 10분 |
| S8-P26-04 정리: SPA 인증 흐름과 토큰 보관 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S8-P26-01. SPA의 인증 흐름

*주요 개념, 20분*

백엔드 과정 S5에서 만든 인증은 두 가지 토큰을 사용합니다. 액세스 토큰은 API를 호출할 때 `Authorization: Bearer <토큰>` 헤더로 보내는 짧은 수명의 JWT이고, 리프레시 토큰은 액세스 토큰이 만료되었을 때 새 토큰을 받는 데만 쓰는 긴 수명의 토큰입니다. 재발급할 때 리프레시 토큰도 새로 발급되며(응답에 `refresh_token` 포함), 로그아웃하면 서버에서 리프레시 토큰이 무효화됩니다.

프론트엔드가 맡아야 할 흐름은 다음과 같습니다.

```text
[로그인]
 사용자 입력 ─> POST /auth/token (폼) ─> { access_token, refresh_token }
             ─> 토큰 보관 ─> GET /auth/me ─> { id, email, role } 를 화면 상태로 보관

[일반 API 호출]
 요청 ─> 인터셉터가 Authorization 헤더 부착 ─> 응답

[액세스 토큰 만료]
 요청 ─> 401 ─> 인터셉터가 POST /auth/refresh ─> 새 토큰 보관 ─> 원래 요청 다시 전송
                       └─ 재발급도 실패 ─> 토큰 삭제, 로그아웃 상태로 전환

[새로고침]
 메모리의 액세스 토큰은 사라짐 ─> 리프레시 토큰이 있으면 GET /auth/me 시도
 ─> 401 ─> 재발급 ─> 다시 GET /auth/me ─> 로그인 상태 복원

[로그아웃]
 POST /auth/logout { refresh_token } ─> 성공 여부와 관계없이 브라우저의 토큰 삭제
```

이 흐름에서 화면 컴포넌트는 토큰을 전혀 다루지 않습니다. 토큰 보관은 `tokenStore`, 헤더 부착과 재발급은 axios 인터셉터, 로그인 상태는 `AuthProvider`가 맡습니다.

#### S8-P26-02. 토큰 보관소와 인증 API

*실습, 15분*

이 과정은 액세스 토큰을 JavaScript 변수(메모리)에만 두고, 리프레시 토큰은 `sessionStorage`에 둡니다.

`src/auth/tokenStore.js`

```js
// 토큰 보관소
// - 액세스 토큰: 메모리(모듈 변수)에만 둡니다. 새로고침하면 사라집니다.
// - 리프레시 토큰: sessionStorage에 둡니다. 탭을 닫으면 사라집니다.
// 저장 위치를 이렇게 고른 이유는 교안의 "프론트엔드 개발 보안" 단원에서 다룹니다.
const REFRESH_KEY = 'book-admin.refresh';

let accessToken = null;

export const tokenStore = {
  getAccess: () => accessToken,
  getRefresh: () => sessionStorage.getItem(REFRESH_KEY),
  save({ access_token, refresh_token }) {
    accessToken = access_token;
    if (refresh_token) sessionStorage.setItem(REFRESH_KEY, refresh_token);
  },
  clear() {
    accessToken = null;
    sessionStorage.removeItem(REFRESH_KEY);
  },
};
```

메모리에 둔 액세스 토큰은 새로고침하면 사라지지만, 리프레시 토큰으로 바로 다시 받을 수 있습니다. `sessionStorage`는 탭 단위로 분리되며 탭을 닫으면 지워집니다. 저장 위치마다 장단점이 있고 정답이 하나로 정해져 있지 않으므로, 각 방식의 위험과 이 선택의 근거는 S12에서 따로 비교합니다. 여기서는 "토큰을 어디에 두든 화면 코드는 `tokenStore`만 통해 접근한다"는 구조에 집중합니다. 저장 위치를 바꾸더라도 이 파일 하나만 고치면 됩니다.

`src/api/auth.js`

```js
import { api } from './client';

export async function signup(email, password) {
  const { data } = await api.post('/auth/signup', { email, password });
  return data;
}

// OAuth2 Password Flow: JSON이 아니라 폼 형식으로 보내야 합니다.
export async function login(email, password) {
  const form = new URLSearchParams();
  form.append('username', email); // 이 백엔드는 username 칸에 이메일을 받습니다.
  form.append('password', password);
  const { data } = await api.post('/auth/token', form);
  return data; // { access_token, refresh_token, token_type }
}

export async function fetchMe() {
  const { data } = await api.get('/auth/me');
  return data; // { id, email, role }
}

export async function logout(refreshToken) {
  await api.post('/auth/logout', { refresh_token: refreshToken });
}
```

로그인은 S6에서 배운 대로 `URLSearchParams`로 폼 형식을 만들고, `username` 칸에 이메일을 넣습니다. axios는 `URLSearchParams`를 받으면 `Content-Type: application/x-www-form-urlencoded`를 자동으로 지정합니다.

#### S8-P26-03. Console로 로그인 API 확인하기

*실습, 10분*

개발 서버에서는 Console에서 소스 모듈을 직접 가져와 시험할 수 있습니다. 백엔드에 만들어 둔 계정으로 로그인해 봅니다.

```js
const auth = await import('/src/api/auth.js');
const { tokenStore } = await import('/src/auth/tokenStore.js');

const tokens = await auth.login('reader@example.com', '비밀번호');
console.log(Object.keys(tokens)); // ['access_token', 'refresh_token', 'token_type']
tokenStore.save(tokens);

await auth.fetchMe().catch((e) => console.log(e.status, e.code)); // 401 ...
```

토큰을 보관했는데도 `fetchMe()`가 401로 실패합니다. 아직 요청에 `Authorization` 헤더를 붙이는 코드가 없기 때문입니다. Network 탭에서 `me` 요청의 헤더를 확인합니다. 다음 파트에서 axios 인터셉터로 이 문제를 해결합니다.

Application 탭의 Session Storage에서 `book-admin.refresh` 값도 확인합니다. 확인이 끝나면 `tokenStore.clear()`로 지웁니다.

> 완성 코드: 막히면 예제 저장소의 `p26-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S8-P26-04. 정리: SPA 인증 흐름과 토큰 보관

*정리, 5분*

- 액세스 토큰은 API 호출에, 리프레시 토큰은 재발급에만 쓰며, 재발급 때 리프레시 토큰도 새로 받습니다.
- 화면 코드는 토큰을 직접 다루지 않고 `tokenStore`를 통해서만 접근합니다.
- 토큰을 보관하는 것만으로는 부족하며, 요청마다 `Authorization` 헤더로 보내야 합니다.

##### 확인 퀴즈

**Q1.** 리프레시 토큰의 용도로 옳은 것은 무엇인가요?

1. 비밀번호 대신 로그인 화면에 입력한다.
2. 화면에 사용자 이름을 표시하는 데 쓴다.
3. 모든 API 요청의 Authorization 헤더에 붙인다.
4. 액세스 토큰이 만료되었을 때 새 토큰을 받는 데만 쓴다.

> 정답: 4번. 리프레시 토큰은 /auth/refresh에만 보내며, 노출 범위를 줄이기 위해 다른 요청에는 쓰지 않습니다.

**Q2.** 토큰을 tokenStore로만 다루게 한 이유는 무엇인가요?

1. 저장 위치를 바꿔도 한 파일만 고치면 되어서
2. 토큰이 자동으로 암호화되어서
3. CORS 오류를 피하려고
4. 브라우저가 강제해서

> 정답: 1번. 보관 방식을 한곳에 모으면 변경과 점검이 쉬워집니다.

### S8-P27. 인터셉터와 자동 재발급

> 학습 목표: axios 인터셉터로 모든 요청에 토큰을 붙이고, 만료 시 한 번만 재발급해 원래 요청을 다시 보낼 수 있습니다.
>
> 완성 코드 브랜치: `p27-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S8-P27-01 토큰 부착과 자동 재발급 | 실습 | 30분 |
| S8-P27-02 재발급 흐름 직접 확인하기 | 실습 | 15분 |
| S8-P27-03 정리: 인터셉터와 자동 재발급 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S8-P27-01. 토큰 부착과 자동 재발급

*실습, 30분*

S6의 `client.js`에 요청 인터셉터와 재발급 로직을 추가합니다. 파일 전체를 다음과 같이 바꿉니다.

`src/api/client.js`

```js
import axios from 'axios';
import { toApiError, ApiError, NETWORK_ERROR_MESSAGE } from './errors';
import { tokenStore } from '../auth/tokenStore';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// 요청 인터셉터: 액세스 토큰이 있으면 Authorization 헤더에 붙입니다.
api.interceptors.request.use((config) => {
  const token = tokenStore.getAccess();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 이 경로들은 401이 나와도 재발급을 시도하지 않습니다.
const NO_RETRY_PATHS = ['/auth/token', '/auth/refresh', '/auth/signup', '/auth/logout'];

// 리프레시 요청이 동시에 여러 번 나가지 않도록 하나의 Promise를 공유합니다.
let refreshPromise = null;

async function refreshAccessToken() {
  const refreshToken = tokenStore.getRefresh();
  if (!refreshToken) throw new Error('NO_REFRESH_TOKEN');
  // 인터셉터가 없는 기본 axios로 보내 무한 반복을 막습니다.
  const { data } = await axios.post(`${API_BASE_URL}/auth/refresh`, {
    refresh_token: refreshToken,
  });
  tokenStore.save(data);
  return data.access_token;
}

// 재발급에 실패했을 때 로그인 상태를 지우는 일을 AuthProvider에 맡기기 위한 연결 고리입니다.
let onAuthExpired = () => {};
export function setOnAuthExpired(handler) {
  onAuthExpired = handler;
}

// 응답 인터셉터: 401이면 한 번만 재발급한 뒤 원래 요청을 다시 보냅니다.
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // 화면을 떠나 취소한 요청은 오류가 아니므로 그대로 넘깁니다.
    if (axios.isCancel(error)) throw error;

    const { config, response } = error;

    if (!response) {
      throw new ApiError({ status: 0, code: 'NETWORK_ERROR', message: NETWORK_ERROR_MESSAGE });
    }

    const canRetry = !NO_RETRY_PATHS.includes(config.url) && !config._retried;
    if (response.status === 401 && canRetry && tokenStore.getRefresh()) {
      config._retried = true;
      try {
        refreshPromise ??= refreshAccessToken().finally(() => {
          refreshPromise = null;
        });
        await refreshPromise;
        return api(config); // 새 토큰으로 원래 요청을 다시 보냅니다.
      } catch {
        tokenStore.clear();
        onAuthExpired();
      }
    }

    throw toApiError(response.status, response.data, response.headers);
  },
);

// 백엔드가 돌려준 /covers/... 같은 경로를 화면에서 열 수 있는 주소로 바꿉니다.
export function toAssetUrl(path) {
  if (!path) return null;
  return `${API_BASE_URL}${path}`;
}
```

이 코드에서 주의 깊게 볼 부분은 네 가지입니다.

**1) 한 번만 재시도합니다.** 재발급 후 다시 보낸 요청에도 401이 오면 무한히 반복할 수 있습니다. 요청 설정 객체에 `_retried` 표시를 남겨 두 번째 401은 그대로 오류로 넘깁니다.

**2) 재발급 요청은 인터셉터를 거치지 않습니다.** 재발급 요청을 `api` 인스턴스로 보내면, 재발급 자체가 401일 때 다시 재발급을 시도하는 순환이 생깁니다. 그래서 인터셉터가 없는 기본 `axios.post`를 사용합니다. 같은 이유로 로그인, 회원가입, 로그아웃, 재발급 경로는 `NO_RETRY_PATHS`로 제외합니다. 로그인 실패(401)는 "비밀번호가 틀렸다"는 뜻이지 토큰 만료가 아니기 때문입니다.

**3) 동시에 여러 요청이 401을 받아도 재발급은 한 번만 합니다.** 대시보드처럼 여러 요청을 동시에 보내는 화면에서 토큰이 만료되면 401이 거의 동시에 여러 개 도착합니다. 각각 재발급을 요청하면, 백엔드가 재발급 때마다 리프레시 토큰을 새로 바꾸므로 먼저 도착한 재발급만 성공하고 나머지는 이미 바뀐 토큰을 들고 가서 실패합니다. 이를 막기 위해 진행 중인 재발급 Promise(`refreshPromise`)를 공유합니다. `??=` 연산자는 값이 비어 있을 때만 새로 대입하므로, 첫 401만 재발급을 시작하고 나머지는 같은 Promise를 기다립니다. 재발급이 끝나면 `finally`에서 비워 다음 만료에 대비합니다.

**4) 재발급 실패를 화면에 알립니다.** 리프레시 토큰까지 만료되었으면 토큰을 지우고 `onAuthExpired`를 호출합니다. 이 함수는 S8-P28-01의 `AuthProvider`가 등록하며, 로그인 상태를 비워 화면이 로그아웃 상태로 바뀌게 합니다. `client.js`는 React 밖의 일반 모듈이라 React의 state를 직접 바꿀 수 없으므로, 이렇게 함수를 등록받는 방식으로 연결합니다.

#### S8-P27-02. 재발급 흐름 직접 확인하기

*실습, 15분*

Console에서 로그인한 뒤, 액세스 토큰을 일부러 망가뜨려 재발급 흐름을 확인합니다.

```js
const auth = await import('/src/api/auth.js');
const { tokenStore } = await import('/src/auth/tokenStore.js');
tokenStore.save(await auth.login('reader@example.com', '비밀번호'));

console.log(await auth.fetchMe()); // 이제 성공: 인터셉터가 Authorization 헤더를 붙였습니다.

// 액세스 토큰을 만료된 것처럼 망가뜨리고 다시 요청합니다.
tokenStore.save({ access_token: 'broken-token' });
console.log(await auth.fetchMe()); // 여전히 성공
```

Network 탭에서 마지막 호출이 `me`(401) → `refresh`(200) → `me`(200) 순서로 처리된 것을 확인합니다. 화면 코드 입장에서는 아무 일도 없었던 것처럼 결과를 받습니다.

동시 요청도 확인합니다. 다시 토큰을 망가뜨리고 세 요청을 동시에 보냅니다.

```js
tokenStore.save({ access_token: 'broken-token' });
await Promise.all([auth.fetchMe(), auth.fetchMe(), auth.fetchMe()]);
```

401이 세 번 나와도 `refresh` 요청은 한 번만 나가야 합니다. `refreshPromise`를 공유하지 않는 코드였다면 어떻게 되었을지 앞 페이지의 설명으로 답해 봅니다. 확인이 끝나면 `tokenStore.clear()`로 지웁니다.

> 완성 코드: 막히면 예제 저장소의 `p27-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S8-P27-03. 정리: 인터셉터와 자동 재발급

*정리, 5분*

- 요청 인터셉터는 토큰을 붙이고, 응답 인터셉터는 401에서 한 번만 재발급한 뒤 원래 요청을 다시 보냅니다.
- 재발급 요청은 인터셉터 없는 기본 axios로 보내고, 로그인 같은 인증 경로는 재시도에서 제외합니다.
- 동시에 여러 401이 와도 재발급 Promise를 공유해 재발급은 한 번만 일어나게 합니다.

##### 확인 퀴즈

**Q1.** 여러 요청이 동시에 401을 받았을 때 재발급을 한 번만 하는 이유는 무엇인가요?

1. 브라우저가 동시 요청을 막아서
2. 액세스 토큰이 공유되지 않아서
3. 서버 부하를 줄이기 위해서만
4. 재발급 때마다 리프레시 토큰이 바뀌어 나머지 재발급이 실패하므로

> 정답: 4번. 백엔드는 재발급 때 리프레시 토큰을 새로 바꾸므로 진행 중인 재발급 Promise를 공유해야 합니다.

**Q2.** 로그인 요청(`/auth/token`)의 401에서 재발급을 시도하지 않는 이유는 무엇인가요?

1. 재발급 API가 로그인 API와 같아서
2. 로그인은 CORS 대상이 아니라서
3. 로그인 요청에는 헤더가 없어서
4. 로그인 401은 토큰 만료가 아니라 이메일이나 비밀번호가 틀렸다는 뜻이라서

> 정답: 4번. 401의 의미가 경로마다 다르므로 인증 경로는 재시도 대상에서 뺍니다.

### S8-P28. 로그인 상태 공유와 접근 제어

> 학습 목표: Context로 로그인 상태를 공유하고, 로그인과 회원가입 화면, 역할에 따른 화면 접근 제어를 구현할 수 있습니다.
>
> 완성 코드 브랜치: `p28-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S8-P28-01 로그인 상태 공유: Context | 실습 | 20분 |
| S8-P28-02 로그인과 회원가입 화면 | 실습 | 10분 |
| S8-P28-03 접근 제어와 인증 흐름 점검 | 실습 | 15분 |
| S8-P28-04 정리: 로그인 상태 공유와 접근 제어 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S8-P28-01. 로그인 상태 공유: Context

*실습, 20분*

로그인한 사용자 정보는 상단 메뉴, 상세 화면의 버튼, 접근 제어 등 여러 컴포넌트가 필요로 합니다. props로 여러 단계를 거쳐 전달하면 중간 컴포넌트까지 불필요한 props를 받아야 합니다. Context는 컴포넌트 트리의 위쪽에서 값을 제공하고, 아래쪽 어디서든 `useContext`로 바로 꺼내 쓰게 하는 React 기능입니다.

Context 객체와 그 값을 꺼내는 훅은 `src/auth/useAuth.js`에 둡니다. `AuthProvider` 바깥에서 `useAuth`를 호출하면 실수를 바로 알 수 있도록 오류를 던집니다.

`src/auth/useAuth.js`

```js
import { createContext, useContext } from 'react';

export const AuthContext = createContext(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth는 AuthProvider 안에서만 사용할 수 있습니다.');
  return context;
}
```

값을 제공하는 컴포넌트는 `src/auth/AuthProvider.jsx`입니다. 컴포넌트와 훅을 다른 파일로 나눈 이유는, Vite의 HMR이 "컴포넌트만 내보내는 파일"에서 가장 안정적으로 동작하기 때문입니다.

`src/auth/AuthProvider.jsx`

```jsx
import { useCallback, useEffect, useMemo, useState } from 'react';
import * as authApi from '../api/auth';
import { setOnAuthExpired } from '../api/client';
import { tokenStore } from './tokenStore';
import { AuthContext } from './useAuth';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { id, email, role }
  // 리프레시 토큰이 남아 있을 때만 "확인 중" 상태로 시작합니다.
  const [initializing, setInitializing] = useState(() => Boolean(tokenStore.getRefresh()));

  const loadMe = useCallback(async () => {
    const me = await authApi.fetchMe();
    setUser(me);
    return me;
  }, []);

  useEffect(() => {
    // 재발급까지 실패하면 client.js가 이 함수를 불러 로그인 상태를 지웁니다.
    setOnAuthExpired(() => setUser(null));
  }, []);

  // 새로고침 직후: 액세스 토큰은 메모리에서 사라졌지만 리프레시 토큰이 남아 있으면
  // /auth/me 호출이 401 -> 재발급 -> 재요청 흐름을 거쳐 로그인 상태를 되살립니다.
  useEffect(() => {
    if (!tokenStore.getRefresh()) return;
    loadMe()
      .catch(() => tokenStore.clear())
      .finally(() => setInitializing(false));
  }, [loadMe]);

  const login = useCallback(
    async (email, password) => {
      const tokens = await authApi.login(email, password);
      tokenStore.save(tokens);
      return loadMe();
    },
    [loadMe],
  );

  const logout = useCallback(async () => {
    const refreshToken = tokenStore.getRefresh();
    try {
      if (refreshToken) await authApi.logout(refreshToken);
    } finally {
      // 서버 호출이 실패해도 브라우저의 토큰은 반드시 지웁니다.
      tokenStore.clear();
      setUser(null);
    }
  }, []);

  const value = useMemo(
    () => ({ user, initializing, isAdmin: user?.role === 'admin', login, logout }),
    [user, initializing, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
```

`AuthProvider`의 동작을 정리합니다.

- `initializing`은 새로고침 직후 로그인 상태를 복원하는 동안 `true`입니다. 리프레시 토큰이 없으면 확인할 것이 없으므로 처음부터 `false`로 시작합니다. 이 값이 있어야 S8-P28-03의 보호 라우트가 "아직 확인 중"인 사용자를 로그인 화면으로 잘못 보내지 않습니다.
- 새로고침 후 복원은 별도 코드 없이 S8-P27-01의 인터셉터가 처리합니다. 메모리의 액세스 토큰이 없으니 `/auth/me`는 401을 받고, 인터셉터가 재발급 후 다시 요청합니다. Network 탭에서 `me`(401), `refresh`(200), `me`(200) 순서로 확인할 수 있습니다.
- 로그아웃은 `try...finally`로 작성해 서버 호출이 실패해도 브라우저의 토큰은 반드시 지웁니다.
- `isAdmin`은 `user.role === 'admin'`으로 계산해 함께 제공합니다.
- `login`과 `logout`을 `useCallback`으로, 제공하는 값을 `useMemo`로 감쌌습니다. Context 값이 매번 새 객체로 만들어지면 값을 쓰는 모든 컴포넌트가 불필요하게 다시 그려지므로, 실제로 바뀐 경우에만 새 값을 만들도록 한 것입니다.

마지막으로 `src/main.jsx`에서 앱을 `AuthProvider`로 감쌉니다. `AuthProvider`보다 바깥에 `BrowserRouter`를 두어, 인증 관련 컴포넌트에서도 라우터 기능을 쓸 수 있게 합니다.

`src/main.jsx`

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import AuthProvider from './auth/AuthProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
```

#### S8-P28-02. 로그인과 회원가입 화면

*실습, 10분*

**로그인: `src/pages/LoginPage.jsx`**

`src/pages/LoginPage.jsx`

```jsx
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../auth/useAuth';
import ErrorMessage from '../components/ErrorMessage';

// 로그인 뒤 돌아갈 주소는 앱 내부 경로만 허용합니다 (열린 리디렉션 방지).
function safeRedirect(path) {
  return typeof path === 'string' && path.startsWith('/') && !path.startsWith('//') ? path : '/';
}

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await login(email.trim(), password);
      navigate(safeRedirect(location.state?.from), { replace: true });
    } catch (err) {
      if (err.status === 401) {
        // 이메일과 비밀번호 중 무엇이 틀렸는지 알려 주지 않습니다.
        setError({ message: '이메일 또는 비밀번호가 올바르지 않습니다.' });
      } else if (err.status === 429) {
        const minutes = err.retryAfter ? Math.ceil(err.retryAfter / 60) : 15;
        setError({ message: `로그인 시도가 너무 많습니다. 약 ${minutes}분 뒤에 다시 시도해 주세요.` });
      } else {
        setError(err);
      }
    } finally {
      setPassword(''); // 실패하든 성공하든 비밀번호 입력값은 지웁니다.
      setSubmitting(false);
    }
  }

  return (
    <section className="narrow">
      <h1>로그인</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          이메일
          <input type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <ErrorMessage error={error} />
        <button type="submit" disabled={submitting}>로그인</button>
      </form>
      <p className="muted">
        계정이 없다면 <Link to="/signup">회원가입</Link>을 먼저 합니다.
      </p>
    </section>
  );
}
```

로그인 화면에는 보안과 사용성을 위한 장치가 여럿 들어 있습니다.

- 401 응답에는 "이메일 또는 비밀번호가 올바르지 않습니다."라는 하나의 메시지만 보여 줍니다. 어느 쪽이 틀렸는지 알려 주면 공격자가 가입된 이메일을 알아낼 수 있습니다. 백엔드도 같은 이유로 두 경우에 같은 오류(`INVALID_CREDENTIALS`)를 돌려줍니다.
- 429 응답은 백엔드 S10-P34의 로그인 잠금입니다. 같은 이메일로 5번 틀리면 15분(900초) 동안 잠기며, `Retry-After` 헤더로 남은 시간을 알려 줍니다. S5에서 `expose_headers`에 `Retry-After`를 추가했다면 그 값으로, 아니면 기본 15분으로 안내합니다.
- 시도가 끝나면 성공 여부와 관계없이 비밀번호 입력값을 지웁니다.
- `autoComplete="username"`, `"current-password"`, 회원가입의 `"new-password"`는 브라우저와 비밀번호 관리자가 칸의 용도를 정확히 알게 해 줍니다.
- 로그인 후에는 원래 가려던 화면(`location.state.from`)으로 돌려보냅니다. 이때 `safeRedirect`로 앱 내부 경로만 허용합니다. 이 검사가 필요한 이유는 S12의 열린 리디렉션에서 설명합니다.
- 제출 중에는 버튼을 비활성화해 중복 제출을 막습니다.

**회원가입: `src/pages/SignupPage.jsx`**

`src/pages/SignupPage.jsx`

```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signup } from '../api/auth';
import ErrorMessage from '../components/ErrorMessage';

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });
  const [error, setError] = useState(null);

  function handleChange(event) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (form.password !== form.confirm) {
      setError({ message: '비밀번호 확인이 일치하지 않습니다.' });
      return;
    }
    try {
      await signup(form.email.trim(), form.password);
      navigate('/login', { replace: true });
    } catch (err) {
      setError(err.status === 409 ? { message: '이미 가입된 이메일입니다.' } : err);
    }
  }

  return (
    <section className="narrow">
      <h1>회원가입</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          이메일
          <input name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          비밀번호
          <input name="password" type="password" autoComplete="new-password" value={form.password} onChange={handleChange} required />
        </label>
        <label>
          비밀번호 확인
          <input name="confirm" type="password" autoComplete="new-password" value={form.confirm} onChange={handleChange} required />
        </label>
        <ErrorMessage error={error} />
        <button type="submit">가입하기</button>
      </form>
    </section>
  );
}
```

비밀번호 확인 칸의 비교는 프론트엔드에서만 하는 편의 기능입니다. 백엔드는 비밀번호 한 개만 받습니다. 이미 가입된 이메일은 백엔드가 409(`DUPLICATE_EMAIL`)로 알려 주므로 그에 맞는 메시지로 바꿔 보여 줍니다.

#### S8-P28-03. 접근 제어와 인증 흐름 점검

*실습, 15분*

**보호 라우트: `src/auth/RequireAuth.jsx`**

로그인이 필요한 화면을 감싸는 컴포넌트입니다. 로그인하지 않았으면 현재 주소를 `state.from`에 담아 로그인 화면으로 보냅니다. `adminOnly`가 지정된 화면은 관리자만 볼 수 있습니다.

`src/auth/RequireAuth.jsx`

```jsx
import { Navigate, useLocation } from 'react-router';
import { useAuth } from './useAuth';

// 로그인하지 않은 사용자를 로그인 화면으로 보냅니다.
// 화면을 가리는 장치일 뿐이며, 실제 권한 검사는 백엔드가 합니다.
export default function RequireAuth({ children, adminOnly = false }) {
  const { user, initializing, isAdmin } = useAuth();
  const location = useLocation();

  if (initializing) return <p className="muted">로그인 상태를 확인하는 중입니다.</p>;
  if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  if (adminOnly && !isAdmin) return <p className="error">관리자만 사용할 수 있는 화면입니다.</p>;
  return children;
}
```

**레이아웃 완성: `src/components/Layout.jsx`**

S7의 레이아웃에 로그인 상태에 따른 메뉴와 계정 영역을 추가합니다. "도서 등록"과 "내 대여"는 로그인한 사용자에게, "관제 대시보드"는 관리자에게만 보입니다. 해당 화면은 S9과 S13에서 만들며, 그 전까지는 메뉴를 누르면 404 화면이 나옵니다.

`src/components/Layout.jsx`

```jsx
import { NavLink, Outlet, useNavigate } from 'react-router';
import { useAuth } from '../auth/useAuth';

export default function Layout() {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate('/');
  }

  return (
    <div className="app">
      <header className="topbar">
        <strong>도서 관리</strong>
        <nav>
          <NavLink to="/" end>도서 목록</NavLink>
          {user && <NavLink to="/books/new">도서 등록</NavLink>}
          {user && <NavLink to="/loans">내 대여</NavLink>}
          {isAdmin && <NavLink to="/dashboard">관제 대시보드</NavLink>}
        </nav>
        <div className="account">
          {user ? (
            <>
              <span>{user.email} ({user.role})</span>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            <>
              <NavLink to="/login">로그인</NavLink>
              <NavLink to="/signup">회원가입</NavLink>
            </>
          )}
        </div>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
```

여기서 반드시 기억해야 할 원칙이 있습니다. **메뉴를 숨기고 화면을 막는 것은 사용자 경험을 위한 장치일 뿐 보안 장치가 아닙니다.** 프론트엔드 코드는 사용자의 브라우저에서 실행되므로 누구나 고칠 수 있습니다. 개발자 도구로 `isAdmin`을 `true`로 바꾸면 관리자 메뉴가 보이게 할 수도 있습니다. 그래도 안전한 이유는 백엔드가 모든 요청에서 토큰을 검증하고 권한을 다시 확인하기 때문입니다(백엔드 S5-P17의 권한 표). 프론트엔드의 권한 처리는 "어차피 거절될 동작을 미리 숨겨 혼란을 줄이는 것"이 목적입니다.

**라우트 추가: `src/App.jsx`**

로그인과 회원가입 경로를 추가합니다.

`src/App.jsx`

```jsx
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import BookDetailPage from './pages/BookDetailPage';
import BookListPage from './pages/BookListPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookListPage />} />
        <Route path="books/:bookId" element={<BookDetailPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
```

다음 시나리오를 Network 탭과 Application 탭(Session Storage)을 함께 보며 확인합니다.

| 번호 | 동작 | 기대 결과 |
|---|---|---|
| 1 | 회원가입 후 로그인 | 상단에 이메일과 `(user)` 표시, Session Storage에 `book-admin.refresh` 저장 |
| 2 | 로그인 요청 확인 | `token` 요청의 Content-Type이 `application/x-www-form-urlencoded`, 사전 요청(OPTIONS) 없음 |
| 3 | `me` 요청 확인 | 요청 헤더에 `Authorization: Bearer ...`, 사전 요청 있음 (같은 요청의 사전 요청 결과는 `Access-Control-Max-Age` 동안 재사용되어 이후에는 생략될 수 있음) |
| 4 | 새로고침 | `me`(401), `refresh`(200), `me`(200) 순서로 요청 후 로그인 상태 유지 |
| 5 | 틀린 비밀번호 | "이메일 또는 비밀번호가 올바르지 않습니다." |
| 6 | 같은 이메일로 6번 이상 틀림 | 로그인 잠금 안내(429) |
| 7 | 관리자 계정으로 로그인 | "관제 대시보드" 메뉴 표시, 이메일 옆에 `(admin)` |
| 8 | 로그아웃 | `logout` 요청(204), Session Storage의 값 삭제 |
| 9 | Session Storage의 값을 아무 문자열로 바꾸고 새로고침 | 재발급 실패 후 로그아웃 상태 |
| 10 | 새 탭에서 같은 주소 열기 | 로그인되지 않은 상태 (sessionStorage는 탭마다 분리) |

3. 토큰 만료를 직접 확인하려면 백엔드의 액세스 토큰 유효 시간 설정(백엔드 S5-P16에서 정의한 설정값)을 1분으로 줄여 API를 다시 실행합니다. 로그인 후 1분 넘게 기다린 뒤 도서 상세 화면을 열면, Network 탭에서 401과 재발급, 재요청이 순서대로 일어나고 화면은 아무 일 없다는 듯이 정상적으로 표시됩니다. 확인 후 설정을 원래대로 돌립니다.

> 완성 코드: 막히면 예제 저장소의 `p28-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S8-P28-04. 정리: 로그인 상태 공유와 접근 제어

*정리, 5분*

- `AuthProvider`가 로그인 상태를 Context로 공유하고, 새로고침 후에는 재발급 흐름으로 상태를 복원합니다.
- 로그인 오류 메시지는 하나로 통일하고, 429 잠금은 `Retry-After`로 안내하며, 이동 주소는 내부 경로만 허용합니다.
- 메뉴 숨기기와 보호 라우트는 사용자 경험을 위한 장치이며, 실제 권한 검사는 백엔드가 합니다.

##### 확인 퀴즈

**Q1.** 프론트엔드에서 관리자 메뉴를 숨기는 것에 대한 설명으로 옳은 것은 무엇인가요?

1. 사용자 경험을 위한 장치이며 실제 권한 검사는 백엔드가 한다.
2. 토큰을 숨기는 기능이다.
3. CORS 설정을 대신한다.
4. 이것만으로 관리자 기능이 보호된다.

> 정답: 1번. 프론트엔드 코드는 조작될 수 있으므로 권한 판단은 항상 백엔드가 합니다.

**Q2.** 새로고침 직후 로그인 상태가 복원되는 과정으로 옳은 것은 무엇인가요?

1. 로그인 화면으로 보내 다시 로그인하게 한다.
2. 쿠키가 자동으로 복원한다.
3. localStorage의 액세스 토큰을 그대로 쓴다.
4. /auth/me가 401을 받으면 인터셉터가 리프레시 토큰으로 재발급한 뒤 다시 요청한다.

> 정답: 4번. 메모리의 액세스 토큰은 사라지지만 sessionStorage의 리프레시 토큰으로 복원합니다.

---

## S9. 쓰기 기능

*5일차 오전, 4시간*

> 섹션 목표: 도서 등록과 수정, 삭제, 표지 업로드, 대여와 반납을 구현하고 백엔드의 업무 규칙 오류를 사용자에게 안내합니다.

### S9-P29. 등록과 수정 폼

> 학습 목표: 입력값을 백엔드 규칙으로 검증하고 API 본문으로 변환해 도서를 등록하고, 바뀐 필드만 보내 수정할 수 있습니다.
>
> 완성 코드 브랜치: `p29-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S9-P29-01 쓰기 화면의 공통 원칙 | 주요 개념 | 10분 |
| S9-P29-02 도서 등록과 수정 폼 | 실습 | 35분 |
| S9-P29-03 정리: 등록과 수정 폼 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S9-P29-01. 쓰기 화면의 공통 원칙

*주요 개념, 10분*

조회 화면은 받은 데이터를 보여 주기만 하면 되지만, 쓰기 화면은 사용자의 입력을 서버의 규칙에 맞게 바꿔 보내고 실패를 설명해야 합니다. 이 장의 모든 화면은 다음 원칙을 따릅니다.

1. **검증은 두 번 합니다.** 프론트엔드 검증은 사용자에게 빨리 알려 주기 위한 것이고, 백엔드 검증은 데이터를 지키기 위한 것입니다. 프론트엔드 검증을 통과했더라도 백엔드가 거절할 수 있다는 전제로 오류를 처리합니다.
2. **화면의 값과 API의 값을 구분합니다.** 입력 칸의 값은 모두 문자열이고, 빈 칸은 빈 문자열입니다. API는 정수, `null`, 생략을 구분합니다. 변환은 한 함수에 모읍니다.
3. **실패는 원인에 맞게 안내합니다.** 401은 로그인, 403은 권한, 404는 대상 없음, 409는 현재 상태와의 충돌, 422는 입력 오류입니다.
4. **처리 중에는 버튼을 막습니다.** 같은 요청이 두 번 전송되면 도서가 두 번 등록되거나 대여가 중복될 수 있습니다.

#### S9-P29-02. 도서 등록과 수정 폼

*실습, 35분*

등록과 수정은 입력 칸이 같으므로 하나의 컴포넌트로 만들고, 주소에 `bookId`가 있으면 수정, 없으면 등록으로 동작하게 합니다.

`src/pages/BookFormPage.jsx`

```jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { listAuthors } from '../api/authors';
import { createBook, getBook, updateBook } from '../api/books';
import ErrorMessage from '../components/ErrorMessage';

const EMPTY_FORM = { title: '', author_id: '', price: '', isbn: '' };

// 화면 입력값(문자열)을 API 본문(JSON)으로 바꿉니다.
function toPayload(form) {
  return {
    title: form.title.trim(),
    author_id: Number(form.author_id),
    price: Number(form.price),
    isbn: form.isbn.trim() === '' ? null : form.isbn.trim(),
  };
}

// 수정할 때는 바뀐 필드만 보냅니다 (PATCH).
function diff(original, payload) {
  const changes = {};
  if (payload.title !== original.title) changes.title = payload.title;
  if (payload.author_id !== original.author?.id) changes.author_id = payload.author_id;
  if (payload.price !== original.price) changes.price = payload.price;
  if (payload.isbn !== (original.isbn ?? null)) changes.isbn = payload.isbn;
  return changes;
}

// 백엔드 규칙과 같은 기준으로 먼저 확인해 사용자에게 빠르게 알려 줍니다.
function validate(form) {
  const errors = {};
  const title = form.title.trim();
  if (title.length < 1 || title.length > 100) errors.title = '제목은 1~100자로 입력합니다.';
  if (!form.author_id) errors.author_id = '저자를 고릅니다.';
  const price = Number(form.price);
  if (form.price === '' || !Number.isInteger(price) || price < 0 || price > 1_000_000)
    errors.price = '가격은 0~1,000,000 사이의 정수입니다.';
  if (form.isbn.trim() && !/^\d{13}$/.test(form.isbn.trim())) errors.isbn = 'ISBN은 숫자 13자리입니다.';
  return errors;
}

export default function BookFormPage() {
  const { bookId } = useParams(); // 있으면 수정, 없으면 등록
  const isEdit = Boolean(bookId);
  const navigate = useNavigate();

  const [authors, setAuthors] = useState([]);
  const [original, setOriginal] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const tasks = [listAuthors({}, controller.signal).then(setAuthors)];
    if (isEdit) {
      tasks.push(
        getBook(bookId, controller.signal).then((book) => {
          setOriginal(book);
          setForm({
            title: book.title,
            author_id: String(book.author?.id ?? ''),
            price: String(book.price),
            isbn: book.isbn ?? '',
          });
        }),
      );
    }
    Promise.all(tasks).catch((err) => {
      if (err.name !== 'CanceledError') setError(err);
    });
    return () => controller.abort();
  }, [bookId, isEdit]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const errors = validate(form);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSaving(true);
    setError(null);
    try {
      const payload = toPayload(form);
      const saved = isEdit ? await updateBook(bookId, diff(original, payload)) : await createBook(payload);
      navigate(`/books/${saved.id}`);
    } catch (err) {
      setError(err);
      setFieldErrors(err.fields ?? {}); // 422 응답의 칸별 메시지
    } finally {
      setSaving(false);
    }
  }

  return (
    <section>
      <h1>{isEdit ? '도서 수정' : '도서 등록'}</h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <label>
          제목
          <input name="title" value={form.title} onChange={handleChange} maxLength={100} />
          {fieldErrors.title && <small className="error">{fieldErrors.title}</small>}
        </label>
        <label>
          저자
          <select name="author_id" value={form.author_id} onChange={handleChange}>
            <option value="">저자를 고르세요</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
          {fieldErrors.author_id && <small className="error">{fieldErrors.author_id}</small>}
        </label>
        <label>
          가격(원)
          <input name="price" type="number" min="0" max="1000000" value={form.price} onChange={handleChange} />
          {fieldErrors.price && <small className="error">{fieldErrors.price}</small>}
        </label>
        <label>
          ISBN (선택)
          <input name="isbn" inputMode="numeric" value={form.isbn} onChange={handleChange} maxLength={13} />
          {fieldErrors.isbn && <small className="error">{fieldErrors.isbn}</small>}
        </label>
        <ErrorMessage error={error} />
        <button type="submit" disabled={saving}>
          {saving ? '저장 중' : '저장'}
        </button>
      </form>
    </section>
  );
}
```

**검증 규칙을 백엔드와 맞춥니다.** `validate` 함수는 S1-P3-03에서 정리한 `BookCreate` 규칙(제목 1~100자, 가격 0~1,000,000의 정수, ISBN 숫자 13자리)을 그대로 옮긴 것입니다. 폼에 `noValidate`를 붙여 브라우저 기본 검증 말풍선 대신 이 함수의 메시지를 칸 아래에 일관되게 보여 줍니다. 입력 칸의 `maxLength`, `min`, `max`도 함께 지정해 잘못된 입력을 애초에 줄입니다.

**`toPayload`로 화면 값을 API 본문으로 바꿉니다.** 저자 번호와 가격은 `Number`로 정수로 만들고, 비어 있는 ISBN은 빈 문자열이 아니라 `null`로 보냅니다. 빈 문자열을 그대로 보내면 백엔드의 "숫자 13자리" 규칙에 걸려 422가 됩니다.

**수정은 바뀐 필드만 보냅니다.** 백엔드의 `PATCH /books/{book_id}`는 `model_dump(exclude_unset=True)`로 요청에 들어 있는 필드만 반영합니다(백엔드 S4-P12). `diff` 함수는 원래 도서와 입력값을 비교해 달라진 필드만 담습니다. 이렇게 하면 다른 사람이 그사이 바꾼 필드를 내 화면의 오래된 값으로 덮어쓰는 일을 줄일 수 있고, 요청 본문만 보고도 무엇을 바꾸려 했는지 알 수 있습니다. 원래 도서의 저자는 `author.id`로 비교한다는 점에 주의합니다. 응답에는 `author_id`가 없고 `author` 객체가 있기 때문입니다.

**두 요청을 동시에 보냅니다.** 수정 화면은 저자 목록과 도서 정보가 모두 필요합니다. 두 요청은 서로 의존하지 않으므로 `Promise.all`로 동시에 보내 기다리는 시간을 줄입니다.

**서버 검증 오류를 칸에 표시합니다.** S6의 `ApiError`가 422 응답을 칸 이름별 메시지(`fields`)로 바꿔 두었으므로, 실패 시 `setFieldErrors(err.fields)`만 하면 백엔드의 메시지가 해당 칸 아래에 나타납니다. 409 `DUPLICATE_ISBN`이나 422 `INVALID_AUTHOR`처럼 백엔드가 직접 만든 오류는 폼 아래의 `ErrorMessage`에 메시지와 코드로 표시됩니다.

**권한 실패도 정상적인 결과입니다.** 일반 사용자가 남이 등록한 도서를 수정하면 백엔드가 403을 돌려줍니다. 수정 버튼을 소유자에게만 보이게 하려면 응답에 소유자 정보가 있어야 하는데, 백엔드의 `BookRead`가 이를 제공하지 않을 수 있으므로 이 화면은 403을 받아 "이 작업을 할 권한이 없습니다."로 안내합니다. S8에서 강조했듯이 최종 판단은 백엔드가 합니다.

등록과 수정 화면의 라우트를 로그인이 필요한 화면으로 등록합니다.

`src/App.jsx`

```jsx
import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import RequireAuth from './auth/RequireAuth';
import BookDetailPage from './pages/BookDetailPage';
import BookFormPage from './pages/BookFormPage';
import BookListPage from './pages/BookListPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookListPage />} />
        <Route path="books/:bookId" element={<BookDetailPage />} />
        <Route path="books/new" element={<RequireAuth><BookFormPage /></RequireAuth>} />
        <Route path="books/:bookId/edit" element={<RequireAuth><BookFormPage /></RequireAuth>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
```

확인할 내용은 다음과 같습니다.

1. 빈 폼으로 저장하면 요청 없이 제목, 저자, 가격 칸 아래에 오류 메시지가 나옵니다.
2. ISBN에 `123`을 넣으면 "ISBN은 숫자 13자리입니다."가 나옵니다.
3. 올바르게 입력해 저장하면 201 응답 뒤 새 도서의 상세 화면으로 이동합니다.
4. 이미 있는 ISBN으로 등록하면 409와 `DUPLICATE_ISBN`이 표시됩니다.
5. 내가 등록한 도서의 가격만 수정하면 Network 탭의 PATCH 본문이 `{"price": ...}` 하나뿐입니다.
6. 남이 등록한 도서를 일반 사용자로 수정하면 403 "이 작업을 할 권한이 없습니다."가 나옵니다.
7. 로그아웃한 상태에서 `/books/new`로 가면 로그인 화면으로 이동하고, 로그인하면 다시 등록 화면으로 돌아옵니다.

> 완성 코드: 막히면 예제 저장소의 `p29-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S9-P29-03. 정리: 등록과 수정 폼

*정리, 5분*

- 프론트엔드 검증은 빠른 안내를 위한 것이고, 백엔드가 거절할 수 있다는 전제로 오류를 처리합니다.
- 입력 칸의 문자열은 한 함수에서 API 본문(정수, `null`)으로 변환하고, PATCH는 바뀐 필드만 보냅니다.
- 422는 칸별 메시지로, 409는 업무 규칙 위반으로 구분해 안내합니다.

##### 확인 퀴즈

**Q1.** 도서 수정 화면에서 PATCH 본문에 바뀐 필드만 담는 이유는 무엇인가요?

1. 422 오류를 피하려고
2. 응답을 빠르게 받으려고
3. PATCH는 필드 하나만 받을 수 있어서
4. 다른 사람이 바꾼 필드를 오래된 값으로 덮어쓰는 일을 줄이기 위해서

> 정답: 4번. 백엔드는 요청에 들어 있는 필드만 반영하므로 바뀐 필드만 보내는 것이 안전합니다.

**Q2.** 비어 있는 ISBN 칸을 API로 보낼 때 알맞은 값은 무엇인가요?

1. 빈 문자열 ""
2. null
3. 0
4. "null"

> 정답: 2번. 빈 문자열은 숫자 13자리 규칙에 걸려 422가 됩니다. 값이 없음은 null로 표현합니다.

### S9-P30. 삭제와 표지 업로드

> 학습 목표: 되돌릴 수 없는 삭제를 안전하게 처리하고, 표지 파일을 미리 검사해 멀티파트로 업로드할 수 있습니다.
>
> 완성 코드 브랜치: `p30-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S9-P30-01 상세 화면에 삭제와 표지 업로드 추가 | 실습 | 30분 |
| S9-P30-02 삭제와 업로드 확인 | 실습 | 15분 |
| S9-P30-03 정리: 삭제와 표지 업로드 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S9-P30-01. 상세 화면에 삭제와 표지 업로드 추가

*실습, 30분*

S7-P24의 상세 화면에 로그인한 사용자를 위한 동작 버튼(수정, 표지 올리기, 삭제)을 추가합니다. 파일 전체를 다음과 같이 바꿉니다.

`src/pages/BookDetailPage.jsx`

```jsx
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { deleteBook, getBook, uploadCover } from '../api/books';
import { toAssetUrl } from '../api/client';
import { useAuth } from '../auth/useAuth';
import ErrorMessage from '../components/ErrorMessage';

const ALLOWED_EXT = ['.jpg', '.jpeg', '.png'];
const MAX_BYTES = 2 * 1024 * 1024;

// 업로드 전에 브라우저에서 미리 확인합니다. 사용자 편의를 위한 검사이며
// 최종 판단(415, 413, 422)은 백엔드가 합니다.
function precheckCover(file) {
  const name = file.name.toLowerCase();
  if (!ALLOWED_EXT.some((ext) => name.endsWith(ext))) return 'jpg, jpeg, png 파일만 올릴 수 있습니다.';
  if (file.size === 0) return '빈 파일입니다.';
  if (file.size > MAX_BYTES) return '2MB 이하 파일만 올릴 수 있습니다.';
  return null;
}

export default function BookDetailPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    getBook(bookId, controller.signal)
      .then(setBook)
      .catch((err) => {
        if (err.name !== 'CanceledError') setError(err);
      });
    return () => controller.abort();
  }, [bookId]);

  async function run(action, successMessage) {
    setBusy(true);
    setError(null);
    setNotice('');
    try {
      await action();
      if (successMessage) setNotice(successMessage);
    } catch (err) {
      setError(err);
    } finally {
      setBusy(false);
    }
  }

  function handleDelete() {
    if (!window.confirm(`"${book.title}" 도서를 삭제할까요? 되돌릴 수 없습니다.`)) return;
    run(async () => {
      await deleteBook(book.id);
      navigate('/', { replace: true });
    });
  }

  function handleCoverChange(event) {
    const file = event.target.files?.[0];
    event.target.value = ''; // 같은 파일을 다시 고를 수 있게 비웁니다.
    if (!file) return;
    const problem = precheckCover(file);
    if (problem) {
      setError({ message: problem });
      return;
    }
    run(async () => setBook(await uploadCover(book.id, file)), '표지를 바꿨습니다.');
  }

  if (error && !book) return <ErrorMessage error={error} />;
  if (!book) return <p className="muted">불러오는 중입니다.</p>;

  return (
    <section className="detail">
      <div className="cover">
        {book.cover_url ? (
          <img src={toAssetUrl(book.cover_url)} alt={`${book.title} 표지`} />
        ) : (
          <div className="cover-empty">표지 없음</div>
        )}
      </div>
      <div>
        <h1>{book.title}</h1>
        <dl className="meta">
          <dt>저자</dt>
          <dd>{book.author?.name}</dd>
          <dt>가격</dt>
          <dd>{book.price.toLocaleString('ko-KR')}원</dd>
          <dt>ISBN</dt>
          <dd>{book.isbn ?? '-'}</dd>
        </dl>

        <ErrorMessage error={error} />
        {notice && <p className="notice">{notice}</p>}

        {user ? (
          <div className="actions">
            <Link className="button" to={`/books/${book.id}/edit`}>수정</Link>
            <label className="button">
              표지 올리기
              <input type="file" accept=".jpg,.jpeg,.png" hidden onChange={handleCoverChange} />
            </label>
            <button className="danger" onClick={handleDelete} disabled={busy}>삭제</button>
          </div>
        ) : (
          <p className="muted">수정은 로그인 후 사용할 수 있습니다.</p>
        )}
      </div>
    </section>
  );
}
```

**공통 실행 함수 `run`.** 네 가지 동작 모두 "처리 중 표시, 이전 메시지 지우기, 실행, 오류 표시, 처리 중 해제"라는 같은 틀을 가지므로 하나의 함수로 묶었습니다.

**삭제.** 되돌릴 수 없는 동작이므로 `window.confirm`으로 한 번 더 확인합니다. 성공하면 204가 오며 본문이 없으므로, `deleteBook`은 응답 본문을 읽지 않습니다. 삭제 후에는 `navigate('/', { replace: true })`로 목록으로 이동합니다. `replace`를 쓰면 방문 기록에서 삭제된 도서의 상세 화면이 사라져, 뒤로 가기를 눌러 없는 도서를 다시 여는 일이 없습니다. 대여 기록이 있는 도서는 409 `BOOK_HAS_LOANS`로 거절됩니다.

**표지 업로드.** 파일 선택 칸은 `<label>` 안에 숨겨 버튼처럼 보이게 했습니다. 파일을 고르면 `precheckCover`가 백엔드와 같은 기준(확장자 `.jpg`, `.jpeg`, `.png`, 크기 2MB 이하, 빈 파일 금지)으로 먼저 검사합니다. 2MB 파일을 다 올린 뒤에 413을 받는 것보다 미리 알려 주는 편이 사용자와 서버 모두에게 낫습니다. 다만 확장자는 파일 이름일 뿐이라 얼마든지 속일 수 있으므로, 실제 파일 형식 검사는 백엔드의 몫입니다(백엔드 S9-P31). 업로드가 성공하면 응답으로 받은 도서 정보로 상태를 바꿔 새 표지가 바로 보이게 합니다. 처리가 끝나면 파일 칸의 값을 비워 같은 파일을 다시 고를 수 있게 합니다.

#### S9-P30-02. 삭제와 업로드 확인

*실습, 15분*

1. 내가 등록한 도서를 삭제하면 확인 창이 뜨고, 확인을 누르면 목록으로 이동합니다. 브라우저 뒤로 가기를 눌러도 삭제한 도서의 상세 화면으로 돌아가지 않는지 확인합니다.
2. 3MB 이미지나 `.gif` 파일을 표지로 고르면 요청 없이 안내 문구가 나옵니다.
3. 2MB 이하 PNG를 표지로 올리면 상세 화면에 새 표지가 바로 나타납니다.
4. 표지 업로드 요청을 Network 탭에서 열어 Request Headers의 `Content-Type`에 `boundary=`가 포함되어 있는지, Payload에 `file` 필드가 있는지 확인합니다.
5. 확장자를 `.png`로 바꾼 텍스트 파일을 올려 봅니다. 프론트엔드 검사는 통과하지만 백엔드가 거절하는지(백엔드 S9-P31의 파일 형식 검사) 확인합니다.

> 완성 코드: 막히면 예제 저장소의 `p30-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S9-P30-03. 정리: 삭제와 표지 업로드

*정리, 5분*

- 되돌릴 수 없는 동작은 한 번 더 확인하고, 삭제 후에는 `replace`로 이동해 없는 화면이 방문 기록에 남지 않게 합니다.
- 파일 업로드는 `FormData`로 보내고, 크기와 확장자는 미리 검사하되 최종 판단은 백엔드에 맡깁니다.
- 처리 중에는 버튼을 막아 같은 요청이 두 번 전송되지 않게 합니다.

##### 확인 퀴즈

**Q1.** 삭제 후 `navigate('/', { replace: true })`를 쓰는 이유는 무엇인가요?

1. 목록을 새로고침하려고
2. 방문 기록에서 삭제된 도서의 상세 화면을 지워 뒤로 가기로 돌아가지 않게 하려고
3. 백엔드에 삭제 요청을 다시 보내려고
4. 로그아웃하려고

> 정답: 2번. replace는 현재 기록을 새 주소로 바꿔 끼웁니다.

**Q2.** 표지 파일을 브라우저에서 미리 검사해도 백엔드 검사가 필요한 이유는 무엇인가요?

1. 브라우저 검사는 느려서
2. 확장자는 이름일 뿐이고 프론트엔드 검사는 우회할 수 있어서
3. FormData가 검사를 지원하지 않아서
4. 백엔드가 이미지를 압축해야 해서

> 정답: 2번. 실제 내용 검사는 서버가 해야 합니다.

### S9-P31. 대여, 반납과 시간대 처리

> 학습 목표: 대여와 반납을 구현해 업무 규칙 오류를 안내하고, 백엔드가 보낸 UTC 시각을 사용자의 시간대로 표시할 수 있습니다.
>
> 완성 코드 브랜치: `p31-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S9-P31-01 대여와 반납 API | 실습 | 10분 |
| S9-P31-02 상세 화면에 대여 버튼 추가 | 실습 | 15분 |
| S9-P31-03 내 대여 화면 | 실습 | 20분 |
| S9-P31-04 정리: 대여, 반납과 시간대 처리 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S9-P31-01. 대여와 반납 API

*실습, 10분*

`src/api/loans.js`

```js
import { api } from './client';

export async function borrowBook(bookId) {
  const { data } = await api.post('/loans', { book_id: bookId });
  return data;
}

export async function returnLoan(loanId) {
  const { data } = await api.post(`/loans/${loanId}/return`);
  return data;
}

export async function listMyLoans(signal) {
  const { data } = await api.get('/loans/me', { signal });
  return data;
}
```

대여 요청 본문에는 `book_id`만 있습니다. 빌리는 사람은 백엔드가 토큰에서 알아냅니다. 백엔드 과정 S6-P21의 "흔한 실수" 가운데 하나가 본문으로 `user_id`를 받는 것이었는데, 프론트엔드도 같은 원칙을 따릅니다. 사용자를 식별하는 값을 요청 본문으로 보내지 않습니다.

#### S9-P31-02. 상세 화면에 대여 버튼 추가

*실습, 15분*

상세 화면에 "대여하기" 버튼을 추가합니다. 바뀌는 곳은 `borrowBook`을 가져오는 줄, `handleBorrow` 함수, 버튼 한 줄입니다. 파일 전체는 다음과 같습니다.

`src/pages/BookDetailPage.jsx`

```jsx
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { deleteBook, getBook, uploadCover } from '../api/books';
import { toAssetUrl } from '../api/client';
import { borrowBook } from '../api/loans';
import { useAuth } from '../auth/useAuth';
import ErrorMessage from '../components/ErrorMessage';

const ALLOWED_EXT = ['.jpg', '.jpeg', '.png'];
const MAX_BYTES = 2 * 1024 * 1024;

// 업로드 전에 브라우저에서 미리 확인합니다. 사용자 편의를 위한 검사이며
// 최종 판단(415, 413, 422)은 백엔드가 합니다.
function precheckCover(file) {
  const name = file.name.toLowerCase();
  if (!ALLOWED_EXT.some((ext) => name.endsWith(ext))) return 'jpg, jpeg, png 파일만 올릴 수 있습니다.';
  if (file.size === 0) return '빈 파일입니다.';
  if (file.size > MAX_BYTES) return '2MB 이하 파일만 올릴 수 있습니다.';
  return null;
}

export default function BookDetailPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    getBook(bookId, controller.signal)
      .then(setBook)
      .catch((err) => {
        if (err.name !== 'CanceledError') setError(err);
      });
    return () => controller.abort();
  }, [bookId]);

  async function run(action, successMessage) {
    setBusy(true);
    setError(null);
    setNotice('');
    try {
      await action();
      if (successMessage) setNotice(successMessage);
    } catch (err) {
      setError(err);
    } finally {
      setBusy(false);
    }
  }

  function handleBorrow() {
    run(() => borrowBook(book.id), '대여했습니다. 내 대여 화면에서 확인할 수 있습니다.');
  }

  function handleDelete() {
    if (!window.confirm(`"${book.title}" 도서를 삭제할까요? 되돌릴 수 없습니다.`)) return;
    run(async () => {
      await deleteBook(book.id);
      navigate('/', { replace: true });
    });
  }

  function handleCoverChange(event) {
    const file = event.target.files?.[0];
    event.target.value = ''; // 같은 파일을 다시 고를 수 있게 비웁니다.
    if (!file) return;
    const problem = precheckCover(file);
    if (problem) {
      setError({ message: problem });
      return;
    }
    run(async () => setBook(await uploadCover(book.id, file)), '표지를 바꿨습니다.');
  }

  if (error && !book) return <ErrorMessage error={error} />;
  if (!book) return <p className="muted">불러오는 중입니다.</p>;

  return (
    <section className="detail">
      <div className="cover">
        {book.cover_url ? (
          <img src={toAssetUrl(book.cover_url)} alt={`${book.title} 표지`} />
        ) : (
          <div className="cover-empty">표지 없음</div>
        )}
      </div>
      <div>
        <h1>{book.title}</h1>
        <dl className="meta">
          <dt>저자</dt>
          <dd>{book.author?.name}</dd>
          <dt>가격</dt>
          <dd>{book.price.toLocaleString('ko-KR')}원</dd>
          <dt>ISBN</dt>
          <dd>{book.isbn ?? '-'}</dd>
        </dl>

        <ErrorMessage error={error} />
        {notice && <p className="notice">{notice}</p>}

        {user ? (
          <div className="actions">
            <button onClick={handleBorrow} disabled={busy}>대여하기</button>
            <Link className="button" to={`/books/${book.id}/edit`}>수정</Link>
            <label className="button">
              표지 올리기
              <input type="file" accept=".jpg,.jpeg,.png" hidden onChange={handleCoverChange} />
            </label>
            <button className="danger" onClick={handleDelete} disabled={busy}>삭제</button>
          </div>
        ) : (
          <p className="muted">대여와 수정은 로그인 후 사용할 수 있습니다.</p>
        )}
      </div>
    </section>
  );
}
```

**대여.** 성공하면 안내 문구를 보여 줍니다. 실패하면 백엔드의 오류 코드가 그대로 표시됩니다. 대여에서 만날 수 있는 409 오류는 다음과 같습니다.

| 오류 코드 | 의미 | 사용자가 할 일 |
|---|---|---|
| `ALREADY_LOANED` | 이미 빌린 도서 | 내 대여 화면 확인 |
| `LOAN_LIMIT_EXCEEDED` | 동시에 빌릴 수 있는 3권 초과 | 다른 도서 반납 후 다시 시도 |
| `OUT_OF_STOCK` | 재고 없음 | 나중에 다시 시도 |

#### S9-P31-03. 내 대여 화면

*실습, 20분*

`src/pages/MyLoansPage.jsx`

```jsx
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { listMyLoans, returnLoan } from '../api/loans';
import ErrorMessage from '../components/ErrorMessage';

// 백엔드는 UTC로 저장합니다. 화면에서는 사용자의 시간대로 보여 줍니다.
// 시간대 표시(Z 또는 +09:00)가 없는 문자열은 브라우저가 현지 시각으로 해석하므로
// UTC임을 나타내는 Z를 붙여 줍니다.
const dateFormat = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'short' });
function formatDate(iso) {
  if (!iso) return '-';
  const hasZone = /(Z|[+-]\d{2}:\d{2})$/.test(iso);
  return dateFormat.format(new Date(hasZone ? iso : `${iso}Z`));
}

export default function MyLoansPage() {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState(null);

  const load = useCallback((signal) => {
    return listMyLoans(signal)
      .then(setLoans)
      .catch((err) => {
        if (err.name !== 'CanceledError') setError(err);
      });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal);
    return () => controller.abort();
  }, [load]);

  async function handleReturn(loanId) {
    setError(null);
    try {
      await returnLoan(loanId);
      await load();
    } catch (err) {
      setError(err);
    }
  }

  const active = loans.filter((loan) => !loan.returned_at);

  return (
    <section>
      <h1>내 대여</h1>
      <p className="muted">현재 대여 중 {active.length}권 / 최대 3권</p>
      <ErrorMessage error={error} />
      <table className="table">
        <thead>
          <tr>
            <th>도서</th>
            <th>대여 시각</th>
            <th>반납 시각</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>
                <Link to={`/books/${loan.book.id}`}>{loan.book.title}</Link>
              </td>
              <td>{formatDate(loan.loaned_at)}</td>
              <td>{formatDate(loan.returned_at)}</td>
              <td>{!loan.returned_at && <button onClick={() => handleReturn(loan.id)}>반납</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
```

**목록 불러오기를 함수로 분리했습니다.** 반납에 성공하면 목록을 다시 불러와야 하므로, 처음 불러올 때와 반납 후에 같은 `load` 함수를 씁니다. 반납 응답으로 받은 대여 한 건만 목록에서 바꿔 끼우는 방법도 있지만, 서버의 최신 상태를 다시 받는 쪽이 단순하고 확실합니다.

**UTC 시각을 올바르게 표시합니다.** 백엔드는 대여와 반납 시각을 UTC로 저장합니다(백엔드 S6-P21). 응답 문자열에 `Z`나 `+00:00` 같은 시간대 표시가 있으면 `new Date()`가 UTC로 정확히 해석하고, `Intl.DateTimeFormat`이 사용자의 시간대(한국이면 UTC+9)로 바꿔 보여 줍니다. 그런데 백엔드가 시간대 정보 없는 값(`"2026-11-23T06:58:12"`)을 보내면 브라우저는 이를 현지 시각으로 해석해 9시간 이른 시각을 표시합니다. `formatDate`는 시간대 표시가 없으면 `Z`를 붙여 UTC임을 분명히 합니다. S2에서 "JSON에는 날짜 자료형이 없다"고 한 것이 실제 문제로 나타나는 대표적인 예입니다.

**상태를 계산으로 얻습니다.** "현재 대여 중인 권수"는 따로 state로 두지 않고 `loans`에서 `returned_at`이 없는 것을 세어 계산합니다. 같은 정보를 두 곳에 두면 한쪽만 바뀌는 불일치가 생기기 쉽습니다.

등록, 수정, 내 대여 화면을 `RequireAuth`로 감싸 등록합니다. `books/new`와 `books/:bookId`는 둘 다 `books/` 다음에 한 단어가 오는 모양이지만, React Router는 고정된 경로(`new`)를 변수 경로보다 먼저 고르므로 순서와 관계없이 올바르게 동작합니다.

`src/App.jsx`

```jsx
import { Route, Routes } from 'react-router';
import RequireAuth from './auth/RequireAuth';
import Layout from './components/Layout';
import BookDetailPage from './pages/BookDetailPage';
import BookFormPage from './pages/BookFormPage';
import BookListPage from './pages/BookListPage';
import LoginPage from './pages/LoginPage';
import MyLoansPage from './pages/MyLoansPage';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookListPage />} />
        <Route path="books/:bookId" element={<BookDetailPage />} />
        <Route path="books/new" element={<RequireAuth><BookFormPage /></RequireAuth>} />
        <Route path="books/:bookId/edit" element={<RequireAuth><BookFormPage /></RequireAuth>} />
        <Route path="loans" element={<RequireAuth><MyLoansPage /></RequireAuth>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
```

> 완성 코드: 막히면 예제 저장소의 `p31-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S9-P31-04. 정리: 대여, 반납과 시간대 처리

*정리, 5분*

- 대여 요청에는 `book_id`만 보내고, 빌리는 사람은 백엔드가 토큰에서 알아냅니다.
- 409 오류 코드마다 사용자가 할 일을 안내합니다.
- 시간대 표시가 없는 UTC 시각은 `Z`를 붙여 해석해야 사용자의 시간대로 올바르게 표시됩니다.

##### 확인 퀴즈

**Q1.** 백엔드가 `"2026-11-23T06:58:12"`처럼 시간대 없는 UTC 시각을 보냈습니다. 그대로 `new Date()`로 표시하면 한국에서는 어떻게 되나요?

1. 9시간 늦은 시각으로 표시된다.
2. 오류가 난다.
3. 정확히 표시된다.
4. 9시간 이른 시각으로 표시된다.

> 정답: 4번. 시간대 표시가 없으면 현지 시각으로 해석되므로 실제(UTC+9)보다 9시간 이른 시각이 표시됩니다.

**Q2.** 대여 요청 본문에 `user_id`를 넣지 않는 이유는 무엇인가요?

1. 사용자는 토큰으로 식별해야 하며, 본문의 값은 위조할 수 있어서
2. user_id가 비밀번호라서
3. CORS 사전 요청을 피하려고
4. 백엔드가 숫자를 받지 않아서

> 정답: 1번. 사용자를 식별하는 값을 요청 본문으로 받으면 다른 사람 이름으로 대여할 수 있습니다.

### S9-P32. 5일차 통합 실습

> 학습 목표: 역할에 따라 다른 기능을 제공하는 폼을 직접 구현하고, 쓰기 기능 전체를 시나리오로 점검할 수 있습니다.
>
> 완성 코드 브랜치: `p32-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S9-P32-01 관리자 저자 추가 기능 | 실습 | 25분 |
| S9-P32-02 쓰기 기능 종합 점검 | 실습 | 20분 |
| S9-P32-03 정리: 5일차 통합 실습 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S9-P32-01. 관리자 저자 추가 기능

*실습, 25분*

도서를 등록하려는데 저자가 목록에 없으면 관리자가 그 자리에서 저자를 추가할 수 있게 합니다. 먼저 아래 요구 사항만 보고 직접 구현해 본 뒤 예시 코드와 비교합니다.

- 관리자(`isAdmin`)에게만 "목록에 없는 저자 이름" 입력 칸과 "저자 추가" 버튼을 보여 줍니다.
- 추가에 성공하면 저자 선택 상자에 새 저자가 나타나고 바로 선택됩니다.
- 이미 있는 저자(409 `DUPLICATE_AUTHOR`)는 "이미 등록된 저자입니다."로 안내합니다.
- 저자 추가 버튼을 눌러도 도서 폼이 제출되면 안 됩니다.

`src/pages/BookFormPage.jsx`

```jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { createAuthor, listAuthors } from '../api/authors';
import { useAuth } from '../auth/useAuth';
import { createBook, getBook, updateBook } from '../api/books';
import ErrorMessage from '../components/ErrorMessage';

const EMPTY_FORM = { title: '', author_id: '', price: '', isbn: '' };

// 화면 입력값(문자열)을 API 본문(JSON)으로 바꿉니다.
function toPayload(form) {
  return {
    title: form.title.trim(),
    author_id: Number(form.author_id),
    price: Number(form.price),
    isbn: form.isbn.trim() === '' ? null : form.isbn.trim(),
  };
}

// 수정할 때는 바뀐 필드만 보냅니다 (PATCH).
function diff(original, payload) {
  const changes = {};
  if (payload.title !== original.title) changes.title = payload.title;
  if (payload.author_id !== original.author?.id) changes.author_id = payload.author_id;
  if (payload.price !== original.price) changes.price = payload.price;
  if (payload.isbn !== (original.isbn ?? null)) changes.isbn = payload.isbn;
  return changes;
}

// 백엔드 규칙과 같은 기준으로 먼저 확인해 사용자에게 빠르게 알려 줍니다.
function validate(form) {
  const errors = {};
  const title = form.title.trim();
  if (title.length < 1 || title.length > 100) errors.title = '제목은 1~100자로 입력합니다.';
  if (!form.author_id) errors.author_id = '저자를 고릅니다.';
  const price = Number(form.price);
  if (form.price === '' || !Number.isInteger(price) || price < 0 || price > 1_000_000)
    errors.price = '가격은 0~1,000,000 사이의 정수입니다.';
  if (form.isbn.trim() && !/^\d{13}$/.test(form.isbn.trim())) errors.isbn = 'ISBN은 숫자 13자리입니다.';
  return errors;
}

export default function BookFormPage() {
  const { bookId } = useParams(); // 있으면 수정, 없으면 등록
  const isEdit = Boolean(bookId);
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [newAuthor, setNewAuthor] = useState('');
  const [authorError, setAuthorError] = useState(null);

  const [authors, setAuthors] = useState([]);
  const [original, setOriginal] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const tasks = [listAuthors({}, controller.signal).then(setAuthors)];
    if (isEdit) {
      tasks.push(
        getBook(bookId, controller.signal).then((book) => {
          setOriginal(book);
          setForm({
            title: book.title,
            author_id: String(book.author?.id ?? ''),
            price: String(book.price),
            isbn: book.isbn ?? '',
          });
        }),
      );
    }
    Promise.all(tasks).catch((err) => {
      if (err.name !== 'CanceledError') setError(err);
    });
    return () => controller.abort();
  }, [bookId, isEdit]);

  // 관리자만 저자를 등록할 수 있습니다(일반 사용자는 백엔드가 403으로 거절).
  async function handleAddAuthor() {
    const name = newAuthor.trim();
    if (!name) return;
    setAuthorError(null);
    try {
      const author = await createAuthor(name);
      setAuthors((prev) => [...prev, author]);
      setForm((prev) => ({ ...prev, author_id: String(author.id) })); // 새 저자를 바로 선택
      setNewAuthor('');
    } catch (err) {
      setAuthorError(err.status === 409 ? { message: '이미 등록된 저자입니다.' } : err);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const errors = validate(form);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSaving(true);
    setError(null);
    try {
      const payload = toPayload(form);
      const saved = isEdit ? await updateBook(bookId, diff(original, payload)) : await createBook(payload);
      navigate(`/books/${saved.id}`);
    } catch (err) {
      setError(err);
      setFieldErrors(err.fields ?? {}); // 422 응답의 칸별 메시지
    } finally {
      setSaving(false);
    }
  }

  return (
    <section>
      <h1>{isEdit ? '도서 수정' : '도서 등록'}</h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <label>
          제목
          <input name="title" value={form.title} onChange={handleChange} maxLength={100} />
          {fieldErrors.title && <small className="error">{fieldErrors.title}</small>}
        </label>
        <label>
          저자
          <select name="author_id" value={form.author_id} onChange={handleChange}>
            <option value="">저자를 고르세요</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
          {fieldErrors.author_id && <small className="error">{fieldErrors.author_id}</small>}
        </label>
        {isAdmin && (
          <div className="toolbar">
            <input placeholder="목록에 없는 저자 이름" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} />
            <button type="button" onClick={handleAddAuthor}>
              저자 추가
            </button>
            <ErrorMessage error={authorError} />
          </div>
        )}
        <label>
          가격(원)
          <input name="price" type="number" min="0" max="1000000" value={form.price} onChange={handleChange} />
          {fieldErrors.price && <small className="error">{fieldErrors.price}</small>}
        </label>
        <label>
          ISBN (선택)
          <input name="isbn" inputMode="numeric" value={form.isbn} onChange={handleChange} maxLength={13} />
          {fieldErrors.isbn && <small className="error">{fieldErrors.isbn}</small>}
        </label>
        <ErrorMessage error={error} />
        <button type="submit" disabled={saving}>
          {saving ? '저장 중' : '저장'}
        </button>
      </form>
    </section>
  );
}
```

구현에서 볼 부분은 다음과 같습니다.

- 저자 추가 버튼은 폼 안에 있으므로 `type="button"`을 지정했습니다. 지정하지 않으면 기본값 `submit`으로 동작해 도서 폼 전체가 제출됩니다.
- 저자 추가 오류는 도서 저장 오류와 따로 `authorError`로 관리합니다. 한 화면에 두 가지 동작이 있으면 오류 메시지도 동작 옆에 따로 보여야 사용자가 무엇이 실패했는지 압니다.
- 일반 사용자가 개발자 도구로 이 입력 칸을 드러내 요청을 보내도 백엔드가 403으로 거절합니다. 화면의 역할 구분은 편의 기능이라는 원칙이 여기서도 그대로입니다.

#### S9-P32-02. 쓰기 기능 종합 점검

*실습, 20분*

일반 사용자와 관리자 계정으로 각각 로그인해 다음을 확인합니다.

| 번호 | 동작 | 기대 결과 |
|---|---|---|
| 1 | 빈 폼으로 저장 | 제목, 저자, 가격 칸 아래 오류 메시지 (요청 없음) |
| 2 | ISBN에 `123` 입력 후 저장 | "ISBN은 숫자 13자리입니다." |
| 3 | 올바르게 입력해 저장 | 201 응답 후 새 도서의 상세 화면으로 이동 |
| 4 | 이미 있는 ISBN으로 등록 | 409, `DUPLICATE_ISBN` 표시 |
| 5 | 내가 등록한 도서의 가격만 수정 | Network 탭의 PATCH 본문이 `{"price": ...}` 하나뿐 |
| 6 | 남이 등록한 도서 수정 | 403 "이 작업을 할 권한이 없습니다." |
| 7 | 도서 대여 | 안내 문구 표시, 내 대여 화면에 추가 |
| 8 | 같은 도서 다시 대여 | 409, `ALREADY_LOANED` |
| 9 | 서로 다른 도서 4권 대여 | 네 번째에서 409, `LOAN_LIMIT_EXCEEDED` |
| 10 | 내 대여 화면에서 반납 | 반납 시각이 현재 한국 시각으로 표시, 반납 버튼 사라짐 |
| 11 | 대여 기록이 있는 도서 삭제 | 409, `BOOK_HAS_LOANS` |
| 12 | 3MB 이미지 또는 `.gif` 파일을 표지로 선택 | 요청 없이 안내 문구 표시 |
| 13 | 2MB 이하 PNG를 표지로 업로드 | 상세 화면에 새 표지 표시 |
| 14 | 관리자로 등록 화면에서 새 저자 추가 | 선택 상자에 추가되고 바로 선택됨 |
| 15 | 같은 이름으로 다시 추가 | "이미 등록된 저자입니다." |
| 16 | 일반 사용자로 등록 화면 열기 | 저자 추가 칸이 보이지 않음 |

브라우저의 검증을 우회했을 때 백엔드가 막는지도 확인합니다. Console에서 다음을 실행하면 프론트엔드 검증과 관계없이 백엔드가 422를 돌려줍니다.

```js
const { api } = await import('/src/api/client.js');
await api.post('/books', { title: '', author_id: 1, price: -1 }).catch((e) => console.log(e.status, e.fields));
```

모두 확인했으면 `P32: 쓰기 기능 통합 실습`으로 커밋합니다.

> 완성 코드: 막히면 예제 저장소의 `p32-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S9-P32-03. 정리: 5일차 통합 실습

*정리, 5분*

- 역할에 따라 다른 기능을 보여 주되, 권한 판단은 백엔드에 맡깁니다.
- 한 화면에 동작이 여럿이면 오류 상태도 동작별로 나눕니다.
- 폼 안의 보조 버튼은 `type="button"`으로 지정해 의도치 않은 제출을 막습니다.

##### 확인 퀴즈

**Q1.** 폼 안에 있는 "저자 추가" 버튼에 `type="button"`을 지정하지 않으면 어떻게 되나요?

1. 기본값 submit으로 동작해 도서 폼이 제출된다.
2. 클릭 이벤트가 발생하지 않는다.
3. 저자가 두 번 추가된다.
4. 버튼이 보이지 않는다.

> 정답: 1번. form 안의 button은 type을 지정하지 않으면 submit입니다.

**Q2.** 일반 사용자가 개발자 도구로 저자 추가 요청을 보내면 어떻게 되나요?

1. 화면에서 막혀 요청이 나가지 않는다.
2. 저자가 추가된다.
3. 요청은 나가지만 백엔드가 403으로 거절한다.
4. CORS 오류가 난다.

> 정답: 3번. 화면을 우회한 요청도 백엔드의 권한 검사를 통과할 수 없습니다.

---

## S10. 서버 상태 관리

*5일차 오후, 3시간*

> 섹션 목표: 반복되는 조회 코드를 커스텀 훅으로 줄이고, TanStack Query로 서버 데이터를 캐시하며 변경 후 화면을 일관되게 갱신합니다.

### S10-P33. 커스텀 훅으로 반복 줄이기

> 학습 목표: 반복되는 불러오기 코드를 커스텀 훅으로 추출하고, 그 한계를 설명할 수 있습니다.
>
> 완성 코드 브랜치: `p33-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S10-P33-01 반복 코드와 커스텀 훅 | 주요 개념 | 15분 |
| S10-P33-02 useAsync 훅 만들고 적용하기 | 실습 | 30분 |
| S10-P33-03 정리: 커스텀 훅으로 반복 줄이기 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S10-P33-01. 반복 코드와 커스텀 훅

*주요 개념, 15분*

지금까지 만든 목록, 상세, 내 대여 화면에는 거의 같은 코드가 반복됩니다.

```jsx
const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(() => {
  const controller = new AbortController();
  setLoading(true);
  someApi(params, controller.signal).then(setData).catch(/* 취소 구분 */).finally(/* 로딩 끝 */);
  return () => controller.abort();
}, [params]);
```

반복은 실수를 부릅니다. 어떤 화면은 취소를 빠뜨리고, 어떤 화면은 오류를 지우는 것을 잊습니다. React에서는 훅을 조합한 함수를 직접 만들어 이런 반복을 한곳에 모을 수 있습니다. 이름이 `use`로 시작하고 안에서 다른 훅을 부르는 함수를 커스텀 훅이라고 합니다.

커스텀 훅은 상태 자체를 공유하지 않습니다. 같은 훅을 두 화면에서 부르면 각 화면이 자기만의 state를 따로 갖습니다. 공유되는 것은 "상태를 다루는 방법"입니다. 그래서 목록 화면에서 불러온 도서를 상세 화면이 다시 쓰지는 못합니다. 이 한계는 다음 파트에서 TanStack Query로 해결합니다.

#### S10-P33-02. useAsync 훅 만들고 적용하기

*실습, 30분*

비동기 함수와 의존성 배열을 받아 `data`, `error`, `loading`, `reload`를 돌려주는 `useAsync` 훅을 만듭니다.

`src/hooks/useAsync.js`

```js
import { useCallback, useEffect, useState } from 'react';

// 비동기 함수 fn(signal)을 실행하고 data, error, loading 상태를 돌려줍니다.
// deps가 바뀌면 다시 실행하고, 이전 요청은 취소합니다. reload()로 다시 불러올 수 있습니다.
export function useAsync(fn, deps) {
  const [state, setState] = useState({ data: undefined, error: null, loading: true });
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState((prev) => ({ ...prev, loading: true, error: null }));
    fn(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) setState({ data, error: null, loading: false });
      })
      .catch((error) => {
        if (!controller.signal.aborted && error.name !== 'CanceledError') {
          setState((prev) => ({ ...prev, error, loading: false }));
        }
      });
    return () => controller.abort();
    // fn은 렌더링마다 새로 만들어지므로 의존성에서 뺍니다. 다시 실행할 조건은 deps로 정합니다.
  }, [...deps, version]); // eslint-disable-line react-hooks/exhaustive-deps

  const reload = useCallback(() => setVersion((v) => v + 1), []);
  return { ...state, reload };
}
```

훅의 동작은 S6-P21-03의 기본 패턴과 같습니다. 달라진 점은 두 가지입니다. 실행할 함수 `fn`을 밖에서 받고, `reload()`를 부르면 `version`이 바뀌어 같은 조건으로 다시 실행됩니다. 의존성 배열에서 `fn`을 뺀 이유는 주석에 적었습니다. 화면에서 `(signal) => listBooks(...)`처럼 매번 새 함수를 만들어 넘기므로, `fn`을 넣으면 그릴 때마다 다시 요청하는 무한 반복이 생깁니다.

목록 화면에 적용합니다. 두 개의 이펙트와 세 개의 state가 두 줄의 훅 호출로 바뀝니다.

`src/pages/BookListPage.jsx`

```jsx
import { useState } from 'react';
import { useAsync } from '../hooks/useAsync';
import { Link, useSearchParams } from 'react-router';
import { listAuthors } from '../api/authors';
import { listBooks } from '../api/books';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 10;
const SORT_OPTIONS = [
  { value: 'id', label: '등록순' },
  { value: 'price', label: '가격 낮은 순' },
  { value: '-price', label: '가격 높은 순' },
];

export default function BookListPage() {
  // 검색 조건을 URL에 두면 새로고침, 뒤로 가기, 주소 공유에도 화면이 유지됩니다.
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') ?? 'id';
  const skip = Number(searchParams.get('skip') ?? 0);
  const author = searchParams.get('author') ?? '';

  const q = searchParams.get('q') ?? '';
  const [keyword, setKeyword] = useState(q);

  // 반복되던 "불러오기, 로딩, 오류, 취소" 코드를 useAsync 훅 하나로 줄였습니다.
  const { data: authors = [] } = useAsync((signal) => listAuthors({}, signal), []);
  const {
    data: page,
    error,
    loading,
  } = useAsync((signal) => listBooks({ q, author, sort, skip, limit: PAGE_SIZE }, signal), [q, author, sort, skip]);

  function updateParams(changes) {
    const next = new URLSearchParams(searchParams);
    for (const [key, value] of Object.entries(changes)) {
      if (value === '' || value === null || value === undefined) next.delete(key);
      else next.set(key, String(value));
    }
    setSearchParams(next);
  }

  // 검색 버튼(또는 Enter)을 누르면 URL에 반영하고 첫 페이지부터 다시 봅니다.
  function handleSearch(event) {
    event.preventDefault();
    updateParams({ q: keyword.trim(), skip: '' });
  }

  return (
    <section>
      <h1>도서 목록</h1>
      <form className="toolbar" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="제목으로 검색"
          maxLength={50}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">검색</button>
        <select value={author} onChange={(e) => updateParams({ author: e.target.value, skip: '' })}>
          <option value="">모든 저자</option>
          {authors.map((a) => (
            <option key={a.id} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
        <select value={sort} onChange={(e) => updateParams({ sort: e.target.value, skip: '' })}>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>

      <ErrorMessage error={error} />
      {loading && <p className="muted">불러오는 중입니다.</p>}

      {page && !loading && page.items.length === 0 && <p>조건에 맞는 도서가 없습니다.</p>}
      {page && page.items.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>저자</th>
              <th className="num">가격</th>
            </tr>
          </thead>
          <tbody>
            {page.items.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>
                  <Link to={`/books/${book.id}`}>{book.title}</Link>
                </td>
                <td>{book.author?.name}</td>
                <td className="num">{book.price.toLocaleString('ko-KR')}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {page && (
        <Pagination
          total={page.total}
          skip={page.skip}
          limit={page.limit}
          onChange={(nextSkip) => updateParams({ skip: nextSkip })}
        />
      )}
    </section>
  );
}
```

상세 화면과 내 대여 화면도 같은 방식으로 바꿉니다. 표지 업로드나 반납처럼 서버 데이터를 바꾼 뒤에는 `reload()`로 최신 데이터를 다시 불러옵니다.

`src/pages/MyLoansPage.jsx`

```jsx
import { useState } from 'react';
import { useAsync } from '../hooks/useAsync';
import { Link } from 'react-router';
import { listMyLoans, returnLoan } from '../api/loans';
import ErrorMessage from '../components/ErrorMessage';

// 백엔드는 UTC로 저장합니다. 화면에서는 사용자의 시간대로 보여 줍니다.
// 시간대 표시(Z 또는 +09:00)가 없는 문자열은 브라우저가 현지 시각으로 해석하므로
// UTC임을 나타내는 Z를 붙여 줍니다.
const dateFormat = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'short' });
function formatDate(iso) {
  if (!iso) return '-';
  const hasZone = /(Z|[+-]\d{2}:\d{2})$/.test(iso);
  return dateFormat.format(new Date(hasZone ? iso : `${iso}Z`));
}

export default function MyLoansPage() {
  const { data: loans = [], error: loadError, reload } = useAsync((signal) => listMyLoans(signal), []);
  const [error, setError] = useState(null);

  async function handleReturn(loanId) {
    setError(null);
    try {
      await returnLoan(loanId);
      reload();
    } catch (err) {
      setError(err);
    }
  }

  const active = loans.filter((loan) => !loan.returned_at);

  return (
    <section>
      <h1>내 대여</h1>
      <p className="muted">현재 대여 중 {active.length}권 / 최대 3권</p>
      <ErrorMessage error={loadError ?? error} />
      <table className="table">
        <thead>
          <tr>
            <th>도서</th>
            <th>대여 시각</th>
            <th>반납 시각</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>
                <Link to={`/books/${loan.book.id}`}>{loan.book.title}</Link>
              </td>
              <td>{formatDate(loan.loaned_at)}</td>
              <td>{formatDate(loan.returned_at)}</td>
              <td>{!loan.returned_at && <button onClick={() => handleReturn(loan.id)}>반납</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
```

상세 화면(`BookDetailPage.jsx`)에서 바뀌는 곳은 다음과 같습니다. 전체 코드는 `p33-done` 브랜치에서 확인합니다.

```jsx
const { data: book, error: loadError, reload } = useAsync((signal) => getBook(bookId, signal), [bookId]);
// ...
run(async () => {
  await uploadCover(book.id, file);
  reload(); // 서버의 최신 정보로 다시 불러옵니다.
}, '표지를 바꿨습니다.');
```

확인할 내용은 다음과 같습니다.

1. 목록, 상세, 내 대여 화면이 이전과 똑같이 동작합니다. 리팩터링은 동작을 바꾸지 않는 것이 원칙입니다.
2. 목록에서 상세로 갔다가 뒤로 오면 목록을 다시 요청합니다(Network 탭). 방금 받은 데이터인데도 다시 받는 것이 이 방식의 한계입니다.
3. 반납 후 내 대여 화면은 갱신되지만, 같은 도서의 상세 화면이나 목록 화면은 반납 사실을 모릅니다. 서버 데이터를 화면마다 따로 들고 있기 때문입니다.

> 완성 코드: 막히면 예제 저장소의 `p33-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S10-P33-03. 정리: 커스텀 훅으로 반복 줄이기

*정리, 5분*

- 이름이 `use`로 시작하고 다른 훅을 부르는 함수로 반복되는 상태 로직을 추출할 수 있습니다.
- 커스텀 훅은 상태를 다루는 방법을 공유할 뿐, 상태 자체를 화면 사이에 공유하지 않습니다.
- 화면마다 서버 데이터를 따로 들고 있으면 중복 요청과 화면 사이의 불일치가 생깁니다.

##### 확인 퀴즈

**Q1.** 커스텀 훅에 대한 설명으로 옳은 것은 무엇인가요?

1. 조건문 안에서 호출해도 된다.
2. 같은 훅을 쓰는 화면은 state를 함께 쓴다.
3. 상태를 다루는 로직을 재사용하며, 화면마다 state는 따로 생긴다.
4. 이름은 자유롭게 지어도 된다.

> 정답: 3번. 커스텀 훅을 부르는 컴포넌트마다 독립된 state가 생깁니다. 이름은 use로 시작해야 훅 규칙 검사가 적용됩니다.

**Q2.** useAsync의 의존성 배열에서 fn을 뺀 이유는 무엇인가요?

1. fn은 항상 같은 함수라서
2. 화면이 그릴 때마다 새 함수를 넘기므로 넣으면 매번 다시 요청하게 되어서
3. 의존성 배열에는 함수를 넣을 수 없어서
4. fn은 비동기 함수라서

> 정답: 2번. 다시 실행할 조건은 호출하는 쪽이 deps로 명시합니다.

### S10-P34. TanStack Query로 조회 다루기

> 학습 목표: 서버 상태와 클라이언트 상태를 구분하고, TanStack Query로 조회 결과를 캐시해 화면 사이에서 공유할 수 있습니다.
>
> 완성 코드 브랜치: `p34-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S10-P34-01 서버 상태와 TanStack Query | 주요 개념 | 15분 |
| S10-P34-02 목록과 상세를 useQuery로 바꾸기 | 실습 | 30분 |
| S10-P34-03 정리: TanStack Query로 조회 다루기 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S10-P34-01. 서버 상태와 TanStack Query

*주요 개념, 15분*

화면의 상태는 두 종류로 나눌 수 있습니다.

| 구분 | 예 | 특징 |
|---|---|---|
| 클라이언트 상태 | 입력 중인 검색어, 열린 메뉴, 폼 값 | 브라우저 안에서만 존재하고, 내가 바꾸기 전에는 바뀌지 않습니다. |
| 서버 상태 | 도서 목록, 내 대여 목록, 헬스 체크 결과 | 원본이 서버에 있고, 다른 사용자가 언제든 바꿀 수 있어 내가 가진 것은 "어느 시점의 사본"입니다. |

서버 상태에는 클라이언트 상태에 없는 문제가 따라옵니다. 같은 데이터를 여러 화면이 요청하면 중복을 없애야 하고, 받은 지 오래된 사본은 다시 받아야 하며, 데이터를 바꾼 뒤에는 관련된 사본을 모두 낡은 것으로 처리해야 합니다. TanStack Query는 이 일을 맡는 라이브러리입니다.

| 개념 | 의미 | 이 과정의 설정 |
|---|---|---|
| 쿼리 키(`queryKey`) | 캐시를 구분하는 배열. 같은 키는 같은 데이터 | `['books', 'list', 조건]`, `['books', 'detail', id]` |
| 쿼리 함수(`queryFn`) | 데이터를 가져오는 함수. `signal`을 받아 취소에 쓴다 | 기존 API 함수를 그대로 사용 |
| 신선도(`staleTime`) | 이 시간 동안은 캐시를 최신으로 보고 다시 요청하지 않는다 | 30초 |
| 재시도(`retry`) | 실패 시 다시 시도할지 | 연결 실패와 5xx만 한 번 |
| 이전 데이터 유지(`placeholderData`) | 키가 바뀌어 새로 불러오는 동안 이전 결과를 보여 준다 | 목록 페이지 이동 |

쿼리 키를 계층으로 설계한 이유는 다음 파트에서 드러납니다. `['books']`로 무효화하면 목록과 상세가 모두, `['books', 'list']`로 무효화하면 목록만 낡은 것이 됩니다.

#### S10-P34-02. 목록과 상세를 useQuery로 바꾸기

*실습, 30분*

TanStack Query를 설치합니다.

```bash
npm install @tanstack/react-query
```

앱 전체가 함께 쓸 캐시(`QueryClient`)를 만들고, `main.jsx`에서 앱을 `QueryClientProvider`로 감쌉니다.

`src/queryClient.js`

```js
import { QueryClient } from '@tanstack/react-query';

// 앱 전체가 함께 쓰는 서버 상태 캐시입니다.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000, // 30초 동안은 캐시를 최신으로 보고 다시 요청하지 않습니다.
      refetchOnWindowFocus: false,
      // 4xx는 다시 보내도 결과가 같으므로 재시도하지 않고, 연결 실패와 5xx만 한 번 더 시도합니다.
      retry: (failureCount, error) => failureCount < 1 && (!error.status || error.status >= 500),
    },
  },
});
```

`src/main.jsx`

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import AuthProvider from './auth/AuthProvider.jsx';
import { queryClient } from './queryClient';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
```

목록 화면의 `useAsync`를 `useQuery`로 바꿉니다. 조건을 쿼리 키에 넣으면 조건이 바뀔 때 키가 바뀌어 새로 불러오고, 이전 조건으로 돌아오면 캐시에서 바로 보여 줍니다.

`src/pages/BookListPage.jsx`

```jsx
import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router';
import { listAuthors } from '../api/authors';
import { listBooks } from '../api/books';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 10;
const SORT_OPTIONS = [
  { value: 'id', label: '등록순' },
  { value: 'price', label: '가격 낮은 순' },
  { value: '-price', label: '가격 높은 순' },
];

export default function BookListPage() {
  // 검색 조건을 URL에 두면 새로고침, 뒤로 가기, 주소 공유에도 화면이 유지됩니다.
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') ?? 'id';
  const skip = Number(searchParams.get('skip') ?? 0);
  const author = searchParams.get('author') ?? '';

  const q = searchParams.get('q') ?? '';
  const [keyword, setKeyword] = useState(q);

  // queryKey가 같으면 캐시를 함께 씁니다. 조건이 바뀌면 키가 바뀌어 새로 불러옵니다.
  const { data: authors = [] } = useQuery({
    queryKey: ['authors'],
    queryFn: ({ signal }) => listAuthors({}, signal),
  });
  const {
    data: page,
    error,
    isPending: loading,
  } = useQuery({
    queryKey: ['books', 'list', { q, author, sort, skip }],
    queryFn: ({ signal }) => listBooks({ q, author, sort, skip, limit: PAGE_SIZE }, signal),
    placeholderData: keepPreviousData, // 다음 페이지를 불러오는 동안 이전 목록을 그대로 보여 줍니다.
  });

  function updateParams(changes) {
    const next = new URLSearchParams(searchParams);
    for (const [key, value] of Object.entries(changes)) {
      if (value === '' || value === null || value === undefined) next.delete(key);
      else next.set(key, String(value));
    }
    setSearchParams(next);
  }

  // 검색 버튼(또는 Enter)을 누르면 URL에 반영하고 첫 페이지부터 다시 봅니다.
  function handleSearch(event) {
    event.preventDefault();
    updateParams({ q: keyword.trim(), skip: '' });
  }

  return (
    <section>
      <h1>도서 목록</h1>
      <form className="toolbar" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="제목으로 검색"
          maxLength={50}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">검색</button>
        <select value={author} onChange={(e) => updateParams({ author: e.target.value, skip: '' })}>
          <option value="">모든 저자</option>
          {authors.map((a) => (
            <option key={a.id} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
        <select value={sort} onChange={(e) => updateParams({ sort: e.target.value, skip: '' })}>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>

      <ErrorMessage error={error} />
      {loading && <p className="muted">불러오는 중입니다.</p>}

      {page && !loading && page.items.length === 0 && <p>조건에 맞는 도서가 없습니다.</p>}
      {page && page.items.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>저자</th>
              <th className="num">가격</th>
            </tr>
          </thead>
          <tbody>
            {page.items.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>
                  <Link to={`/books/${book.id}`}>{book.title}</Link>
                </td>
                <td>{book.author?.name}</td>
                <td className="num">{book.price.toLocaleString('ko-KR')}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {page && (
        <Pagination
          total={page.total}
          skip={page.skip}
          limit={page.limit}
          onChange={(nextSkip) => updateParams({ skip: nextSkip })}
        />
      )}
    </section>
  );
}
```

상세 화면도 바꿉니다. 표지 업로드 응답으로 최신 도서 정보를 받으므로, 다시 요청하는 대신 `setQueryData`로 캐시를 바로 바꿉니다.

```jsx
const queryClient = useQueryClient();
const { data: book, error: loadError } = useQuery({
  queryKey: ['books', 'detail', bookId],
  queryFn: ({ signal }) => getBook(bookId, signal),
});
// 표지 업로드 성공 후
queryClient.setQueryData(['books', 'detail', bookId], updated);
```

확인할 내용은 다음과 같습니다.

1. 목록에서 2쪽으로 갔다가 1쪽으로 돌아오면 Network 탭에 요청이 없습니다. 30초 안에는 캐시를 씁니다.
2. 페이지를 넘기는 동안 표가 사라지지 않고 이전 목록이 보이다가 바뀝니다(`placeholderData`).
3. 상세 화면에서 목록으로 돌아올 때 다시 요청하지 않습니다.
4. 저자 목록(`['authors']`)은 한 번만 요청됩니다. 다음 파트에서 수정 화면도 같은 키를 쓰면 이 캐시를 함께 씁니다.
5. 백엔드를 멈춘 상태에서 목록을 열면 연결 실패는 한 번 재시도한 뒤 오류를 보여 줍니다. 4xx 오류(예: `/?sort=title`)는 재시도 없이 바로 보여 줍니다.

> 완성 코드: 막히면 예제 저장소의 `p34-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S10-P34-03. 정리: TanStack Query로 조회 다루기

*정리, 5분*

- 서버 상태는 서버에 원본이 있는 사본이므로 캐시, 중복 제거, 신선도 관리가 필요합니다.
- `useQuery`는 쿼리 키로 캐시를 구분하고, 조건을 키에 넣으면 조건별로 따로 캐시됩니다.
- 응답으로 최신 데이터를 받았다면 `setQueryData`로 캐시를 바로 바꿀 수 있습니다.

##### 확인 퀴즈

**Q1.** 목록 화면의 쿼리 키에 검색 조건을 넣는 이유는 무엇인가요?

1. URL을 자동으로 바꾸려고
2. 백엔드로 키가 전송되어서
3. 조건마다 캐시를 따로 두고, 조건이 바뀌면 새로 불러오게 하려고
4. 쿼리 키가 길수록 빨라서

> 정답: 3번. 같은 키는 같은 데이터입니다. 조건이 다르면 다른 키여야 합니다.

**Q2.** 4xx 오류를 재시도하지 않도록 설정한 이유는 무엇인가요?

1. 요청 자체의 문제라 다시 보내도 결과가 같아서
2. TanStack Query가 4xx를 지원하지 않아서
3. 재시도하면 CORS 오류가 나서
4. 4xx는 서버 장애라서

> 정답: 1번. 404나 422는 다시 보내도 같은 결과입니다. 일시적인 장애(연결 실패, 5xx)만 재시도합니다.

### S10-P35. 변경 요청과 캐시 무효화

> 학습 목표: useMutation으로 서버 데이터를 바꾸고, 관련 캐시를 무효화해 모든 화면을 일관되게 갱신할 수 있습니다.
>
> 완성 코드 브랜치: `p35-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S10-P35-01 useMutation과 캐시 무효화 | 주요 개념 | 10분 |
| S10-P35-02 대여, 반납, 삭제, 저장을 useMutation으로 | 실습 | 35분 |
| S10-P35-03 정리: 변경 요청과 캐시 무효화 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S10-P35-01. useMutation과 캐시 무효화

*주요 개념, 10분*

조회는 `useQuery`, 서버 데이터를 바꾸는 요청(등록, 수정, 삭제, 대여, 반납)은 `useMutation`으로 다룹니다. `useMutation`은 요청을 바로 보내지 않고, `mutate()`를 부를 때 보냅니다. 진행 상태(`isPending`), 오류(`error`), 성공 후 할 일(`onSuccess`)을 함께 관리합니다.

데이터를 바꾼 뒤에는 그 데이터를 담고 있던 캐시를 처리해야 합니다. 방법은 세 가지입니다.

| 방법 | 하는 일 | 이 과정에서 쓰는 곳 |
|---|---|---|
| `invalidateQueries({ queryKey })` | 해당 키로 시작하는 캐시를 낡은 것으로 표시. 화면에 보이는 것은 바로 다시 불러옴 | 대여 후 `['loans']`, 저장 후 `['books']` |
| `setQueryData(key, data)` | 응답으로 받은 최신 값을 캐시에 바로 넣음 | 표지 업로드 후 상세 |
| `removeQueries({ queryKey })` | 캐시를 아예 지움 | 삭제한 도서의 상세 |

하나 더 중요한 처리가 있습니다. 로그아웃하면 캐시 전체를 비워야 합니다. 그렇지 않으면 같은 브라우저에서 다음 사람이 로그인했을 때 앞 사람의 "내 대여 목록"이 잠시 보일 수 있습니다. 캐시는 성능 도구이지만 개인정보 보호와도 연결됩니다(S12).

#### S10-P35-02. 대여, 반납, 삭제, 저장을 useMutation으로

*실습, 35분*

상세 화면의 동작 세 가지(대여, 삭제, 표지 업로드)를 `useMutation`으로 바꿉니다. 표지 파일 검사 함수는 이 파일에서 내보내도록 했습니다(S12-P42에서 별도 파일로 옮깁니다).

`src/pages/BookDetailPage.jsx`

```jsx
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteBook, getBook, uploadCover } from '../api/books';
import { toAssetUrl } from '../api/client';
import { borrowBook } from '../api/loans';
import { useAuth } from '../auth/useAuth';
import ErrorMessage from '../components/ErrorMessage';

const ALLOWED_EXT = ['.jpg', '.jpeg', '.png'];
const MAX_BYTES = 2 * 1024 * 1024;

// 업로드 전에 브라우저에서 미리 확인합니다. 사용자 편의를 위한 검사이며
// 최종 판단(415, 413, 422)은 백엔드가 합니다.
export function precheckCover(file) {
  const name = file.name.toLowerCase();
  if (!ALLOWED_EXT.some((ext) => name.endsWith(ext))) return 'jpg, jpeg, png 파일만 올릴 수 있습니다.';
  if (file.size === 0) return '빈 파일입니다.';
  if (file.size > MAX_BYTES) return '2MB 이하 파일만 올릴 수 있습니다.';
  return null;
}

export default function BookDetailPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const detailKey = ['books', 'detail', bookId];
  const [notice, setNotice] = useState('');
  const [localError, setLocalError] = useState(null);

  const { data: book, error: loadError } = useQuery({
    queryKey: detailKey,
    queryFn: ({ signal }) => getBook(bookId, signal),
  });

  // 서버 데이터를 바꾸는 요청은 useMutation으로 다룹니다.
  const borrow = useMutation({
    mutationFn: () => borrowBook(book.id),
    onSuccess: () => {
      setNotice('대여했습니다. 내 대여 화면에서 확인할 수 있습니다.');
      queryClient.invalidateQueries({ queryKey: ['loans'] }); // 내 대여 목록 캐시를 낡은 것으로 표시
    },
  });
  const remove = useMutation({
    mutationFn: () => deleteBook(book.id),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: detailKey });
      queryClient.invalidateQueries({ queryKey: ['books', 'list'] });
      navigate('/', { replace: true });
    },
  });
  const cover = useMutation({
    mutationFn: (file) => uploadCover(book.id, file),
    onSuccess: (updated) => {
      queryClient.setQueryData(detailKey, updated); // 응답으로 받은 최신 정보를 바로 캐시에
      setNotice('표지를 바꿨습니다.');
    },
  });

  const busy = borrow.isPending || remove.isPending || cover.isPending;
  const error = localError ?? borrow.error ?? remove.error ?? cover.error;

  function start(mutation, variables) {
    setNotice('');
    setLocalError(null);
    [borrow, remove, cover].forEach((m) => m.reset()); // 이전 오류 메시지를 지웁니다.
    mutation.mutate(variables);
  }

  function handleDelete() {
    if (!window.confirm(`"${book.title}" 도서를 삭제할까요? 되돌릴 수 없습니다.`)) return;
    start(remove);
  }

  function handleCoverChange(event) {
    const file = event.target.files?.[0];
    event.target.value = ''; // 같은 파일을 다시 고를 수 있게 비웁니다.
    if (!file) return;
    const problem = precheckCover(file);
    if (problem) {
      setLocalError({ message: problem });
      return;
    }
    start(cover, file);
  }

  if (loadError) return <ErrorMessage error={loadError} />;
  if (!book) return <p className="muted">불러오는 중입니다.</p>;

  return (
    <section className="detail">
      <div className="cover">
        {book.cover_url ? (
          <img src={toAssetUrl(book.cover_url)} alt={`${book.title} 표지`} />
        ) : (
          <div className="cover-empty">표지 없음</div>
        )}
      </div>
      <div>
        <h1>{book.title}</h1>
        <dl className="meta">
          <dt>저자</dt>
          <dd>{book.author?.name}</dd>
          <dt>가격</dt>
          <dd>{book.price.toLocaleString('ko-KR')}원</dd>
          <dt>ISBN</dt>
          <dd>{book.isbn ?? '-'}</dd>
        </dl>

        <ErrorMessage error={error} />
        {notice && <p className="notice">{notice}</p>}

        {user ? (
          <div className="actions">
            <button onClick={() => start(borrow)} disabled={busy}>대여하기</button>
            <Link className="button" to={`/books/${book.id}/edit`}>수정</Link>
            <label className="button">
              표지 올리기
              <input type="file" accept=".jpg,.jpeg,.png" hidden onChange={handleCoverChange} />
            </label>
            <button className="danger" onClick={handleDelete} disabled={busy}>삭제</button>
          </div>
        ) : (
          <p className="muted">대여와 수정은 로그인 후 사용할 수 있습니다.</p>
        )}
      </div>
    </section>
  );
}
```

내 대여 화면은 조회를 `useQuery`로, 반납을 `useMutation`으로 바꿉니다. 반납에 성공하면 `['loans']` 캐시를 무효화해 목록을 다시 불러옵니다.

`src/pages/MyLoansPage.jsx`

```jsx
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router';
import { listMyLoans, returnLoan } from '../api/loans';
import ErrorMessage from '../components/ErrorMessage';

// 백엔드는 UTC로 저장합니다. 화면에서는 사용자의 시간대로 보여 줍니다.
// 시간대 표시(Z 또는 +09:00)가 없는 문자열은 브라우저가 현지 시각으로 해석하므로
// UTC임을 나타내는 Z를 붙여 줍니다.
const dateFormat = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'short' });
function formatDate(iso) {
  if (!iso) return '-';
  const hasZone = /(Z|[+-]\d{2}:\d{2})$/.test(iso);
  return dateFormat.format(new Date(hasZone ? iso : `${iso}Z`));
}

export default function MyLoansPage() {
  const queryClient = useQueryClient();
  const { data: loans = [], error: loadError } = useQuery({
    queryKey: ['loans', 'me'],
    queryFn: ({ signal }) => listMyLoans(signal),
  });

  // 반납에 성공하면 내 대여 목록을 다시 불러오도록 캐시를 무효화합니다.
  const giveBack = useMutation({
    mutationFn: (loanId) => returnLoan(loanId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['loans'] }),
  });

  const active = loans.filter((loan) => !loan.returned_at);

  return (
    <section>
      <h1>내 대여</h1>
      <p className="muted">현재 대여 중 {active.length}권 / 최대 3권</p>
      <ErrorMessage error={loadError ?? giveBack.error} />
      <table className="table">
        <thead>
          <tr>
            <th>도서</th>
            <th>대여 시각</th>
            <th>반납 시각</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>
                <Link to={`/books/${loan.book.id}`}>{loan.book.title}</Link>
              </td>
              <td>{formatDate(loan.loaned_at)}</td>
              <td>{formatDate(loan.returned_at)}</td>
              <td>{!loan.returned_at && <button onClick={() => giveBack.mutate(loan.id)} disabled={giveBack.isPending}>반납</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
```

등록, 수정 화면은 저장에 성공하면 `['books']` 전체를, 저자를 추가하면 `['authors']`를 무효화합니다. 바뀌는 곳은 다음과 같습니다.

```jsx
const queryClient = useQueryClient();
// 저장 성공 후
queryClient.invalidateQueries({ queryKey: ['books'] });
navigate(`/books/${saved.id}`);
// 저자 추가 성공 후
queryClient.invalidateQueries({ queryKey: ['authors'] });
```

마지막으로 `AuthProvider`의 로그아웃과 재발급 실패 처리에서 캐시를 비웁니다.

`src/auth/AuthProvider.jsx`

```jsx
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import * as authApi from '../api/auth';
import { setOnAuthExpired } from '../api/client';
import { tokenStore } from './tokenStore';
import { AuthContext } from './useAuth';

export default function AuthProvider({ children }) {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null); // { id, email, role }
  // 리프레시 토큰이 남아 있을 때만 "확인 중" 상태로 시작합니다.
  const [initializing, setInitializing] = useState(() => Boolean(tokenStore.getRefresh()));

  const loadMe = useCallback(async () => {
    const me = await authApi.fetchMe();
    setUser(me);
    return me;
  }, []);

  useEffect(() => {
    // 재발급까지 실패하면 client.js가 이 함수를 불러 로그인 상태를 지웁니다.
    setOnAuthExpired(() => {
      setUser(null);
      queryClient.clear();
    });
  }, [queryClient]);

  // 새로고침 직후: 액세스 토큰은 메모리에서 사라졌지만 리프레시 토큰이 남아 있으면
  // /auth/me 호출이 401 -> 재발급 -> 재요청 흐름을 거쳐 로그인 상태를 되살립니다.
  useEffect(() => {
    if (!tokenStore.getRefresh()) return;
    loadMe()
      .catch(() => tokenStore.clear())
      .finally(() => setInitializing(false));
  }, [loadMe]);

  const login = useCallback(
    async (email, password) => {
      const tokens = await authApi.login(email, password);
      tokenStore.save(tokens);
      return loadMe();
    },
    [loadMe],
  );

  const logout = useCallback(async () => {
    const refreshToken = tokenStore.getRefresh();
    try {
      if (refreshToken) await authApi.logout(refreshToken);
    } finally {
      // 서버 호출이 실패해도 브라우저의 토큰은 반드시 지웁니다.
      tokenStore.clear();
      setUser(null);
      // 다른 사용자가 같은 브라우저를 쓰더라도 이전 사용자의 데이터가 보이지 않게 캐시를 비웁니다.
      queryClient.clear();
    }
  }, [queryClient]);

  const value = useMemo(
    () => ({ user, initializing, isAdmin: user?.role === 'admin', login, logout }),
    [user, initializing, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
```

이제 `useAsync`를 쓰는 곳이 없으므로 `src/hooks/useAsync.js`를 지웁니다.

확인할 내용은 다음과 같습니다.

1. 상세 화면에서 대여한 뒤 "내 대여"로 가면 방금 빌린 도서가 바로 보입니다.
2. 도서 가격을 수정하고 목록으로 돌아오면 30초가 지나지 않았어도 바뀐 가격이 보입니다(무효화).
3. 반납 버튼을 누르는 동안 버튼이 비활성화되고, 반납 후 목록이 갱신됩니다.
4. 사용자 A로 로그인해 내 대여를 본 뒤 로그아웃하고 사용자 B로 로그인합니다. B의 내 대여 화면에 A의 목록이 잠깐이라도 보이지 않는지 확인합니다.

> 완성 코드: 막히면 예제 저장소의 `p35-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S10-P35-03. 정리: 변경 요청과 캐시 무효화

*정리, 5분*

- 서버 데이터를 바꾸는 요청은 `useMutation`으로 다루고 진행 상태와 오류를 함께 관리합니다.
- 변경 후에는 관련 캐시를 무효화하거나, 응답 값으로 바로 바꾸거나, 지웁니다. 계층형 쿼리 키가 범위 지정을 쉽게 합니다.
- 로그아웃할 때 캐시를 비워 다른 사용자에게 이전 사용자의 데이터가 보이지 않게 합니다.

##### 확인 퀴즈

**Q1.** 대여에 성공한 뒤 내 대여 목록이 바로 갱신되게 하는 방법으로 알맞은 것은 무엇인가요?

1. staleTime을 0으로 바꾼다.
2. 대여 응답을 localStorage에 저장한다.
3. 페이지를 새로고침한다.
4. `invalidateQueries({ queryKey: ['loans'] })`로 캐시를 낡은 것으로 표시한다.

> 정답: 4번. 무효화하면 해당 캐시를 쓰는 화면이 열릴 때(또는 열려 있으면 즉시) 다시 불러옵니다.

**Q2.** 로그아웃할 때 `queryClient.clear()`를 호출하는 이유는 무엇인가요?

1. 메모리 사용량을 줄이려고
2. 다음 사용자에게 이전 사용자의 데이터가 보이지 않게 하려고
3. 리프레시 토큰을 지우려고
4. 서버에 로그아웃을 알리려고

> 정답: 2번. 캐시에는 내 대여 목록처럼 사용자별 데이터가 남아 있습니다.

---

## S11. 프론트엔드 테스트

*6일차 오전, 4시간*

> 섹션 목표: Vitest, React Testing Library, MSW, Playwright로 함수부터 화면, 실제 브라우저까지 자동으로 검증합니다.

### S11-P36. 테스트 전략과 Vitest

> 학습 목표: 프론트엔드 테스트의 종류와 역할을 구분하고, Vitest로 순수 함수를 테스트할 수 있습니다.
>
> 완성 코드 브랜치: `p36-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S11-P36-01 프론트엔드 테스트 전략 | 주요 개념 | 15분 |
| S11-P36-02 Vitest 설정과 첫 테스트 | 실습 | 30분 |
| S11-P36-03 정리: 테스트 전략과 Vitest | 정리 | 5분 |
| 휴식 | | 10분 |

#### S11-P36-01. 프론트엔드 테스트 전략

*주요 개념, 15분*

지금까지는 화면을 직접 눌러 보며 확인했습니다. 기능이 늘수록 이 방법은 느리고, 고친 곳과 상관없어 보이는 곳이 깨지는 것을 놓치기 쉽습니다. 백엔드 과정 S7에서 pytest로 API를 자동 검증한 것처럼, 프론트엔드도 테스트를 코드로 남겨 언제든 다시 돌릴 수 있게 합니다.

프론트엔드 테스트는 범위에 따라 세 층으로 나눕니다.

| 종류 | 대상 | 도구 | 속도 | 이 과정의 예 |
|---|---|---|---|---|
| 단위 테스트 | 화면과 무관한 순수 함수 | Vitest | 매우 빠름 | 오류 변환, 날짜 표시, 폼 검증, 지표 계산 |
| 컴포넌트 테스트 | 컴포넌트 하나 또는 화면 하나 | Vitest + React Testing Library (+ MSW) | 빠름 | 페이지 이동 버튼, 로그인 오류 안내, 목록 화면 |
| E2E 테스트 | 실제 브라우저에서 여러 화면을 거치는 흐름 | Playwright | 느림 | 목록에서 상세로 이동, 로그인 후 이동 |

아래로 갈수록 실제 사용과 가깝지만 느리고 깨지기 쉽습니다. 그래서 단위 테스트를 가장 많이, E2E 테스트를 가장 적게 두는 것이 일반적입니다. 무엇을 테스트할지는 다음 기준으로 고릅니다.

- 규칙이 있는 곳: 백엔드 규칙과 맞춰야 하는 폼 검증, 시간대 변환, 오류 코드별 안내
- 실수하기 쉬운 곳: 페이지 계산, 재발급 흐름, 경계값(0, 빈 목록, 최댓값)
- 깨지면 사용자가 바로 아는 곳: 로그인, 목록에서 상세로 가는 핵심 흐름

반대로 라이브러리 자체의 동작(React Router가 주소를 바꾸는지)이나 스타일은 테스트하지 않습니다.

테스트하기 쉬운 코드는 구조부터 다릅니다. 컴포넌트 안에 섞여 있던 검증과 변환 함수를 별도 파일로 꺼내면 화면을 그리지 않고도 빠르게 검사할 수 있습니다. 이번 파트에서 그 정리부터 합니다.

#### S11-P36-02. Vitest 설정과 첫 테스트

*실습, 30분*

Vitest는 Vite의 설정을 그대로 쓰는 테스트 도구입니다. 컴포넌트 테스트에 필요한 도구도 함께 설치합니다.

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

`vite.config.js`에 테스트 설정을 추가하고, 모든 테스트 전에 실행할 설정 파일을 만듭니다. 브라우저 대신 jsdom이라는 가짜 DOM 환경에서 실행합니다.

`vite.config.js`

```js
/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // 브라우저와 비슷한 DOM 환경에서 테스트합니다.
    setupFiles: './src/test/setup.js',
    include: ['src/**/*.test.{js,jsx}'],
  },
});
```

`src/test/setup.js`

```js
import '@testing-library/jest-dom/vitest'; // toBeInTheDocument 같은 DOM 전용 검사 함수
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// 날짜 표시 테스트가 컴퓨터마다 달라지지 않도록 시간대를 고정합니다.
process.env.TZ = 'Asia/Seoul';

afterEach(() => cleanup());
```

테스트에서는 실제 백엔드로 요청이 나가면 안 되므로 가짜 주소를 쓰는 `.env.test`를 만듭니다. Vitest는 `test` 모드로 실행되어 이 파일을 읽습니다.

`.env.test`

```dotenv
# 테스트(vitest)에서만 쓰는 값입니다. 실제 서버로 요청이 나가지 않도록 가짜 주소를 씁니다.
VITE_API_BASE_URL=http://api.test
```

`package.json`의 `scripts`에 두 줄을 추가합니다. `npm test`는 파일을 고칠 때마다 다시 실행하는 감시 모드, `npm run test:run`은 한 번 실행하고 끝나는 모드(CI용)입니다.

```json
"test": "vitest",
"test:run": "vitest run"
```

이제 테스트할 함수를 컴포넌트에서 꺼냅니다. 도서 폼의 검증과 변환은 `src/pages/bookForm.js`로, 날짜 표시는 `src/utils/date.js`로 옮기고, 원래 화면에서는 가져와 씁니다.

`src/pages/bookForm.js`

```js
// 도서 폼의 값 변환과 검증 규칙입니다. 화면과 분리해 두면 따로 테스트하기 쉽습니다.
export const EMPTY_FORM = { title: '', author_id: '', price: '', isbn: '' };

// 화면 입력값(문자열)을 API 본문(JSON)으로 바꿉니다.
export function toPayload(form) {
  return {
    title: form.title.trim(),
    author_id: Number(form.author_id),
    price: Number(form.price),
    isbn: form.isbn.trim() === '' ? null : form.isbn.trim(),
  };
}

// 수정할 때는 바뀐 필드만 보냅니다 (PATCH).
export function diff(original, payload) {
  const changes = {};
  if (payload.title !== original.title) changes.title = payload.title;
  if (payload.author_id !== original.author?.id) changes.author_id = payload.author_id;
  if (payload.price !== original.price) changes.price = payload.price;
  if (payload.isbn !== (original.isbn ?? null)) changes.isbn = payload.isbn;
  return changes;
}

// 백엔드 규칙과 같은 기준으로 먼저 확인해 사용자에게 빠르게 알려 줍니다.
export function validate(form) {
  const errors = {};
  const title = form.title.trim();
  if (title.length < 1 || title.length > 100) errors.title = '제목은 1~100자로 입력합니다.';
  if (!form.author_id) errors.author_id = '저자를 고릅니다.';
  const price = Number(form.price);
  if (form.price === '' || !Number.isInteger(price) || price < 0 || price > 1_000_000)
    errors.price = '가격은 0~1,000,000 사이의 정수입니다.';
  if (form.isbn.trim() && !/^\d{13}$/.test(form.isbn.trim())) errors.isbn = 'ISBN은 숫자 13자리입니다.';
  return errors;
}
```

`src/utils/date.js`

```js
// 백엔드는 UTC로 저장합니다. 화면에서는 사용자의 시간대로 보여 줍니다.
// 시간대 표시(Z 또는 +09:00)가 없는 문자열은 브라우저가 현지 시각으로 해석하므로
// UTC임을 나타내는 Z를 붙여 줍니다.
const dateFormat = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'short' });

export function parseServerDate(iso) {
  const hasZone = /(Z|[+-]\d{2}:\d{2})$/.test(iso);
  return new Date(hasZone ? iso : `${iso}Z`);
}

export function formatDate(iso) {
  if (!iso) return '-';
  return dateFormat.format(parseServerDate(iso));
}
```

테스트 파일은 대상 파일 옆에 `.test.js` 이름으로 둡니다. `describe`로 묶고, `it`마다 하나의 동작을 문장으로 적고, `expect`로 결과를 확인합니다.

`src/api/errors.test.js`

```js
import { describe, expect, it } from 'vitest';
import { ApiError, toApiError } from './errors';

describe('toApiError', () => {
  it('백엔드 AppError 형식에서 code와 message를 꺼낸다', () => {
    const error = toApiError(409, { code: 'DUPLICATE_ISBN', message: '이미 등록된 ISBN입니다.' });
    expect(error).toBeInstanceOf(ApiError);
    expect(error.status).toBe(409);
    expect(error.code).toBe('DUPLICATE_ISBN');
    expect(error.message).toBe('이미 등록된 ISBN입니다.');
  });

  it('FastAPI 검증 오류를 칸 이름별 메시지로 바꾼다', () => {
    const body = {
      detail: [
        { loc: ['body', 'title'], msg: 'String should have at least 1 character', type: 'string_too_short' },
        { loc: ['body', 'price'], msg: 'Input should be greater than or equal to 0', type: 'greater_than_equal' },
      ],
    };
    const error = toApiError(422, body);
    expect(error.code).toBe('VALIDATION_ERROR');
    expect(error.fields).toEqual({
      title: 'String should have at least 1 character',
      price: 'Input should be greater than or equal to 0',
    });
  });

  it('알 수 없는 형식이면 상태 코드별 기본 메시지를 쓴다', () => {
    expect(toApiError(500, null).message).toBe('서버에서 오류가 발생했습니다.');
    expect(toApiError(418, 'teapot').message).toBe('알 수 없는 오류가 발생했습니다.');
  });

  it('429 응답의 Retry-After 헤더를 숫자로 읽는다', () => {
    const error = toApiError(429, { code: 'TOO_MANY_ATTEMPTS', message: '잠김' }, { 'retry-after': '900' });
    expect(error.retryAfter).toBe(900);
  });
});
```

`src/utils/date.test.js`

```js
import { describe, expect, it } from 'vitest';
import { formatDate, parseServerDate } from './date';

describe('parseServerDate', () => {
  it('시간대 표시가 없으면 UTC로 해석한다', () => {
    expect(parseServerDate('2026-11-23T06:58:12').toISOString()).toBe('2026-11-23T06:58:12.000Z');
  });

  it('시간대 표시가 있으면 그대로 해석한다', () => {
    expect(parseServerDate('2026-11-23T15:58:12+09:00').toISOString()).toBe('2026-11-23T06:58:12.000Z');
  });
});

describe('formatDate', () => {
  it('UTC 시각을 한국 시간으로 표시한다', () => {
    expect(formatDate('2026-11-23T06:58:12')).toContain('오후 3:58');
  });

  it('값이 없으면 -를 표시한다', () => {
    expect(formatDate(null)).toBe('-');
  });
});
```

`src/pages/bookForm.test.js`

```js
import { describe, expect, it } from 'vitest';
import { diff, toPayload, validate } from './bookForm';

const valid = { title: ' 파이썬 입문 ', author_id: '1', price: '18000', isbn: '' };

describe('validate', () => {
  it('올바른 입력이면 오류가 없다', () => {
    expect(validate(valid)).toEqual({});
  });

  it('백엔드 BookCreate 규칙과 같은 기준으로 검사한다', () => {
    const errors = validate({ title: '', author_id: '', price: '-1', isbn: '123' });
    expect(Object.keys(errors).sort()).toEqual(['author_id', 'isbn', 'price', 'title']);
  });

  it('가격 상한은 1,000,000이다', () => {
    expect(validate({ ...valid, price: '1000000' }).price).toBeUndefined();
    expect(validate({ ...valid, price: '1000001' }).price).toBeDefined();
  });
});

describe('toPayload', () => {
  it('문자열 입력을 API 본문 형식으로 바꾼다', () => {
    expect(toPayload(valid)).toEqual({ title: '파이썬 입문', author_id: 1, price: 18000, isbn: null });
  });
});

describe('diff', () => {
  it('바뀐 필드만 담는다', () => {
    const original = { title: '파이썬 입문', author: { id: 1, name: '홍길동' }, price: 18000, isbn: null };
    expect(diff(original, toPayload({ ...valid, price: '20000' }))).toEqual({ price: 20000 });
  });
});
```

`npm test`로 실행합니다. 13개 테스트가 모두 통과하면 성공입니다. 이어서 일부러 실패를 만들어 봅니다. `bookForm.js`의 가격 상한을 `1_000_000`에서 `100_000`으로 바꾸면 어느 테스트가 어떤 메시지로 실패하는지 확인하고 되돌립니다. 테스트 이름을 문장으로 적어 두면 실패했을 때 무엇이 깨졌는지 바로 알 수 있습니다.

> 완성 코드: 막히면 예제 저장소의 `p36-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S11-P36-03. 정리: 테스트 전략과 Vitest

*정리, 5분*

- 단위 테스트를 가장 많이, E2E를 가장 적게 두고, 규칙이 있고 실수하기 쉬운 곳을 우선 테스트합니다.
- 컴포넌트 안의 검증과 변환 함수를 별도 파일로 꺼내면 화면 없이 빠르게 테스트할 수 있습니다.
- 테스트 환경은 시간대와 API 주소처럼 컴퓨터마다 다를 수 있는 값을 고정합니다.

##### 확인 퀴즈

**Q1.** 다음 중 단위 테스트로 검사하기 가장 알맞은 것은 무엇인가요?

1. 버튼의 색상
2. 로그인 후 목록 화면으로 이동하는 흐름
3. 폼 입력값을 API 본문으로 바꾸는 toPayload 함수
4. React Router가 주소를 바꾸는지

> 정답: 3번. 화면과 무관한 순수 함수는 단위 테스트로 빠르게 검증합니다.

**Q2.** 테스트 설정에서 시간대를 Asia/Seoul로 고정한 이유는 무엇인가요?

1. 실행하는 컴퓨터의 시간대에 따라 날짜 표시 결과가 달라지지 않게 하려고
2. Vitest의 기본값이 아니어서 오류가 나서
3. 백엔드가 한국 시간을 보내서
4. 한국 사용자만 쓰는 앱이라서

> 정답: 1번. CI 서버는 보통 UTC입니다. 환경에 따라 결과가 바뀌는 테스트는 믿을 수 없습니다.

### S11-P37. React Testing Library

> 학습 목표: 사용자가 화면을 쓰는 방식대로 요소를 찾고 조작하는 컴포넌트 테스트를 작성할 수 있습니다.
>
> 완성 코드 브랜치: `p37-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S11-P37-01 사용자처럼 테스트하기 | 주요 개념 | 15분 |
| S11-P37-02 페이지 이동과 로그인 화면 테스트 | 실습 | 30분 |
| S11-P37-03 정리: React Testing Library | 정리 | 5분 |
| 휴식 | | 10분 |

#### S11-P37-01. 사용자처럼 테스트하기

*주요 개념, 15분*

React Testing Library는 "사용자가 화면을 쓰는 방식에 가까울수록 믿을 만한 테스트"라는 원칙을 따릅니다. 그래서 클래스 이름이나 컴포넌트 내부 state 대신, 사용자가 보는 역할과 글자로 요소를 찾습니다.

| 찾는 방법 | 예 | 우선순위 |
|---|---|---|
| 역할(role)과 이름 | `getByRole('button', { name: '다음' })` | 가장 먼저. 접근성 정보와 같으므로 화면 낭독기 사용자 경험도 함께 검증됩니다. |
| 레이블 | `getByLabelText('이메일')` | 폼 입력 칸 |
| 글자 | `getByText('조건에 맞는 도서가 없습니다.')` | 안내 문구 |
| 테스트 ID | `getByTestId('...')` | 다른 방법이 없을 때만 |

찾는 함수는 접두사에 따라 동작이 다릅니다.

| 접두사 | 없을 때 | 용도 |
|---|---|---|
| `getBy` | 즉시 실패 | 지금 화면에 있어야 하는 요소 |
| `queryBy` | `null` 반환 | 없어야 함을 확인할 때 (`expect(...).not.toBeInTheDocument()`) |
| `findBy` | 나타날 때까지 기다림 (기본 1초) | 비동기로 나타나는 요소 (요청 후 결과, 오류 메시지) |

조작은 `@testing-library/user-event`로 합니다. `userEvent.type`은 키를 하나씩 누르고, `userEvent.click`은 실제 클릭처럼 포커스와 이벤트를 차례로 일으킵니다. 둘 다 Promise를 돌려주므로 `await`합니다. 함수가 호출되었는지는 `vi.fn()`으로 만든 가짜 함수로 확인합니다.

#### S11-P37-02. 페이지 이동과 로그인 화면 테스트

*실습, 30분*

`Pagination`은 props만 받는 단순한 컴포넌트라 그대로 그려 테스트할 수 있습니다.

`src/components/Pagination.test.jsx`

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('현재 페이지와 전체 권수를 보여 준다', () => {
    render(<Pagination total={23} skip={10} limit={10} onChange={() => {}} />);
    expect(screen.getByText('2 / 3 페이지 (전체 23권)')).toBeInTheDocument();
  });

  it('첫 페이지에서는 이전 버튼이 비활성화된다', () => {
    render(<Pagination total={23} skip={0} limit={10} onChange={() => {}} />);
    expect(screen.getByRole('button', { name: '이전' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '다음' })).toBeEnabled();
  });

  it('다음 버튼을 누르면 다음 페이지의 skip 값을 알려 준다', async () => {
    const onChange = vi.fn(); // 호출 여부와 인자를 기록하는 가짜 함수
    render(<Pagination total={23} skip={10} limit={10} onChange={onChange} />);
    await userEvent.click(screen.getByRole('button', { name: '다음' }));
    expect(onChange).toHaveBeenCalledWith(20);
  });
});
```

`LoginPage`는 `useAuth`와 라우터를 씁니다. 진짜 `AuthProvider`를 쓰면 실제 로그인 요청이 나가므로, 원하는 `login` 함수를 넣은 Context로 감싸서 화면만 시험합니다. `vi.fn().mockRejectedValue(...)`로 "로그인이 401로 실패했다"는 상황을 만듭니다.

`src/pages/LoginPage.test.jsx`

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { ApiError } from '../api/errors';
import { AuthContext } from '../auth/useAuth';
import LoginPage from './LoginPage';

// 실제 AuthProvider 대신 원하는 login 함수를 넣은 Context로 감싸서 화면만 시험합니다.
function renderLogin(login) {
  return render(
    <MemoryRouter>
      <AuthContext.Provider value={{ login, user: null, isAdmin: false, initializing: false }}>
        <LoginPage />
      </AuthContext.Provider>
    </MemoryRouter>,
  );
}

async function submit(email, password) {
  await userEvent.type(screen.getByLabelText('이메일'), email);
  await userEvent.type(screen.getByLabelText('비밀번호'), password);
  await userEvent.click(screen.getByRole('button', { name: '로그인' }));
}

describe('LoginPage', () => {
  it('입력한 이메일과 비밀번호로 login을 호출한다', async () => {
    const login = vi.fn().mockResolvedValue({ id: 1 });
    renderLogin(login);
    await submit(' reader@example.com ', 'secret-1234');
    expect(login).toHaveBeenCalledWith('reader@example.com', 'secret-1234');
  });

  it('401이면 어느 칸이 틀렸는지 알려 주지 않는 메시지를 보여 주고 비밀번호를 지운다', async () => {
    const login = vi.fn().mockRejectedValue(new ApiError({ status: 401, code: 'INVALID_CREDENTIALS', message: 'x' }));
    renderLogin(login);
    await submit('reader@example.com', 'wrong');
    expect(await screen.findByRole('alert')).toHaveTextContent('이메일 또는 비밀번호가 올바르지 않습니다.');
    expect(screen.getByLabelText('비밀번호')).toHaveValue('');
  });

  it('429이면 Retry-After로 잠금 시간을 안내한다', async () => {
    const error = new ApiError({ status: 429, code: 'TOO_MANY_ATTEMPTS', message: 'x', retryAfter: 600 });
    renderLogin(vi.fn().mockRejectedValue(error));
    await submit('reader@example.com', 'wrong');
    expect(await screen.findByRole('alert')).toHaveTextContent('약 10분 뒤에');
  });
});
```

확인할 내용은 다음과 같습니다.

1. `npm test`로 실행해 새 테스트 6개가 통과하는지 확인합니다.
2. `LoginPage.jsx`의 `setPassword('')`를 지우면 어느 테스트가 실패하는지 확인하고 되돌립니다. 보안을 위해 넣은 동작이 테스트로 지켜지고 있습니다.
3. `Pagination`의 "이전" 버튼 글자를 "앞으로"로 바꾸면 테스트가 실패합니다. 역할과 이름으로 찾는 테스트는 화면 문구 변경에 민감합니다. 이것이 단점인지 장점인지(사용자에게 보이는 것이 바뀐 것이므로) 생각해 봅니다.
4. 회원가입 화면에서 비밀번호 확인이 다르면 안내 문구가 나오는지 확인하는 테스트를 직접 작성해 봅니다.

> 완성 코드: 막히면 예제 저장소의 `p37-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S11-P37-03. 정리: React Testing Library

*정리, 5분*

- 역할, 레이블, 글자처럼 사용자가 보는 정보로 요소를 찾고, 구현 세부(클래스, state)에 기대지 않습니다.
- 있어야 할 요소는 `getBy`, 없어야 할 요소는 `queryBy`, 비동기로 나타날 요소는 `findBy`로 찾습니다.
- Context나 함수를 가짜로 바꿔 화면 하나만 떼어 테스트합니다.

##### 확인 퀴즈

**Q1.** 요청이 끝난 뒤 나타나는 오류 메시지를 찾을 때 알맞은 함수는 무엇인가요?

1. getByRole
2. queryByRole
3. findByRole
4. getByTestId

> 정답: 3번. findBy는 요소가 나타날 때까지 기다립니다.

**Q2.** React Testing Library에서 요소를 찾을 때 가장 먼저 고려할 방법은 무엇인가요?

1. CSS 클래스
2. 테스트 ID
3. 컴포넌트 내부 state
4. 역할(role)과 이름

> 정답: 4번. 역할과 이름은 사용자와 보조 기술이 화면을 인식하는 방식과 같습니다.

### S11-P38. MSW로 API 모킹

> 학습 목표: MSW로 네트워크 수준에서 가짜 API를 만들어, 백엔드 없이 데이터를 불러오는 화면을 테스트할 수 있습니다.
>
> 완성 코드 브랜치: `p38-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S11-P38-01 어디를 가짜로 바꿀 것인가 | 주요 개념 | 10분 |
| S11-P38-02 목록 화면을 가짜 API로 테스트하기 | 실습 | 35분 |
| S11-P38-03 정리: MSW로 API 모킹 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S11-P38-01. 어디를 가짜로 바꿀 것인가

*주요 개념, 10분*

데이터를 불러오는 화면을 테스트하려면 백엔드 응답이 필요합니다. 진짜 백엔드를 쓰면 테스트가 느리고 데이터에 따라 결과가 달라집니다. 응답을 가짜로 바꾸는 방법은 두 가지입니다.

| 방법 | 바꾸는 곳 | 장점 | 단점 |
|---|---|---|---|
| 모듈 가짜(`vi.mock('../api/books')`) | API 함수 | 간단함 | axios 인스턴스, 인터셉터, 오류 변환은 검증하지 못함 |
| 네트워크 가짜(MSW) | HTTP 요청 자체 | 앱 코드를 전혀 바꾸지 않고 요청부터 화면까지 모두 검증 | 설정이 조금 더 필요 |

MSW(Mock Service Worker)는 앱이 보낸 HTTP 요청을 가로채 미리 정한 응답을 돌려줍니다. 앱은 진짜 백엔드와 통신하는 것과 똑같이 동작하므로, S6에서 만든 API 계층과 오류 변환까지 함께 검증됩니다. 가짜 API의 응답 형식은 S1-P3-03의 API 표와 정확히 같게 만듭니다.

#### S11-P38-02. 목록 화면을 가짜 API로 테스트하기

*실습, 35분*

MSW를 설치합니다.

```bash
npm install -D msw
```

가짜 API 서버를 만듭니다. 도서 23권과 저자 2명을 준비하고, `GET /books`가 백엔드처럼 `q`, `skip`, `limit`을 처리하게 합니다.

`src/test/server.js`

```js
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

export const API = 'http://api.test'; // .env.test의 VITE_API_BASE_URL

export const authors = [
  { id: 1, name: '홍길동' },
  { id: 2, name: '김철수' },
];

export const books = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  title: i % 2 ? `FastAPI 실전 ${i + 1}` : `파이썬 입문 ${i + 1}`,
  price: 10000 + i * 1000,
  isbn: null,
  author: authors[i % 2],
  cover_url: null,
}));

// 백엔드 대신 응답할 가짜 API입니다. 요청 형식은 실제 백엔드와 같게 맞춥니다.
export const handlers = [
  http.get(`${API}/authors`, () => HttpResponse.json(authors)),
  http.get(`${API}/books`, ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q') ?? '';
    const skip = Number(url.searchParams.get('skip') ?? 0);
    const limit = Number(url.searchParams.get('limit') ?? 10);
    const items = books.filter((b) => b.title.includes(q));
    return HttpResponse.json({ items: items.slice(skip, skip + limit), total: items.length, skip, limit });
  }),
];

export const server = setupServer(...handlers);
```

설정 파일에서 모든 테스트 전에 가짜 서버를 켜고, 테스트마다 바꾼 응답을 되돌립니다.

`src/test/setup.js`

```js
import '@testing-library/jest-dom/vitest'; // toBeInTheDocument 같은 DOM 전용 검사 함수
import { cleanup } from '@testing-library/react';
import axios from 'axios';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { api } from '../api/client';
import { server } from './server';

// 날짜 표시 테스트가 컴퓨터마다 달라지지 않도록 시간대를 고정합니다.
process.env.TZ = 'Asia/Seoul';

// jsdom의 XMLHttpRequest는 CORS 검사를 흉내 내서 가짜 응답을 막습니다.
// 테스트에서는 axios가 fetch로 요청하게 바꿔 MSW가 응답을 그대로 넘겨주게 합니다.
api.defaults.adapter = 'fetch';
axios.defaults.adapter = 'fetch';

// 가짜 API 서버를 켜고, 처리하지 않은 요청이 있으면 테스트를 실패시킵니다.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => {
  cleanup();
  server.resetHandlers(); // 테스트 안에서 바꾼 응답을 원래대로 되돌립니다.
});
afterAll(() => server.close());
```

여기에는 한 가지 사정이 있습니다. jsdom의 `XMLHttpRequest`는 브라우저처럼 CORS 검사를 흉내 내는데, 가짜 응답에는 CORS 헤더가 없어 요청이 실패로 처리됩니다. axios는 기본적으로 `XMLHttpRequest`를 쓰므로, 테스트에서만 `fetch` 방식으로 바꿔 이 문제를 피합니다. 실제 앱의 동작은 바뀌지 않습니다.

화면은 Query 캐시와 라우터가 있어야 그려지므로, 테스트용 감싸기 함수를 만듭니다. 테스트마다 새 캐시를 만들어 서로 영향을 주지 않게 하고, 재시도를 꺼서 실패 테스트가 빨리 끝나게 합니다.

`src/test/renderWithProviders.jsx`

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';

// 화면 컴포넌트가 필요로 하는 Query 캐시와 라우터를 갖춰 그립니다.
// 테스트마다 새 캐시를 만들어 서로 영향을 주지 않게 하고, 재시도는 끕니다.
export function renderWithProviders(ui, { route = '/', path = '/' } = {}) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path={path} element={ui} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
}
```

목록 화면 테스트입니다. 마지막 테스트는 `server.use`로 이 테스트에서만 `/books`가 500을 돌려주게 바꿉니다.

`src/pages/BookListPage.test.jsx`

```jsx
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { API, server } from '../test/server';
import { renderWithProviders } from '../test/renderWithProviders';
import BookListPage from './BookListPage';

describe('BookListPage', () => {
  it('첫 페이지 10권과 전체 권수를 보여 준다', async () => {
    renderWithProviders(<BookListPage />);
    expect(await screen.findByText('파이썬 입문 1')).toBeInTheDocument();
    const rows = within(screen.getByRole('table')).getAllByRole('row');
    expect(rows).toHaveLength(11); // 머리글 1행 + 도서 10행
    expect(screen.getByText('1 / 3 페이지 (전체 23권)')).toBeInTheDocument();
  });

  it('검색하면 조건에 맞는 도서만 보여 준다', async () => {
    renderWithProviders(<BookListPage />);
    await screen.findByText('파이썬 입문 1');
    await userEvent.type(screen.getByPlaceholderText('제목으로 검색'), 'FastAPI');
    await userEvent.click(screen.getByRole('button', { name: '검색' }));
    expect(await screen.findByText('1 / 2 페이지 (전체 11권)')).toBeInTheDocument();
    expect(screen.queryByText('파이썬 입문 1')).not.toBeInTheDocument();
  });

  it('URL의 조건으로 시작한다', async () => {
    renderWithProviders(<BookListPage />, { route: '/?skip=20' });
    expect(await screen.findByText('3 / 3 페이지 (전체 23권)')).toBeInTheDocument();
  });

  it('서버 오류를 사용자에게 알린다', async () => {
    // 이 테스트에서만 /books가 500을 돌려주게 바꿉니다.
    server.use(http.get(`${API}/books`, () => HttpResponse.json({ code: 'INTERNAL', message: '서버 오류' }, { status: 500 })));
    renderWithProviders(<BookListPage />);
    expect(await screen.findByRole('alert')).toHaveTextContent('서버 오류');
  });
});
```

확인할 내용은 다음과 같습니다.

1. `npm test`로 실행해 목록 화면 테스트 4개가 통과합니다. 백엔드를 꺼도 통과해야 합니다.
2. `server.js`의 `/books` 응답에서 `total`을 빼면 어느 테스트가 실패하는지 확인합니다. 백엔드 응답 형식이 바뀌었을 때 화면이 어떻게 되는지 미리 알 수 있습니다.
3. "저자를 고르면 그 저자의 도서만 보여 준다"는 테스트를 직접 추가해 봅니다. 가짜 `/books`가 `author` 쿼리도 처리하도록 고쳐야 합니다.

> 완성 코드: 막히면 예제 저장소의 `p38-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S11-P38-03. 정리: MSW로 API 모킹

*정리, 5분*

- MSW는 네트워크 수준에서 응답을 가짜로 바꿔, 앱 코드를 고치지 않고 요청부터 화면까지 검증합니다.
- 가짜 API의 응답 형식은 실제 백엔드 명세와 같게 맞추고, 테스트마다 필요한 응답만 `server.use`로 바꿉니다.
- 테스트마다 새 Query 캐시를 만들어 테스트끼리 영향을 주지 않게 합니다.

##### 확인 퀴즈

**Q1.** MSW를 쓰는 테스트가 API 함수를 vi.mock으로 바꾸는 테스트보다 나은 점은 무엇인가요?

1. 실행이 더 빠르다.
2. axios 인스턴스, 인터셉터, 오류 변환까지 함께 검증된다.
3. 백엔드가 실행 중이어야 해서 더 정확하다.
4. 설정이 필요 없다.

> 정답: 2번. 요청 자체를 가로채므로 앱 코드의 모든 계층이 실제처럼 동작합니다.

**Q2.** 테스트마다 새 QueryClient를 만드는 이유는 무엇인가요?

1. 메모리를 아끼려고
2. 앞 테스트의 캐시가 다음 테스트 결과에 영향을 주지 않게 하려고
3. MSW가 요구해서
4. 재시도를 켜려고

> 정답: 2번. 테스트는 서로 독립적이어야 순서와 관계없이 같은 결과가 나옵니다.

### S11-P39. Playwright E2E

> 학습 목표: Playwright로 실제 브라우저에서 화면 흐름을 검증하고, CI에서도 돌아가도록 API를 가로챌 수 있습니다.
>
> 완성 코드 브랜치: `p39-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S11-P39-01 E2E 테스트 | 주요 개념 | 10분 |
| S11-P39-02 핵심 흐름 E2E 테스트 | 실습 | 35분 |
| S11-P39-03 정리: Playwright E2E | 정리 | 5분 |
| 휴식 | | 10분 |

#### S11-P39-01. E2E 테스트

*주요 개념, 10분*

E2E(End-to-End) 테스트는 실제 브라우저를 띄워 사용자가 하는 대로 주소를 열고, 입력하고, 클릭하며 화면 흐름 전체를 검증합니다. 컴포넌트 테스트가 jsdom이라는 흉내 낸 환경에서 화면 하나를 보는 것과 달리, E2E는 라우팅, 실제 CSS, 실제 네트워크 요청까지 포함합니다.

E2E는 느리고 깨지기 쉬우므로 꼭 지켜야 할 핵심 흐름 몇 개만 둡니다. 이 과정에서는 "목록에서 상세로 이동", "로그인 후 이동", "로그인하지 않으면 보호된 화면에서 로그인 화면으로"를 E2E로 지킵니다.

백엔드 처리 방식은 두 가지입니다. 실제 백엔드를 함께 띄우면 가장 사실적이지만, CI에서는 백엔드와 데이터베이스까지 준비해야 합니다. 이 과정은 Playwright의 `page.route`로 브라우저가 보내는 API 요청을 가로채 가짜 응답을 돌려줍니다. 사전 요청(`OPTIONS`)과 CORS 헤더까지 직접 응답해야 한다는 점이 MSW와 다릅니다. 실제 브라우저는 CORS를 검사하기 때문입니다.

#### S11-P39-02. 핵심 흐름 E2E 테스트

*실습, 35분*

Playwright를 설치하고 브라우저를 내려받습니다.

```bash
npm install -D @playwright/test
npx playwright install chromium
```

설정 파일을 만듭니다. 테스트 전에 개발 서버를 5174 포트로 띄우고(평소 쓰는 5173과 겹치지 않게), 테스트가 끝나면 끕니다.

`playwright.config.js`

```js
import { defineConfig, devices } from '@playwright/test';

// 실제 브라우저로 화면을 끝까지 조작하는 E2E 테스트 설정입니다.
export default defineConfig({
  testDir: './e2e',
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:5174',
    trace: 'on-first-retry', // 실패한 테스트를 다시 돌릴 때 기록을 남겨 원인을 찾습니다.
    // 사내망처럼 브라우저를 내려받을 수 없는 환경에서만 이미 설치된 Chromium 경로를 지정합니다.
    launchOptions: { executablePath: process.env.PW_CHROMIUM_PATH || undefined },
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  // 테스트 전에 개발 서버를 띄웁니다. 이미 떠 있으면 그대로 씁니다.
  webServer: {
    command: 'npm run dev -- --port 5174 --strictPort',
    url: 'http://localhost:5174',
    reuseExistingServer: !process.env.CI,
  },
});
```

브라우저의 API 요청을 가로채는 도우미를 만듭니다.

`e2e/mockApi.js`

```js
// 브라우저가 보내는 API 요청을 가로채 가짜 응답을 돌려줍니다. 백엔드 없이도 E2E 테스트가 돌아갑니다.
const API = 'http://127.0.0.1:8000';

const book = { id: 1, title: '파이썬 입문', price: 18000, isbn: null, author: { id: 1, name: '홍길동' }, cover_url: null };

function json(route, body, status = 200) {
  return route.fulfill({
    status,
    contentType: 'application/json',
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*' },
    body: JSON.stringify(body),
  });
}

export async function mockApi(page) {
  await page.route(`${API}/**`, (route) => {
    const request = route.request();
    const { pathname } = new URL(request.url());
    if (request.method() === 'OPTIONS') return json(route, {}); // 사전 요청 허락
    if (pathname === '/authors') return json(route, [book.author]);
    if (pathname === '/books') return json(route, { items: [book], total: 1, skip: 0, limit: 10 });
    if (pathname === '/books/1') return json(route, book);
    if (pathname === '/auth/token') {
      return json(route, { access_token: 'access-1', refresh_token: 'refresh-1', token_type: 'bearer' });
    }
    if (pathname === '/auth/me') return json(route, { id: 7, email: 'reader@example.com', role: 'user' });
    return json(route, { code: 'NOT_FOUND', message: '없음' }, 404);
  });
}
```

핵심 흐름 세 가지를 테스트합니다.

`e2e/books.spec.js`

```js
import { expect, test } from '@playwright/test';
import { mockApi } from './mockApi';

test.beforeEach(async ({ page }) => {
  await mockApi(page);
});

test('목록에서 도서를 눌러 상세 화면으로 이동한다', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: '파이썬 입문' }).click();
  await expect(page).toHaveURL(/\/books\/1$/);
  await expect(page.getByRole('heading', { name: '파이썬 입문' })).toBeVisible();
  await expect(page.getByText('18,000원')).toBeVisible();
});

test('로그인하면 상단에 이메일이 보이고 로그인 화면을 벗어난다', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('이메일').fill('reader@example.com');
  await page.getByLabel('비밀번호').fill('secret-1234');
  await page.getByRole('button', { name: '로그인' }).click();
  await expect(page.getByText('reader@example.com (user)')).toBeVisible();
  await expect(page).toHaveURL('http://localhost:5174/');
});

test('로그인하지 않고 내 대여 화면에 가면 로그인 화면으로 보낸다', async ({ page }) => {
  await page.goto('/loans');
  await expect(page).toHaveURL(/\/login$/);
});
```

`package.json`의 `scripts`에 `"test:e2e": "playwright test"`를 추가하고, 테스트 결과 폴더를 `.gitignore`에 넣습니다.

```text
# Playwright
test-results
playwright-report
```

확인할 내용은 다음과 같습니다.

1. `npm run test:e2e`로 실행해 3개 테스트가 통과합니다. Vitest 테스트와 달리 몇 초가 걸립니다.
2. `npx playwright test --headed`로 실행하면 실제 브라우저 창이 열리고 테스트가 화면을 조작하는 모습을 볼 수 있습니다.
3. `npx playwright test --ui`로 실행하면 단계별 화면을 되돌려 보며 실패 원인을 찾을 수 있습니다.
4. `mockApi.js`에서 `/books/1` 응답의 제목을 바꾸면 첫 번째 테스트가 어디서 실패하는지 확인하고 되돌립니다.
5. 진짜 백엔드로 돌려 보려면 `books.spec.js`의 `beforeEach`에서 `mockApi` 호출을 지우고 백엔드를 켠 뒤 실행합니다. 데이터에 따라 결과가 달라지는 것을 확인하고 되돌립니다.

> 완성 코드: 막히면 예제 저장소의 `p39-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S11-P39-03. 정리: Playwright E2E

*정리, 5분*

- E2E 테스트는 실제 브라우저로 핵심 흐름만 검증하며, 개수는 적게 유지합니다.
- `page.route`로 API를 가로채면 백엔드 없이도 CI에서 E2E를 돌릴 수 있으며, 이때 CORS 헤더와 사전 요청도 직접 처리합니다.
- 실패 원인은 `--headed`, `--ui`, trace로 단계별 화면을 보며 찾습니다.

##### 확인 퀴즈

**Q1.** page.route로 API를 가로챌 때 OPTIONS 요청에도 응답해야 하는 이유는 무엇인가요?

1. jsdom이 CORS를 검사해서
2. Playwright가 요구해서
3. 실제 브라우저가 CORS 사전 요청을 보내므로 허락하지 않으면 본 요청이 나가지 않아서
4. OPTIONS가 로그인 요청이라서

> 정답: 3번. E2E는 실제 브라우저에서 돌아가므로 교차 출처 규칙이 그대로 적용됩니다.

**Q2.** E2E 테스트를 적게 두는 이유는 무엇인가요?

1. 느리고 환경 변화에 깨지기 쉬워서
2. 버그를 찾지 못해서
3. CI에서 실행할 수 없어서
4. 실제 사용과 달라서

> 정답: 1번. 핵심 흐름만 E2E로 지키고 나머지는 빠른 단위, 컴포넌트 테스트에 맡깁니다.

---

## S12. 프론트엔드 개발 보안

*6일차 오후, 3시간*

> 섹션 목표: 프론트엔드에서 지켜야 할 개발 보안 요소를 이해하고, 백엔드 과정의 보안약점 분류에 맞춰 코드를 점검합니다.

### S12-P40. XSS, 토큰 보호, CSRF

> 학습 목표: 프론트엔드 보안의 전제를 이해하고, XSS, 토큰 저장 위치, CSRF와 클릭재킹의 위험과 대책을 설명할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S12-P40-01 프론트엔드 보안의 전제 | 주요 개념 | 10분 |
| S12-P40-02 XSS(크로스 사이트 스크립팅) | 주요 개념 | 15분 |
| S12-P40-03 토큰 저장 위치 | 주요 개념 | 10분 |
| S12-P40-04 CSRF와 클릭재킹 | 주요 개념 | 10분 |
| S12-P40-05 정리: XSS, 토큰 보호, CSRF | 정리 | 5분 |
| 휴식 | | 10분 |

#### S12-P40-01. 프론트엔드 보안의 전제

*주요 개념, 10분*

백엔드 과정 S9~S11에서 KISA 소프트웨어 개발보안 가이드를 바탕으로 서버 쪽 보안약점을 진단하고 조치했습니다. 프론트엔드 보안을 생각할 때 가장 먼저 받아들여야 할 사실은 다음과 같습니다.

**프론트엔드 코드는 사용자의 컴퓨터에서 실행되므로 공개되어 있고, 언제든 조작될 수 있습니다.** 빌드 결과물인 JavaScript는 누구나 내려받아 읽을 수 있고, 개발자 도구로 변수 값을 바꾸거나, 화면을 거치지 않고 API를 직접 호출할 수 있습니다.

이 전제에서 두 가지 원칙이 나옵니다.

1. **보안 결정은 백엔드가 합니다.** 입력 검증, 권한 검사, 요청 제한은 반드시 백엔드에 있어야 합니다. 프론트엔드의 검증과 메뉴 숨기기는 사용자 경험을 위한 것입니다(S8, S9).
2. **프론트엔드는 사용자를 보호합니다.** 프론트엔드의 보안 대책은 주로 "정상 사용자의 브라우저가 공격에 악용되지 않게 하는 것"입니다. 사용자의 화면에 악성 스크립트가 실행되거나(XSS), 사용자의 토큰이 유출되거나, 사용자가 속아서 원치 않는 동작을 하게 되는 것(CSRF, 클릭재킹, 열린 리디렉션)을 막습니다.

#### S12-P40-02. XSS(크로스 사이트 스크립팅)

*주요 개념, 15분*

XSS는 공격자가 넣은 스크립트가 다른 사용자의 브라우저에서 실행되는 공격입니다. 예를 들어 도서 제목에 `<img src=x onerror="...">`를 넣어 등록했는데, 목록 화면이 이 제목을 HTML로 해석해 그린다면 목록을 연 모든 사용자의 브라우저에서 `onerror`의 코드가 실행됩니다. 그 코드는 해당 사이트의 출처로 실행되므로 동일 출처 정책의 보호를 받지 못합니다. 같은 출처의 `sessionStorage`를 읽을 수 있고, 사용자 대신 API를 호출할 수도 있습니다.

백엔드 과정 S9-P31에서는 입력과 저장 단계의 XSS 대책을 다뤘습니다. 프론트엔드는 **출력 단계**를 책임집니다.

**React의 기본 방어**

JSX의 중괄호에 넣은 값은 React가 항상 텍스트로 이스케이프합니다. `<p>{book.title}</p>`에 HTML 태그가 들어 있어도 태그로 해석되지 않고 글자 그대로 표시됩니다. 이 과정의 모든 화면은 이 방식으로만 데이터를 출력하므로 기본적으로 안전합니다.

**React에서 위험해지는 지점**

| 위험한 코드 | 이유 | 대책 |
|---|---|---|
| `dangerouslySetInnerHTML={{ __html: value }}` | 문자열을 HTML로 해석해 넣습니다. 이름 그대로 위험합니다. | 쓰지 않습니다. 꼭 HTML을 보여 줘야 하면 DOMPurify로 정화한 값만 넣습니다. |
| `element.innerHTML = value` | React를 거치지 않고 DOM에 HTML을 넣습니다. | `textContent`를 쓰거나 React로 그립니다. |
| `<a href={userUrl}>`, `window.location = userUrl`, `window.open(userUrl)` | `javascript:`로 시작하는 주소는 클릭 시 코드를 실행합니다. React 19는 `href`의 `javascript:` 주소를 차단하지만, 코드에서 직접 대입하는 경우는 막아 주지 않습니다. | `new URL(userUrl)`로 해석해 `http:`, `https:`인지 확인합니다. |
| `eval`, `new Function`, 문자열을 넘긴 `setTimeout` | 문자열을 코드로 실행합니다. | 쓰지 않습니다. S15의 CSP가 이를 막습니다. |

HTML을 꼭 보여 줘야 하는 경우(예: 관리자가 작성한 공지)에는 검증된 정화 라이브러리를 사용합니다.

```jsx
import DOMPurify from 'dompurify'; // npm install dompurify

function Notice({ html }) {
  // 스크립트, 이벤트 속성(onerror 등), javascript: 주소를 제거한 HTML만 넣습니다.
  return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />;
}
```

#### S12-P40-03. 토큰 저장 위치

*주요 개념, 10분*

S8에서 액세스 토큰은 메모리, 리프레시 토큰은 `sessionStorage`에 두었습니다. 저장 위치별 특징을 비교하면 다음과 같습니다.

| 저장 위치 | XSS로 토큰 탈취 | CSRF 대책 필요 | 새로고침 후 | 탭 사이 공유 | 비고 |
|---|---|---|---|---|---|
| `localStorage` | 가능 | 필요 없음 | 유지 | 공유 | 브라우저를 닫아도 남아 노출 기간이 깁니다. |
| `sessionStorage` | 가능 | 필요 없음 | 유지 | 탭마다 분리 | 탭을 닫으면 지워집니다. |
| 메모리(JS 변수) | 저장된 값을 꺼내기 어려움 | 필요 없음 | 사라짐 | 분리 | 새로고침마다 재발급이 필요합니다. |
| HttpOnly 쿠키 | 스크립트로 읽을 수 없음 | 필요 | 유지 | 공유 | 백엔드가 쿠키로 발급하도록 바뀌어야 합니다. |

"CSRF 대책 필요" 열을 보면, 헤더로 토큰을 보내는 방식은 CSRF에서 자유롭습니다. 브라우저는 `Authorization` 헤더를 자동으로 붙이지 않기 때문입니다. 반대로 쿠키는 자동으로 전송되므로 S12-P40-04의 CSRF 대책이 필요합니다.

이 과정의 선택은 다음 근거에 따릅니다.

- 백엔드가 토큰을 JSON 본문으로 주고받도록 설계되어 있으므로(백엔드 S5-P18), 백엔드를 고치지 않는 범위에서 고를 수 있는 선택지는 메모리와 웹 스토리지입니다.
- 실제 API 호출에 쓰이는 액세스 토큰은 메모리에 두어 스토리지에서 꺼내 가는 경로를 없앴습니다.
- 리프레시 토큰은 새로고침 후 복원을 위해 저장해야 하므로, 노출 기간이 더 짧은 `sessionStorage`를 골랐습니다.

어떤 저장 위치를 고르더라도 **XSS가 있으면 공격자는 사용자의 권한으로 API를 호출할 수 있습니다.** HttpOnly 쿠키조차 "토큰 값을 훔치는 것"은 막아도 "사용자 브라우저에서 요청을 보내는 것"은 막지 못합니다. 따라서 토큰 저장 위치는 피해 범위를 줄이는 보조 수단이고, 근본 대책은 S12-P40-02의 XSS 방지와 S15의 CSP입니다. 보안 수준을 더 높이려면 백엔드가 리프레시 토큰을 `HttpOnly; Secure; SameSite=Strict` 쿠키로 발급하도록 바꾸는 방법이 있으며, S18의 확장 과제로 제시합니다.

#### S12-P40-04. CSRF와 클릭재킹

*주요 개념, 10분*

**CSRF(사이트 간 요청 위조)**는 사용자가 로그인한 상태에서 악성 사이트를 방문했을 때, 악성 사이트가 사용자 몰래 대상 사이트로 요청을 보내게 만드는 공격입니다. S5에서 본 것처럼 동일 출처 정책은 응답 읽기만 막고 요청 전송은 막지 않으므로, 쿠키로 인증하는 사이트라면 쿠키가 자동으로 붙은 요청이 서버에서 정상 처리될 수 있습니다.

이 과정의 구조에서는 토큰을 `Authorization` 헤더로 보내므로 CSRF가 성립하지 않습니다. 악성 사이트는 사용자의 토큰을 모르기 때문입니다. 만약 쿠키 인증으로 바꾼다면 다음 대책을 함께 적용해야 합니다.

- 쿠키에 `SameSite=Strict` 또는 `Lax` 속성을 지정해 다른 사이트에서 시작한 요청에는 쿠키가 붙지 않게 합니다.
- 상태를 바꾸는 요청에 CSRF 토큰(서버가 발급하고 요청마다 헤더로 돌려받는 값)을 사용합니다.
- 백엔드 CORS 설정에 `allow_credentials=True`를 켤 때는 허용 출처를 와일드카드 없이 정확히 적습니다.

**클릭재킹**은 공격자가 자신의 페이지에 대상 사이트를 투명한 `<iframe>`으로 겹쳐 놓고, 사용자가 다른 것을 누르는 줄 알고 대상 사이트의 버튼(예: 도서 삭제 확인)을 누르게 하는 공격입니다. 응답 헤더 `X-Frame-Options: DENY`와 CSP의 `frame-ancestors 'none'`으로 다른 사이트가 이 앱을 프레임에 넣지 못하게 막습니다. S15에서 Nginx 설정으로 적용합니다.

#### S12-P40-05. 정리: XSS, 토큰 보호, CSRF

*정리, 5분*

- 프론트엔드 코드는 공개되고 조작될 수 있으므로 보안 결정은 백엔드가 하고, 프론트엔드는 사용자의 브라우저를 보호합니다.
- React의 JSX 출력은 XSS를 기본으로 막지만, `dangerouslySetInnerHTML`, `innerHTML`, 사용자 입력 주소로의 이동은 직접 관리해야 합니다.
- 토큰 저장 위치는 피해 범위를 줄이는 수단이며, 헤더 기반 토큰 전송은 CSRF에 강합니다.

##### 확인 퀴즈

**Q1.** React 화면에서 XSS가 일어날 수 있는 코드는 무엇인가요?

1. `<img alt={book.title} />`
2. `{book.price.toLocaleString()}`
3. `<p>{book.title}</p>`
4. `<div dangerouslySetInnerHTML={{ __html: book.title }} />`

> 정답: 4번. JSX 중괄호 출력은 이스케이프되지만 dangerouslySetInnerHTML은 문자열을 HTML로 해석합니다.

**Q2.** 토큰을 Authorization 헤더로 보내는 구조가 CSRF에 강한 이유는 무엇인가요?

1. 토큰이 짧아서
2. 헤더가 암호화되어서
3. 브라우저가 이 헤더를 자동으로 붙이지 않아서
4. CORS가 막아 줘서

> 정답: 3번. 쿠키와 달리 Authorization 헤더는 자동 전송되지 않으므로 다른 사이트가 사용자 토큰으로 요청할 수 없습니다.

### S12-P41. 보안 헤더, CSP, 비밀정보

> 학습 목표: 보안 헤더와 CSP의 의미를 설명하고, 비밀정보 관리, 정보 노출 방지, 열린 리디렉션 대책을 적용할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S12-P41-01 보안 헤더와 CSP | 주요 개념 | 15분 |
| S12-P41-02 비밀정보와 빌드 결과물 | 주요 개념 | 10분 |
| S12-P41-03 정보 노출과 열린 리디렉션 | 주요 개념 | 10분 |
| S12-P41-04 XSS 동작 확인 | 실습 | 10분 |
| S12-P41-05 정리: 보안 헤더, CSP, 비밀정보 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S12-P41-01. 보안 헤더와 CSP

*주요 개념, 15분*

보안 헤더는 서버가 응답에 붙여 "이 페이지를 다룰 때 이런 제약을 지켜라"라고 브라우저에 지시하는 방법입니다. 프론트엔드 파일을 제공하는 서버(S15의 Nginx)에서 설정합니다.

| 헤더 | 이 과정의 값 | 효과 |
|---|---|---|
| `Content-Security-Policy` | 아래 설명 | 스크립트, 스타일, 이미지, 연결 대상의 출처를 제한합니다. XSS의 피해를 크게 줄입니다. |
| `X-Content-Type-Options` | `nosniff` | 브라우저가 파일 형식을 멋대로 추측하지 않게 합니다. |
| `X-Frame-Options` | `DENY` | 다른 사이트의 프레임에 들어가지 않게 합니다(클릭재킹 방지). |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | 다른 사이트로 이동할 때 전체 주소 대신 출처만 전달해, 주소의 검색어 같은 정보가 새지 않게 합니다. |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | 쓰지 않는 브라우저 기능을 꺼 둡니다. |
| `Strict-Transport-Security` | HTTPS 구간에서 설정 | 이후 접속을 항상 HTTPS로 하게 합니다. 백엔드 과정 S15-P52의 ALB HTTPS 구성에서 적용합니다. |

**CSP(Content Security Policy)**는 페이지가 불러오고 실행할 수 있는 자원의 출처를 목록으로 정합니다. 이 과정은 다음 정책을 사용합니다.

```text
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: blob:;
connect-src 'self'; font-src 'self'; object-src 'none'; base-uri 'self';
form-action 'self'; frame-ancestors 'none'
```

| 지시어 | 의미 |
|---|---|
| `default-src 'self'` | 따로 정하지 않은 자원은 같은 출처에서만 불러옵니다. |
| `script-src 'self'` | 같은 출처의 스크립트 파일만 실행합니다. HTML에 직접 쓴 `<script>`, `onerror=` 같은 인라인 코드, `eval`이 모두 차단되므로 XSS로 주입된 코드가 실행되지 않습니다. |
| `style-src 'self'` | 같은 출처의 CSS 파일만 허용합니다. React의 `style` 속성은 DOM API로 적용되므로 이 정책에서도 동작합니다. |
| `img-src 'self' data: blob:` | 같은 출처 이미지와 데이터 주소 이미지를 허용합니다. 표지는 `/api/covers/...`로 같은 출처입니다. |
| `connect-src 'self'` | `fetch`, axios가 같은 출처(`/api/...`)로만 요청하게 합니다. 공격 코드가 실행되더라도 토큰을 외부 서버로 보내기 어렵게 만듭니다. |
| `object-src 'none'`, `base-uri 'self'`, `form-action 'self'` | 플러그인, `<base>` 태그 변조, 외부로의 폼 제출을 막습니다. |
| `frame-ancestors 'none'` | 다른 페이지의 프레임에 들어가지 못하게 합니다. |

Vite로 빌드한 결과물은 모든 스크립트와 스타일을 별도 파일로 만들기 때문에 이렇게 엄격한 정책을 그대로 적용할 수 있습니다. 운영 환경에서는 API가 Nginx 프록시를 통해 같은 출처가 되므로 `connect-src 'self'`로 충분합니다. 이 정책은 S15의 `nginx/security-headers.conf`에서 적용하고 실제 응답으로 확인합니다.

#### S12-P41-02. 비밀정보와 빌드 결과물

*주요 개념, 10분*

S6에서 설명했듯이 `VITE_`로 시작하는 환경 변수는 빌드할 때 JavaScript에 문자열로 들어갑니다. 따라서 다음을 지킵니다.

- 프론트엔드 환경 변수에는 공개되어도 되는 값(API 주소 등)만 넣습니다. 외부 서비스의 비밀 키가 필요한 기능은 백엔드를 거쳐 호출합니다.
- 개인별 설정은 `.env.local`에 두고 Git에 올리지 않습니다. Vite 템플릿의 `.gitignore`에는 `*.local`이 이미 들어 있습니다.
- 운영 빌드에는 소스맵을 포함하지 않습니다. 소스맵은 압축된 코드를 원래 소스로 되돌려 보여 주는 파일로, 주석과 내부 구조까지 노출됩니다. Vite는 기본적으로 운영 빌드에 소스맵을 만들지 않으며(`build.sourcemap: false`), 이 설정을 바꾸지 않습니다.
- `console.log`로 토큰, 비밀번호, 개인정보를 출력하지 않습니다. 개발 중에 넣은 출력문이 운영에 그대로 남는 경우가 많습니다.

#### S12-P41-03. 정보 노출과 열린 리디렉션

*주요 개념, 10분*

백엔드 과정 S10-P35에서 "오류 메시지로 내부 정보를 노출하지 않는다"는 원칙을 다뤘습니다. 프론트엔드도 같은 원칙을 따릅니다.

- 로그인 실패 메시지는 하나로 통일합니다(S8).
- 화면에는 백엔드가 의도적으로 만든 메시지(`AppError`)와 오류 코드만 보여 주고, 처리하지 못한 오류의 원문이나 스택 추적은 보여 주지 않습니다. S6의 `toApiError`는 알 수 없는 형식의 오류를 상태 코드별 일반 메시지로 바꿉니다.
- 오류 코드는 사용자에게 의미가 없어 보여도 운영자가 백엔드 로그와 대조하는 데 유용합니다. 내부 구조를 드러내지 않는 수준의 식별자만 표시합니다.

##### 열린 리디렉션

로그인 화면은 로그인 후 "원래 가려던 주소"로 돌려보냅니다. 이 주소를 검사하지 않으면, 공격자가 이 앱의 로그인 주소에 외부 사이트 주소를 넣은 링크를 퍼뜨려, 사용자가 진짜 사이트에서 로그인한 직후 가짜 사이트로 이동하게 만들 수 있습니다. 사용자는 방금 진짜 사이트에서 로그인했으므로 의심 없이 가짜 화면에 다시 정보를 입력하게 됩니다.

S8의 `safeRedirect`는 `/`로 시작하는 앱 내부 경로만 허용하고, `//evil.example`처럼 `//`로 시작하는 주소는 거부합니다. `//`로 시작하는 주소는 브라우저가 "현재 스킴으로 다른 호스트에 접속"하는 주소로 해석하기 때문입니다.

#### S12-P41-04. XSS 동작 확인

*실습, 10분*

**1) XSS 동작 확인**

임시 컴포넌트를 만들어 이스케이프와 `dangerouslySetInnerHTML`의 차이를 확인합니다. 확인이 끝나면 반드시 지웁니다. 아래 문자열은 이미지 로딩 오류 시 같은 출처의 `sessionStorage`를 읽어 출력하는 코드로, XSS가 토큰을 읽을 수 있음을 보여 줍니다.

```jsx
// src/pages/XssLab.jsx (실습 후 삭제)
const payload = `<img src="x" onerror="console.log('읽힘:', sessionStorage.getItem('book-admin.refresh'))">`;

export default function XssLab() {
  return (
    <section>
      <h2>1. JSX 출력 (안전)</h2>
      <p>{payload}</p>
      <h2>2. dangerouslySetInnerHTML (위험)</h2>
      <div dangerouslySetInnerHTML={{ __html: payload }} />
    </section>
  );
}
```

`App.jsx`에 `<Route path="xss" element={<XssLab />} />`를 잠시 추가하고 로그인한 상태로 `/xss`를 엽니다. 1번은 글자 그대로 보이고, 2번은 Console에 리프레시 토큰이 출력됩니다. 확인 후 파일과 라우트를 지웁니다. 같은 종류의 인라인 코드가 CSP로 차단되는 모습은 S15에서 Nginx로 보안 헤더를 적용한 뒤 확인합니다.

#### S12-P41-05. 정리: 보안 헤더, CSP, 비밀정보

*정리, 5분*

- CSP의 `script-src 'self'`는 인라인 코드와 `eval`을 막아 XSS의 피해를 크게 줄입니다. 설정은 S15-P51의 Nginx에서 적용합니다.
- `VITE_` 값은 공개된 값으로 취급하고, 운영 빌드에는 소스맵을 넣지 않으며, 민감정보를 로그로 남기지 않습니다.
- 로그인 후 이동 주소는 `/`로 시작하는 내부 경로만 허용하고 `//`로 시작하는 주소는 거부합니다.

##### 확인 퀴즈

**Q1.** CSP `script-src 'self'`의 효과로 옳은 것은 무엇인가요?

1. 같은 출처의 스크립트 파일만 실행하고 인라인 코드를 막는다.
2. 외부 이미지를 막는다.
3. API 요청을 막는다.
4. 모든 스크립트를 막는다.

> 정답: 1번. 인라인 스크립트와 onerror 같은 이벤트 속성, eval이 차단됩니다.

**Q2.** 로그인 후 이동 주소로 `//evil.example`을 거부해야 하는 이유는 무엇인가요?

1. CSP가 막지 못해서
2. 슬래시가 두 개라 문법 오류라서
3. 브라우저가 현재 스킴으로 다른 호스트에 접속하는 주소로 해석해 외부 사이트로 이동하므로
4. React Router가 지원하지 않아서

> 정답: 3번. //로 시작하는 주소는 프로토콜 상대 주소로, 외부 사이트로 보내는 열린 리디렉션이 됩니다.

### S12-P42. 공급망 보안과 보안 점검 실습

> 학습 목표: 의존성과 요청 제한의 위험을 관리하고, 린트 규칙과 점검표로 프론트엔드 코드의 보안을 점검할 수 있습니다.
>
> 완성 코드 브랜치: `p42-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S12-P42-01 의존성, 공급망, 요청 제한 | 주요 개념 | 10분 |
| S12-P42-02 보안 린트 규칙 추가 | 실습 | 15분 |
| S12-P42-03 보안 점검하기 | 실습 | 20분 |
| S12-P42-04 정리: 공급망 보안과 보안 점검 실습 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S12-P42-01. 의존성, 공급망, 요청 제한

*주요 개념, 10분*

프론트엔드 프로젝트는 직접 설치한 패키지 몇 개에 딸려 오는 수백 개의 간접 의존성을 포함합니다. 이 중 하나라도 취약하거나 악성으로 바뀌면 빌드 결과물에 그대로 들어갑니다. 백엔드 과정 S11-P37에서 `pip-audit`로 파이썬 의존성을 점검한 것처럼 다음을 실천합니다.

| 실천 사항 | 방법 |
|---|---|
| 알려진 취약점 점검 | `npm audit`로 확인하고, 운영 의존성만 보려면 `npm audit --omit=dev`를 씁니다. |
| 설치 결과 고정 | `package-lock.json`을 Git에 포함하고, CI와 Docker 빌드에서는 잠금 파일 그대로 설치하는 `npm ci`를 씁니다(S15). |
| 패키지 출처 확인 | `npm audit signatures`로 레지스트리 서명을 확인합니다. 설치 전 패키지 이름의 철자를 확인합니다. 인기 패키지와 비슷한 이름의 악성 패키지(타이포스쿼팅)가 있습니다. |
| 의존성 최소화 | 몇 줄로 구현할 수 있는 기능 때문에 패키지를 추가하지 않습니다. |
| 꾸준한 갱신 | GitHub Dependabot 같은 도구로 갱신 알림을 받습니다. 차트처럼 큰 라이브러리는 메이저 버전 변경 시 동작을 확인합니다. |
| 외부 CDN 스크립트 | 가능하면 사용하지 않습니다. 써야 한다면 `integrity` 속성(SRI)으로 내용이 바뀌지 않았는지 검증합니다. |

백엔드는 로그인 실패를 제한하고 429를 돌려줍니다(백엔드 S10-P34). 프론트엔드는 이를 사용자에게 안내하고(S8), 스스로 불필요한 요청을 만들지 않아야 합니다.

- 처리 중에는 제출 버튼을 비활성화합니다(S8, S9).
- 검색은 입력할 때마다가 아니라 제출할 때 요청합니다(S7).
- 주기적으로 상태를 조회하는 화면은 간격을 적절히 두고, 탭이 보이지 않을 때는 멈춥니다(S13).
- 화면을 떠나면 진행 중인 요청을 취소합니다(S6).

#### S12-P42-02. 보안 린트 규칙 추가

*실습, 15분*

위험한 코드를 사람이 매번 찾는 대신 린트 규칙으로 막습니다. Vite 템플릿에 포함된 oxlint 설정(`.oxlintrc.json`)에 보안 규칙을 추가합니다. `error` 규칙에 걸리면 `npm run lint`가 실패하고, S16의 CI에서 병합을 막습니다.

`.oxlintrc.json`

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }],
    "react/no-danger": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "error",
    "no-eval": "error",
    "no-new-func": "error",
    "no-implied-eval": "error"
  },
  "ignorePatterns": ["dist", "playwright-report", "test-results"]
}
```

| 규칙 | 막는 것 |
|---|---|
| `react/no-danger` | `dangerouslySetInnerHTML` |
| `react/jsx-no-script-url` | `href="javascript:..."` |
| `react/jsx-no-target-blank` | `rel` 없는 `target="_blank"` (새 창이 원래 창을 조작하는 문제) |
| `no-eval`, `no-new-func`, `no-implied-eval` | 문자열을 코드로 실행하는 함수 |

규칙이 동작하는지 확인합니다. 아래 내용으로 `src/tmp.jsx`를 만들고 `npm run lint`를 실행하면 두 개의 오류가 나와야 합니다. 확인 후 파일을 지웁니다.

```jsx
export const X = () => <div dangerouslySetInnerHTML={{ __html: 'a' }} />;
eval('1');
```

린트를 실행하면 `BookDetailPage.jsx`에 "컴포넌트만 내보내는 파일이어야 한다"는 경고도 보입니다. S10-P35에서 표지 검사 함수를 컴포넌트 파일에서 내보냈기 때문입니다. 이 함수를 `src/utils/cover.js`로 옮기고 테스트를 붙입니다. 마지막 테스트는 이 검사가 보안 장치가 아니라는 점을 테스트 이름으로 남깁니다.

`src/utils/cover.js`

```js
const ALLOWED_EXT = ['.jpg', '.jpeg', '.png'];
const MAX_BYTES = 2 * 1024 * 1024;

// 업로드 전에 브라우저에서 미리 확인합니다. 사용자 편의를 위한 검사이며
// 최종 판단(415, 413, 422)은 백엔드가 합니다.
export function precheckCover(file) {
  const name = file.name.toLowerCase();
  if (!ALLOWED_EXT.some((ext) => name.endsWith(ext))) return 'jpg, jpeg, png 파일만 올릴 수 있습니다.';
  if (file.size === 0) return '빈 파일입니다.';
  if (file.size > MAX_BYTES) return '2MB 이하 파일만 올릴 수 있습니다.';
  return null;
}
```

`src/utils/cover.test.js`

```js
import { describe, expect, it } from 'vitest';
import { precheckCover } from './cover';

const file = (name, size) => ({ name, size });

describe('precheckCover', () => {
  it('허용한 확장자와 크기면 통과한다', () => {
    expect(precheckCover(file('cover.PNG', 1024))).toBeNull();
  });

  it('확장자, 빈 파일, 크기 제한을 검사한다', () => {
    expect(precheckCover(file('cover.gif', 1024))).toContain('jpg, jpeg, png');
    expect(precheckCover(file('cover.jpg', 0))).toBe('빈 파일입니다.');
    expect(precheckCover(file('cover.jpg', 2 * 1024 * 1024 + 1))).toContain('2MB');
  });

  it('이름만 그럴듯한 파일도 통과하므로 최종 검사는 백엔드가 해야 한다', () => {
    // 확장자는 이름일 뿐입니다. 실제 내용 검사는 백엔드(S9-P31)의 몫입니다.
    expect(precheckCover(file('malware.exe.png', 10))).toBeNull();
  });
});
```

#### S12-P42-03. 보안 점검하기

*실습, 20분*

**2) 의존성 점검**

```bash
npm audit
npm audit --omit=dev
npm audit signatures
```

발견된 취약점이 있으면 `npm audit fix`로 호환되는 범위에서 고치고, 메이저 버전 변경이 필요하면 영향 범위를 확인한 뒤 갱신합니다.

**3) 빌드 결과물 확인**

S6에서 만든 개발용 API 주소를 넣어 빌드한 뒤 결과물을 확인합니다. 운영용 설정 파일(`.env.production`)은 S15에서 만들므로 여기서는 값을 명령에 직접 넣습니다.

```bash
VITE_API_BASE_URL=http://127.0.0.1:8000 npm run build
ls dist/assets                             # .map 파일이 없어야 합니다.
grep -o "127.0.0.1:8000" dist/assets/*.js  # 환경 변수 값이 코드에 새겨진 것을 확인합니다.
```

API 주소가 빌드 결과물에 문자열로 들어 있는 것을 확인했다면, 비밀정보를 `VITE_` 변수에 넣으면 안 되는 이유를 직접 본 것입니다. Windows의 PowerShell에서는 `$env:VITE_API_BASE_URL="http://127.0.0.1:8000"; npm run build`로 실행합니다.

**4) 코드 검색**

```bash
grep -rn "dangerouslySetInnerHTML\|innerHTML\|eval(\|localStorage" src
grep -rn "console.log" src
```

결과가 없거나 의도한 곳뿐인지 확인합니다.

마지막으로 백엔드 과정의 보안약점 분류에 맞춘 점검표로 지금까지의 코드를 확인합니다. S18-P61의 미니 프로젝트 보안 점검에서도 이 표를 씁니다.

백엔드 과정에서 사용한 KISA 보안약점 분류에 맞춰 이 과정의 프론트엔드 대책을 정리합니다. S18의 종합 점검에서 이 표로 자기 코드를 확인합니다.

| 분류 | 점검 항목 | 이 과정의 대책 | 다룬 곳 |
|---|---|---|---|
| 입력데이터 검증 및 표현 | 출력 시 XSS | JSX 이스케이프만 사용, `dangerouslySetInnerHTML` 미사용 | S12-P40-02 |
| | 사용자 입력 주소로 이동 | 내부 경로만 허용(`safeRedirect`) | S8, S12-P41-03 |
| | 업로드 파일 | 확장자, 크기 사전 검사, 최종 검사는 백엔드 | S9 |
| 보안기능 | 인증 정보 저장 | 액세스 토큰 메모리, 리프레시 토큰 sessionStorage | S8, S12-P40-03 |
| | 권한 처리 | 화면 숨김은 UX, 권한 판단은 백엔드 | S8 |
| | 보안 헤더 | CSP, `X-Frame-Options` 등 적용 | S12-P41-01, S15 |
| 시간 및 상태 | 중복 요청, 경쟁 상태 | 버튼 비활성화, 요청 취소, 재발급 Promise 공유 | S6, S8, S9 |
| 에러처리 | 오류 메시지 노출 | 오류 형식 통일, 일반 메시지, 로그인 메시지 통일 | S6, S8, S12-P41-03 |
| 코드오류 | 위험 함수 | `eval`, `innerHTML` 미사용, CSP로 차단 | S12-P40-02, S12-P41-01 |
| 캡슐화 | 비밀정보 노출 | `VITE_` 값 공개 전제, 소스맵 미포함, 민감정보 로그 금지 | S12-P41-02 |
| API 오용 | 취약한 의존성 | `npm audit`, `npm ci`, 잠금 파일 관리 | S12-P42-01 |

> 완성 코드: 막히면 예제 저장소의 `p42-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S12-P42-04. 정리: 공급망 보안과 보안 점검 실습

*정리, 5분*

- `npm audit`, `npm ci`, 잠금 파일 관리로 의존성의 위험을 줄이고, 처리 중 버튼 비활성화와 요청 취소로 불필요한 요청을 막습니다.
- 위험한 코드는 린트 규칙(`react/no-danger`, `no-eval` 등)으로 자동으로 막습니다.
- KISA 보안약점 분류에 맞춘 점검표로 코드를 정기적으로 확인합니다.

##### 확인 퀴즈

**Q1.** 공급망 보안을 위해 CI와 Docker 빌드에서 `npm install` 대신 `npm ci`를 쓰는 이유는 무엇인가요?

1. 취약점을 자동으로 고쳐서
2. node_modules를 만들지 않아서
3. 더 최신 버전을 설치해서
4. package-lock.json에 적힌 버전 그대로 설치해 언제 빌드해도 같은 의존성이 들어가서

> 정답: 4번. npm ci는 잠금 파일과 package.json이 맞지 않으면 실패하며, 재현 가능한 설치를 보장합니다.

**Q2.** `react/no-danger` 린트 규칙이 막는 것은 무엇인가요?

1. eval 호출
2. dangerouslySetInnerHTML 사용
3. target="_blank" 링크
4. console.log

> 정답: 2번. dangerouslySetInnerHTML은 XSS의 대표적인 통로라 린트로 사용을 막습니다.

---

## S13. 관제 대시보드

*7일차 오전, 4시간*

> 섹션 목표: 관제 환경에 맞는 대시보드를 설계하고, 폴링과 요청 기록, 지표 계산을 거쳐 Recharts로 상태와 추세를 시각화합니다.

### S13-P43. 설계 원칙과 지표

> 학습 목표: 관제 대시보드가 해야 할 일과 설계 원칙을 설명하고, 지표와 데이터 소스를 고를 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S13-P43-01 관제 대시보드란 | 주요 개념 | 15분 |
| S13-P43-02 설계 원칙 | 주요 개념 | 20분 |
| S13-P43-03 무엇을 볼 것인가: 지표와 데이터 소스 | 주요 개념 | 10분 |
| S13-P43-04 정리: 설계 원칙과 지표 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S13-P43-01. 관제 대시보드란

*주요 개념, 15분*

관제(monitoring)는 시스템이 정상적으로 동작하는지 계속 지켜보고, 이상이 생기면 빨리 알아차려 대응하는 일입니다. 네트워크 운영 센터(NOC)나 보안 관제 센터(SOC)에서는 여러 대의 큰 화면에 대시보드를 띄워 두고 운영자가 수시로 바라봅니다. 따라서 관제 대시보드는 일반적인 보고서 화면과 요구 사항이 다릅니다.

| 구분 | 보고서형 대시보드 | 관제 대시보드 |
|---|---|---|
| 보는 방식 | 자리에 앉아 자세히 읽음 | 멀리서 짧게 훑어봄 |
| 핵심 질문 | 지난달 성과는 어땠나 | 지금 문제가 있는가, 어디인가 |
| 갱신 | 필요할 때 | 수 초에서 수 분 간격으로 자동 |
| 강조 대상 | 추세와 비교 | 이상 상태와 변화 |

좋은 관제 대시보드는 화면을 본 지 몇 초 안에 "정상인가, 아닌가"에 답할 수 있어야 하고, 아니라면 "어디를 더 봐야 하는가"까지 안내해야 합니다.

#### S13-P43-02. 설계 원칙

*주요 개념, 20분*

**1) 정보의 위계를 위에서 아래로 둡니다.** 가장 위에는 전체 상태(정상, 주의, 장애)를, 그 아래에 핵심 수치(KPI)를, 그 아래에 추세 차트를, 가장 아래에 세부 표를 둡니다. 운영자는 위에서 이상을 발견하면 아래로 내려가며 원인을 좁힙니다.

**2) 상태 색은 예약해 두고 다른 용도로 쓰지 않습니다.** 초록(정상), 노랑(주의), 주황(심각), 빨강(장애)은 상태를 뜻하는 색으로만 씁니다. 일반 데이터 계열에 빨강을 쓰면 운영자가 장애로 오인합니다. 이 과정은 `index.css`에 `--status-good`, `--status-warning`, `--status-serious`, `--status-critical`을 따로 정의하고, 일반 차트 선은 파랑 계열 `--series-1`로 그립니다.

**3) 색만으로 상태를 전달하지 않습니다.** 색각 이상이 있는 운영자, 흑백 출력, 멀리서 보는 화면에서는 색 구분이 어렵습니다. 상태 표시에는 항상 모양(원, 삼각형, 사각형)과 글자(정상, 주의, 장애)를 함께 씁니다.

**4) 글자는 글자 색으로 씁니다.** 수치와 이름표는 기본 글자 색(`--text-primary`, `--text-secondary`)으로 쓰고, 계열 색은 선과 막대에만 씁니다. 노란 글자처럼 배경과 대비가 낮은 글자는 읽기 어렵습니다.

**5) 어두운 바탕을 씁니다.** 오랜 시간 켜 두는 관제 화면은 눈의 피로를 줄이고 상태 색을 돋보이게 하려고 어두운 바탕을 주로 씁니다. 어두운 바탕에서는 바탕과의 대비가 충분한 색 단계를 골라야 합니다.

**6) 차트는 가볍게 그립니다.** 선은 2px, 막대 끝은 살짝 둥글게, 격자선은 바탕과 비슷한 어두운 색으로 눈에 덜 띄게 합니다. 모든 점에 숫자를 붙이지 않고, 정확한 값은 마우스를 올리면 툴팁으로 보여 줍니다.

**7) 축은 하나만 씁니다.** 응답 시간(ms)과 요청 수(건)처럼 단위가 다른 값을 좌우 두 개의 축으로 한 차트에 겹치면 두 선의 교차나 기울기가 축 범위 설정에 따라 마음대로 바뀌어 잘못된 해석을 낳습니다. 단위가 다르면 차트를 나눕니다.

**8) 언제의 데이터인지 밝힙니다.** 갱신 간격과 마지막 갱신 시각을 화면에 표시합니다. 숫자가 멈춰 있을 때 "정상이라 변화가 없는 것"인지 "수집이 끊긴 것"인지 구분할 수 있어야 합니다. 시각은 사용자의 시간대로 표시합니다(S9).

**9) 숫자는 자릿수를 맞춥니다.** 같은 열의 숫자는 오른쪽 정렬하고, 글꼴의 고정폭 숫자(`font-variant-numeric: tabular-nums`)를 써서 값이 바뀌어도 글자가 흔들리지 않게 합니다.

#### S13-P43-03. 무엇을 볼 것인가: 지표와 데이터 소스

*주요 개념, 10분*

서비스 관제에서 널리 쓰는 기준으로 Google SRE의 네 가지 황금 신호(Golden Signals)가 있습니다.

| 신호 | 의미 | 예 |
|---|---|---|
| 지연(Latency) | 요청 처리에 걸리는 시간 | 평균, p95 응답 시간 |
| 트래픽(Traffic) | 요청량 | 분당 요청 수 |
| 오류(Errors) | 실패한 요청의 비율 | 5xx 비율 |
| 포화(Saturation) | 자원이 얼마나 찼는가 | CPU, 메모리, DB 연결 수 |

p95는 "요청 100건 중 95번째로 빠른 요청의 시간"입니다. 평균은 대부분 빠르고 일부가 매우 느린 상황을 가리기 쉬우므로, 관제에서는 평균과 함께 p95 같은 백분위수를 봅니다.

이 과정의 백엔드에서 이 신호들을 얻을 수 있는 곳은 다음과 같습니다.

| 데이터 소스 | 얻을 수 있는 것 | 한계 |
|---|---|---|
| `GET /health` (백엔드 S8-P28) | API 생존 여부, DB 연결 상태, 응답 시간 | 순간의 상태만 알 수 있음 |
| `GET /books?limit=1`의 `total` | 등록 도서 수(업무 지표) | 업무 데이터 일부만 |
| 브라우저에서 보낸 요청의 기록 | 이 브라우저가 겪은 응답 시간과 상태 코드 | 다른 사용자의 요청은 모름 |
| 백엔드 JSON 요청 로그 (백엔드 S8-P28) | 모든 요청의 경로, 상태, 처리 시간 | 실시간이 아니라 파일로 받아 분석 |
| CloudWatch (백엔드 S15-P51) | 운영 환경의 로그와 지표, 경보 | AWS 콘솔이나 별도 대시보드 필요 |

백엔드에는 통계 전용 API가 없으므로, 이 과정의 대시보드는 위의 첫 네 가지 소스를 조합합니다. 포화 신호(CPU, 메모리)는 브라우저에서 얻을 수 없으므로 S13-P44-02의 인프라 관제 도구가 담당할 영역입니다.

#### S13-P43-04. 정리: 설계 원칙과 지표

*정리, 5분*

- 관제 대시보드는 몇 초 안에 "정상인가, 어디가 문제인가"에 답할 수 있도록 상태, KPI, 추세, 상세 순서로 구성합니다.
- 상태 색은 예약해 두고 항상 모양과 글자를 함께 표시하며, 단위가 다른 값은 차트를 나눕니다.
- 지연, 트래픽, 오류, 포화의 네 가지 신호를 기준으로 지표를 고르고, 데이터 소스의 한계를 이해합니다.

##### 확인 퀴즈

**Q1.** 관제 대시보드 설계 원칙으로 알맞지 않은 것은 무엇인가요?

1. 마지막 갱신 시각을 표시한다.
2. 단위가 다른 두 값을 좌우 이중 축 한 차트에 겹친다.
3. 상태 색을 일반 데이터 계열에 쓰지 않는다.
4. 상태는 색과 함께 모양과 글자로 표시한다.

> 정답: 2번. 이중 축은 축 범위에 따라 해석이 달라지므로 단위가 다르면 차트를 나눕니다.

**Q2.** p95 응답 시간을 평균과 함께 보는 이유는 무엇인가요?

1. 계산이 더 쉬워서
2. 일부 매우 느린 요청을 평균이 가리기 쉬워서
3. 평균은 부정확해서
4. 로그에 평균이 없어서

> 정답: 2번. 대부분 빠르고 일부가 매우 느린 상황은 평균만으로는 드러나지 않습니다.

### S13-P44. 차트 형태와 시각화 도구

> 학습 목표: 데이터가 하는 일에 맞는 차트 형태를 고르고, 시각화 도구를 비교해 선택할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S13-P44-01 차트 형태 고르기 | 주요 개념 | 10분 |
| S13-P44-02 시각화 도구 비교 | 주요 개념 | 15분 |
| S13-P44-03 대시보드 화면 설계하기 | 실습 | 20분 |
| S13-P44-04 정리: 차트 형태와 시각화 도구 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S13-P44-01. 차트 형태 고르기

*주요 개념, 10분*

차트를 고를 때는 "이 데이터가 하는 일"을 먼저 정합니다.

| 데이터가 하는 일 | 알맞은 형태 | 이 대시보드의 예 |
|---|---|---|
| 하나의 핵심 수치 | 숫자 타일(KPI 카드) | 등록 도서 수, 평균 응답 시간, 오류율 |
| 현재 상태 | 상태 배지(모양, 글자, 색) | API 상태, DB 상태 |
| 시간에 따른 상태 이력 | 상태 띠(칸마다 한 번의 점검) | 헬스 체크 이력 |
| 시간에 따른 수치 변화 | 선 차트 | 응답 시간 추이, 분당 요청 수 |
| 범주별 크기 비교 | 막대 차트 | 상태 코드 묶음별 건수 |
| 여러 속성을 정확히 비교 | 표 | 느린 API 상위 10개 |

관제 화면에서 자주 보이는 원형 게이지나 3D 차트는 화면을 많이 차지하는 데 비해 전달하는 정보가 적고 값 비교가 어렵습니다. 같은 정보는 숫자 타일이나 막대로 더 정확히 전달할 수 있습니다.

#### S13-P44-02. 시각화 도구 비교

*주요 개념, 15분*

**React 차트 라이브러리**

| 라이브러리 | 렌더링 | 특징 | 어울리는 경우 |
|---|---|---|---|
| Recharts | SVG | React 컴포넌트로 차트를 조립하는 선언형 방식, 학습이 쉬움 | 일반적인 선, 막대, 영역 차트 |
| Chart.js + react-chartjs-2 | Canvas | 가볍고 문서가 많음, 설정 객체 방식 | 단순한 차트를 빠르게 |
| Apache ECharts + echarts-for-react | Canvas, SVG | 차트 종류가 매우 많고 대용량 데이터, 지도, 히트맵에 강함 | 데이터가 많은 관제 화면 |
| Nivo | SVG, Canvas | D3 기반, 기본 디자인이 정돈됨 | 디자인 완성도가 중요한 화면 |
| visx, D3 | SVG | 저수준 도구로 자유도가 가장 높음 | 맞춤형 시각화 |
| uPlot | Canvas | 매우 빠른 시계열 전용 | 초 단위로 수만 점을 그리는 화면 |

SVG 방식은 차트 요소가 DOM이 되어 스타일 지정과 접근성 처리가 쉽지만, 점이 수만 개를 넘으면 느려집니다. Canvas 방식은 많은 데이터를 빠르게 그리지만 개별 요소를 다루기는 어렵습니다. 이 과정은 데이터 양이 많지 않고 React 방식에 익숙해지기 좋은 **Recharts**를 사용합니다.

**인프라 관제 도구**

실제 운영 환경에서는 대시보드를 직접 만들기보다 전용 도구를 함께 쓰는 경우가 많습니다.

| 도구 | 특징 |
|---|---|
| Grafana | 다양한 데이터 소스(Prometheus, CloudWatch, PostgreSQL 등)를 연결해 대시보드와 경보를 구성합니다. 관제 분야의 사실상 표준입니다. |
| Kibana, OpenSearch Dashboards | 로그 검색과 시각화에 특화되어 있습니다. |
| Amazon CloudWatch 대시보드 | 백엔드 과정 S15에서 다룬 AWS 자원의 지표와 로그를 바로 시각화합니다. |

직접 만든 대시보드는 업무 지표(도서 수, 대여 현황)와 서비스 사용자 관점의 상태를 보여 주고, 서버 자원과 경보는 전용 도구에 맡기는 식으로 역할을 나눌 수 있습니다.

#### S13-P44-03. 대시보드 화면 설계하기

*실습, 20분*

코드를 쓰기 전에 화면을 먼저 설계합니다. 종이나 화이트보드에 그려도 좋습니다.

1. 다음 질문에 답을 적습니다.
   - 운영자가 이 화면을 보고 가장 먼저 알아야 할 것은 무엇입니까?
   - 지금 백엔드에서 얻을 수 있는 데이터 소스(S13-P43-03의 표)로 어떤 지표를 만들 수 있습니까?
   - 각 지표는 S13-P44-01의 표에서 어떤 형태가 알맞습니까?
   - 몇 초 간격으로 갱신해야 합니까? 지표마다 다를 이유가 있습니까?
2. S13-P43-02의 정보 위계(상태 → KPI → 추세 → 상세)에 따라 화면 배치를 그립니다.
3. 아래 예시 설계와 비교합니다. 이 과정에서 구현할 화면입니다.

```text
┌──────────────────────────────────────────────────────────────────┐
│ 도서 서비스 관제 대시보드            헬스 체크 10초 간격, 마지막 갱신 │
├──────────┬──────────┬──────────┬──────────────┬─────────────────┤
│ API 상태  │ 데이터베이스│ 등록 도서 │ 브라우저 측정   │ 오류율           │  ← 상태와 KPI
│ ● 정상    │ ● 정상     │ 25권      │ 응답 시간 50ms │ 0.0%            │
├──────────┴──────────┴──────────┼──────────────┴─────────────────┤
│ 헬스 체크 이력 (상태 띠)            │ 브라우저 요청 상태 코드 분포       │  ← 추세
│ 헬스 체크 응답 시간 (선 차트)       │ (막대 차트)                       │
├────────────────────────────────┴────────────────────────────────┤
│ 백엔드 요청 로그 분석: 분당 요청 수 / 로그 상태 코드 분포 / 느린 API 표 │  ← 상세
└──────────────────────────────────────────────────────────────────┘
```

4. 내 설계와 다른 점이 있다면 어느 쪽이 운영자에게 더 빨리 답을 주는지 비교해 봅니다. 예를 들어 오류율을 원형 게이지로 그렸다면, 숫자 타일과 비교해 무엇이 나은지 생각해 봅니다.

#### S13-P44-04. 정리: 차트 형태와 시각화 도구

*정리, 5분*

- 데이터가 하는 일(핵심 수치, 현재 상태, 상태 이력, 수치 변화, 범주 비교, 정밀 비교)에 따라 형태를 고릅니다.
- React 차트 라이브러리는 SVG와 Canvas 방식의 장단점이 있으며, 이 과정은 Recharts를 씁니다.
- 서버 자원과 경보는 Grafana, CloudWatch 같은 전용 도구에 맡기고, 직접 만든 대시보드는 업무 지표와 사용자 관점의 상태를 보여 줍니다.

##### 확인 퀴즈

**Q1.** 시간에 따른 응답 시간 변화를 보여 주기에 알맞은 형태는 무엇인가요?

1. 숫자 타일
2. 3D 막대 차트
3. 원형 차트
4. 선 차트

> 정답: 4번. 시간에 따른 수치 변화는 선 차트가 가장 잘 보여 줍니다.

**Q2.** 수만 개의 점을 초 단위로 그려야 할 때 유리한 렌더링 방식은 무엇인가요?

1. HTML 표
2. CSS 그리드
3. SVG
4. Canvas

> 정답: 4번. SVG는 요소가 DOM이 되어 많아지면 느려지고, Canvas는 많은 데이터를 빠르게 그립니다.

### S13-P45. 폴링, 요청 기록, 지표 계산

> 학습 목표: 폴링을 올바르게 구현하는 규칙을 설명하고, 브라우저 요청 기록과 지표 계산 함수를 만들어 테스트할 수 있습니다.
>
> 완성 코드 브랜치: `p45-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S13-P45-01 실시간 갱신 방식 | 주요 개념 | 10분 |
| S13-P45-02 브라우저 요청 기록 | 실습 | 20분 |
| S13-P45-03 지표 계산 함수와 테스트 | 실습 | 15분 |
| S13-P45-04 정리: 폴링, 요청 기록, 지표 계산 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S13-P45-01. 실시간 갱신 방식

*주요 개념, 10분*

| 방식 | 원리 | 장점 | 단점 |
|---|---|---|---|
| 폴링 | 일정 간격으로 요청 | 구현이 단순하고 기존 REST API 그대로 사용 | 변화가 없어도 요청, 간격만큼 늦음 |
| SSE(Server-Sent Events) | 서버가 열린 연결로 이벤트를 계속 보냄 | 서버에서 브라우저로의 실시간 전송에 적합 | 백엔드에 스트리밍 엔드포인트 필요 |
| WebSocket | 양방향 연결 유지 | 양방향 실시간 통신 | 구현과 운영(프록시, 재연결)이 복잡 |

백엔드에 실시간 전송 기능이 없으므로 이 과정은 폴링을 사용합니다. 폴링을 올바르게 구현하려면 다음을 지켜야 합니다.

- 앞의 요청이 끝난 뒤 다음 요청을 예약합니다. `setInterval`은 응답이 늦어도 정해진 간격마다 요청을 쌓으므로 `setTimeout`을 이어 붙이는 방식을 씁니다.
- 탭이 보이지 않을 때(`document.visibilityState`가 `hidden`)는 요청을 쉬어 서버 부담을 줄입니다.
- 화면을 떠나면 타이머를 멈추고 진행 중인 요청을 취소합니다.
- 간격은 데이터의 성격에 맞춥니다. 헬스 체크는 10초, 업무 지표는 60초처럼 차등을 둡니다.

이 과정은 이 규칙을 직접 구현하지 않고 S10에서 도입한 TanStack Query의 `refetchInterval`로 해결합니다. `refetchInterval`은 앞 요청이 끝나기 전에 다음 요청을 겹쳐 보내지 않고, 탭이 보이지 않으면 쉬며(`refetchIntervalInBackground`의 기본값 `false`), 화면을 떠나면 멈춥니다. 위 규칙을 라이브러리가 지켜 주는 것입니다. 규칙 자체를 알아 두어야 라이브러리 없이 구현하거나 다른 도구를 고를 때도 같은 기준으로 판단할 수 있습니다.

#### S13-P45-02. 브라우저 요청 기록

*실습, 20분*

모든 API 요청은 S6과 S8에서 만든 axios 인스턴스를 거칩니다. 인터셉터에서 요청 시작 시각과 응답 상태를 기록하면, 별도 서버 없이도 이 브라우저가 겪은 응답 시간과 오류를 집계할 수 있습니다.

기록은 React 밖의 일반 모듈에 최근 200건까지 보관합니다. 변경이 생기면 구독자에게 알립니다.

`src/dashboard/telemetry.js`

```js
// 브라우저에서 보낸 API 요청의 결과를 최근 200건까지 기억합니다.
// 관제 대시보드가 이 기록으로 응답 시간과 상태 코드 분포를 그립니다.
const MAX_RECORDS = 200;
let records = [];
const listeners = new Set();

export function recordRequest(entry) {
  records = [...records, entry].slice(-MAX_RECORDS);
  listeners.forEach((listener) => listener());
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getRecords() {
  return records;
}
```

React 컴포넌트가 이런 외부 저장소의 값을 화면에 반영하려면 `useSyncExternalStore` 훅을 씁니다. 저장소를 구독하는 함수와 현재 값을 읽는 함수를 넘기면, 값이 바뀔 때 컴포넌트를 다시 그려 줍니다. `recordRequest`가 매번 새 배열을 만들어 바꿔 끼우는 이유는, 이 훅이 이전 값과 새 값을 `===`로 비교해 변경 여부를 판단하기 때문입니다.

`src/dashboard/useTelemetry.js`

```js
import { useSyncExternalStore } from 'react';
import { getRecords, subscribe } from './telemetry';

// 바깥 저장소(telemetry.js)의 값을 React 화면과 연결합니다.
export function useTelemetry() {
  return useSyncExternalStore(subscribe, getRecords);
}
```

`src/api/client.js`에 기록 기능을 더합니다. S8의 코드와 비교해 바뀐 곳은 네 군데입니다. `recordRequest`를 가져오고, 요청 인터셉터에서 시작 시각(`config.metadata.startedAt`)을 적고, 기록 함수 `record`를 추가하고, 응답 인터셉터의 성공과 실패 양쪽에서 `record`를 호출합니다. 응답을 받지 못한 요청은 상태 0으로 기록합니다. 파일 전체는 다음과 같습니다.

`src/api/client.js`

```js
import axios from 'axios';
import { toApiError, ApiError, NETWORK_ERROR_MESSAGE } from './errors';
import { tokenStore } from '../auth/tokenStore';
import { recordRequest } from '../dashboard/telemetry';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// 요청 인터셉터: 토큰을 붙이고 시작 시각을 기록합니다.
api.interceptors.request.use((config) => {
  const token = tokenStore.getAccess();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  config.metadata = { startedAt: performance.now() };
  return config;
});

function record(config, status) {
  if (!config?.metadata) return;
  recordRequest({
    time: Date.now(),
    method: (config.method ?? 'get').toUpperCase(),
    path: config.url,
    status,
    durationMs: Math.round(performance.now() - config.metadata.startedAt),
  });
}

// 이 경로들은 401이 나와도 재발급을 시도하지 않습니다.
const NO_RETRY_PATHS = ['/auth/token', '/auth/refresh', '/auth/signup', '/auth/logout'];

// 리프레시 요청이 동시에 여러 번 나가지 않도록 하나의 Promise를 공유합니다.
let refreshPromise = null;

async function refreshAccessToken() {
  const refreshToken = tokenStore.getRefresh();
  if (!refreshToken) throw new Error('NO_REFRESH_TOKEN');
  // 인터셉터가 없는 기본 axios로 보내 무한 반복을 막습니다.
  const { data } = await axios.post(`${API_BASE_URL}/auth/refresh`, {
    refresh_token: refreshToken,
  });
  tokenStore.save(data);
  return data.access_token;
}

// 재발급에 실패했을 때 로그인 상태를 지우는 일을 AuthProvider에 맡기기 위한 연결 고리입니다.
let onAuthExpired = () => {};
export function setOnAuthExpired(handler) {
  onAuthExpired = handler;
}

// 응답 인터셉터: 기록을 남기고, 401이면 한 번만 재발급 후 다시 보냅니다.
api.interceptors.response.use(
  (response) => {
    record(response.config, response.status);
    return response;
  },
  async (error) => {
    // 화면을 떠나 취소한 요청은 오류가 아니므로 그대로 넘깁니다.
    if (axios.isCancel(error)) throw error;

    const { config, response } = error;
    record(config, response?.status ?? 0);

    if (!response) {
      throw new ApiError({ status: 0, code: 'NETWORK_ERROR', message: NETWORK_ERROR_MESSAGE });
    }

    const canRetry = !NO_RETRY_PATHS.includes(config.url) && !config._retried;
    if (response.status === 401 && canRetry && tokenStore.getRefresh()) {
      config._retried = true;
      try {
        refreshPromise ??= refreshAccessToken().finally(() => {
          refreshPromise = null;
        });
        await refreshPromise;
        return api(config); // 새 토큰으로 원래 요청을 다시 보냅니다.
      } catch {
        tokenStore.clear();
        onAuthExpired();
      }
    }

    throw toApiError(response.status, response.data, response.headers);
  },
);

// 백엔드가 돌려준 /covers/... 같은 경로를 화면에서 열 수 있는 주소로 바꿉니다.
export function toAssetUrl(path) {
  if (!path) return null;
  return `${API_BASE_URL}${path}`;
}
```

`performance.now()`는 페이지가 열린 뒤로 흐른 시간을 아주 정밀하게 돌려주는 함수로, 시스템 시계가 바뀌어도 영향을 받지 않아 소요 시간 측정에 적합합니다. 이렇게 잰 시간은 네트워크 왕복을 포함하므로 백엔드 로그의 `duration_ms`(서버 내부 처리 시간)보다 깁니다. 두 값의 차이가 크다면 네트워크나 프록시 구간을 의심할 수 있습니다.

#### S13-P45-03. 지표 계산 함수와 테스트

*실습, 15분*

평균, p95, 상태 코드 묶음, 오류율, 경로 묶기, 로그 해석, 헬스 판정을 순수 함수로 모읍니다. 화면 코드와 분리하면 Console에서 따로 시험해 보기 쉽고, 다른 화면에서도 재사용할 수 있습니다.

`src/dashboard/metrics.js`

```js
// 대시보드 지표 계산 함수 모음. 화면 코드와 분리해 두면 따로 검증하기 쉽습니다.

export function percentile(values, p) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.ceil((p / 100) * sorted.length) - 1;
  return sorted[Math.max(0, index)];
}

export function average(values) {
  if (values.length === 0) return null;
  return Math.round(values.reduce((sum, v) => sum + v, 0) / values.length);
}

// 상태 코드를 2xx, 4xx 같은 묶음으로 나눕니다. 0은 응답을 받지 못한 경우입니다.
export function statusClass(status) {
  if (!status) return '연결 실패';
  return `${Math.floor(status / 100)}xx`;
}

export const STATUS_CLASS_ORDER = ['2xx', '3xx', '4xx', '5xx', '연결 실패'];

export function countByStatusClass(records) {
  const counts = Object.fromEntries(STATUS_CLASS_ORDER.map((key) => [key, 0]));
  for (const record of records) counts[statusClass(record.status)] += 1;
  return STATUS_CLASS_ORDER.map((name) => ({ name, count: counts[name] }));
}

export function errorRate(records) {
  if (records.length === 0) return null;
  const errors = records.filter((r) => !r.status || r.status >= 500).length;
  return (errors / records.length) * 100;
}

// /books/12/cover -> /books/{id}/cover 처럼 숫자 경로를 묶어 같은 API로 집계합니다.
export function normalizePath(path = '') {
  return path.split('?')[0].replace(/\/\d+(?=\/|$)/g, '/{id}');
}

// JSON Lines(한 줄에 JSON 하나) 로그를 읽어 요청 로그만 골라냅니다.
export function parseRequestLogs(text) {
  const entries = [];
  let invalid = 0;
  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const entry = JSON.parse(trimmed);
      if (entry.logger === 'app.request' && typeof entry.status === 'number') entries.push(entry);
    } catch {
      invalid += 1; // JSON이 아닌 줄(서버 시작 메시지 등)은 건너뜁니다.
    }
  }
  return { entries, invalid };
}

export function summarizeByPath(entries) {
  const groups = new Map();
  for (const entry of entries) {
    const key = `${entry.method} ${normalizePath(entry.path)}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(entry);
  }
  return [...groups.entries()]
    .map(([api, items]) => {
      const durations = items.map((i) => i.duration_ms);
      return {
        api,
        count: items.length,
        errors: items.filter((i) => i.status >= 500).length,
        avgMs: average(durations),
        p95Ms: percentile(durations, 95),
      };
    })
    .sort((a, b) => b.p95Ms - a.p95Ms);
}

export function countPerMinute(entries) {
  const buckets = new Map();
  for (const entry of entries) {
    const minute = String(entry.time).slice(0, 16); // "2026-11-23T09:15"
    buckets.set(minute, (buckets.get(minute) ?? 0) + 1);
  }
  return [...buckets.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([minute, count]) => ({ minute: minute.slice(11), count }));
}

// 헬스 체크 한 건을 정상, 주의, 장애로 판정합니다.
export function healthLevel(check) {
  if (!check) return 'unknown';
  if (!check.reachable || check.httpStatus >= 500) return 'critical';
  if (check.status !== 'ok' || check.database !== 'ok') return 'warning';
  return 'good';
}
```

몇 가지 계산을 짚어 봅니다.

- `percentile`은 값을 정렬한 뒤 해당 순번의 값을 고르는 가장 단순한 방식(nearest-rank)입니다.
- `errorRate`는 5xx와 연결 실패(0)만 오류로 셉니다. 401, 404, 409 같은 4xx는 사용자의 요청 문제이거나 정상적인 업무 규칙 결과라서 서비스 장애로 보지 않습니다.
- `normalizePath`는 `/books/12/cover`와 `/books/37/cover`를 `/books/{id}/cover` 하나로 묶습니다. 숫자 경로를 그대로 두면 도서마다 다른 API로 집계되어 의미 있는 통계가 나오지 않습니다.
- `parseRequestLogs`는 로그를 한 줄씩 `JSON.parse`하고, JSON이 아닌 줄은 건너뛰며 그 수를 셉니다. 백엔드 로그 중 `logger`가 `app.request`인 요청 처리 로그만 고릅니다.
- `countPerMinute`은 로그 `time` 값의 앞 16글자(`2026-11-23T09:15` 또는 `2026-11-23 09:15`)로 분 단위를 만듭니다. 백엔드 로그의 시각 형식에 따라 이 부분을 조정합니다.
- `healthLevel`은 응답이 없거나 5xx면 장애, 응답은 정상이지만 상태 값이 `ok`가 아니면 주의, 그 밖에는 정상으로 판정합니다. DB가 끊기면 백엔드는 503을 돌려주므로 장애로 표시됩니다. API는 살아 있어도 서비스 기능을 제공할 수 없는 상태이기 때문입니다.

계산 함수는 화면과 분리되어 있으므로 S11에서 배운 대로 단위 테스트로 검증합니다. 경계값(빈 배열)과 로그 형식이 섞인 경우를 함께 시험합니다.

`src/dashboard/metrics.test.js`

```js
import { describe, expect, it } from 'vitest';
import { countByStatusClass, countPerMinute, errorRate, healthLevel, normalizePath, parseRequestLogs, percentile, summarizeByPath } from './metrics';

describe('기본 통계', () => {
  it('p95는 정렬한 값에서 95번째 위치의 값이다', () => {
    const values = Array.from({ length: 100 }, (_, i) => i + 1); // 1~100
    expect(percentile(values, 95)).toBe(95);
    expect(percentile([], 95)).toBeNull();
  });

  it('오류율은 5xx와 연결 실패(0)만 센다', () => {
    const records = [{ status: 200 }, { status: 404 }, { status: 500 }, { status: 0 }];
    expect(errorRate(records)).toBe(50);
  });

  it('상태 코드를 묶음별로 센다', () => {
    const counts = countByStatusClass([{ status: 200 }, { status: 201 }, { status: 409 }, { status: 0 }]);
    expect(counts).toEqual([
      { name: '2xx', count: 2 },
      { name: '3xx', count: 0 },
      { name: '4xx', count: 1 },
      { name: '5xx', count: 0 },
      { name: '연결 실패', count: 1 },
    ]);
  });
});

describe('로그 분석', () => {
  it('숫자 경로를 {id}로 묶는다', () => {
    expect(normalizePath('/books/12/cover?x=1')).toBe('/books/{id}/cover');
  });

  it('JSON Lines에서 요청 로그만 골라내고 나머지 줄은 센다', () => {
    const text = [
      'INFO:     Started server process',
      '{"time":"2026-11-23T09:15:01","logger":"app.request","method":"GET","path":"/books/1","status":200,"duration_ms":12}',
      '{"time":"2026-11-23T09:15:30","logger":"app.request","method":"GET","path":"/books/2","status":500,"duration_ms":40}',
      '{"time":"2026-11-23T09:16:02","logger":"app.other","message":"x"}',
    ].join('\n');
    const { entries, invalid } = parseRequestLogs(text);
    expect(entries).toHaveLength(2);
    expect(invalid).toBe(1);
    expect(countPerMinute(entries)).toEqual([{ minute: '09:15', count: 2 }]);
    expect(summarizeByPath(entries)[0]).toMatchObject({ api: 'GET /books/{id}', count: 2, errors: 1 });
  });
});

describe('healthLevel', () => {
  it('응답 없음과 5xx는 장애, DB 이상은 주의다', () => {
    expect(healthLevel({ reachable: false })).toBe('critical');
    expect(healthLevel({ reachable: true, httpStatus: 503, status: 'error', database: 'unreachable' })).toBe('critical');
    expect(healthLevel({ reachable: true, httpStatus: 200, status: 'ok', database: 'slow' })).toBe('warning');
    expect(healthLevel({ reachable: true, httpStatus: 200, status: 'ok', database: 'ok' })).toBe('good');
  });
});
```

`npm test`로 실행해 모두 통과하는지 확인합니다.

> 완성 코드: 막히면 예제 저장소의 `p45-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S13-P45-04. 정리: 폴링, 요청 기록, 지표 계산

*정리, 5분*

- 폴링은 앞 요청이 끝난 뒤 예약하고, 탭이 보이지 않으면 쉬며, 화면을 떠나면 멈춥니다. TanStack Query의 `refetchInterval`이 이 규칙을 지킵니다.
- axios 인터셉터에서 요청 시작 시각과 응답 상태를 기록하면 별도 서버 없이 브라우저가 겪은 응답 시간과 오류를 집계할 수 있습니다.
- 지표 계산은 순수 함수로 분리해 테스트하고, 경로의 숫자는 `{id}`로 묶어 같은 API로 집계합니다.

##### 확인 퀴즈

**Q1.** 폴링을 `setInterval` 대신 앞 요청이 끝난 뒤 다음 요청을 예약하는 방식으로 구현하는 이유는 무엇인가요?

1. 코드가 짧아서
2. 응답이 느릴 때 요청이 겹쳐 쌓이지 않게 하려고
3. 브라우저 호환성 때문에
4. 탭이 보이지 않을 때도 계속 실행하려고

> 정답: 2번. setInterval은 응답이 늦어도 정해진 간격마다 요청을 쌓습니다.

**Q2.** 오류율 계산에서 4xx를 제외한 이유는 무엇인가요?

1. 백엔드가 4xx를 보내지 않아서
2. 4xx는 기록되지 않아서
3. 4xx는 사용자 요청의 문제나 정상적인 업무 규칙 결과이지 서비스 장애가 아니어서
4. 4xx는 항상 재시도로 성공해서

> 정답: 3번. 서비스 장애 지표에는 5xx와 연결 실패만 셉니다. 4xx가 급증하면 따로 살펴볼 신호입니다.

### S13-P46. 상태 패널과 차트

> 학습 목표: Recharts로 상태 패널과 차트를 만들고, 폴링으로 갱신되는 관제 대시보드 화면을 조립할 수 있습니다.
>
> 완성 코드 브랜치: `p46-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S13-P46-01 Recharts 설치와 공통 표시 컴포넌트 | 실습 | 15분 |
| S13-P46-02 헬스 체크 패널과 상태 코드 분포 | 실습 | 15분 |
| S13-P46-03 대시보드 화면 조립 | 실습 | 15분 |
| S13-P46-04 정리: 상태 패널과 차트 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S13-P46-01. Recharts 설치와 공통 표시 컴포넌트

*실습, 15분*

```bash
npm install recharts
```

상태 배지는 S13-P43-02의 원칙대로 모양과 글자, 색을 함께 보여 줍니다. 모양 문자에는 `aria-hidden="true"`를 붙여 화면 낭독기가 글자만 읽게 합니다.

`src/dashboard/StatusBadge.jsx`

```jsx
// 상태는 색만으로 구분하지 않고 모양과 글자를 함께 보여 줍니다.
const STATUS = {
  good: { label: '정상', shape: '●' },
  warning: { label: '주의', shape: '▲' },
  critical: { label: '장애', shape: '■' },
  unknown: { label: '확인 중', shape: '○' },
};

export default function StatusBadge({ level, text }) {
  const status = STATUS[level] ?? STATUS.unknown;
  return (
    <span className={`status status-${level}`}>
      <span aria-hidden="true">{status.shape}</span> {text ?? status.label}
    </span>
  );
}
```

KPI 카드는 제목, 큰 숫자, 단위, 보조 설명으로 구성합니다. 상태 카드처럼 숫자가 없는 경우에는 `value`를 넘기지 않으면 숫자 칸을 그리지 않습니다. `value`에 `null`을 넘기면 아직 값이 없다는 뜻으로 `-`를 표시합니다.

`src/dashboard/KpiCard.jsx`

```jsx
export default function KpiCard({ title, value, unit, hint, children }) {
  return (
    <article className="kpi">
      <h3>{title}</h3>
      {/* value를 넘기지 않은 카드(상태 카드)는 숫자 칸을 그리지 않습니다. */}
      {value !== undefined && (
        <p className="kpi-value">
          {value ?? '-'}
          {value !== null && unit && <small> {unit}</small>}
        </p>
      )}
      {children}
      {hint && <p className="kpi-hint">{hint}</p>}
    </article>
  );
}
```

차트 툴팁은 Recharts 기본 툴팁 대신 대시보드 색에 맞춘 컴포넌트를 씁니다. Recharts는 툴팁 컴포넌트에 `active`, `payload`, `label`을 넘겨 줍니다.

`src/dashboard/ChartTooltip.jsx`

```jsx
// Recharts 기본 툴팁 대신 대시보드 색에 맞춘 툴팁을 씁니다.
export default function ChartTooltip({ active, payload, label, unit = '' }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <div className="muted">{label}</div>
      <strong>
        {payload[0].value}
        {unit}
      </strong>
    </div>
  );
}
```

#### S13-P46-02. 헬스 체크 패널과 상태 코드 분포

*실습, 15분*

헬스 체크 패널은 최근 30번의 점검 결과를 상태 띠로, 응답 시간을 선 차트로 보여 줍니다. 상태 띠의 각 칸에는 `title` 속성으로 시각과 결과를 넣어 마우스를 올리면 볼 수 있게 했습니다.

`src/dashboard/HealthPanel.jsx`

```jsx
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartTooltip from './ChartTooltip';
import StatusBadge from './StatusBadge';
import { healthLevel } from './metrics';

const timeFormat = new Intl.DateTimeFormat('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

export default function HealthPanel({ history }) {
  const data = history
    .filter((c) => c.durationMs !== null)
    .map((c) => ({ time: timeFormat.format(c.checkedAt), ms: c.durationMs }));

  return (
    <article className="panel">
      <h2>헬스 체크 이력</h2>
      {/* 최근 점검 결과를 한 칸씩 나열합니다. 칸에 마우스를 올리면 시각과 결과가 보입니다. */}
      <div className="strip" role="list" aria-label="최근 헬스 체크 결과">
        {history.map((check) => {
          const level = healthLevel(check);
          return (
            <span
              key={check.checkedAt}
              role="listitem"
              className={`strip-cell status-bg-${level}`}
              title={`${timeFormat.format(check.checkedAt)} ${check.status} / DB ${check.database}`}
            />
          );
        })}
      </div>
      <div className="legend">
        <StatusBadge level="good" /> <StatusBadge level="warning" text="주의(DB 이상)" />{' '}
        <StatusBadge level="critical" text="장애(응답 없음, 5xx)" />
      </div>

      <h3>헬스 체크 응답 시간 (ms)</h3>
      <div className="chart">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
            <CartesianGrid stroke="var(--grid)" vertical={false} />
            <XAxis dataKey="time" stroke="var(--text-muted)" tick={{ fontSize: 12 }} minTickGap={40} />
            <YAxis stroke="var(--text-muted)" tick={{ fontSize: 12 }} width={40} />
            <Tooltip content={<ChartTooltip unit=" ms" />} cursor={{ stroke: 'var(--text-muted)' }} />
            <Line
              type="monotone"
              dataKey="ms"
              stroke="var(--series-1)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
```

Recharts는 차트를 컴포넌트로 조립합니다. `ResponsiveContainer`가 부모 너비에 맞춰 크기를 정하고, 그 안의 `LineChart`에 데이터 배열을 넘긴 뒤 `XAxis`, `YAxis`, `CartesianGrid`, `Tooltip`, `Line`을 자식으로 넣습니다. `dataKey`는 데이터 객체의 어느 속성을 쓸지 정합니다. 색은 `var(--series-1)`처럼 CSS 변수로 지정해 스타일 파일 한 곳에서 관리합니다. 계열이 하나뿐이므로 범례 대신 제목으로 무엇을 그렸는지 밝혔습니다. 데이터가 주기적으로 바뀌는 차트는 `isAnimationActive={false}`로 애니메이션을 꺼서, 갱신될 때마다 선이 움직여 시선을 빼앗지 않게 합니다.

상태 코드 분포는 막대 차트로 그립니다. 막대마다 의미가 정해진 상태 색을 쓰되, 축 이름과 막대 위 숫자가 함께 있어 색 없이도 읽을 수 있습니다. 같은 컴포넌트를 브라우저 기록과 로그 분석 양쪽에서 재사용하므로 제목을 props로 받습니다.

`src/dashboard/StatusDistribution.jsx`

```jsx
import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartTooltip from './ChartTooltip';
import { countByStatusClass } from './metrics';

// 상태 묶음마다 의미가 정해진 상태 색을 씁니다. 막대 위 숫자와 축 이름이 함께 나오므로
// 색만으로 구분하지 않습니다.
const COLOR = {
  '2xx': 'var(--status-good)',
  '3xx': 'var(--series-1)',
  '4xx': 'var(--status-warning)',
  '5xx': 'var(--status-critical)',
  '연결 실패': 'var(--status-serious)',
};

export default function StatusDistribution({ records, title }) {
  const data = countByStatusClass(records);
  return (
    <article className="panel">
      <h2>{title}</h2>
      <div className="chart">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data} margin={{ top: 20, right: 16, bottom: 0, left: 0 }} barCategoryGap="30%">
            <CartesianGrid stroke="var(--grid)" vertical={false} />
            <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fontSize: 12 }} />
            <YAxis allowDecimals={false} stroke="var(--text-muted)" tick={{ fontSize: 12 }} width={40} />
            <Tooltip content={<ChartTooltip unit="건" />} cursor={{ fill: 'var(--hover)' }} />
            <Bar dataKey="count" radius={[4, 4, 0, 0]} isAnimationActive={false}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={COLOR[entry.name]} />
              ))}
              <LabelList dataKey="count" position="top" fill="var(--text-secondary)" fontSize={12} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
```

#### S13-P46-03. 대시보드 화면 조립

*실습, 15분*

지금까지 만든 부품으로 대시보드 화면을 조립합니다.

`src/dashboard/DashboardPage.jsx`

```jsx
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { listBooks } from '../api/books';
import { checkHealth } from '../api/health';
import HealthPanel from './HealthPanel';
import KpiCard from './KpiCard';
import StatusBadge from './StatusBadge';
import StatusDistribution from './StatusDistribution';
import { average, errorRate, healthLevel, percentile } from './metrics';
import { useTelemetry } from './useTelemetry';

const HEALTH_INTERVAL_MS = 10_000;
const KPI_INTERVAL_MS = 60_000;
const HISTORY_SIZE = 30;

const clock = new Intl.DateTimeFormat('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

export default function DashboardPage() {
  const records = useTelemetry();

  // 폴링: refetchInterval마다 다시 요청합니다. TanStack Query는 앞 요청이 끝나기 전에
  // 다음 요청을 겹쳐 보내지 않고, 탭이 보이지 않으면 쉬며, 화면을 떠나면 멈춥니다.
  const { data: latest } = useQuery({
    queryKey: ['health'],
    queryFn: ({ signal }) => checkHealth(signal),
    refetchInterval: HEALTH_INTERVAL_MS,
    staleTime: 0,
  });

  // limit=1로 요청하면 목록 대신 total 값만 가볍게 얻을 수 있습니다.
  const { data: bookTotal = null } = useQuery({
    queryKey: ['books', 'total'],
    queryFn: ({ signal }) => listBooks({ limit: 1 }, signal).then((page) => page.total),
    refetchInterval: KPI_INTERVAL_MS,
  });

  // 새 점검 결과가 도착할 때마다 이력에 붙이고 최근 30개만 남깁니다.
  const [history, setHistory] = useState([]);
  useEffect(() => {
    if (!latest) return;
    setHistory((prev) =>
      prev.at(-1)?.checkedAt === latest.checkedAt ? prev : [...prev, latest].slice(-HISTORY_SIZE),
    );
  }, [latest]);

  const level = healthLevel(latest);
  const durations = records.map((r) => r.durationMs);
  const rate = errorRate(records);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>도서 서비스 관제 대시보드</h1>
        <p className="muted">
          헬스 체크 {HEALTH_INTERVAL_MS / 1000}초 간격, 마지막 갱신{' '}
          {latest ? clock.format(latest.checkedAt) : '-'}
        </p>
      </header>

      <div className="kpi-row">
        <KpiCard title="API 상태" hint={latest ? `HTTP ${latest.httpStatus || '응답 없음'}` : null}>
          <StatusBadge level={level} />
        </KpiCard>
        <KpiCard title="데이터베이스" hint={latest?.database}>
          <StatusBadge level={latest ? (latest.database === 'ok' ? 'good' : 'critical') : 'unknown'} />
        </KpiCard>
        <KpiCard title="등록 도서" value={bookTotal === null ? null : bookTotal.toLocaleString('ko-KR')} unit="권" />
        <KpiCard
          title="브라우저 측정 응답 시간"
          value={average(durations)}
          unit="ms"
          hint={`p95 ${percentile(durations, 95) ?? '-'} ms, 최근 ${records.length}건`}
        />
        <KpiCard
          title="오류율 (5xx, 연결 실패)"
          value={rate === null ? null : rate.toFixed(1)}
          unit="%"
          hint="이 브라우저에서 보낸 요청 기준"
        />
      </div>

      <div className="grid-2">
        <HealthPanel history={history} />
        <StatusDistribution records={records} title="브라우저 요청 상태 코드 분포" />
      </div>
    </div>
  );
}
```

화면 구성은 S13-P43-02의 위계를 따릅니다. 맨 위에 제목과 갱신 정보, 그 아래에 다섯 개의 KPI 카드, 그 아래에 헬스 체크 이력과 상태 코드 분포를 둡니다. 코드에서 볼 부분은 다음과 같습니다.

- 헬스 체크는 10초, 도서 수는 60초 간격으로 `refetchInterval`을 다르게 둡니다. 헬스 체크는 `staleTime: 0`으로 항상 새로 받습니다.
- 도서 수는 `limit=1`로 요청해 목록 대신 `total`만 가볍게 얻고, `then`으로 숫자만 꺼내 캐시합니다.
- 헬스 체크 이력은 서버에 없는 정보입니다. 새 결과가 도착할 때마다 이펙트에서 이력에 붙이고 최근 30개만 남깁니다. `StrictMode`에서 이펙트가 두 번 실행되어도 같은 결과를 두 번 붙이지 않도록 `checkedAt`을 비교합니다.
- `history.at(-1)`은 배열의 마지막 요소를 꺼내는 문법입니다.

관리자 전용 라우트로 등록합니다.

`src/App.jsx`

```jsx
import { Route, Routes } from 'react-router';
import RequireAuth from './auth/RequireAuth';
import Layout from './components/Layout';
import DashboardPage from './dashboard/DashboardPage';
import BookDetailPage from './pages/BookDetailPage';
import BookFormPage from './pages/BookFormPage';
import BookListPage from './pages/BookListPage';
import LoginPage from './pages/LoginPage';
import MyLoansPage from './pages/MyLoansPage';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookListPage />} />
        <Route path="books/:bookId" element={<BookDetailPage />} />
        <Route path="books/new" element={<RequireAuth><BookFormPage /></RequireAuth>} />
        <Route path="books/:bookId/edit" element={<RequireAuth><BookFormPage /></RequireAuth>} />
        <Route path="loans" element={<RequireAuth><MyLoansPage /></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth adminOnly><DashboardPage /></RequireAuth>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
```

관리자 계정으로 로그인해 "관제 대시보드"를 엽니다. 10초마다 상태 띠에 칸이 하나씩 늘어나는지, Network 탭에서 `health` 요청이 10초 간격으로 나가는지 확인합니다. 일반 사용자 계정으로는 메뉴가 보이지 않고, 주소를 직접 입력하면 "관리자만 사용할 수 있는 화면입니다."가 나와야 합니다.

> 완성 코드: 막히면 예제 저장소의 `p46-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S13-P46-04. 정리: 상태 패널과 차트

*정리, 5분*

- Recharts는 `ResponsiveContainer`, 차트, 축, 격자, 툴팁, 계열을 컴포넌트로 조립하며 색은 CSS 변수로 관리합니다.
- 주기적으로 바뀌는 차트는 애니메이션을 꺼서 시선을 빼앗지 않게 합니다.
- 서버에 없는 정보(헬스 체크 이력)는 화면에서 쌓되, 개발 모드의 중복 실행에도 안전하게 만듭니다.

##### 확인 퀴즈

**Q1.** 대시보드 차트에서 `isAnimationActive={false}`로 애니메이션을 끄는 이유는 무엇인가요?

1. 접근성 검사를 통과하려고
2. 메모리를 아끼려고
3. 애니메이션이 지원되지 않아서
4. 데이터가 주기적으로 바뀔 때마다 움직여 운영자의 시선을 빼앗지 않게 하려고

> 정답: 4번. 관제 화면에서는 의미 있는 변화만 눈에 띄어야 합니다.

**Q2.** 등록 도서 수를 `limit=1`로 요청하는 이유는 무엇인가요?

1. 백엔드가 1권만 허용해서
2. 목록은 필요 없고 응답의 total만 쓰므로 가볍게 받으려고
3. 첫 번째 도서를 표시하려고
4. 캐시를 끄려고

> 정답: 2번. 필요한 정보만 최소한으로 요청합니다.

---

## S14. 대시보드 고도화

*7일차 오후, 3시간*

> 섹션 목표: 로그 분석 화면을 더하고, 대시보드의 성능과 접근성을 개선한 뒤 장애 상황에서 화면이 어떻게 반응하는지 관찰합니다.

### S14-P47. 로그 분석 화면

> 학습 목표: 백엔드 JSON 로그를 브라우저에서 분석하는 화면을 만들고, 장애 상황을 만들어 대시보드의 반응을 관찰할 수 있습니다.
>
> 완성 코드 브랜치: `p47-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S14-P47-01 백엔드 로그 분석 화면 | 실습 | 25분 |
| S14-P47-02 장애 상황 관찰과 로그 분석 | 실습 | 20분 |
| S14-P47-03 정리: 로그 분석 화면 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S14-P47-01. 백엔드 로그 분석 화면

*실습, 25분*

백엔드 과정 S8-P28에서 요청 로그를 한 줄에 JSON 하나씩 남기도록 만들었습니다. 이런 형식을 JSON Lines라고 합니다. 로그 파일을 브라우저에서 바로 분석하는 화면을 만듭니다.

`src/dashboard/LogAnalyzer.jsx`

```jsx
import { useMemo, useState } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartTooltip from './ChartTooltip';
import StatusDistribution from './StatusDistribution';
import { countPerMinute, parseRequestLogs, summarizeByPath } from './metrics';

const MAX_FILE_BYTES = 20 * 1024 * 1024;

export default function LogAnalyzer() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  async function handleFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_FILE_BYTES) {
      setError('20MB 이하의 로그 파일만 분석합니다.');
      return;
    }
    setError('');
    // 파일은 서버로 보내지 않고 브라우저 안에서만 읽습니다.
    const text = await file.text();
    setResult({ fileName: file.name, ...parseRequestLogs(text) });
  }

  const summary = useMemo(() => {
    if (!result) return null;
    return {
      perMinute: countPerMinute(result.entries),
      byPath: summarizeByPath(result.entries).slice(0, 10),
      records: result.entries.map((e) => ({ status: e.status })),
    };
  }, [result]);

  return (
    <section className="log-analyzer">
      <h2>백엔드 요청 로그 분석</h2>
      <p className="muted">
        docker compose logs api --no-log-prefix 명령으로 저장한 JSON Lines 로그 파일을 고릅니다.
      </p>
      <input type="file" accept=".log,.jsonl,.txt" onChange={handleFile} />
      {error && <p className="error">{error}</p>}

      {result && summary && (
        <>
          <p className="muted">
            {result.fileName}: 요청 로그 {result.entries.length}건, 건너뛴 줄 {result.invalid}건
          </p>
          <div className="grid-2">
            <article className="panel">
              <h2>분당 요청 수</h2>
              <div className="chart">
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={summary.perMinute} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
                    <CartesianGrid stroke="var(--grid)" vertical={false} />
                    <XAxis dataKey="minute" stroke="var(--text-muted)" tick={{ fontSize: 12 }} minTickGap={30} />
                    <YAxis allowDecimals={false} stroke="var(--text-muted)" tick={{ fontSize: 12 }} width={40} />
                    <Tooltip content={<ChartTooltip unit="건" />} cursor={{ stroke: 'var(--text-muted)' }} />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="var(--series-1)"
                      strokeWidth={2}
                      dot={false}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </article>
            <StatusDistribution records={summary.records} title="로그 상태 코드 분포" />
          </div>

          <article className="panel">
            <h2>느린 API 상위 10개 (p95 기준)</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>API</th>
                  <th className="num">요청 수</th>
                  <th className="num">5xx</th>
                  <th className="num">평균(ms)</th>
                  <th className="num">p95(ms)</th>
                </tr>
              </thead>
              <tbody>
                {summary.byPath.map((row) => (
                  <tr key={row.api}>
                    <td>
                      <code>{row.api}</code>
                    </td>
                    <td className="num">{row.count}</td>
                    <td className="num">{row.errors}</td>
                    <td className="num">{row.avgMs}</td>
                    <td className="num">{row.p95Ms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </>
      )}
    </section>
  );
}
```

`file.text()`는 고른 파일을 문자열로 읽는 브라우저 API입니다. 파일은 서버로 전송되지 않고 브라우저 안에서만 처리되므로 로그에 담긴 정보가 외부로 나가지 않습니다. 너무 큰 파일은 브라우저가 멈출 수 있어 20MB로 제한했습니다. 분석 결과는 `useMemo`로 계산해, 다른 상태가 바뀌어 다시 그려질 때마다 같은 계산을 반복하지 않게 했습니다.

대시보드 화면의 맨 아래에 로그 분석을 붙입니다. `DashboardPage.jsx`에서 `LogAnalyzer`를 가져와 상태 코드 분포 아래에 `<LogAnalyzer />`를 추가합니다.

#### S14-P47-02. 장애 상황 관찰과 로그 분석

*실습, 20분*

4. 장애 상황을 만들어 화면의 변화를 관찰합니다.

| 번호 | 백엔드 폴더에서 실행 | 대시보드에서 확인할 것 |
|---|---|---|
| 1 | `docker compose stop db` | 다음 헬스 체크에서 API 상태 장애(HTTP 503), 데이터베이스 장애, 상태 띠에 빨간 칸 |
| 2 | `docker compose start db` | 다시 정상, 상태 띠에 장애 구간이 기록으로 남음 |
| 3 | `docker compose stop api` | API 상태 장애(응답 없음), 오류율 증가, 상태 코드 분포의 "연결 실패" 증가 |
| 4 | `docker compose start api` | 정상 복귀 |

5. 다른 탭으로 전환해 1분 정도 있다가 돌아온 뒤, Network 탭에서 그동안 헬스 체크 요청이 멈춰 있었는지 확인합니다.
6. 백엔드 로그를 파일로 저장해 분석합니다.

```bash
cd book-api
docker compose logs api --no-log-prefix > api.log
```

대시보드의 "백엔드 요청 로그 분석"에서 `api.log`를 고릅니다. 분당 요청 수, 로그 상태 코드 분포, 느린 API 상위 10개가 표시됩니다. 표에서 `OPTIONS` 요청(S5의 사전 요청)과 `/health` 요청(대시보드의 폴링)이 얼마나 많은지 확인하고, 그 의미를 생각해 봅니다. 건너뛴 줄은 서버 시작 메시지처럼 JSON이 아닌 로그입니다.

7. 다음 질문에 답해 봅니다.
   - 브라우저 측정 응답 시간과 로그의 `duration_ms`가 다른 이유는 무엇입니까?
   - 오류율 계산에서 4xx를 제외한 이유는 무엇입니까? 401이 갑자기 늘어난다면 어떤 상황을 의심할 수 있습니까?
   - 헬스 체크 간격을 1초로 줄이면 어떤 문제가 생깁니까?

> 완성 코드: 막히면 예제 저장소의 `p47-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S14-P47-03. 정리: 로그 분석 화면

*정리, 5분*

- JSON Lines 로그는 한 줄씩 `JSON.parse`하고, 요청 로그만 골라 집계합니다.
- 고른 파일은 서버로 보내지 않고 브라우저 안에서만 처리하며, 너무 큰 파일은 미리 거절합니다.
- DB 중지와 API 중지는 대시보드에서 다르게 나타나며, 그 차이로 장애 위치를 좁힐 수 있습니다.

##### 확인 퀴즈

**Q1.** 로그 분석 화면이 고른 파일을 서버로 보내지 않고 `file.text()`로 브라우저에서 읽는 이유로 알맞은 것은 무엇인가요?

1. CORS를 피하려고
2. 서버가 파일 업로드를 지원하지 않아서
3. 로그에 담긴 정보가 외부로 나가지 않게 하려고
4. 브라우저가 더 빨라서

> 정답: 3번. 로그에는 요청 경로와 ID 같은 운영 정보가 있으므로 불필요하게 전송하지 않습니다.

**Q2.** `docker compose stop db`를 실행했을 때 대시보드에 나타나는 모습으로 옳은 것은 무엇인가요?

1. API는 응답하지만 503과 DB 이상이 표시되어 장애로 나타난다.
2. 연결 실패만 늘어난다.
3. 로그인 화면으로 이동한다.
4. 아무 변화가 없다.

> 정답: 1번. 백엔드는 살아 있고 /health가 503과 database unreachable을 돌려줍니다.

### S14-P48. 성능: 코드 분할과 렌더링 최적화

> 학습 목표: 큰 화면을 코드 분할로 분리하고, 불필요한 다시 그리기와 계산을 줄일 수 있습니다.
>
> 완성 코드 브랜치: `p48-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S14-P48-01 렌더링 성능 기초 | 주요 개념 | 15분 |
| S14-P48-02 코드 분할과 메모이제이션 적용 | 실습 | 30분 |
| S14-P48-03 정리: 성능: 코드 분할과 렌더링 최적화 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S14-P48-01. 렌더링 성능 기초

*주요 개념, 15분*

React 앱의 성능 문제는 대부분 두 가지에서 옵니다. 내려받는 JavaScript가 너무 크거나, 필요 없는 다시 그리기와 계산이 많은 경우입니다.

**내려받는 양.** Recharts처럼 큰 라이브러리를 모든 화면의 JavaScript에 포함하면, 대시보드를 쓰지 않는 일반 사용자도 첫 화면을 열 때 이를 모두 내려받아야 합니다. 화면 단위로 코드를 나눠, 그 화면을 처음 열 때 내려받게 하는 것을 코드 분할이라고 합니다.

**다시 그리기.** 컴포넌트는 자기 state가 바뀌거나 부모가 다시 그려지면 다시 호출됩니다. 대시보드는 API 요청이 하나 끝날 때마다 요청 기록이 바뀌어 화면 전체가 다시 그려집니다. 대부분은 빠르지만, 무거운 계산이나 큰 표가 있으면 문제가 됩니다. 도구는 세 가지입니다.

| 도구 | 하는 일 | 쓰는 경우 |
|---|---|---|
| `memo(Component)` | props가 같으면 다시 그리지 않는다 | 부모가 자주 다시 그려지는데 자신은 바뀔 일이 적은 무거운 컴포넌트 |
| `useMemo(() => 계산, deps)` | deps가 같으면 이전 계산 결과를 쓴다 | 비용이 큰 계산 |
| `useCallback(fn, deps)` | deps가 같으면 같은 함수를 쓴다 | `memo`된 자식에 함수를 넘길 때, 이펙트 의존성 |

이 도구들은 비교 비용과 코드 복잡도를 더하므로 처음부터 모든 곳에 쓰지 않습니다. 먼저 측정하고, 느린 곳에만 씁니다. 측정은 브라우저 확장 React Developer Tools의 Profiler 탭으로 합니다. 녹화 버튼을 누르고 화면을 조작한 뒤 멈추면, 어떤 컴포넌트가 몇 번, 얼마나 오래 그려졌는지 보여 줍니다.

#### S14-P48-02. 코드 분할과 메모이제이션 적용

*실습, 30분*

**1) 측정**

먼저 현재 상태를 기록합니다. `npm run build`의 출력에서 JavaScript 파일 크기를 적어 둡니다. 모든 화면이 파일 하나에 들어 있고, 500KB를 넘는다는 경고가 나옵니다. React Developer Tools의 Profiler로 대시보드를 30초 녹화해 `LogAnalyzer`가 몇 번 그려지는지도 적어 둡니다.

**2) 코드 분할**

`lazy`와 동적 `import()`로 대시보드를 분리합니다. 내려받는 동안에는 `Suspense`의 `fallback`이 표시됩니다.

`src/App.jsx`

```jsx
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import RequireAuth from './auth/RequireAuth';
import Layout from './components/Layout';
import BookDetailPage from './pages/BookDetailPage';
import BookFormPage from './pages/BookFormPage';
import BookListPage from './pages/BookListPage';
import LoginPage from './pages/LoginPage';
import MyLoansPage from './pages/MyLoansPage';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/SignupPage';

// 차트 라이브러리가 큰 대시보드는 처음 열 때만 따로 내려받습니다.
const DashboardPage = lazy(() => import('./dashboard/DashboardPage'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookListPage />} />
        <Route path="books/:bookId" element={<BookDetailPage />} />
        <Route path="books/new" element={<RequireAuth><BookFormPage /></RequireAuth>} />
        <Route path="books/:bookId/edit" element={<RequireAuth><BookFormPage /></RequireAuth>} />
        <Route path="loans" element={<RequireAuth><MyLoansPage /></RequireAuth>} />
        <Route
          path="dashboard"
          element={
            <RequireAuth adminOnly>
              <Suspense fallback={<p className="muted">대시보드를 불러오는 중입니다.</p>}>
                <DashboardPage />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
```

**3) 메모이제이션**

`LogAnalyzer`는 props가 없어 부모가 다시 그려져도 결과가 같습니다. `memo`로 감싸 다시 그리기를 건너뜁니다.

```jsx
import { memo, useMemo, useState } from 'react';
// ...
function LogAnalyzer() { /* 그대로 */ }

export default memo(LogAnalyzer);
```

KPI 계산은 요청 기록이 바뀔 때만 다시 하도록 `useMemo`로 묶습니다.

`src/dashboard/DashboardPage.jsx`

```jsx
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { listBooks } from '../api/books';
import { checkHealth } from '../api/health';
import HealthPanel from './HealthPanel';
import KpiCard from './KpiCard';
import LogAnalyzer from './LogAnalyzer';
import StatusBadge from './StatusBadge';
import StatusDistribution from './StatusDistribution';
import { average, errorRate, healthLevel, percentile } from './metrics';
import { useTelemetry } from './useTelemetry';

const HEALTH_INTERVAL_MS = 10_000;
const KPI_INTERVAL_MS = 60_000;
const HISTORY_SIZE = 30;

const clock = new Intl.DateTimeFormat('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

export default function DashboardPage() {
  const records = useTelemetry();

  // 폴링: refetchInterval마다 다시 요청합니다. TanStack Query는 앞 요청이 끝나기 전에
  // 다음 요청을 겹쳐 보내지 않고, 탭이 보이지 않으면 쉬며, 화면을 떠나면 멈춥니다.
  const { data: latest } = useQuery({
    queryKey: ['health'],
    queryFn: ({ signal }) => checkHealth(signal),
    refetchInterval: HEALTH_INTERVAL_MS,
    staleTime: 0,
  });

  // limit=1로 요청하면 목록 대신 total 값만 가볍게 얻을 수 있습니다.
  const { data: bookTotal = null } = useQuery({
    queryKey: ['books', 'total'],
    queryFn: ({ signal }) => listBooks({ limit: 1 }, signal).then((page) => page.total),
    refetchInterval: KPI_INTERVAL_MS,
  });

  // 새 점검 결과가 도착할 때마다 이력에 붙이고 최근 30개만 남깁니다.
  const [history, setHistory] = useState([]);
  useEffect(() => {
    if (!latest) return;
    setHistory((prev) =>
      prev.at(-1)?.checkedAt === latest.checkedAt ? prev : [...prev, latest].slice(-HISTORY_SIZE),
    );
  }, [latest]);

  const level = healthLevel(latest);
  // records가 바뀔 때만 다시 계산합니다. 다른 상태가 바뀌어 다시 그려질 때는 이전 결과를 씁니다.
  const stats = useMemo(() => {
    const durations = records.map((r) => r.durationMs);
    return { avg: average(durations), p95: percentile(durations, 95), rate: errorRate(records) };
  }, [records]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>도서 서비스 관제 대시보드</h1>
        <p className="muted">
          헬스 체크 {HEALTH_INTERVAL_MS / 1000}초 간격, 마지막 갱신{' '}
          {latest ? clock.format(latest.checkedAt) : '-'}
        </p>
      </header>

      <div className="kpi-row">
        <KpiCard title="API 상태" hint={latest ? `HTTP ${latest.httpStatus || '응답 없음'}` : null}>
          <StatusBadge level={level} />
        </KpiCard>
        <KpiCard title="데이터베이스" hint={latest?.database}>
          <StatusBadge level={latest ? (latest.database === 'ok' ? 'good' : 'critical') : 'unknown'} />
        </KpiCard>
        <KpiCard title="등록 도서" value={bookTotal === null ? null : bookTotal.toLocaleString('ko-KR')} unit="권" />
        <KpiCard
          title="브라우저 측정 응답 시간"
          value={stats.avg}
          unit="ms"
          hint={`p95 ${stats.p95 ?? '-'} ms, 최근 ${records.length}건`}
        />
        <KpiCard
          title="오류율 (5xx, 연결 실패)"
          value={stats.rate === null ? null : stats.rate.toFixed(1)}
          unit="%"
          hint="이 브라우저에서 보낸 요청 기준"
        />
      </div>

      <div className="grid-2">
        <HealthPanel history={history} />
        <StatusDistribution records={records} title="브라우저 요청 상태 코드 분포" />
      </div>

      <LogAnalyzer />
    </div>
  );
}
```

**4) 다시 측정**

다시 `npm run build`를 실행해 결과를 비교합니다. 이 과정의 코드로 확인했을 때 첫 화면용 파일은 약 370KB(gzip 약 120KB), 대시보드 파일은 약 450KB(gzip 약 127KB)로 나뉘었습니다. 개발자 도구의 Network 탭에서 `DashboardPage-...js`가 대시보드를 처음 열 때만 내려받아지는지 확인합니다. Profiler로 다시 녹화해 `LogAnalyzer`가 처음 한 번만 그려지고 이후에는 건너뛰는지(회색으로 표시) 확인합니다.

> 완성 코드: 막히면 예제 저장소의 `p48-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S14-P48-03. 정리: 성능: 코드 분할과 렌더링 최적화

*정리, 5분*

- 큰 라이브러리를 쓰는 화면은 `lazy`와 `Suspense`로 분할해 필요한 사용자만 내려받게 합니다.
- `memo`, `useMemo`, `useCallback`은 측정한 뒤 느린 곳에만 씁니다.
- 빌드 결과의 파일 크기와 Profiler 기록으로 개선 전후를 비교합니다.

##### 확인 퀴즈

**Q1.** `lazy(() => import('./dashboard/DashboardPage'))`의 효과로 옳은 것은 무엇인가요?

1. 대시보드가 더 빨리 그려진다.
2. 대시보드 코드가 별도 파일로 나뉘어 처음 열 때만 내려받아진다.
3. 대시보드가 서버에서 그려진다.
4. 대시보드의 state가 유지된다.

> 정답: 2번. 동적 import는 빌드 시 별도 파일을 만들고, 그 화면을 처음 그릴 때 내려받습니다.

**Q2.** `memo`를 쓰기 알맞은 경우는 무엇인가요?

1. 모든 컴포넌트에 기본으로
2. 부모가 자주 다시 그려지지만 props가 거의 바뀌지 않는 무거운 컴포넌트
3. props가 매번 바뀌는 컴포넌트
4. state가 없는 아주 작은 컴포넌트

> 정답: 2번. memo는 비교 비용이 있으므로 효과가 측정되는 곳에만 씁니다.

### S14-P49. 접근성과 장애 관찰 실습

> 학습 목표: 대시보드의 접근성 문제를 찾아 개선하고, 키보드와 보조 기술로 화면을 점검할 수 있습니다.
>
> 완성 코드 브랜치: `p49-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S14-P49-01 대시보드 접근성 | 주요 개념 | 15분 |
| S14-P49-02 표 보기, 상태 알림, 키보드 점검 | 실습 | 30분 |
| S14-P49-03 정리: 접근성과 장애 관찰 실습 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S14-P49-01. 대시보드 접근성

*주요 개념, 15분*

접근성은 장애가 있는 사용자를 포함해 누구나 화면을 쓸 수 있게 하는 것입니다. 관제 화면은 오랜 시간 여러 사람이 다양한 환경에서 보는 화면이라 접근성이 곧 운영 품질입니다. 웹 접근성의 국제 기준인 WCAG와 국내 기준(한국형 웹 콘텐츠 접근성 지침)에서 대시보드와 관련된 핵심은 다음과 같습니다.

| 원칙 | 대시보드에서의 의미 | 이 과정의 대책 |
|---|---|---|
| 색에만 의존하지 않기 | 빨강과 초록을 구분하기 어려운 사용자가 있다 | 상태에 모양과 글자 함께 표시 (S13-P46) |
| 충분한 명도 대비 | 어두운 바탕에 어두운 글자는 읽기 어렵다 | 글자는 글자 색 변수로, 계열 색은 선과 막대에만 |
| 대체 텍스트 | 화면 낭독기는 SVG 차트의 모양을 읽지 못한다 | 차트에 `role="img"`와 요약 문장, 같은 데이터의 표 보기 |
| 키보드 사용 | 마우스 없이 모든 기능을 쓸 수 있어야 한다 | 기본 요소(`button`, `a`, `input`) 사용, 포커스 표시 |
| 변화 알림 | 화면을 보지 않는 사용자도 상태 변화를 알아야 한다 | `aria-live` 영역으로 상태가 바뀔 때만 알림 |

`aria-live="polite"`는 그 영역의 글자가 바뀌면 화면 낭독기가 하던 말을 마친 뒤 읽어 주게 하는 속성입니다. 10초마다 같은 글자를 다시 쓰면 바뀐 것이 없으므로 읽지 않고, "정상"에서 "장애"로 바뀌었을 때만 읽습니다. 화면에는 보이지 않게 하되 보조 기술은 읽을 수 있도록 `sr-only` 클래스로 숨깁니다. `display: none`으로 숨기면 보조 기술도 읽지 못합니다.

#### S14-P49-02. 표 보기, 상태 알림, 키보드 점검

*실습, 30분*

상태 코드 분포에 "표로 보기" 전환 버튼과 차트 요약 문장을 추가합니다.

`src/dashboard/StatusDistribution.jsx`

```jsx
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartTooltip from './ChartTooltip';
import { countByStatusClass } from './metrics';

// 상태 묶음마다 의미가 정해진 상태 색을 씁니다. 막대 위 숫자와 축 이름이 함께 나오므로
// 색만으로 구분하지 않습니다.
const COLOR = {
  '2xx': 'var(--status-good)',
  '3xx': 'var(--series-1)',
  '4xx': 'var(--status-warning)',
  '5xx': 'var(--status-critical)',
  '연결 실패': 'var(--status-serious)',
};

export default function StatusDistribution({ records, title }) {
  const data = countByStatusClass(records);
  const [asTable, setAsTable] = useState(false);
  const summary = data.map((d) => `${d.name} ${d.count}건`).join(', ');

  return (
    <article className="panel">
      <div className="panel-head">
        <h2>{title}</h2>
        {/* 차트를 볼 수 없는 사용자와 정확한 값이 필요한 사용자를 위해 표 보기를 제공합니다. */}
        <button type="button" aria-pressed={asTable} onClick={() => setAsTable((v) => !v)}>
          {asTable ? '차트로 보기' : '표로 보기'}
        </button>
      </div>
      {asTable ? (
        <table className="table">
          <thead>
            <tr>
              <th>상태 코드</th>
              <th className="num">건수</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.name}>
                <td>{d.name}</td>
                <td className="num">{d.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // 차트 전체를 하나의 그림으로 보고, 화면 낭독기에는 요약 문장을 읽어 줍니다.
        <div className="chart" role="img" aria-label={`${title}: ${summary}`}>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data} margin={{ top: 20, right: 16, bottom: 0, left: 0 }} barCategoryGap="30%">
              <CartesianGrid stroke="var(--grid)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-muted)" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} stroke="var(--text-muted)" tick={{ fontSize: 12 }} width={40} />
              <Tooltip content={<ChartTooltip unit="건" />} cursor={{ fill: 'var(--hover)' }} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                {data.map((entry) => (
                  <Cell key={entry.name} fill={COLOR[entry.name]} />
                ))}
                <LabelList dataKey="count" position="top" fill="var(--text-secondary)" fontSize={12} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </article>
  );
}
```

헬스 체크 응답 시간 차트에도 `role="img"`와 요약 문장을 붙이고, 대시보드에 상태 알림 영역을 추가합니다. `DashboardPage.jsx`에서 KPI 카드 위에 다음을 넣습니다.

```jsx
{/* 화면 낭독기 사용자에게 상태가 바뀔 때만 조용히 알려 줍니다. 화면에는 보이지 않습니다. */}
<p className="sr-only" aria-live="polite">
  API 상태 {{ good: '정상', warning: '주의', critical: '장애', unknown: '확인 중' }[level]}
</p>
```

`index.css`에 화면에서만 숨기는 클래스와 키보드 포커스 표시를 추가합니다.

```css
.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
}
.panel-head { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.panel-head h2 { margin: 0; }
.panel-head button { padding: 0.25rem 0.6rem; font-size: 0.8rem; }
:focus-visible { outline: 2px solid var(--series-1); outline-offset: 2px; }
```

표 보기 전환을 테스트로 지킵니다.

`src/dashboard/StatusDistribution.test.jsx`

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import StatusDistribution from './StatusDistribution';

describe('StatusDistribution', () => {
  it('표로 보기를 누르면 같은 데이터를 표로 보여 준다', async () => {
    render(<StatusDistribution records={[{ status: 200 }, { status: 500 }]} title="분포" />);
    expect(screen.getByRole('img', { name: /분포: 2xx 1건/ })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: '표로 보기' }));
    expect(screen.getByRole('cell', { name: '5xx' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '차트로 보기' })).toHaveAttribute('aria-pressed', 'true');
  });
});
```

확인할 내용은 다음과 같습니다.

1. 마우스를 쓰지 않고 Tab 키만으로 메뉴, 표 보기 버튼, 로그 파일 선택까지 이동할 수 있는지, 포커스 위치가 파란 테두리로 보이는지 확인합니다.
2. "표로 보기"를 눌러 같은 데이터가 표로 나오는지, 버튼 글자가 "차트로 보기"로 바뀌는지 확인합니다.
3. 개발자 도구의 Lighthouse 탭에서 Accessibility 항목만 골라 대시보드를 검사하고, 지적된 항목이 있으면 고쳐 봅니다.
4. 화면 낭독기(Windows의 NVDA나 내레이터, macOS의 VoiceOver)를 켜고 대시보드를 엽니다. 백엔드를 멈췄을 때 "API 상태 장애"를 읽어 주는지 확인합니다.
5. 개발자 도구의 Rendering 패널에서 "Emulate vision deficiencies"로 색각 이상을 흉내 내어 상태 띠와 배지가 여전히 구분되는지 확인합니다.

> 완성 코드: 막히면 예제 저장소의 `p49-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S14-P49-03. 정리: 접근성과 장애 관찰 실습

*정리, 5분*

- 상태는 색, 모양, 글자로 함께 전달하고, 차트에는 요약 문장과 같은 데이터의 표 보기를 제공합니다.
- `aria-live` 영역은 바뀐 내용만 보조 기술에 알리며, 숨길 때는 `display: none`이 아니라 `sr-only`를 씁니다.
- 키보드만으로 모든 기능을 쓸 수 있는지, Lighthouse와 화면 낭독기로 점검합니다.

##### 확인 퀴즈

**Q1.** 화면에는 보이지 않지만 화면 낭독기는 읽게 하려면 어떻게 숨겨야 하나요?

1. visibility: hidden
2. sr-only 클래스(크기를 1px로 줄이고 잘라 내기)
3. aria-hidden="true"
4. display: none

> 정답: 2번. display: none, visibility: hidden, aria-hidden은 보조 기술에서도 숨깁니다.

**Q2.** SVG 차트의 접근성을 높이는 방법으로 알맞은 것은 무엇인가요?

1. 애니메이션을 켠다.
2. 범례를 지운다.
3. 차트 색을 더 진하게 한다.
4. role="img"와 요약 문장을 붙이고, 같은 데이터를 표로도 볼 수 있게 한다.

> 정답: 4번. 화면 낭독기는 차트의 모양을 읽지 못하므로 글로 된 대체 정보가 필요합니다.

---

## S15. 도커라이징과 운영 빌드

*8일차 오전, 4시간*

> 섹션 목표: 운영 빌드를 Nginx로 제공하는 컨테이너 이미지를 만들고, 백엔드와 함께 Compose로 실행해 같은 출처 구성으로 점검합니다.

### S15-P50. 운영 빌드와 환경 변수

> 학습 목표: 개발 서버와 운영 환경의 차이를 설명하고, 운영용 환경 변수로 빌드한 결과물을 확인할 수 있습니다.
>
> 완성 코드 브랜치: `p50-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S15-P50-01 운영 환경의 구조 | 주요 개념 | 15분 |
| S15-P50-02 운영 빌드 만들고 확인하기 | 실습 | 30분 |
| S15-P50-03 정리: 운영 빌드와 환경 변수 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S15-P50-01. 운영 환경의 구조

*주요 개념, 15분*

`npm run dev`로 띄운 Vite 개발 서버는 코드 변환, HMR 같은 개발 편의 기능을 위한 서버이며 운영 용도가 아닙니다. 운영 환경에서는 `npm run build`로 만든 정적 파일(`dist`)을 웹 서버가 제공합니다. 빌드 결과물은 HTML, JavaScript, CSS 파일일 뿐이므로 Node.js가 실행될 필요가 없습니다.

이 과정은 Nginx를 웹 서버로 사용하며, Nginx가 두 가지 일을 맡습니다.

```text
브라우저 ── http://localhost:8080 ──> [web 컨테이너: Nginx]
                                        ├─ /, /books/7, /dashboard ...  -> dist의 index.html, JS, CSS
                                        └─ /api/...  ──(프록시)──> [api 컨테이너: FastAPI :8000] ──> [db]
```

1. 정적 파일 제공: 빌드 결과물을 보내고, 모든 응답에 S12의 보안 헤더를 붙입니다.
2. 리버스 프록시: `/api/`로 시작하는 요청을 백엔드 컨테이너로 전달합니다.

이 구조에서 브라우저가 보는 출처는 `http://localhost:8080` 하나뿐입니다. 화면도 API도 같은 출처에서 오므로 CORS가 필요 없고 사전 요청도 생기지 않습니다. S5-P18-02에서 비교한 프록시 방식을 운영 환경에 적용한 것입니다.

이 구조는 Nginx가 화면과 API 앞에 함께 서는 배포 방식입니다. S16에서는 Nginx 없이 S3에 정적 파일만 올리는 방식을 다루며, 그때는 화면과 API의 출처가 달라집니다. 두 방식의 차이를 염두에 두고 이번 섹션을 진행합니다.

#### S15-P50-02. 운영 빌드 만들고 확인하기

*실습, 30분*

운영 빌드에서는 API 주소를 같은 출처의 상대 경로 `/api`로 지정합니다. 프로젝트 루트에 `.env.production`을 만듭니다.

`.env.production`

```dotenv
# 운영 빌드(npm run build)에서 사용하는 값입니다.
# Nginx가 /api 경로를 백엔드로 전달하므로 같은 출처의 상대 경로를 씁니다.
VITE_API_BASE_URL=/api
```

이 값으로 빌드하면 axios의 `baseURL`이 `/api`가 되어 `/api/books`, `/api/auth/token`처럼 요청하고, `toAssetUrl`은 표지 주소를 `/api/covers/...`로 만듭니다.

Vite의 환경 변수는 **빌드할 때** 코드에 새겨진다는 점을 다시 강조합니다. 컨테이너를 실행할 때 환경 변수를 바꿔도 이미 만든 JavaScript 파일은 바뀌지 않습니다. 환경마다 다른 값이 필요하면 이미지를 따로 빌드하거나, 이 과정처럼 상대 경로를 써서 환경과 무관한 값으로 만듭니다.

이제 운영 빌드를 직접 만들어 확인합니다.

1. `npm run build`를 실행합니다. 빌드 출력에서 `dist/index.html`, `dist/assets/index-...js`, `dist/assets/DashboardPage-...js`, `dist/assets/index-...css`가 만들어지는 것을 확인합니다. 파일 이름의 뒷부분은 내용에서 계산한 해시입니다.
2. `dist/index.html`을 열어 봅니다. 개발용 `src/main.jsx` 대신 `/assets/index-...js`를 불러오도록 바뀌어 있습니다.
3. 빌드 결과물에 API 주소가 어떻게 새겨졌는지 확인합니다.

```bash
grep -o '"/api"' dist/assets/index-*.js | head -1
grep -c "127.0.0.1:8000" dist/assets/index-*.js
```

첫 명령은 `"/api"`를 찾고, 두 번째 명령은 `0`을 출력해야 합니다. 개발용 주소가 운영 빌드에 들어가지 않았다는 뜻입니다.

4. 소스맵이 없는지 확인합니다. `ls dist/assets`에 `.map` 파일이 없어야 합니다(S12-P41-02).
5. `npm run preview`로 빌드 결과물을 미리 봅니다. 이 미리보기 서버는 운영용이 아니며 `/api` 프록시도 없으므로, 화면은 뜨지만 API 요청은 실패합니다. Network 탭에서 요청이 `http://localhost:4173/api/books`로 나가는 것을 확인합니다. 이 요청을 백엔드로 전달하는 역할을 다음 파트에서 Nginx가 맡습니다.
6. 같은 코드를 다른 API 주소로 빌드할 수 있는지 확인합니다. 명령에서 지정한 환경 변수는 `.env.production`보다 우선합니다.

```bash
VITE_API_BASE_URL=https://api.example.com npm run build
grep -c "api.example.com" dist/assets/index-*.js
npm run build   # 다시 /api로 되돌립니다.
```

S16의 S3 배포에서는 이 방법으로 백엔드의 공개 주소를 넣어 빌드합니다.

> 완성 코드: 막히면 예제 저장소의 `p50-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S15-P50-03. 정리: 운영 빌드와 환경 변수

*정리, 5분*

- 운영 환경에서는 Vite 개발 서버가 아니라 `npm run build`로 만든 정적 파일을 웹 서버가 제공합니다.
- Vite의 `VITE_` 환경 변수는 빌드할 때 코드에 새겨지므로 실행할 때 바꿀 수 없습니다.
- 같은 출처 프록시를 쓰면 `/api`처럼 환경과 무관한 상대 경로로 빌드할 수 있습니다.

##### 확인 퀴즈

**Q1.** 컨테이너를 실행할 때 `VITE_API_BASE_URL` 환경 변수를 바꿔도 화면의 API 주소가 바뀌지 않는 이유는 무엇인가요?

1. 브라우저가 환경 변수를 캐시해서
2. .env.production이 우선해서
3. Nginx가 환경 변수를 무시해서
4. 값이 빌드할 때 JavaScript 파일에 새겨졌기 때문에

> 정답: 4번. 빌드 결과물은 정적 파일이므로 실행 환경의 변수를 읽지 않습니다.

**Q2.** `npm run preview`로 연 화면에서 API 요청이 실패하는 이유는 무엇인가요?

1. 미리보기 서버에는 /api를 백엔드로 전달하는 프록시가 없어서
2. CORS가 막아서
3. 소스맵이 없어서
4. 빌드가 잘못되어서

> 정답: 1번. 운영 빌드는 /api를 같은 출처로 부르며, 이를 백엔드로 넘기는 일은 Nginx가 맡습니다.

### S15-P51. Nginx와 리버스 프록시

> 학습 목표: Nginx로 정적 파일 제공, SPA 대체 응답, API 리버스 프록시, 보안 헤더를 설정할 수 있습니다.
>
> 완성 코드 브랜치: `p51-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S15-P51-01 리버스 프록시와 SPA 대체 응답 | 주요 개념 | 10분 |
| S15-P51-02 Nginx 설정 작성 | 실습 | 35분 |
| S15-P51-03 정리: Nginx와 리버스 프록시 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S15-P51-01. 리버스 프록시와 SPA 대체 응답

*주요 개념, 10분*

리버스 프록시는 클라이언트의 요청을 대신 받아 뒤에 있는 서버로 전달하고, 받은 응답을 다시 클라이언트에 돌려주는 서버입니다. 브라우저 입장에서는 프록시가 곧 서버이므로, 뒤에 백엔드가 몇 개 있든 출처는 하나로 보입니다. S5에서 개발 서버의 프록시로 CORS 없이 API를 부르는 방법을 비교했는데, 운영 환경에서는 Nginx가 이 역할을 맡습니다.

SPA에는 웹 서버가 꼭 해 줘야 할 일이 하나 더 있습니다. React Router가 만드는 `/books/7` 같은 주소는 브라우저 안에서만 의미가 있고, 서버에는 그런 파일이 없습니다. 목록에서 링크를 눌러 이동할 때는 서버에 요청하지 않으므로 문제가 없지만, 그 주소에서 새로고침하거나 주소를 직접 입력하면 브라우저가 서버에 `/books/7`을 요청합니다. 이때 서버가 404를 돌려주면 화면이 깨집니다. 그래서 웹 서버는 없는 경로에 `index.html`을 돌려주고, 화면을 그리는 일은 React Router에 맡겨야 합니다. 이것을 SPA 대체 응답(fallback)이라고 합니다.

#### S15-P51-02. Nginx 설정 작성

*실습, 35분*

`nginx` 폴더를 만들고 두 파일을 작성합니다.

**보안 헤더: `nginx/security-headers.conf`**

S12-P41-01에서 정리한 보안 헤더와 CSP입니다.

`nginx/security-headers.conf`

```nginx
# 모든 응답에 붙일 보안 헤더 (교안 "프론트엔드 개발 보안" 단원 참고)
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: blob:; connect-src 'self'; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'" always;
```

`always`를 붙이면 200뿐 아니라 404, 500 같은 오류 응답에도 헤더가 붙습니다.

**서버 설정: `nginx/default.conf`**

`nginx/default.conf`

```nginx
server {
    listen 8080;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;
    server_tokens off;  # 응답 헤더에서 Nginx 버전을 숨깁니다.

    # 1) 백엔드 API: /api/books -> http://api:8000/books
    location /api/ {
        proxy_pass http://api:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        client_max_body_size 3m;  # 표지 2MB 제한보다 약간 크게 둡니다.
    }

    # 2) 빌드 결과물: 파일 이름에 해시가 있으므로 오래 캐시합니다.
    location /assets/ {
        include /etc/nginx/snippets/security-headers.conf;
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files $uri =404;
    }

    # 3) 나머지 주소는 모두 index.html을 돌려줘 React Router가 처리하게 합니다.
    location / {
        include /etc/nginx/snippets/security-headers.conf;
        add_header Cache-Control "no-cache";
        try_files $uri $uri/ /index.html;
    }
}
```

세 개의 `location` 블록이 각각 다음 역할을 합니다.

**1) `/api/` 프록시.** `proxy_pass http://api:8000/;`의 마지막 `/`가 중요합니다. 이 슬래시가 있으면 요청 경로에서 `location`에 맞은 `/api/` 부분을 잘라 내고 나머지를 붙입니다. 따라서 `/api/books?q=1`은 백엔드의 `/books?q=1`로 전달됩니다. 슬래시를 빼면 `/api/books`가 그대로 전달되어 백엔드에서 404가 납니다. `api`는 Compose 서비스 이름이며, 같은 Compose 네트워크 안에서 호스트 이름으로 쓸 수 있습니다. `X-Forwarded-For`, `X-Real-IP` 헤더로 실제 사용자의 IP를 백엔드에 전달하고, `client_max_body_size`는 표지 업로드 제한(2MB)보다 약간 크게 잡아 Nginx가 먼저 거절하지 않게 합니다.

**2) `/assets/` 장기 캐시.** Vite는 빌드 결과물의 파일 이름에 내용의 해시를 넣습니다(`index-C5lRxo5C.js`). 내용이 바뀌면 이름도 바뀌므로 같은 이름의 파일은 영원히 같은 내용입니다. 그래서 1년 동안 캐시하고(`immutable`) 다시 확인하지 않게 합니다.

**3) 나머지 경로와 SPA 대체 응답.** `try_files $uri $uri/ /index.html;`은 요청한 파일이 있으면 그 파일을, 없으면 `index.html`을 돌려줍니다. 사용자가 `http://localhost:8080/books/7`을 직접 입력하거나 새로고침하면 Nginx에는 `/books/7`이라는 파일이 없습니다. 이때 `index.html`을 돌려줘야 React Router가 주소를 보고 상세 화면을 그립니다. 이 설정이 없으면 첫 화면에서 메뉴로 이동할 때는 잘 되다가 새로고침하면 404가 나는 문제가 생깁니다. `index.html`에는 `no-cache`를 지정해, 새 버전을 배포하면 브라우저가 바로 새 `index.html`과 그 안에 적힌 새 해시 파일을 받게 합니다.

**`add_header` 상속 주의.** Nginx는 한 `location` 블록 안에 `add_header`가 하나라도 있으면 바깥(`server` 블록)에 적은 `add_header`를 상속하지 않습니다. 캐시 헤더를 추가하는 블록마다 보안 헤더가 사라지는 실수가 흔하므로, 이 설정은 보안 헤더를 별도 파일로 만들어 각 `location`에서 `include`합니다.

`server_tokens off`는 응답 헤더와 오류 페이지에서 Nginx 버전을 숨깁니다. 백엔드 과정 S10-P35에서 다룬 "불필요한 정보 노출 줄이기"와 같은 취지입니다.

이 설정은 다음 파트에서 이미지로 만들어 실행하며 확인합니다. 설정 파일을 작성하면서 다음을 스스로 점검합니다.

1. `/api/books?skip=10`은 백엔드에 어떤 경로로 전달됩니까? `proxy_pass` 끝의 `/`를 빼면 어떻게 바뀝니까?
2. `/assets/index-abc.js`가 없는 파일이면 무엇을 돌려줍니까? `/books/7`과 다르게 처리하는 이유는 무엇입니까?
3. `location /assets/` 블록에서 `include` 줄을 지우면 이 경로의 응답에서 어떤 헤더가 사라집니까?

> 완성 코드: 막히면 예제 저장소의 `p51-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S15-P51-03. 정리: Nginx와 리버스 프록시

*정리, 5분*

- Nginx가 정적 파일 제공과 `/api/` 리버스 프록시를 함께 맡으면 화면과 API가 같은 출처가 되어 CORS가 필요 없습니다.
- SPA는 `try_files`로 없는 경로에 `index.html`을 돌려줘야 새로고침과 직접 접속이 동작합니다.
- 해시가 붙은 파일은 오래 캐시하고 `index.html`은 매번 확인하게 하며, 보안 헤더는 `location`마다 `include`합니다.

##### 확인 퀴즈

**Q1.** `location / { try_files $uri $uri/ /index.html; }`의 역할은 무엇인가요?

1. 404 페이지를 보여 준다.
2. 모든 요청을 백엔드로 보낸다.
3. 요청한 파일이 없으면 index.html을 돌려줘 React Router가 화면을 그리게 한다.
4. index.html을 캐시한다.

> 정답: 3번. 새로고침이나 직접 접속한 /books/7 같은 주소도 화면이 정상으로 그려집니다.

**Q2.** 캐시 헤더를 추가한 location 블록에서 보안 헤더가 사라지는 이유는 무엇인가요?

1. Nginx 버전이 낮아서
2. always를 붙이지 않아서
3. 캐시 헤더와 보안 헤더는 함께 쓸 수 없어서
4. 블록 안에 add_header가 있으면 바깥의 add_header를 상속하지 않아서

> 정답: 4번. 그래서 보안 헤더를 별도 파일로 만들어 각 location에서 include합니다.

### S15-P52. 멀티 스테이지 Dockerfile

> 학습 목표: 멀티 스테이지 빌드로 작고 안전한 프론트엔드 이미지를 만들고, 컨테이너 하나로 실행해 응답을 확인할 수 있습니다.
>
> 완성 코드 브랜치: `p52-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S15-P52-01 Dockerfile 작성 | 실습 | 30분 |
| S15-P52-02 이미지 빌드와 단독 실행 | 실습 | 15분 |
| S15-P52-03 정리: 멀티 스테이지 Dockerfile | 정리 | 5분 |
| 휴식 | | 10분 |

#### S15-P52-01. Dockerfile 작성

*실습, 30분*

프로젝트 루트에 `Dockerfile`을 작성합니다.

`Dockerfile`

```dockerfile
# 1단계: Node.js로 정적 파일을 빌드합니다.
FROM node:24-alpine AS build
WORKDIR /app

# 의존성 목록만 먼저 복사하면 소스가 바뀌어도 설치 단계 캐시를 다시 씁니다.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# VITE_ 값은 빌드할 때 코드에 새겨집니다. 실행할 때 바꿀 수 없습니다.
ARG VITE_API_BASE_URL=/api
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
RUN npm run build

# 2단계: 빌드 결과물만 Nginx 이미지에 담습니다. Node.js와 소스 코드는 들어가지 않습니다.
# nginx-unprivileged 이미지는 root가 아닌 사용자로 8080 포트에서 실행됩니다.
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:8080/ > /dev/null || exit 1
```

**멀티 스테이지 빌드.** 첫 번째 단계(`build`)는 Node.js 이미지에서 의존성을 설치하고 빌드합니다. 두 번째 단계는 Nginx 이미지에 빌드 결과물(`dist`)만 복사합니다. 최종 이미지에는 Node.js, `node_modules`, 소스 코드가 들어가지 않으므로 크기가 작고, 공격에 쓰일 수 있는 도구와 정보도 줄어듭니다. 백엔드 과정 S8-P26에서 만든 API 이미지와 같은 원리입니다.

**캐시를 고려한 순서.** `package.json`과 `package-lock.json`만 먼저 복사해 `npm ci`를 실행하고, 그 다음에 소스 전체를 복사합니다. Docker는 단계별로 결과를 캐시하므로, 소스만 바뀌고 의존성 목록이 그대로면 시간이 오래 걸리는 설치 단계를 건너뜁니다.

**`npm ci`.** `npm install`과 달리 `package-lock.json`에 적힌 버전 그대로 설치하고, 잠금 파일과 `package.json`이 맞지 않으면 실패합니다. 언제 빌드해도 같은 의존성이 들어가므로 S12-P42-01의 공급망 관리 원칙에 맞습니다.

**빌드 인자.** `ARG VITE_API_BASE_URL=/api`와 `ENV`로 빌드 시점에 값을 넘길 수 있게 했습니다. 환경 변수로 넘긴 값은 `.env.production`보다 우선합니다. 다른 주소로 빌드해야 할 때는 `docker build --build-arg VITE_API_BASE_URL=... .`를 씁니다.

**root가 아닌 사용자로 실행.** `nginxinc/nginx-unprivileged` 이미지는 Nginx를 root가 아닌 사용자로 실행하며, 이 때문에 1024 미만 포트 대신 8080 포트를 사용합니다. 컨테이너 안의 프로세스가 탈취되더라도 피해 범위를 줄일 수 있습니다.

**헬스 체크.** `HEALTHCHECK`로 Docker가 30초마다 Nginx의 응답을 확인하고, `docker compose ps`에 `healthy` 여부를 표시합니다.

이미지에 넣지 않을 파일은 `.dockerignore`에 적습니다. 특히 `node_modules`를 제외하지 않으면 운영체제가 다른 로컬의 모듈이 이미지로 복사되어 빌드가 느려지거나 오동작할 수 있습니다. `.env.local`처럼 개인 설정 파일도 제외합니다.

`.dockerignore`

```text
node_modules
dist
.git
.github
e2e
test-results
playwright-report
.env.local
.env.*.local
*.log
Dockerfile
.dockerignore
```

#### S15-P52-02. 이미지 빌드와 단독 실행

*실습, 15분*

이미지를 빌드합니다.

```bash
docker build -t react-frontend .
docker image ls react-frontend
```

최종 이미지에는 Node.js와 소스 코드, `node_modules`가 없으므로 수십 MB 수준입니다. 1단계에 쓴 `node:24-alpine` 이미지 크기와 비교해 봅니다.

이 이미지를 혼자 실행하면 Nginx가 시작하면서 `proxy_pass`의 `api`라는 이름을 찾지 못해 바로 종료됩니다. Compose로 함께 실행하기 전에 확인만 해 보려면, `api`라는 이름이 내 컴퓨터를 가리키게 지정하고 백엔드를 로컬의 8000 포트에서 실행해 둡니다.

```bash
docker run --rm -d --name web-test -p 8080:8080 --add-host api:host-gateway react-frontend
docker ps --filter name=web-test   # 잠시 뒤 STATUS가 healthy
docker logs web-test
```

확인할 내용은 다음과 같습니다.

1. `curl -I http://localhost:8080/books/3`의 상태가 200이고, `content-security-policy`와 `x-frame-options` 헤더가 있으며, `Server` 헤더에 버전이 없습니다.
2. `curl http://localhost:8080/api/health`가 백엔드의 헬스 체크 결과를 돌려줍니다.
3. `docker exec web-test id`의 결과가 `uid=101(nginx)`처럼 root가 아닙니다.
4. 확인이 끝나면 `docker stop web-test`로 정리합니다.

> 완성 코드: 막히면 예제 저장소의 `p52-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S15-P52-03. 정리: 멀티 스테이지 Dockerfile

*정리, 5분*

- 멀티 스테이지 빌드는 빌드 도구가 있는 단계와 실행 단계를 나눠, 최종 이미지에 결과물만 담습니다.
- 의존성 목록을 먼저 복사하고 `npm ci`로 설치하면 캐시를 활용하면서 재현 가능한 빌드를 만듭니다.
- root가 아닌 사용자로 실행하고 헬스 체크를 두며, `.dockerignore`로 불필요한 파일을 제외합니다.

##### 확인 퀴즈

**Q1.** 멀티 스테이지 빌드의 효과로 옳은 것은 무엇인가요?

1. 환경 변수를 실행할 때 바꿀 수 있다.
2. Nginx 설정이 필요 없어진다.
3. 빌드가 항상 더 빨라진다.
4. 최종 이미지에 Node.js와 소스 코드가 들어가지 않아 작고 노출 범위가 줄어든다.

> 정답: 4번. 빌드에만 필요한 도구는 첫 단계에 남고, 실행 단계에는 dist만 복사됩니다.

**Q2.** Dockerfile에서 `COPY package.json package-lock.json ./`를 소스 전체 복사보다 먼저 두는 이유는 무엇인가요?

1. 파일이 작아서
2. 소스만 바뀌었을 때 의존성 설치 단계의 캐시를 다시 쓰기 위해
3. npm ci가 소스를 지우기 때문에
4. 보안 검사를 위해

> 정답: 2번. 레이어 캐시는 앞 단계의 입력이 같으면 재사용됩니다.

### S15-P53. Compose 통합 실행

> 학습 목표: 백엔드 Compose 구성에 프론트엔드를 추가해 함께 실행하고, 운영 형태의 동작과 보안 설정을 점검할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S15-P53-01 Compose에 web 서비스 추가 | 실습 | 20분 |
| S15-P53-02 통합 환경 점검 | 실습 | 25분 |
| S15-P53-03 정리: Compose 통합 실행 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S15-P53-01. Compose에 web 서비스 추가

*실습, 20분*

백엔드 프로젝트의 `compose.yaml`(백엔드 S8-P27)에 `web` 서비스를 추가합니다. S1-P3-02에서 두 프로젝트를 같은 `workspace` 폴더에 나란히 두었으므로 `build`에 상대 경로를 씁니다.

```yaml
services:
  db:
    # (기존 설정 그대로)

  api:
    # (기존 설정 그대로)

  web:
    build: ../react-frontend
    ports:
      - "8080:8080"
    depends_on:
      - api
    restart: unless-stopped

volumes:
  db-data:
  uploads:
```

실행하고 상태를 확인합니다.

```bash
cd book-api
docker compose up -d --build
docker compose ps
```

`db`, `api`, `web` 세 서비스가 모두 실행 중이고 `web`이 잠시 뒤 `healthy`가 되면 성공입니다. 브라우저에서 `http://localhost:8080`으로 접속합니다.

**운영 구성에서 함께 점검할 사항**

- 이 구성에서는 브라우저가 `api`에 직접 접속할 필요가 없습니다. 실제 운영에서는 `api` 서비스의 `ports` 설정을 지워 외부에서 8000 포트로 바로 접속하지 못하게 하고, 모든 요청이 Nginx를 거치게 합니다. 실습 중에는 Swagger UI 확인을 위해 남겨 둬도 됩니다.
- 백엔드는 로그인 실패 기록에 요청자의 IP를 남깁니다(백엔드 S10-P34). Nginx를 거치면 백엔드가 보는 접속 IP는 Nginx 컨테이너의 주소가 됩니다. 실제 사용자의 IP를 쓰려면 Uvicorn을 `--proxy-headers` 옵션과 함께 실행하고 `--forwarded-allow-ips`에 프록시(Nginx)의 주소를 지정해, Nginx가 넘긴 `X-Forwarded-For` 값을 신뢰하게 해야 합니다. 신뢰할 프록시를 지정하지 않고 이 헤더를 무조건 믿으면, 공격자가 헤더를 위조해 로그인 잠금을 피할 수 있습니다.
- 운영 환경의 `CORS_ORIGINS`에는 개발용 `http://localhost:5173`이 필요 없습니다. 같은 출처로 제공되므로 CORS 허용 목록을 비우거나 실제로 필요한 출처만 남깁니다.

#### S15-P53-02. 통합 환경 점검

*실습, 25분*

3. 다음 명령으로 응답을 확인합니다.

```bash
# 보안 헤더와 SPA 대체 응답: 없는 파일 경로도 index.html(200)이 와야 합니다.
curl -I http://localhost:8080/books/3

# 프록시: /api/health가 백엔드의 /health로 전달되어야 합니다.
curl http://localhost:8080/api/health

# 해시 파일 캐시: Cache-Control에 immutable이 있어야 합니다.
curl -I http://localhost:8080/assets/$(docker compose exec web ls /usr/share/nginx/html/assets | grep -m1 '\.js$')
```

4. 브라우저에서 확인합니다.

| 번호 | 확인 내용 | 기대 결과 |
|---|---|---|
| 1 | `http://localhost:8080` 접속 후 로그인, 목록, 상세, 대여 | 개발 환경과 같은 동작 |
| 2 | Network 탭에서 API 요청 주소 | `http://localhost:8080/api/...`, `OPTIONS` 사전 요청 없음 |
| 3 | 상세 화면에서 새로고침 | 404 없이 같은 화면 |
| 4 | 표지 이미지 주소 | `/api/covers/...`로 표시 |
| 5 | 관리자로 대시보드 접속 | Network 탭에서 `DashboardPage-...js`가 이때 처음 내려받아짐 |
| 6 | 응답 헤더 | `content-security-policy`, `x-frame-options` 등 S12의 헤더 존재, `Server` 헤더에 버전 없음 |

5. CSP가 인라인 코드를 막는지 확인합니다. Console에서 다음을 실행합니다.

```js
document.body.insertAdjacentHTML('beforeend', '<img src="x" onerror="console.log(\'실행됨\')">');
```

개발 서버(`localhost:5173`)에서는 "실행됨"이 출력되지만, `localhost:8080`에서는 출력되지 않고 CSP 위반 메시지가 나타납니다. S12의 XSS 실습에서 본 공격 코드가 운영 환경에서는 실행되지 않는다는 뜻입니다.

6. 이미지 크기를 확인합니다. Node.js가 빠진 최종 이미지는 수십 MB 수준입니다.

```bash
docker image ls | grep web
```

7. 문제가 생기면 다음을 확인합니다.

| 증상 | 확인할 것 |
|---|---|
| `/api/...` 요청이 502 Bad Gateway | `api` 컨테이너가 실행 중인지 확인합니다. `api`를 다시 만든 뒤라면 Nginx가 예전 주소를 기억하고 있을 수 있으므로 `docker compose restart web` |
| `/api/...` 요청이 백엔드에서 404 | `proxy_pass` 주소 끝의 `/` 누락 |
| 새로고침하면 Nginx 404 | `try_files ... /index.html` 누락 |
| 화면은 뜨는데 API 주소가 `127.0.0.1:8000` | `.env.production` 누락 또는 빌드 인자 확인 후 `--build`로 다시 빌드 |
| 보안 헤더가 일부 경로에만 없음 | 해당 `location`에 `include` 누락 (`add_header` 상속 규칙) |
| 표지 업로드가 413 (Nginx 오류 페이지) | `client_max_body_size` 값 |

#### S15-P53-03. 정리: Compose 통합 실행

*정리, 5분*

- 백엔드 Compose 구성에 `web` 서비스를 추가하면 화면, API, 데이터베이스를 한 명령으로 실행할 수 있습니다.
- 통합 환경에서는 사전 요청이 없고, 새로고침, 표지 주소, 코드 분할, 보안 헤더, CSP가 운영과 같게 동작하는지 확인합니다.
- 프록시 뒤의 백엔드는 신뢰할 프록시를 지정한 뒤에만 `X-Forwarded-For`를 사용해야 합니다.

##### 확인 퀴즈

**Q1.** 통합 환경(localhost:8080)에서 API 요청에 OPTIONS 사전 요청이 생기지 않는 이유는 무엇인가요?

1. 운영 빌드에서는 axios가 사전 요청을 보내지 않아서
2. Nginx가 OPTIONS를 지워서
3. 화면과 API가 같은 출처라 교차 출처 요청이 아니어서
4. 백엔드 CORS 설정이 넓어서

> 정답: 3번. 같은 출처 요청에는 CORS 검사가 적용되지 않습니다.

**Q2.** `/api/...` 요청이 502 Bad Gateway일 때 먼저 확인할 것은 무엇인가요?

1. try_files 설정
2. api 컨테이너가 실행 중인지, 다시 만든 뒤라면 web을 재시작했는지
3. 소스맵 생성 여부
4. CSP 설정

> 정답: 2번. 502는 Nginx가 뒤의 서버에서 응답을 받지 못했다는 뜻입니다.

---

## S16. GitHub Actions와 S3 배포

*8일차 오후, 3시간*

> 섹션 목표: GitHub Actions로 테스트를 자동화하고, S3 정적 웹 호스팅에 OIDC 인증으로 자동 배포하는 파이프라인을 만듭니다.

### S16-P54. CI: 테스트 자동화

> 학습 목표: GitHub Actions의 구성 요소를 설명하고, 풀 리퀘스트마다 린트, 테스트, 빌드, E2E를 실행하는 CI를 만들 수 있습니다.
>
> 완성 코드 브랜치: `p54-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S16-P54-01 CI/CD와 GitHub Actions | 주요 개념 | 15분 |
| S16-P54-02 CI 워크플로 작성과 실행 | 실습 | 30분 |
| S16-P54-03 정리: CI: 테스트 자동화 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S16-P54-01. CI/CD와 GitHub Actions

*주요 개념, 15분*

CI(Continuous Integration, 지속적 통합)는 코드가 공유 브랜치에 합쳐지기 전에 자동으로 검사하는 것이고, CD(Continuous Delivery/Deployment, 지속적 배포)는 검사를 통과한 코드를 자동으로 배포하는 것입니다. S11에서 만든 테스트와 S12의 린트 규칙은 누군가 실행해야 의미가 있는데, CI가 이를 모든 변경마다 빠짐없이 실행합니다.

GitHub Actions는 저장소의 `.github/workflows` 폴더에 YAML 파일로 작업 절차를 적으면, GitHub가 준비한 가상 머신에서 실행해 주는 서비스입니다.

| 구성 요소 | 의미 | 이 과정의 예 |
|---|---|---|
| 워크플로(workflow) | YAML 파일 하나. 언제 무엇을 할지 정의 | `ci.yml`, `deploy.yml` |
| 트리거(`on`) | 워크플로를 시작하는 사건 | 풀 리퀘스트, main에 push, 수동 실행 |
| 잡(job) | 같은 러너에서 실행되는 단계 묶음. 잡끼리는 기본적으로 병렬 | `test`, `deploy` |
| 러너(runner) | 잡을 실행하는 가상 머신 | `ubuntu-latest` |
| 스텝(step) | 명령(`run`)이나 이미 만들어진 액션(`uses`) 하나 | `npm ci`, `actions/checkout` |
| 변수와 시크릿 | 저장소나 환경에 저장해 두고 `${{ vars.X }}`, `${{ secrets.X }}`로 쓰는 값 | AWS 역할 ARN, 버킷 이름 |

작업 흐름은 다음과 같습니다. 개발자는 기능 브랜치에서 작업하고 풀 리퀘스트를 엽니다. CI가 통과해야 main에 병합할 수 있고, main에 병합되면 CD가 배포합니다.

```text
기능 브랜치 ──PR──> [CI: 린트, 단위 테스트, 빌드, E2E] ──통과 후 병합──> main ──> [CD: 빌드, S3 업로드]
```

#### S16-P54-02. CI 워크플로 작성과 실행

*실습, 30분*

CI 워크플로를 작성합니다. `workflow_call`은 다음 파트의 배포 워크플로가 이 워크플로를 불러 쓸 수 있게 합니다.

`.github/workflows/ci.yml`

```yaml
# CI: 코드가 main에 들어가기 전에 린트, 단위 테스트, 빌드, E2E 테스트를 자동으로 실행합니다.
name: CI

on:
  pull_request:
    branches: [main]
  workflow_call: # 배포 워크플로(deploy.yml)가 배포 전에 이 워크플로를 불러 씁니다.

permissions:
  contents: read

jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: actions/checkout@v6

      - uses: actions/setup-node@v6
        with:
          node-version: 24
          cache: npm # package-lock.json을 기준으로 내려받은 패키지를 캐시합니다.

      - name: 의존성 설치
        run: npm ci

      - name: 린트
        run: npm run lint

      - name: 단위, 컴포넌트 테스트
        run: npm run test:run

      - name: 빌드
        run: npm run build

      - name: Playwright 브라우저 설치
        run: npx playwright install --with-deps chromium

      - name: E2E 테스트
        run: npm run test:e2e
        env:
          CI: true

      - name: 실패 시 E2E 보고서 보관
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report
          retention-days: 7
```

워크플로에서 볼 부분은 다음과 같습니다.

- `permissions: contents: read`로 워크플로가 받는 GitHub 토큰의 권한을 읽기로 줄입니다. 필요한 권한만 주는 원칙은 CI에도 적용됩니다.
- `cache: npm`은 내려받은 패키지를 캐시해 다음 실행을 빠르게 합니다.
- E2E 테스트는 `CI=true` 환경에서 재시도 2회, 기존 서버 재사용 안 함으로 동작합니다(`playwright.config.js`).
- 실패했을 때만 Playwright 보고서를 결과물(artifact)로 올려, 실행 화면에서 내려받아 원인을 볼 수 있게 합니다.

GitHub에 저장소를 만들고 실행해 봅니다.

1. GitHub에서 `react-frontend` 저장소를 만들고, 로컬 프로젝트를 연결해 main 브랜치를 올립니다.

```bash
git remote add origin https://github.com/<계정>/react-frontend.git
git push -u origin main
```

2. 기능 브랜치를 만들고 일부러 테스트를 깨뜨려 풀 리퀘스트를 엽니다.

```bash
git switch -c ci-test
# src/utils/date.js의 formatDate가 빈 문자열 대신 '없음'을 돌려주게 고칩니다.
git commit -am "CI 실패 확인용 변경"
git push -u origin ci-test
```

3. GitHub의 풀 리퀘스트 화면에서 CI가 실행되고 실패하는 것을 확인합니다. "Details"를 눌러 어느 스텝의 어느 테스트가 실패했는지 찾습니다.
4. 변경을 되돌려 다시 push하면 CI가 다시 실행되어 통과합니다.
5. 저장소의 Settings > Branches에서 main에 규칙을 추가합니다. "Require a pull request before merging"과 "Require status checks to pass"를 켜고, 필수 검사로 `test`를 고릅니다. 이제 CI를 통과하지 않은 코드는 main에 들어갈 수 없습니다.

> 완성 코드: 막히면 예제 저장소의 `p54-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S16-P54-03. 정리: CI: 테스트 자동화

*정리, 5분*

- GitHub Actions는 워크플로, 트리거, 잡, 러너, 스텝으로 구성되며 `.github/workflows`의 YAML로 정의합니다.
- CI는 풀 리퀘스트마다 린트, 단위 테스트, 빌드, E2E를 실행하고, 브랜치 보호 규칙으로 통과한 코드만 병합되게 합니다.
- 워크플로의 토큰 권한은 필요한 만큼만 줍니다.

##### 확인 퀴즈

**Q1.** 풀 리퀘스트에서 CI가 실패한 코드가 main에 병합되지 않게 하려면 무엇을 설정해야 하나요?

1. 브랜치 보호 규칙의 필수 상태 검사
2. cache: npm
3. permissions: contents: read
4. workflow_call

> 정답: 1번. 필수 상태 검사로 지정한 잡이 통과해야 병합 버튼이 활성화됩니다.

**Q2.** GitHub Actions에서 같은 러너에서 실행되는 스텝의 묶음을 무엇이라고 하나요?

1. 잡
2. 트리거
3. 액션
4. 워크플로

> 정답: 1번. 워크플로는 하나 이상의 잡으로, 잡은 여러 스텝으로 이루어집니다.

### S16-P55. S3 정적 웹 호스팅

> 학습 목표: S3 정적 웹 호스팅으로 프론트엔드를 배포하고, 다른 출처가 되는 API와의 CORS 설정을 맞출 수 있으며, CloudFront를 쓰는 이유를 설명할 수 있습니다.
>
> 완성 코드 브랜치: `p55-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S16-P55-01 S3 정적 웹 호스팅 | 주요 개념 | 10분 |
| S16-P55-02 CloudFront를 쓰는 이유 | 주요 개념 | 10분 |
| S16-P55-03 S3 버킷 만들고 수동 배포하기 | 실습 | 25분 |
| S16-P55-04 정리: S3 정적 웹 호스팅 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S16-P55-01. S3 정적 웹 호스팅

*주요 개념, 10분*

빌드 결과물은 HTML, JavaScript, CSS 파일일 뿐이므로 파일을 그대로 내려주는 저장소만 있으면 서비스할 수 있습니다. Amazon S3는 버킷에 파일을 저장하는 객체 저장소이며, 버킷에 정적 웹 사이트 호스팅을 켜면 웹 서버처럼 동작하는 주소가 생깁니다. 서버를 직접 운영하지 않으므로 관리할 것이 적고, 저장한 용량과 전송량만큼만 비용을 냅니다.

| 항목 | 내용 |
|---|---|
| 웹사이트 주소 | `http://<버킷>.s3-website.<리전>.amazonaws.com` (HTTP만 지원) |
| 인덱스 문서 | 폴더 주소를 요청했을 때 돌려줄 파일. `index.html` |
| 오류 문서 | 없는 파일을 요청했을 때 돌려줄 파일. SPA는 `index.html`로 지정해 대체 응답을 흉내 냄 (상태 코드는 404) |
| 공개 설정 | 버킷의 퍼블릭 액세스 차단을 끄고, 누구나 `s3:GetObject`를 할 수 있는 버킷 정책 추가 |
| 응답 헤더 | 파일별 `Cache-Control`, `Content-Type`만 지정 가능. CSP 같은 보안 헤더는 넣을 수 없음 |

S15의 Nginx 구성과 가장 크게 다른 점은 출처입니다. S3는 `/api/`를 백엔드로 넘겨 주는 프록시가 없으므로, 화면은 S3 주소에서, API는 백엔드 과정 S13~S15에서 배포한 백엔드의 공개 주소에서 받습니다. 두 주소는 다른 출처이므로 S5에서 배운 CORS가 다시 필요합니다.

- 빌드할 때 `VITE_API_BASE_URL`에 백엔드의 공개 주소를 절대 주소로 넣습니다(S15-P50-02의 6번).
- 백엔드의 `CORS_ORIGINS`에 S3 웹사이트 주소를 등록합니다. 주소 끝에 `/`를 붙이지 않고 스킴부터 정확히 적습니다.
- 백엔드가 표지 파일을 S3에 저장하도록 바꿨다면(백엔드 S15-P50) 표지 주소가 `https://...`로 시작하는 완전한 주소로 옵니다. `toAssetUrl`은 이 경우 API 주소를 붙이지 않아야 합니다.

#### S16-P55-02. CloudFront를 쓰는 이유

*주요 개념, 10분*

이 과정은 S3 웹사이트 주소로 직접 배포하지만, 실제 서비스에서는 S3 앞에 CDN인 Amazon CloudFront를 둡니다. CloudFront는 전 세계의 엣지 서버에서 파일을 캐시해 사용자와 가까운 곳에서 응답하는 서비스입니다. 이 과정의 실습에는 포함하지 않으며, 쓰는 이유만 정리합니다.

| S3 웹사이트 주소의 한계 | CloudFront로 해결하는 방법 |
|---|---|
| HTTP만 지원해 전송 내용이 보호되지 않고, 브라우저가 "주의 요함"으로 표시 | 인증서(ACM)를 연결해 HTTPS와 자체 도메인으로 서비스 |
| CSP, `X-Frame-Options` 같은 보안 헤더를 붙일 수 없음 | 응답 헤더 정책으로 S12에서 정리한 보안 헤더를 모든 응답에 추가 |
| 버킷을 누구나 읽을 수 있게 공개해야 함 | OAC(Origin Access Control)로 CloudFront만 버킷을 읽게 하고 버킷은 비공개로 유지 |
| 모든 요청이 한 리전의 버킷까지 감 | 엣지 캐시로 응답이 빠르고 버킷 요청 비용이 줄어듦 |
| SPA 대체 응답의 상태 코드가 404 | 오류 응답 설정에서 404를 200과 `index.html`로 바꿈 |
| 화면과 API의 출처가 다름 | `/api/*` 경로를 백엔드(ALB)로 전달하는 동작을 추가하면 S15처럼 같은 출처로 구성 가능 |

CloudFront를 쓰면 배포 후 엣지에 남은 예전 `index.html`을 지우는 무효화(invalidation) 단계를 배포 워크플로에 추가합니다. 해시가 붙은 파일은 이름이 바뀌므로 무효화할 필요가 없습니다.

#### S16-P55-03. S3 버킷 만들고 수동 배포하기

*실습, 25분*

AWS CLI가 설치되어 있고 `aws configure`로 내 계정의 자격 증명이 설정되어 있다고 가정합니다. 리전은 `ap-northeast-2`(서울)를 씁니다. 버킷 이름은 전 세계에서 하나뿐이어야 하므로 `react-frontend-<내 이름>-<숫자>`처럼 정합니다.

**1) 버킷 만들기와 웹 호스팅 켜기**

```bash
export BUCKET=react-frontend-hong-1234
export AWS_REGION=ap-northeast-2

aws s3 mb "s3://$BUCKET" --region "$AWS_REGION"
aws s3 website "s3://$BUCKET" --index-document index.html --error-document index.html
```

**2) 공개 읽기 허용**

새 버킷은 퍼블릭 액세스 차단이 켜져 있어 공개 정책을 붙일 수 없습니다. 차단을 끄고, 파일 읽기만 허용하는 정책을 붙입니다. 정책 파일의 `BUCKET_NAME`을 내 버킷 이름으로 바꿉니다.

`deploy/s3-bucket-policy.json`

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForStaticWebsite",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::BUCKET_NAME/*"
    }
  ]
}
```

```bash
aws s3api put-public-access-block --bucket "$BUCKET" \
  --public-access-block-configuration BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false
sed "s/BUCKET_NAME/$BUCKET/" deploy/s3-bucket-policy.json > /tmp/policy.json
aws s3api put-bucket-policy --bucket "$BUCKET" --policy file:///tmp/policy.json
```

정책은 `s3:GetObject`(파일 읽기)만 허용합니다. 목록 보기나 쓰기는 허용하지 않습니다.

**3) 표지 주소 처리 보완**

`toAssetUrl`이 완전한 주소는 그대로 쓰도록 한 줄을 추가하고 테스트로 지킵니다.

```js
export function toAssetUrl(path) {
  if (!path) return null;
  if (/^https?:\/\//.test(path)) return path;
  return `${API_BASE_URL}${path}`;
}
```

`src/api/client.test.js`

```js
import { describe, expect, it } from 'vitest';
import { toAssetUrl } from './client';

describe('toAssetUrl', () => {
  it('경로에는 API 주소를 붙인다', () => {
    expect(toAssetUrl('/covers/a.png')).toBe('http://api.test/covers/a.png');
  });

  it('완전한 주소는 그대로 둔다', () => {
    const url = 'https://bucket.s3.ap-northeast-2.amazonaws.com/covers/a.png';
    expect(toAssetUrl(url)).toBe(url);
  });

  it('값이 없으면 null을 돌려준다', () => {
    expect(toAssetUrl(null)).toBeNull();
  });
});
```

**4) 빌드와 업로드**

백엔드의 공개 주소로 빌드해 올립니다. 해시가 붙은 파일과 `index.html`의 캐시 설정을 나눠 두 번 올립니다. S15-P51에서 Nginx에 적용한 캐시 규칙과 같습니다.

```bash
VITE_API_BASE_URL=https://<백엔드 공개 주소> npm run build

aws s3 sync dist/assets "s3://$BUCKET/assets" --delete \
  --cache-control "public, max-age=31536000, immutable"
aws s3 sync dist "s3://$BUCKET" --delete --exclude "assets/*" --cache-control "no-cache"
```

**5) 백엔드 CORS 등록과 확인**

백엔드 서버의 환경 변수 `CORS_ORIGINS`에 `http://<버킷>.s3-website.ap-northeast-2.amazonaws.com`을 추가하고 백엔드를 다시 시작합니다. 그리고 다음을 확인합니다.

1. 웹사이트 주소로 접속해 목록, 로그인, 상세가 동작합니다.
2. Network 탭에서 API 요청이 백엔드 공개 주소로 나가고, 로그인 후 요청에 `OPTIONS` 사전 요청이 보입니다. S15의 같은 출처 구성과 다른 점입니다.
3. `/books/3`에서 새로고침하면 화면은 정상이지만, Network 탭의 문서 요청 상태가 404입니다. 오류 문서로 대체 응답을 흉내 냈기 때문입니다.
4. `curl -I`로 웹사이트 주소의 응답 헤더를 보면 `content-security-policy`가 없습니다. CloudFront가 필요한 이유 중 하나입니다.
5. 백엔드 `CORS_ORIGINS`에서 S3 주소를 잠시 빼면 Console에 CORS 오류가 나고 화면에 "서버에 연결할 수 없습니다."가 표시되는지 확인하고 되돌립니다.

> 완성 코드: 막히면 예제 저장소의 `p55-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S16-P55-04. 정리: S3 정적 웹 호스팅

*정리, 5분*

- S3 정적 웹 호스팅은 버킷에 빌드 결과물을 올려 서버 없이 프론트엔드를 서비스하며, 인덱스와 오류 문서를 `index.html`로 지정합니다.
- S3에는 프록시가 없어 화면과 API가 다른 출처가 되므로, 절대 API 주소로 빌드하고 백엔드 CORS에 S3 주소를 등록합니다.
- 실제 서비스에서는 HTTPS, 보안 헤더, 비공개 버킷, 캐시를 위해 S3 앞에 CloudFront를 둡니다.

##### 확인 퀴즈

**Q1.** S3 웹사이트에 배포한 화면이 API를 부를 때 CORS 설정이 필요한 이유는 무엇인가요?

1. HTTP라서
2. 버킷이 공개되어서
3. S3가 API 요청을 막아서
4. S3 웹사이트 주소와 백엔드 주소의 출처가 달라서

> 정답: 4번. S3에는 /api를 넘겨 주는 프록시가 없어 브라우저가 백엔드로 교차 출처 요청을 보냅니다.

**Q2.** CloudFront를 S3 앞에 두는 이유로 알맞지 않은 것은 무엇인가요?

1. HTTPS와 자체 도메인을 쓰기 위해
2. 보안 헤더를 응답에 추가하기 위해
3. 버킷을 비공개로 유지하기 위해
4. VITE_API_BASE_URL을 실행할 때 바꾸기 위해

> 정답: 4번. 환경 변수는 여전히 빌드 시점에 결정됩니다.

### S16-P56. CD: OIDC, 자동 배포, 롤백

> 학습 목표: 장기 액세스 키 없이 OIDC로 AWS에 인증해 main에 병합될 때 자동으로 S3에 배포하고, 이전 버전으로 롤백할 수 있습니다.
>
> 완성 코드 브랜치: `p56-done`

| 페이지 | 유형 | 시간 |
|---|---|---|
| S16-P56-01 OIDC로 AWS에 인증하기 | 주요 개념 | 10분 |
| S16-P56-02 배포 역할 준비와 배포 워크플로 | 실습 | 30분 |
| S16-P56-03 롤백 | 실습 | 5분 |
| S16-P56-04 정리: CD: OIDC, 자동 배포, 롤백 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S16-P56-01. OIDC로 AWS에 인증하기

*주요 개념, 10분*

GitHub Actions가 S3에 파일을 올리려면 AWS 권한이 필요합니다. 가장 쉬운 방법은 IAM 사용자의 액세스 키를 GitHub 시크릿에 저장하는 것이지만, 이 키는 만료되지 않아서 유출되면 누가 언제든 쓸 수 있고 정기적으로 바꾸기도 번거롭습니다.

OIDC(OpenID Connect)를 쓰면 저장해 둘 키가 없습니다. 워크플로가 실행될 때마다 GitHub가 "이 토큰은 어느 저장소의 어느 환경에서 실행된 워크플로의 것"이라는 정보를 담은 짧은 토큰을 발급하고, AWS는 이 토큰을 확인한 뒤 미리 정한 역할의 임시 자격 증명(1시간)을 내줍니다.

```text
GitHub Actions ──(1) OIDC 토큰 요청──> GitHub
               <─(2) 토큰 (repo, environment 정보 포함)
               ──(3) 토큰 제시, 역할 요청──> AWS STS
                       (IAM 역할의 신뢰 정책으로 저장소와 환경 확인)
               <─(4) 임시 자격 증명
               ──(5) aws s3 sync──> S3
```

AWS 쪽에는 두 가지를 준비합니다. 첫째, GitHub를 신뢰할 수 있는 OIDC 공급자로 등록합니다. 둘째, 배포용 IAM 역할을 만들고 신뢰 정책에 "내 저장소의 `production` 환경에서 실행된 워크플로만 이 역할을 맡을 수 있다"는 조건을 적습니다. 역할의 권한은 배포에 필요한 버킷 목록 보기와 파일 쓰기, 지우기만 줍니다. 다른 저장소나 기능 브랜치의 워크플로가 이 역할을 쓰려 하면 AWS가 거부합니다.

#### S16-P56-02. 배포 역할 준비와 배포 워크플로

*실습, 30분*

**1) OIDC 공급자 등록 (계정에 한 번)**

```bash
aws iam create-open-id-connect-provider \
  --url https://token.actions.githubusercontent.com \
  --client-id-list sts.amazonaws.com
```

이미 등록되어 있다는 오류가 나면 그대로 다음 단계로 넘어갑니다.

**2) 배포 역할 만들기**

신뢰 정책의 `ACCOUNT_ID`와 `GITHUB_OWNER`를 내 AWS 계정 번호와 GitHub 계정으로 바꿉니다. `sub` 조건이 저장소와 환경을 함께 제한합니다.

`deploy/github-oidc-trust-policy.json`

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:GITHUB_OWNER/react-frontend:environment:production"
        }
      }
    }
  ]
}
```

권한 정책의 `BUCKET_NAME`을 내 버킷 이름으로 바꿉니다.

`deploy/deploy-role-policy.json`

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListBucket",
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::BUCKET_NAME"
    },
    {
      "Sid": "WriteObjects",
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:DeleteObject"],
      "Resource": "arn:aws:s3:::BUCKET_NAME/*"
    }
  ]
}
```

```bash
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
sed -e "s/ACCOUNT_ID/$ACCOUNT_ID/" -e "s/GITHUB_OWNER/<GitHub 계정>/" \
  deploy/github-oidc-trust-policy.json > /tmp/trust.json
sed "s/BUCKET_NAME/$BUCKET/" deploy/deploy-role-policy.json > /tmp/role-policy.json

aws iam create-role --role-name react-frontend-deploy \
  --assume-role-policy-document file:///tmp/trust.json
aws iam put-role-policy --role-name react-frontend-deploy \
  --policy-name s3-deploy --policy-document file:///tmp/role-policy.json
aws iam get-role --role-name react-frontend-deploy --query Role.Arn --output text
```

마지막 명령이 출력한 역할 ARN을 적어 둡니다.

**3) GitHub 환경과 변수 등록**

저장소의 Settings > Environments에서 `production` 환경을 만들고, 다음 변수를 Environment variables에 등록합니다. 모두 비밀 값이 아니므로 시크릿이 아니라 변수로 둡니다. 저장할 비밀이 없다는 것이 OIDC의 장점입니다.

| 변수 | 값의 예 |
|---|---|
| `AWS_ROLE_ARN` | `arn:aws:iam::123456789012:role/react-frontend-deploy` |
| `AWS_REGION` | `ap-northeast-2` |
| `S3_BUCKET` | `react-frontend-hong-1234` |
| `VITE_API_BASE_URL` | 백엔드의 공개 주소 |

"Required reviewers"에 나를 추가하면 배포 직전에 승인을 기다리게 할 수 있습니다. 실습에서는 선택입니다.

**4) 배포 워크플로 작성**

`.github/workflows/deploy.yml`

```yaml
# CD: main에 코드가 들어오면 테스트를 통과한 경우에만 빌드해 S3 정적 웹사이트에 배포합니다.
# 수동 실행(workflow_dispatch)에 이전 커밋을 지정하면 그 시점으로 롤백 배포합니다.
name: Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:
    inputs:
      ref:
        description: '배포할 커밋 SHA 또는 태그 (롤백할 때 지정, 비우면 main 최신)'
        required: false
        default: ''

# 같은 환경에 배포가 겹치지 않게 하나씩 실행합니다.
concurrency:
  group: deploy-production
  cancel-in-progress: false

jobs:
  ci:
    # 평소 배포(push)는 CI를 먼저 통과해야 합니다. 롤백은 이미 검증된 커밋이므로 건너뜁니다.
    if: github.event_name == 'push'
    uses: ./.github/workflows/ci.yml

  deploy:
    needs: ci
    if: ${{ !failure() && !cancelled() }}
    runs-on: ubuntu-latest
    environment: production # 저장소 Settings > Environments에서 승인자와 변수를 관리합니다.
    permissions:
      contents: read
      id-token: write # OIDC 토큰을 받아 AWS 역할을 맡기 위해 필요합니다.
    steps:
      - uses: actions/checkout@v6
        with:
          ref: ${{ inputs.ref || github.sha }}

      - uses: actions/setup-node@v6
        with:
          node-version: 24
          cache: npm

      - name: 의존성 설치
        run: npm ci

      - name: 운영 빌드
        run: npm run build
        env:
          # S3에서는 Nginx 프록시를 쓸 수 없으므로 백엔드의 공개 주소를 빌드에 새깁니다.
          VITE_API_BASE_URL: ${{ vars.VITE_API_BASE_URL }}

      - name: AWS 인증 (OIDC, 장기 액세스 키 없음)
        uses: aws-actions/configure-aws-credentials@v6
        with:
          role-to-assume: ${{ vars.AWS_ROLE_ARN }}
          aws-region: ${{ vars.AWS_REGION }}

      - name: S3에 업로드
        env:
          BUCKET: ${{ vars.S3_BUCKET }}
        run: |
          # 1) 해시가 붙은 파일은 오래 캐시합니다.
          aws s3 sync dist/assets "s3://$BUCKET/assets" --delete \
            --cache-control "public, max-age=31536000, immutable"
          # 2) index.html 등 나머지는 매번 새로 확인하게 합니다. assets는 1)에서 처리했으므로 제외합니다.
          aws s3 sync dist "s3://$BUCKET" --delete --exclude "assets/*" \
            --cache-control "no-cache"

      - name: 배포 결과
        env:
          BUCKET: ${{ vars.S3_BUCKET }}
          REGION: ${{ vars.AWS_REGION }}
        run: |
          echo "배포한 커밋: $(git rev-parse --short HEAD)" >> "$GITHUB_STEP_SUMMARY"
          echo "사이트 주소: http://$BUCKET.s3-website.$REGION.amazonaws.com" >> "$GITHUB_STEP_SUMMARY"
```

워크플로에서 볼 부분은 다음과 같습니다.

- `ci` 잡이 S16-P54의 CI 워크플로를 불러 실행하고, `deploy` 잡은 `needs: ci`로 그 뒤에 실행됩니다. 테스트에 실패한 코드는 배포되지 않습니다.
- `id-token: write` 권한이 있어야 OIDC 토큰을 받을 수 있습니다. 이 권한은 `deploy` 잡에만 줍니다.
- `environment: production`이 신뢰 정책의 `sub` 조건과 맞아야 역할을 맡을 수 있습니다.
- `concurrency`로 배포가 겹치지 않게 하나씩 실행합니다.
- 배포 결과 요약(`GITHUB_STEP_SUMMARY`)에 배포한 커밋과 사이트 주소를 남깁니다.

**5) 배포 확인**

1. 기능 브랜치에서 목록 화면 제목을 바꾸고 풀 리퀘스트를 열어 CI 통과 후 병합합니다.
2. Actions 탭에서 Deploy 워크플로가 `ci`, `deploy` 순서로 실행되는 것을 확인합니다. 요약에 나온 사이트 주소로 접속해 바뀐 제목이 보이는지 확인합니다.
3. 신뢰 정책의 조건을 시험합니다. `deploy.yml`의 `environment` 줄을 지운 브랜치에서 수동 실행하면 AWS 인증 스텝이 "Not authorized to perform sts:AssumeRoleWithWebIdentity"로 실패해야 합니다.

#### S16-P56-03. 롤백

*실습, 5분*

배포한 버전에 문제가 생기면 이전 버전으로 되돌립니다. 이 워크플로는 수동 실행에 커밋을 지정하면 그 시점의 코드로 다시 빌드해 배포합니다.

1. Actions 탭에서 Deploy를 고르고 "Run workflow"를 누릅니다.
2. `ref`에 제목을 바꾸기 전 커밋의 SHA를 넣고 실행합니다. 이미 CI를 통과한 커밋이므로 `ci` 잡은 건너뛰고 `deploy`만 실행됩니다.
3. 사이트에서 제목이 예전으로 돌아왔는지 확인합니다. 롤백은 임시 조치이므로, 원인을 고친 커밋을 main에 병합하면 다시 최신 코드가 배포됩니다.

> 완성 코드: 막히면 예제 저장소의 `p56-done` 브랜치와 내 코드를 비교합니다. 통째로 복사하지 말고 다른 곳만 찾아 고칩니다.

#### S16-P56-04. 정리: CD: OIDC, 자동 배포, 롤백

*정리, 5분*

- OIDC를 쓰면 GitHub Actions가 장기 액세스 키 없이 실행할 때마다 임시 자격 증명을 받습니다.
- 배포 역할의 신뢰 정책은 저장소와 환경을 제한하고, 권한 정책은 해당 버킷의 쓰기와 지우기만 허용합니다.
- 배포 워크플로는 CI 통과 후에만 실행되며, 커밋을 지정한 수동 실행으로 롤백합니다.

##### 확인 퀴즈

**Q1.** GitHub Actions에서 AWS에 OIDC로 인증할 때의 장점은 무엇인가요?

1. 권한 정책이 필요 없다.
2. 만료되지 않는 액세스 키를 저장할 필요가 없고, 매번 짧은 임시 자격 증명을 쓴다.
3. 버킷을 비공개로 만들 수 있다.
4. 배포가 더 빨라진다.

> 정답: 2번. 유출될 장기 비밀이 없고, 신뢰 정책으로 쓸 수 있는 저장소와 환경을 제한합니다.

**Q2.** 배포 워크플로에서 `id-token: write` 권한이 필요한 이유는 무엇인가요?

1. GitHub로부터 OIDC 토큰을 발급받기 위해
2. S3에 파일을 쓰기 위해
3. 풀 리퀘스트에 댓글을 달기 위해
4. 저장소에 코드를 쓰기 위해

> 정답: 1번. S3 쓰기 권한은 AWS 역할이 주고, 이 권한은 역할을 맡는 데 필요한 토큰을 받기 위한 것입니다.

---

## S17. 미니 프로젝트 설계와 구현

*9일차 오전, 4시간*

> 섹션 목표: 지금까지 만든 도서 관리 화면에 새 기능을 하나 골라 설계하고, API 계층부터 화면, 테스트까지 스스로 구현합니다.

### S17-P57. 주제 선정과 화면 설계

> 학습 목표: 미니 프로젝트의 주제를 고르고, 사용할 API, 화면, 상태, 권한을 설계 문서로 정리할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S17-P57-01 미니 프로젝트 안내 | 주요 개념 | 10분 |
| S17-P57-02 주제 고르고 설계 문서 쓰기 | 실습 | 35분 |
| S17-P57-03 정리: 주제 선정과 화면 설계 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S17-P57-01. 미니 프로젝트 안내

*주요 개념, 10분*

미니 프로젝트는 8일 동안 배운 내용을 한 기능 안에서 처음부터 끝까지 다시 밟아 보는 시간입니다. 새 앱을 만드는 대신 지금까지 만든 `react-frontend`에 기능을 더하므로, 이미 만든 API 계층, 인증, Query 캐시, 테스트 도구, 배포 파이프라인을 그대로 활용합니다. 혼자 또는 2~3명이 한 팀으로 진행합니다.

하루의 흐름은 다음과 같습니다.

| 파트 | 할 일 | 결과물 |
|---|---|---|
| S17-P57 | 주제 선정, 설계 | 설계 문서 (`docs/mini-project.md`) |
| S17-P58 | API 함수와 조회 화면 | 조회 화면 |
| S17-P59 | 인증, 권한, 쓰기 기능 | 등록, 수정, 삭제 동작 |
| S17-P60 | 테스트 | 단위, 컴포넌트 테스트와 E2E 1개 이상 |
| S18-P61 | 보안 점검, S3 배포 | 점검표, 배포 주소 |
| S18-P62 | 발표 | 시연과 질의응답 |
| S18-P63 | 평가, 회고, 자원 정리 | 회고 기록, 정리된 AWS 자원 |

작업은 `mini-project` 같은 기능 브랜치에서 하고, S18-P61에서 풀 리퀘스트로 main에 병합해 S16의 파이프라인으로 배포합니다. 다음 세 가지를 지키면 됩니다.

1. 백엔드 API를 하나 이상 새로 연결합니다(지금까지 화면에서 쓰지 않은 API 또는 쓰지 않은 기능).
2. 로딩, 오류, 빈 결과, 정상 결과를 모두 구분해 보여 줍니다.
3. 테스트가 CI에서 통과한 상태로 배포합니다.

#### S17-P57-02. 주제 고르고 설계 문서 쓰기

*실습, 35분*

아래 주제 중 하나를 고르거나, 같은 규모의 주제를 직접 정합니다. 난이도 순서입니다.

| 번호 | 주제 | 사용할 API | 다루는 내용 |
|---|---|---|---|
| 1 | 저자별 도서 목록 | `GET /authors/{author_id}/books` | 라우트 매개변수, `useQuery`, 링크 연결 |
| 2 | 저자 관리 화면(관리자) | `GET/POST/DELETE /authors` | 관리자 권한, 409 `DUPLICATE_AUTHOR`, `AUTHOR_HAS_BOOKS` 처리, 캐시 무효화 |
| 3 | 표지 미리보기와 업로드 개선 | `POST /books/{book_id}/cover` | `URL.createObjectURL`과 정리, 파일 검사, 업로드 중 상태 |
| 4 | 대여 이력과 반납 예정 알림 | `GET /loans/me` | 날짜 계산, 정렬, 반납 기한 임박 표시 |
| 5 | 대시보드 기간 필터 | 로그 분석(브라우저) | 필터 상태, `useMemo`, 필터를 차트 위 한 줄에 배치 |
| 6 | 대시보드 경보 | `/health`, 요청 기록 | 기준값 설정, "연속 3회 초과" 같은 조건 설계, 상태 색 규칙 |

주제를 골랐으면 `docs/mini-project.md`에 설계를 적습니다. 다음 양식을 복사해 채웁니다.

```markdown
# 미니 프로젝트: (주제)

## 1. 목표
- 사용자: (누가 쓰는가: 방문자, 로그인 사용자, 관리자)
- 해결하는 문제: (한두 문장)

## 2. 화면과 라우트
| 주소 | 화면 | 접근 권한 |
|---|---|---|

## 3. API
| 메서드와 경로 | 요청 | 성공 응답 | 처리할 오류 |
|---|---|---|---|

## 4. 상태
- 서버 상태(Query 키):
- 화면 상태(useState):
- URL 상태(검색 매개변수):

## 5. 오류와 빈 결과 안내 문구
| 상황 | 안내 |
|---|---|

## 6. 테스트 계획
- 단위:
- 컴포넌트(MSW):
- E2E:
```

설계할 때 다음을 확인합니다.

1. Swagger UI(`http://127.0.0.1:8000/docs`)에서 쓸 API를 직접 호출해 요청과 응답 형식, 오류 코드를 확인합니다. S1-P3-03의 API 표처럼 정리합니다.
2. 상태를 S10에서 배운 기준으로 나눕니다. 서버에서 오는 데이터는 Query 캐시, 입력 중인 값은 화면 상태, 공유하거나 새로고침해도 남아야 하는 조건은 URL에 둡니다.
3. 쓰기 기능이 있다면 성공 뒤에 어떤 Query 키를 무효화할지 미리 정합니다.

#### S17-P57-03. 정리: 주제 선정과 화면 설계

*정리, 5분*

- 미니 프로젝트는 기존 앱에 기능을 더하며, 새 API 연결, 네 가지 화면 상태 구분, CI 통과 후 배포를 지킵니다.
- 구현 전에 화면과 라우트, API, 상태, 안내 문구, 테스트 계획을 설계 문서로 정리합니다.
- 상태는 서버 상태, 화면 상태, URL 상태로 나눠 저장 위치를 정합니다.

##### 확인 퀴즈

**Q1.** 저자별 도서 목록 화면에서 "선택한 저자 ID"를 둘 곳으로 가장 알맞은 것은 무엇인가요?

1. 전역 Context
2. 쿠키
3. localStorage
4. 라우트 매개변수(URL)

> 정답: 4번. 주소를 공유하거나 새로고침해도 같은 화면이 나와야 하므로 URL에 둡니다.

**Q2.** 저자 등록에 성공한 뒤 해야 할 일로 알맞은 것은 무엇인가요?

1. 저자 목록을 localStorage에 저장한다.
2. 페이지 전체를 새로고침한다.
3. ['authors'] 쿼리를 무효화해 목록을 다시 받는다.
4. queryClient.clear()를 호출한다.

> 정답: 3번. 쓰기 후에는 영향을 받는 쿼리만 무효화합니다.

### S17-P58. 구현 1: API 계층과 조회

> 학습 목표: 설계에 따라 API 함수와 조회 화면을 구현하고, 로딩, 오류, 빈 결과를 구분해 보여 줄 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S17-P58-01 구현 순서 | 주요 개념 | 5분 |
| S17-P58-02 API 함수와 조회 화면 구현 | 실습 | 40분 |
| S17-P58-03 정리: 구현 1: API 계층과 조회 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S17-P58-01. 구현 순서

*주요 개념, 5분*

구현은 바깥(API)에서 안쪽(화면)으로 진행합니다. 각 단계가 끝날 때마다 브라우저나 테스트로 확인하고 커밋합니다.

1. API 함수: `src/api/`에 함수를 추가합니다. 요청 형식(쿼리, 본문, 폼)만 책임지고, 화면 로직은 넣지 않습니다(S6).
2. 쿼리 연결: 화면에서 `useQuery`로 API 함수를 부릅니다. 쿼리 키는 기존 규칙(`['도메인', '종류', 조건]`)을 따릅니다(S10).
3. 화면 상태: 로딩, 오류(`ErrorMessage`), 빈 결과, 정상 결과를 차례로 만듭니다(S7).
4. 라우트와 메뉴: `App.jsx`에 라우트를 추가하고, 필요하면 `Layout`에 메뉴를 추가합니다.

#### S17-P58-02. API 함수와 조회 화면 구현

*실습, 40분*

설계 문서에 따라 조회 기능을 구현합니다. 주제 1을 고른 경우의 시작 코드는 다음과 같습니다. 다른 주제도 같은 순서로 진행합니다.

```js
// src/api/authors.js에 추가
export async function listAuthorBooks(authorId, { signal } = {}) {
  const { data } = await api.get(`/authors/${authorId}/books`, { signal });
  return data;
}
```

```jsx
// src/pages/AuthorBooksPage.jsx
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router';
import { listAuthorBooks } from '../api/authors';
import ErrorMessage from '../components/ErrorMessage';

export default function AuthorBooksPage() {
  const { authorId } = useParams();
  const { data: books, isPending, error } = useQuery({
    queryKey: ['authors', 'books', authorId],
    queryFn: ({ signal }) => listAuthorBooks(authorId, { signal }),
  });

  if (isPending) return <p>불러오는 중...</p>;
  if (error) return <ErrorMessage error={error} />;
  if (books.length === 0) return <p>이 저자의 도서가 없습니다.</p>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}><Link to={`/books/${book.id}`}>{book.title}</Link></li>
      ))}
    </ul>
  );
}
```

구현하면서 다음을 확인합니다.

1. Network 탭에서 요청 주소와 응답이 설계 문서의 API 표와 같은지 확인합니다.
2. 없는 ID로 접속해 404 안내가 나오는지, 백엔드를 멈춰 연결 실패 안내가 나오는지 확인합니다.
3. 다른 화면에 다녀오면 캐시된 결과가 바로 보이고 뒤에서 다시 확인하는지 React Query Devtools 또는 Network 탭으로 확인합니다.
4. 한 단계가 끝날 때마다 커밋합니다.

#### S17-P58-03. 정리: 구현 1: API 계층과 조회

*정리, 5분*

- API 함수, 쿼리 연결, 화면 상태, 라우트 순서로 바깥에서 안쪽으로 구현합니다.
- 쿼리 키는 기존 규칙을 따르고, API 함수는 `signal`을 받아 취소를 지원합니다.
- 단계마다 확인하고 커밋하면 문제가 생겼을 때 범위를 좁히기 쉽습니다.

##### 확인 퀴즈

**Q1.** API 함수에 `signal`을 넘기는 이유는 무엇인가요?

1. 응답을 캐시하려고
2. 화면을 떠나거나 조건이 바뀌면 진행 중인 요청을 취소할 수 있게 하려고
3. 토큰을 붙이려고
4. 오류를 변환하려고

> 정답: 2번. TanStack Query는 쿼리가 더 필요 없어지면 signal로 요청을 취소합니다.

**Q2.** 조회 화면에서 구분해 보여 줘야 할 네 가지 상태가 아닌 것은 무엇인가요?

1. 빈 결과
2. 재시도 횟수
3. 로딩
4. 오류

> 정답: 2번. 로딩, 오류, 빈 결과, 정상 결과를 구분합니다.

### S17-P59. 구현 2: 인증과 쓰기

> 학습 목표: 권한에 따라 화면을 나누고, 쓰기 기능을 useMutation으로 구현해 오류와 캐시 갱신을 처리할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S17-P59-01 권한과 쓰기 기능 구현 | 실습 | 45분 |
| S17-P59-02 정리: 구현 2: 인증과 쓰기 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S17-P59-01. 권한과 쓰기 기능 구현

*실습, 45분*

설계 문서의 권한 표와 쓰기 기능을 구현합니다. 주제 2(저자 관리)를 예로 들면 다음 순서입니다. 쓰기 기능이 없는 주제(1, 5, 6)는 이 시간에 권한 처리와 화면 완성도를 높이고, 남는 시간에 다른 주제의 쓰기 기능 하나를 더합니다.

1. 라우트를 `RequireAuth`로 감싸고, 관리자 전용이면 화면 안에서 `user.role`을 확인해 안내 문구를 보여 줍니다. 메뉴도 관리자에게만 보이게 합니다. 화면을 숨기는 것은 편의일 뿐이고 실제 권한 검사는 백엔드가 한다는 점을 기억합니다(S12-P40-01).
2. 쓰기 요청은 `useMutation`으로 만듭니다. 성공하면 관련 쿼리를 무효화하고, 실패하면 오류 코드별로 안내합니다.

```jsx
const queryClient = useQueryClient();
const create = useMutation({
  mutationFn: createAuthor,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['authors'] }),
});

// 제출할 때
create.mutate({ name }, {
  onSuccess: () => setName(''),
});

// 화면
{create.error?.code === 'DUPLICATE_AUTHOR' && <p role="alert">이미 등록된 저자입니다.</p>}
<button disabled={create.isPending}>{create.isPending ? '등록 중...' : '등록'}</button>
```

3. 삭제처럼 되돌릴 수 없는 동작은 확인 단계를 둡니다. 브라우저의 `confirm`도 되지만, 화면 안에 "정말 삭제할까요?"와 확인, 취소 버튼을 보여 주는 방식이 테스트하기 쉽습니다.
4. 다음 경우를 모두 확인합니다.

| 확인 | 기대 결과 |
|---|---|
| 로그인하지 않고 주소 직접 입력 | 로그인 화면으로 이동, 로그인 후 원래 주소로 복귀 |
| 일반 사용자로 접속 | 메뉴가 보이지 않고, 주소를 입력하면 권한 안내 |
| 같은 이름 두 번 등록 | 409 안내, 입력값 유지 |
| 처리 중 버튼 연타 | 요청은 한 번만 |
| 성공 후 | 목록에 바로 반영 |
| 액세스 토큰 만료 후 쓰기 | 재발급 후 성공 (S8) |

#### S17-P59-02. 정리: 구현 2: 인증과 쓰기

*정리, 5분*

- 화면의 권한 처리는 사용자 경험을 위한 것이며 실제 권한 검사는 백엔드가 합니다.
- 쓰기는 `useMutation`으로 처리하고, 성공하면 관련 쿼리를 무효화하며, 처리 중에는 버튼을 비활성화합니다.
- 되돌릴 수 없는 동작에는 확인 단계를 두고, 오류 코드별로 안내합니다.

##### 확인 퀴즈

**Q1.** 관리자 메뉴를 일반 사용자에게 숨겼다면 보안 대책으로 충분한가요?

1. 충분하다. 메뉴가 없으면 접근할 수 없다.
2. 충분하지 않다. 주소 입력이나 API 직접 호출이 가능하므로 백엔드가 권한을 검사해야 한다.
3. RequireAuth를 쓰면 충분하다.
4. CSP를 적용하면 충분하다.

> 정답: 2번. 프론트엔드 코드는 사용자가 조작할 수 있으므로 권한의 최종 판단은 백엔드가 합니다.

**Q2.** 처리 중 버튼 비활성화에 쓰는 useMutation의 값은 무엇인가요?

1. isError
2. data
3. isPending
4. isStale

> 정답: 3번. isPending은 요청이 진행 중일 때 true입니다.

### S17-P60. 구현 3: 테스트

> 학습 목표: 미니 프로젝트 기능에 단위, 컴포넌트, E2E 테스트를 작성하고 CI에서 통과시킬 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S17-P60-01 기능 테스트 작성 | 실습 | 45분 |
| S17-P60-02 정리: 구현 3: 테스트 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S17-P60-01. 기능 테스트 작성

*실습, 45분*

설계 문서의 테스트 계획에 따라 테스트를 작성합니다. 다음을 최소 기준으로 합니다.

| 종류 | 최소 개수 | 예 (주제 2) |
|---|---|---|
| 단위 | 1 | 저자 이름 검증 함수 |
| 컴포넌트(MSW) | 2 | 목록 표시, 409 안내 |
| E2E | 1 | 관리자 로그인 후 저자 등록 |

1. MSW 가짜 서버(`src/test/server.js`)에 새 API의 응답을 추가합니다. 응답 형식은 설계 문서의 API 표와 같게 만듭니다.

```js
http.post(`${API}/authors`, async ({ request }) => {
  const { name } = await request.json();
  if (name === '한강') {
    return HttpResponse.json(
      { detail: { code: 'DUPLICATE_AUTHOR', message: 'Author already exists' } },
      { status: 409 },
    );
  }
  return HttpResponse.json({ id: 99, name }, { status: 201 });
}),
```

2. 컴포넌트 테스트는 `renderWithProviders`로 화면을 그리고, 사용자가 하는 순서대로 조작합니다. 관리자 화면은 `AuthContext.Provider`로 관리자 사용자를 넣어 그립니다(S11-P37-02).
3. E2E는 `e2e/mockApi.js`에 새 경로를 추가하고, 핵심 흐름 하나만 테스트합니다.
4. 모두 통과하면 다음 명령을 한 번에 실행해 CI와 같은 검사를 로컬에서 통과하는지 확인합니다.

```bash
npm run lint && npm run test:run && npm run build && npm run test:e2e
```

5. 기능 브랜치를 push하고 풀 리퀘스트를 열어 CI가 통과하는지 확인합니다. 아직 병합하지 않습니다.

#### S17-P60-02. 정리: 구현 3: 테스트

*정리, 5분*

- 새 API의 가짜 응답은 실제 명세와 같은 형식으로 추가하고, 성공과 업무 규칙 오류를 모두 만듭니다.
- 컴포넌트 테스트는 사용자 순서대로 조작하고, E2E는 핵심 흐름 하나만 둡니다.
- 병합 전에 로컬에서 CI와 같은 명령을 실행해 확인합니다.

##### 확인 퀴즈

**Q1.** 미니 프로젝트의 MSW 가짜 응답에 409 오류 경우를 함께 만드는 이유는 무엇인가요?

1. 업무 규칙 오류 안내가 화면에 제대로 나오는지 테스트하려고
2. 성공 응답이 테스트되지 않아서
3. CI가 409를 요구해서
4. MSW가 요구해서

> 정답: 1번. 정상 흐름뿐 아니라 사용자가 만날 오류 상황도 테스트로 지킵니다.

**Q2.** 관리자 전용 화면을 컴포넌트 테스트할 때 로그인 상태를 만드는 방법으로 알맞은 것은 무엇인가요?

1. localStorage에 토큰을 넣는다.
2. RequireAuth를 지운다.
3. 실제 로그인 API를 호출한다.
4. AuthContext.Provider로 관리자 사용자 값을 넣어 그린다.

> 정답: 4번. Context 값을 직접 넣으면 화면 하나만 떼어 원하는 상태로 테스트할 수 있습니다.

---

## S18. 배포와 발표

*9일차 오후, 3시간*

> 섹션 목표: 미니 프로젝트를 점검하고 자동 배포한 뒤 발표하며, 과정 전체를 회고하고 실습 자원을 정리합니다.

### S18-P61. 보안 점검과 S3 배포

> 학습 목표: 점검표로 미니 프로젝트를 점검하고, 풀 리퀘스트 병합으로 S3에 자동 배포하며, 문제가 생기면 증상으로 원인을 찾을 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S18-P61-01 점검표로 확인하기 | 실습 | 20분 |
| S18-P61-02 병합, 배포, 문제 해결 | 실습 | 25분 |
| S18-P61-03 정리: 보안 점검과 S3 배포 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S18-P61-01. 점검표로 확인하기

*실습, 20분*

병합하기 전에 아래 점검표로 미니 프로젝트와 전체 앱을 확인합니다. 해당하지 않는 항목은 "해당 없음"으로 표시합니다. S12-P42-03의 보안 점검표도 함께 사용합니다.

**기능**

| 점검 항목 | 확인 |
|---|---|
| 모든 조회 화면이 로딩, 오류, 빈 결과, 정상 결과를 구분해 보여 준다. | |
| 검색, 정렬, 페이지 조건이 URL에 있고 새로고침과 뒤로 가기에도 유지된다. | |
| 등록, 수정 폼이 백엔드와 같은 규칙으로 먼저 검증하고, 422 오류를 칸별로 표시한다. | |
| PATCH 요청은 바뀐 필드만 보낸다. | |
| 409 업무 규칙 오류(대여 한도, 중복 대여, 대여 기록이 있는 도서 삭제)를 구분해 안내한다. | |
| UTC 시각이 사용자의 시간대로 표시된다. | |
| 처리 중에는 버튼이 비활성화되어 중복 요청이 나가지 않는다. | |

**인증과 보안**

| 점검 항목 | 확인 |
|---|---|
| 로그인은 폼 형식으로 보내고, 실패 메시지는 하나로 통일되어 있다. | |
| 429 응답에 잠금 시간을 안내한다. | |
| 액세스 토큰 만료 시 재발급 후 원래 요청이 다시 전송되고, 동시에 만료되어도 재발급은 한 번만 일어난다. | |
| 재발급 실패 시 로그아웃 상태로 바뀐다. | |
| 토큰은 `tokenStore`를 통해서만 접근하며, `localStorage`를 쓰지 않는다. | |
| `dangerouslySetInnerHTML`, `innerHTML`, `eval`을 쓰지 않는다. | |
| 로그인 후 이동 주소는 앱 내부 경로만 허용한다. | |
| `VITE_` 환경 변수에 비밀정보가 없고, 운영 빌드에 소스맵이 없다. | |
| `npm audit` 결과를 확인하고 조치했다. | |
| 운영 응답에 CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`가 있다. | |

**관제 대시보드**

| 점검 항목 | 확인 |
|---|---|
| 맨 위에서 전체 상태를 몇 초 안에 판단할 수 있다. | |
| 상태 표시에 색과 함께 모양, 글자가 있다. | |
| 갱신 간격과 마지막 갱신 시각이 표시된다. | |
| 탭이 보이지 않으면 폴링이 멈추고, 화면을 떠나면 타이머가 정리된다. | |
| 이중 축 차트가 없고, 단위가 다른 값은 차트를 나눴다. | |
| 대시보드 코드는 별도 파일로 분할되어 일반 사용자는 내려받지 않는다. | |

**도커라이징**

| 점검 항목 | 확인 |
|---|---|
| 최종 이미지에 Node.js와 소스 코드가 없다(멀티 스테이지). | |
| Nginx가 root가 아닌 사용자로 8080 포트에서 실행된다. | |
| 새로고침과 직접 접속 시 SPA 대체 응답(`index.html`)이 동작한다. | |
| `/api/` 프록시로 화면과 API가 같은 출처이며, 사전 요청이 발생하지 않는다. | |
| 해시 파일은 장기 캐시, `index.html`은 `no-cache`다. | |

**배포 자동화**

| 점검 항목 | 확인 |
|---|---|
| 풀 리퀘스트에서 CI(린트, 단위 테스트, 빌드, E2E)가 통과했다. | |
| main 브랜치에 보호 규칙이 있어 CI를 통과하지 않은 코드는 병합되지 않는다. | |
| 배포 인증에 장기 액세스 키를 쓰지 않고, 역할의 신뢰 정책이 저장소와 환경을 제한한다. | |
| 배포 역할의 권한은 해당 버킷의 목록 보기, 쓰기, 지우기뿐이다. | |
| 해시 파일은 장기 캐시, `index.html`은 `no-cache`로 올라간다. | |
| 백엔드 `CORS_ORIGINS`에 S3 웹사이트 주소가 정확히 등록되어 있다. | |

#### S18-P61-02. 병합, 배포, 문제 해결

*실습, 25분*

1. 점검을 마친 풀 리퀘스트를 main에 병합합니다.
2. Actions 탭에서 Deploy 워크플로가 끝나면 요약의 사이트 주소로 접속해 미니 프로젝트 기능을 시연 순서대로 확인합니다.
3. 문제가 생기면 아래 표에서 증상을 찾아 원인을 좁힙니다.

| 증상 | 가능한 원인 | 확인 방법과 해결 |
|---|---|---|
| Console에 "blocked by CORS policy" | 백엔드 `CORS_ORIGINS`에 현재 출처가 없음 | 주소창의 출처(`localhost`인지 `127.0.0.1`인지, 포트)를 확인하고 백엔드에 등록 (S5) |
| 화면에 "서버에 연결할 수 없습니다." | 백엔드 중지, 주소 오류, CORS 차단 | `curl http://127.0.0.1:8000/health`, `.env.development`의 주소, Console의 CORS 메시지 (S6) |
| 환경 변수를 바꿨는데 반영되지 않음 | 개발 서버가 시작할 때만 읽음 | 개발 서버 재시작, 운영은 이미지 재빌드 (S6, S15) |
| 로그인 요청이 422 | JSON으로 보냄 | `URLSearchParams`로 폼 형식 전송 (S6, S8) |
| 표지 업로드가 422 | `Content-Type`을 직접 지정, 필드 이름이 `file`이 아님 | `FormData`를 그대로 넘기고 필드 이름 확인 (S6, S9) |
| 새로고침하면 로그아웃됨 | 리프레시 토큰 미저장, 재발급 실패 | Session Storage 값과 `refresh` 요청 결과 확인 (S8) |
| 재발급 요청이 계속 반복됨 | 재발급 요청이 인터셉터를 거침, 재시도 표시 누락 | 기본 `axios`로 재발급, `_retried` 확인 (S8) |
| 개발 중 같은 요청이 두 번 보임 | `StrictMode`의 의도된 동작 | 첫 요청이 취소되는지 확인 (S3, S6) |
| 목록에 이전 검색 결과가 잠깐 덮어씀 | 이전 요청 미취소 | 이펙트 정리 함수에서 `abort()` (S6) |
| 대여 시각이 9시간 어긋남 | 시간대 없는 UTC 문자열 | `Z`를 붙여 해석 (S9) |
| 차트가 그려지지 않거나 높이가 0 | `ResponsiveContainer`의 부모 크기 없음 | `height` 지정, 부모 요소의 너비 확인 (S13) |
| 운영에서 새로고침하면 404 | SPA 대체 응답 누락 | `try_files ... /index.html` (S15) |

배포 단계에서 자주 만나는 문제는 다음과 같습니다.

| 증상 | 가능한 원인 | 확인 방법과 해결 |
|---|---|---|
| AWS 인증 스텝이 `Not authorized to perform sts:AssumeRoleWithWebIdentity` | 신뢰 정책의 저장소, 환경 이름 불일치, `id-token: write` 누락 | 신뢰 정책의 `sub` 값과 워크플로의 `environment`, 저장소 이름 비교 (S16-P56) |
| `aws s3 sync`가 `AccessDenied` | 역할 권한 정책의 버킷 이름 오류 | 권한 정책의 `Resource`와 `S3_BUCKET` 변수 비교 |
| 웹사이트 주소가 403 Forbidden | 버킷 정책 없음 또는 퍼블릭 액세스 차단 켜짐 | 버킷 정책과 퍼블릭 액세스 차단 설정 확인 (S16-P55) |
| 배포했는데 예전 화면이 보임 | `index.html`이 캐시됨 | 업로드 명령의 `--cache-control "no-cache"` 확인, 강력 새로고침 |
| 화면은 뜨는데 API 요청이 `/api/...`로 나감 | `VITE_API_BASE_URL` 변수 미등록 | `production` 환경 변수 확인 후 다시 배포 |
| 배포 후 CORS 오류 | 백엔드 `CORS_ORIGINS`에 S3 주소 없음, 주소 끝 `/` | 오류 메시지의 출처와 등록 값을 글자 그대로 비교 |

#### S18-P61-03. 정리: 보안 점검과 S3 배포

*정리, 5분*

- 기능, 인증과 보안, 관제, 도커라이징, 배포 자동화 점검표로 병합 전에 빠진 부분을 찾습니다.
- 병합하면 CI를 거쳐 S3에 자동 배포되며, 배포 결과 요약의 주소로 확인합니다.
- 문제는 증상(오류 메시지, 상태 코드, 요청 주소)에서 출발해 원인을 좁힙니다.

##### 확인 퀴즈

**Q1.** 배포 후 웹사이트 주소로 접속했더니 403 Forbidden이 나왔습니다. 가장 먼저 확인할 것은 무엇인가요?

1. VITE_API_BASE_URL
2. 브랜치 보호 규칙
3. 백엔드 CORS_ORIGINS
4. 버킷 정책과 퍼블릭 액세스 차단 설정

> 정답: 4번. 버킷의 파일을 공개로 읽을 수 없으면 S3가 403을 돌려줍니다.

**Q2.** 배포 후 API 요청이 S3 주소의 `/api/...`로 나간다면 원인은 무엇인가요?

1. 해시 파일 캐시 설정이 잘못되었다.
2. 백엔드가 멈췄다.
3. 빌드할 때 VITE_API_BASE_URL에 백엔드 공개 주소가 들어가지 않아 .env.production의 /api가 쓰였다.
4. CloudFront를 쓰지 않았다.

> 정답: 3번. S3에는 /api 프록시가 없으므로 절대 주소로 빌드해야 합니다.

### S18-P62. 프로젝트 발표

> 학습 목표: 미니 프로젝트의 설계와 구현을 시연과 함께 발표하고, 다른 팀의 결과에 질문과 피드백을 줄 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S18-P62-01 발표와 질의응답 | 실습 | 45분 |
| S18-P62-02 정리: 프로젝트 발표 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S18-P62-01. 발표와 질의응답

*실습, 45분*

팀마다 5~7분 발표하고 3분 동안 질의응답을 합니다. 배포한 S3 주소에서 시연합니다. 발표는 다음 순서를 권합니다.

| 순서 | 내용 | 시간 |
|---|---|---|
| 1 | 주제와 해결하려는 문제 | 1분 |
| 2 | 설계: 화면과 라우트, 사용한 API, 상태를 둔 위치 | 1분 |
| 3 | 시연: 정상 흐름, 그리고 오류나 빈 결과 하나 | 2~3분 |
| 4 | 테스트와 배포: 작성한 테스트, CI 결과 화면 | 1분 |
| 5 | 어려웠던 점과 해결 방법, 남은 과제 | 1분 |

듣는 사람은 아래 관점으로 질문이나 피드백을 하나 이상 남깁니다.

- 로딩, 오류, 빈 결과가 구분되어 있었습니까?
- 권한이 필요한 기능에서 일반 사용자나 방문자는 어떻게 됩니까?
- 쓰기 후 다른 화면의 데이터도 맞게 갱신됩니까?
- 백엔드 응답 형식이 바뀌면 어느 테스트가 알려 줍니까?

#### S18-P62-02. 정리: 프로젝트 발표

*정리, 5분*

- 발표는 문제, 설계, 시연, 테스트와 배포, 회고 순서로 구성하고, 정상 흐름과 함께 오류 상황도 보여 줍니다.
- 다른 팀의 결과를 화면 상태, 권한, 캐시 갱신, 테스트 관점으로 살펴보고 피드백합니다.

##### 확인 퀴즈

**Q1.** 시연에서 정상 흐름과 함께 오류나 빈 결과 상황을 보여 주는 이유는 무엇인가요?

1. 발표 시간을 채우려고
2. 실제 사용자가 만나는 다양한 상태를 화면이 제대로 처리하는지 보여 주려고
3. 오류가 나야 테스트가 통과해서
4. 백엔드의 문제를 보여 주려고

> 정답: 2번. 완성도는 정상 흐름보다 예외 상황 처리에서 드러납니다.

**Q2.** 발표에서 CI 결과 화면을 보여 주는 이유는 무엇인가요?

1. 배포된 코드가 자동 검사를 통과했음을 근거로 보이려고
2. 코드 줄 수를 보여 주려고
3. 배포 시간을 줄이려고
4. GitHub 사용법을 알리려고

> 정답: 1번. 자동화된 검사 결과는 품질을 객관적으로 보여 주는 근거입니다.

### S18-P63. 평가, 회고와 자원 정리

> 학습 목표: 과정 전체를 돌아보고 확장 과제를 정하며, 실습에 만든 AWS 자원을 안전하게 정리할 수 있습니다.

| 페이지 | 유형 | 시간 |
|---|---|---|
| S18-P63-01 회고 | 실습 | 15분 |
| S18-P63-02 AWS 자원 정리 | 실습 | 15분 |
| S18-P63-03 과정을 마치며 | 주요 개념 | 15분 |
| S18-P63-04 정리: 평가, 회고와 자원 정리 | 정리 | 5분 |
| 휴식 | | 10분 |

#### S18-P63-01. 회고

*실습, 15분*

다음 질문에 답을 적어 `docs/mini-project.md`의 마지막에 "회고" 절로 추가합니다.

1. 설계 문서와 실제 구현이 달라진 부분은 무엇이며, 왜 달라졌습니까?
2. 9일 동안 배운 내용 중 미니 프로젝트에서 가장 도움이 된 것은 무엇입니까?
3. 다시 한다면 처음부터 다르게 할 것은 무엇입니까?
4. 다음으로 공부할 주제를 아래 확장 과제나 스스로 정한 주제에서 하나 고릅니다.

확장 과제 후보는 다음과 같습니다. 미니 프로젝트에서 고르지 않은 S17-P57-02의 주제도 좋은 과제입니다.

1. **HttpOnly 쿠키 기반 리프레시 토큰.** 백엔드가 리프레시 토큰을 `HttpOnly; Secure; SameSite=Strict` 쿠키로 발급하고, `/auth/refresh`가 쿠키에서 토큰을 읽도록 바꿉니다. 프론트엔드는 `withCredentials`를 설정하고 `sessionStorage` 저장을 제거합니다. 백엔드 CORS의 `allow_credentials` 설정과 CSRF 대책을 함께 설계합니다(S12-P40-04).
2. **CloudFront로 운영 배포.** S3 버킷을 비공개로 바꾸고 OAC로 CloudFront만 읽게 한 뒤, 인증서를 연결해 HTTPS로 서비스합니다. 응답 헤더 정책으로 S15의 보안 헤더를 적용하고, 배포 워크플로에 무효화 단계를 추가합니다(S16-P55-02).
3. **같은 출처 운영 구성.** CloudFront에 `/api/*` 동작을 추가해 백엔드로 전달하고, `VITE_API_BASE_URL`을 `/api`로 되돌려 CORS 없이 동작하게 합니다.
4. **통계 API와 Grafana.** 백엔드에 도서, 대여 현황 통계 API를 추가해 대시보드에 업무 지표를 늘리고, 같은 데이터를 Grafana의 PostgreSQL 데이터 소스로 연결해 직접 만든 대시보드와 비교합니다.
5. **미리보기 배포.** 풀 리퀘스트마다 별도 경로나 버킷에 미리보기를 배포하고, 풀 리퀘스트에 주소를 남기는 워크플로를 만듭니다.

#### S18-P63-02. AWS 자원 정리

*실습, 15분*

실습이 끝나면 비용과 보안 위험을 줄이기 위해 만든 자원을 지웁니다. 계속 운영할 계획이라면 이 단계를 건너뛰되, 공개 버킷은 CloudFront와 OAC 구성으로 바꾸는 것을 권합니다.

```bash
export BUCKET=react-frontend-hong-1234

# 1) 버킷의 파일과 버킷 삭제 (되돌릴 수 없습니다)
aws s3 rm "s3://$BUCKET" --recursive
aws s3 rb "s3://$BUCKET"

# 2) 배포 역할 삭제
aws iam delete-role-policy --role-name react-frontend-deploy --policy-name s3-deploy
aws iam delete-role --role-name react-frontend-deploy
```

OIDC 공급자는 다른 저장소에서도 쓸 수 있으므로, 더 이상 GitHub Actions로 AWS를 쓰지 않을 때만 지웁니다.

```bash
aws iam list-open-id-connect-providers
aws iam delete-open-id-connect-provider --open-id-connect-provider-arn <위에서 확인한 ARN>
```

마지막으로 다음을 정리합니다.

1. 백엔드 `CORS_ORIGINS`에서 S3 웹사이트 주소를 지웁니다. 지운 주소는 다른 사람이 같은 이름의 버킷을 만들어 쓸 수 있으므로, 남겨 두면 그 사이트가 내 API를 교차 출처로 부를 수 있게 됩니다.
2. GitHub 저장소의 `production` 환경 변수를 지우거나 Deploy 워크플로를 비활성화합니다(Actions > Deploy > "Disable workflow").
3. 로컬의 Compose 환경은 `docker compose down`으로 정리합니다. 데이터까지 지우려면 `-v`를 붙입니다.

#### S18-P63-03. 과정을 마치며

*주요 개념, 15분*

이 과정에서는 백엔드 과정의 도서 관리 API를 실제 사용자가 쓰는 화면으로 완성했습니다. JSON과 HTTP의 기초에서 출발해, 브라우저가 지키는 출처의 규칙을 이해하고, 인증과 쓰기 기능을 구현한 뒤, 보안 대책과 관제 대시보드를 더하고, 마지막으로 컨테이너로 묶어 운영 형태로 실행했습니다.

프론트엔드와 백엔드는 서로의 규칙을 알 때 가장 잘 맞물립니다. 화면의 검증은 백엔드의 규칙을 따라야 하고, 화면의 권한 처리는 백엔드의 권한 표를 반영해야 하며, CORS와 프록시는 두 쪽의 설정이 함께 맞아야 동작합니다. 앞으로 새 API를 연결할 때도 S1-P3-03처럼 API 명세를 먼저 정리하고, 이 과정에서 만든 계층(API 함수, 인터셉터, 화면)에 맞춰 차근차근 확장해 나가기를 권합니다.

9일 동안 만든 것을 다시 정리하면 다음과 같습니다. JSON과 HTTP, 출처와 CORS(1~3일차)에서 출발해 React의 컴포넌트, 상태, 이펙트로 화면을 만들고, axios와 API 계층으로 백엔드와 연결했습니다. 라우팅과 인증, 쓰기 기능(4~5일차)을 더한 뒤 TanStack Query로 서버 상태를 정리했고, 테스트와 개발 보안(6일차), 관제 대시보드(7일차)로 품질과 운영을 다뤘습니다. 마지막으로 Nginx 컨테이너와 S3 자동 배포(8일차)로 운영 형태를 완성하고, 미니 프로젝트(9일차)로 전체를 다시 밟았습니다. 각 단계의 완성 코드는 `react-frontend` 저장소의 `pN-done` 브랜치에 남아 있으므로, 필요한 단계로 돌아가 비교하며 복습할 수 있습니다.

#### S18-P63-04. 정리: 평가, 회고와 자원 정리

*정리, 5분*

- 회고로 설계와 구현의 차이, 배운 점, 다음 학습 주제를 기록합니다.
- 실습이 끝나면 S3 버킷, IAM 역할, 필요하면 OIDC 공급자를 지우고, 백엔드 CORS 허용 목록에서 S3 주소를 뺍니다.
- 단계별 완성 코드는 `pN-done` 브랜치로 남아 있어 언제든 돌아가 비교할 수 있습니다.

##### 확인 퀴즈

**Q1.** 버킷을 지운 뒤 백엔드 `CORS_ORIGINS`에서 S3 주소도 지워야 하는 이유는 무엇인가요?

1. 다른 사람이 같은 이름의 버킷을 만들면 그 사이트가 내 API를 교차 출처로 호출할 수 있어서
2. S3 요금이 계속 나와서
3. CI가 실패해서
4. 백엔드가 시작하지 않아서

> 정답: 1번. CORS 허용 목록에는 지금 실제로 쓰는 출처만 남깁니다.

**Q2.** OIDC 공급자를 배포 역할과 함께 바로 지우지 않아도 되는 이유는 무엇인가요?

1. 비용이 가장 적어서
2. 버킷 정책에 포함되어서
3. 지울 수 없는 자원이라서
4. 계정에 하나만 두고 여러 저장소의 역할이 함께 쓰기 때문에

> 정답: 4번. 공급자는 신뢰 관계일 뿐이고, 어떤 저장소가 무엇을 할지는 역할의 신뢰 정책이 정합니다.

---
