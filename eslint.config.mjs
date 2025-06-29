import {defineConfig, globalIgnores} from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["node_modules/**/*", "dist/**/*"]), {
    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },
}, {
    files: ["**/*.ts"],

    rules: {
        "array-callback-return": ["error", {
            allowImplicit: false,
            checkForEach: false,
        }],

        "constructor-super": "error",
        "no-async-promise-executor": "error",
        "no-console": "error",
        "no-debugger": "error",
        "getter-return": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-constant-condition": "error",
        "no-constructor-return": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-new-symbol": "error",
        "no-obj-calls": "error",
        "no-promise-executor-return": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-undef": "off",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-private-class-members": "error",

        "@typescript-eslint/no-unused-vars": ["error", {
            vars: "all",
            args: "none",
            caughtErrors: "none",
        }],

        "no-unused-vars": "off",

        "no-use-before-define": ["error", {
            functions: true,
            classes: false,
            variables: true,
        }],

        "require-atomic-updates": "error",
        "use-isnan": "error",

        "valid-typeof": ["error", {
            requireStringLiterals: true,
        }],

        "arrow-body-style": "off",
        "block-scoped-var": "error",

        camelcase: ["error", {
            properties: "always",
            ignoreDestructuring: true,
        }],

        "capitalized-comments": ["off", "always", {
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true,
        }],

        "class-methods-use-this": "off",
        complexity: "error",
        "consistent-return": "error",
        curly: ["error", "all"],

        "default-case": ["error", {
            commentPattern: "^skip\\sdefault",
        }],

        "default-case-last": "error",
        "default-param-last": "error",

        "dot-notation": ["error", {
            allowPattern: "^[a-z]+(_[a-z]+)+$",
        }],

        eqeqeq: "error",
        "func-names": ["error", "never"],

        "func-style": ["error", "declaration", {
            allowArrowFunctions: true,
        }],

        "id-denylist": ["error", "err", "e", "cb", "callback"],

        "id-length": ["error", {
            min: 2,
            max: 60,
            exceptions: ["id", "x", "y", "i", "j", "_"],
        }],

        "max-classes-per-file": ["error", 1],
        "max-depth": ["error", 4],

        "max-lines": ["error", {
            max: 500,
            skipComments: true,
        }],

        "max-lines-per-function": ["off", 100],
        "max-params": ["off", 4],
        "new-cap": "off",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",

        "no-confusing-arrow": ["error", {
            allowParens: true,
        }],

        "no-continue": "error",
        "no-delete-var": "error",
        "no-else-return": "error",

        "no-empty": ["error", {
            allowEmptyCatch: true,
        }],

        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-globals": "error",
        "no-inline-comments": "error",
        "no-invalid-this": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-mixed-operators": "error",
        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-negated-condition": "off",
        "no-nested-ternary": "off",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",

        "no-param-reassign": ["error", {
            props: false,
        }],

        "no-plusplus": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",

        "no-restricted-exports": ["error", {
            restrictedNamedExports: [],
        }],

        "no-return-assign": "error",
        "no-return-await": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-sequences": "error",
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-undefined": "off",

        "no-underscore-dangle": ["error", {
            allowAfterThis: true,
        }],

        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "off",
        "no-useless-constructor": "off",
        "no-useless-escape": "error",
        "no-useless-rename": "off",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-with": "error",
        "object-shorthand": ["error", "always"],
        "one-var": "off",
        "one-var-declaration-per-line": ["error", "always"],
        "operator-assignment": "off",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "off",
        "prefer-exponentiation-operator": "error",
        "prefer-named-capture-group": "error",
        "prefer-numeric-literals": "error",

        "prefer-promise-reject-errors": ["error", {
            allowEmptyReject: true,
        }],

        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": ["error", "as-needed"],
        radix: ["error", "as-needed"],
        "require-await": "off",
        "@typescript-eslint/require-await": "off",
        "sort-imports": "off",

        "no-restricted-imports": ["error", {
            patterns: [{
                group: ["**/test", "**/tests"],
                message: "Import is invalid because application is restricted from being used **/test",
            }, {
                group: [
                    "**/ms-banking/",
                    "**/ms-communications/",
                    "**/ms-authentication/",
                    "**/ms-authentication-bo/",
                    "**/bff/",
                    "**/bfb/",
                    "**/ms-user/s",
                ],

                message: "Import is invalid because is restricted from another ms",
            }],
        }],

        imports: "off",
        "sort-keys": "off",
        "sort-vars": "off",

        "spaced-comment": ["error", "always", {
            line: {
                markers: ["/"],
                exceptions: ["-", "+", "*"],
            },

            block: {
                markers: ["!"],
                exceptions: ["*"],
                balanced: true,
            },
        }],

        "symbol-description": "error",
        "vars-on-top": "off",

        yoda: ["error", "never", {
            exceptRange: true,
        }],

        "array-bracket-newline": ["error", "consistent"],
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": ["error", "consistent"],
        "arrow-parens": ["error", "always"],

        "arrow-spacing": ["error", {
            before: true,
            after: true,
        }],

        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs"],
        "comma-dangle": ["error", "always-multiline"],

        "comma-spacing": ["error", {
            before: false,
            after: true,
        }],

        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "dot-location": ["error", "property"],
        "eol-last": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": ["error", "consistent"],
        "implicit-arrow-linebreak": ["error", "beside"],

        indent: ["error", 4, {
            SwitchCase: 1,
        }],

        "jsx-quotes": ["error", "prefer-double"],

        "key-spacing": ["error", {
            beforeColon: false,
            afterColon: true,
        }],

        "keyword-spacing": ["error"],
        "line-comment-position": "off",
        "linebreak-style": "off",
        "lines-around-comment": "off",

        "lines-between-class-members": ["error", "always", {
            exceptAfterSingleLine: true,
        }],

        "max-len": ["error", {
            code: 140,
            ignoreComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],

        "max-statements-per-line": ["error", {
            max: 1,
        }],

        "multiline-ternary": "off",
        "new-parens": "off",

        "newline-per-chained-call": ["error", {
            ignoreChainWithDepth: 2,
        }],

        "no-extra-parens": "off",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
        "no-tabs": "off",
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": ["error", "below"],

        "object-curly-newline": ["error", {
            consistent: true,
        }],

        "object-curly-spacing": ["error", "always", {
            arraysInObjects: false,
            objectsInObjects: true,
        }],

        "object-property-newline": "off",

        "operator-linebreak": ["error", "before", {
            overrides: {
                "+": "after",
            },
        }],

        "padded-blocks": ["error", "never"],
        "padding-line-between-statements": "off",
        quotes: ["error", "single"],
        "rest-spread-spacing": ["error", "never"],
        semi: "off",

        "semi-spacing": ["error", {
            before: false,
            after: true,
        }],

        "semi-style": ["error", "last"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["off", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",

        "switch-colon-spacing": ["error", {
            before: false,
            after: true,
        }],

        "template-curly-spacing": ["error", "never"],
        "wrap-iife": "error",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",

        "@typescript-eslint/no-magic-numbers": ["off", {
            ignoreEnums: true,
            ignoreReadonlyClassProperties: true,
        }],

        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/await-thenable": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-namespace": "off",
    },
}]);
