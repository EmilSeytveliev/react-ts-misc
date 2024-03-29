import React from 'react';
import { ApplicationState } from '../redux';
import { UserSettings } from '../redux/user-settings';
import { connect } from 'react-redux';
import { setOnline } from '../redux/user-settings/actions';

interface ConnectedToReduxProps {
    userSettings: UserSettings,
    setOnline: Function
}

const ConnectedToRedux = (props: ConnectedToReduxProps) => {
    return <div className="separate-component">
            <div>ConnectedToRedux</div>
            <div>Is online: {props.userSettings.isOnline.toString()}</div>
            <button onClick={() => props.setOnline(!props.userSettings.isOnline)}>Change Online Status</button>
        </div>
}

const mapStateToProps = (state: ApplicationState) => ({
    userSettings: state.userSettings
});

const mapDispatchToProps = (dispatch: any) => ({
    setOnline: (flag: boolean) => {
        dispatch(setOnline(flag))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedToRedux)