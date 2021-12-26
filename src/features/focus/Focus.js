import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import {fontSizes, spacing} from '../../utils/sizes'
import { colors } from '../../utils/colors'

export const Focus = (props) => {
  const [tempItem, setTempItem] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex: 1, marginRight: spacing.md
          }}
          onSubmitEditing = {
            ({nativeEvent}) =>
               {setTempItem(nativeEvent.text)}
            }
          />
          <RoundedButton 
          title="+" size={50} 
          onPress = {()=> props.addSubject(tempItem)} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .5,
  },
  titleContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
  },
});
