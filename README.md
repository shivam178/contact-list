# contact-list
Contacts list for registered users.

The backend is in ExpressJS with mongoose implementaion and frontend in NextJs with React. <br />
Currently in progress to move all the backend to NextJs.

# Basic Curl request for get Contacts
```
curl --location --request GET 'http://localhost:8080/contact/list/api/v1/dashboard/contacts' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI4ODcyMTA2MTY2ODY2NDkyMjhkNGQiLCJmdWxsTmFtZSI6InNoaXZhbSBzaGFybWEiLCJuYW1lIjoic2hpdmFtMTc4c2hhcm1hIiwiZW1haWwiOiJzaGl2YW0xNzhzaGFybWFAZ21haWwuY29tIiwic3ViSWQiOiJlMWQ4MjUzMi01NGY5LTRlNjktODBhMC1lZjNmYjgyNGI2N2MiLCJpYXQiOjE2NTYyNjQ2NTV9.I7ngE2e7_fXzZ9UTN6T_dAyO-QHyskzMhLhkhDE6LXs'
```
# Response for Get Contacts
```
{
    "error": null,
    "message": "",
    "result": [
        {
            "_id": "62b89cf933db5b7f35fa4003",
            "fullName": "Shivam Sharma",
            "email": "shivam178sharma@gmail.com",
            "mobile": "9810268991",
            "userId": "62b887210616686649228d4d",
            "createdAt": "2022-06-26T17:52:57.275Z",
            "__v": 0
        },
        {
            "_id": "62b89d6edcd4dc2cad2b522d",
            "fullName": "Shivam Sharma",
            "email": "kshitij076@gmail.com",
            "mobile": "9582865626",
            "userId": "62b887210616686649228d4d",
            "createdAt": "2022-06-26T17:54:54.995Z",
            "__v": 0
        }
    ],
    "response_code": 200
}
```

# Basic curl for add contact
```
curl --location --request POST 'http://localhost:8080/contact/list/api/v1/dashboard/contacts' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI4ODcyMTA2MTY2ODY2NDkyMjhkNGQiLCJmdWxsTmFtZSI6InNoaXZhbSBzaGFybWEiLCJuYW1lIjoic2hpdmFtMTc4c2hhcm1hIiwiZW1haWwiOiJzaGl2YW0xNzhzaGFybWFAZ21haWwuY29tIiwic3ViSWQiOiJlMWQ4MjUzMi01NGY5LTRlNjktODBhMC1lZjNmYjgyNGI2N2MiLCJpYXQiOjE2NTYyNjQ2NTV9.I7ngE2e7_fXzZ9UTN6T_dAyO-QHyskzMhLhkhDE6LXs' \
--header 'Content-Type: application/json' \
--data-raw '{
    "fullName": "Shivam Sharma",
    "email": "kshitij076@gmail.com",
    "mobile": "9582865626"
}'
```

# Basic response for add contact
```
{
    "error": null,
    "message": "",
    "result": null,
    "response_code": 200
}
```
