function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        person: formData.get('person'),
        hp: 40,
        rupees: 1000,
        completed: {}
    };
    return user;
}

export default makeUser;