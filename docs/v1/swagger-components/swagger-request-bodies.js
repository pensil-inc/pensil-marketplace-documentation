module.exports = {
    requestBodies: {

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
        }
    }
}