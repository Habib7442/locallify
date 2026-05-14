# AI Workflow Rules

This project follows a **Spec-Driven, Incremental Build** approach. The AI Agent must adhere to these rules to maintain codebase integrity.

## Core Rules
1. **Context First:** Read the context files in `context/` before starting any new unit.
2. **Spec-Driven:** Never implement a feature without first creating or reviewing a specific Unit Spec in `context/specs/`.
3. **Atomic Changes:** Work on one unit at a time. Do not make speculative changes to unrelated files.
4. **Verification:** Run the verification checklist at the end of every unit before moving to the next.
5. **Sync:** Update `context/progress-tracker.md` after every meaningful implementation.

## Missing Requirements
- If a requirement is missing or ambiguous (e.g., "how should this button look on mobile?"), refer to `ui-context.md`.
- If still unclear, **ask the user** instead of guessing.

## Scoping Rules
- **No Over-Engineering:** Build exactly what is in the spec. Do not add "nice-to-have" features unless requested.
- **Refactoring:** If refactoring is needed to implement a unit, make it a separate step and document it.

## Communication
- Provide a summary of work at the end of each session.
- Highlight any architectural decisions made during the build.
