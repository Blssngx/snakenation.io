import "./styles.css";
// import myVideo from "./myVideo.mp4";

export default function BackgroundVideo() {
    return (
        <div>
            <video loop autoPlay muted id="bg-video">
                <source src={myVideo} type="video/mp4" />
            </video>
        </div>
    );
}
