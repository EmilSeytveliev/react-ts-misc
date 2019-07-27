import React from 'react';
import { Link } from 'react-router-dom';

export interface AnotherPageProps {

}

const AnotherPage = (props: AnotherPageProps) => {
    return <React.Fragment>
        <Link to={"/"}>to start page</Link>
        <div>AnotherPage</div>
    </React.Fragment>
}

export default AnotherPage