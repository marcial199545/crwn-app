import React, { Component } from 'react';
import CollectionPreview from '../../components/collectionPreview';
import { shopData } from './shop.data';
class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collections: shopData,
        };
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />;
                })}
            </div>
        );
    }
}
export default ShopPage;
