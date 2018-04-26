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
	InputStyle: {},
	TextStyle: {},
	ContainerStyle: {}
}

export { Input }