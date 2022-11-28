import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Posts from "./posts/Posts";
import About from "./about/About";
import "./main.css";

export default function Main() {
  // UserContext(Provider로 value값 가짐) 중 isLogin 값을 가져 옴.
  const { isLogin } = useContext(UserContext);

  return (
    // axios 사용하면 일단 undefined 던지고 그다음 통신되기 때문에 에러 처리를 안 해주면 posts값이 undefined라 Posts.jsx에서 map이 안 됨,
    <main>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <ul className="posts">
          {/* components array로 생성 */}
          <Posts />
        </ul>
        {isLogin ? <About /> : <></>}
      </div>
    </main>
  );
}
