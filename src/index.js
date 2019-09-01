import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import './index.scss';

// Import custom components
import store from './store';
import { getAllProducts } from './actions'

// Layouts
import TodayArt from './components/layouts/todayart/main';

//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";
import CollectionRightSidebar from "./components/collection/collection-right-sidebar";
import CollectionFullWidth from "./components/collection/collection-full-width";
import CollectionMetro from "./components/collection/collection-metro";
import CollectionCategory from "./components/collection/collection-no-sidebar1";
import CollectionSearch from "./components/collection/collection-no-sidebar";


// Product Pages
import LeftSideBar from "./components/products/left-sidebar";
import RightSideBar from "./components/products/right-sidebar";
import NoSideBar from "./components/products/no-sidebar";
import LeftImage from "./components/products/left-image";
import RightImage from "./components/products/right-image";
import Accordian from "./components/products/accordian";
import ColumnLeft from "./components/products/column-left";
import ColumnRight from "./components/products/column-right";
import Column from "./components/products/column";
import Vertical from "./components/products/vertical";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut, {kakaoSuccessFail, kakaoCancel} from './components/checkout'
import kakaoSuccess from './components/checkout/kakao'
import orderSuccess from './components/checkout/success-page'

// Extra Pages
import Login from './components/pages/login'
import Register from './components/pages/register'
import RegisterWait from "./components/pages/registert-wait";
import RegisterSuccess from "./components/pages/registert-success";
import Account from './components/pages/account/account'
import Password from './components/pages/account/password'
import RegisterArtist from './components/pages/register-artist'

import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
import lookbook from './components/pages/lookbook'
import Search from './components/pages/search'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'
import Faq from './components/pages/faq'
import SupportContainer from './containers/SupportContainer'

// Blog Pages
import RightSide from './components/blogs/right-sidebar'
import Details from './components/blogs/details'
import BlogPage from './components/blogs/blog-page'

// Theme Element
import ElementTitle from "./components/features/theme/element-title"
import ElementBanner from "./components/features/theme/element-banner";
import ElementSlider from "./components/features/theme/element-slider";
import ElementCategory from "./components/features/theme/element-category";
import ElementService from "./components/features/theme/element-service";
import ElementRatio from "./components/features/theme/element-ratio";

// Product Elements
import ElementProductBox from "./components/features/product/element-product-box"
import ElementProductSlider from "./components/features/product/element-product-slider"
import ElementProductNoSlider from "./components/features/product/element-product-no-slider"
import ElementMultipleSlider from "./components/features/product/element-multiple-slider"
import ElementProductTab from "./components/features/product/element-product-tab"
import ArticleWrite from './components/articles/ArticleWrite';

class Root extends React.Component {
    render() {
        store.dispatch(getAllProducts());

        return(
        	<Provider store={store}>
                <BrowserRouter basename={'/'} >
                    <ScrollContext>
                        <Switch>
                            {/*<Route exact path={`${process.env.PUBLIC_URL}/`} component={Landing}/>*/}
                            {/*<Route path={`${process.env.PUBLIC_URL}/vegetables`} component={Vegetables}/>*/}
                            {/*<Route path={`${process.env.PUBLIC_URL}/electronic`} component={Electronic}/>*/}
                            {/*<Route path={`${process.env.PUBLIC_URL}/furniture`} component={Furniture}/>*/}
                            {/*<Route path={`${process.env.PUBLIC_URL}/pets`} component={Pets}/>*/}
                            {/*<Route path={`${process.env.PUBLIC_URL}/watch`} component={Watch}/>*/}
                            {/*<Route path={`${process.env.PUBLIC_URL}/kids`} component={Kids}/>*/}
                            {/*<Route path={`${process.env.PUBLIC_URL}/beauty`} component={Beauty}/>*/}
                            <Layout>
                                {/* 메인페이지 */}
                                <Route exact path={`${process.env.PUBLIC_URL}/`} component={TodayArt}/>

                                {/* Member */}
                                <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/register`} component={Register}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/register-wait/:email`} component={RegisterWait}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/register-success/:token`} component={RegisterSuccess}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/account`} component={Account}/>
                                <Route path={`${process.env.PUBLIC_URL}/forget-password`} component={ForgetPassword}/>
                                <Route path={`${process.env.PUBLIC_URL}/account/password`} component={Password}/>
                                <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
                                <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>

                                <Route path={`${process.env.PUBLIC_URL}/register-artist`} component={RegisterArtist}/>

                                {/* Product */}
                                <Route path={`${process.env.PUBLIC_URL}/product/:id`} component={NoSideBar}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/collections/:id`} component={CollectionCategory}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/collection`} component={CollectionSearch}/>

                                {/*Routes For Features (Product Collection) */}
                                <Route path={`${process.env.PUBLIC_URL}/left-sidebar/collection`} component={CollectionLeftSidebar}/>
                                
                                <Route path={`${process.env.PUBLIC_URL}/right-sidebar/collection`} component={CollectionRightSidebar}/>
                                <Route path={`${process.env.PUBLIC_URL}/full-width/collection`} component={CollectionFullWidth}/>
                                <Route path={`${process.env.PUBLIC_URL}/metro/collection`} component={CollectionMetro}/>

                                {/*Routes For Single Product*/}
                                <Route path={`${process.env.PUBLIC_URL}/left-sidebar/product/:id`} component={LeftSideBar}/>
                                <Route path={`${process.env.PUBLIC_URL}/right-sidebar/product/:id`} component={RightSideBar}/>
                                
                                <Route path={`${process.env.PUBLIC_URL}/col-left/product/:id`} component={ColumnLeft}/>
                                <Route path={`${process.env.PUBLIC_URL}/col-right/product/:id`} component={ColumnRight}/>
                                <Route path={`${process.env.PUBLIC_URL}/accordian/product/:id`} component={Accordian}/>
                                <Route path={`${process.env.PUBLIC_URL}/column/product/:id`} component={Column}/>
                                <Route path={`${process.env.PUBLIC_URL}/left-image/product/:id`} component={LeftImage}/>
                                <Route path={`${process.env.PUBLIC_URL}/right-image/product/:id`} component={RightImage}/>
                                <Route path={`${process.env.PUBLIC_URL}/vertical/product/:id`} component={Vertical}/>


                                {/*Routes For custom Features*/}
                                <Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
                                <Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
                                <Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess}/>
                                <Route path={`${process.env.PUBLIC_URL}/sales/orders`} component={aboutUs}/>

                                <Route path={`${process.env.PUBLIC_URL}/checkout/kakaoSuccessFail`} component={kakaoSuccessFail}/>
                                <Route path={`${process.env.PUBLIC_URL}/checkout/kakaoSuccess`} component={kakaoSuccess}/>
                                <Route path={`${process.env.PUBLIC_URL}/checkout/kakaoCancel`} component={kakaoCancel}/>


                                {/*Routes For Extra Pages*/}
                                <Route path={`${process.env.PUBLIC_URL}/pages/about-us`} component={aboutUs}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/404`} component={PageNotFound}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/lookbook`} component={lookbook}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/collection`} component={Collection}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/dashboard`} component={Dashboard}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}/>
                                <Route path={`${process.env.PUBLIC_URL}/articles`} component={SupportContainer}/>
                                <Route exact path={`${process.env.PUBLIC_URL}/articleWrite`} component={ArticleWrite}/>
                                <Route path={`${process.env.PUBLIC_URL}/articleWrite/:articleId`} component={ArticleWrite}/>

                                {/*Features*/}
                                {/*Theme Elements*/}
                                <Route path={`${process.env.PUBLIC_URL}/features/element-title`} component={ElementTitle}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-banner`} component={ElementBanner}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-slider`} component={ElementSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-category`} component={ElementCategory}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-service`} component={ElementService}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-ratio`} component={ElementRatio}/>

                                {/*Product Elements*/}
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-box`} component={ElementProductBox}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-slider`} component={ElementProductSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-no-slider`} component={ElementProductNoSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`} component={ElementMultipleSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-tab`} component={ElementProductTab}/>

                                {/*Blog Pages*/}
                                <Route path={`${process.env.PUBLIC_URL}/blog/right-sidebar`} component={RightSide}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/details`} component={Details}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/blog-page`} component={BlogPage}/>

                                 {/*<Route exact path="*" component={PageNotFound} />*/}
                            </Layout>
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
			</Provider>
    	);
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


