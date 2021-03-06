module.exports = {
    verbose: false,
    setupTestFrameworkScriptFile: "./__tests__/Setup.js",
    testMatch: [
        // "**/__tests__/**/*.js"
        "**/__tests__/**/calculators/**/*.js",
        "**/__tests__/**/geometry/**/*.js",
        "**/__tests__/**/units/**/*.js",
        "**/__tests__/**/Flowsnake.js"
    ],
    testPathIgnorePatterns: [
        "/node_modules",
        "/__tests__/*.js",
        "/__tests__/Setup.js",
        "/__tests__/units/TestCase*"
    ]
}
