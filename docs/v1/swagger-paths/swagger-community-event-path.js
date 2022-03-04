module.exports = {
    "/community/{communityId}/event": {
        post: {
            tags: ["Community Event"],
            summary: "Create an event in community",
            operationId: "createCommunityEvent",
            parameters: [{
                name: "communityId",
                in: "path",
                description: "Community id",
                required: true,
                type: "string"
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "ref",
                            $ref: "#/components/requestBodies/CreateCommunityEvent"
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Community event created successfully"
                                    },
                                    event: {
                                        type: "ref",
                                        $ref: "#/components/schemas/CommunityEvent"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/community/{communityId}/event/{eventId}/invite": {
        post: {
            tags: ["Community Event"],
            summary: "Invite sections to an event",
            operationId: "inviteSectionsToCommunityEvent",
            parameters: [{
                name: "communityId",
                in: "path",
                description: "Community id",
                required: true,
                type: "string"
            }, {
                name: "eventId",
                in: "path",
                description: "Event id",
                required: true,
                type: "string"
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "ref",
                            $ref: "#/components/requestBodies/InviteSectionsToCommunity"
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Community event created successfully"
                                    },
                                    event: {
                                        type: "ref",
                                        $ref: "#/components/schemas/CommunityEvent"
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