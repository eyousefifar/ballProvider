import React, {ReactElement} from 'react';
import {StyleProp, Text, TextProps, TextStyle, ViewStyle} from 'react-native';
import {Colors} from "../theme";


interface extendedTextProps extends TextProps {
    children: any,
    style?: StyleProp<TextStyle>
}

export const H0 = (props: extendedTextProps) => {

    return (
        <Text {...props} style={[{color: Colors.ballNewGray}, props.style , {fontFamily: 'IRANSansMobile(FaNum)', fontSize: 18}]}>
            {props.children}
        </Text>
    );
};

export const H1 = (props: extendedTextProps) => {

    return (
        <Text {...props} style={[{color: Colors.ballNewGray}, props.style , {fontFamily: 'IRANSansMobile(FaNum)', fontSize: 16}]}>
            {props.children}
        </Text>
    );
};

export const H2 = (props: extendedTextProps) => {

    return (
        <Text {...props} style={[{color: Colors.ballNewGray}, props.style , {fontFamily: 'IRANSansMobile(FaNum)', fontSize: 14}]}>
            {props.children}
        </Text>
    );
};

export const H3 = (props: extendedTextProps) => {

    return (
        <Text {...props} style={[{color: Colors.ballH3}, props.style , {fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12}]}>
            {props.children}
        </Text>
    );
};
