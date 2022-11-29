import React from "react";

import HomeLogo from "./assets/images/logo.svg";
import SearchImg1 from "./assets/images/search-img1.jpg";
import SearchImg2 from "./assets/images/search-img2.jpg";
import ListImg1 from "./assets/images/list-img1.jpg";

function App() {
  return (
    <main>
      {/* DESKTOP-HEADER-SECTION-START  */}
      <div className="desktop-header">
        <header>
          <div className="navigation-wrap  start-header start-style ">
            <div className="container">
              <div className="row">
                <div className="col-4 col-sm-5 col-md-5">
                  <ul className="list-unstyled mb-0">
                    <li className="d-inline-block">
                      <a
                        className="navbar-brand"
                        href="index.html"
                        target="_blank"
                      >
                        <embed src={HomeLogo} width="40px" />
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <div className="search-container">
                        <form>
                          <div className="outer_search">
                            <div className="saerch-bar" id="search_bars">
                              <span className="material-icons">search</span>
                              <input
                                type="text"
                                placeholder="Search Food Items or Users"
                                name="search"
                              />
                            </div>
                            <button className="yellow-bg">SEARCH</button>
                          </div>
                          <div className="search-dropdown" id="scrolling">
                            <div className="search-items">
                              <h6 className="grey-text">FOOD ITEMS</h6>
                              <ul className="list-unstyled mb-3">
                                <li className="d-inline-block">
                                  <img
                                    className="seaarch-img"
                                    src={SearchImg1}
                                    alt="search-img1"
                                  />
                                </li>
                                <li className="d-inline-block">
                                  <h5>Tuwo Rice (25kg)</h5>
                                </li>
                              </ul>
                              <ul className="list-unstyled mb-3">
                                <li className="d-inline-block">
                                  <img
                                    className="seaarch-img"
                                    src={SearchImg2}
                                    alt="search-img1"
                                  />
                                </li>
                                <li className="d-inline-block">
                                  <h5>Tuwo Rice (50kg)</h5>
                                </li>
                              </ul>
                              <ul className="list-unstyled mb-3">
                                <li className="d-inline-block">
                                  <img
                                    className="seaarch-img"
                                    src={SearchImg1}
                                    alt="search-img1"
                                  />
                                </li>
                                <li className="d-inline-block">
                                  <h5>Tuwo Rice (25kg)</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="search-users">
                              <h6 className="grey-text">Users</h6>

                              <ul className="list-unstyled mb-3">
                                <li className="d-inline-block">
                                  <img
                                    className="seaarch-list"
                                    src={ListImg1}
                                    alt="search-img1"
                                  />
                                </li>
                                <li className="d-inline-block">
                                  <h5>Tumininu Tayo</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className=" col-8 col-sm-7 col-md-7 ">
                  <nav className="navbar navbar-expand-md navbar-light float-right text-center ">
                    <div
                      className="collapse navbar-collapse "
                      id="navbarSupportedContent "
                    >
                      <ul className="navbar-nav drop-menu ">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                          <a className="nav-link active " href="index.html ">
                            <p className="mb-0 ">
                              <i className="material-icons-outlined ">home</i>
                            </p>
                            <p className="mb-0 ">Home</p>
                          </a>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                          <a className="nav-link " href="# ">
                            <p className="mb-0 ">
                              <span className="material-icons ">
                                people_outline
                              </span>
                            </p>
                            <p className="mb-0 ">Users</p>
                          </a>
                        </li>

                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                          <a className="nav-link " href="# ">
                            <p className="mb-0 ">
                              <span className="material-icons-outlined ">
                                shopping_cart
                              </span>
                            </p>
                            <p className="mb-0 ">Cart</p>
                          </a>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                          <a className="nav-link " href="# ">
                            <p className="mb-0 ">
                              <span className="material-icons-outlined ">
                                shopping_bag
                              </span>
                            </p>
                            <p className="mb-0 ">Order</p>
                          </a>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                          <a href="/" className="nav-link ">
                            <p className="mb-0 ">
                              <span className="material-icons ">
                                more_horiz
                              </span>
                            </p>
                            <p className="mb-0 ">
                              More <span className="toggle"></span>
                            </p>
                          </a>
                          <ul className="dropdown p-0  nav-clr">
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link">
                                {" "}
                                <span className="material-icons ">
                                  account_balance_wallet
                                </span>{" "}
                                Wallet{" "}
                              </a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link ">
                                {" "}
                                <span className="material-icons ">
                                  notifications
                                </span>{" "}
                                Notifications{" "}
                              </a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link ">
                                {" "}
                                <span className="material-icons ">
                                  share
                                </span>{" "}
                                Refer and Earn{" "}
                              </a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link ">
                                {" "}
                                <span className="material-icons ">
                                  favorite_border
                                </span>
                                Saved Products{" "}
                              </a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link ">
                                {" "}
                                <span className="material-icons ">
                                  error_outline
                                </span>
                                Frequently Asked Questions{" "}
                              </a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link ">
                                {" "}
                                <span className="material-icons ">
                                  settings_cell
                                </span>
                                Contact Admin{" "}
                              </a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link ">
                                {" "}
                                <span className="material-icons">
                                  location_city
                                </span>
                                Change City
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                          <a href="/" className="nav-link ">
                            <p className="mb-0 ">
                              <span className="material-icons ">
                                account_circle
                              </span>
                            </p>
                            <p className="mb-0 ">
                              My Account <span className="toggle"></span>
                            </p>
                          </a>
                          <ul className="dropdown p-0 nav-clr">
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link ">
                                {" "}
                                <span className="material-icons-outlined ">
                                  account_circle
                                </span>{" "}
                                Profile{" "}
                              </a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link ">
                                {" "}
                                <span className="material-icons-outlined ">
                                  location_on
                                </span>{" "}
                                Manage Address{" "}
                              </a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link ">
                                {" "}
                                <span className="material-icons-outlined ">
                                  lock
                                </span>{" "}
                                Change Password{" "}
                              </a>
                            </li>
                            <li className="nav-item pl-4 pl-md-0 ml-0 ">
                              <a href="/" className="nav-link ">
                                {" "}
                                <span className="material-icons-outlined ">
                                  login
                                </span>
                                Logout{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* <!------ DESKTOP-HEADER-SECTION-END  ------> */}
      {/* <!------ MOBILE-HEADER-SECTION-START ------> */}
      <section className="mobile-header">
        <div className="container">
          <div className="d-flex mb-3">
            <div className=" justify-content-start">
              <img
                className="mobile-logo"
                src="assets/images/main-logo.svg"
                alt="mobile-logo"
              />
            </div>
            <div className=" ml-auto justify-content-end">
              <img
                className="profile-img"
                src="assets/images/profile_img.jpg"
                alt="profile-img"
              />
            </div>
          </div>
        </div>
        <div className="mobile-search">
          <div className="container">
            <div
              className="search-container"
              data-toggle="modal"
              data-target="#search-modal"
            >
              <form>
                <div className="saerch-bar">
                  <div>
                    <span className="material-icons">search</span>
                    <input type="text" placeholder="Search " name="search" />
                  </div>
                  {/* <!-- <button className="yellow-bg">SEARCH</button> --> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!------ MOBILE-HEADER-SECTION-END ------> */}
      {/* <!------ HERO_SECTION_START ------> */}
      <section className="hero_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 webhero-view">
              <div className="hero-content text-center">
                <a href="refer_earn.html">
                  <div className="box-outline refer-bg">
                    <h6>Refer & Earn</h6>
                    <p>Invite a friend now</p>
                    <div className="home-list-img">
                      <img src="assets/images/refer-money.svg" alt="" />
                    </div>
                  </div>
                </a>
                <a href="make_list.html">
                  <div className="box-outline mt-4 list-make-bg">
                    <h6>Make a list</h6>
                    <p>Shop faster now</p>
                    <div className="home-list-img">
                      <img src="assets/images/list.svg" alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-12 col-lg-9">
              <div
                id="hero-sliderSlidesOnly"
                className="carousel slide home_slider"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#hero-sliderSlidesOnly"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#hero-sliderSlidesOnly"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#hero-sliderSlidesOnly"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#hero-sliderSlidesOnly"
                    data-slide-to="3"
                  ></li>
                  <li
                    data-target="#hero-sliderSlidesOnly"
                    data-slide-to="4"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="assets/images/slider1.jpg"
                      alt="slider1.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="assets/images/slider2.jpg"
                      alt="slider2.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="assets/images/slider1.jpg"
                      alt="slider1.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="assets/images/slider2.jpg"
                      alt="slider2.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="assets/images/slider1.jpg"
                      alt="slider1.jpg"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- <div id="hero-sliderSlidesOnly" className="carousel slide home_slider" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#hero-sliderIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#hero-sliderIndicators" data-slide-to="1"></li>
                            <li data-target="#hero-sliderIndicators" data-slide-to="2"></li>
                            <li data-target="#hero-sliderIndicators" data-slide-to="3"></li>
                            <li data-target="#hero-sliderIndicators" data-slide-to="4"></li>
                            <li data-target="#hero-sliderIndicators" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="assets/images/slider1.jpg" alt="slider1.jpg">
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/images/slider2.jpg" alt="slider2.jpg">
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/images/slider1.jpg" alt="slider1.jpg">
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/images/slider2.jpg" alt="slider2.jpg">
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="assets/images/slider1.jpg" alt="slider1.jpg">
                            </div>
                        </div>
                    </div> --> */}
            </div>
            {/* <!-------- RESPOSNIVE-VIEW-START -------> */}
            <div className="col-md-12 col-lg-3 mobilehero-view">
              <div className="hero-content text-center">
                <div className="row">
                  <div className="col-6 col-md-6">
                    <a href="refer_earn.html">
                      <div className="box-outline refer-bg">
                        <h6>Refer &amp; Earn</h6>
                        <p>Invite a friend now</p>
                        <div className="home-list-img">
                          <img src="assets/images/refer-money.svg" alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-6">
                    <a href="make_list.html">
                      <div className="box-outline mt-4 list-make-bg">
                        <h6>Make a list</h6>
                        <p>Shop faster now</p>
                        <div className="home-list-img">
                          <img src="assets/images/list.svg" alt="" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-------- RESPOSNIVE-VIEW-END -------> */}
          </div>
        </div>
      </section>
      {/* <!------ HERO_SECTION_END ------> */}

      {/* </div> */}

      {/* <!------ CATEGORIES_SECTION_START  ------> */}
      <section className="categoires_wrapper mt-3 mb-3  d-lg-block">
        <div className="container">
          <div id="categoires-bg">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-6">
                <h4 className="heading">Categories</h4>
              </div>
              <div className="col-6 col-md-6 col-lg-6 text-right">
                <a href="/" className="text-uppercase brown-text viewall-btn">
                  View All
                </a>
              </div>
            </div>
            <div id="folloersSlider" className="dvslider">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="followers-inner">
                    <a href="listing.html">
                      <img src="assets/images/foodstuff-img.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="followers-inner">
                    <a href="listing.html">
                      <img src="assets/images/packfood_img.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="followers-inner">
                    <a href="listing.html">
                      <img src="assets/images/fruits-img.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="followers-inner">
                    <a href="listing.html">
                      <img src="assets/images/packfood_img.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="followers-inner">
                    <a href="listing.html">
                      <img src="assets/images/foodstuff-img.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!------ CATEGORIES_SECTION_END  ------> */}

      {/* <!------ FOOD-ITEMS-WEB-VIEW-SECTION-START ------> */}
      <section className="food-items-bg  d-none d-lg-block webfoodTab-view">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5">
              <ul className="nav nav-tabs foodtabs" id="foodTab" role="tablist">
                <li className="nav-item ">
                  <a
                    className="nav-link active"
                    id=""
                    data-toggle="tab"
                    href="#pally"
                    role="tab"
                    aria-controls="pally"
                    aria-selected="true"
                  >
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="recommended-tab"
                    data-toggle="tab"
                    href="#recommended"
                    role="tab"
                    aria-controls="recommended"
                    aria-selected="false"
                  >
                    Pally
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pre-orders-tab"
                    data-toggle="tab"
                    href="#pre-orders"
                    role="tab"
                    aria-controls="pre-orders"
                    aria-selected="false"
                  >
                    Recommended
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-lg-7">
              <form className="form-inline select-bg float-right">
                <div className="form-group mb-0">
                  <select className="form-control border-right-0">
                    <option>Categories</option>
                    <option>Soup & stew ingredients</option>
                    <option>Foodstuffs</option>
                    <option>Meat, Poultry & Seafood</option>
                  </select>
                </div>
                <div className="form-group mb-0">
                  <select className="form-control  border-right-0">
                    <option>Sub Categories</option>
                    <option>Grains</option>
                    <option>Tubers & Roots</option>
                  </select>
                </div>
                <div className="form-group mb-0">
                  <select className="form-control">
                    <option>Sort By: Price (Low to High)</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <hr className="border-bottom" />
          <div className="row ">
            <div className="col-lg-12">
              <div className="tab-content main" id="foodTabContent">
                <div
                  className="tab-pane fade show active "
                  id="pally"
                  role="tabpanel"
                  aria-labelledby="pally-tab"
                >
                  <h6 className="inner-head">16 Available Deals</h6>
                  <div className="">
                    <div className="row">
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner ">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="product_detail.html">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className=" product-img mb-3"
                                src="assets/images/Product-img1.jpg"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Titus 20kg (Full Carton){" "}
                              </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | <span className="clr-gr">In Season</span>
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner ">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img2.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Croaker Fish (Full Carton){" "}
                              </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img3.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">White Onions (40kg)</h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img4.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Guinea Corn Red (Paint...{" "}
                              </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                Buy slot
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img5.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Soya Beans (Paint Bucket){" "}
                              </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img6.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2 ">Soya Beans (100kg) </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img7.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Tuwo Rice (50kg)</h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img8.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Beans Oloyin - original (100kg){" "}
                              </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                Buy Slot
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img9.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Irish Potato (5kg) </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img10.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Ofada Rice (50kg) </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img11.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Sombo Pepper - Grade(...</h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img12.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Plantain Big Unripe (Stem of{" "}
                              </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500{" "}
                              <small>
                                per slot (slot size per person goes here)
                              </small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                Buy Slot
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade recommended-bg"
                  id="recommended"
                  role="tabpanel"
                  aria-labelledby="recommended-tab"
                >
                  <h6 className="inner-head mb-3 mt-3">16 Available Deals</h6>
                  <div className="">
                    <div className="row">
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner ">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img5.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Irish Potato (5kg) </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | <span className="clr-red">Off Season</span>
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div className="no-ratings">
                                <p>No ratings yet</p>
                              </div>
                              {/* <!-- <div className="rating-main pro-detail-star" data-vote="0">
                                                        <div className="mainstar hidden">
                                                            <span className="full" data-value="0"></span>
                                                            <span className="half" data-value="0"></span>
                                                        </div>
                                                        <div className="star">
                                                            <span className="full" data-value="1"></span>
                                                            <span className="half" data-value="0.5"></span>
                                                            <span className="selected"></span>

                                                        </div>
                                                        <div className="star">
                                                            <span className="full" data-value="2"></span>
                                                            <span className="half" data-value="1.5"></span>
                                                            <span className="selected"></span>

                                                        </div>

                                                        <div className="star">
                                                            <span className="full" data-value="3"></span>
                                                            <span className="half" data-value="2.5"></span>
                                                            <span className="selected"></span>
                                                        </div>

                                                        <div className="star">
                                                            <span className="full" data-value="4"></span>
                                                            <span className="half" data-value="3.5"></span>
                                                            <span className="selected"></span>
                                                        </div>

                                                        <div className="star">
                                                            <span className="full" data-value="5"></span>
                                                            <span className="half" data-value="4.5"></span>
                                                            <span className="selected"></span>
                                                        </div>
                                                    </div> --> */}
                              <div className="success-box">
                                <div className="text-message"></div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img6.png"
                                alt="Product-img6"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Soya Beans (100kg)</h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message"></div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img3.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">White Onions (40kg)</h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div className="no-ratings">
                                <p>No ratings yet</p>
                              </div>
                              {/* <!-- <div className="rating-main pro-detail-star" data-vote="0">
                                                        <div className="mainstar hidden">
                                                            <span className="full" data-value="0"></span>
                                                            <span className="half" data-value="0"></span>
                                                        </div>
                                                        <div className="star">
                                                            <span className="full" data-value="1"></span>
                                                            <span className="half" data-value="0.5"></span>
                                                            <span className="selected"></span>

                                                        </div>
                                                        <div className="star">
                                                            <span className="full" data-value="2"></span>
                                                            <span className="half" data-value="1.5"></span>
                                                            <span className="selected"></span>

                                                        </div>

                                                        <div className="star">
                                                            <span className="full" data-value="3"></span>
                                                            <span className="half" data-value="2.5"></span>
                                                            <span className="selected"></span>
                                                        </div>

                                                        <div className="star">
                                                            <span className="full" data-value="4"></span>
                                                            <span className="half" data-value="3.5"></span>
                                                            <span className="selected"></span>
                                                        </div>

                                                        <div className="star">
                                                            <span className="full" data-value="5"></span>
                                                            <span className="half" data-value="4.5"></span>
                                                            <span className="selected"></span>
                                                        </div>
                                                    </div> --> */}
                              <div className="success-box">
                                <div className="text-message"></div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img4.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Guinea Corn Red (Paint...{" "}
                              </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img5.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Soya Beans (Paint Bucket){" "}
                              </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget ">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img6.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2 ">Soya Beans (100kg) </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img7.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Tuwo Rice (50kg)</h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img8.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Beans Oloyin - original (100kg){" "}
                              </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img9.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Irish Potato (5kg) </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img10.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Ofada Rice (50kg) </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img11.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Sombo Pepper - Grade(...</h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Product-img12.png"
                                alt="Product-img1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Plantain Big Unripe (Stem of{" "}
                              </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade preorder-bg"
                  id="pre-orders"
                  role="tabpanel"
                  aria-labelledby="pre-orders-tab"
                >
                  <h6 className="inner-head mb-3 mt-3">3 Available Deals</h6>
                  <div className="">
                    <div className="row">
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Pre-order1.png"
                                alt="Pre-order1"
                              />
                            </a>
                          </div>

                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Strawberries</h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h6 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 per kg
                            </h6>
                            <p className="text-red mb-2">1kg of 50kg left</p>
                            <div className="preorder-progress stat-bar mb-2">
                              <span
                                className="stat-bar-rating"
                                role="button"
                                style={{ width: "80px" }}
                              >
                                80%
                              </span>
                            </div>
                            <p className="mb-2 dgrey-clr">
                              Delivery Date: July 23rd 2021
                            </p>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                                data-toggle="modal"
                                data-target="#preorderModal"
                              >
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Pre-order2.png"
                                alt="Pre-order2"
                              />
                            </a>
                          </div>
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Strawberries</h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h6 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 per kg
                            </h6>
                            <p className="text-red mb-2">1kg of 50kg left</p>
                            <div className="preorder-progress stat-bar mb-2">
                              <span
                                className="stat-bar-rating"
                                role="button"
                                style={{ width: "30%" }}
                              >
                                30%
                              </span>
                            </div>
                            <p className="mb-2 dgrey-clr">
                              Delivery Date: July 23rd 2021
                            </p>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 ">
                        <div className="pally-inner">
                          <div className="products-img-wrapper  mb-3 pointer">
                            <a href="/">
                              <div className="heart-icon">
                                <span className="material-icons">
                                  favorite_border
                                </span>
                              </div>
                              <img
                                className="mb-3 product-img"
                                src="assets/images/Pre-order3.png"
                                alt="Product-img3"
                              />
                            </a>
                          </div>
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Strawberries</h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h6
                              className="mb-2 mt-2
                                                 font-weight-bold simhead"
                            >
                              ₦7,500 per kg
                            </h6>
                            <p className="text-red mb-2 text-uppercase">
                              Closed
                            </p>
                            <div className="preorder-progress stat-bar mb-2">
                              <span
                                className="stat-bar-rating"
                                role="button"
                                style={{ width: "100%" }}
                              >
                                100%
                              </span>
                            </div>
                            <p className="mb-2 dgrey-clr">
                              Delivery Date: July 23rd 2021
                            </p>
                            <a href="/" className="closed-opacity">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="load-bg text-center mb-5 d-none d-lg-block">
                <a href="/">
                  <button typ="button" className="load-more text-uppercase ">
                    Load more items
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!------ FOOD-ITEMS-WEB-VIEW-SECTION-START ------> */}
      {/* <!------ FOOD-ITEMS-MOBILE-SECTION-START ------> */}
      <div className="fixed-food">
        <section className="food-items-bg  d-block d-lg-none mobilefoodTab-view">
          <div className="tabs-fixed">
            <div className="container ">
              <div className="d-flex">
                <div className=" justify-content-start"></div>
                <div className=" ml-auto justify-content-end">
                  <p
                    className="mb-0"
                    data-toggle="modal"
                    data-target="#fillter-modal"
                  >
                    <span className="material-icons align-top pr-2">
                      filter_list
                    </span>
                    Filter
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-5">
                  <ul
                    className="nav nav-tabs foodtabs"
                    id="foodTab"
                    role="tablist"
                  >
                    <li className="nav-item ">
                      <a
                        className="nav-link active"
                        id=""
                        data-toggle="tab"
                        href="#mobile-pally"
                        role="tab"
                        aria-controls="mobilepally"
                        aria-selected="true"
                      >
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="mobile-recommended-tab"
                        data-toggle="tab"
                        href="#mobile-recommended"
                        role="tab"
                        aria-controls="mobile-recommended"
                        aria-selected="false"
                      >
                        Pally
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="mobile-pre-orders-tab"
                        data-toggle="tab"
                        href="#mobile-pre-orders"
                        role="tab"
                        aria-controls="mobile-pre-orders"
                        aria-selected="false"
                      >
                        Recommended
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12 col-lg-7">
                  <ul className="list-unstyled mb-0 select-bg float-right d-none d-lg-block">
                    <li className="d-inline-block">
                      <div className="form-group mb-0">
                        <select className="form-control">
                          <option>Categories</option>
                          <option>Soup & stew ingredients</option>
                          <option>Foodstuffs</option>
                          <option>Meat, Poultry & Seafood</option>
                        </select>
                      </div>
                    </li>
                    <li className="d-inline-block">
                      <div className="form-group mb-0">
                        <select className="form-control">
                          <option>Sub Categories</option>
                          <option>Grains</option>
                          <option>Tubers & Roots</option>
                        </select>
                      </div>
                    </li>
                    <li className="d-inline-block">
                      <div className="form-group mb-0">
                        <select className="form-control">
                          <option>Sort By: Price (Low to High)</option>
                          <option>Price (Low to High)</option>
                          <option>Price (High to Low)</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="border-bottom" />
            </div>
          </div>

          <div className="food-bg product_list">
            <div className="container">
              <div className="row ">
                <div className="col-lg-12">
                  <div
                    className="tab-content mobiletabcontent"
                    id="foodTabContent"
                  >
                    <div
                      className="tab-pane fade show active pally-bg"
                      id="mobile-pally"
                      role="tabpanel"
                      aria-labelledby="mobile-pally-tab"
                    >
                      <h6 className="inner-head mb-3 mt-3">
                        16 Available Deals
                      </h6>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="product_detail.html">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img1.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Titus 20kg (Full Carton){" "}
                              </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 <small>per slot (3 available slots)</small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner content">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img2.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Croaker Fish (Full Carton)
                              </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 <small>per slot (3 available slots)</small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner content">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img3.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">White Onions (40kg)</h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 <small>per slot (3 available slots)</small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img4.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Guinea Corn Red (Paint bu...
                              </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 <small>per slot (3 available slots)</small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img5.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Soya Beans (Paint Bucket)
                              </h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 <small>per slot (3 available slots)</small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img6.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Soya Beans (100kg)</h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 <small>per slot (3 available slots)</small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img7.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Tuwo Rice (50kg)</h5>
                            </a>
                            <a href="/" className="red-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              9% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦7,500 <small>per slot (3 available slots)</small>
                            </h5>
                            <h6 className="mb-2">Time left: 68:50:52</h6>
                            <ul className="list-unstyled pallylist-bg mb-2">
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img2"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img3.jpg"
                                  alt="list-img3"
                                />
                              </li>
                              <li className="d-inline-block pally-left">
                                <img
                                  className="list-img"
                                  src="assets/images/list-img1.jpg"
                                  alt="list-img1"
                                />
                              </li>
                              <li className="d-inline-block">
                                <small>2 slots left</small>
                              </li>
                            </ul>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects pally-slot-btn"
                              >
                                BUY SLOT
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade recommended-bg"
                      id="mobile-recommended"
                      role="tabpanel"
                      aria-labelledby="mobile-recommended-tab"
                    >
                      <h6 className="inner-head mb-3 mt-3">
                        16 Available Deals
                      </h6>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img5.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Titus 20kg (Full Carton){" "}
                              </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget mb-2">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img2.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Croaker Fish (Full Carton)
                              </h5>
                            </a>

                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget mb-2">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message"></div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img3.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-3 ">White Onions (40kg)</h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget ">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img4.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Guinea Corn Red (Paint bu...
                              </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget mb-2">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img5.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">
                                Soya Beans (Paint Bucket)
                              </h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img6.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Soya Beans (100kg)</h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mobile-product">
                        <div className=" justify-content-start">
                          <div className="pally-inner">
                            <div className="products-img-wrapper  mb-2 pointer">
                              <a href="/">
                                <div className="heart-icon">
                                  <span className="material-icons">
                                    favorite_border
                                  </span>
                                </div>
                                <img
                                  className="product-img"
                                  src="assets/images/MProducts-img7.png"
                                  alt="Product-img1"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className=" ml-2 justify-content-end">
                          <div className="pally-content">
                            <a href="/" className="inner-head">
                              <h5 className="mb-2">Tuwo Rice (50kg)</h5>
                            </a>
                            <a href="/" className="green-bg">
                              <span className="material-icons-outlined">
                                arrow_right_alt
                              </span>
                              3% | In Season
                            </a>
                            <h5 className="mb-2 mt-2 font-weight-bold simhead">
                              ₦73,000
                              <s>(₦78,000)</s>
                            </h5>
                            <section className="rating-widget mb-2">
                              <div
                                className="rating-main pro-detail-star"
                                data-vote="0"
                              >
                                <div className="mainstar hidden">
                                  <span className="full" data-value="0"></span>
                                  <span className="half" data-value="0"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="1"></span>
                                  <span
                                    className="half"
                                    data-value="0.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                                <div className="star">
                                  <span className="full" data-value="2"></span>
                                  <span
                                    className="half"
                                    data-value="1.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="3"></span>
                                  <span
                                    className="half"
                                    data-value="2.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="4"></span>
                                  <span
                                    className="half"
                                    data-value="3.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>

                                <div className="star">
                                  <span className="full" data-value="5"></span>
                                  <span
                                    className="half"
                                    data-value="4.5"
                                  ></span>
                                  <span className="selected"></span>
                                </div>
                              </div>
                              <div className="success-box">
                                <div className="text-message">(4.5/5.0)</div>
                              </div>
                            </section>
                            <a href="/">
                              <button
                                type="button"
                                className="brown-btn  text-uppercase btn-effects "
                              >
                                SELECT ORDER TYPE
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade preorder-bg"
                      id="mobile-pre-orders"
                      role="tabpanel"
                      aria-labelledby="mobile-pre-orders-tab"
                    >
                      <h6 className="inner-head mb-3 mt-3">
                        3 Available Deals
                      </h6>
                      <div className="">
                        <div className="d-flex mobile-product">
                          <div className=" justify-content-start">
                            <div className="pally-inner">
                              <div className="products-img-wrapper  mb-2 pointer">
                                <a href="/">
                                  <div className="heart-icon">
                                    <span className="material-icons">
                                      favorite_border
                                    </span>
                                  </div>
                                  <img
                                    className="mb-3 product-img"
                                    src="assets/images/MPre-order1.png"
                                    alt="Pre-order1"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className=" ml-2 justify-content-end">
                            <div className="pally-content">
                              <a href="/" className="inner-head">
                                <h5 className="mb-2">Strawberries</h5>
                              </a>
                              <a href="/" className="red-bg">
                                <span className="material-icons-outlined">
                                  arrow_right_alt
                                </span>
                                9% | In Season
                              </a>
                              <h6 className="mb-2 mt-2 font-weight-bold simhead">
                                ₦7,500 per kg
                              </h6>
                              <p className="text-red mb-2">1kg of 50kg left</p>
                              <div className="preorder-progress stat-bar mb-2">
                                <span
                                  className="stat-bar-rating"
                                  role="button"
                                  style={{ width: "80%" }}
                                >
                                  80%
                                </span>
                              </div>
                              <p className="mb-2 dgrey-clr">
                                Delivery Date: July 23rd 2021
                              </p>
                              <a href="/">
                                <button
                                  type="button"
                                  className="brown-btn  text-uppercase btn-effects "
                                  data-toggle="modal"
                                  data-target="#booknowModal"
                                >
                                  Book Now
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex mobile-product">
                          <div className=" justify-content-start">
                            <div className="pally-inner">
                              <div className="products-img-wrapper  mb-2 pointer">
                                <a href="/">
                                  <div className="heart-icon">
                                    <span className="material-icons">
                                      favorite_border
                                    </span>
                                  </div>
                                  <img
                                    className="mb-3 product-img"
                                    src="assets/images/MPre-order2.png"
                                    alt="Pre-order1"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className=" ml-2 justify-content-end">
                            <div className="pally-content">
                              <a href="/" className="inner-head">
                                <h5 className="mb-2">Strawberries</h5>
                              </a>
                              <a href="/" className="red-bg">
                                <span className="material-icons-outlined">
                                  arrow_right_alt
                                </span>
                                9% | In Season
                              </a>
                              <h6 className="mb-2 mt-2 font-weight-bold simhead">
                                ₦7,500 per kg
                              </h6>
                              <p className="text-red mb-2">1kg of 50kg left</p>
                              <div className="preorder-progress stat-bar mb-2">
                                <span
                                  className="stat-bar-rating"
                                  role="button"
                                  style={{ width: "30%" }}
                                >
                                  30%
                                </span>
                              </div>
                              <p className="mb-2 dgrey-clr">
                                Delivery Date: July 23rd 2021
                              </p>
                              <a href="/">
                                <button
                                  type="button"
                                  className="brown-btn  text-uppercase btn-effects "
                                >
                                  Book Now
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex mobile-product">
                          <div className=" justify-content-start ">
                            <div className="pally-inner">
                              <div className="products-img-wrapper  mb-2 pointer">
                                <a href="/">
                                  <div className="heart-icon">
                                    <span className="material-icons">
                                      favorite_border
                                    </span>
                                  </div>
                                  <img
                                    className="mb-3 product-img"
                                    src="assets/images/MPre-order2.png"
                                    alt="Pre-order1"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className=" ml-2 justify-content-end">
                            <div className="pally-content">
                              <a href="/" className="inner-head">
                                <h5 className="mb-2">Strawberries</h5>
                              </a>
                              <a href="/" className="red-bg">
                                <span className="material-icons-outlined">
                                  arrow_right_alt
                                </span>
                                9% | In Season
                              </a>
                              <h6 className="mb-2 mt-2 font-weight-bold simhead">
                                ₦7,500 per kg
                              </h6>
                              <p className="text-red mb-2">1kg of 50kg left</p>
                              <div className="preorder-progress stat-bar mb-2">
                                <span
                                  className="stat-bar-rating"
                                  role="button"
                                  style={{ width: "100%" }}
                                >
                                  100%
                                </span>
                              </div>
                              <p className="mb-2 dgrey-clr">
                                Delivery Date: July 23rd 2021
                              </p>
                              <a href="/" className="closed-opacity">
                                <button
                                  type="button"
                                  className="brown-btn  text-uppercase btn-effects "
                                >
                                  Book Now
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="load-bg text-center mb-5 d-none d-lg-block">
                    <a href="/">
                      <button
                        typ="button"
                        className="load-more text-uppercase "
                      >
                        Load more items
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!------ FOOD-ITEMS-MOBILE-SECTION-START ------> */}
      {/* <!------ PARTNER & MEDIA SECTION-START ------> */}
      <section className="media-wrapper  ml-2 mr-2 d-none d-lg-block">
        <div className="container">
          <div id="media-bg" className="followers-bg mb-5">
            <h4 className="text-center mb-4">Partners & Media</h4>
            <div className="owl-carousel owl-theme" id="media_partner">
              <div className="item">
                <a href="/">
                  {" "}
                  <img
                    className="media-img"
                    src="assets/images/media-img1.png"
                    alt="media-img1"
                  />{" "}
                </a>
              </div>
              <div className="item">
                <a href="/">
                  {" "}
                  <img
                    className="media-img"
                    src="assets/images/media-img2.png"
                    alt="media-img1"
                  />{" "}
                </a>
              </div>

              <div className="item">
                <a href="/">
                  {" "}
                  <img
                    className="media-img"
                    src="assets/images/media-img3.png"
                    alt="media-img1"
                  />{" "}
                </a>
              </div>
              <div className="item">
                <a href="/">
                  {" "}
                  <img
                    className="media-img"
                    src="assets/images/media-img1.png"
                    alt="media-img1"
                  />{" "}
                </a>
              </div>

              <div className="item">
                <a href="/">
                  {" "}
                  <img
                    className="media-img"
                    src="assets/images/media-img2.png"
                    alt="media-img1"
                  />{" "}
                </a>
              </div>

              <div className="item">
                <a href="/">
                  {" "}
                  <img
                    className="media-img"
                    src="assets/images/media-img3.png"
                    alt="media-img1"
                  />{" "}
                </a>
              </div>
            </div>
            {/* <!-- <div id="mediaSlider" className="dvslider">
                    <div className="MS-content">
                        <div className="item">
                          <a href="/">  <img className="media-img" src="assets/images/media-img1.png" alt="media-img1"/> </a>
                        </div>
                        <div className="item">
                            <a href="/"> <img className="media-img" src="assets/images/media-img2.png" alt="media-img1"/> </a>
                        </div>
                        <div className="item">
                            <a href="/"> <img className="media-img" src="assets/images/media-img3.png" alt="media-img1"/> </a>
                        </div>
                    </div>
                </div>  */}
          </div>
        </div>
      </section>
      {/* <!------ PARTNER & MEDIA SECTION-END ------> */}
      {/* <!------ DOWNLOAD-APP-SECTION-START ------> */}
      <section className="download-wrapper  ml-2 mr-2 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="download-content">
                <h3>Download the New Pricepally Mobile App </h3>
                <ul className="list-unstyled">
                  <li className="d-inline-block">
                    <a href="/">
                      <img src="assets/images/appstore.png" alt="appstore" />
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <a href="/">
                      <img src="assets/images/playstore.png" alt="appstore" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="download-img">
                <img
                  src="assets/images/download_mobile.png"
                  alt="download-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!------ DOWNLOAD-APP-SECTION-END ------> */}
      {/* <!------ DOWNLOAD-BOTTOM-SECTION-START ------> */}
      <section className="download-bottom-bg  ml-2 mr-2 d-none d-lg-block">
        <div className="container">
          <div className="row m-auto">
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-3 mt-2">
                  <embed
                    src="assets/images/dedicated-icon.svg"
                    width="60px"
                    height="60px"
                  />
                </div>
                <div className="col-lg-9">
                  <h4>Dedicated Service</h4>
                  <p>We are committed to serve you the best products</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-3 mt-2">
                  <embed
                    src="assets/images/return_icon.svg"
                    width="60px"
                    height="60px"
                  />
                </div>
                <div className="col-lg-9">
                  <h4>Free Return</h4>
                  <p>We stand behind what we serve you</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-3 mt-2">
                  <embed
                    src="assets/images/online-icon.png"
                    width="60px"
                    height="60px"
                  />
                </div>
                <div className="col-lg-9">
                  <h4>Online 24/7</h4>
                  <p>Call +2347045000137</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!------ DOWNLOAD-BOTTOM-SECTION-END ------> */}
      {/* <!------ FOOTER-SECTION-START ------> */}
      <footer className="ml-2 mr-2 footer-wrapper d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4">
                  <h5>Categories</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Food Stuff</a>
                    </li>
                    <li>
                      <a href="/">Packaged Food</a>
                    </li>
                    <li>
                      <a href="/">Fruits & Nuts</a>
                    </li>
                    <li>
                      <a href="/">Meat, Poultry & Sea Food</a>
                    </li>
                    <li>
                      <a href="/">Oils & Spices</a>
                    </li>
                    <li>
                      <a href="/">Soup & Stew Ingredients</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h5>Company</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                    <li>
                      <a href="/">Refer & Earn</a>
                    </li>
                    <li>
                      <a href="/">FAQ</a>
                    </li>
                    <li>
                      <a href="/">Make a List</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h5>Policy</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">COVID 19 Policy</a>
                    </li>
                    <li>
                      <a href="/">Return Policy</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h5 className="white-head">
                Join our mailing list & receive exclusives
              </h5>
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  placeholder="First Name"
                  className="form-control"
                />
                <input
                  type="text"
                  name=""
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
              <div className="input-group mb-3 join-bg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email address"
                />
                <div className="input-group-append join-btn">
                  <a href="/">
                    {" "}
                    <span className="input-group-text">Join List</span>{" "}
                  </a>
                </div>
              </div>
              <h6>Connect with us on</h6>
              <ul className="list-unstyled social-icons">
                <li className="d-inline-block">
                  <a href="/">
                    <embed src="assets/images/facebook.svg" width="25px" />
                  </a>
                  <a href="/">
                    <embed src="assets/images/instagram.svg" width="25px" />
                  </a>
                  <a href="/">
                    <embed src="assets/images/twitter.svg" width="25px" />
                  </a>
                  <a href="/">
                    <embed src="assets/images/youtube.svg" width="25px" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center">
            <small>© 2021 Pricepally All Rights Reserved </small>
          </p>
        </div>
      </footer>
      {/* <!------ FOOTER-SECTION-END ------> */}
      {/* <!------ PRE-ORDER-MODAL-START ------> */}
      <div className="modal fade" id="preorderModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <b>Pre Order</b>
            </div>
            <div className="modal-body pl-3 pt-0 pr-3 preordermodal-text">
              <div className="row">
                <div className="col-8 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Enter Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g 10"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-4 col-lg-4">
                  <p>Price</p>
                  <h4>₦0</h4>
                </div>
              </div>
              <div className="modal-w m-auto mt-4 mb-3 text-center">
                <p className="mb-2">Delivery Date: July 23rd 2021</p>
                <div className="mb-5">
                  <button
                    type="button"
                    className="yellow-bg text-uppercase add-btn"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!----- PRE-MODAL-MOBILE-VIEW-START------> */}
      <div
        className="modal booknow-modal-bottom fade"
        id="booknowModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="booknowModal"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <b>Pre Order</b>
            </div>
            <div className="modal-body pl-3 pt-0 pr-3 preordermodal-text">
              <div className="row">
                <div className="col-8 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>Enter Quantity</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g 10"
                    />
                  </div>
                </div>
                <div className="col-4 col-md-4 col-lg-4">
                  <p>Price</p>
                  <h4>₦0</h4>
                </div>
              </div>
              <div className="modal-w m-auto mt-4 mb-3 text-center">
                <p className="mb-2">Delivery Date: July 23rd 2021</p>
                <div className="mb-5">
                  <button
                    type="button"
                    className="yellow-bg text-uppercase add-btn"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!----- PRE-MODAL-MOBILE-VIEW-END------> */}
      {/* <!------ PRE-ORDER-MODAL-END ------> */}
      {/* <!------ FILTER-MODAL-START -------> */}
      <div
        className="modal modal-full fade fillter-modal-bg"
        id="fillter-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="fillter-modal"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" data-dismiss="modal">
                <i className="material-icons">west</i> Filter
              </h5>
            </div>
            <div className="modal-body select-bg">
              <ul className=" list-unstyled clearfix mb-0">
                <li>
                  <div className="form-group mb-0">
                    <select className="form-control">
                      <option>Categories</option>
                      <option>Soup & stew ingredients</option>
                      <option>Foodstuffs</option>
                      <option>Meat, Poultry & Seafood</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="form-group mb-0">
                    <select className="form-control">
                      <option>Sub Categories</option>
                      <option>Grains</option>
                      <option>Tubers & Roots</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="form-group mb-0">
                    <select className="form-control">
                      <option>Sort By: Price (Low to High)</option>
                      <option>Price (Low to High)</option>
                      <option>Price (High to Low)</option>
                    </select>
                  </div>
                </li>
              </ul>
              <div className="text-center">
                <div className="filter-main-btn">
                  <div className="btneffects-bg">
                    <button
                      type="button"
                      className="border-btneffects text-uppercase existpally-btn"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!------ FILTER-MODAL-END -------> */}
      {/* <!------ MOBILE-LOADER-START ------> */}
      <div className="loader-bg">
        <div
          className="spinner spinner--steps icon-spinner"
          aria-hidden="true"
        ></div>
      </div>
      {/* <!------ MOBILE-LOADER-END ------> */}
      {/* <!------ MOBILE-FOOTER-CSS-START ------> */}
      <footer className="d-block d-lg-none mobile-footer">
        <div className="container">
          <div className="d-flex text-center justify-content-center">
            <div className="mobile-icon">
              <a className="nav-link active" href="index.html">
                <p className="mb-0">
                  <i className="material-icons-outlined">home</i>
                </p>
                <p className="mb-0">Home</p>
              </a>
            </div>
            <div className="mobile-icon">
              <a className="nav-link" href="my_account_profile.html">
                <p className="mb-0">
                  <span className="material-icons">people_outline</span>
                </p>
                <p className="mb-0">Users</p>
              </a>
            </div>
            <div className="mobile-icon">
              <a className="nav-link" href="cart.html">
                <p className="mb-0">
                  <span className="material-icons-outlined">shopping_cart</span>
                </p>
                <p className="mb-0">Cart</p>
              </a>
            </div>
            <div className="mobile-icon">
              <a className="nav-link" href="orders.html">
                <p className="mb-0">
                  <span className="material-icons-outlined">shopping_bag</span>
                </p>
                <p className="mb-0">Orders</p>
              </a>
            </div>
            <div className="mobile-icon">
              <a href="more.html" className="nav-link">
                <p className="mb-0 more_ic">
                  <span className="material-icons">more_horiz</span>
                </p>
                <p className="mb-0">More </p>
                <span className="yellow_cir float-right">2</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!------ MORE-MODAL-START ------> */}
      <div id="moreModal-wrapper">
        <div className="container">
          <div className="moremodal-bg">
            <div className="moremodal-header">
              <div className="container">
                <div className="d-flex">
                  <div className="w-50 justify-content-start">
                    <div className="p-1  ">
                      <h5 className="mb-0 morehead">₦GN 24,500</h5>
                      <p className="mb-0 more-phr">Wallet Balance</p>
                    </div>
                    <hr className="more-border" />
                    <div className="p-1">
                      <h6 className="mb-0 morehead">₦GN 1,000</h6>
                      <p className="mb-0 more-phr">Pending Balance</p>
                    </div>
                  </div>
                  <div className="ml-auto justify-content-end align-self-center">
                    <a href="/">
                      <button className="yellow-bg text-uppercase">
                        Go to wallet
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <ul className="list-unstyled ">
                <li className="more-outline mb-3">
                  <a href="make_list.html">
                    <span className="material-icons-round align-middle">
                      format_list_bulleted
                    </span>
                    <span className="morelist-text pl-2">Make a List</span>
                  </a>
                </li>
                <li className="more-outline mb-3">
                  <a href="my_account_profile.html">
                    <span className="material-icons-outlined align-middle">
                      account_circle
                    </span>
                    <span className="morelist-text pl-2">Profile</span>
                  </a>
                </li>
                <li className="more-outline mb-3">
                  <a href="refer_earn.html">
                    <span className="material-icons align-middle">share</span>
                    <span className="morelist-text pl-2">Refer and Earn</span>
                  </a>
                </li>
                <li className="more-outline mb-3">
                  <a href="saved-products.html">
                    <span className="material-icons align-middle">
                      favorite_border
                    </span>
                    <span className="morelist-text pl-2">Saved Products</span>
                  </a>
                </li>
                <li className="more-outline mb-3">
                  <a href="notification.html">
                    <span className="material-icons  align-middle">
                      notifications_none
                    </span>
                    <span className="morelist-text pl-2">Notifications</span>
                    <span className="yellow_cir float-right">2</span>
                  </a>
                </li>
                <li className="more-outline mb-3">
                  <a href="/">
                    <span className="material-icons align-middle">
                      settings_cell
                    </span>
                    <span className="morelist-text pl-2">Contact Admin</span>
                  </a>
                </li>
                <li className="more-outline mb-3">
                  <a href="Freq-Quest.html">
                    <span className="material-icons  align-middle">
                      error_outline
                    </span>
                    <span className="morelist-text pl-2">
                      Frequently Asked Questions
                    </span>
                  </a>
                </li>
                <li className="more-outline mb-3">
                  <a href="/">
                    <span className="material-icons-outlined align-middle rotate-ic">
                      repeat
                    </span>
                    <span className="morelist-text pl-2">Return Policy</span>
                  </a>
                </li>
                <li className="more-outline mb-3">
                  <a href="/">
                    <span className="material-icons-outlined align-middle">
                      privacy_tip
                    </span>
                    <span className="morelist-text pl-2">Privacy Policy</span>
                  </a>
                </li>
                <li className="more-outline mb-3">
                  <a href="/">
                    <span className="material-icons-outlined align-middle  rotate-ic">
                      note
                    </span>
                    <span className="morelist-text pl-2">
                      Terms & Conditions
                    </span>
                  </a>
                </li>
                <li className="more-outline mb-3">
                  <a href="/">
                    <span className="material-icons-outlined  align-middle">
                      login
                    </span>
                    <span className="morelist-text pl-2">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!------ MORE-MODAL-END ------> */}
      {/* <!------ MOBILE-FOOTER-CSS-END ------> */}
      {/* <!------ MOBILE-SEARCH-BAR-MODAL-START ------> */}
      <div
        className="modal modal-full fade search-modal-bg show"
        id="search-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="search-modal"
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="search-header Mobheader-fixed">
              <div className="d-flex">
                <div className="justfiy-content-start search-outer-wrap">
                  <a href="/">
                    <span>
                      <i
                        className="material-icons align-top"
                        data-dismiss="modal"
                      >
                        west
                      </i>
                      <input
                        type="text"
                        placeholder="Search"
                        className="search-tabs align-top"
                      />
                    </span>
                    <button className="yellow-bg">SEARCH</button>
                  </a>
                </div>
                <div className="ml-auto justify-content-end">
                  <ul className="list-unstyled mb-0">
                    {/* <!-- <li className="d-inline-block align-top">
                                    <p className="mb-0"> <span className="material-icons  align-middle  pr-2">
                                            filter_list
                                        </span>Filter</p>
                                </li> --> */}
                  </ul>
                </div>
              </div>
              <ul
                className="nav nav-tabs delivery-tabs"
                id="deliveryTab"
                role="tablist"
              >
                <li className="nav-item ">
                  <a
                    className="nav-link active"
                    id=""
                    data-toggle="tab"
                    href="#Mobfood-tab"
                    role="tab"
                    aria-controls="Mobfood-tab"
                    aria-selected="true"
                  >
                    Food Items
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="Mobuser-tab"
                    data-toggle="tab"
                    href="#users"
                    role="tab"
                    aria-controls="payment"
                    aria-selected="false"
                  >
                    Users
                  </a>
                </li>
              </ul>
            </div>
            <div className="modal-body p-0">
              <div className="tab-content" id="deliveryTabContent">
                <div
                  className="tab-pane fade show active Mobfood-tab mobile-search-food"
                  id="Mobfood-tab"
                  role="tabpanel"
                  aria-labelledby="Mobfood-tab-tab"
                >
                  <h6 className="result-found-wrap">2 Results</h6>
                  <div className="d-flex mb-3">
                    <div className="justify-content-start pr-2">
                      <img
                        className="search-img"
                        src="assets/images/search-img1.jpg"
                        alt="search-img1"
                      />
                    </div>
                    <div className="justify-content-end">
                      <h6 className="">Tuwo Rice (50kg)</h6>
                      {/* <!-- <h6>₦75,000</h6> --> */}
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="justify-content-start pr-2">
                      <img
                        className="search-img"
                        src="assets/images/search-img2.jpg"
                        alt="search-img1"
                      />
                    </div>
                    <div className="justify-content-end">
                      <h6 className="">Titus 20kg (Full Carton)</h6>
                      {/* <!-- <h6>₦75,000</h6> --> */}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade payment-bg"
                  id="users"
                  role="tabpanel"
                  aria-labelledby="Mobuser-tab"
                >
                  <h6 className="mb-2">3 Results</h6>
                  <div className="d-flex align-content-between flex-wrap myfollowers mb-4">
                    <div className="p-2">
                      <img
                        className="follow-img"
                        src="assets/images/followers1.jpg"
                        alt="follwers-img1"
                      />
                    </div>
                    <div className="p-2 align-self-center">
                      <h6>Florence Jackson</h6>
                    </div>
                    <div className="ml-auto p-2 align-self-center">
                      <a href="/" className="follow-btn text-uppercase">
                        Follow
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-content-between flex-wrap myfollowers mb-4">
                    <div className="p-2">
                      <img
                        className="follow-img"
                        src="assets/images/followers1.jpg"
                        alt="follwers-img1"
                      />
                    </div>
                    <div className="p-2 align-self-center">
                      <h6>Florence Jackson</h6>
                    </div>
                    <div className="ml-auto p-2 align-self-center">
                      <a href="/" className="follow-btn text-uppercase">
                        Follow
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!------ MOBILE-SEARCH-BAR-MODAL-END ------> */}
    </main>
  );
}

export default App;
