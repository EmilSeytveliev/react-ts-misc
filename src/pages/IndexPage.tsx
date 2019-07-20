import React from 'react';
import AppSettings from '../components/AppSettings';

interface IndexPageProps {
    
}

interface IndexPageState {

}

class IndexPage extends React.Component<IndexPageProps, IndexPageState> {

    render() {
        return <React.Fragment>
            <div>
                IndexPage
            </div>
            <AppSettings />
        </React.Fragment>
    }

}



export default IndexPage