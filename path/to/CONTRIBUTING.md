# Contributing

We welcome contributions from the community! Please follow these guidelines:

- **Update the CHANGELOG**: After each merge to `main`, add an entry to the `CHANGELOG.md` file under the `Unreleased` section for the current version. When a new version is tagged, move that entry into the appropriate versioned section (e.g., `[vX.Y.Z]`) and update the version number in the header.
- **Follow SemVer**: Ensure version numbers reflect meaningful changes (major, minor, patch).
- **Keep it concise**: Focus on what changed and why.

For detailed instructions on releasing, see the [release process](#release-process).

## Release Process

1. Make changes and commit to `main`.
2. Push to `main`.
3. Create a new Git tag (e.g., `v1.0.0`) and push it.
4. Update the `CHANGELOG.md`:
   - Add an entry under `Unreleased` for the current changes.
   - Move the previous `Unreleased` content into the new versioned section.
   - Update the version number in the header.
5. Push the updated `CHANGELOG.md`.
6. Create a GitHub Release from the new tag.

This ensures release notes are always visible both in Git history and on GitHub Releases.