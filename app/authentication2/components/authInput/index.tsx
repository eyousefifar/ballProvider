import React from 'react';

import {TextInput, TextInputProps} from 'react-native-paper';
import {defaultTheme, darkTheme, lightTheme, Colors} from '../../../ball-library/theme';
import {Observer} from 'mobx-react';
import {TouchableOpacity, View} from 'react-native';
import {observable, action} from 'mobx';

interface extendedTextInputProps extends TextInputProps {
    themeMode: 'default' | 'dark' | 'light',
    placeholder: string,
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad',
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send',
    isSecure?: boolean,
    inputBlur?: (fieldName: string) => void,
}

class Input extends React.Component<extendedTextInputProps> {
    private store = observable({isFocused: false});
    private inputRef = React.createRef();

    private setFocus = action(() => {
        this.store.isFocused = true;
    });

    private onFocus = () => {
        if (this.inputRef) {
            // @ts-ignore
            this.inputRef.current.focus();
            this.setFocus();
        }
    };

    private onBlur = action(() => {
        this.store.isFocused = false;
        this.props.inputBlur;
    });

    private getTheme = () => {
        const {themeMode} = this.props;

        if (themeMode === 'default') {
            return defaultTheme;
        } else if (themeMode === 'dark') {
            return darkTheme;
        } else if (themeMode === 'light') {
            return lightTheme;
        } else {
            throw Error('mode must be either default, dark or light');
        }
    };

    public render() {
        const {placeholder, keyboardType, returnKeyType, isSecure} = this.props;

        return (
            <Observer>
                {() => (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this.onFocus}
                        disabled={this.store.isFocused}
                    >
                        <View
                            pointerEvents={this.store.isFocused ? 'box-none' : 'box-only'}
                        >
                            <TextInput
                                ref={this.inputRef}
                                theme={this.getTheme()}
                                placeholder={placeholder}
                                {...this.props}
                                onBlur={this.onBlur}
                                keyboardType={keyboardType ? keyboardType : 'default'}
                                returnKeyType={returnKeyType ? returnKeyType : 'done'}
                                secureTextEntry={isSecure}
                                style={{color:'red'}}

                            />
                        </View>
                    </TouchableOpacity>
                )}
            </Observer>
        );
    }
}

export default Input;
