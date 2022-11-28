import { createContext } from "react";

const UserContext = createContext();

export default UserContext;

// createContext가 빈 채로 전달(프롭스 드릴링을 피하기 위해 사용)
// 실제로는 createContext에 로그인한 회원 정보가 들어옴, 빈 채로 전달하지 않음
// 실습할 때는 빈 채로 전달하고 provider로 강제로 로그인 정보 넣어 준 것!
