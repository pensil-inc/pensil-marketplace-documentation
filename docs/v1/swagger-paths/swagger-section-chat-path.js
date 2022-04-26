module.exports = {
    "/group/{groupId}/section/{sectionId}/messages/timestamped": {
        // get user chat details
        get: {
            tags: ["Section Chat Message"],
            summary: "Get latest section chat messages timestamped",
            description: "Get latest section chat messages timestamped",
            operationId: "getSectionChatMessagesTimestamped",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            parameters: [
                {
                    name: "groupId",
                    in: "path",
                    description: "Group id",
                    required: true,
                },
                {
                    name: "sectionId",
                    in: "path",
                    description: "Section id",
                    required: true,
                },
                {
                    name: "lastId",
                    in: "query",
                    description: "Last item id",
                    required: false,
                },
            ],
            responses: {
                "200": {
                    description: "Success Response for get chat messages paginated",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        example: "Latest messages"
                                    },
                                    messages: {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/SectionMessage"
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
    "/message": {
        // send section chat message
        post: {
            tags: ["Section Chat Message"],
            summary: "Send section chat message",
            description: "please refer to this guide for listeners details <a href=\"/readme/section-chat-sockets\" target=\"_blank\">Section Chat Message Listeners</a>",
            operationId: "sendSectionChatMessage",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/requestBodies/CreateSectionChat"
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for send section message",
                    content: {
                        "application/json": {
                            schema: {
                                "type": "object",
                                "properties": {
                                    "message": {
                                        "type": "string",
                                        "example": "Message sent!"
                                    },
                                    "messageBody": {
                                        $ref: "#/components/schemas/SectionMessage"
                                    }
                                },
                            },
                        }
                    }
                },
            }
        },
    },
    "/message/{messageId}": {
        // edit section chat message
        post: {
            tags: ["Section Chat Message"],
            summary: "Edit Section Chat message",
            description: "Edit Section Chat message",
            operationId: "editSectionChatMessage",
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
                                description: {
                                    type: "string",
                                    example: "Hi, again 2!",
                                },
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for edit section chat message",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "message": {
                                        "type": "string",
                                        "example": "Message edited!"
                                    },
                                    "messageBody": {
                                        $ref: "#/components/schemas/SectionMessage"
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
        // delete section chat message
        delete: {
            tags: ["Section Chat Message"],
            summary: "Edit Section Chat message",
            description: "Edit Section Chat message",
            operationId: "deleteSectionChatMessage",
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
                    description: "Success Response for delete section chat message",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "message": {
                                        "type": "string",
                                        "example": "Message deleted!"
                                    },
                                    "messageBody": {
                                        $ref: "#/components/schemas/SectionMessage"
                                    }
                                }
                            }
                        }
                    }
                },
            }
        },
    },
    "/message/upload-attachment": {
        // upload attachment
        post: {
            tags: ["Section Chat Message"],
            summary: "Upload attachments to section chat",
            description: "Upload attachments to section chat",
            operationId: "uploadSectionChatAttachment",
            security: [{
                BearerToken: []
            }, {
                APIKEY: []
            }],
            requestBody: {
                content: {
                    "multipart/form-data": {
                        schema: {
                            type: "object",
                            properties: {
                                "groupId": {
                                    "type": "string",
                                    "example": "6267764968cdcaba2948abc9"
                                },
                                "tabId": {
                                    "type": "string",
                                    "example": "6267e30eea59d61897d649d9"
                                },
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
                                        type: "string",
                                        example: "Message sent!"
                                    },
                                    messages: {
                                        type: "array",
                                        items: {
                                            $ref: "#/components/schemas/SectionMessage"
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
}