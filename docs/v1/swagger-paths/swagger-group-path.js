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
    },
    "/group/{groupId}/members": {
        // GET GROUP DETAILS
        get: {
            tags: ["Group"],
            summary: "Get group members list",
            description: "Get group details",
            operationId: "getGroupMembersList",
            security: [{
                BearerToken: []
            }, {}],
            parameters: [
                {
                    name: "groupId",
                    in: "path",
                    description: "Group id",
                    required: true,
                },
                {
                    name: "tabId",
                    in: "query",
                    description: "Section id (if provided, tabStatus will be returned as well)",
                    required: false,
                }
            ],
            responses: {
                "200": {
                    description: "Success Response",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    groupMembers: {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/GroupMember"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
    },
    // user manipulation
    "/group/{groupId}/members/{userId}/update-role": {
        post: {
            tags: ["Group User"],
            summary: "Update group user role",
            description: "This api can be used to update user role in group and also add user to the group",
            operationId: "updateGroupUserRole",
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
            }, {
                name: "userId",
                in: "path",
                description: "User id",
                required: true,
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                role: {
                                    type: "string",
                                    example: "admin",
                                    description: "Can be any of admin, moderator, user",
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for update group user role",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "User role changed in group!",
                                    },
                                    group: {
                                        $ref: "#/components/schemas/Group"
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    description: "Error Response for update group user role",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Forbidden"
                                    }
                                }
                            }
                        }
                    }
                },
                "403": {
                    description: "Error Response for update group user role",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Cannot change role of self!"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: "Error Response for update group user role",
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
                    description: "Validation error",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Validation error!"
                                    },
                                    errors: {
                                        type: "object",
                                        properties: {
                                            role: {
                                                type: "array",
                                                items: {
                                                    type: "string",
                                                    example: "The role field is required!"
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
        }
    },
    "/group/{groupId}/remove-user/{userId}": {
        post: {
            tags: ["Group User"],
            summary: "Remove user from group",
            description: "This api can be used to remove user from group",
            operationId: "removeUserFromGroup",
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
            }, {
                name: "userId",
                in: "path",
                description: "User id",
                required: true,
            }],
            responses: {
                "200": {
                    description: "Success Response for remove user from group",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "User removed from group!",
                                    },
                                    group: {
                                        $ref: "#/components/schemas/Group"
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    description: "Error Response for remove user from group",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Forbidden"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: "Error Response for remove user from group",
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
    },
    // section related
    "/group/{groupId}/tab/{sectionId}": {
        post: {
            tags: ["Group Section"],
            summary: "Edit group section",
            description: "This api can be used to edit group section",
            operationId: "editGroupSection",
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
            }, {
                name: "sectionId",
                in: "path",
                description: "Section id",
                required: true,
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/requestBodies/CreateSection"
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for edit group section",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Update the group tab!"
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
        },
        delete: {
            tags: ["Group Section"],
            summary: "Delete group section",
            description: "This api can be used to delete group section",
            operationId: "deleteGroupSection",
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
            }, {
                name: "sectionId",
                in: "path",
                description: "Section id",
                required: true,
            }],
            responses: {
                "200": {
                    description: "Success Response for delete group section",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Deleted the group tab!"
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
        },
    },
    // section level user manipulation
    "/group/{groupId}/section/{sectionId}/join-request/{userId}/accept": {
        post: {
            tags: ["Private Section"],
            summary: "Accept user in private section",
            description: "This api can be used to accept user request or add user to private section.",
            operationId: "acceptJoinRequestInPrivateSection",
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
            }, {
                name: "sectionId",
                in: "path",
                description: "Section id",
                required: true,
            }, {
                name: "userId",
                in: "path",
                description: "User id",
                required: true,
            }],
            responses: {
                "200": {
                    description: "Accepted section join request response!",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Accepted section join request!",
                                    },
                                    group: {
                                        $ref: "#/components/schemas/Group"
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    description: "Error Response for update section user status",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Section nonexisting or not closed"
                                    }
                                }
                            }
                        }
                    }
                },
                "403": {
                    description: "Error Response for update section user status",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Forbidden!"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: "Error Response for update section user status",
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
    },
    "/group/{groupId}/section/{sectionId}/join-request/{userId}/reject": {
        post: {
            tags: ["Private Section"],
            summary: "Reject user in private section",
            description: "This api can be used to reject user request or remove user from private section.",
            operationId: "rejectJoinRequestInPrivateSection",
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
            }, {
                name: "sectionId",
                in: "path",
                description: "Section id",
                required: true,
            }, {
                name: "userId",
                in: "path",
                description: "User id",
                required: true,
            }],
            responses: {
                "200": {
                    description: "Rejected section join request response!",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Rejected section join request!",
                                    },
                                    group: {
                                        $ref: "#/components/schemas/Group"
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    description: "Error Response for update section user status",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Section nonexisting or not closed"
                                    }
                                }
                            }
                        }
                    }
                },
                "403": {
                    description: "Error Response for update section user status",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Forbidden!"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: "Error Response for update section user status",
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
    },
}