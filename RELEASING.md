# Releasing

The package version is changed in a reviewed pull request. Publishing is deliberately separate from ordinary pushes to `main`.

## One-time npm setup

Configure an npm trusted publisher for:

- Repository: `montasim/mime-types-lite`
- Workflow: `release.yml`
- Environment: `npm`

Trusted publishing allows GitHub Actions to publish with short-lived OIDC credentials and provenance instead of a long-lived npm token.

## Publish 1.8.0

1. Merge the `v2` branch after CI passes.
2. Confirm `package.json` contains `1.8.0` and `npm view mime-types-lite version` still reports `1.7.5`.
3. Create and publish a GitHub release tagged `v1.8.0` from `main`.
4. Watch the **Publish package** workflow.
5. Verify the installed artifact:

    ```bash
    npm view mime-types-lite@1.8.0
    npm install mime-types-lite@1.8.0
    ```

For a retry that does not require recreating the release, run the workflow manually from `main`. npm versions are immutable, so a version that reached the registry cannot be republished.
