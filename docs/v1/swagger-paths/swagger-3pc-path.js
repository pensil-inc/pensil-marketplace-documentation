module.exports = {
    "/3pc/generate-user-token": {
        post: {
            tags: ["Third Party APIs for Community"],
            summary: "Generate community user token",
            operationId: "thirdPartyAPICGenerateUserToken",
            security: [{
                clientId: [],
                clientSecret: [],
                communityId: []
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    example: "hachacha@gmail.com",
                                    required: true
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for generate community user token",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "user": {
                                        $ref: "#/components/schemas/UserLogin"
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    description: "User not found",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "message": {
                                        type: "string",
                                        example: "User not found!"
                                    },
                                    "error": {
                                        type: "object",
                                        properties: {}
                                    }
                                }
                            }
                        }
                    }
                },
                "401": {
                    description: "Unauthenticated user response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "message": {
                                        type: "string",
                                        example: "Unauthenticated!"
                                    },
                                    "error": {
                                        type: "string",
                                        example: "clientid, clientsecret and communityid are required in header!"
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