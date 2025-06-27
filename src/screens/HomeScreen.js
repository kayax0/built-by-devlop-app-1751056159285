import React from 'react';
import { View, Text, Image, useColorScheme, ScrollView } from 'react-native';
import tw from 'twrnc';
import Button from '../components/Button';
import Shimmer from '../components/Shimmer';
import { colors } from '../design/tokens';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const colorScheme = useColorScheme();
  return (
    <ScrollView style={tw`flex-1 bg-white dark:bg-black`} contentContainerStyle={tw`flex-grow justify-center items-center pt-16 pb-12 px-6`}>
      <View style={tw`items-center mb-8`}>
        <View style={tw`bg-indigo-100 dark:bg-indigo-900 rounded-full p-4 mb-4 shadow-lg`}>
          <MaterialCommunityIcons name="lightning-bolt" size={42} color={colorScheme === 'dark' ? colors.accent : colors.primary} accessibilityLabel="Devlop.app logo" />
        </View>
        <Text style={tw`text-2xl font-bold text-indigo-700 dark:text-cyan-300 mb-2`}>Devlop.app</Text>
        <Text style={tw`text-base text-gray-700 dark:text-gray-200 text-center max-w-xs`}>Instantly build beautiful, production-grade apps — powered by AI. You're using the free version. Upgrade for more screens!</Text>
      </View>
      <View style={tw`w-full mb-8`}>
        <View style={tw`flex-row items-center mb-2`}>
          <MaterialCommunityIcons name="star" size={20} color={colors.accent} style={tw`mr-2`} />
          <Text style={tw`text-lg font-semibold text-gray-900 dark:text-white`}>What's inside:</Text>
        </View>
        <View style={tw`flex-row items-center mb-4`}> <Shimmer width={24} height={24} style="mr-2" /> <Text style={tw`text-base text-gray-800 dark:text-gray-200`}>Animated UI components</Text> </View>
        <View style={tw`flex-row items-center mb-4`}> <Shimmer width={24} height={24} style="mr-2" /> <Text style={tw`text-base text-gray-800 dark:text-gray-200`}>Dark mode, buttery transitions</Text> </View>
        <View style={tw`flex-row items-center mb-4`}> <Shimmer width={24} height={24} style="mr-2" /> <Text style={tw`text-base text-gray-800 dark:text-gray-200`}>Free plan: max 2 screens</Text> </View>
      </View>
      <Button accent onPress={() => navigation.navigate('Pricing')}>
        Unlock More Features
      </Button>
      <Text style={tw`text-xs text-gray-500 mt-8 text-center`}>You're on the free plan • Powered by Devlop.app</Text>
    </ScrollView>
  );
}
