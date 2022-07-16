const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const URL = 'https://uprospect-mailing-list.herokuapp.com/api/subscribers';

async function sendRequest(e) {
    e.preventDefault()
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let company = document.getElementById('company');
    let jobTitle = document.getElementById('job-title');

    const subscriberData = JSON.stringify(
        {
            data: {
                name: name.value,
                email: email.value,
                company: company.value,
                jobTitle: jobTitle.value
            }
    });

    const options = {
        method: 'POST',
        headers: myHeaders,
        body: subscriberData,
        redirect: 'follow'
    }

    const res = await fetch(URL, options)
    const resData = await res.json
    if (res.ok) {
        document.getElementById('successful-subscribe').style.display = 'block';
        setTimeout(()=> {
            document.getElementById('successful-subscribe').style.display = 'none';
        }, 5000)
        name.value = ''
        email.value = ''
        company.value = ''
        jobTitle.value = ''
    
    }
    else {
        document.getElementById('fail-subscribe').style.display = 'block';
        setTimeout(()=> {
            document.getElementById('fail-subscribe').style.display = 'none';
        }, 5000)
    }
}

