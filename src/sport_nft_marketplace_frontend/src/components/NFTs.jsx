import React from "react";
import Chance from 'chance/chance.js';


// ------------ LIST OF NFT ------------------ //

let NFTsData = [
    {
        id: 1,
        name: 'The Dancers',
        imgSrc: "https://img.freepik.com/free-photo/hip-hop-dancer-studio_144627-7468.jpg?uid=R28223310&ga=GA1.1.1694677124.1723745659",
        author: chance.name(),
        price: chance.integer({ min: 1, max: 1000 }),
        highestPrice: chance.integer({ min: 1, max: 1000 })
    },
    {
        id: 2,
        name: 'Yeah!',
        imgSrc: "https://img.freepik.com/free-photo/side-view-basketball-player-posing-hoodie-with-ball_23-2148432459.jpg?uid=R28223310&ga=GA1.1.1694677124.1723745659",
        author: chance.name(),
        price: chance.integer({ min: 1, max: 1000 }),
        highestPrice: chance.integer({ min: 1, max: 1000 })
    },
    {
        id: 3,
        name: 'Effort',
        imgSrc: "https://img.freepik.com/free-photo/person-enjoying-sport-collage_23-2149402966.jpg?uid=R28223310&ga=GA1.1.1694677124.1723745659",
        author: chance.name(),
        price: chance.integer({ min: 1, max: 1000 }),
        highestPrice: chance.integer({ min: 1, max: 1000 })
    },
    {
        id: 4,
        name: 'Punch Work',
        imgSrc: "https://img.freepik.com/free-photo/muay-thai-young-man-exercising-thai-boxing-gradient-wall-neon-light-fighter-practicing-training-martial-arts-action-motion-healthy-lifestyle-sport-asian-culture-concept_155003-37744.jpg?uid=R28223310&ga=GA1.1.1694677124.1723745659",
        author: chance.name(),
        price: chance.integer({ min: 1, max: 1000 }),
        highestPrice: chance.integer({ min: 1, max: 1000 })
    },
    {
        id: 5,
        name: 'e-Sport',
        imgSrc: "https://img.freepik.com/free-photo/portrait-young-african-american-woman-s-playing-vr-glasses-neon-light-gradient-background_155003-27264.jpg?uid=R28223310&ga=GA1.1.1694677124.1723745659",
        author: chance.name(),
        price: chance.integer({ min: 1, max: 1000 }),
        highestPrice: chance.integer({ min: 1, max: 1000 })
    },
    {
        id: 6,
        name: 'Motivation',
        imgSrc: "https://img.freepik.com/free-photo/young-woman-exercising-with-her-headphones_23-2149127344.jpg?uid=R28223310&ga=GA1.1.1694677124.1723745659",
        author: chance.name(),
        price: chance.integer({ min: 1, max: 1000 }),
        highestPrice: chance.integer({ min: 1, max: 1000 })
    },
    {
        id: 7,
        name: 'Stay Focused',
        imgSrc: "https://img.freepik.com/free-photo/side-view-man-step-box_23-2147775516.jpg?uid=R28223310&ga=GA1.1.1694677124.1723745659",
        author: chance.name(),
        price: chance.integer({ min: 1, max: 1000 }),
        highestPrice: chance.integer({ min: 1, max: 1000 })
    },
]

function NFTs() {
    return (
        NFTsData.map(NFT => {
            return (

                <div className="col component nft-component">
                    <div className="card mb-3">
                        <img className="card-img-top nft-image" src={NFT.imgSrc} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{NFT.name}</h5>
                            <h6 className="card-subtitle">{NFT.author}</h6>
                            <div className="row">
                                <div className="col">
                                    <p>Price <br />
                                        {NFT.price} ICP</p>
                                </div>
                                <div className="col">
                                    <p>Highest price<br />
                                        {NFT.highestPrice} ICP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    );
};

export default NFTs;
