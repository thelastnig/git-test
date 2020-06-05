import React, { Component } from 'react';
let gapi = window.gapi

class Main extends Component {

	componentDidMount () {
		gapi.load("client:auth2", () => {
			gapi.auth2.init({
				client_id: "581322304512-flfucl3tgfqrffnoja2g4768peqsk0be.apps.googleusercontent.com",
				Scope: "https://www.googleapis.com/auth/photoslibrary https://www.googleapis.com/auth/photoslibrary.readonly https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata ",
			});
			console.log("========== GAPI was successfully created! ===========");
		})
		// window.gapi.load('auth2', function() {
		// });
	}

	googleBtnClick = () => {
		console.log("버튼 클릭");
		gapi.auth2.getAuthInstance()
		.signIn({
			approval_prompt: 'force', // 비밀번호 입력창 (동작안함)
			max_auth_age: 0,
			// prompt: 'consent', // 동의화면 표시
			// scope: credentials.googlePhotoApi.Scope
		})
		.then(()=> {
			console.log("Sign-in successful");
			localStorage.setItem('logged', 'true');
			// this.props.history.push("/guide");
		},
			function(err) {
		localStorage.setItem('logged', 'false');
				 console.error("Error signing in", err); });
	}
	render(){
		return (
			<div className="wrapper">
				Goggle Login Test
				<button onClick={this.googleBtnClick}>구글 로그인 버튼</button>
			</div>
		)
	}
}

export default Main;