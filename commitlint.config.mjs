export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-empty': [2, 'never'],
        'type-empty': [2, 'never'],
        'body-leading-blank': [1, 'always'],
        // Allow "chore(release): x.x.x" commits
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'build',
                'ci',
                'chore',
            ],
        ],
        'scope-enum': [2, 'always', ['release']],
    },
};
