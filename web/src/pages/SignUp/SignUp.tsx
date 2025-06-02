const SignUp = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <p>이름</p>
      <input type="text" placeholder="이름을 입력하세요" />
      <p>이메일</p>
      <input type="email" placeholder="이메일을 입력하세요" />
      <p>학과 정보</p>
      <input type="text" placeholder="학과를 입력하세요" />
      <p>학번</p>
      <input type="text" placeholder="학번을 입력하세요" />
      <button>회원가입 완료하기</button>
    </div>
  );
};

export default SignUp;
