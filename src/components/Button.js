import React from 'react';
import { Pressable, Text, View, ActivityIndicator } from 'react-native';
import tw from 'twrnc';

export default function Button({
  children,
  onPress,
  style = '',
  textStyle = '',
  loading = false,
  disabled = false,
  accent = false,
  ...rest
}) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || loading}
      onPress={onPress}
      style={({ pressed }) => [
        tw`${accent ? 'bg-cyan-500' : 'bg-indigo-500'} px-5 py-3 rounded-xl items-center justify-center ${disabled || loading ? 'opacity-50' : ''} ${pressed ? 'scale-95' : ''} ${style}`
      ]}
      android_ripple={{ color: tw.color(accent ? 'cyan-700' : 'indigo-700') }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={tw`text-white text-base font-bold ${textStyle}`}>{children}</Text>
      )}
    </Pressable>
  );
}
