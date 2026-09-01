# GradeBook Software Test Plan

## 1. Introduction

This test plan defines the testing approach for the GradeBook module. The purpose of testing is to verify that student score management and average calculation behave according to the defined requirements. The testing will focus on functional behavior, invalid input handling, boundary conditions, and other GradeBook requirements specified for this lab.

## 2. Test Items

The primary test item is the `Student` class implemented in `src/gradebook/gradebook.js`. The following functionality will be considered during testing:

* Student name and roll number storage
* Score storage
* `addScore()` method
* `average()` method
* Score validation
* Student-related requirements specified for the GradeBook module

## 3. Features to be Tested

The following features will be tested:

* Adding valid numeric scores
* Rejecting negative scores
* Rejecting non-numeric scores
* Calculating the average when scores exist
* Handling an empty score list
* Calculating the average for a single score
* Score boundary values of 0 and 100
* Duplicate roll number handling
* Name case-insensitivity
* Grade-letter conversion and boundary behavior

## 4. Features Not to be Tested

Graphical user interface behavior is outside the scope of this lab because the primary focus is testing the GradeBook JavaScript module rather than browser-based user interface functionality. Browser compatibility and visual layout testing will therefore not be performed. Performance testing under large-scale or production workloads is also outside the scope because this project is a small educational GradeBook module.

## 5. Test Approach

Functional testing will be used to verify that GradeBook features produce the expected results. Negative testing will be performed by providing invalid inputs such as negative and non-numeric scores. Boundary testing will verify important score limits, including 0 and 100. Regression testing will be performed if defects are identified and corrected to ensure that existing functionality continues to work.

## 6. Pass/Fail Criteria

Testing will be considered successful when at least 95% of the planned test cases pass. All Critical defects identified during execution must be closed before final completion. Every defined requirement must have at least one linked test case in the Requirements Traceability Matrix. No test case should remain in the Blocked state at final submission unless the missing functionality is formally documented as a project limitation or defect.

## 7. Test Deliverables

The following deliverables will be produced:

* `docs/test-plan.md`
* `docs/test-cases.md`
* `docs/rtm.md`
* Test execution results for all 12 test cases
* GitHub Issues for confirmed failures, when applicable

## 8. Environmental Needs

Testing will be performed on a Windows environment using Node.js to execute the JavaScript GradeBook module. Visual Studio Code will be used for editing the source code and test documentation. Git and GitHub will be used for version control and defect tracking. Test cases will be executed manually using the Node.js command line or JavaScript execution environment.

## 9. Schedule

The planned testing activities follow the laboratory schedule:

| Activity                         | Planned Time |
| -------------------------------- | -----------: |
| Test Plan Preparation            |   60 minutes |
| Test Case Development            |   75 minutes |
| Requirements Traceability Matrix |   30 minutes |
| Manual Test Execution            |   35 minutes |
| **Total**                        |  **3 hours** |

## 10. Risks

Potential risks include defects already present in the GradeBook implementation and differences between the required behavior and the current implementation. Some test cases may depend on functionality that is not currently implemented in the `Student` class. In such cases, the test will be recorded as Failed or Blocked according to the actual observed behavior and a GitHub Issue will be created when a confirmed defect is identified. Changes made during defect correction may also introduce regression defects.
