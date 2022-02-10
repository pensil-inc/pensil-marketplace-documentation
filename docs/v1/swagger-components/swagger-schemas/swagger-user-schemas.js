module.exports = {
    "UserCompact": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "example": "6142159dd7373f54ecb5bca4"
            },
            "name": {
                "type": "string",
                "example": "Shubham Singh Chahar"
            },
            "userId": {
                "type": "string",
                "example": "shubham2554"
            },
            "isVerifiedByPensil": {
                "type": "boolean"
            },
            "picture": {
                "type": "string",
                "example": "http://localhost:3000/default_pictures/user_0.png"
            },
            "isFollowedByMe": {
                "type": "boolean"
            }
        }
    },
    "UserLogin": {
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "example": "620403975f14c01baebe73ec"
            },
            "name": {
                "type": "string",
                "example": "New User"
            },
            "isVerifiedByPensil": {
                "type": "boolean"
            },
            "countryCode": {
                "type": "string",
                "example": "+91"
            },
            "email": {
                "type": "string",
                "example": "hachacha@gmail.com"
            },
            "picture": {
                "type": "string",
                "example": "http://localhost:3000/default_pictures/user_0.png"
            },
            "role": {
                "type": "string",
                "example": "user"
            },
            "lastLoginDate": {
                "type": "string",
                "format": "nullable"
            },
            "createdAt": {
                "type": "string",
                "example": "2022-02-09T18:10:31.448Z"
            },
            "updatedAt": {
                "type": "string",
                "example": "2022-02-09T18:10:31.448Z"
            },
            "token": {
                "type": "string",
                "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVWZXJpZmljYXRpb24iOnsiY291bnRyeUNvZGUiOiIrOTEifSwiY291bnRyeUNvZGUiOiIrOTEiLCJpc1ZlcmlmaWVkIjpmYWxzZSwiaXNWZXJpZmllZEJ5UGVuc2lsIjpmYWxzZSwiZm9sbG93ZXJzIjowLCJmb2xsb3dpbmciOjAsInJvbGUiOiJ1c2VyIiwibGFzdExvZ2luRGF0ZSI6bnVsbCwidGFncyI6W10sImV4YW1zIjpbXSwiY29tbXVuaXR5VHlwZVNlbGVjdGlvbiI6IiIsImFmZmlsaWF0ZWRDb21tdW5pdHkiOiI2MTUxY2UyZmUxMjkxZjJiMTRiYjY5NWUiLCJuYW1lIjoiTmV3IFVzZXIiLCJlbWFpbCI6ImhhY2hhY2hhQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDItMDlUMTg6MTA6MzEuNDQ4WiIsInVwZGF0ZWRBdCI6IjIwMjItMDItMDlUMTg6MTA6MzEuNDQ4WiIsImlkIjoiNjIwNDAzOTc1ZjE0YzAxYmFlYmU3M2VjIiwiaWF0IjoxNjQ0NTA2MzYxfQ.Ux345i8D8pgd2LopMObcIDcHBawDrAR0VPP6uLq-T9k"
            },
            "communityTypeSelection": {
                "type": "string",
                "example": ""
            }
        }
    }
}