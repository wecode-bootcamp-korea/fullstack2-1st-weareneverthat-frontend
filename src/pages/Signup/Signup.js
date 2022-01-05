import './Signup.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from '../../components/Topnav/Topnav';

function Signup() {
	const [nameValue, setNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [pwValue, setPwValue] = useState('');
	const [alertVisibility, setAlertVisibility] = useState('hidden');
	const [formVisibility, setFormVisibility] = useState('visible');
	const [successVisibility, setSuccessVisibility] = useState('hidden');

	const handleNameInput = e => {
		setNameValue(e.target.value);
	};

	const handleEmailInput = e => {
		setEmailValue(e.target.value);
	};

	const handlePwInput = e => {
		setPwValue(e.target.value);
	};

	const navigate = useNavigate();

	const goToLogin = () => {
		navigate('/login');
	};

	const signupLogic = () => {
		fetch('http://localhost:8000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			mode: 'cors',
			body: JSON.stringify({
				name: nameValue,
				email: emailValue,
				password: pwValue,
			}),
		}).then(res => {
			if (res.status === 201) {
				setFormVisibility('hidden');
				setSuccessVisibility('visible');
				// navigate('/');
			} else if (res.status === 400) {
				setAlertVisibility('visible');
			}
		});
	};

	return (
		<>
			<Topnav />
			<div className="Login">
				<div className="pageInfo">
					<div className="accountBox" onClick={goToLogin}>
						Account
					</div>
					<div className="createAccountBox">Create&nbsp;account</div>
				</div>
				<section className="wrapper" style={{ visibility: formVisibility }}>
					<form className="inputBox">
						<section className="nameInput">
							<div>이름</div>
							<input
								type="text"
								placeholder="이름"
								value={nameValue}
								onChange={handleNameInput}
							></input>
						</section>
						<section className="emailInput">
							<div>이메일</div>
							<input
								type="text"
								placeholder="이메일"
								value={emailValue}
								onChange={handleEmailInput}
							></input>
						</section>
						<section className="pwInput">
							<div>비밀번호</div>
							<input
								type="password"
								placeholder="비밀번호"
								value={pwValue}
								onChange={handlePwInput}
							></input>
						</section>
					</form>
					<section className="signupBtn">
						<button onClick={signupLogic}>CREATE ACCOUNT</button>
					</section>
					<section className="returnLogin" onClick={goToLogin}>
						<div>로그인으로 돌아가기</div>
					</section>
					<section className="alert" style={{ visibility: alertVisibility }}>
						<div>정보를 다시 한번 확인해주세요.</div>
					</section>
				</section>
				<section className="successCreate" style={{ visibility: successVisibility }}>
					회원가입이 완료되었습니다!
					<br />
					<br />
					로그인 후 이용 바랍니다.
					<br />
					<br />
					weareneverthat®
				</section>
			</div>
		</>
	);
}

export default Signup;
