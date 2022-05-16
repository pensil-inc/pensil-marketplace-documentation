module.exports = {
    "Post": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "example": "6281a6546715e9f27a9b3776"
            },
            "isInGroup": {
                "type": "boolean"
            },
            "group": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string",
                        "example": "6267764968cdcaba2948abc9"
                    },
                    "name": {
                        "type": "string",
                        "example": "Group #0023"
                    }
                }
            },
            "community": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string",
                        "example": "6267764968cdcaba2948abc7"
                    }
                }
            },
            "isPinned": {
                "type": "boolean"
            },
            "tags": {
                "type": "array",
                "items": {
                    "type": "string",
                    "example": "coding"
                }
            },
            "tabId": {
                "type": "string",
                "example": "6273cb13215181e4c9305499"
            },
            "tab": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "example": "red"
                    },
                    "id": {
                        "type": "string",
                        "example": "6273cb13215181e4c9305499"
                    }
                }
            },
            "title": {
                "type": "string",
                "example": "sharing a post 23"
            },
            "description": {
                "type": "string",
                "example": "sharing a post"
            },
            "liveMeeting": {
                "type": "string",
                "format": "nullable"
            },
            "images": {
                "type": "array",
                "items": {}
            },
            "videoThumbnails": {
                "type": "array",
                "items": {}
            },
            "videos": {
                "type": "array",
                "items": {}
            },
            "likeCount": {
                "type": "number",
                "example": "0"
            },
            "commentCount": {
                "type": "number",
                "example": "0"
            },
            "viewCount": {
                "type": "number",
                "example": "0"
            },
            "isCommentedOnByMe": {
                "type": "string",
                "format": "nullable"
            },
            "poll": {
                "type": "string",
                "format": "nullable"
            },
            "shared": {
                "type": "string",
                "format": "nullable"
            },
            "likes": {
                "type": "number",
                "example": "0"
            },
            "latestComment": {
                "type": "string",
                "format": "nullable"
            },
            "latestLikes": {
                "type": "string",
                "format": "nullable"
            },
            "isLikedByMe": {
                "type": "string",
                "format": "nullable"
            },
            "isByMe": {
                "type": "boolean"
            },
            "isBookmarkedByMe": {
                "type": "string",
                "format": "nullable"
            },
            "event": {
                "type": "string",
                "format": "nullable"
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
                    "groupRole": {
                        "type": "string",
                        "example": "admin"
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
            "createdAt": {
                "type": "string",
                "example": "2022-05-16T01:18:12.175Z"
            },
            "canDelete": {
                "type": "boolean"
            },
            "canDeleteComment": {
                "type": "boolean"
            },
            "canDeleteReply": {
                "type": "boolean"
            },
            "meta": {
                "type": "object",
                "properties": {
                    "slug": {
                        "type": "string",
                        "example": "red243"
                    },
                    "title": {
                        "type": "string",
                        "example": "sharing a post 23"
                    },
                    "description": {
                        "type": "string",
                        "example": "sharing a post"
                    },
                    "openGraphTitle": {
                        "type": "string",
                        "example": "sharing a post 23"
                    },
                    "openGraphDescription": {
                        "type": "string",
                        "example": "sharing a post"
                    },
                    "openGraphImage": {
                        "type": "string",
                        "example": ""
                    }
                }
            }
        }
    }
}