module.exports = {
    "/post": {
        post: {
            tags: ["Post"],
            summary: "Create a post in a group section",
            description: "Create a post in a group section",
            operationId: "createPost",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/requestBodies/CreatePost"
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for create post",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: "Posted successfully",
                                    post: {
                                        $ref: "#/components/schemas/Post"
                                    },
                                }
                            }
                        }
                    }
                },
                "422": {
                    description: "Validation error response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "message": {
                                        "type": "string",
                                        "example": "Validation error!"
                                    },
                                    "errors": {
                                        "type": "object",
                                        "properties": {
                                            "meta.slug": {
                                                "type": "array",
                                                "items": {
                                                    "type": "string",
                                                    "example": "Slug already taken"
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
    },
}