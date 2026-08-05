# Releasing

The package version is changed in a reviewed pull request. Publishing is deliberately separate from ordinary pushes to `main`.

## One-time npm setup

Configure an npm trusted publisher for:

- Repository: `montasim/mime-types-lite`
- Workflow: `release.yml`
- Environment: `npm`

Trusted publishing allows GitHub Actions to publish with short-lived OIDC credentials and provenance instead of a long-lived npm token.

## Publish a version

1. Merge the release change after CI passes.
2. Confirm `packages/mime-types-lite/package.json` contains the intended version and that the version is not already published on npm.
3. Create and publish a GitHub release tagged `vX.Y.Z` from `main`, matching the package version.
4. Watch the **Publish package** workflow.
5. Verify the installed artifact:

    ```bash
    npm view mime-types-lite@X.Y.Z
    npm install mime-types-lite@X.Y.Z
    ```

For a retry that does not require recreating the release, run the workflow manually from `main`. npm versions are immutable, so a version that reached the registry cannot be republished.
