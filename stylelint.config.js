/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
    },
};
