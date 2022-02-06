import './Logout.css';

function Logout(){

    function logout() {
        window.localStorage.clear();
        window.location.href = "http://localhost:3000/login";
    }
    
    return (
        <div className='fixedbutton'>
            <button className="logout-wrapper" onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout;