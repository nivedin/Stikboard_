import App from 'next/app';
import React from 'react';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../app/store';


const MyApp = ({Component, pageProps}) => (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
);

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);