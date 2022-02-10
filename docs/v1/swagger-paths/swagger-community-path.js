module.exports = {
    "/community/{address}": {
        get: {
            tags: ["Community"],
            summary: "Get community details by address",
            operationId: "getCommunityByAddress",
            parameters: [{
                name: "address",
                in: "path",
                description: "Community address",
                required: true,
                type: "string"
            }],
            responses: {
                "200": {
                    description: "Community details",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Community"
                            }
                        }
                    }
                }
            }
        }
    },
}