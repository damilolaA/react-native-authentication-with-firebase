import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput 
				value={value}
				onChangeText={onChangeText}
				style={{ height: 40, width:200, borderColor:'gray' }}
			/>
		</View>
	);
}

const styles = {
	InputStyle: {
		color: #000,
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18, 
		lineHeight: 23,
		flex: 2
	},
	TextStyle: {},
	ContainerStyle: {}
}

export { Input }