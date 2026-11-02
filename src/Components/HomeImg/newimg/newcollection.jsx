import new1 from "../newimg/new 1.png"
import back1 from "../newimg/back 1.png"
import new2 from "../newimg/new2.png"
import back2 from "../newimg/back2 (1).png"
import new3 from "../newimg/new3 (1).png"
import back3 from "../newimg/back3.png"
import new4 from "../newimg/new 4.png"
import back4 from "../newimg/back 4.png"
import new5 from "../newimg/new 5.png"
import back5 from "../newimg/back 5.png"
import new6 from "../newimg/new 6.png"
import back6 from "../newimg/back 6.png"
import new7 from "../newimg/new 7.png"
import back7 from "../newimg/back 7.png"
export default function New(){
    return(
        <section className="new-collection">
            <h2>NEW COLLECTION</h2>
            <div className="containers">
                <div className="box">
                    <div className="box-img">
                    <img className="img1" src={new1} alt="" />
                    <img className="img2" src={back1}/>
                    </div>
                    <h3>WILDFLOWER HOODY</h3>
                    <p>price:500</p>
                </div>
                <div className="box">
                    <div className="box-img">
                    <img className="img1" src={new4} alt="" />
                    <img className="img2" src={back4} alt="" />
                    </div>
                    <h3>WILDFLOWER HOODY</h3>
                    <p>price:500</p>
                </div>
                <div className="box">
                    <div className="box-img">
                    <img className="img1" src={new5} alt="" />
                    <img className="img2" src={back5} alt="" />
                    </div>
                    <h3>GREYHOUND HOODY</h3>
                    <p>price:600</p>
                </div>
                <div className="box">
                    <div className="box-img">
                    <img className="img1" src={new6} alt="" />
                    <img className="img2" src={back6} alt="" />
                    </div>
                    <h3>GREYHOUND HOODY</h3>
                    <p>price:600</p>
                </div>
                <div className="box">
                    <div className="box-img">
                    <img className="img1" src={new7} alt="" />
                    <img className="img2" src={back7} alt="" />
                    </div>
                    <h3>DESIGN STUDIO HOODY</h3>
                    <p>price:650</p>
                </div>
            </div>
        </section>
    )
}