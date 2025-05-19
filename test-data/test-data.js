const validCredentials = {
    email: "teste@email.com",
    password: "1@Bc" 
}

const invalidCredentials = [
        { email: " ", password: '12Ab$', isValid: false },
        { email: '.email@email.com', password: '12Ab$', isValid: false },
        { email: '-email@email.com', password: '12Ab$', isValid: false },
        { email: 'email-@email.com', password: '12Ab$', isValid: false },
        { email: '$email-@email.com', password: '12Ab$', isValid: false },
        { email: 'email@email', password: '12Ab$', isValid: false },
        { email: 'email.com', password: '12Ab$', isValid: false },
        { email: 'email@email.com', password: " ", isValid: false },
        { email: 'email@email.com', password: '12Ab', isValid: false },
        { email: 'email@email.com', password: ';12Ab', isValid: true },
        { email: 'email@email.com', password: '12$aA', isValid: true }
      ];

module.exports = {validCredentials, invalidCredentials}