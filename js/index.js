// sign up code
const signUpName = document.getElementById("signUpName"); 
const signUpEmail = document.getElementById("signUpEmail"); 
const signUpPassword = document.getElementById("signUpPassword"); 
const signupBtn = document.getElementById("signupBtn"); 

let signUpInfo;
if(localStorage.getItem("users") == null)
{
    signUpInfo = [];
}
else
{
    signUpInfo = JSON.parse(localStorage.getItem("users"));
}
function signUp()
{

    signUpValid();
    isExist();

    if(signUpValid() == true && isExist() == false)
    {
        let user = 
        {
            name:signUpName.value,
            email:signUpEmail.value,
            password:signUpPassword.value
        }

        signUpInfo.push(user)
        localStorage.setItem("users", JSON.stringify(signUpInfo));
        const confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");
        const signin = document.getElementById("signin")
        signin.classList.replace("d-none", "d-block");
    }
    else
    {
        const wrongInput = document.getElementById("wrongInput");
        wrongInput.classList.replace("d-none", "d-block");
    }

}

function signUpNameRegex()
{
    

    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if( regex.test(signUpName.value) == true && signUpName.value != "")
    {
        signUpName.classList.add("is-valid");
        signUpName.classList.remove("is-invalid");
        

        return true
    }
    else
    {
        
        signUpName.classList.add("is-invalid");
        signUpName.classList.remove("is-valid");
       

        return false
    }
}
function signUpPasswordRegex()
{
    let regex = /^.{5,15}$/;
   

    if( regex.test(signUpPassword.value) == true && signUpPassword.value != "")
    {
        signUpPassword.classList.add("is-valid");
        signUpPassword.classList.remove("is-invalid");
       

        return true
    }
    else
    {
        
        signUpPassword.classList.add("is-invalid");
        signUpPassword.classList.remove("is-valid");
        

        return false
    }
}

function signUpEmailRegex()
{
   

    let regex = /@[a-z]{5,10}(\.com)$/;
    if( regex.test(signUpEmail.value) == true && signUpEmail.value != "")
    {
        signUpEmail.classList.add("is-valid");
        signUpEmail.classList.remove("is-invalid");
        

        return true
    }
    else
    {
        
        signUpEmail.classList.add("is-invalid");
        signUpEmail.classList.remove("is-valid");
        

        return false
    }
}

function isExist()
{
    let accountExistMsg = document.getElementById("accountExistMsg");
    
    for(let i = 0; i < signUpInfo.length; i++)
    {

        if(signUpInfo[i].name.toLowerCase() == signUpName.value.toLowerCase() || signUpInfo[i].email.toLowerCase() == signUpEmail.value.toLowerCase())
        {
            accountExistMsg.classList.replace("d-none", "d-block");
            signUpName.classList.remove("is-valid");
            signUpEmail.classList.remove("is-valid");
            signUpPassword.classList.remove("is-valid");

            return true
        }
    }
    return false
}
function signUpValid()
{
    signUpNameRegex();   
    signUpEmailRegex();
    signUpPasswordRegex();

    if( (signUpNameRegex() == true && signUpEmailRegex() == true && signUpPasswordRegex() == true))
    {
        return true
    }
    else
    {
        return false
    }
}

// login code
var username = localStorage.getItem("sessionUsername");
function login()
{
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let loginBtn = document.getElementById("loginBtn");
    let wrongMsg = document.getElementById("wrongMsg");

    if(loginEmail.value == "" || loginPassword.value == "")
    {
        let fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false
    }

    for(var i = 0; i < signUpInfo.length; i++)
    {
        if(signUpInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() && signUpInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase())
        {
            
            localStorage.setItem('sessionUsername', signUpInfo[i].name)
            loginBtn.setAttribute("href", "welcome.html");
        }
        else
        {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    }
    
}
document.getElementById('userNameWelcome').innerHTML = 'Welcome '+username

