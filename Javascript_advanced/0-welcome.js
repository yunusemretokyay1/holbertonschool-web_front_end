function welcome(firstname,lastname){
    const fullName =  `${firstname}, ${lastname}`;
    function displayFullName(){
        alert( `Welcome  ${fullName}!`);
    }
    displayFullName(fullName);
}
welcome('Holberton ', 'School');