import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles'
import {Colors} from "../../../ball-library/theme";
import {H2} from "../../../ball-library";


interface ISubmitButton {
    onClick: () => void,
    label: string,
    loading: boolean,
    enable:boolean
}

const SubmitButton = (props: ISubmitButton) => {

    const styles = styleGenerator();
    const {label, onClick, loading, enable} = props;

    return (
        <RectButton style={[styles.container, !enable && {opacity:0.5}]} onPress={onClick} enabled={enable}>
            {!loading &&
            <H2 style={styles.submit_text}>{label}</H2>
            }
            {loading &&
            <ActivityIndicator size={'small'} color={Colors.primaryPurple}/>
            }
        </RectButton>
    );
};

export default observer(SubmitButton);
