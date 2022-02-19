module.exports = {
    "Community": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "example": "6151ce2fe1291f2b14bb695e"
            },
            "name": {
                "type": "string",
                "example": "Tech"
            },
            "isFeatured": {
                "type": "boolean"
            },
            "needsAdminVerification": {
                "type": "boolean"
            },
            "address": {
                "type": "string",
                "example": "tech"
            },
            "authRedirectUrl": {
                "type": "string",
                "example": "http://tech.pensil.com:3001?access_token=red"
            },
            "logo": {
                "type": "string",
                "format": "nullable"
            },
            "banner": {
                "type": "string",
                "format": "nullable"
            },
            "bannerTitle": {
                "type": "string",
                "example": ""
            },
            "bannerDescription": {
                "type": "string",
                "example": "Yo New"
            },
            "selectedType": {
                "type": "string",
                "example": "paid"
            },
            "isPaidFor": {
                "type": "boolean"
            },
            "planType": {
                "type": "string",
                "example": "scale"
            },
            "planExpiryDate": {
                "type": "string",
                "example": "2031-12-20T07:47:18.753Z"
            },
            "isPlanExpired": {
                "type": "boolean"
            },
            "isDealRedeemed": {
                "type": "boolean"
            },
            "isLoginRequired": {
                "type": "boolean"
            },
            "isDirectMessageDisabled": {
                "type": "boolean"
            },
            "isCommunitySwitcherDisabled": {
                "type": "boolean"
            },
            "isMobileAndEmailVerificationRequired": {
                "type": "boolean"
            },
            "hideClosedGroupWithoutJoin": {
                "type": "boolean"
            },
            "expandPostDirectory": {
                "type": "boolean"
            },
            "disableHeaderDropdown": {
                "type": "boolean"
            },
            "subscribersCount": {
                "type": "number",
                "example": "4"
            },
            "welcomeMessages": {
                "type": "array",
                "items": {
                    "type": "string",
                    "example": "Hey, whats up"
                }
            },
            "createdBy": {
                $ref: "#/components/schemas/UserCompact"
            },
            "createdAt": {
                "type": "string",
                "example": "2021-09-27T13:59:11.192Z"
            },
            "updatedAt": {
                "type": "string",
                "example": "2022-02-07T04:53:07.116Z"
            }
        }
    }
}