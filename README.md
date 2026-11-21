# FastAPI로 배우는 REST API 백엔드 개발 - 교안

9일(63시간) 과정의 학생용 HTML 교안입니다. 구성과 시간 배분은 `curriculum.md`(기획안)를 따릅니다.

## 보는 방법

`docs/index.html`을 브라우저로 열면 과정 전체 목차가 나옵니다. 서버 없이 파일만으로 열립니다. 글꼴은 인터넷에 연결되어 있으면 IBM Plex Sans KR을, 연결되어 있지 않으면 운영체제 기본 글꼴을 씁니다.

## 폴더 구조

```
fastapi-rest-api/
├── README.md
├── curriculum.md          확정한 9일 기획안
├── pages.csv              306개 페이지 목록과 작성 상태(todo, draft, review, done)
├── docs/                  HTML 교안
│   ├── index.html         과정 목차
│   ├── assets/            공통 스타일, 스크립트, 공통 이미지
│   ├── s1/                섹션 폴더(index.html은 섹션 목차)
│   │   ├── p1/            파트 폴더: s1-p1-01.html ~ s1-p1-05.html, img/
│   │   └── ...
│   ├── s18/
│   └── appendix/          부록 A~G(기획안의 11. 부록에서 자동 생성)
├── labs/                  실습 자료 원본
│   ├── security-lab/      S11-P38 진단용 예제 API(빌드할 때 docs/assets/files/security-lab.zip으로 압축)
│   ├── security-lab-solution/  S11-P39 조치 완료 코드(강사용, 교안 본문에 실림)
│   ├── project-starter/   S17-P58 미니 프로젝트 시작 템플릿(project-starter.zip으로 압축)
│   ├── project-example/   S17 스터디 모임 예시 프로젝트(project-example.zip으로 압축)
│   └── templates/         내려받아 채워 쓰는 양식(Markdown, docs/assets/files로 복사)
├── templates/             페이지 유형별 틀(주요 개념, 실습, 스스로 묻고 답하기, 정리)
└── build/                 교안 생성 도구
```

## 파일명 규칙

| 대상 | 규칙 | 예시 |
|---|---|---|
| 교안 페이지 | 페이지 코드 소문자 + .html | s13-p46-03.html |
| 그림 | 페이지 코드-fig두자리 | s13-p46-02-fig01.svg |
| 화면 캡처 | 페이지 코드-cap두자리 | s12-p40-03-cap02.png |

파일명에는 영문 소문자, 숫자, 하이픈만 씁니다.

## 교안을 이어서 작성하는 방법

상단 막대, 시간 막대, 이전과 다음 링크, 목차는 기획안을 읽어 자동으로 만듭니다. 새 섹션을 쓸 때는 본문만 작성합니다.

1. `build/content_s2.py`처럼 섹션별 파일을 만들고 `PAGES["S2-P5-01"] = """본문 HTML"""` 형식으로 본문을 넣습니다. `build/kit.py`의 도우미(code, term, steps, checklist, qa, quiz, note, warn, table)를 쓰면 같은 모양이 됩니다.
2. `build/build.py` 위쪽의 import와 `CONTENT.update(...)`에 새 파일을 추가합니다.
3. 프로젝트 폴더에서 `python build/build.py`를 실행합니다. docs 폴더를 지우고 다시 만들므로, 직접 넣은 이미지는 build 폴더 안에 따로 두고 복사하도록 관리하세요.

## 문체 규칙

- 학생에게 설명하는 합니다체를 씁니다.
- 연결 어미는 "~하여"보다 "~해"를 씁니다.
- 가운데 점(·)은 쓰지 않고 쉼표나 "와/과"로 풉니다.
- 처음 나오는 용어는 그 자리에서 풀어 씁니다.
- 이모지와 이모티콘은 쓰지 않습니다.

## 명령 실행 환경 규칙

- 1~5일차의 명령은 Windows 명령 프롬프트와 macOS 터미널 기준으로 함께 적습니다.
- 6~9일차에 내 PC에서 실행하는 AWS 명령은 bash 문법입니다. Windows는 Git Bash에서 실행하고, 처음에 `MSYS_NO_PATHCONV=1`을 설정합니다(S12-P40-03).
- bash 문법(`이름=값`, `$(...)`, 줄 끝 `\`, `<<EOF`)이 들어간 명령 블록이 있는 페이지에는 생성 도구가 "Windows에서 실행할 때" 안내를 자동으로 붙입니다. 본문에 이미 Git Bash 안내가 있으면 붙이지 않습니다.

## 생성 도구가 자동으로 처리하는 것

- 본문의 "부록 X"는 `docs/appendix/appendix-x.html` 링크로 바뀝니다. 부록 내용을 고칠 때는 `curriculum.md`의 "11. 부록"을 고칩니다.
- 확인 퀴즈는 보기 순서를 퀴즈 이름에 따라 일정하게 돌려, 정답 위치가 1~4번에 고르게 퍼지게 합니다. 본문에서는 정답 번호를 자연스러운 순서로 적으면 됩니다. 보기나 해설에서 "2번 보기"처럼 보기 번호를 가리키지 않습니다.
- 기획안의 학습 목표(~할 수 있다)와 섹션 목표(~한다)는 화면에서 합니다체로 바뀝니다.

## 강사 준비 사항: 예제 저장소

교안의 실습 페이지는 완성 코드 위치를 "예제 저장소의 pN-done 브랜치"로 안내합니다. 과정 시작 전에 예제 저장소를 만들고 아래 34개 브랜치를 준비해, 첫날 저장소 주소를 알려 줍니다(S1-P1-01). 단계별 코드는 `build/code_s*.py`의 스냅숏과 교안 본문을 기준으로 만듭니다.

p2-done, p3-done, p4-done, p5-done, p6-done, p7-done, p8-done, p9-done, p11-done, p12-done, p13-done, p14-done, p15-done, p16-done, p17-done, p18-done, p19-done, p20-done, p21-done, p22-done, p23-done, p24-done, p25-done, p26-done, p27-done, p28-done, p30-done, p31-done, p32-done, p33-done, p34-done, p35-done, p36-done, p37-done
