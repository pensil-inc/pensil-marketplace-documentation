module.exports = {
    "CommunityEvent": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "example": "62212535e304381e716f4c23"
            },
            "title": {
                "type": "string",
                "example": "Event with admin participant with comm"
            },
            "startTime": {
                "type": "string",
                "example": "2022-03-30T16:08:43.594Z"
            },
            "endTime": {
                "type": "string",
                "example": "2022-03-30T17:08:43.594Z"
            },
            "community": {
                "type": "string",
                "example": "620f6cb107166611e42217b0"
            },
            "webURL": {
                "type": "string",
                "example": "https://google.com"
            },
            "invitedSections": {
                "type": "array",
                "items": {
                    "type": "string",
                    "example": "62212535e304381e716f4c23"
                }
            },
            "liveMeeting": {
                "type": "string",
                "format": "nullable"
            },
            "maximumRegistrations": {
                "type": "number",
                "example": "3"
            },
            "host": {
                "type": "object",
                "properties": {
                    "type": "ref",
                    "$ref": "#/components/schemas/UserCompact"
                },
            },
            "participants": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "user": {
                            "type": "ref",
                            "$ref": "#/components/schemas/UserCompact"
                        },
                        "status": {
                            "type": "string",
                            "example": "going"
                        }
                    }
                }
            },
            "createdBy": {
                "type": "ref",
                "$ref": "#/components/schemas/UserCompact"
            },
            "createdAt": {
                "type": "string",
                "example": "2022-03-03T20:29:41.316Z"
            },
            "updatedAt": {
                "type": "string",
                "example": "2022-03-03T20:29:41.316Z"
            }
        }
    }
}