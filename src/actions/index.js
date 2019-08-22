import { ActionTypes } from '../constants';
import axiosMiddleware from 'redux-axios-middleware';

const getClientToken = () => {
    const formData = new FormData();
    formData.append('grant_type', 'client_credentials');

    return ({
        type: ActionTypes.GET_TOKEN,
        payload: {
            request: {
                method: 'POST',
                url: '/oauth/token',
                data: formData
            }
        }
    });
};

const register = ({ email, nickname, password }) => {
    return ({
        type: ActionTypes.REGISTER,
        payload: {
            request: {
                method: 'POST',
                url: '/members',
                headers: {
                    'Content-Type': 'application/json; charset: utf-8'
                },
                data: JSON.stringify({ email, nickname, password })
            }
        }
    });
};

const login = (email, password) => {
    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', email);
    formData.append('password', password);

    return ({
        type: ActionTypes.LOGIN,
        payload: {
            request: {
                method: 'POST',
                url: '/oauth/token',
                data: formData
            }
        }
    });
};

const logout = () => ({
    type: ActionTypes.LOGOUT
});

const getMemberMe = () => {
    return ({
        type: ActionTypes.GET_USER,
        payload: {
            request: {
                method: 'GET',
                url: '/members/me'
            }
        }
    });
};

const refreshToken = (refresh_token) => {
    const formData = new FormData();
    formData.append('grant_type', 'refresh_token');
    formData.append('refresh_token', refresh_token);

    return ({
        type: ActionTypes.REFRESH_TOKEN,
        payload: {
            request: {
                method: 'POST',
                url: '/oauth/token',
                data: formData
            }
        }
    });
};


const getCart = () =>{
    return(
        {
        type: ActionTypes.GET_CART,
        payload: {
            request:{
                method: 'GET',
                url: '/cart'
            }
        }
    })
}


const fetchArtwork = () => {
    return ({
        type: ActionTypes.FETCH_ARTWORK,
        payload: {
            request: {
                method: 'GET',
                url: `/product`

            }
        }

    })
}

const toggleCartItem = (cartItemId) =>{
    return({
        type:ActionTypes.TOGGLE_CART_ITEM,
        itemId:cartItemId
    })
}

const deleteCartItem  =(cartItemId) =>{
    return({
        type:ActionTypes.DELETE_CART_ITEM,
        payload:{
            request:{
                method: 'DELETE',
                url: `/cart/${cartItemId}`
            }
        }
    })
}

const calcCartPrice = () =>{
    return({
        type:ActionTypes.CALC_CART_PRICE
    })

}

const makeOrder = (cartIdList, shippingFee, totalPayingPrice) =>{
    return({
        type:ActionTypes.MAKE_ORDER,
        payload:{
            request:{
                method: 'POST',
                url: '/orders',
                data: {cartIdList:cartIdList, shippingFee:shippingFee, totalPrice:totalPayingPrice, payment:{payMethod:"카카오페이", totalPrice:totalPayingPrice}},
            }
        }
    })
}

const excuteKakaoPay = (ordered) =>{
    return ({
        type:ActionTypes.EXCUTE_KAKAO_PAY,
        payload:{
            request:{
                method:'POST',
                url:'/kakaoPay',
                data:ordered
            }

        }
    })
}


const getArticleList = () => {
    return ({
        type: ActionTypes.ARTICLELIST,
        payload: {
            request: {
                method: 'GET',
                url: '/article/list'
            }
        }
    });
};

const getArticleDetail = (articleId) => {
    return ({
        type: ActionTypes.ARTICLEDETAIL,
        payload: {
            request: {
                method: 'GET',
                url: `/article/${articleId}`
            }
        }
    });
}

export const Actions = {
    getClientToken,
    register,
    login,
    logout,
    getMemberMe,
    refreshToken,
    getCart,
    toggleCartItem,
    deleteCartItem,
    calcCartPrice,
    getArticleList,
    getArticleDetail,
    makeOrder,
    excuteKakaoPay
};
