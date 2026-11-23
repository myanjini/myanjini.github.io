# React로 만드는 도서 관리 프론트엔드와 관제 대시보드

FastAPI 백엔드와 연계하는 Vite + React 셀프 스터디 교안

---

## 0장. 과정 안내

### 0.1 과정 소개

이 교안은 `FastAPI로 배우는 REST API 백엔드 개발` 과정(https://myanjini.github.io/fastapi-rest-api/index.html)에서 만든 도서 관리 REST API를 사용자가 실제로 쓸 수 있는 웹 화면으로 완성하는 프론트엔드 과정입니다. 백엔드 과정에서는 도서 등록과 조회, 저자 관계, 표지 업로드, JWT 인증, 도서 대여와 반납, 로그와 헬스 체크까지 만들었습니다. 이 과정에서는 그 API를 브라우저에서 호출하고, 결과를 화면에 보여 주며, 운영자가 서비스 상태를 지켜볼 수 있는 관제 대시보드를 만든 뒤, 프론트엔드까지 컨테이너로 묶어 백엔드와 함께 실행합니다.

교안은 혼자 읽고 따라 하는 셀프 스터디 용도로 작성했습니다. 각 장은 학습 목표, 개념 설명, 실습, 정리 순서로 구성되어 있으며, 앞 장에서 만든 코드를 다음 장에서 이어서 확장합니다. 따라서 장 순서대로 학습하는 것을 권장합니다.

### 0.2 학습 목표

과정을 마치면 다음을 할 수 있습니다.

1. Vite로 React 프로젝트를 만들고 컴포넌트, 상태, 이펙트, 라우팅을 사용해 화면을 구성합니다.
2. JSON 형식의 요청과 응답을 이해하고, Fetch API와 axios로 백엔드 API를 호출합니다.
3. 출처(Origin), 동일 출처 정책(SOP), CORS의 동작 원리를 설명하고 CORS 오류를 스스로 진단하고 해결합니다.
4. JWT 액세스 토큰과 리프레시 토큰을 이용한 로그인, 자동 재발급, 로그아웃 흐름을 구현합니다.
5. XSS, 토큰 저장, 보안 헤더, 의존성 점검 등 프론트엔드 개발 보안 요소를 적용합니다.
6. 관제 환경에 맞는 대시보드를 설계하고 차트 라이브러리로 상태와 추세를 시각화합니다.
7. 멀티 스테이지 Dockerfile과 Nginx로 프론트엔드를 컨테이너화하고 백엔드와 함께 Docker Compose로 실행합니다.

### 0.3 학습 대상과 사전 지식

이 과정은 백엔드 과정을 마쳤거나, 최소한 백엔드 과정의 결과물(도서 관리 API)을 실행할 수 있는 학습자를 대상으로 합니다. 다음 지식이 있으면 학습이 수월합니다.

| 구분 | 필요한 수준 |
|---|---|
| HTML, CSS | 태그와 속성, 선택자의 기본 의미를 압니다. |
| JavaScript | 변수, 함수, 배열, 객체를 다뤄 본 경험이 있습니다. 모던 문법은 1장에서 정리합니다. |
| HTTP, REST | 메서드, 상태 코드, 헤더의 의미를 압니다. 백엔드 과정 S1에서 다룬 수준이면 충분합니다. |
| Docker | 이미지, 컨테이너, Compose의 개념을 압니다. 백엔드 과정 S8에서 다룬 수준이면 충분합니다. |

React를 처음 접하는 학습자도 따라올 수 있도록 2장에서 React의 핵심 개념을 처음부터 설명합니다.

### 0.4 과정 구성과 권장 일정

| 장 | 주제 | 주요 결과물 | 권장 일정 |
|---|---|---|---|
| 0 | 과정 안내 | 실습 환경 | 1일차 |
| 1 | 웹 프론트엔드 기초와 JSON | JSON 다루기 실습 | 1일차 |
| 2 | Vite와 React 기초 | 정적 도서 목록 컴포넌트 | 1일차 |
| 3 | 출처, SOP, CORS | 백엔드와 첫 연결 | 2일차 |
| 4 | Fetch API와 axios로 API 계층 만들기 | `src/api` 모듈 | 2일차 |
| 5 | 라우팅과 조회 화면 | 도서 목록, 상세 화면 | 2일차 |
| 6 | 인증 연동 | 회원가입, 로그인, 토큰 재발급 | 3일차 |
| 7 | 쓰기 기능 | 등록, 수정, 삭제, 표지 업로드, 대여와 반납 | 3일차 |
| 8 | 프론트엔드 개발 보안 | 보안 점검 결과 | 4일차 |
| 9 | 관제 대시보드와 데이터 시각화 | 관제 대시보드 | 4일차 |
| 10 | 도커라이징과 통합 실행 | 프론트엔드 이미지, 통합 Compose | 5일차 |
| 11 | 종합 점검 | 점검표, 확장 과제 | 5일차 |

하루 6~8시간 학습을 기준으로 5일 일정을 제시했습니다. 혼자 학습할 때는 장 단위로 끊어 진행해도 좋습니다.

### 0.5 최종 결과물

과정을 마치면 다음 화면을 갖춘 웹 애플리케이션이 완성됩니다.

| 화면 | 주소 | 접근 권한 | 주요 기능 |
|---|---|---|---|
| 도서 목록 | `/` | 누구나 | 제목 검색, 정렬, 페이지 이동 |
| 도서 상세 | `/books/:bookId` | 누구나 (동작은 로그인 필요) | 표지 보기, 대여, 수정, 삭제, 표지 업로드 |
| 도서 등록 | `/books/new` | 로그인 사용자 | 입력 검증, 저자 선택 |
| 도서 수정 | `/books/:bookId/edit` | 로그인 사용자 (소유자 또는 관리자만 성공) | 바뀐 필드만 전송 |
| 내 대여 | `/loans` | 로그인 사용자 | 대여 목록, 반납 |
| 로그인, 회원가입 | `/login`, `/signup` | 누구나 | 토큰 발급, 계정 생성 |
| 관제 대시보드 | `/dashboard` | 관리자 | 헬스 체크, KPI, 응답 시간, 상태 코드 분포, 로그 분석 |

최종 프로젝트의 폴더 구조는 다음과 같습니다. 각 파일은 해당 장에서 만듭니다.

```text
book-admin-web/
├── .env.development          # 개발용 API 주소 (4장)
├── .env.production           # 운영용 API 주소 (10장)
├── .dockerignore             # (10장)
├── Dockerfile                # (10장)
├── nginx/
│   ├── default.conf          # (10장)
│   └── security-headers.conf # (10장)
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # 앱 시작점 (2장, 5장, 6장)
    ├── App.jsx               # 라우트 정의 (5장, 6장, 9장)
    ├── index.css             # 공통 스타일 (5장)
    ├── api/                  # 백엔드 호출 계층 (4장, 6장, 7장)
    ├── auth/                 # 인증 상태와 토큰 (6장)
    ├── components/           # 공통 컴포넌트 (5장)
    ├── hooks/                # 재사용 훅 (9장)
    ├── pages/                # 화면 (5장, 6장, 7장)
    └── dashboard/            # 관제 대시보드 (9장)
```

### 0.6 연계할 백엔드 API 한눈에 보기

이 과정에서 호출하는 백엔드 API를 먼저 정리합니다. 모두 백엔드 과정에서 만든 API이며, 괄호 안은 해당 내용을 다룬 백엔드 강의입니다. 화면을 만들다가 요청 형식이나 상태 코드가 헷갈리면 이 표로 돌아옵니다.

**도서와 저자**

| 메서드와 경로 | 설명 | 요청 | 성공 | 주요 실패 |
|---|---|---|---|---|
| `GET /books` | 도서 목록 (S4-P12) | 쿼리: `q`(제목 검색, 최대 50자), `author`(저자 이름 일치), `sort`(`id`, `price`, `-price`), `skip`, `limit` | 200, `BookPage` | 422 |
| `GET /books/{book_id}` | 도서 상세 | 없음 | 200, `BookRead` | 404 |
| `POST /books` | 도서 등록 (S4-P13) | JSON `BookCreate` | 201, `BookRead` | 401, 409 `DUPLICATE_ISBN`, 422 `INVALID_AUTHOR` |
| `PATCH /books/{book_id}` | 도서 일부 수정 (S4-P12) | JSON, 바꿀 필드만 | 200, `BookRead` | 401, 403, 404, 409 |
| `DELETE /books/{book_id}` | 도서 삭제 | 없음 | 204, 본문 없음 | 401, 403, 404, 409 `BOOK_HAS_LOANS` |
| `POST /books/{book_id}/cover` | 표지 업로드 (S6-P20) | `multipart/form-data`, 필드 `file` | 200, `BookRead` | 413 `FILE_TOO_LARGE`, 415 `UNSUPPORTED_FILE_TYPE`, 422 `EMPTY_FILE` |
| `GET /authors` | 저자 목록 (S4-P13) | 쿼리: `skip`, `limit` | 200, `AuthorRead` 배열 | |
| `POST /authors` | 저자 등록 | JSON `{"name": "..."}` | 201 | 403(일반 사용자), 409 `DUPLICATE_AUTHOR` |

**인증 (S5)**

| 메서드와 경로 | 설명 | 요청 | 성공 | 주요 실패 |
|---|---|---|---|---|
| `POST /auth/signup` | 회원가입 | JSON `{"email", "password"}` | 201, `UserRead` | 409 `DUPLICATE_EMAIL` |
| `POST /auth/token` | 로그인 | **폼 형식** `username`(이메일), `password` | 200, 토큰 | 401 `INVALID_CREDENTIALS`, 429 `TOO_MANY_ATTEMPTS` |
| `POST /auth/refresh` | 토큰 재발급 | JSON `{"refresh_token": "..."}` | 200, 토큰 | 401 |
| `POST /auth/logout` | 로그아웃 | JSON `{"refresh_token": "..."}` | 204 | |
| `GET /auth/me` | 내 정보 | 헤더 `Authorization: Bearer <토큰>` | 200, `{"id", "email", "role"}` | 401 |

**대여 (S6-P21)와 운영 (S8-P28)**

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

### 0.7 실습 환경 준비

**1) Node.js 설치**

Vite와 React Router 최신 버전은 Node.js 22.12 이상(React Router 8은 22.22 이상)을 요구합니다. https://nodejs.org 에서 LTS 버전(24 이상)을 설치한 뒤 터미널에서 버전을 확인합니다.

```bash
node -v    # v24.x.x 처럼 22.22 이상이면 됩니다.
npm -v
```

**2) 편집기와 브라우저**

편집기는 Visual Studio Code를 권장합니다. 브라우저는 Chrome 또는 Edge를 사용합니다. 이 과정에서는 브라우저 개발자 도구(F12)의 Console, Network, Application 탭을 자주 사용하므로 미리 열어 보며 위치를 익혀 둡니다.

**3) 백엔드 준비**

백엔드 과정의 프로젝트 폴더(이 교안에서는 `book-api`라고 부릅니다)에서 S8-P27의 Docker Compose 구성으로 API와 PostgreSQL을 실행합니다.

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

프론트엔드 프로젝트는 백엔드 폴더와 나란히 만듭니다. 10장에서 백엔드의 Compose 파일이 상대 경로로 프론트엔드 폴더를 찾기 때문입니다.

```text
workspace/
├── book-api/          # 백엔드 과정 결과물
└── book-admin-web/    # 이 과정에서 만들 프론트엔드
```

### 0.8 정리

- 이 과정은 백엔드 과정의 도서 관리 API를 사용하는 React 프론트엔드와 관제 대시보드를 만들고, 컨테이너로 함께 실행하는 것까지 다룹니다.
- 0.6의 API 표는 과정 전체에서 참고하는 기준 자료입니다.
- 백엔드가 `http://127.0.0.1:8000`에서 실행 중이고 실습 데이터가 준비되어 있어야 다음 장의 실습을 진행할 수 있습니다.

---

## 1장. 웹 프론트엔드 기초와 JSON

### 학습 목표

- 브라우저가 화면을 만드는 과정과 SPA(단일 페이지 애플리케이션)의 동작 방식을 설명합니다.
- 프론트엔드 관점에서 HTTP 요청과 응답의 구성 요소를 구분합니다.
- JSON의 문법과 자료형을 이해하고 JavaScript 값과 서로 변환합니다.
- 이후 장에서 사용할 모던 JavaScript 문법을 익힙니다.

### 1.1 브라우저가 화면을 만드는 방식

브라우저는 서버에서 HTML 문서를 받아 해석한 뒤, 문서 구조를 메모리 안의 나무 모양 객체로 만듭니다. 이 객체를 DOM(Document Object Model)이라고 합니다. CSS는 DOM의 각 요소가 어떤 모양으로 그려질지 정하고, JavaScript는 DOM을 읽고 바꾸어 화면을 동적으로 변화시킵니다. 즉 사용자가 보는 화면은 결국 DOM이며, 프론트엔드 개발은 "어떤 데이터가 있을 때 DOM이 어떤 모습이어야 하는가"를 정하는 일이라고 볼 수 있습니다.

DOM을 직접 고치는 코드는 화면이 복잡해질수록 관리하기 어렵습니다. 목록에 도서 하나가 추가되면 표에 행을 넣고, 전체 권수를 고치고, 빈 목록 안내 문구를 숨기는 일을 모두 손으로 맞춰야 하기 때문입니다. React는 이 문제를 "데이터(상태)를 바꾸면 화면은 React가 알아서 맞춘다"는 방식으로 해결합니다. 개발자는 상태에 따른 화면의 모습만 선언하면 됩니다. 이 개념은 2장에서 자세히 다룹니다.

### 1.2 MPA와 SPA

전통적인 웹 사이트는 페이지를 이동할 때마다 서버가 완성된 HTML을 새로 만들어 보내 줍니다. 이 방식을 MPA(Multi Page Application)라고 합니다. 반면 SPA(Single Page Application)는 처음 한 번만 HTML과 JavaScript 묶음을 받고, 이후에는 JavaScript가 필요한 데이터만 API로 받아 와 화면을 다시 그립니다. 주소창의 경로가 바뀌어도 실제로는 같은 페이지 안에서 화면만 교체됩니다.

| 구분 | MPA | SPA |
|---|---|---|
| 화면을 만드는 곳 | 서버 | 브라우저(클라이언트 측 렌더링, CSR) |
| 서버가 보내는 것 | 완성된 HTML | 처음에는 HTML과 JS, 이후에는 JSON 데이터 |
| 페이지 이동 | 전체 새로고침 | 필요한 부분만 다시 그림 |
| 백엔드 역할 | 화면과 데이터 모두 담당 | 데이터 API만 담당 |

백엔드 과정에서 만든 API는 HTML이 아니라 JSON만 돌려줍니다. 따라서 이 API를 사용하는 화면은 자연스럽게 SPA 구조가 됩니다. 백엔드는 데이터와 규칙을, 프론트엔드는 화면과 사용자 경험을 맡는 분업 구조입니다.

### 1.3 프론트엔드 관점에서 본 HTTP

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

### 1.4 JSON

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

- 날짜와 시각: JSON에는 날짜 자료형이 없어서 `"2026-11-23T06:58:12"` 같은 문자열로 보냅니다. 프론트엔드에서 `new Date()`로 바꿔야 날짜로 다룰 수 있습니다. 특히 시간대 표시(`Z`, `+09:00`)가 없는 문자열은 브라우저가 현지 시각으로 해석하므로, 백엔드가 UTC로 저장한 값을 표시할 때 9시간이 어긋날 수 있습니다. 이 문제는 7장의 대여 화면에서 해결합니다.
- `undefined`: JavaScript의 `undefined`는 JSON에 없습니다. 객체를 JSON으로 바꿀 때 값이 `undefined`인 속성은 아예 빠집니다. PATCH 요청에서 "보내지 않은 필드"와 "`null`로 지운 필드"가 다르게 처리되는 이유가 여기에 있습니다.
- 아주 큰 정수: JavaScript의 `number`는 2의 53제곱보다 큰 정수를 정확히 표현하지 못합니다. ISBN처럼 숫자로만 된 긴 식별자를 백엔드가 문자열로 다루는 이유이기도 합니다.

### 1.5 JSON과 JavaScript 값 변환

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

### 1.6 이 과정에서 쓰는 모던 JavaScript

React 코드는 최신 JavaScript 문법을 적극적으로 사용합니다. 이후 장의 코드를 읽는 데 필요한 문법만 골라 정리합니다.

```js
// 1) const와 let: 다시 대입하지 않으면 const, 바꿔야 하면 let
const PAGE_SIZE = 10;
let retries = 0;

// 2) 템플릿 리터럴: 백틱 안에 ${}로 값을 넣습니다.
const url = `/books/${7}/cover`;

// 3) 화살표 함수
const add = (a, b) => a + b;

// 4) 구조 분해: 객체나 배열에서 필요한 값만 꺼냅니다.
const { title, price } = { title: '파이썬 입문', price: 18000 };
const [first, second] = ['a', 'b'];

// 5) 전개 문법: 복사본을 만들면서 일부만 바꿉니다. React 상태 변경에 필수입니다.
const original = { title: 'A', price: 1000 };
const changed = { ...original, price: 2000 }; // original은 그대로입니다.

// 6) 옵셔널 체이닝(?.)과 널 병합(??)
const book = { author: null };
const name = book.author?.name ?? '저자 미상'; // author가 null이어도 오류 없이 '저자 미상'

// 7) 배열 메서드: 화면을 그릴 때 for문 대신 주로 사용합니다.
const books = [{ price: 1000 }, { price: 25000 }];
const prices = books.map((b) => b.price);              // [1000, 25000]
const expensive = books.filter((b) => b.price > 20000); // [{ price: 25000 }]
const total = books.reduce((sum, b) => sum + b.price, 0); // 26000

// 8) 모듈: 파일 단위로 내보내고 가져옵니다.
// export function listBooks() { ... }
// import { listBooks } from './api/books';
```

**비동기 처리: Promise와 async/await**

네트워크 요청은 시간이 걸리므로 결과가 바로 나오지 않습니다. JavaScript는 이런 작업을 Promise라는 "나중에 결과가 채워질 상자"로 표현합니다. `async` 함수 안에서 `await`를 쓰면 Promise의 결과가 나올 때까지 기다렸다가 다음 줄을 실행하므로, 비동기 코드를 위에서 아래로 읽히게 쓸 수 있습니다. 실패는 `try...catch`로 잡습니다.

```js
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  try {
    console.log('요청 시작');
    await wait(1000);           // 1초 기다림 (네트워크 요청이라고 생각합니다)
    console.log('응답 도착');
  } catch (error) {
    console.error('실패:', error.message);
  } finally {
    console.log('성공과 실패에 상관없이 실행');
  }
}
demo();
```

여러 요청을 동시에 보내고 모두 끝날 때까지 기다릴 때는 `Promise.all`을 사용합니다. 7장의 도서 수정 화면에서 저자 목록과 도서 정보를 함께 불러올 때 이 방법을 씁니다.

### 실습 1. 브라우저 콘솔에서 백엔드 JSON 다루기

1. 브라우저 주소창에 `http://127.0.0.1:8000/books?limit=3`을 입력합니다. 화면에 JSON 텍스트가 그대로 보입니다. 이것이 백엔드가 보내는 실제 응답입니다.
2. 같은 탭에서 개발자 도구의 Console 탭을 열고 다음 코드를 입력합니다. 지금은 페이지와 API의 주소가 같아서 문제없이 동작합니다. 주소가 다른 페이지에서 같은 코드를 실행하면 어떻게 되는지는 3장에서 확인합니다.

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

### 정리

- 브라우저 화면은 DOM이며, React는 상태에 따라 DOM을 자동으로 맞추는 도구입니다.
- JSON만 돌려주는 백엔드와 함께 쓰는 화면은 SPA 구조가 됩니다.
- 요청 본문 형식은 JSON, 폼, 멀티파트 세 가지이며, API마다 요구하는 형식을 정확히 맞춰야 합니다.
- JSON에는 날짜와 `undefined`가 없으므로 변환 과정에서 생기는 차이를 의식해야 합니다.
- 구조 분해, 전개 문법, 옵셔널 체이닝, 배열 메서드, async/await는 이후 모든 코드의 기본 문법입니다.

---

## 2장. Vite와 React 기초

### 학습 목표

- Vite로 React 프로젝트를 만들고 개발 서버를 실행합니다.
- 프로젝트의 파일 구조와 화면이 그려지기까지의 실행 흐름을 설명합니다.
- JSX, 컴포넌트, props, state, 이벤트, 리스트 렌더링, 제어 컴포넌트를 사용합니다.
- `useEffect`의 실행 시점과 정리 함수의 역할을 이해합니다.

### 2.1 Vite란

React 코드는 JSX 같은 브라우저가 바로 이해하지 못하는 문법을 쓰고, 수십 개의 파일과 외부 패키지로 나뉘어 있습니다. 이를 브라우저가 실행할 수 있는 형태로 바꾸고 묶는 도구가 필요합니다. Vite는 이 역할을 하는 빌드 도구로, 두 가지 모드로 동작합니다.

- 개발 서버(`npm run dev`): 파일을 미리 묶지 않고 브라우저가 요청하는 파일만 즉시 변환해 보냅니다. 파일을 저장하면 바뀐 부분만 화면에 바로 반영되는 HMR(Hot Module Replacement)을 지원합니다.
- 운영 빌드(`npm run build`): 모든 코드를 최적화해 `dist` 폴더에 정적 파일(HTML, JS, CSS)로 만듭니다. 이 파일들은 Nginx 같은 웹 서버로 제공합니다(10장).

현재 Vite는 8 버전이며, Rust로 만든 번들러 Rolldown을 사용해 빌드 속도가 크게 빨라졌습니다. 이 교안의 코드는 Vite 8, React 19, React Router 8, axios 1, Recharts 3에서 확인했습니다.

### 2.2 프로젝트 만들기

`workspace` 폴더에서 다음 명령을 실행합니다. `--template react`는 TypeScript가 아닌 JavaScript 기반 React 템플릿을 뜻합니다.

```bash
cd workspace
npm create vite@latest book-admin-web -- --template react
cd book-admin-web
npm install
npm run dev
```

터미널에 `Local: http://localhost:5173/`이 나오면 브라우저로 접속합니다. Vite와 React 로고가 있는 기본 화면이 보이면 성공입니다. 개발 서버는 `Ctrl + C`로 종료합니다.

> 주소 표기에 주의합니다. 이 과정에서는 프론트엔드를 항상 `http://localhost:5173`으로 엽니다. 백엔드는 `http://127.0.0.1:8000`으로 부릅니다. 두 주소의 차이가 3장의 핵심 주제와 연결됩니다.

### 2.3 프로젝트 구조와 실행 흐름

생성된 프로젝트의 주요 파일은 다음과 같습니다.

```text
book-admin-web/
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

`main.jsx`에 있는 `<StrictMode>`는 개발 중에만 동작하는 점검 장치입니다. 잠재적인 실수를 찾기 위해 일부 함수를 일부러 두 번 실행합니다. 2.9에서 다시 다룹니다.

실습을 시작하기 전에 템플릿의 예제 파일을 정리합니다. `src/assets` 폴더와 `src/App.css`를 지우고, `src/App.jsx`와 `src/index.css`의 내용을 모두 지운 상태에서 시작합니다. `index.html`에서는 문서 언어와 제목을 이 앱에 맞게 바꿉니다. `lang` 속성은 화면 낭독기와 번역 기능이 문서의 언어를 올바르게 판단하는 데 쓰입니다.

```html
<html lang="ko">
  <head>
    <!-- 나머지는 그대로 둡니다 -->
    <title>도서 관리</title>
  </head>
```

### 2.4 JSX

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
- 중괄호에 넣은 문자열은 자동으로 이스케이프되어 HTML이 아닌 글자로 표시됩니다. 이 성질은 8장의 XSS 방어와 직결됩니다.

### 2.5 컴포넌트와 props

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

### 2.6 state와 이벤트

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

- **이전 값을 기준으로 바꿀 때는 함수형 업데이트를 씁니다.** `setCount((prev) => prev + 1)`처럼 쓰면 짧은 시간에 여러 번 호출되어도 항상 최신 값을 기준으로 계산됩니다. 9장에서 헬스 체크 이력을 쌓을 때 이 방식을 씁니다.
- **훅은 컴포넌트 함수의 맨 위에서만 호출합니다.** 조건문이나 반복문 안에서 호출하면 안 됩니다.

이벤트는 `onClick`, `onChange`, `onSubmit`처럼 카멜 표기 속성에 함수를 넘겨 처리합니다. `onClick={handleClick()}`처럼 호출 결과를 넘기는 실수를 하지 않도록 주의합니다. 함수 자체를 넘겨야 합니다.

### 2.7 조건부 렌더링과 리스트

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

### 2.8 폼과 제어 컴포넌트

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

입력 칸의 값은 항상 문자열이라는 점을 기억합니다. `type="number"`인 칸도 `e.target.value`는 `"18000"` 같은 문자열입니다. API로 보낼 때 `Number()`로 바꿔야 백엔드가 정수로 받습니다. 7장의 도서 등록 폼에서 이 변환을 함수로 분리합니다.

### 2.9 useEffect

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

개발 모드의 `StrictMode`는 컴포넌트를 처음 그릴 때 이펙트를 "실행, 정리, 다시 실행" 순서로 한 번 더 돌립니다. 그래서 개발 중에는 Network 탭에 같은 요청이 두 번 보일 수 있습니다. 이는 정리 함수를 제대로 작성했는지 확인하기 위한 의도된 동작이며 운영 빌드에서는 일어나지 않습니다. 4장에서는 정리 함수에서 이전 요청을 취소하는 방법으로 이 상황을 올바르게 처리합니다.

이 과정에서 사용하는 훅을 미리 정리하면 다음과 같습니다. 각 훅은 처음 사용하는 장에서 설명합니다.

| 훅 | 용도 | 처음 사용하는 곳 |
|---|---|---|
| `useState` | 화면 상태 | 2장 |
| `useEffect` | 외부와 동기화(요청, 타이머) | 2장, 5장 |
| `useContext` | 여러 컴포넌트가 공유하는 값 읽기 | 6장 |
| `useCallback`, `useMemo` | 함수와 계산 결과 재사용 | 6장, 9장 |
| `useRef` | 다시 그리지 않고 값 보관 | 9장 |
| `useSyncExternalStore` | React 밖의 저장소 구독 | 9장 |

### 실습 2. 정적 데이터로 도서 목록 만들기

백엔드에 연결하기 전에, 1장에서 확인한 응답 모양 그대로의 샘플 데이터로 화면을 먼저 만듭니다. API 연결과 화면 구성을 분리해서 연습하는 것이 목적입니다.

`src/App.jsx`를 다음과 같이 작성합니다.

```jsx
import { useState } from 'react';

// 백엔드 GET /books 응답(BookPage)과 같은 모양의 샘플 데이터
const SAMPLE_PAGE = {
  items: [
    { id: 1, title: '파이썬 입문', price: 18000, isbn: null, author: { id: 1, name: '홍길동' } },
    { id: 2, title: 'FastAPI 실전', price: 32000, isbn: '9791100000011', author: { id: 2, name: '김철수' } },
    { id: 3, title: '데이터베이스 첫걸음', price: 21000, isbn: null, author: { id: 1, name: '홍길동' } },
  ],
  total: 3,
  skip: 0,
  limit: 10,
};

function BookRow({ book }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author?.name}</td>
      <td>{book.price.toLocaleString('ko-KR')}원</td>
    </tr>
  );
}

export default function App() {
  const [keyword, setKeyword] = useState('');
  const visible = SAMPLE_PAGE.items.filter((book) => book.title.includes(keyword.trim()));

  return (
    <main>
      <h1>도서 목록</h1>
      <input placeholder="제목으로 검색" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      {visible.length === 0 ? (
        <p>조건에 맞는 도서가 없습니다.</p>
      ) : (
        <table>
          <thead>
            <tr><th>번호</th><th>제목</th><th>저자</th><th>가격</th></tr>
          </thead>
          <tbody>
            {visible.map((book) => (
              <BookRow key={book.id} book={book} />
            ))}
          </tbody>
        </table>
      )}
      <p>전체 {SAMPLE_PAGE.total}권 중 {visible.length}권 표시</p>
    </main>
  );
}
```

확인할 내용은 다음과 같습니다.

1. 검색 칸에 "입문"을 입력하면 한 권만 남는지 확인합니다.
2. 존재하지 않는 제목을 입력해 빈 목록 안내가 나오는지 확인합니다.
3. `key={book.id}`를 지우고 Console 탭에 어떤 경고가 나오는지 확인한 뒤 다시 넣습니다.
4. 정렬 선택 상자(`<select>`)를 추가해 가격 순으로 정렬해 봅니다. `[...visible].sort(...)`처럼 복사본을 정렬해야 하는 이유를 2.6의 규칙으로 설명해 봅니다.

이 실습에서는 검색을 브라우저 안에서 처리했습니다. 실제 데이터는 수천 권일 수 있으므로 5장에서는 검색과 정렬을 백엔드에 맡기고, 화면은 조건만 전달하도록 바꿉니다.

### 정리

- Vite는 개발 서버와 운영 빌드 두 역할을 하며, React 앱의 시작점은 `index.html`과 `main.jsx`입니다.
- 컴포넌트는 props를 받아 화면을 반환하는 함수이고, state가 바뀌면 다시 그려집니다.
- state는 직접 고치지 않고 새 값으로 교체하며, 리스트에는 변하지 않는 `key`를 줍니다.
- 네트워크 요청과 타이머는 `useEffect`에서 하고, 정리 함수로 뒷정리를 합니다.

---

## 3장. 백엔드 연결 준비: Origin, SOP, CORS

### 학습 목표

- 브라우저에서 백엔드로 처음 요청을 보내고 CORS 오류를 직접 관찰합니다.
- 출처(Origin)의 정의와 동일 출처 정책(SOP)이 막는 것과 막지 않는 것을 구분합니다.
- 단순 요청과 사전 요청(preflight)의 차이, CORS 관련 헤더의 의미를 설명합니다.
- 백엔드의 CORS 설정을 고쳐 오류를 해결하고, 프록시라는 다른 해결 방법과 비교합니다.

### 3.1 첫 요청 보내기

2장의 실습에서는 샘플 데이터를 썼습니다. 이제 진짜 백엔드에 요청을 보내 봅니다. 먼저 백엔드가 실행 중인지 확인하고, 이번 장의 관찰을 위해 백엔드가 아직 프론트엔드 주소를 허용하지 않은 상태로 둡니다. 백엔드 프로젝트의 `.env`에 `CORS_ORIGINS` 값이 있고 그 안에 `http://localhost:5173`이 이미 들어 있다면, 잠시 지우고 `docker compose up -d`로 API 컨테이너를 다시 만듭니다.

`src/App.jsx`의 맨 위에 다음 코드를 임시로 추가합니다. 이 코드는 실습이 끝나면 지웁니다.

```jsx
import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('요청 전');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/books?limit=3')
      .then((response) => response.json())
      .then((page) => setMessage(`도서 ${page.total}권을 받았습니다.`))
      .catch((error) => setMessage(`실패: ${error.message}`));
  }, []);

  return <p>{message}</p>;
}
```

`http://localhost:5173`을 열면 화면에 "실패: Failed to fetch"가 나타나고, Console 탭에는 다음과 비슷한 빨간 오류가 출력됩니다.

```text
Access to fetch at 'http://127.0.0.1:8000/books?limit=3' from origin 'http://localhost:5173'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the
requested resource.
```

Network 탭에서 해당 요청을 눌러 봅니다. 요청은 실제로 서버에 도착했고, 서버는 200 응답까지 보냈습니다. 백엔드 로그(`docker compose logs api`)에도 `GET /books` 요청이 200으로 기록되어 있습니다. 그런데도 JavaScript는 응답을 읽지 못했습니다. **서버가 거절한 것이 아니라 브라우저가 응답을 JavaScript에 넘겨주지 않은 것**입니다. 1장의 실습 1에서는 같은 코드가 잘 동작했는데, 무엇이 달라졌을까요? 이 차이를 이해하는 것이 이 장의 목표입니다.

### 3.2 출처(Origin)

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

실습 1에서는 페이지(`http://127.0.0.1:8000/books`)와 요청 대상(`/books`)의 출처가 같았습니다. 이번에는 페이지가 `http://localhost:5173`, 요청 대상이 `http://127.0.0.1:8000`이므로 출처가 다릅니다. 이런 요청을 교차 출처(cross-origin) 요청이라고 합니다.

### 3.3 동일 출처 정책(SOP)

동일 출처 정책(Same-Origin Policy)은 **한 출처에서 실행되는 스크립트가 다른 출처의 자원을 함부로 읽지 못하게 하는** 브라우저의 기본 보안 규칙입니다.

이 규칙이 왜 필요한지 상황을 떠올려 봅니다. 사용자가 사내 관리 시스템에 로그인한 상태로 다른 탭에서 악성 사이트를 열었습니다. 동일 출처 정책이 없다면 악성 사이트의 스크립트가 사내 시스템에 요청을 보내고, 브라우저에 남아 있는 로그인 정보가 함께 전송되어, 돌아온 응답(직원 목록, 내부 문서)을 그대로 읽어 공격자 서버로 보낼 수 있습니다. 동일 출처 정책은 이 마지막 단계인 **응답 읽기**를 막습니다.

동일 출처 정책이 막는 것과 막지 않는 것을 정확히 구분해야 합니다.

| 막는 것 (다른 출처일 때) | 막지 않는 것 |
|---|---|
| `fetch`, `XMLHttpRequest`로 받은 응답을 스크립트가 읽기 | `<img>`, `<script>`, `<link>`, `<video>`로 다른 출처 자원을 불러와 표시하기 |
| 다른 출처 `<iframe>` 안의 DOM에 접근하기 | `<form>`으로 다른 출처에 제출하기, 링크로 이동하기 |
| 다른 출처의 `localStorage`, `sessionStorage` 읽기 | 요청 자체를 서버로 보내기(단, 3.4의 사전 요청 대상은 예외) |

오른쪽 열이 중요합니다. 동일 출처 정책은 주로 "읽기"를 막을 뿐 "보내기"를 완전히 막지는 않습니다. 3.1에서 서버 로그에 요청이 남은 이유가 이것입니다. 그래서 동일 출처 정책만으로는 다른 사이트가 사용자 몰래 요청을 보내는 공격(CSRF)을 막을 수 없으며, 8장에서 별도의 대책을 다룹니다.

### 3.4 CORS

동일 출처 정책은 안전하지만, 이 과정처럼 프론트엔드와 백엔드가 다른 출처에서 동작하는 정상적인 경우까지 막아 버립니다. CORS(Cross-Origin Resource Sharing, 교차 출처 자원 공유)는 **서버가 응답 헤더로 "이 출처는 내 응답을 읽어도 된다"고 허락하는 방법**입니다. 허락의 주체는 서버이고, 허락을 확인하고 집행하는 주체는 브라우저입니다.

#### 단순 요청

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

브라우저는 교차 출처 요청에 `Origin` 헤더를 자동으로 붙입니다. 서버가 응답에 `Access-Control-Allow-Origin` 헤더를 넣어 그 출처를 허락하면 JavaScript가 응답을 읽을 수 있고, 헤더가 없으면 3.1처럼 차단됩니다.

#### 사전 요청(preflight)

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

#### 응답 헤더 노출

CORS가 허락된 응답이라도 JavaScript가 읽을 수 있는 응답 헤더는 기본적으로 `Cache-Control`, `Content-Language`, `Content-Length`, `Content-Type`, `Expires`, `Last-Modified`, `Pragma` 일곱 가지뿐입니다. 백엔드가 보내는 `Retry-After`(로그인 잠금 시간), `X-Request-ID`, `X-Process-Time`(S8-P28)을 프론트엔드에서 읽으려면 서버가 `Access-Control-Expose-Headers`로 명시해야 합니다.

#### 자격 증명이 포함된 요청

브라우저는 교차 출처 요청에 쿠키를 기본적으로 보내지 않습니다. 쿠키를 보내려면 프론트엔드에서 `fetch(url, { credentials: 'include' })`나 axios의 `withCredentials: true`를 지정하고, 서버는 `Access-Control-Allow-Credentials: true`를 보내야 합니다. 이때 `Access-Control-Allow-Origin`에 와일드카드 `*`를 쓸 수 없고 정확한 출처를 적어야 합니다. 이 과정의 백엔드는 토큰을 쿠키가 아니라 `Authorization` 헤더로 주고받으므로 자격 증명 설정이 필요하지 않습니다. 쿠키 방식과의 비교는 8장에서 다룹니다.

### 3.5 백엔드 CORS 설정 고치기

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

백엔드 프로젝트의 `.env`에 프론트엔드 개발 서버의 출처를 넣습니다. 값의 형식은 S3-P9-02에서 정의한 `Settings`를 따르며, `list[str]` 타입이라면 다음처럼 JSON 배열로 적습니다.

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

로그인 화면에서 잠금 시간을 안내하고 관제 화면에서 요청 ID를 활용할 수 있도록 `expose_headers`를 추가합니다. 이 설정이 없어도 이 교안의 화면은 동작하지만, 6장의 로그인 잠금 안내가 기본값(15분)으로 표시됩니다.

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

### 3.6 다른 해결 방법: 프록시

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
| 이 과정의 사용 | 개발 환경 (4~9장) | 운영 환경, Nginx (10장) |

이 과정은 개발 환경에서 일부러 CORS 방식을 사용합니다. 교차 출처 요청의 동작을 Network 탭에서 직접 보며 익히기 위해서입니다. 운영 환경에서는 10장에서 Nginx 프록시를 구성해 프론트엔드와 API를 같은 출처로 제공합니다.

### 3.7 CORS에 대한 흔한 오해

| 오해 | 사실 |
|---|---|
| CORS는 서버를 보호하는 보안 장치다. | CORS는 동일 출처 정책을 **완화**하는 장치입니다. 서버 보호는 인증과 인가가 담당합니다. |
| CORS 오류가 나면 요청이 서버에 가지 않았다. | 단순 요청은 서버에 도착해 처리됩니다. 사전 요청이 거절된 경우에만 본 요청이 전송되지 않습니다. |
| CORS를 설정하면 다른 사이트가 API를 호출하지 못한다. | `curl`, Postman, 서버 간 통신에는 CORS가 적용되지 않습니다. CORS는 브라우저만 지키는 규칙입니다. |
| 프론트엔드 코드로 CORS 오류를 고칠 수 있다. | 허락은 서버만 할 수 있습니다. 프론트엔드는 프록시로 출처를 같게 만드는 방법만 선택할 수 있습니다. |
| `localhost`와 `127.0.0.1`은 같으니 하나만 등록하면 된다. | 브라우저는 둘을 다른 출처로 봅니다. 실제로 접속하는 주소를 등록해야 합니다. |

### 실습 3. 출처를 바꿔 가며 관찰하기

1. 3.5의 설정을 적용한 상태에서 `http://localhost:5173`을 열고 Network 탭에서 `books?limit=3` 요청을 선택합니다. Request Headers의 `Origin`과 Response Headers의 `access-control-allow-origin`을 찾아 값이 같은지 확인합니다.
2. 개발 서버를 `npm run dev -- --host 127.0.0.1`로 다시 실행하고 `http://127.0.0.1:5173`으로 접속합니다. CORS 오류가 다시 나는 이유를 3.2의 표로 설명합니다. 확인이 끝나면 다시 `npm run dev`로 실행합니다.
3. Console 탭에서 다음 코드를 실행해 사전 요청이 생기는지 Network 탭에서 확인합니다. 목록에 `OPTIONS` 요청이 먼저 나타나야 합니다. (응답은 인증이 없어서 401이지만, 사전 요청이 일어나는 것을 확인하는 것이 목적입니다.)

```js
await fetch('http://127.0.0.1:8000/auth/me', { headers: { Authorization: 'Bearer test' } });
```

4. 백엔드 로그에서 `"method": "OPTIONS"`인 요청 로그를 찾아봅니다. 이 로그는 9장의 로그 분석 화면에서도 다시 만납니다.

```bash
docker compose logs api --no-log-prefix | grep OPTIONS
```

5. 실습이 끝나면 `src/App.jsx`에 넣은 임시 코드를 지웁니다.

### 정리

- 출처는 스킴, 호스트, 포트의 조합이며, 하나라도 다르면 다른 출처입니다.
- 동일 출처 정책은 다른 출처의 응답을 스크립트가 읽는 것을 막지만, 요청을 보내는 것 자체를 모두 막지는 않습니다.
- CORS는 서버가 응답 헤더로 특정 출처의 읽기를 허락하는 방법이며, 단순 요청이 아니면 사전 요청이 먼저 오갑니다.
- 개발 환경은 백엔드의 `CORS_ORIGINS`에 `http://localhost:5173`을 등록해 해결하고, 운영 환경은 프록시로 출처를 하나로 만듭니다.

---

## 4장. Fetch API와 axios로 API 계층 만들기

### 학습 목표

- Fetch API로 요청을 보내고, 상태 코드에 따라 성공과 실패를 올바르게 구분합니다.
- JSON, 폼, 멀티파트 세 가지 본문 형식을 각각 전송합니다.
- `AbortController`로 요청을 취소하고 시간 제한을 둡니다.
- axios의 인스턴스와 인터셉터를 사용해 오류 처리가 통일된 API 계층을 만듭니다.
- Vite 환경 변수로 API 주소를 환경별로 분리합니다.

### 4.1 Fetch API 기본

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

### 4.2 fetch 오류 처리의 함정

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

이 함수가 하는 일은 세 가지입니다. 연결 실패와 HTTP 오류를 구분하고, 204처럼 본문이 없는 응답을 처리하며, 백엔드의 `{"code", "message"}` 오류 본문을 오류 객체에 담습니다. 4.6에서는 같은 일을 axios 인터셉터로 한 곳에서 처리합니다.

### 4.3 본문 형식별 전송

1장에서 정리한 세 가지 본문 형식을 `fetch`로 보내는 방법입니다. 핵심은 `Content-Type`과 본문의 모양을 맞추는 것입니다.

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

### 4.4 요청 취소와 시간 제한

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

React에서는 `useEffect`의 정리 함수에서 `abort()`를 호출하는 것이 기본 패턴입니다. 2장에서 본 `StrictMode`의 "실행, 정리, 다시 실행"도 이 패턴으로 자연스럽게 처리됩니다. 첫 요청은 정리 단계에서 취소되고 두 번째 요청만 화면에 반영됩니다.

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

### 4.5 axios

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

### 4.6 axios 인스턴스와 인터셉터

인스턴스는 기본 설정을 미리 정해 둔 axios 복사본입니다. 인터셉터는 모든 요청이 나가기 직전과 모든 응답이 도착한 직후에 끼어들어 실행되는 함수입니다.

```js
import axios from 'axios';

const api = axios.create({ baseURL: 'http://127.0.0.1:8000', timeout: 10000 });

api.interceptors.request.use((config) => {
  // 모든 요청이 나가기 전에 실행됩니다. 예: 인증 헤더 붙이기 (6장)
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

### 4.7 환경 변수

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

코드에서는 `import.meta.env.VITE_API_BASE_URL`로 읽습니다. 이름이 `VITE_`로 시작하는 값만 코드에 노출됩니다. 이 값들은 빌드할 때 JavaScript 파일에 문자열로 새겨지므로, 사용자가 개발자 도구에서 누구나 볼 수 있습니다. 비밀번호나 API 키 같은 비밀정보를 프론트엔드 환경 변수에 넣으면 안 되는 이유이며, 8장에서 다시 다룹니다. `.env` 파일을 고친 뒤에는 개발 서버를 다시 시작해야 반영됩니다.

### 4.8 API 계층 설계

화면 컴포넌트마다 `axios.get('/books', ...)`를 직접 쓰면 경로나 응답 형식이 바뀔 때 여러 파일을 고쳐야 합니다. 그래서 백엔드 호출을 `src/api` 폴더에 모으고, 화면은 `listBooks()`처럼 의미 있는 이름의 함수만 사용하게 합니다. 백엔드 과정 S6-P19에서 라우터, 서비스, 저장소를 나눈 것과 같은 이유입니다.

```text
화면 컴포넌트 (pages, dashboard)
      │  listBooks(), createBook() 같은 함수만 호출
      ▼
API 함수 (api/books.js, api/auth.js, ...)
      │  경로, 메서드, 본문 형식을 알고 있음
      ▼
axios 인스턴스 (api/client.js)
      │  기본 주소, 시간 제한, 오류 통일, (6장) 토큰, (9장) 요청 기록
      ▼
백엔드 API
```

#### 오류 모양 통일: `src/api/errors.js`

백엔드의 오류 응답은 세 가지 모양으로 올 수 있습니다. 백엔드가 직접 만든 `AppError`(`{"code", "message"}`), FastAPI가 자동으로 만드는 검증 오류(`{"detail": [...]}`), 그리고 FastAPI의 `HTTPException` 기본 형식(`{"detail": "..."}`)입니다. 화면 코드가 이 차이를 신경 쓰지 않도록 모두 `ApiError` 하나로 바꿉니다. 422 검증 오류는 `loc`의 마지막 값(입력 칸 이름)별로 메시지를 모아 `fields`에 담아 두므로, 7장의 폼이 칸 옆에 오류를 표시할 수 있습니다.

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

#### axios 인스턴스: `src/api/client.js`

이번 장에서는 기본 주소, 시간 제한, 오류 통일만 담은 첫 버전을 만듭니다. 6장에서 인증 처리를, 9장에서 요청 기록을 이 파일에 추가합니다.

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

`toAssetUrl`은 백엔드가 돌려준 표지 경로(`/covers/...`)를 화면의 `<img>`가 열 수 있는 전체 주소로 바꿉니다. 개발 환경에서는 `http://127.0.0.1:8000/covers/...`, 10장의 운영 환경에서는 `/api/covers/...`가 됩니다. `<img>`로 다른 출처의 이미지를 표시하는 것은 3장에서 본 것처럼 동일 출처 정책의 제한을 받지 않습니다.

#### 도서와 저자 API: `src/api/books.js`, `src/api/authors.js`

0.6의 API 표를 그대로 함수로 옮깁니다. 목록 조회 함수는 `signal`을 받아 화면이 요청을 취소할 수 있게 합니다. 등록, 수정, 삭제, 표지 업로드 함수는 7장에서 사용하지만 도서 API를 한 파일에 모아 두기 위해 지금 함께 작성합니다.

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

`uploadCover`는 `FormData`를 그대로 넘기며 `Content-Type`을 지정하지 않습니다. 4.3에서 설명한 이유 때문입니다. axios도 `FormData`를 받으면 경계 문자열이 포함된 헤더를 자동으로 만듭니다.

#### 헬스 체크: `src/api/health.js`

헬스 체크는 Fetch API로 작성합니다. 데이터베이스 장애 시 백엔드는 503과 함께 `{"status": "error", "database": "unreachable"}`를 보내는데, 관제 화면에는 이 본문 자체가 중요한 정보입니다. 4.2에서 배운 대로 `fetch`는 503도 정상 응답으로 돌려주므로 본문을 그대로 읽을 수 있습니다. 응답을 받지 못한 경우(서버 중단, 네트워크 단절)는 `catch`에서 `unreachable`로 기록합니다. 응답 시간도 함께 재어 9장의 대시보드에서 사용합니다.

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

### 4.9 컴포넌트에서 API 함수를 쓰는 기본 패턴

API 함수를 화면에서 사용할 때는 다음 모양을 기본으로 합니다. 5장 이후의 모든 조회 화면이 이 패턴을 따릅니다.

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

### 실습 4. API 계층 만들고 확인하기

1. `npm install axios`로 axios를 설치합니다.
2. `.env.development`, `src/api/errors.js`, `src/api/client.js`, `src/api/books.js`, `src/api/authors.js`, `src/api/health.js`를 작성합니다.
3. 개발 서버를 다시 시작합니다. 환경 변수를 새로 읽어야 하기 때문입니다.
4. `src/App.jsx`를 임시로 다음과 같이 바꿔 API 함수를 확인합니다.

```jsx
import { useEffect, useState } from 'react';
import { getBook, listBooks } from './api/books';
import { checkHealth } from './api/health';

export default function App() {
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

5. 다음을 확인합니다.
   - 세 줄의 결과가 출력됩니다. 없는 도서 조회는 404와 백엔드의 오류 코드가 표시됩니다.
   - 백엔드를 `docker compose stop api`로 멈추고 새로고침하면 헬스 체크가 `unreachable`, 목록 조회가 `NETWORK_ERROR` 메시지로 바뀝니다. 확인 후 `docker compose start api`로 다시 실행합니다.
   - Network 탭에서 `StrictMode` 때문에 첫 번째 요청이 `(canceled)`로 표시되는 것을 확인합니다.
   - `listBooks({ sort: 'title' })`처럼 백엔드가 허용하지 않는 값을 넣으면 422 응답이 `VALIDATION_ERROR`로 바뀌고 `fields.sort`에 메시지가 담기는지 확인합니다.

### 정리

- `fetch`는 응답을 받으면 상태 코드와 관계없이 성공으로 처리하므로 `response.ok`를 직접 확인해야 합니다.
- 본문 형식은 JSON(`JSON.stringify`), 폼(`URLSearchParams`), 멀티파트(`FormData`)로 보내며, 멀티파트는 `Content-Type`을 직접 지정하지 않습니다.
- `AbortController`로 필요 없어진 요청을 취소하고, `useEffect` 정리 함수에서 호출합니다.
- axios 인스턴스와 인터셉터로 기본 주소, 시간 제한, 오류 모양을 한 곳에서 통일합니다.
- `VITE_`로 시작하는 환경 변수는 빌드 결과물에 공개되므로 비밀정보를 넣지 않습니다.

---

## 5장. 라우팅과 조회 화면

### 학습 목표

- React Router로 주소에 따라 다른 화면을 보여 주고, 공통 레이아웃을 구성합니다.
- 검색, 정렬, 페이지 조건을 URL 쿼리 문자열로 관리합니다.
- 백엔드의 페이지네이션 응답(`BookPage`)으로 목록과 페이지 이동을 구현합니다.
- 로딩, 오류, 빈 결과를 모두 고려한 조회 화면을 만듭니다.

### 5.1 클라이언트 측 라우팅

SPA는 페이지가 하나뿐이지만, 사용자는 화면마다 고유한 주소를 기대합니다. 상세 화면 주소를 동료에게 보내거나, 뒤로 가기 버튼으로 이전 화면에 돌아가거나, 새로고침해도 같은 화면이 나와야 합니다. 클라이언트 측 라우팅은 브라우저의 History API로 서버 요청 없이 주소만 바꾸고, 주소에 맞는 컴포넌트를 그려서 이를 해결합니다.

React Router는 React의 표준 라우팅 라이브러리입니다. 현재 8 버전이며 선언형(Declarative), 데이터(Data), 프레임워크(Framework) 세 가지 모드를 제공합니다. 이 과정은 가장 단순한 선언형 모드를 사용합니다. JSX로 `<Routes>`와 `<Route>`를 적고, 데이터 불러오기는 4장에서 만든 API 함수로 직접 처리하는 방식입니다. 이전 버전에서 쓰던 `react-router-dom` 패키지 대신 `react-router` 패키지 하나만 설치합니다.

```bash
npm install react-router
```

### 5.2 라우터 구성 요소

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
| `<Navigate to>` | 그려지는 순간 다른 주소로 이동합니다. 6장의 로그인 보호에 씁니다. |

일반 `<a href>`를 쓰면 브라우저가 서버에 새 페이지를 요청하므로 앱 전체가 다시 시작되고 메모리의 상태(6장의 액세스 토큰 포함)가 모두 사라집니다. 앱 안의 이동에는 반드시 `<Link>`를 씁니다.

### 5.3 앱 뼈대 만들기

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

모든 화면의 위쪽에 메뉴를 두고, 가운데 `<Outlet />` 자리에 각 화면을 그립니다. 6장에서 로그인 정보와 메뉴를 추가합니다.

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

**라우트 정의: `src/App.jsx`**

실습 4에서 쓴 임시 코드를 지우고 라우트를 정의합니다.

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

이 과정의 화면은 관제 환경을 고려해 어두운 바탕을 사용합니다. 색은 `--status-good`처럼 역할 이름의 CSS 변수로 정의하고, 코드에서는 변수 이름만 씁니다. 색의 선택 기준은 9장에서 설명합니다. 대시보드용 스타일까지 포함한 전체 파일을 지금 작성해 둡니다.

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

### 5.4 도서 목록 화면

#### 검색 조건을 URL에 두는 이유

검색어, 정렬, 페이지 위치를 `useState`에만 두면 새로고침하거나 상세 화면에 갔다가 뒤로 돌아올 때 조건이 초기화됩니다. 조건을 URL 쿼리 문자열(`/?q=파이썬&sort=-price&skip=10`)에 두면 다음과 같은 이점이 있습니다.

- 새로고침, 뒤로 가기, 앞으로 가기를 해도 같은 결과가 나옵니다.
- 주소를 복사해 다른 사람에게 그대로 공유할 수 있습니다.
- "URL이 바뀌면 목록을 다시 불러온다"는 한 가지 규칙으로 데이터 흐름이 단순해집니다.

반면 사용자가 입력 중인 검색어(`keyword`)는 검색 버튼을 누르기 전까지 URL에 반영하지 않고 컴포넌트 state로 둡니다. 글자를 칠 때마다 요청이 나가지 않도록 하기 위해서입니다.

#### 백엔드 페이지네이션과 화면 페이지

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

#### 목록 화면 코드: `src/pages/BookListPage.jsx`

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

### 5.5 도서 상세 화면

상세 화면은 주소의 `:bookId`로 도서를 조회해 보여 줍니다. 7장에서 대여, 수정, 삭제, 표지 업로드 버튼을 추가하므로 지금은 조회만 구현합니다.

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

`bookId`가 바뀌면(예: 다른 도서의 링크를 누르면) 이펙트가 다시 실행되도록 의존성 배열에 넣었습니다. 없는 번호로 접근하면 백엔드의 404 응답이 `ErrorMessage`로 표시됩니다. 표지가 있으면 4장에서 만든 `toAssetUrl`로 전체 주소를 만들어 표시하고, `alt` 속성으로 이미지의 의미를 글로 남깁니다.

### 실습 5. 조회 화면 완성하기

1. `npm install react-router`로 React Router를 설치합니다.
2. 5.3~5.5의 파일을 작성하고 `http://localhost:5173`에 접속합니다.
3. 다음 시나리오를 차례로 확인합니다.

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

4. Network 탭에서 검색어를 입력하는 동안에는 요청이 나가지 않고, Enter를 누를 때 한 번만 나가는지 확인합니다.
5. 백엔드 Swagger UI에서 도서를 하나 등록한 뒤 목록 화면을 새로고침해 반영되는지 확인합니다.

### 정리

- React Router의 선언형 모드로 주소와 화면을 연결하고, 레이아웃 라우트와 `<Outlet>`으로 공통 틀을 만듭니다.
- 앱 안의 이동은 `<Link>`로 해야 메모리의 상태가 유지됩니다.
- 검색, 정렬, 페이지 조건은 URL 쿼리 문자열에 두어 새로고침과 공유에도 유지되게 합니다.
- 백엔드의 `skip`, `limit`, `total`로 화면의 페이지 번호를 계산합니다.
- 조회 화면은 로딩, 오류, 빈 결과, 정상 결과를 모두 표현해야 합니다.

---

## 6장. 인증 연동

### 학습 목표

- 액세스 토큰과 리프레시 토큰을 사용하는 SPA의 인증 흐름을 설명합니다.
- axios 인터셉터로 모든 요청에 토큰을 붙이고, 토큰이 만료되면 자동으로 재발급합니다.
- Context로 로그인 상태를 앱 전체에 공유하고, 새로고침 후에도 로그인 상태를 복원합니다.
- 로그인과 회원가입 화면, 로그인이 필요한 화면의 접근 제어를 구현합니다.

### 6.1 SPA의 인증 흐름

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

### 6.2 토큰 보관소: `src/auth/tokenStore.js`

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

메모리에 둔 액세스 토큰은 새로고침하면 사라지지만, 리프레시 토큰으로 바로 다시 받을 수 있습니다. `sessionStorage`는 탭 단위로 분리되며 탭을 닫으면 지워집니다. 저장 위치마다 장단점이 있고 정답이 하나로 정해져 있지 않으므로, 각 방식의 위험과 이 선택의 근거는 8장에서 따로 비교합니다. 여기서는 "토큰을 어디에 두든 화면 코드는 `tokenStore`만 통해 접근한다"는 구조에 집중합니다. 저장 위치를 바꾸더라도 이 파일 하나만 고치면 됩니다.

### 6.3 인증 API: `src/api/auth.js`

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

로그인은 4장에서 배운 대로 `URLSearchParams`로 폼 형식을 만들고, `username` 칸에 이메일을 넣습니다. axios는 `URLSearchParams`를 받으면 `Content-Type: application/x-www-form-urlencoded`를 자동으로 지정합니다.

### 6.4 토큰 부착과 자동 재발급: `src/api/client.js`

4장의 `client.js`에 요청 인터셉터와 재발급 로직을 추가합니다. 파일 전체를 다음과 같이 바꿉니다.

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

**4) 재발급 실패를 화면에 알립니다.** 리프레시 토큰까지 만료되었으면 토큰을 지우고 `onAuthExpired`를 호출합니다. 이 함수는 6.5의 `AuthProvider`가 등록하며, 로그인 상태를 비워 화면이 로그아웃 상태로 바뀌게 합니다. `client.js`는 React 밖의 일반 모듈이라 React의 state를 직접 바꿀 수 없으므로, 이렇게 함수를 등록받는 방식으로 연결합니다.

### 6.5 로그인 상태 공유: Context

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

- `initializing`은 새로고침 직후 로그인 상태를 복원하는 동안 `true`입니다. 리프레시 토큰이 없으면 확인할 것이 없으므로 처음부터 `false`로 시작합니다. 이 값이 있어야 6.7의 보호 라우트가 "아직 확인 중"인 사용자를 로그인 화면으로 잘못 보내지 않습니다.
- 새로고침 후 복원은 별도 코드 없이 6.4의 인터셉터가 처리합니다. 메모리의 액세스 토큰이 없으니 `/auth/me`는 401을 받고, 인터셉터가 재발급 후 다시 요청합니다. Network 탭에서 `me`(401), `refresh`(200), `me`(200) 순서로 확인할 수 있습니다.
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

### 6.6 로그인과 회원가입 화면

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
- 429 응답은 백엔드 S10-P34의 로그인 잠금입니다. 같은 이메일로 5번 틀리면 15분(900초) 동안 잠기며, `Retry-After` 헤더로 남은 시간을 알려 줍니다. 3장에서 `expose_headers`에 `Retry-After`를 추가했다면 그 값으로, 아니면 기본 15분으로 안내합니다.
- 시도가 끝나면 성공 여부와 관계없이 비밀번호 입력값을 지웁니다.
- `autoComplete="username"`, `"current-password"`, 회원가입의 `"new-password"`는 브라우저와 비밀번호 관리자가 칸의 용도를 정확히 알게 해 줍니다.
- 로그인 후에는 원래 가려던 화면(`location.state.from`)으로 돌려보냅니다. 이때 `safeRedirect`로 앱 내부 경로만 허용합니다. 이 검사가 필요한 이유는 8장의 열린 리디렉션에서 설명합니다.
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

### 6.7 접근 제어와 역할에 따른 화면

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

5장의 레이아웃에 로그인 상태에 따른 메뉴와 계정 영역을 추가합니다. "도서 등록"과 "내 대여"는 로그인한 사용자에게, "관제 대시보드"는 관리자에게만 보입니다. 해당 화면은 7장과 9장에서 만들며, 그 전까지는 메뉴를 누르면 404 화면이 나옵니다.

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

### 실습 6. 인증 흐름 확인하기

1. 6.2~6.7의 파일을 작성하고 개발 서버를 확인합니다.
2. 다음 시나리오를 Network 탭과 Application 탭(Session Storage)을 함께 보며 확인합니다.

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

3. 토큰 만료를 직접 확인하려면 백엔드의 액세스 토큰 유효 시간 설정(S5-P16에서 정의한 설정값)을 1분으로 줄여 API를 다시 실행합니다. 로그인 후 1분 넘게 기다린 뒤 도서 상세 화면을 열면, Network 탭에서 401과 재발급, 재요청이 순서대로 일어나고 화면은 아무 일 없다는 듯이 정상적으로 표시됩니다. 확인 후 설정을 원래대로 돌립니다.

### 정리

- 액세스 토큰은 메모리, 리프레시 토큰은 sessionStorage에 두고 `tokenStore`로만 접근합니다.
- 요청 인터셉터는 토큰을 붙이고, 응답 인터셉터는 401에서 한 번만 재발급하며, 동시 재발급은 하나의 Promise로 묶습니다.
- `AuthProvider`가 로그인 상태를 Context로 공유하고, 새로고침 후에는 재발급 흐름으로 상태를 복원합니다.
- 로그인 오류 메시지는 하나로 통일하고, 429 잠금은 `Retry-After`로 안내합니다.
- 화면의 접근 제어는 사용자 경험을 위한 것이며, 실제 권한 검사는 백엔드가 합니다.

---

## 7장. 쓰기 기능: 등록, 수정, 삭제, 표지 업로드, 대여와 반납

### 학습 목표

- 입력값을 검증하고 API 본문 형식으로 변환해 도서를 등록하고 수정합니다.
- PATCH 요청에서 바뀐 필드만 보내고, 422 검증 오류를 입력 칸별로 표시합니다.
- 삭제, 표지 업로드, 대여와 반납을 구현하고 409 같은 업무 규칙 오류를 사용자에게 안내합니다.
- 백엔드가 UTC로 보낸 시각을 사용자의 시간대로 올바르게 표시합니다.

### 7.1 쓰기 화면의 공통 원칙

조회 화면은 받은 데이터를 보여 주기만 하면 되지만, 쓰기 화면은 사용자의 입력을 서버의 규칙에 맞게 바꿔 보내고 실패를 설명해야 합니다. 이 장의 모든 화면은 다음 원칙을 따릅니다.

1. **검증은 두 번 합니다.** 프론트엔드 검증은 사용자에게 빨리 알려 주기 위한 것이고, 백엔드 검증은 데이터를 지키기 위한 것입니다. 프론트엔드 검증을 통과했더라도 백엔드가 거절할 수 있다는 전제로 오류를 처리합니다.
2. **화면의 값과 API의 값을 구분합니다.** 입력 칸의 값은 모두 문자열이고, 빈 칸은 빈 문자열입니다. API는 정수, `null`, 생략을 구분합니다. 변환은 한 함수에 모읍니다.
3. **실패는 원인에 맞게 안내합니다.** 401은 로그인, 403은 권한, 404는 대상 없음, 409는 현재 상태와의 충돌, 422는 입력 오류입니다.
4. **처리 중에는 버튼을 막습니다.** 같은 요청이 두 번 전송되면 도서가 두 번 등록되거나 대여가 중복될 수 있습니다.

### 7.2 도서 등록과 수정: `src/pages/BookFormPage.jsx`

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

**검증 규칙을 백엔드와 맞춥니다.** `validate` 함수는 0.6에서 정리한 `BookCreate` 규칙(제목 1~100자, 가격 0~1,000,000의 정수, ISBN 숫자 13자리)을 그대로 옮긴 것입니다. 폼에 `noValidate`를 붙여 브라우저 기본 검증 말풍선 대신 이 함수의 메시지를 칸 아래에 일관되게 보여 줍니다. 입력 칸의 `maxLength`, `min`, `max`도 함께 지정해 잘못된 입력을 애초에 줄입니다.

**`toPayload`로 화면 값을 API 본문으로 바꿉니다.** 저자 번호와 가격은 `Number`로 정수로 만들고, 비어 있는 ISBN은 빈 문자열이 아니라 `null`로 보냅니다. 빈 문자열을 그대로 보내면 백엔드의 "숫자 13자리" 규칙에 걸려 422가 됩니다.

**수정은 바뀐 필드만 보냅니다.** 백엔드의 `PATCH /books/{book_id}`는 `model_dump(exclude_unset=True)`로 요청에 들어 있는 필드만 반영합니다(S4-P12). `diff` 함수는 원래 도서와 입력값을 비교해 달라진 필드만 담습니다. 이렇게 하면 다른 사람이 그사이 바꾼 필드를 내 화면의 오래된 값으로 덮어쓰는 일을 줄일 수 있고, 요청 본문만 보고도 무엇을 바꾸려 했는지 알 수 있습니다. 원래 도서의 저자는 `author.id`로 비교한다는 점에 주의합니다. 응답에는 `author_id`가 없고 `author` 객체가 있기 때문입니다.

**두 요청을 동시에 보냅니다.** 수정 화면은 저자 목록과 도서 정보가 모두 필요합니다. 두 요청은 서로 의존하지 않으므로 `Promise.all`로 동시에 보내 기다리는 시간을 줄입니다.

**서버 검증 오류를 칸에 표시합니다.** 4장의 `ApiError`가 422 응답을 칸 이름별 메시지(`fields`)로 바꿔 두었으므로, 실패 시 `setFieldErrors(err.fields)`만 하면 백엔드의 메시지가 해당 칸 아래에 나타납니다. 409 `DUPLICATE_ISBN`이나 422 `INVALID_AUTHOR`처럼 백엔드가 직접 만든 오류는 폼 아래의 `ErrorMessage`에 메시지와 코드로 표시됩니다.

**권한 실패도 정상적인 결과입니다.** 일반 사용자가 남이 등록한 도서를 수정하면 백엔드가 403을 돌려줍니다. 수정 버튼을 소유자에게만 보이게 하려면 응답에 소유자 정보가 있어야 하는데, 백엔드의 `BookRead`가 이를 제공하지 않을 수 있으므로 이 화면은 403을 받아 "이 작업을 할 권한이 없습니다."로 안내합니다. 6장에서 강조했듯이 최종 판단은 백엔드가 합니다.

### 7.3 대여와 반납 API: `src/api/loans.js`

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

### 7.4 도서 상세 화면 완성: `src/pages/BookDetailPage.jsx`

5장의 상세 화면에 대여, 수정, 표지 업로드, 삭제 기능을 추가한 최종 코드입니다. 파일 전체를 다음과 같이 바꿉니다.

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

**공통 실행 함수 `run`.** 네 가지 동작 모두 "처리 중 표시, 이전 메시지 지우기, 실행, 오류 표시, 처리 중 해제"라는 같은 틀을 가지므로 하나의 함수로 묶었습니다.

**대여.** 성공하면 안내 문구를 보여 줍니다. 실패하면 백엔드의 오류 코드가 그대로 표시됩니다. 대여에서 만날 수 있는 409 오류는 다음과 같습니다.

| 오류 코드 | 의미 | 사용자가 할 일 |
|---|---|---|
| `ALREADY_LOANED` | 이미 빌린 도서 | 내 대여 화면 확인 |
| `LOAN_LIMIT_EXCEEDED` | 동시에 빌릴 수 있는 3권 초과 | 다른 도서 반납 후 다시 시도 |
| `OUT_OF_STOCK` | 재고 없음 | 나중에 다시 시도 |

**삭제.** 되돌릴 수 없는 동작이므로 `window.confirm`으로 한 번 더 확인합니다. 성공하면 204가 오며 본문이 없으므로, `deleteBook`은 응답 본문을 읽지 않습니다. 삭제 후에는 `navigate('/', { replace: true })`로 목록으로 이동합니다. `replace`를 쓰면 방문 기록에서 삭제된 도서의 상세 화면이 사라져, 뒤로 가기를 눌러 없는 도서를 다시 여는 일이 없습니다. 대여 기록이 있는 도서는 409 `BOOK_HAS_LOANS`로 거절됩니다.

**표지 업로드.** 파일 선택 칸은 `<label>` 안에 숨겨 버튼처럼 보이게 했습니다. 파일을 고르면 `precheckCover`가 백엔드와 같은 기준(확장자 `.jpg`, `.jpeg`, `.png`, 크기 2MB 이하, 빈 파일 금지)으로 먼저 검사합니다. 2MB 파일을 다 올린 뒤에 413을 받는 것보다 미리 알려 주는 편이 사용자와 서버 모두에게 낫습니다. 다만 확장자는 파일 이름일 뿐이라 얼마든지 속일 수 있으므로, 실제 파일 형식 검사는 백엔드의 몫입니다(S9-P31). 업로드가 성공하면 응답으로 받은 도서 정보로 상태를 바꿔 새 표지가 바로 보이게 합니다. 처리가 끝나면 파일 칸의 값을 비워 같은 파일을 다시 고를 수 있게 합니다.

### 7.5 내 대여 화면: `src/pages/MyLoansPage.jsx`

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

**UTC 시각을 올바르게 표시합니다.** 백엔드는 대여와 반납 시각을 UTC로 저장합니다(S6-P21). 응답 문자열에 `Z`나 `+00:00` 같은 시간대 표시가 있으면 `new Date()`가 UTC로 정확히 해석하고, `Intl.DateTimeFormat`이 사용자의 시간대(한국이면 UTC+9)로 바꿔 보여 줍니다. 그런데 백엔드가 시간대 정보 없는 값(`"2026-11-23T06:58:12"`)을 보내면 브라우저는 이를 현지 시각으로 해석해 9시간 이른 시각을 표시합니다. `formatDate`는 시간대 표시가 없으면 `Z`를 붙여 UTC임을 분명히 합니다. 1장에서 "JSON에는 날짜 자료형이 없다"고 한 것이 실제 문제로 나타나는 대표적인 예입니다.

**상태를 계산으로 얻습니다.** "현재 대여 중인 권수"는 따로 state로 두지 않고 `loans`에서 `returned_at`이 없는 것을 세어 계산합니다. 같은 정보를 두 곳에 두면 한쪽만 바뀌는 불일치가 생기기 쉽습니다.

### 7.6 라우트 등록: `src/App.jsx`

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

### 실습 7. 쓰기 기능 확인하기

1. 7.2~7.6의 파일을 작성합니다.
2. 일반 사용자 계정으로 로그인해 다음을 확인합니다.

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

3. 표지 업로드 요청을 Network 탭에서 열어 Request Headers의 `Content-Type`에 `boundary=`가 포함되어 있는지, Payload에 `file` 필드가 있는지 확인합니다.
4. 브라우저의 검증을 우회했을 때 백엔드가 막는지 확인합니다. Console에서 다음을 실행하면 프론트엔드 검증과 관계없이 백엔드가 422를 돌려줍니다. (토큰이 필요한 요청이므로 `api` 인스턴스를 가져와 사용합니다.)

```js
const { api } = await import('/src/api/client.js');
await api.post('/books', { title: '', author_id: 1, price: -1 }).catch((e) => console.log(e.status, e.fields));
```

### 정리

- 프론트엔드 검증은 빠른 안내를 위한 것이고, 백엔드가 거절할 수 있다는 전제로 오류를 처리합니다.
- 입력 칸의 문자열은 한 함수에서 API 본문(정수, `null`)으로 변환하고, PATCH는 바뀐 필드만 보냅니다.
- 422는 칸별 메시지로, 409는 업무 규칙 위반으로 구분해 안내합니다.
- 파일 업로드는 `FormData`로 보내고, 크기와 확장자는 미리 검사하되 최종 판단은 백엔드에 맡깁니다.
- 시간대 표시가 없는 UTC 시각은 `Z`를 붙여 해석해야 사용자의 시간대로 올바르게 표시됩니다.

---

## 8장. 프론트엔드 개발 보안

### 학습 목표

- 프론트엔드 보안의 전제(브라우저 코드는 공개되고 조작될 수 있다)를 이해하고 백엔드 보안과의 역할을 구분합니다.
- XSS의 원리와 React에서 위험해지는 지점을 알고 방어합니다.
- 토큰 저장 위치별 위험을 비교하고 이 과정의 선택 근거를 설명합니다.
- CSRF, 클릭재킹, 열린 리디렉션, 정보 노출, 공급망 위험에 대한 대책을 적용합니다.
- 보안 헤더와 CSP의 의미를 이해하고, 백엔드 과정의 보안약점 분류와 연결해 점검합니다.

### 8.1 프론트엔드 보안의 전제

백엔드 과정 S9~S11에서 KISA 소프트웨어 개발보안 가이드를 바탕으로 서버 쪽 보안약점을 진단하고 조치했습니다. 프론트엔드 보안을 생각할 때 가장 먼저 받아들여야 할 사실은 다음과 같습니다.

**프론트엔드 코드는 사용자의 컴퓨터에서 실행되므로 공개되어 있고, 언제든 조작될 수 있습니다.** 빌드 결과물인 JavaScript는 누구나 내려받아 읽을 수 있고, 개발자 도구로 변수 값을 바꾸거나, 화면을 거치지 않고 API를 직접 호출할 수 있습니다.

이 전제에서 두 가지 원칙이 나옵니다.

1. **보안 결정은 백엔드가 합니다.** 입력 검증, 권한 검사, 요청 제한은 반드시 백엔드에 있어야 합니다. 프론트엔드의 검증과 메뉴 숨기기는 사용자 경험을 위한 것입니다(6장, 7장).
2. **프론트엔드는 사용자를 보호합니다.** 프론트엔드의 보안 대책은 주로 "정상 사용자의 브라우저가 공격에 악용되지 않게 하는 것"입니다. 사용자의 화면에 악성 스크립트가 실행되거나(XSS), 사용자의 토큰이 유출되거나, 사용자가 속아서 원치 않는 동작을 하게 되는 것(CSRF, 클릭재킹, 열린 리디렉션)을 막습니다.

### 8.2 XSS(크로스 사이트 스크립팅)

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
| `eval`, `new Function`, 문자열을 넘긴 `setTimeout` | 문자열을 코드로 실행합니다. | 쓰지 않습니다. 10장의 CSP가 이를 막습니다. |

HTML을 꼭 보여 줘야 하는 경우(예: 관리자가 작성한 공지)에는 검증된 정화 라이브러리를 사용합니다.

```jsx
import DOMPurify from 'dompurify'; // npm install dompurify

function Notice({ html }) {
  // 스크립트, 이벤트 속성(onerror 등), javascript: 주소를 제거한 HTML만 넣습니다.
  return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />;
}
```

### 8.3 토큰 저장 위치

6장에서 액세스 토큰은 메모리, 리프레시 토큰은 `sessionStorage`에 두었습니다. 저장 위치별 특징을 비교하면 다음과 같습니다.

| 저장 위치 | XSS로 토큰 탈취 | CSRF 대책 필요 | 새로고침 후 | 탭 사이 공유 | 비고 |
|---|---|---|---|---|---|
| `localStorage` | 가능 | 필요 없음 | 유지 | 공유 | 브라우저를 닫아도 남아 노출 기간이 깁니다. |
| `sessionStorage` | 가능 | 필요 없음 | 유지 | 탭마다 분리 | 탭을 닫으면 지워집니다. |
| 메모리(JS 변수) | 저장된 값을 꺼내기 어려움 | 필요 없음 | 사라짐 | 분리 | 새로고침마다 재발급이 필요합니다. |
| HttpOnly 쿠키 | 스크립트로 읽을 수 없음 | 필요 | 유지 | 공유 | 백엔드가 쿠키로 발급하도록 바뀌어야 합니다. |

"CSRF 대책 필요" 열을 보면, 헤더로 토큰을 보내는 방식은 CSRF에서 자유롭습니다. 브라우저는 `Authorization` 헤더를 자동으로 붙이지 않기 때문입니다. 반대로 쿠키는 자동으로 전송되므로 8.4의 CSRF 대책이 필요합니다.

이 과정의 선택은 다음 근거에 따릅니다.

- 백엔드가 토큰을 JSON 본문으로 주고받도록 설계되어 있으므로(S5-P18), 백엔드를 고치지 않는 범위에서 고를 수 있는 선택지는 메모리와 웹 스토리지입니다.
- 실제 API 호출에 쓰이는 액세스 토큰은 메모리에 두어 스토리지에서 꺼내 가는 경로를 없앴습니다.
- 리프레시 토큰은 새로고침 후 복원을 위해 저장해야 하므로, 노출 기간이 더 짧은 `sessionStorage`를 골랐습니다.

어떤 저장 위치를 고르더라도 **XSS가 있으면 공격자는 사용자의 권한으로 API를 호출할 수 있습니다.** HttpOnly 쿠키조차 "토큰 값을 훔치는 것"은 막아도 "사용자 브라우저에서 요청을 보내는 것"은 막지 못합니다. 따라서 토큰 저장 위치는 피해 범위를 줄이는 보조 수단이고, 근본 대책은 8.2의 XSS 방지와 10장의 CSP입니다. 보안 수준을 더 높이려면 백엔드가 리프레시 토큰을 `HttpOnly; Secure; SameSite=Strict` 쿠키로 발급하도록 바꾸는 방법이 있으며, 11장의 확장 과제로 제시합니다.

### 8.4 CSRF와 클릭재킹

**CSRF(사이트 간 요청 위조)**는 사용자가 로그인한 상태에서 악성 사이트를 방문했을 때, 악성 사이트가 사용자 몰래 대상 사이트로 요청을 보내게 만드는 공격입니다. 3장에서 본 것처럼 동일 출처 정책은 응답 읽기만 막고 요청 전송은 막지 않으므로, 쿠키로 인증하는 사이트라면 쿠키가 자동으로 붙은 요청이 서버에서 정상 처리될 수 있습니다.

이 과정의 구조에서는 토큰을 `Authorization` 헤더로 보내므로 CSRF가 성립하지 않습니다. 악성 사이트는 사용자의 토큰을 모르기 때문입니다. 만약 쿠키 인증으로 바꾼다면 다음 대책을 함께 적용해야 합니다.

- 쿠키에 `SameSite=Strict` 또는 `Lax` 속성을 지정해 다른 사이트에서 시작한 요청에는 쿠키가 붙지 않게 합니다.
- 상태를 바꾸는 요청에 CSRF 토큰(서버가 발급하고 요청마다 헤더로 돌려받는 값)을 사용합니다.
- 백엔드 CORS 설정에 `allow_credentials=True`를 켤 때는 허용 출처를 와일드카드 없이 정확히 적습니다.

**클릭재킹**은 공격자가 자신의 페이지에 대상 사이트를 투명한 `<iframe>`으로 겹쳐 놓고, 사용자가 다른 것을 누르는 줄 알고 대상 사이트의 버튼(예: 도서 삭제 확인)을 누르게 하는 공격입니다. 응답 헤더 `X-Frame-Options: DENY`와 CSP의 `frame-ancestors 'none'`으로 다른 사이트가 이 앱을 프레임에 넣지 못하게 막습니다. 10장에서 Nginx 설정으로 적용합니다.

### 8.5 보안 헤더와 CSP

보안 헤더는 서버가 응답에 붙여 "이 페이지를 다룰 때 이런 제약을 지켜라"라고 브라우저에 지시하는 방법입니다. 프론트엔드 파일을 제공하는 서버(10장의 Nginx)에서 설정합니다.

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

Vite로 빌드한 결과물은 모든 스크립트와 스타일을 별도 파일로 만들기 때문에 이렇게 엄격한 정책을 그대로 적용할 수 있습니다. 운영 환경에서는 API가 Nginx 프록시를 통해 같은 출처가 되므로 `connect-src 'self'`로 충분합니다. 이 정책은 10장의 `nginx/security-headers.conf`에서 적용하고 실제 응답으로 확인합니다.

### 8.6 비밀정보와 빌드 결과물

4장에서 설명했듯이 `VITE_`로 시작하는 환경 변수는 빌드할 때 JavaScript에 문자열로 들어갑니다. 따라서 다음을 지킵니다.

- 프론트엔드 환경 변수에는 공개되어도 되는 값(API 주소 등)만 넣습니다. 외부 서비스의 비밀 키가 필요한 기능은 백엔드를 거쳐 호출합니다.
- 개인별 설정은 `.env.local`에 두고 Git에 올리지 않습니다. Vite 템플릿의 `.gitignore`에는 `*.local`이 이미 들어 있습니다.
- 운영 빌드에는 소스맵을 포함하지 않습니다. 소스맵은 압축된 코드를 원래 소스로 되돌려 보여 주는 파일로, 주석과 내부 구조까지 노출됩니다. Vite는 기본적으로 운영 빌드에 소스맵을 만들지 않으며(`build.sourcemap: false`), 이 설정을 바꾸지 않습니다.
- `console.log`로 토큰, 비밀번호, 개인정보를 출력하지 않습니다. 개발 중에 넣은 출력문이 운영에 그대로 남는 경우가 많습니다.

### 8.7 오류 처리와 정보 노출

백엔드 과정 S10-P35에서 "오류 메시지로 내부 정보를 노출하지 않는다"는 원칙을 다뤘습니다. 프론트엔드도 같은 원칙을 따릅니다.

- 로그인 실패 메시지는 하나로 통일합니다(6장).
- 화면에는 백엔드가 의도적으로 만든 메시지(`AppError`)와 오류 코드만 보여 주고, 처리하지 못한 오류의 원문이나 스택 추적은 보여 주지 않습니다. 4장의 `toApiError`는 알 수 없는 형식의 오류를 상태 코드별 일반 메시지로 바꿉니다.
- 오류 코드는 사용자에게 의미가 없어 보여도 운영자가 백엔드 로그와 대조하는 데 유용합니다. 내부 구조를 드러내지 않는 수준의 식별자만 표시합니다.

### 8.8 열린 리디렉션

로그인 화면은 로그인 후 "원래 가려던 주소"로 돌려보냅니다. 이 주소를 검사하지 않으면, 공격자가 이 앱의 로그인 주소에 외부 사이트 주소를 넣은 링크를 퍼뜨려, 사용자가 진짜 사이트에서 로그인한 직후 가짜 사이트로 이동하게 만들 수 있습니다. 사용자는 방금 진짜 사이트에서 로그인했으므로 의심 없이 가짜 화면에 다시 정보를 입력하게 됩니다.

6장의 `safeRedirect`는 `/`로 시작하는 앱 내부 경로만 허용하고, `//evil.example`처럼 `//`로 시작하는 주소는 거부합니다. `//`로 시작하는 주소는 브라우저가 "현재 스킴으로 다른 호스트에 접속"하는 주소로 해석하기 때문입니다.

### 8.9 의존성과 공급망 보안

프론트엔드 프로젝트는 직접 설치한 패키지 몇 개에 딸려 오는 수백 개의 간접 의존성을 포함합니다. 이 중 하나라도 취약하거나 악성으로 바뀌면 빌드 결과물에 그대로 들어갑니다. 백엔드 과정 S11-P37에서 `pip-audit`로 파이썬 의존성을 점검한 것처럼 다음을 실천합니다.

| 실천 사항 | 방법 |
|---|---|
| 알려진 취약점 점검 | `npm audit`로 확인하고, 운영 의존성만 보려면 `npm audit --omit=dev`를 씁니다. |
| 설치 결과 고정 | `package-lock.json`을 Git에 포함하고, CI와 Docker 빌드에서는 잠금 파일 그대로 설치하는 `npm ci`를 씁니다(10장). |
| 패키지 출처 확인 | `npm audit signatures`로 레지스트리 서명을 확인합니다. 설치 전 패키지 이름의 철자를 확인합니다. 인기 패키지와 비슷한 이름의 악성 패키지(타이포스쿼팅)가 있습니다. |
| 의존성 최소화 | 몇 줄로 구현할 수 있는 기능 때문에 패키지를 추가하지 않습니다. |
| 꾸준한 갱신 | GitHub Dependabot 같은 도구로 갱신 알림을 받습니다. 차트처럼 큰 라이브러리는 메이저 버전 변경 시 동작을 확인합니다. |
| 외부 CDN 스크립트 | 가능하면 사용하지 않습니다. 써야 한다면 `integrity` 속성(SRI)으로 내용이 바뀌지 않았는지 검증합니다. |

### 8.10 요청 제한과 중복 요청

백엔드는 로그인 실패를 제한하고 429를 돌려줍니다(S10-P34). 프론트엔드는 이를 사용자에게 안내하고(6장), 스스로 불필요한 요청을 만들지 않아야 합니다.

- 처리 중에는 제출 버튼을 비활성화합니다(6장, 7장).
- 검색은 입력할 때마다가 아니라 제출할 때 요청합니다(5장).
- 주기적으로 상태를 조회하는 화면은 간격을 적절히 두고, 탭이 보이지 않을 때는 멈춥니다(9장).
- 화면을 떠나면 진행 중인 요청을 취소합니다(4장).

### 8.11 보안 점검표

백엔드 과정에서 사용한 KISA 보안약점 분류에 맞춰 이 과정의 프론트엔드 대책을 정리합니다. 11장의 종합 점검에서 이 표로 자기 코드를 확인합니다.

| 분류 | 점검 항목 | 이 과정의 대책 | 다룬 곳 |
|---|---|---|---|
| 입력데이터 검증 및 표현 | 출력 시 XSS | JSX 이스케이프만 사용, `dangerouslySetInnerHTML` 미사용 | 8.2 |
| | 사용자 입력 주소로 이동 | 내부 경로만 허용(`safeRedirect`) | 6장, 8.8 |
| | 업로드 파일 | 확장자, 크기 사전 검사, 최종 검사는 백엔드 | 7장 |
| 보안기능 | 인증 정보 저장 | 액세스 토큰 메모리, 리프레시 토큰 sessionStorage | 6장, 8.3 |
| | 권한 처리 | 화면 숨김은 UX, 권한 판단은 백엔드 | 6장 |
| | 보안 헤더 | CSP, `X-Frame-Options` 등 적용 | 8.5, 10장 |
| 시간 및 상태 | 중복 요청, 경쟁 상태 | 버튼 비활성화, 요청 취소, 재발급 Promise 공유 | 4장, 6장, 7장 |
| 에러처리 | 오류 메시지 노출 | 오류 형식 통일, 일반 메시지, 로그인 메시지 통일 | 4장, 6장, 8.7 |
| 코드오류 | 위험 함수 | `eval`, `innerHTML` 미사용, CSP로 차단 | 8.2, 8.5 |
| 캡슐화 | 비밀정보 노출 | `VITE_` 값 공개 전제, 소스맵 미포함, 민감정보 로그 금지 | 8.6 |
| API 오용 | 취약한 의존성 | `npm audit`, `npm ci`, 잠금 파일 관리 | 8.9 |

### 실습 8. 보안 점검하기

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

`App.jsx`에 `<Route path="xss" element={<XssLab />} />`를 잠시 추가하고 로그인한 상태로 `/xss`를 엽니다. 1번은 글자 그대로 보이고, 2번은 Console에 리프레시 토큰이 출력됩니다. 확인 후 파일과 라우트를 지웁니다. 같은 종류의 인라인 코드가 CSP로 차단되는 모습은 10장에서 Nginx로 보안 헤더를 적용한 뒤 확인합니다.

**2) 의존성 점검**

```bash
npm audit
npm audit --omit=dev
npm audit signatures
```

발견된 취약점이 있으면 `npm audit fix`로 호환되는 범위에서 고치고, 메이저 버전 변경이 필요하면 영향 범위를 확인한 뒤 갱신합니다.

**3) 빌드 결과물 확인**

4장에서 만든 개발용 API 주소를 넣어 빌드한 뒤 결과물을 확인합니다. 운영용 설정 파일(`.env.production`)은 10장에서 만들므로 여기서는 값을 명령에 직접 넣습니다.

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

### 정리

- 프론트엔드 코드는 공개되고 조작될 수 있으므로 보안 결정은 백엔드가 하고, 프론트엔드는 사용자의 브라우저를 보호합니다.
- React의 JSX 출력은 XSS를 기본으로 막지만, `dangerouslySetInnerHTML`, `innerHTML`, 사용자 입력 주소로의 이동은 직접 관리해야 합니다.
- 토큰 저장 위치는 피해 범위를 줄이는 수단이며, 근본 대책은 XSS 방지와 CSP입니다.
- 헤더 기반 토큰 전송은 CSRF에 강하며, 쿠키 방식으로 바꾸면 SameSite와 CSRF 토큰이 필요합니다.
- 보안 헤더, 비밀정보 관리, 열린 리디렉션 방지, 의존성 점검을 점검표로 확인합니다.

---

## 9장. 관제 대시보드와 데이터 시각화

### 학습 목표

- 관제 환경에서 대시보드가 해야 할 일과 설계 원칙을 설명합니다.
- 서비스 상태를 나타내는 지표를 고르고, 이 백엔드에서 얻을 수 있는 데이터 소스와 연결합니다.
- 데이터의 성격에 맞는 차트 형태와 시각화 도구를 고릅니다.
- 주기적 갱신, 요청 기록, 로그 분석을 갖춘 관제 대시보드를 Recharts로 구현합니다.

### 9.1 관제 대시보드란

관제(monitoring)는 시스템이 정상적으로 동작하는지 계속 지켜보고, 이상이 생기면 빨리 알아차려 대응하는 일입니다. 네트워크 운영 센터(NOC)나 보안 관제 센터(SOC)에서는 여러 대의 큰 화면에 대시보드를 띄워 두고 운영자가 수시로 바라봅니다. 따라서 관제 대시보드는 일반적인 보고서 화면과 요구 사항이 다릅니다.

| 구분 | 보고서형 대시보드 | 관제 대시보드 |
|---|---|---|
| 보는 방식 | 자리에 앉아 자세히 읽음 | 멀리서 짧게 훑어봄 |
| 핵심 질문 | 지난달 성과는 어땠나 | 지금 문제가 있는가, 어디인가 |
| 갱신 | 필요할 때 | 수 초에서 수 분 간격으로 자동 |
| 강조 대상 | 추세와 비교 | 이상 상태와 변화 |

좋은 관제 대시보드는 화면을 본 지 몇 초 안에 "정상인가, 아닌가"에 답할 수 있어야 하고, 아니라면 "어디를 더 봐야 하는가"까지 안내해야 합니다.

### 9.2 설계 원칙

**1) 정보의 위계를 위에서 아래로 둡니다.** 가장 위에는 전체 상태(정상, 주의, 장애)를, 그 아래에 핵심 수치(KPI)를, 그 아래에 추세 차트를, 가장 아래에 세부 표를 둡니다. 운영자는 위에서 이상을 발견하면 아래로 내려가며 원인을 좁힙니다.

**2) 상태 색은 예약해 두고 다른 용도로 쓰지 않습니다.** 초록(정상), 노랑(주의), 주황(심각), 빨강(장애)은 상태를 뜻하는 색으로만 씁니다. 일반 데이터 계열에 빨강을 쓰면 운영자가 장애로 오인합니다. 이 과정은 `index.css`에 `--status-good`, `--status-warning`, `--status-serious`, `--status-critical`을 따로 정의하고, 일반 차트 선은 파랑 계열 `--series-1`로 그립니다.

**3) 색만으로 상태를 전달하지 않습니다.** 색각 이상이 있는 운영자, 흑백 출력, 멀리서 보는 화면에서는 색 구분이 어렵습니다. 상태 표시에는 항상 모양(원, 삼각형, 사각형)과 글자(정상, 주의, 장애)를 함께 씁니다.

**4) 글자는 글자 색으로 씁니다.** 수치와 이름표는 기본 글자 색(`--text-primary`, `--text-secondary`)으로 쓰고, 계열 색은 선과 막대에만 씁니다. 노란 글자처럼 배경과 대비가 낮은 글자는 읽기 어렵습니다.

**5) 어두운 바탕을 씁니다.** 오랜 시간 켜 두는 관제 화면은 눈의 피로를 줄이고 상태 색을 돋보이게 하려고 어두운 바탕을 주로 씁니다. 어두운 바탕에서는 바탕과의 대비가 충분한 색 단계를 골라야 합니다.

**6) 차트는 가볍게 그립니다.** 선은 2px, 막대 끝은 살짝 둥글게, 격자선은 바탕과 비슷한 어두운 색으로 눈에 덜 띄게 합니다. 모든 점에 숫자를 붙이지 않고, 정확한 값은 마우스를 올리면 툴팁으로 보여 줍니다.

**7) 축은 하나만 씁니다.** 응답 시간(ms)과 요청 수(건)처럼 단위가 다른 값을 좌우 두 개의 축으로 한 차트에 겹치면 두 선의 교차나 기울기가 축 범위 설정에 따라 마음대로 바뀌어 잘못된 해석을 낳습니다. 단위가 다르면 차트를 나눕니다.

**8) 언제의 데이터인지 밝힙니다.** 갱신 간격과 마지막 갱신 시각을 화면에 표시합니다. 숫자가 멈춰 있을 때 "정상이라 변화가 없는 것"인지 "수집이 끊긴 것"인지 구분할 수 있어야 합니다. 시각은 사용자의 시간대로 표시합니다(7장).

**9) 숫자는 자릿수를 맞춥니다.** 같은 열의 숫자는 오른쪽 정렬하고, 글꼴의 고정폭 숫자(`font-variant-numeric: tabular-nums`)를 써서 값이 바뀌어도 글자가 흔들리지 않게 합니다.

### 9.3 무엇을 볼 것인가: 지표와 데이터 소스

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
| `GET /health` (S8-P28) | API 생존 여부, DB 연결 상태, 응답 시간 | 순간의 상태만 알 수 있음 |
| `GET /books?limit=1`의 `total` | 등록 도서 수(업무 지표) | 업무 데이터 일부만 |
| 브라우저에서 보낸 요청의 기록 | 이 브라우저가 겪은 응답 시간과 상태 코드 | 다른 사용자의 요청은 모름 |
| 백엔드 JSON 요청 로그 (S8-P28) | 모든 요청의 경로, 상태, 처리 시간 | 실시간이 아니라 파일로 받아 분석 |
| CloudWatch (S15-P51) | 운영 환경의 로그와 지표, 경보 | AWS 콘솔이나 별도 대시보드 필요 |

백엔드에는 통계 전용 API가 없으므로, 이 과정의 대시보드는 위의 첫 네 가지 소스를 조합합니다. 포화 신호(CPU, 메모리)는 브라우저에서 얻을 수 없으므로 9.5의 인프라 관제 도구가 담당할 영역입니다.

### 9.4 차트 형태 고르기

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

### 9.5 시각화 도구 비교

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

### 9.6 실시간 갱신 방식

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

이 규칙을 훅으로 만듭니다. `src/hooks/usePolling.js`를 작성합니다.

`src/hooks/usePolling.js`

```js
import { useEffect, useRef } from 'react';

// intervalMs마다 task를 실행합니다. 탭이 보이지 않을 때는 쉬고,
// 앞선 작업이 끝나기 전에는 다음 작업을 시작하지 않습니다.
export function usePolling(task, intervalMs, enabled = true) {
  // 최신 task를 ref에 담아 두면 task가 바뀌어도 타이머를 다시 만들지 않습니다.
  const taskRef = useRef(task);
  useEffect(() => {
    taskRef.current = task;
  }, [task]);

  useEffect(() => {
    if (!enabled) return;
    let timer;
    let stopped = false;
    const controller = new AbortController();

    async function tick() {
      if (document.visibilityState === 'visible') {
        try {
          await taskRef.current(controller.signal);
        } catch (error) {
          if (error.name !== 'AbortError' && error.name !== 'CanceledError') console.error(error);
        }
      }
      if (!stopped) timer = setTimeout(tick, intervalMs);
    }

    tick();
    return () => {
      stopped = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [intervalMs, enabled]);
}
```

`taskRef`는 `useRef`로 만든 상자입니다. `useRef`의 값은 바뀌어도 화면을 다시 그리지 않으며, 컴포넌트가 다시 그려져도 같은 상자가 유지됩니다. 최신 `task` 함수를 이 상자에 담아 두면, 타이머는 그대로 둔 채 항상 최신 함수를 실행할 수 있습니다.

### 9.7 구현

#### 1단계: Recharts 설치

```bash
npm install recharts
```

#### 2단계: 브라우저 요청 기록

모든 API 요청은 4장과 6장에서 만든 axios 인스턴스를 거칩니다. 인터셉터에서 요청 시작 시각과 응답 상태를 기록하면, 별도 서버 없이도 이 브라우저가 겪은 응답 시간과 오류를 집계할 수 있습니다.

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

`src/api/client.js`에 기록 기능을 더합니다. 6장의 코드와 비교해 바뀐 곳은 네 군데입니다. `recordRequest`를 가져오고, 요청 인터셉터에서 시작 시각(`config.metadata.startedAt`)을 적고, 기록 함수 `record`를 추가하고, 응답 인터셉터의 성공과 실패 양쪽에서 `record`를 호출합니다. 응답을 받지 못한 요청은 상태 0으로 기록합니다. 파일 전체는 다음과 같습니다.

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

#### 3단계: 지표 계산 함수

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

#### 4단계: 공통 표시 컴포넌트

상태 배지는 9.2의 원칙대로 모양과 글자, 색을 함께 보여 줍니다. 모양 문자에는 `aria-hidden="true"`를 붙여 화면 낭독기가 글자만 읽게 합니다.

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

#### 5단계: 헬스 체크 패널과 상태 코드 분포

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

#### 6단계: 백엔드 로그 분석

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

#### 7단계: 대시보드 화면 조립

`src/dashboard/DashboardPage.jsx`

```jsx
import { useCallback, useState } from 'react';
import { listBooks } from '../api/books';
import { checkHealth } from '../api/health';
import { usePolling } from '../hooks/usePolling';
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
  const [history, setHistory] = useState([]);
  const [bookTotal, setBookTotal] = useState(null);
  const records = useTelemetry();

  const pollHealth = useCallback(async (signal) => {
    const result = await checkHealth(signal);
    setHistory((prev) => [...prev, result].slice(-HISTORY_SIZE));
  }, []);

  // limit=1로 요청하면 목록 대신 total 값만 가볍게 얻을 수 있습니다.
  const pollKpi = useCallback(async (signal) => {
    const page = await listBooks({ limit: 1 }, signal);
    setBookTotal(page.total);
  }, []);

  usePolling(pollHealth, HEALTH_INTERVAL_MS);
  usePolling(pollKpi, KPI_INTERVAL_MS);

  const latest = history.at(-1);
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

      <LogAnalyzer />
    </div>
  );
}
```

화면 구성은 9.2의 위계를 따릅니다. 맨 위에 제목과 갱신 정보, 그 아래에 다섯 개의 KPI 카드, 그 아래에 헬스 체크 이력과 상태 코드 분포, 맨 아래에 로그 분석을 둡니다. 헬스 체크는 10초, 도서 수는 60초 간격으로 갱신합니다. 도서 수는 `limit=1`로 요청해 목록 대신 `total`만 가볍게 얻습니다. 헬스 체크 이력은 함수형 업데이트로 새 결과를 붙이고 최근 30개만 남깁니다. `history.at(-1)`은 배열의 마지막 요소를 꺼내는 문법입니다.

#### 8단계: 라우트 등록과 코드 분할

대시보드를 관리자 전용 라우트로 등록합니다. 이때 코드 분할을 함께 적용합니다. Recharts는 크기가 큰 라이브러리라서 모든 화면의 JavaScript에 포함하면, 대시보드를 쓰지 않는 일반 사용자도 첫 화면을 열 때 이를 모두 내려받아야 합니다. `lazy`와 동적 `import()`를 쓰면 빌드 시 대시보드가 별도 파일로 분리되고, 관리자가 대시보드를 처음 열 때만 내려받습니다. 내려받는 동안에는 `Suspense`의 `fallback`이 표시됩니다. `App.jsx`의 최종 코드는 다음과 같습니다.

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

`npm run build`를 실행하면 결과에 `index-...js`와 `DashboardPage-...js`가 따로 생성되는 것을 확인할 수 있습니다. 이 과정의 코드로 확인했을 때 첫 화면용 파일은 약 340KB(gzip 약 110KB), 대시보드 파일은 약 450KB(gzip 약 127KB)였습니다. 코드 분할을 하지 않으면 첫 화면용 파일 하나가 약 790KB가 되고 Vite가 500KB 초과 경고를 출력합니다.

### 실습 9. 관제 대시보드 운영해 보기

1. `npm install recharts`를 실행하고 9.6~9.7의 파일을 모두 작성합니다.
2. 관리자 계정으로 로그인해 "관제 대시보드"를 엽니다. 일반 사용자 계정으로는 메뉴가 보이지 않고, 주소를 직접 입력하면 "관리자만 사용할 수 있는 화면입니다."가 나오는지도 확인합니다.
3. 상단 메뉴로 도서 목록과 상세 화면을 여러 번 오간 뒤 대시보드로 돌아와 브라우저 측정 응답 시간과 상태 코드 분포가 늘어났는지 확인합니다. 기록은 탭의 메모리에 있으므로 같은 탭 안에서 메뉴로 이동해야 하며, 새로고침하면 기록이 지워집니다.
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

대시보드의 "백엔드 요청 로그 분석"에서 `api.log`를 고릅니다. 분당 요청 수, 로그 상태 코드 분포, 느린 API 상위 10개가 표시됩니다. 표에서 `OPTIONS` 요청(3장의 사전 요청)과 `/health` 요청(대시보드의 폴링)이 얼마나 많은지 확인하고, 그 의미를 생각해 봅니다. 건너뛴 줄은 서버 시작 메시지처럼 JSON이 아닌 로그입니다.

7. 다음 질문에 답해 봅니다.
   - 브라우저 측정 응답 시간과 로그의 `duration_ms`가 다른 이유는 무엇입니까?
   - 오류율 계산에서 4xx를 제외한 이유는 무엇입니까? 401이 갑자기 늘어난다면 어떤 상황을 의심할 수 있습니까?
   - 헬스 체크 간격을 1초로 줄이면 어떤 문제가 생깁니까?

### 정리

- 관제 대시보드는 몇 초 안에 "정상인가, 어디가 문제인가"에 답할 수 있도록 상태, KPI, 추세, 상세 순서로 구성합니다.
- 상태 색은 예약해 두고, 항상 모양과 글자를 함께 표시합니다.
- 지연, 트래픽, 오류, 포화의 네 가지 신호를 기준으로 지표를 고르고, 데이터 소스의 한계를 이해합니다.
- 데이터가 하는 일에 따라 숫자 타일, 상태 띠, 선, 막대, 표를 고르고 이중 축은 쓰지 않습니다.
- 폴링은 앞 요청이 끝난 뒤 예약하고, 탭이 보이지 않으면 쉬며, 화면을 떠나면 멈춥니다.
- 큰 라이브러리를 쓰는 화면은 `lazy`로 코드를 분할합니다.

---

## 10장. 도커라이징과 통합 실행

### 학습 목표

- 개발 서버와 운영 서버의 차이를 이해하고, 운영 빌드에 맞는 환경 변수를 구성합니다.
- Nginx로 SPA 정적 파일을 제공하고, API 요청을 백엔드로 전달하는 리버스 프록시를 구성합니다.
- 멀티 스테이지 Dockerfile로 작고 안전한 프론트엔드 이미지를 만듭니다.
- 백엔드 Compose 구성에 프론트엔드를 추가해 전체 서비스를 한 번에 실행하고 점검합니다.

### 10.1 운영 환경의 구조

`npm run dev`로 띄운 Vite 개발 서버는 코드 변환, HMR 같은 개발 편의 기능을 위한 서버이며 운영 용도가 아닙니다. 운영 환경에서는 `npm run build`로 만든 정적 파일(`dist`)을 웹 서버가 제공합니다. 빌드 결과물은 HTML, JavaScript, CSS 파일일 뿐이므로 Node.js가 실행될 필요가 없습니다.

이 과정은 Nginx를 웹 서버로 사용하며, Nginx가 두 가지 일을 맡습니다.

```text
브라우저 ── http://localhost:8080 ──> [web 컨테이너: Nginx]
                                        ├─ /, /books/7, /dashboard ...  -> dist의 index.html, JS, CSS
                                        └─ /api/...  ──(프록시)──> [api 컨테이너: FastAPI :8000] ──> [db]
```

1. 정적 파일 제공: 빌드 결과물을 보내고, 모든 응답에 8장의 보안 헤더를 붙입니다.
2. 리버스 프록시: `/api/`로 시작하는 요청을 백엔드 컨테이너로 전달합니다.

이 구조에서 브라우저가 보는 출처는 `http://localhost:8080` 하나뿐입니다. 화면도 API도 같은 출처에서 오므로 CORS가 필요 없고 사전 요청도 생기지 않습니다. 3.6에서 비교한 프록시 방식을 운영 환경에 적용한 것입니다.

### 10.2 운영 빌드 환경 변수

운영 빌드에서는 API 주소를 같은 출처의 상대 경로 `/api`로 지정합니다. 프로젝트 루트에 `.env.production`을 만듭니다.

`.env.production`

```dotenv
# 운영 빌드(npm run build)에서 사용하는 값입니다.
# Nginx가 /api 경로를 백엔드로 전달하므로 같은 출처의 상대 경로를 씁니다.
VITE_API_BASE_URL=/api
```

이 값으로 빌드하면 axios의 `baseURL`이 `/api`가 되어 `/api/books`, `/api/auth/token`처럼 요청하고, `toAssetUrl`은 표지 주소를 `/api/covers/...`로 만듭니다.

Vite의 환경 변수는 **빌드할 때** 코드에 새겨진다는 점을 다시 강조합니다. 컨테이너를 실행할 때 환경 변수를 바꿔도 이미 만든 JavaScript 파일은 바뀌지 않습니다. 환경마다 다른 값이 필요하면 이미지를 따로 빌드하거나, 이 과정처럼 상대 경로를 써서 환경과 무관한 값으로 만듭니다.

### 10.3 Nginx 설정

`nginx` 폴더를 만들고 두 파일을 작성합니다.

**보안 헤더: `nginx/security-headers.conf`**

8.5에서 정리한 보안 헤더와 CSP입니다.

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

### 10.4 Dockerfile

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

**`npm ci`.** `npm install`과 달리 `package-lock.json`에 적힌 버전 그대로 설치하고, 잠금 파일과 `package.json`이 맞지 않으면 실패합니다. 언제 빌드해도 같은 의존성이 들어가므로 8.9의 공급망 관리 원칙에 맞습니다.

**빌드 인자.** `ARG VITE_API_BASE_URL=/api`와 `ENV`로 빌드 시점에 값을 넘길 수 있게 했습니다. 환경 변수로 넘긴 값은 `.env.production`보다 우선합니다. 다른 주소로 빌드해야 할 때는 `docker build --build-arg VITE_API_BASE_URL=... .`를 씁니다.

**root가 아닌 사용자로 실행.** `nginxinc/nginx-unprivileged` 이미지는 Nginx를 root가 아닌 사용자로 실행하며, 이 때문에 1024 미만 포트 대신 8080 포트를 사용합니다. 컨테이너 안의 프로세스가 탈취되더라도 피해 범위를 줄일 수 있습니다.

**헬스 체크.** `HEALTHCHECK`로 Docker가 30초마다 Nginx의 응답을 확인하고, `docker compose ps`에 `healthy` 여부를 표시합니다.

이미지에 넣지 않을 파일은 `.dockerignore`에 적습니다. 특히 `node_modules`를 제외하지 않으면 운영체제가 다른 로컬의 모듈이 이미지로 복사되어 빌드가 느려지거나 오동작할 수 있습니다. `.env.local`처럼 개인 설정 파일도 제외합니다.

`.dockerignore`

```text
node_modules
dist
.git
.env.local
.env.*.local
*.log
Dockerfile
.dockerignore
```

### 10.5 Compose로 통합 실행

백엔드 프로젝트의 `compose.yaml`(S8-P27)에 `web` 서비스를 추가합니다. 0.7에서 두 프로젝트를 같은 `workspace` 폴더에 나란히 두었으므로 `build`에 상대 경로를 씁니다.

```yaml
services:
  db:
    # (기존 설정 그대로)

  api:
    # (기존 설정 그대로)

  web:
    build: ../book-admin-web
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
- 백엔드는 로그인 실패 기록에 요청자의 IP를 남깁니다(S10-P34). Nginx를 거치면 백엔드가 보는 접속 IP는 Nginx 컨테이너의 주소가 됩니다. 실제 사용자의 IP를 쓰려면 Uvicorn을 `--proxy-headers` 옵션과 함께 실행하고 `--forwarded-allow-ips`에 프록시(Nginx)의 주소를 지정해, Nginx가 넘긴 `X-Forwarded-For` 값을 신뢰하게 해야 합니다. 신뢰할 프록시를 지정하지 않고 이 헤더를 무조건 믿으면, 공격자가 헤더를 위조해 로그인 잠금을 피할 수 있습니다.
- 운영 환경의 `CORS_ORIGINS`에는 개발용 `http://localhost:5173`이 필요 없습니다. 같은 출처로 제공되므로 CORS 허용 목록을 비우거나 실제로 필요한 출처만 남깁니다.

### 10.6 AWS 배포와의 연결

백엔드 과정 S13~S15에서 API를 ECR 이미지로 EC2에 배포하고, ALB로 HTTPS를 적용했습니다. 프론트엔드 이미지도 같은 방법으로 ECR에 올려 EC2에서 함께 실행할 수 있습니다. 이때 ALB는 모든 요청을 `web` 컨테이너로 보내고, `web`의 Nginx가 `/api/`를 내부의 `api` 컨테이너로 전달하는 구성이 이 교안의 Compose 구조와 가장 가깝습니다. HTTPS로 서비스하게 되면 `security-headers.conf`에 `add_header Strict-Transport-Security "max-age=31536000" always;`를 추가해 브라우저가 이후 접속을 항상 HTTPS로 하게 합니다.

정적 파일만 제공하면 되므로 S3와 CloudFront로 프론트엔드를 배포하는 방법도 널리 쓰입니다. 이 경우 화면과 API의 출처가 달라질 수 있으므로, 3장의 CORS 설정을 운영 도메인 기준으로 다시 구성하거나 CloudFront에서 `/api/*` 경로를 ALB로 전달하도록 구성합니다.

### 실습 10. 컨테이너로 통합 실행하고 점검하기

1. `.env.production`, `nginx/default.conf`, `nginx/security-headers.conf`, `Dockerfile`, `.dockerignore`를 작성합니다.
2. 백엔드의 `compose.yaml`에 `web` 서비스를 추가하고 `docker compose up -d --build`로 실행합니다.
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
| 6 | 응답 헤더 | `content-security-policy`, `x-frame-options` 등 8장의 헤더 존재, `Server` 헤더에 버전 없음 |

5. CSP가 인라인 코드를 막는지 확인합니다. Console에서 다음을 실행합니다.

```js
document.body.insertAdjacentHTML('beforeend', '<img src="x" onerror="console.log(\'실행됨\')">');
```

개발 서버(`localhost:5173`)에서는 "실행됨"이 출력되지만, `localhost:8080`에서는 출력되지 않고 CSP 위반 메시지가 나타납니다. 8장의 XSS 실습에서 본 공격 코드가 운영 환경에서는 실행되지 않는다는 뜻입니다.

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

### 정리

- 운영 환경은 Vite 개발 서버가 아니라 빌드 결과물을 Nginx 같은 웹 서버로 제공합니다.
- Nginx가 정적 파일 제공과 `/api/` 리버스 프록시를 함께 맡으면 화면과 API가 같은 출처가 되어 CORS가 필요 없습니다.
- SPA는 `try_files`로 없는 경로에 `index.html`을 돌려줘야 새로고침과 직접 접속이 동작합니다.
- 멀티 스테이지 빌드, `npm ci`, root가 아닌 사용자 실행으로 작고 재현 가능하며 안전한 이미지를 만듭니다.
- 프록시 뒤의 백엔드는 신뢰할 프록시를 지정한 뒤 `X-Forwarded-For`를 사용해야 합니다.

---

## 11장. 종합 점검과 확장 과제

### 학습 목표

- 완성한 애플리케이션을 사용자, 관리자, 운영자 관점의 시나리오로 처음부터 끝까지 점검합니다.
- 기능, 보안, 관제, 배포 점검표로 빠진 부분을 찾아 보완합니다.
- 자주 만나는 문제의 원인을 증상으로부터 찾아냅니다.
- 확장 과제로 학습한 내용을 스스로 응용합니다.

### 11.1 종합 시나리오

10장의 통합 환경(`http://localhost:8080`)에서 다음 시나리오를 처음부터 끝까지 수행합니다. 각 단계에서 기대 결과와 다르면 해당 장으로 돌아가 원인을 찾습니다.

| 단계 | 역할 | 동작 | 관련 장 |
|---|---|---|---|
| 1 | 방문자 | 로그인 없이 도서를 검색하고, 가격 높은 순으로 정렬한 뒤 2쪽으로 이동 | 5장 |
| 2 | 방문자 | 2쪽 주소를 복사해 새 탭에서 열기 (같은 결과) | 5장, 10장 |
| 3 | 방문자 | 도서 상세에서 "로그인 후 사용" 안내 확인, 주소창에 `/books/new` 입력 | 6장 |
| 4 | 사용자 | 로그인 화면으로 이동된 상태에서 회원가입, 로그인 후 원래 가려던 `/books/new`로 돌아옴 | 6장 |
| 5 | 사용자 | 도서 등록, 표지 업로드, 가격 수정 | 7장 |
| 6 | 사용자 | 도서 3권 대여, 4번째 대여 시도(거절), 1권 반납 | 7장 |
| 7 | 사용자 | 새로고침 후에도 로그인 유지, 로그아웃 | 6장 |
| 8 | 관리자 | 로그인 후 대시보드 확인, 사용자가 등록한 도서 수정(성공) | 6장, 9장 |
| 9 | 운영자 | DB 중지와 재시작으로 장애 표시 확인, 로그 파일 분석 | 9장 |
| 10 | 점검자 | 응답 헤더, CSP 차단, 의존성 점검 결과 확인 | 8장, 10장 |

### 11.2 점검표

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

### 11.3 문제 해결 가이드

| 증상 | 가능한 원인 | 확인 방법과 해결 |
|---|---|---|
| Console에 "blocked by CORS policy" | 백엔드 `CORS_ORIGINS`에 현재 출처가 없음 | 주소창의 출처(`localhost`인지 `127.0.0.1`인지, 포트)를 확인하고 백엔드에 등록 (3장) |
| 화면에 "서버에 연결할 수 없습니다." | 백엔드 중지, 주소 오류, CORS 차단 | `curl http://127.0.0.1:8000/health`, `.env.development`의 주소, Console의 CORS 메시지 (4장) |
| 환경 변수를 바꿨는데 반영되지 않음 | 개발 서버가 시작할 때만 읽음 | 개발 서버 재시작, 운영은 이미지 재빌드 (4장, 10장) |
| 로그인 요청이 422 | JSON으로 보냄 | `URLSearchParams`로 폼 형식 전송 (4장, 6장) |
| 표지 업로드가 422 | `Content-Type`을 직접 지정, 필드 이름이 `file`이 아님 | `FormData`를 그대로 넘기고 필드 이름 확인 (4장, 7장) |
| 새로고침하면 로그아웃됨 | 리프레시 토큰 미저장, 재발급 실패 | Session Storage 값과 `refresh` 요청 결과 확인 (6장) |
| 재발급 요청이 계속 반복됨 | 재발급 요청이 인터셉터를 거침, 재시도 표시 누락 | 기본 `axios`로 재발급, `_retried` 확인 (6장) |
| 개발 중 같은 요청이 두 번 보임 | `StrictMode`의 의도된 동작 | 첫 요청이 취소되는지 확인 (2장, 4장) |
| 목록에 이전 검색 결과가 잠깐 덮어씀 | 이전 요청 미취소 | 이펙트 정리 함수에서 `abort()` (4장) |
| 대여 시각이 9시간 어긋남 | 시간대 없는 UTC 문자열 | `Z`를 붙여 해석 (7장) |
| 차트가 그려지지 않거나 높이가 0 | `ResponsiveContainer`의 부모 크기 없음 | `height` 지정, 부모 요소의 너비 확인 (9장) |
| 운영에서 새로고침하면 404 | SPA 대체 응답 누락 | `try_files ... /index.html` (10장) |

### 11.4 확장 과제

학습한 내용을 응용해 다음 과제에 도전합니다. 난이도 순서로 배치했습니다.

1. **저자 관리 화면.** 관리자 전용으로 저자 목록과 등록 화면을 만듭니다. `POST /authors`의 409 `DUPLICATE_AUTHOR`, 일반 사용자의 403을 처리합니다. 저자 삭제(`DELETE /authors/{author_id}`)에서 도서가 남아 있으면 409 `AUTHOR_HAS_BOOKS`를 안내합니다.
2. **저자별 도서 목록.** 도서 상세의 저자 이름을 누르면 `GET /authors/{author_id}/books` 결과를 보여 주는 화면으로 이동합니다.
3. **표지 미리보기.** 업로드 전에 `URL.createObjectURL(file)`로 고른 이미지를 미리 보여 주고, 화면을 떠날 때 `URL.revokeObjectURL`로 정리합니다.
4. **대시보드 기간 필터.** 로그 분석에 시작, 끝 시각 필터를 추가하고, 선택한 구간의 지표만 다시 계산합니다. 필터는 차트 위 한 줄에 배치합니다.
5. **대시보드 경보.** 오류율이나 p95 응답 시간이 기준값을 넘으면 KPI 카드를 주의 상태로 표시하고, 기준값을 화면에서 바꿀 수 있게 합니다. 일시적인 튐에 경보가 울리지 않도록 "연속 3회 초과" 같은 조건을 설계합니다.
6. **서버 상태 관리 라이브러리.** TanStack Query를 도입해 4.9의 반복 코드(로딩, 오류, 취소)를 대체하고, 대여 후 목록을 자동으로 다시 불러오도록 캐시 무효화를 적용합니다.
7. **HttpOnly 쿠키 기반 리프레시 토큰.** 백엔드가 리프레시 토큰을 `HttpOnly; Secure; SameSite=Strict` 쿠키로 발급하고, `/auth/refresh`가 쿠키에서 토큰을 읽도록 바꿉니다. 프론트엔드는 `withCredentials`를 설정하고 `sessionStorage` 저장을 제거합니다. 백엔드 CORS의 `allow_credentials` 설정과 CSRF 대책을 함께 설계합니다(8장).
8. **통계 API와 Grafana.** 백엔드에 도서, 대여 현황 통계 API를 추가해 대시보드에 업무 지표를 늘리고, 같은 데이터를 Grafana의 PostgreSQL 데이터 소스로 연결해 직접 만든 대시보드와 비교합니다.

### 11.5 과정을 마치며

이 과정에서는 백엔드 과정의 도서 관리 API를 실제 사용자가 쓰는 화면으로 완성했습니다. JSON과 HTTP의 기초에서 출발해, 브라우저가 지키는 출처의 규칙을 이해하고, 인증과 쓰기 기능을 구현한 뒤, 보안 대책과 관제 대시보드를 더하고, 마지막으로 컨테이너로 묶어 운영 형태로 실행했습니다.

프론트엔드와 백엔드는 서로의 규칙을 알 때 가장 잘 맞물립니다. 화면의 검증은 백엔드의 규칙을 따라야 하고, 화면의 권한 처리는 백엔드의 권한 표를 반영해야 하며, CORS와 프록시는 두 쪽의 설정이 함께 맞아야 동작합니다. 앞으로 새 API를 연결할 때도 0.6처럼 API 명세를 먼저 정리하고, 이 과정에서 만든 계층(API 함수, 인터셉터, 화면)에 맞춰 차근차근 확장해 나가기를 권합니다.
