module.exports = {
    "DirectMessage": {
        "type": "object",
        "properties": {
            "attachments": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string",
                            "example": "6267d2deea59d61897d64955"
                        },
                        "mimeType": {
                            "type": "string",
                            "example": "image/jpeg"
                        },
                        "url": {
                            "type": "string",
                            "example": "https://pensil-social-uat.s3.ap-south-1.amazonaws.com/storage/direct-message/DSC_1555-095f7dc5-476d-4aa0-bc83-aad4ea6ac32d.jpg"
                        },
                        "name": {
                            "type": "string",
                            "example": "DSC_1555.jpg"
                        },
                        "size": {
                            "type": "number",
                            "example": "3160252"
                        },
                        "thumbnailUrl": {
                            "type": "string",
                            "format": "nullable"
                        }
                    }
                }
            },
            "message": {
                "type": "string",
                "example": "Hey"
            },
            "receiver": {
                $ref: "#/components/schemas/UserCompact"
            },
            "sender": {
                $ref: "#/components/schemas/UserCompact"
            },
            "createdAt": {
                "type": "string",
                "example": "2022-04-26T04:35:17.548Z"
            },
            "updatedAt": {
                "type": "string",
                "example": "2022-04-26T04:35:38.623Z"
            },
            "isRead": {
                "type": "boolean"
            },
            "isEdited": {
                "type": "boolean"
            },
            "id": {
                "type": "string",
                "example": "6267768568cdcaba2948ad3b"
            }
        },
    }
}