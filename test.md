# Group Notes
Group description (also with *Markdown*)

## Note List [/notes]
Note list description

+ Even
+ More
+ Markdown

+ Model

    + Headers

            Content-Type: application/json; charset=utf-8

    + Body

            [
                {
                    "id": 11212,
                    "title": "Grocery list",
                    "body": "Buy milk"
                },
                {
                    "id": 2,
                    "title": "TODO",
                    "body": "Fix garage door"
                }
            ]

### Get Notes [GET]
Get a list of notes.

+ Response 200

    + Body

              [
                {
                    "id": 1,
                    "title": "Grocery list",
                    "body": "Buy milk"
                },
                {
                    "id": 2,
                    "title": "TODO",
                    "body": "Fix garage door"
                }
            ]
## User list [/users/{id}]
User list description
The user resource has the following attributes:
- id
- name
- desc

The states *id* and *desc* are assigned by the Gist Fox API at the moment of creation.

+ Parameters

    + id: 1 (number) - An unique identifier of the message.

+ Model
    HAL+JSON representation of Gist Resource. In addition to representing its state in the JSON form it offers affordances in the form of the HTTP Link header and HAL links.

    + Headers

            Content-Type: application/json; charset=utf-8

    + Body

            {
                "id":"123",
                "name":"seven",
                "desc":"for test"
            }
### Get Users [GET]
Get a list of notes.

+ Response 200

    + Body

             {
                "id":"123",
                "name":"seven",
                "desc":"for test"
            }