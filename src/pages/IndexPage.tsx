import React, { Fragment } from 'react';
import ConnectedToRedux from '../components/ConnectedToRedux';
import Hooks from '../components/Hooks';

interface IndexPageProps {
    
}

interface IndexPageState {

}

const IndexPage = () => {

    return <Fragment>
        <div>
            IndexPage
        </div>
        <ConnectedToRedux />
        <Hooks />
    </Fragment>

}



export default IndexPage