# Software Quality Engineering Workflow

## Development Flow

```text
Idea
  ↓
Issue
  ↓
Branch
  ↓
Pull Request
  ↓
Review
  ↓
Merge
  ↓
CI
  ↓
Release
```

## QA Involvement

### 1. Idea

The development process starts with an idea or requirement. QA can identify possible quality risks, edge cases, and acceptance criteria at this stage.

### 2. Issue

The idea is documented as an issue. QA can check whether the requirements are clear, complete, and testable.

### 3. Branch

A developer creates a separate branch to implement the change. QA can identify the test cases and scenarios that will be required.

### 4. Pull Request

The developer creates a pull request containing the changes. QA can verify that the implementation addresses the requirements and that appropriate tests have been considered.

### 5. Review

The pull request is reviewed before merging. QA can identify defects, missing test cases, edge cases, and other quality concerns.

### 6. Merge

After the required approval and checks are completed, the pull request is merged into `main`. QA ensures that the required quality conditions have been satisfied.

### 7. CI

Continuous Integration automatically runs automated tests and quality checks. QA monitors the results and investigates failures.

### 8. Release

The approved changes are released. QA performs final validation, regression testing, and release verification to ensure that the software is ready for users.

## Summary

QA is involved throughout the software development lifecycle rather than only at the final testing stage. Early QA involvement helps identify requirements, risks, defects, and missing tests before they become expensive to fix.
