import { useProgress } from "@react-three/drei"

export const LoadingScreen = () => {
    const {progress, active} = useProgress();
    return (
        <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
            <div className="loading-screen__container">
                <h1 className="loading-screen__title">ZOO</h1>
                <div className="progress__container">
                    <div className="progress__bar" style={{width: `${progress}%`}}>

                    </div>
                </div>
            </div>
        </div>
    )
}