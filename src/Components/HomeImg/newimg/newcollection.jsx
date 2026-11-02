import new1 from "../newimg/new 1.png"
export default function New(){
    return(
        <section className="new-collection">
            <h2>NEW COLLECTION</h2>
            <div className="containers">
                <div className="box">
                    <img src={new1} alt="" />
                </div>
            </div>
        </section>
    )
}