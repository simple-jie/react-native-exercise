import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Button,
    CheckBox
} from 'react-native'

class AlertButton extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        alert("点击按钮弹出的对话框")
    }

    render() {
        return (
            <Text onPress={this.handleClick.bind(this)}>{this.props.buttonTitle}</Text>
        )
    }
};

export default class PlayGround extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HELLO</Text>
                <AlertButton buttonTitle="点击按钮" style={{color: 'white'}}></AlertButton>
                {/*<CheckButton selectText="选中" unselectedText="未选中"></CheckButton>*/}
            </View>
        );
    }
}

class CheckButton extends Component {
    constructor(props) {
        super(props)
        this.state = {isCheck: false}
    }

    handleCheck() {
        this.setState({
            isCheck: !this.state.isCheck
        })
    }

    render() {
        return (
            <CheckBox
                onChange={this.handleCheck.bind(this)}><Text>{this.state.isCheck ? this.props.selectText : this.props.unselectedText}</Text></CheckBox>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

