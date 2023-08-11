const regForm = document.querySelector("#signup-from");

// const alerts = document.querySelector(".alertContainer");



// User Registration

// const firstname = document.querySelector('#firstname')
// const lastname = document.querySelector('#lastname')
// const email = document.querySelector('#email')
// const cohort = document.querySelector('#cohort')
// const password = document.querySelector('#password')
// const form = document.querySelector('.form')




let user = {

};

const getUserDetails = () => {
    const firstname = document.querySelector('#firstname').value
    const lastname = document.querySelector('#lastname').value
    const email = document.querySelector('#email').value
    const cohort = document.querySelector('#cohort').value
    const password = document.querySelector('#password').value
    
       
    user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        cohort: cohort,
        password: password,

    }
}


regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    getUserDetails();
    try {

        const res = await fetch('http://localhost:4500/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'


            },
            body: JSON.stringify(user)
          })

          const data = await res.json()
           let html = `<div class="alerts"> ${data?.message??'something went wrong'}</div>`
          alerts.innerHTML = html;
          setTimeout(()=>{
            alerts.innerHTML = ''
            window.location.href = "../login/login.html"
          },2000)
        
    } catch (error) {
        console.log(error)
        let html = `<div class="alerts"> ${error.message}</div>`
        alerts.innerHTML = html;
        setTimeout(()=>{
          alerts.innerHTML = ''
        },2000)
        
    }

});






