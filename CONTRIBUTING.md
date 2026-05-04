# Contributing to KumiUI

Thank you for your interest in contributing!  
KumiUI is a design system for everyone in our organisation.  
This guide explains how to propose changes and have them accepted.

## How to contribute

### 1. Proposing a new component or token change
- Open a **Discussion** in the GitHub repository first.
- Describe the use case and why the existing components/tokens cannot meet it.
- Attach screenshots or Figma links if relevant.
- A core team member will review and approve or request changes.

### 2. Creating a pull request
- Once approved, create a branch (`feature/my-component`).
- Write the component using the existing token layer (`var(--color-...)`).
- Add a Storybook story (`Button.stories.tsx`).
- Add unit tests covering all variants and interactions.
- Run `pnpm test` and `pnpm build` from the root.
- Create a **changeset** with `pnpm changeset` (describe your change).
- Open a PR against `main`. The CI will check your build and tests.

### 3. Review process
- At least one core team member reviews your PR.
- They’ll check:
  - Code quality and accessibility
  - Usage of design tokens (no hard‑coded values)
  - Tests coverage
  - Storybook documentation
- Feedback must be addressed before merging.

## Breaking changes
- If your change removes a prop, renames an export, or alters default behavior, mark it as a **major** change in the changeset.
- The release will generate a clear changelog and a migration guide placeholder.

## Code of conduct
- Be respectful, constructive, and inclusive.
- Everyone is welcome.

## Questions?
- Join the #kumiui-design-system Slack channel (if internal).
- Or open a Discussion on GitHub.s