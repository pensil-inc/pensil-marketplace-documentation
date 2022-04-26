### Please refer to this guide to setup direct message listeners

Initialize listeners

```javascript
    socket.on(`section:${activeTab}:message-received`, messageReceivedListener);
    socket.on(`section:${activeTab}:message-deleted`, messageDeletedListener);
    socket.on(`section:${activeTab}:message-edited`, messageEditedListener);
```

all the listeners will recieve the following object, you can leverage them accordingly

```json
{
    "message": {
      "images": [],
      "videos": [],
      "isPinned": false,
      "replyCount": 0,
      "description": "sharing a post 2",
      "createdBy": {
          "id": "6267763568cdcaba2948abad",
          "name": "Shubham",
          "userId": "shubham2982",
          "isVerifiedByPensil": false,
          "picture": "http://localhost:3000/default_pictures/user_3.png",
          "isFollowedByMe": false
      },
      "tab": {
          "name": "chat section",
          "id": "6267e30eea59d61897d649d9"
      },
      "tabId": "6267e30eea59d61897d649d9",
      "groupId": "6267764968cdcaba2948abc9",
      "createdAt": "2022-04-26T12:19:26.162Z",
      "updatedAt": "2022-04-26T12:34:15.751Z",
      "isEdited": true,
      "attachments": [],
      "id": "6267e34eea59d61897d649fd"
  }
}
```
