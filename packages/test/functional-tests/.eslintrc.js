/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = {
    "extends": [
        require.resolve("@fluidframework/eslint-config-fluid/minimal"), "prettier"
    ],
    "rules": {
        "import/no-nodejs-modules": "off",
    }
}
