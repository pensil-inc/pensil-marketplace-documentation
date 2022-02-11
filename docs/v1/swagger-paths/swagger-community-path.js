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
    "/community/{communityId}/groups": {
        get: {
            tags: ["Community"],
            summary: "Get groups of a community",
            operationId: "getGroupsOfCommunity",
            parameters: [{
                name: "communityId",
                in: "path",
                description: "Community id",
                required: true,
                type: "string"
            }],
            responses: {
                "200": {
                    description: "Groups of a community",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Community Groups"
                                    },
                                    groups: {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/Group"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}