# Nest.js-loggerProject
로그가 왜 중요하고 어떻게 구성되어 있는지 궁금해, Nest.js에서 기본적으로 제공하는 **내장 Logger를 직접 만들어 본 프로젝트**

- 팀원 : 1명
- 사용 언어 및 프레임워크 : TypeScript, Nest.js
<br/>

# 💡 성장한 점
1. 325/24로 관리하는 시스템에서 **로그가 중요한 이유**를 깨닫게 되었습니다.
로그는 시스템의 동작 상태를 추적하고 이해하는데 핵심적인 역할을 하며, 장애 대응과 문제 해결에 매우 중요합니다.

2. 로그가 많을수록 좋은 것이 아니라, **로그 레벨로 구분**해 알람 경보 수준을 구분해야 한다는 것을 알게 되었습니다.
모든 로그를 기록하는 것은 시스템 성능에 부담이 될 수 있으므로, 중요도에 따라 로그 레벨을 설정하여 필요한 정보만 기록하는 것이 효과적입니다.

3. **로그 버퍼를 이용**해 실제로 로깅이 발생하는 시점을 조절할 수 있고, 로깅 횟수를 줄이고 로깅 작업의 오버헤드를 최소화할 수 있다는 것을 알게 되었습니다.
이로 인해 로깅이 시스템 성능에 미치는 영향을 최소화하면서도 필요한 정보를 적절히 기록할 수 있습니다.
<br/>

- 로그 관리 및 개선은 시스템 안정성, 생산성 향상, 보안 강화 등 다양한 측면에서 개발자와 운영팀에게 중요한 도구 및 프로세스임을 깨닫게 되었습니다. 
- 개발자는 선택하는 사람이고, 어떤 프레임워크, 패키지, 데이터베이스 등을 선택하여 자신이 생각한 **최적의 방법으로 개발하는 것이 중요**하다는 것을 일깨워 준 프로젝트였습니다.
<br/>

# 🖋 블로그 정리
**[로깅은 왜 중요하고 어떻게 찍히는 것일까? Nest.js 내장 로거를 직접 만들어보며 알아보자!](https://velog.io/@cheesechoux/Nest.js-%EB%A1%9C%EA%B9%85%EC%9D%80-%EC%99%9C-%EC%A4%91%EC%9A%94%ED%95%98%EA%B3%A0-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%B0%8D%ED%9E%88%EB%8A%94-%EA%B1%B8%EA%B9%8C-%EB%82%B4%EC%9E%A5-%EB%A1%9C%EA%B1%B0-%EB%9C%AF%EC%96%B4%EB%B3%B4%EA%B8%B0-%EC%A7%81%EC%A0%91-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0)**
<br/>
