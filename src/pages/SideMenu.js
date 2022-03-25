import { Route, Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <Link to="/">
        <button className="on">🏠　홈</button>
      </Link>
      <button>🔍　검색하기</button>
      <button>🏁　이용 안내</button>
      <div className="category">게시판</div>
      <Link to="/login">
        <button>🐵　원숭이 게시판</button>
      </Link>
      <button>🐶　강아지 게시판</button>
      <button>🐺　늑대 게시판</button>
      <button>🦊　여우 게시판</button>
      <button>🦝　너구리 게시판</button>
      <button>🐱　고양이 게시판</button>
      <button>🦁　사자 게시판</button>
      <button>🐯　호랑이 게시판</button>
      <button>🐷　돼지 게시판</button>
      <button>🐸　개구리 게시판</button>
      <button>🐼　판다 게시판</button>
      <button>🐨　코알라 게시판</button>
      <button>🐻　곰 게시판</button>
      <button>🐰　토끼 게시판</button>
      <button>🐹　햄스터 게시판</button>
      <button>🐗　멧돼지 게시판</button>
      <div className="category">고객센터</div>
      <button>📚　이용 약관</button>
      <button>📧　문의하기</button>
      <div className="copyright">© Animals. All Rights Reserved.</div>
    </div>
  );
};

export default SideMenu;
