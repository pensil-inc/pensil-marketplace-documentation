### Please refer to this guide to setup direct message listeners

Initialize listeners
```javascript
      socket.on("direct-message:new-chat", newChatListener);
      socket.on(
        `direct-message:${userId}:message-received`,
        messageReceivedListener
      );
      socket.on(
        `direct-message:${userId}:message-deleted`,
        messageDeletedListener
      );
      socket.on(
        `direct-message:${userId}:message-edited`,
        messageEditedListener
      );
```

all the listeners will recieve the following object, you can leverage them accordingly

```json
{
    "message": {
        "attachments": [
            {
                "id": "6267d2deea59d61897d64955",
                "mimeType": "image/jpeg",
                "url": "https://pensil-social-uat.s3.ap-south-1.amazonaws.com/storage/direct-message/DSC_1555-095f7dc5-476d-4aa0-bc83-aad4ea6ac32d.jpg",
                "name": "DSC_1555.jpg",
                "size": 3160252,
                "thumbnailUrl": null
            }
        ],
        "receiver": {
            "resource": null
        },
        "sender": {
            "id": "6267763568cdcaba2948abad",
            "name": "Shubham",
            "userId": "shubham2982",
            "isVerifiedByPensil": false,
            "picture": "http://localhost:3000/default_pictures/user_3.png",
            "isFollowedByMe": false
        },
        "createdAt": "2022-04-26T11:09:18.100Z",
        "updatedAt": "2022-04-26T11:09:18.100Z",
        "isRead": false,
        "isEdited": false,
        "id": "6267d2deea59d61897d64954"
    }
}
```
