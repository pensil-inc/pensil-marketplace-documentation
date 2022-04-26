module.exports = {
    "SectionMessage": {
        "type": "object",
        "properties": {
            "images": {
                "type": "array",
                "items": {
                }
            },
            "videos": {
                "type": "array",
                "items": {
                }
            },
            "isPinned": {
                "type": "boolean"
            },
            "replyCount": {
                "type": "number",
                "example": "0"
            },
            "description": {
                "type": "string",
                "example": "sharing a post"
            },
            "createdBy": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string",
                        "example": "6267763568cdcaba2948abad"
                    },
                    "name": {
                        "type": "string",
                        "example": "Shubham"
                    },
                    "userId": {
                        "type": "string",
                        "example": "shubham2982"
                    },
                    "isVerifiedByPensil": {
                        "type": "boolean"
                    },
                    "picture": {
                        "type": "string",
                        "example": "http://localhost:3000/default_pictures/user_3.png"
                    },
                    "isFollowedByMe": {
                        "type": "boolean"
                    }
                }
            },
            "tab": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "example": "chat section"
                    },
                    "id": {
                        "type": "string",
                        "example": "6267e30eea59d61897d649d9"
                    }
                }
            },
            "tabId": {
                "type": "string",
                "example": "6267e30eea59d61897d649d9"
            },
            "groupId": {
                "type": "string",
                "example": "6267764968cdcaba2948abc9"
            },
            "createdAt": {
                "type": "string",
                "example": "2022-04-26T12:19:26.162Z"
            },
            "updatedAt": {
                "type": "string",
                "example": "2022-04-26T12:19:26.162Z"
            },
            "isEdited": {
                "type": "boolean"
            },
            "attachments": {
                "type": "array",
                "items": {
                }
            },
            "id": {
                "type": "string",
                "example": "6267e34eea59d61897d649fd"
            }
        }
    }
}