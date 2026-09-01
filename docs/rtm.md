# GradeBook Requirements Traceability Matrix

## 1. Purpose

The Requirements Traceability Matrix (RTM) maps each GradeBook requirement to one or more test cases. It ensures that every defined requirement has test coverage and helps identify requirements that have not been tested. Each requirement is linked to the test case IDs defined in `docs/test-cases.md`.

## 2. Requirements Traceability Matrix

| Requirement ID | Requirement                                                                              | Linked Test Case(s) | Coverage Status |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------- | --------------- |
| REQ-1          | The system shall accept valid numeric scores.                                            | TC-001              | ✅ Covered       |
| REQ-2          | The system shall reject negative and non-numeric scores.                                 | TC-002, TC-003      | ✅ Covered       |
| REQ-3          | The system shall correctly calculate the average of stored scores.                       | TC-004, TC-006      | ✅ Covered       |
| REQ-4          | The system shall return `0.0` when no scores are available.                              | TC-005              | ✅ Covered       |
| REQ-5          | The system shall reject duplicate roll numbers.                                          | TC-007              | ✅ Covered       |
| REQ-6          | The system shall handle student names case-insensitively.                                | TC-008              | ✅ Covered       |
| REQ-7          | The system shall accept valid score boundary values from `0` through `100`.              | TC-009, TC-010      | ✅ Covered       |
| REQ-8          | The system shall convert scores to grade letters according to the defined grading scale. | TC-011, TC-012      | ✅ Covered       |

## 3. Traceability Analysis

All eight requirements have at least one linked test case. Therefore, there are currently no requirements with zero test coverage.

The requirements with multiple test cases provide coverage for different scenarios. For example, REQ-2 is tested using both negative and non-numeric inputs, while REQ-7 is tested using both minimum and maximum score boundaries.

## 4. Coverage Summary

| Metric                             | Result |
| ---------------------------------- | -----: |
| Total Requirements                 |      8 |
| Requirements with Test Coverage    |      8 |
| Requirements without Test Coverage |      0 |
| Total Test Cases                   |     12 |
| Requirements Coverage              |   100% |

## 5. Notes

The RTM confirms that all defined requirements are associated with at least one test case. Requirement coverage does not mean that all tests will necessarily pass during execution. The actual implementation will be evaluated during Task 4, and any failed or blocked test cases will be recorded in the execution results and investigated through the defect management process.
