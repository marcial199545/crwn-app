import React from 'react';
import CollectionOverview from '../../components/collectionsOverview';
import { Route } from 'react-router-dom';
import CollectionPage from '../Collection';

export const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
};

export default ShopPage;
