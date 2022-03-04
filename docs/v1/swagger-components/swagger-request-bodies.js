module.exports = {
    requestBodies: {
        // Authentication
        LoginWithOTPMobile: {
            type: "object",
            properties: {
                mobile: {
                    type: "string",
                    example: "8218578499",
                    required: true
                },
            }
        },
        LoginWithOTPEmail: {
            type: "object",
            properties: {
                email: {
                    type: "string",
                    example: "shubham@pensil.in",
                    required: true
                },
            }
        },
        // groups
        CreateGroup: {
            type: "object",
            properties: {
                "name": {
                    "type": "string",
                    "example": "New Group",
                    description: "Required | Name of the group",
                    required: true,
                },
                "description": {
                    "type": "string",
                    "example": "My group's description",
                    description: "Required | Description text of the group",
                    required: true,
                },
                "color": {
                    "type": "string",
                    "example": "#ff0000",
                    description: "Color for group tile in ui",
                    required: true,
                },
                "webUrl": {
                    "type": "string",
                    "example": "https://pensil.in/group/new-group",
                    description: "Can be any url that we want to associate to the group.",
                    required: true,
                },
                "tags": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "example": "upsc",
                        description: "tag",
                        required: false,
                    },
                    description: "Array of tags",
                    required: false,
                },
                "communityId": {
                    "type": "string",
                    "example": "607ee1a44d3d4264e0269b9d",
                    description: "Required | community id where group will be created",
                    required: true,
                },
                "groupType": {
                    "type": "string",
                    "example": "open",
                    description: "Optional (Default is open) | Type of group can be: open, closed-free, closed-paid",
                    required: false,
                },
                "price": {
                    "type": "number",
                    "example": 0,
                    description: "Required if groupType is closed-paid | Group joining fee",
                    required: false,
                },
                "isOnlyVisibleToMembers": {
                    "type": "boolean",
                    "example": false,
                    description: "Whether this group will only be visible to the members of the group",
                    required: false,
                },
                "currency": {
                    "type": "string",
                    "example": "INR",
                    description: "Currency for the price of the group",
                    required: false,
                }
            }
        },
        UpdateGroup: {
            type: "object",
            properties: {
                "name": {
                    "type": "string",
                    "example": "New Group",
                    description: "Required | Name of the group",
                    required: true,
                },
                "description": {
                    "type": "string",
                    "example": "My group's description",
                    description: "Required | Description text of the group",
                    required: true,
                },
                "color": {
                    "type": "string",
                    "example": "#ff0000",
                    description: "Color for group tile in ui",
                    required: true,
                },
                "webUrl": {
                    "type": "string",
                    "example": "https://pensil.in/group/new-group",
                    description: "Can be any url that we want to associate to the group.",
                    required: true,
                },
                "tags": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "example": "upsc",
                        description: "tag",
                        required: false,
                    },
                    description: "Array of tags",
                    required: false,
                },
                "groupType": {
                    "type": "string",
                    "example": "open",
                    description: "Optional (Default is open) | Type of group can be: open, closed-free, closed-paid",
                    required: false,
                },
                "price": {
                    "type": "number",
                    "example": 0,
                    description: "Required if groupType is closed-paid | Group joining fee",
                    required: false,
                },
                "isOnlyVisibleToMembers": {
                    "type": "boolean",
                    "example": false,
                    description: "Whether this group will only be visible to the members of the group",
                    required: false,
                }
            }
        },
        // sections
        CreateSection: {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "example": "Get Started",
                    "required": true,
                },
                "emoji": {
                    "type": "string",
                    "example": "🌼",
                    "required": false,
                    "default": "#"
                },
                "sectionType": {
                    "type": "string",
                    "example": "generic",
                    "required": false,
                    "default": "generic",
                    description: "can be generic/realtime"
                },
                "postLevel": {
                    "type": "string",
                    "example": "admin",
                    "required": false,
                    "default": "anyone",
                    description: "can be anyone/admin"
                },
                "isClosed": {
                    "type": "boolean",
                    "example": false,
                    "required": false,
                    "default": false,
                    description: "whether the section is closed or not (user will need addition access request for this)"
                },
                "isPrivate": {
                    "type": "boolean",
                    "example": false,
                    "required": false,
                    "default": false,
                    description: "whether the section is private or not (user cannot request if a closed section is also private)"
                },
                "sortBy": {
                    "type": "string",
                    "example": "latest",
                    "required": false,
                    "default": "latest",
                    description: "can be latest/oldest"
                }
            }
        },
        // event related
        CreateCommunityEvent: {
            type: "object",
            properties: {
                "startTime": {
                    "type": "string",
                    "example": "2022-03-30T16:08:43.594Z",
                    "required": true,
                    "description": "required",
                },
                "endTime": {
                    "type": "string",
                    "example": "2022-03-30T17:08:43.594Z",
                    "required": true,
                    "description": "required",
                },
                "title": {
                    "type": "string",
                    "example": "Event with admin participant with comm",
                    "required": true,
                    "description": "required",
                },
                "description": {
                    "type": "string",
                    "example": "Event with admin participant with comm"
                },
                "location": {
                    "type": "string",
                    "example": ""
                },
                "createMeeting": {
                    "type": "boolean",
                    "example": "true",
                    "description": "Will create meeting on pensil platform if true, is ignored while editing event",
                },
                "eventHost": {
                    "type": "mongoid",
                    "example": "asdasdjaqiej3en23edqweqwe",
                    "description": "Will default to creator of meeting if not provided"
                },
                "maximumRegistrations": {
                    "type": "string",
                    "example": "3",
                    "description": "0 means unlimited registrations"
                },
                "webURL": {
                    "type": "string",
                    "example": "https://google.com"
                }
            }
        },
        InviteSectionsToCommunity: {
            type: "object",
            properties: {
                "groups": {
                    "type": "array",
                    "required": true,
                    "description": "Required",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "example": "620f6cb107166611e42217b2",
                                "required": true,
                                "description": "Required | Group Id"
                            },
                            "sections": {
                                "type": "array",
                                "required": true,
                                "description": "Required",
                                "items": {
                                    "type": "string",
                                    "example": "620f6cb107166611e42217b3",
                                    "required": true,
                                    "description": "Required | Section Id"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}