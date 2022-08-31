import React from "react";
import articles from "../components/Articles/articles.css"
import Navbar from "../components/Navbar/Navbar";
import mountain1 from "../components/Articles/mountain1.JPG";
import mountain2 from "../components/Articles/mountain2.jpg";
import mountain4 from "../components/Articles/Dolukanda2.jpg";
import mountain3 from "../components/Articles/dolukanda.jpg";
import { useTitle } from "../components/Title/Title"
import BestReply from "../components/Forum/Reply/BestReply";

const ArticleInfo = () => {
    useTitle("Hikers")
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Dolukanda</h1>
                <div className="row">
                    <div className="mt-4 col-sm-8 articlemountain8">
                        <a href="/ArticleInfo"><h3 className=" articlesheadline">Know before you go : Dolukanda Mountain</h3></a>
                        <div className=" font-weight-bold articlesaddress"><p>Dolukanda Mountain is a well known mountain range due to the Dolukanda Raja Maha Viharaya (Dolukanda Buddhist Temple) and it is believed that the mountain is directly linked to the great Indian epic, Ramayana Trail in Sri Lanka . Nowadays this place is very famous for hiking and camping.
                            <br />
                            <br />
                            Sanjeewani in Hindu mythology is a magical herb with super natural powers which of them considered be growing at dark and believing to cure any disease This legend also explains the abundance of Ayurvedic herbs in this area, was one reason to build the Arankale ancient forest monastery during the period of Anuradhapura.
                            <br />
                            <br />
                            The route to Dolukanda mountain is from Colombo - Nittambuwa - Kurunegala  10th mile post on Hiripitiya road - Hunupola - Dolukanda.It is better to contact a local person who know the trek when traveling to this mountain.This is a bit hard trek and not recommend for senior citizens and travelers with kids.
                            While climbing Dolukanda you will see a lot of gum on the way. There are also huge russet trees and large herbaceous plants.
                            <br />
                            <br />
                            Among these are rare herbs called Gardi Raja. It is noteworthy that the herb grows on another plant. At the same time, the black stone ruins can be seen along the way as evidence that there were buildings. Many treasures can be seen being destroyed by thieves.
                            Adviceable to bring 2 Lts of water / snacks but ensure to bring back all plastics you bring.It is not dangerous to climb but make sure to go as a group. Beware of wild boars / insects.</p>
                        </div>
                        <div className="mt-2 viewsarticle">25 views</div>
                        <div className="authorarticle">by Mahesh Vimalasena</div>
                        <BestReply />
                    </div>
                    <div className="mt-4 col-sm-4  articlemountain4 ">
                        <h8 className="articleinfodate">Jul 5,2022  10.00 PM</h8>
                        <img src={mountain1} className=" mountain-img" alt="Mountain1"></img>
                        <img src={mountain2} className="mountain-img" alt="Mountain2"></img>
                        <img src={mountain4} className="mountain-img" alt="Mountain4"></img>
                        <img src={mountain3} className="mountain-img" alt="Mountain3"></img>
                    </div>
                </div>

            </div>
        </div>

    );

}
export default ArticleInfo


{/* {/* <h5 className="articleinfoh5">Most asked questions in the forum about this mountain</h5>

                        <div className="mt-1 forum-container">
                    <div className="d-flew flex-column w-100">
                        <a href="/ArticleInfo"><h3 className="pt-1 pb-2 pl-4 font-weight-bold articlesheadline">Know before you go : Dolukanda Mountain</h3></a>
                        <div className=" font-weight-bold articlesaddress">Dolukanda Mountain is a well known mountain range due to the Dolukanda Raja Maha Viharaya (Dolukanda Buddhist Temple) and it is believed that
                            the mountain is directly linked to the great Indian epic, Ramayana Trail in Sri Lanka.Nowadays this place is very famous for hiking.
                        </div>
                        <div className="mt-2 articleviews">25 views</div>
                        <div className="articleauthor">by Mahesh Vimalasena  | <h8 className="articledate">Jul 5,2022  10.00 PM</h8></div>
                    </div>
                    <img src={mountain1} className="float-left mountain-img" alt="Mountain1"></img>
                </div> */}