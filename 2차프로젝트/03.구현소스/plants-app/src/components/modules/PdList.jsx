import React from "react";

import { productList } from "../data/product_list";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import $ from "jquery";

import "../../css/product_list.scss";
import "swiper/css";
import "swiper/css/navigation";

function PdList({
  category,
  className,
  classSale,
  blog,
  clN,
  openCart,
  closeCart,
}) {
  const pdData = productList[category];
  const selData = Object.values(pdData);
  const selDataKey = Object.keys(pdData);

  const goSearchBtn = (txt) => {
    console.log(txt);

    // goSearch(txt);
    $(".cart-box").css({ right: "0px", opacity: "1" });
  };

  return (
    <>
      <div id="product-list-area">
        <section className={"product-list inbox page " + clN}>
          <div className="product-list-box">
            {
              <>
                <div className={"shop-link " + className}>
                  <Link to="/shop">
                    <span className="shop-all">SHOP ALL</span>
                  </Link>
                </div>
                {category == "bundle" && (
                  <div className="shop-tit">
                    <h2>
                      Save{" "}
                      <img
                        src={process.env.PUBLIC_URL + "/images/sticker.png"}
                        alt="sticker"
                      />
                      &nbsp;with bundles
                    </h2>
                  </div>
                )}
                {blog == "blog" && (
                  <div className="blog-tit">
                    <h2>Shop herbal saviours</h2>
                  </div>
                )}
              </>
            }
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              navigation={true}
              // allowTouchMove={false}
              /* 사용할 모듈을 여기에 적용시킨다 */
              modules={[Navigation]}
              // 스와이퍼 사이즈별 슬라이드수 변경!
              breakpoints={{
                100: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper2"
            >
              <div className="product-img-slider">
                {selData.map((v, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      to="/detail"
                      state={{ category: category, pname: selDataKey[i] }}
                    >
                      <div className="product-img-box">
                        {category == "single" ? (
                          <video
                            src={process.env.PUBLIC_URL + v.isrc2}
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : category == "bundle" ? (
                          <img
                            className="prd-img2"
                            src={process.env.PUBLIC_URL + v.isrc2}
                            alt={v.tit}
                          />
                        ) : (
                          ""
                        )}
                        <img
                          className="prd-img1"
                          src={process.env.PUBLIC_URL + v.isrc1}
                          alt={v.tit}
                        />

                        <div className="add-box" onClick={(e)=>{
                          e.preventDefault();
                          // openCart;
                          }}>
                          <span>QUICK ADD</span>
                        </div>
                        <div className={"sale-box " + classSale}>
                          <p>SALE</p>
                        </div>
                      </div>
                      <div className="product-txt">
                        <p>{v.tit}</p>
                        <span>${v.price}</span>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}

export default PdList;
