# Defect Triage Log

## Sprint

v0.2 — Grade Statistics

## Issue Prioritization

| Rank | Issue                                                     | Severity | Priority | Decision  |
| ---- | --------------------------------------------------------- | -------- | -------- | --------- |
| 1    | #1 — average() crashes when student has no scores         | High     | P1       | Fix       |
| 2    | #3 — GradeBook allows duplicate student roll numbers      | High     | P1       | Fix       |
| 3    | #2 — GradeBook accepts negative student scores            | Medium   | P1       | Fix       |
| 4    | #4 — GradeBook calculates average with incorrect rounding | Medium   | P2       | Won't Fix |
| 5    | #5 — Student name comparison is case-sensitive            | Low      | P3       | Won't Fix |

## Prioritization Rationale

Issue #1 is ranked first because it causes a runtime crash during an important GradeBook operation. Issue #3 is ranked second because duplicate roll numbers can compromise student identification and data integrity. Issue #2 is ranked third because invalid scores can affect grade calculations even though they do not crash the application.

## Severity and Priority Trade-offs

Issue #2 has Medium severity but P1 priority because the application continues running, but invalid scores can directly affect student results and therefore need early attention.

Issue #4 has Medium severity but P2 priority because incorrect rounding affects the accuracy of displayed results but does not prevent the GradeBook from functioning.

## Deferred Issues

Issues #4 and #5 will not be fixed during this sprint. Issue #4 is deferred because its impact is lower than the three selected P1 defects, while Issue #5 has limited impact and is assigned P3 priority.

## Triage Decision

The team will fix Issues #1, #3, and #2 during the current sprint. Issues #4 and #5 are deferred to a future sprint.
