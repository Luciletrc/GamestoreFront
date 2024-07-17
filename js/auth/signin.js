const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    let dataForm = new FormData(signinForm);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "sf_redirect=%7B%22token%22%3A%2267839a%22%2C%22route%22%3A%22app_api_registration%22%2C%22method%22%3A%22POST%22%2C%22controller%22%3A%7B%22class%22%3A%22App%5C%5CController%5C%5CSecurityController%22%2C%22method%22%3A%22register%22%2C%22file%22%3A%22C%3A%5C%5CUsers%5C%5Clucil%5C%5COneDrive%5C%5CDocuments%5C%5C1_GRADUATE%20DEV%20WEB%20GAMING%5C%5CECF%5C%5CGamestoreBack%5C%5Cstudi-restaurant-symfony-lts-api%5C%5Csrc%5C%5CController%5C%5CSecurityController.php%22%2C%22line%22%3A54%7D%2C%22status_code%22%3A201%2C%22status_text%22%3A%22Created%22%7D");
    
    let raw = JSON.stringify({
      "username": dataForm.get('Email'),
      "password": dataForm.get('Password')
    });
    
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch(apiURL+"login", requestOptions)
    .then((response) => {
        if(response.ok){
            return response.json();
        }
        else{
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
    })
    .then((result) => {
        //Il faudra récupérer le vrai token
        const token = result.apiToken;
        setToken(token);
        //placer ce token en cookie
        setCookie(roleCookieName, result.roles[0], 7)
        window.location.replace("/");
    })
    .catch((error) => console.error(error));
}