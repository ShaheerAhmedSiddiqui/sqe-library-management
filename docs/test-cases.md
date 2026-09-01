# GradeBook Test Cases

## Test Case Overview

The following test cases verify the functional requirements of the GradeBook module. The tests cover valid input, invalid input, average calculation, boundary values, student identification, name handling, and grade conversion requirements.

| ID     | Title                                   | Requirement | Preconditions                                                                              | Steps                                                                                                                            | Expected                                                                                                         | Priority | Type                  |
| ------ | --------------------------------------- | ----------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------- | --------------------- |
| TC-001 | Accept valid numeric score              | REQ-1       | A `Student` object exists with an empty scores list.                                       | 1. Create a `Student` object.<br>2. Call `student.addScore(85)`.                                                                 | The score `85` is added to the student's scores list and no exception is raised.                                 | High     | Functional            |
| TC-002 | Reject negative score                   | REQ-2       | A `Student` object exists with an empty scores list.                                       | 1. Call `student.addScore(-5)`.                                                                                                  | A `RangeError` is raised and the scores list remains unchanged.                                                  | High     | Negative / Functional |
| TC-003 | Reject non-numeric score                | REQ-3       | A `Student` object exists with an empty scores list.                                       | 1. Call `student.addScore("85")`.                                                                                                | A `TypeError` is raised and the invalid value is not added to the scores list.                                   | High     | Negative / Functional |
| TC-004 | Calculate average with multiple scores  | REQ-4       | A `Student` object exists with an empty scores list.                                       | 1. Add scores `80`, `90`, and `70`.<br>2. Call `student.average()`.                                                              | The method returns `80`.                                                                                         | High     | Functional            |
| TC-005 | Calculate average with empty score list | REQ-5       | A `Student` object exists and has no scores.                                               | 1. Call `student.average()`.                                                                                                     | The method returns `0.0`.                                                                                        | Medium   | Negative / Functional |
| TC-006 | Calculate average with a single score   | REQ-4       | A `Student` object exists with an empty scores list.                                       | 1. Add score `75`.<br>2. Call `student.average()`.                                                                               | The method returns `75`.                                                                                         | Medium   | Functional            |
| TC-007 | Reject duplicate roll number            | REQ-6       | The GradeBook supports multiple students and roll numbers are expected to be unique.       | 1. Create a student with roll number `101`.<br>2. Attempt to create another student with roll number `101`.                      | The second student is rejected because the roll number already exists.                                           | High     | Negative / Functional |
| TC-008 | Handle student names case-insensitively | REQ-7       | Student name handling functionality is available.                                          | 1. Create or search for a student using the name `Ali`.<br>2. Perform the same operation using `ali`.<br>3. Compare the results. | `Ali` and `ali` are treated as the same name for case-insensitive operations.                                    | Medium   | Functional            |
| TC-009 | Accept maximum score boundary           | REQ-8       | A `Student` object exists with an empty scores list.                                       | 1. Call `student.addScore(100)`.                                                                                                 | The score `100` is accepted and added to the scores list without an exception.                                   | High     | Boundary / Functional |
| TC-010 | Accept minimum score boundary           | REQ-8       | A `Student` object exists with an empty scores list.                                       | 1. Call `student.addScore(0)`.                                                                                                   | The score `0` is accepted and added to the scores list without an exception.                                     | High     | Boundary / Functional |
| TC-011 | Convert mid-range score to grade letter | REQ-9       | Grade-letter conversion functionality is available and the grading scale is defined.       | 1. Provide a mid-range score/average of `75`.<br>2. Request its grade letter.                                                    | The system returns the grade letter defined for a score of `75` according to the project's grading scale.        | Medium   | Functional            |
| TC-012 | Convert score at grade boundary         | REQ-9       | Grade-letter conversion functionality is available and the grading boundaries are defined. | 1. Provide a score at a grade boundary, such as `80`.<br>2. Request its grade letter.                                            | The system returns the correct grade letter for the specified boundary according to the project's grading scale. | High     | Boundary / Functional |

## Requirements Used

| Requirement ID | Requirement                                                                              |
| -------------- | ---------------------------------------------------------------------------------------- |
| REQ-1          | The system shall accept valid numeric scores.                                            |
| REQ-2          | The system shall reject negative scores.                                                 |
| REQ-3          | The system shall reject non-numeric scores.                                              |
| REQ-4          | The system shall calculate the average of stored scores correctly.                       |
| REQ-5          | The system shall return `0.0` when a student has no scores.                              |
| REQ-6          | The system shall reject duplicate roll numbers.                                          |
| REQ-7          | The system shall handle student names case-insensitively.                                |
| REQ-8          | The system shall accept valid score boundary values from `0` through `100`.              |
| REQ-9          | The system shall convert scores to grade letters according to the defined grading scale. |




# Test Case Record
### Manualy Execution of Test Cases

| ID     | Title                        | Requirement | Preconditions  | Steps                  | Expected      | Priority | Type       | Result | Execution Note                                 | GitHub Issue |
| ------ | ---------------------------- | ----------- | -------------- | ---------------------- | ------------- | -------- | ---------- | ------ | ---------------------------------------------- | ------------ |
| TC-001 | Add valid score              | R1          | Student exists | Add 85                 | Score added   | High     | Functional | PASS   | Valid numeric score 85 was successfully added. | N/A          |
| TC-002 | Reject negative score        | R2          | Student exists | Add -5                 | RangeError    | High     | Negative   | PASS   | Negative score was rejected.                   | N/A          |
| TC-003 | Reject non-numeric score     | R3          | Student exists | Add `"85"`             | TypeError     | High     | Negative   | PASS   | Non-numeric score was rejected.                | N/A          |
| TC-004 | Average with multiple scores | R4          | Scores exist   | Add 80, 90, 70         | Average = 80  | High     | Functional | PASS   | Average was correctly calculated.              | N/A          |
| TC-005 | Average empty list           | R5          | No scores      | Call average           | 0             | Medium   | Boundary   | PASS   | Empty list returned 0.                         | N/A          |
| TC-006 | Average single score         | R6          | Student exists | Add 75                 | Average = 75  | Medium   | Functional | PASS   | Single score average was correct.              | N/A          |
| TC-007 | Duplicate roll number        | R7          | Student exists | Add duplicate roll     | Error         | High     | Negative   | PASS   | Duplicate roll number was rejected.            | N/A          |
| TC-008 | Case-insensitive name        | R8          | Student exists | Search different cases | Student found | Medium   | Functional | PASS   | Case-insensitive search worked.                | N/A          |
| TC-009 | Maximum score                | R9          | Student exists | Add 100                | Accepted      | High     | Boundary   | Fail   | Score 100 was not accepted.                        | N/A          |
| TC-010 | Minimum score                | R10         | Student exists | Add 0                  | Accepted      | High     | Boundary   | PASS   | Score 0 was accepted.                          | N/A          |
| TC-011 | Grade mid-range              | R11         | Student exists | Add 75                 | Grade C       | Medium   | Functional | PASS   | Score 75 returned C.                           | N/A          |
| TC-012 | Grade boundary               | R12         | Student exists | Add 80                 | Grade B       | High     | Boundary   | PASS   | Score 80 returned B.                           | N/A          |



# Execution Summary

## Test Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 12 |
| Passed | 11 |
| Failed | 1 |
| Blocked | 0 |
| Pass Rate | 100% |

### Execution Status

All planned test cases were executed manually using the Node.js interactive shell. The results were compared with the expected results defined for each test case. No Critical defects were identified during execution.