import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

export default function Categories() {

  var categories=[
    { title : "Vegetables",
      image : 'vegetables.jpg',
      body : "Buy fresh vegetables at reasonable price offeres.",
      button : "See all vegetable offeres",
      link : '/vegetables'
    },
    { title : "Cereals and Grains",
      image : 'grains.jpg',
      body : "Buy grains directly from farmeres at best price.",
      button : "See all grain offeres",
      link : '/grains',
    },
    { title : "Diary Products",
      image : 'diary.jpg',
      body : "We have fresh diary products with a large variety and best price offeres.",
      button : "See all diary products",
      link : '/diary',
    },
  ];

  return (
    <>
      <div className="mx-auto my-3 py-3 quote">
        <p className="text-center">
          <q>
            It is only the farmer who faithfully plants seeds in the Spring, who reaps a harvest in the Autumn.
          </q><br /> - B. C. Forbes
        </p>
      </div>

      {/* <!-- top 3 Blogs start here --> */}
      <div className="h3 py-3 d-flex justify-content-center mx-auto text-capitalize">Product categories</div>
      {/* <!-- Blog Card 1 --> */}
      <div className="cardContainer d-flex flex-row flex-wrap bd-highlight my-3 mx-auto justify-content-center align-items-center">
      {categories.map(category => {
      return (
       <div className="card mx-3 my-5">
          <img src={process.env.PUBLIC_URL + `/images/${category['image']}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{category['title']}</h5>
            <p className="card-text">{category['body']}</p>
            <Link to={category['link']} ><span className="btn btn-primary">{category['button']}</span></Link>
          </div>
        </div>
        )
        })
        }
  </div>
    </>
  );
}

