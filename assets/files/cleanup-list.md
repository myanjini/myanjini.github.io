# AWS 자원 정리 목록(부록 G)

- 작성한 사람:
- Owner 태그 값:
- 작성한 날짜:

"9일차에 씀"이 "아니요"인 자원은 8일차에 지웁니다. 나머지는 과정이 끝나는 날(S18-P63) 아래 순서대로 지웁니다.

| 순서 | 자원 | 이름 또는 ID | 9일차에 씀 | 삭제한 날 | 확인 방법 |
|---|---|---|---|---|---|
| 1 | ALB, 리스너, 대상 그룹 |  |  |  | aws elbv2 describe-load-balancers |
| 2 | EC2 인스턴스(EBS 포함) |  |  |  | aws ec2 describe-instances, describe-volumes |
| 3 | RDS 인스턴스, 수동 스냅샷 |  |  |  | aws rds describe-db-instances, describe-db-snapshots |
| 4 | ECR 저장소와 이미지 |  |  |  | aws ecr describe-repositories |
| 5 | S3 버킷(객체를 비운 뒤) |  |  |  | aws s3 ls |
| 6 | 탄력적 IP(쓴 경우) |  |  |  | aws ec2 describe-addresses |
| 7 | CloudWatch 로그 그룹, 경보, SNS 주제 |  |  |  | aws logs describe-log-groups, aws cloudwatch describe-alarms |
| 8 | Parameter Store 파라미터 |  |  |  | aws ssm describe-parameters |
| 9 | 보안 그룹, 서브넷, 라우팅 테이블, 인터넷 게이트웨이, VPC |  |  |  | aws ec2 describe-vpcs |
| 10 | IAM 역할(EC2, 배포), OIDC 공급자 |  |  |  | aws iam list-roles |
| 11 | 비용 확인 |  |  |  | Billing and Cost Management |
