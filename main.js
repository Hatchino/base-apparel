const form = document.forms['form'];
const mail = document.getElementById('email');
const icon = document.querySelector('.icon-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkForm();
})


const checkForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const pError = document.querySelector('.error-mail');
    const mailValue = mail.value;


    //display error
    if (!emailRegex.test(mailValue)|| mailValue == null ) {
        let messsageError = '<p class="error-mail">Please provide a valid email</p>'

        if(!pError) {
            form.insertAdjacentHTML('afterend', messsageError);
            mail.classList.add('error');
        }
        if(!icon) {
            const divError = mail.nextElementSibling;
            divError.classList.add('icon-error');
            const iconError = divError.firstElementChild;
            iconError.style.display = "flex";
        }
    } else {
        if (pError) {
            pError.remove();
            mail.classList.remove('error');

            const divError = mail.nextElementSibling;
            divError.classList.remove('icon-error');
            const iconError = divError.firstElementChild;
            iconError.style.display = "none";
        }
    }
}