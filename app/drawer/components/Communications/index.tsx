import React from 'react';
import {View} from 'react-native';
import {Colors, H1, H2, Icon} from '../../../ball-library';
import {RectButton} from 'react-native-gesture-handler';
import {phonecall, web} from 'react-native-communications';
// styles
import styleGenerator from './styles';
import {showCallOverlay} from "../../library/nav";

const Communications = () => {
    const {styles, rippleColor, icon} = styleGenerator();
    const onPhoneCallPress = () => {
        phonecall('02537400046', true);
    };
    const onWebsitePress = () => {
        web('https://itsball.com');
    };
    const onInstagramPress = () => {
        web('https://www.instagram.com/itsball.ir/');
    };

    return (
        <View style={styles.container}>
            <View>
                <H2>نسخه 0.0.1</H2>
            </View>
            <View style={styles.drawer_buttons}>
                <RectButton
                    onPress={showCallOverlay}
                    style={styles.iconsContainer}
                    rippleColor={Colors.rippleColor}>
                    <Icon type={'ball'} name={'call'} color={icon.color} size={icon.size}/>
                </RectButton>
                <RectButton
                    onPress={onWebsitePress}
                    style={styles.iconsContainer}
                    rippleColor={Colors.rippleColor}>
                    <Icon type={'antDesign'} name={'earth'} color={icon.color} size={icon.size}/>
                </RectButton>
                <RectButton
                    onPress={onInstagramPress}
                    style={styles.iconsContainer}
                    rippleColor={Colors.rippleColor}>
                    <Icon type={'simpleLine'} name={'social-instagram'} color={icon.color} size={icon.size}/>
                </RectButton>
            </View>

        </View>
    );
};

export default Communications;


/*
<RectButton
        onPress={onPhoneCallPress}
        style={styles.iconsContainer}
        rippleColor={Colors.rippleColor}>
        <Icon type={'ball'} name={'call'} color={icon.color} size={icon.size} />
      </RectButton>
      <RectButton
        onPress={onWebsitePress}
        style={styles.iconsContainer}
        rippleColor={Colors.rippleColor}>
        <Icon
          type={'antDesign'}
          name={'earth'}
          color={icon.color}
          size={icon.size}
        />
      </RectButton>
      <RectButton
        onPress={onInstagramPress}
        style={styles.iconsContainer}
        rippleColor={Colors.rippleColor}>
        <Icon
          type={'simpleLine'}
          name={'social-instagram'}
          color={icon.color}
          size={icon.size}/>
      </RectButton>
*/
