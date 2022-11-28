import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import Posts from "./posts/Posts";
import About from "./about/About";
import "./main.css";

export default function Main() {
  // UserContext(Provider로 value값 가짐) 중 isLogin 값을 가져 옴.
  const { isLogin } = useContext(UserContext);
  const [posts, setPosts] = useState();

  //   처음에 axios통신해서 setPosts 세팅했다! 그럼 state값 변한 거니까 재 렌더링, 다시 실행, 또 axios 통해서 또 set함수 세팅, state값 변하니까 또 렌더링하면서 무한반복,, 그래서 useEffect에 넣고, []작성해서 첫 렌더링 시 한 번만 일어나도록! 그냥 암기하기! 화면 깜빡임 증상은 useLayoutEffect! 암기!
  // 어차피 posts에서 map돌릴 거라 렌더링도 posts에서 해도 되지만 코드 많이 수정하면 헷갈리니까 여기 그대로 둔다고 함....
  useEffect(() => {
    axios
      .get(
        " https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json"
      )
      .then((json) => {
        setPosts(json.data);
      });
  }, []);
  return (
    // axios 사용하면 일단 undefined 던지고 그다음 통신되기 때문에 에러 처리를 안 해주면 posts값이 undefined라 Posts.jsx에서 map이 안 됨,
    <main>
      {posts === undefined ? (
        <></>
      ) : (
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <ul className="posts">
            {/* components array로 생성 */}
            <Posts posts={posts} />
          </ul>
          {isLogin ? <About /> : <></>}
        </div>
      )}
    </main>
  );
}
