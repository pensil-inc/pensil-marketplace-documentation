module.exports = {
    "/login/otp": {
        post: {
            tags: ["Authentication"],
            summary: "Login with OTP",
            operationId: "loginWithOTP",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            anyOf: [
                                {
                                    $ref: "#/components/requestBodies/LoginWithOTPMobile"
                                },
                                {
                                    $ref: "#/components/requestBodies/LoginWithOTPEmail"
                                }
                            ]
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success Response for login with OTP",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "message": {
                                        type: "string",
                                        example: "OTP Sent to +918218578499"
                                    },
                                    "user": {
                                        $ref: "#/components/schemas/UserCompact"
                                    }
                                }
                            }
                        }
                    }
                },
                "422": {
                    description: "Error Response for login with OTP",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    "errors": {
                                        type: "object",
                                        properties: {
                                            "mobile": {
                                                type: "array",
                                                items: {
                                                    type: "string",
                                                    example: "The mobile format is invalid!"
                                                }
                                            },
                                            "email": {
                                                type: "array",
                                                items: {
                                                    type: "string",
                                                    example: "The email format is invalid!"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
}