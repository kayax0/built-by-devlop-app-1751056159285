import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import tw from 'twrnc';
import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function PricingScreen({ navigation }) {
  return (
    <ScrollView style={tw`flex-1 bg-white dark:bg-black`} contentContainerStyle={tw`flex-grow items-center pt-16 px-6 pb-12`}>
      <View style={tw`items-center mb-8`}>
        <MaterialCommunityIcons name="crown" size={48} color={tw.color('yellow-400')} style={tw`mb-4`} accessibilityLabel="Premium crown" />
        <Text style={tw`text-2xl font-bold text-yellow-500 mb-2`}>Upgrade to Premium</Text>
        <Text style={tw`text-base text-gray-700 dark:text-gray-200 text-center max-w-xs mb-4`}>Unlock unlimited screens, advanced features, and full commercial use. Create your dream app without limits!</Text>
      </View>
      <View style={tw`w-full bg-yellow-50 dark:bg-yellow-900 rounded-2xl px-6 py-5 mb-8 shadow-xl`}>
        <View style={tw`flex-row items-center mb-3`}>
          <MaterialCommunityIcons name="rocket" size={24} color={tw.color('yellow-500')} style={tw`mr-2`} />
          <Text style={tw`text-lg font-semibold text-yellow-900 dark:text-yellow-200`}>Premium Features</Text>
        </View>
        <Text style={tw`text-base text-yellow-800 dark:text-yellow-100 mb-1`}>• Unlimited screens/components</Text>
        <Text style={tw`text-base text-yellow-800 dark:text-yellow-100 mb-1`}>• Custom API/data integrations</Text>
        <Text style={tw`text-base text-yellow-800 dark:text-yellow-100 mb-1`}>• Production-ready exports</Text>
        <Text style={tw`text-base text-yellow-800 dark:text-yellow-100 mb-1`}>• White-label branding</Text>
        <Text style={tw`text-base text-yellow-800 dark:text-yellow-100`}>• Priority support</Text>
      </View>
      <Button
        accent
        style="mb-6"
        onPress={() => Linking.openURL('https://devlop.app/pricing')}
        accessibilityLabel="Go to Devlop.app Pricing"
      >
        View Pricing & Upgrade
      </Button>
      <Button onPress={() => navigation.goBack()}>
        Back to App
      </Button>
      <Text style={tw`text-xs text-gray-400 mt-8 text-center`}>This is a Devlop.app free version demo. Upgrade for more screens and features.</Text>
    </ScrollView>
  );
}
