import './Login.scss';
import { useState } from 'react';

function Login() {
	const [borderColor, setBorderColor] = useState('1px solid green');
	return (
		<div className="Login">
			<form>
				<section>
					<div>이메일</div>
					<input type="text" placeholder="이메일"></input>
				</section>
				<section>
					<div>비밀번호</div>
					<input type="password" placeholder="비밀번호"></input>
				</section>
			</form>
		</div>
	);
}

export default Login;
