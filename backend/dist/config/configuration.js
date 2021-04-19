"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 5000,
    database: {
        uri: process.env.MONGOURI,
    },
});
//# sourceMappingURL=configuration.js.map