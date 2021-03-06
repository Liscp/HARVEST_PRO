import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Easing } from "react-native";
import colors from "../../src/style/index";
import Icon from "react-native-vector-icons/FontAwesome";
class InputField extends Component {
  toggleShowPassword() {
    this.setState({ secureInput: !this.state.secureInput });
  }
  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(props.inputType === "text" || props.inputType === "email")
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }
  
  render() {
    const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType,
      customStyle } = this.props;
    const color = labelColor || color.white;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || color.white;
    const borderBottom = borderBottomColor || "transparent";
    let secureInput = this.secureInput;
    
    return (
      
      <View style={[customStyle, styles.wrapper]}>
        <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
        <TextInput
          autoCorrect={false}
          style={[
            { color: inputColor, borderBottomColor: borderBottom },
            styles.inputFiled
          ]}
          secureTextEntry={secureInput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  label: { fontWeight: "700", marginBottom: 10 },
  inputFiled: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  showButton: {
    position: "absolute",
    right: 0
  },
  showButtonText: {
    color: colors.white,
    fontWeight: "700"
  }
});
export default InputField;