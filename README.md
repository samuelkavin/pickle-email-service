<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

Simple email service for Pickle Auction with Nestjs and Nodemailer. There are 4 fields and all of them are required. Please enter your real email in email field to receive a copy of an email.

```
{
  "name": "John Doe",
  "message": "Example inquiry message",
  "mobile": "+60121234567",
  "email": "example@gmail.com"
}
```

##### Features

- Added swagger for API documentation
- Added global validation pipe
- Used nodemailer and hotmail service instead setup SMTP Service

##### Thing should improve
- Add user registration payload to DB
- Add unit test for other modules. Currently only focused on user module (100%)


## Prerequisites
- node >= 14.17.5
- npm >= 6.14.14

## Installation & Running the app

```bash
$ git clone https://github.com/samuelkavin/email-service.git <folder-name>
$ cd <folder-name>
$ npm install
$ npm run start
open url in browser ( http://localhost:3000/api/ )
```

## Architecture

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://i.postimg.cc/sXXcwTTK/Screenshot-2022-04-03-at-11-20-23-PM.png" width="100%" alt="Nest Logo" /></a>
</p>


###### Folder Structure
```
src
└── modules
│ └─── email 				# nodemailer & email service configurations 
│ └─── user				  # user registration api 
├── main.ts					 # app, cors & swagger config
│.eslintrc.js
│.prettierrc
│tsconfig.json
│package.json

```

## Test
Please run following command for unit test. I only have covered for user module due to time constraint.
```bash
# unit tests
$ npm run test
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
