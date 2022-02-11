module.exports = {
    "Group": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "example": "6151ce2fe1291f2b14bb6960"
            },
            "name": {
                "type": "string",
                "example": "Introduction"
            },
            "userCount": {
                "type": "number",
                "example": "2"
            },
            "quizCount": {
                "type": "number",
                "example": "0"
            },
            "liveClassesCount": {
                "type": "number",
                "example": "13"
            },
            "notesCount": {
                "type": "number",
                "example": "62"
            },
            "joinStatus": {
                "type": "string",
                "example": "joined"
            },
            "myRole": {
                "type": "string",
                "example": "admin"
            },
            "description": {
                "type": "string",
                "example": "N ew description that really need better content but it will do"
            },
            "communityId": {
                "type": "string",
                "example": "6151ce2fe1291f2b14bb695e"
            },
            "sortOrder": {
                "type": "number",
                "example": "0"
            },
            "community": {
                $ref: "#/components/schemas/Community"
            },
            "color": {
                "type": "string",
                "example": ""
            },
            "tags": {
                "type": "array",
                "items": {}
            },
            "tabs": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "example": "6151ce2fe1291f2b14bb6961"
                        },
                        "name": {
                            "type": "string",
                            "example": "Get Started"
                        },
                        "postLevel": {
                            "type": "string",
                            "example": "admin"
                        },
                        "sectionType": {
                            "type": "string",
                            "example": "generic"
                        },
                        "isClosed": {
                            "type": "boolean"
                        },
                        "isPrivate": {
                            "type": "boolean"
                        },
                        "isJoined": {
                            "type": "boolean"
                        },
                        "emoji": {
                            "type": "string",
                            "example": "🌼"
                        },
                        "sortBy": {
                            "type": "string",
                            "example": "latest"
                        }
                    }
                }
            },
            "groupType": {
                "type": "string",
                "example": "open"
            },
            "price": {
                "type": "number",
                "example": "0"
            },
            "currency": {
                "type": "string",
                "example": "INR"
            },
            "postLevel": {
                "type": "string",
                "example": "anyone"
            },
            "isOnlyVisibleToMembers": {
                "type": "boolean"
            },
            "createdBy": {
                $ref: "#/components/schemas/UserCompact"
            },
            "isByMe": {
                "type": "boolean"
            },
            "createdAt": {
                "type": "string",
                "example": "2021-09-27T13:59:11.202Z"
            }
        }
    }
}