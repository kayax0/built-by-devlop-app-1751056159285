import React, { useRef, useEffect } from 'react';
import { Animated, View } from 'react-native';
import tw from 'twrnc';

export default function Shimmer({ width = 120, height = 20, style = '' }) {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        duration: 1200,
        useNativeDriver: true,
      })
    ).start();
  }, [width]);

  return (
    <View style={[tw`bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden`, { width, height }, tw`${style}`]}>
      <Animated.View
        style={[
          tw`absolute left-0 top-0 h-full bg-white/40 dark:bg-white/20`,
          {
            width: width / 2,
            height,
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
}
