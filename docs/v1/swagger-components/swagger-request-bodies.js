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
        }
    }
}