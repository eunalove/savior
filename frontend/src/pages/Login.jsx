import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function isLogin() {
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  } else {
    return false;
  }
}

export default function Login() {
  let navigate = useNavigate();

  return (
    <div>
      {!isLogin() ? (
        <div>
          <a href={"/"}>
            
            <Button className="bg-[#ea580c] border-[#ea580c] font-bold text-lg">
              로그인
            </Button>
          </a>
        </div>
      ) : (
        <div>
          <Link to="/profile">
            <Button className="bg-[#90CAF9] border-[#90CAF9] font-bold text-lg mr-[5px]">
              내 정보
            </Button>
          </Link>

          <Button
            className="bg-[#ea580c] border-[#ea580c] font-bold text-lg"
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('name');
              localStorage.removeItem('profile');
              window.location.replace('/');
            }}
          >
            로그아웃
          </Button>
        </div>
      )}
    </div>
  );
}