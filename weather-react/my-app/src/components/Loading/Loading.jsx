import loadingImg from "../../images/loading.gif";
import "./loading.css";

export default function Loading() {
  return (
    <div className="loading_box">
      <img className="load_img" src={loadingImg} alt="" />
    </div>
  );
}
