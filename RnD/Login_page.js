document.addEventListener('DOMContentLoaded', function() {
  // TODO
});

function login(){
  const username = document.getElementById('usernameInput').value;
  const password = document.getElementById('passwordInput').value;

  if(username.length === 0){
    Swal.fire("Username cannot be empty");
    return;
  }

  if(username.length < 3){
    Swal.fire("Username must be at least 3 characters long");
    return;
  }

  if(password.length > 16){
    Swal.fire("Password must be at most 16 characters long");
    return;
  }

  if(password.length < 8){
    Swal.fire("Password must be at least 8 characters long");
    return;
  }

  if(password.length === 0){
    Swal.fire("Password cannot be empty");
    return;
  }

  Swal.fire({
    title: 'Logging in...',
    onBeforeOpen: () => {
      Swal.showLoading();
    }
  });
  window.location.href = "homepage.html";
}
