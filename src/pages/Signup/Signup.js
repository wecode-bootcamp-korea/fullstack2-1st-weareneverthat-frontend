import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from '../../components/Topnav/Topnav';
import Footer from '../../components/Footer/Footer';
import './Signup.scss';

function Signup() {
	const [nameValue, setNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [pwValue, setPwValue] = useState('');
	const [isAlertVisibility, setIsAlertVisibility] = useState(false);
	const [isFormVisibility, setIsFormVisibility] = useState(true);
	const [isSuccessVisibility, setIsSuccessVisibility] = useState(false);

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

	const regexId =
		/^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/i;

	const regexPw = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8}/;

	const goToLogin = () => {
		navigate('/users/login');
	};

	const signupLogic = () => {
		if (regexId.test(emailValue) && regexPw.test(pwValue)) {
			console.log(regexId.test(emailValue) && regexPw.test(pwValue));
			fetch(`${process.env.REACT_APP_SERVER_HOST}/users/signup`, {
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
					setIsFormVisibility(false);
					setIsSuccessVisibility(true);
					// navigate('/');
				} else if (res.status === 400) {
					setIsAlertVisibility(true);
				}
			});
		} else {
			setIsAlertVisibility(true);
		}
	};

	return (
		<div className="sign">
			<Topnav />
			<div className="Signup">
				<div className="pageInfo">
					<div className="accountBox" onClick={goToLogin}>
						Account
					</div>
					<div className="createAccountBox">Create&nbsp;account</div>
				</div>
				<section
					className="signUpWrapper"
					style={{ visibility: isFormVisibility ? 'visible' : 'hidden' }}
				>
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
					<section
						className="alert"
						style={{ visibility: isAlertVisibility ? 'visible' : 'hidden' }}
					>
						<div>
							형식이 잘못됐습니다.
							<br />
							<br />
							이메일 형식의 아이디와 8자 이상의 영문 대소문자, 숫자, 특수문자가 혼용된 비밀번호를
							사용해주세요.
						</div>
					</section>
				</section>
				<section
					className="successCreate"
					style={{ visibility: isSuccessVisibility ? 'visible' : 'hidden' }}
				>
					회원가입이 완료되었습니다!
					<br />
					<br />
					로그인 후 이용 바랍니다.
					<br />
					<br />
					weareneverthat®
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default Signup;
