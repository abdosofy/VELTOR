import heroimg from "../HomeImg/PHOTO2 (1).png"
import winter from "../HomeImg/winter.png"
import moon from "../HomeImg/moon.webp"
export default function Home(){
    return(
        <section className="hero">
            <div className="hero-img">
                <img id="heroImg" src={heroimg} alt="" />
            </div>
            <div className="title-hero">
                <h1>VELTOR</h1>
                <h1>WINTER</h1>
            </div>
            <div className="photo-winter">
                <img src={winter} alt="" />
            </div>
            <div className="moon">
                <img src={moon} alt="" />
            </div>
        </section>
    )
}