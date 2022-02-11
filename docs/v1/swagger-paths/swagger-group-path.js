module.exports = {
    "/group": {
        // CREATE GROUP
        post: {
            tags: ["Group", "Community"],
            summary: "Create a new group",
            description: "Create a new group",
            operationId: "createGroup",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/requestBodies/CreateGroup"
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for create group",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Group created!"
                                    },
                                    group: {
                                        $ref: "#/components/schemas/Group"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/group/{groupId}": {
        // GET GROUP DETAILS
        get: {
            tags: ["Group"],
            summary: "Get group details",
            description: "Get group details",
            operationId: "getGroupDetail",
            security: [{
                BearerToken: []
            }, {}],
            parameters: [{
                name: "groupId",
                in: "path",
                description: "Group id",
                required: true,
            }],
            responses: {
                "200": {
                    description: "Success Response for get group details",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Group details!"
                                    },
                                    group: {
                                        $ref: "#/components/schemas/Group"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: "Error Response for get group details",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Resource with specific id not found"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        // UPDATE GROUP
        post: {
            tags: ["Group"],
            summary: "Update an existing group",
            description: "Update an existing Group",
            operationId: "updateGroup",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            parameters: [{
                name: "groupId",
                in: "path",
                description: "Group id",
                required: true,
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/requestBodies/UpdateGroup"
                        }
                    }
                },
                description: "Although only name field is required, but all the fields listed in the request body should be sent, otherwise the fields will be removed from the group."
            },
            responses: {
                "200": {
                    description: "Success Response for update group",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Group update!"
                                    },
                                    group: {
                                        $ref: "#/components/schemas/Group"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: "Error Response for update group",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Resource with specific id not found"
                                    }
                                }
                            }
                        }
                    }
                },
                "422": {
                    description: "Validation Error Response for update group",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "errors": {
                                        type: "object",
                                        properties: {
                                            "name": {
                                                type: "array",
                                                items: {
                                                    type: "string",
                                                    example: "The name field is required!"
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
        // DELETE GROUP
        delete: {
            tags: ["Group"],
            summary: "Delete an existing group",
            description: "Delete an existing Group",
            operationId: "deleteGroup",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            parameters: [{
                name: "groupId",
                in: "path",
                description: "Group id",
                required: true,
            }],
            responses: {
                "200": {
                    description: "Success Response for delete group",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Group deleted!"
                                    },
                                    group: {
                                        $ref: "#/components/schemas/Group"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: "Error Response for delete group",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Resource with specific id not found"
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