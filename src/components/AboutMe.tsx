import "../styles/AboutMe.scss";

const AboutMe = () => {
  return (
    <>
      <div className="title">
        <span className="blue">我</span>
        <span className="white">是谁</span>
      </div>
      <div className="introduction-content">
        <div className="cards-rows">
          <div className="card">啊啊啊</div>
          <div className="card">
            教什么鬼啊
            <br />
            能不能换行
            <br />
          </div>
          <div className="card">openCV我一年前就会了啊</div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
