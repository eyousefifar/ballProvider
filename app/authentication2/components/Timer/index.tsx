import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {H3} from "../../../ball-library";
import {RectButton} from "react-native-gesture-handler";

interface ITimer {
    // seconds:string,
    minutes: string,
    endTimer:boolean

    sendSmsAgain:() => {}
}

const Timer = (props: ITimer) => {

    const styles = styleGenerator();
    const {minutes,sendSmsAgain} = props;

    const [minute, setMinute] = useState<string>(minutes);
    const [second, setSecond] = useState<string>('59');

    const [end,setEnd] = useState<boolean>(false);

    useEffect(() => {
        let myInterval = setInterval(() => {

            let numSecond = parseInt(second);
            if (numSecond === 0) {
                let numMinute = parseInt(minute);

                if (numMinute > 0) {
                    numMinute = numMinute - 1;
                    setMinute(numMinute.toString().length === 1 ? '0' + numMinute.toString() : numMinute.toString());
                    setSecond('60');
                    numSecond = 60;
                }
            }

            if (numSecond > 0) {
                numSecond = numSecond - 1;
                setSecond(numSecond.toString().length === 1 ? '0' + numSecond.toString() : numSecond.toString())
            }

        }, 1000);

        // console.warn('Minutes : ', minute)
        // console.warn('Seconds : ', second)

        // sends sms again when time ends
        if (minute === '00' && second === '00'){
            // if (!endTimer){
            // onEndTime()
            // }
            setEnd(true)

        }

        return () => {
            clearInterval(myInterval)
        }
    },[minute,second] );

    const resetTimer = () => {

        // reset timer
        setEnd(false);
        setSecond('59');

        // send again sms
        sendSmsAgain();

    };


    if (end){
        return (
            <View style={{flexDirection:'row-reverse'}}>
                <RectButton onPress={resetTimer}>
                    <H3 style={styles.end_time_text}>ارسال مجدد کد تایید</H3>
                </RectButton>
            </View>
        );
    }else {
        return (
            <H3 style={styles.timer}>ارسال مجدد پس از {minute}:{second}</H3>
        );
    }

};

export default observer(Timer);
