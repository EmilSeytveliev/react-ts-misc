import React from 'react';
import { ApplicationState } from '../redux';
import { UserSettings } from '../redux/user-settings';
import { connect } from 'react-redux';
import { setOnline } from '../redux/user-settings/actions';

interface AppSettingsProps {
    userSettings: UserSettings,
    setOnline: Function
}

const AppSettings = (props: AppSettingsProps) => {
    return <React.Fragment>
        <div>
            <div>AppSettings: Is online: {props.userSettings.isOnline.toString()}</div>
            <button onClick={() => props.setOnline(!props.userSettings.isOnline)}>Set Online</button>
        </div>
    </React.Fragment>
}

const mapStateToProps = (state: ApplicationState) => ({
    userSettings: state.userSettings
});

const mapDispatchToProps = (dispatch: any) => ({
    setOnline: (flag: boolean) => {
        dispatch(setOnline(flag))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppSettings)