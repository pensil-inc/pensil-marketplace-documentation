module.exports = {
    "/chats/direct": {
        get: {
            tags: ["Direct Message"],
            summary: "Get list of all existing direct chats",
            description: "Get list of all existing direct chats",
            operationId: "getDirectChats",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            responses: {
                "200": {
                    description: "Success Response for getting all direct chats",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    users: {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/ChatUser"
                                        }
                                    },
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/chats/direct/{userId}": {
        // get user chat details
        get: {
            tags: ["Direct Message"],
            summary: "Get details of a direct chat",
            description: "Get details of a direct chat",
            operationId: "getDirectChat",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            parameters: [{
                name: "userId",
                in: "path",
                description: "User id",
                required: true,
            }],
            responses: {
                "200": {
                    description: "Success Response for get direct chat details",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Latest messages"
                                    },
                                    otherUser: {
                                        $ref: "#/components/schemas/UserCompact"
                                    },
                                    messages: {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/DirectMessage"
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
    "/chats/direct/{userId}/send-message": {
        // get user chat details
        post: {
            tags: ["Direct Message"],
            summary: "Send direct message",
            description: "please refer to this guide for listeners details <a href=\"/readme/direct-message-sockets\" target=\"_blank\">Direct Message Listeners</a>",
            operationId: "sendDirectMessage",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            parameters: [{
                name: "userId",
                in: "path",
                description: "User id",
                required: true,
            }],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Hi",
                                },
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for send direct message",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        $ref: "#/components/schemas/DirectMessage"
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
    },
    "/chats/direct/edit-message/{messageId}": {
        // get user chat details
        post: {
            tags: ["Direct Message"],
            summary: "Edit direct message",
            description: "Edit direct message",
            operationId: "editDirectMessage",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            parameters: [{
                name: "messageId",
                in: "path",
                description: "Message id",
                required: true,
            }],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Hi, again!",
                                },
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for edit direct message",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        $ref: "#/components/schemas/DirectMessage"
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
    },
    "/chats/direct/delete-message/{messageId}": {
        // get user chat details
        delete: {
            tags: ["Direct Message"],
            summary: "Delete direct message",
            description: "Delete direct message",
            operationId: "deleteDirectMessage",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            parameters: [{
                name: "messageId",
                in: "path",
                description: "Message id",
                required: true,
            }],
            responses: {
                "200": {
                    description: "Success Response for delete direct message",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        $ref: "#/components/schemas/DirectMessage"
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
    },
    "/chats/direct/{messageId}/upload-attachment": {
        // upload attachment
        post: {
            tags: ["Direct Message"],
            summary: "Upload attachments to direct message",
            description: "Upload attachments to direct message",
            operationId: "uploadDirectMessageAttachment",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            parameters: [{
                name: "messageId",
                in: "path",
                description: "Message id",
                required: true,
            }],
            requestBody: {
                content: {
                    "multipart/form-data": {
                        schema: {
                            type: "object",
                            properties: {
                                attachments: {
                                    type: "array",
                                    items: {
                                        type: "file",
                                        format: "binary",
                                        example: "file",
                                    }
                                },
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for upload attachments to direct message",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        $ref: "#/components/schemas/DirectMessage"
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
    },
}