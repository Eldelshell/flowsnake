module.exports = {
    verbose: false,
    testMatch: [
        "**/__tests__/**/*.js"
        // "**/__tests__/**/units/distance/Metric.js"
    ],
    testPathIgnorePatterns: [
        "/node_modules",
        // "/__tests__/*.js",
        "/__tests__/units/TestCase*"
    ]
}
