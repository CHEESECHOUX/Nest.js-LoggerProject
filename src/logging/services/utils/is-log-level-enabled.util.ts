/*
로깅 시스템에서는 로깅 레벨을 사용해 로그 메시지를 분류하고 필터링함

로깅 레벨이 활성화 되어 있다
= 해당 로깅 레벨에 대한 로그 메시지가 적절하게 처리되는 상태
= 해당 로깅 레벨에 대한 로그 메시지가 설정된 로깅 레벨 이상으로 설정 되어 있어야 로그가 기록되거나 처리된다는 의미

로깅 시스템은 로깅 레벨에 따라 어떤 종류의 로그를 활성화하고 어떤 종류의 로그를 무시할지 결정함

// targetLevel: 비교 대상 로깅 레벨(logLevels 배열에 포함되어 있는지 확인하려는 값)
// logLevels: 활성화된 로깅 레벨의 배열
*/

import { LogLevel } from '@nestjs/common';

const LOG_LEVEL_VALUES: Record<LogLevel, number> = {
  // LogLevel에 대해 숫자 값을 할당해 로깅 레벨을 순서대로 나타냄
  verbose: 0,
  debug: 1,
  log: 2,
  warn: 3,
  error: 4,
};

// isLogLevelEnabled: 주어진 비교 대상 로깅 레벨(targetLevel)이 활성화되어 있는지 확인하는 함수
export function isLogLevelEnabled(targetLevel: LogLevel, logLevels: LogLevel[] | undefined): boolean {
  if (!logLevels || (Array.isArray(logLevels) && logLevels?.length === 0)) {
    return false;
  }
  if (logLevels.includes(targetLevel)) {
    // targetLevel이 포함되어 있다 = 로깅 레벨이 활성화 되어 있다 = 해당 로깅 레벨에 대한 로그 메시지가 기록되거나 처리되어야 한다
    return true;
  }
  const highestLogLevelValue = logLevels.map((level) => LOG_LEVEL_VALUES[level]).sort((a, b) => b - a)?.[0];

  const targetLevelValue = LOG_LEVEL_VALUES[targetLevel];
  return targetLevelValue >= highestLogLevelValue;
}

/*
targetLevelValue가 highestLogLevelValue 보다 크거나 같음 = 비교 대상 로깅 레벨이 활성화된 로깅 레벨보다 우선순위가 높거나 같다
=> 대상 로깅 레벨은 활성화되어 있는 것으로 간주. true 반환

targetLevelValue가 highestLogLevelValue 보다 작음 = 비교 대상 로깅 레벨은 활성화된 로깅 레벨보다 우선순위가 낮다
=> 대상 로깅 레벨은 활성화되지 않은 것으로 간주. false 반환

//
로깅 레벨을 비교해 
비교 대상 로깅 레벨이 최소한의 로깅 레벨보다 우선순위가 높은지 확인하는 것

더 낮은 우선순위의 로깅 레벨을 필터링하고 필요한 로깅 작업을 수행할 수 있음!
*/
