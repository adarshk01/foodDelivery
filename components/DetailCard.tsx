import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface detailCardProps {
  title: string;
  desc: string;
  image: ImageSourcePropType;
}

const DetailCard = ({ title, desc, image }: detailCardProps) => {
  return (
    <View className="flex-row items-center gap-3 py-4">
      <View className="h-12 w-12 bg-[#fff9f2] rounded-full flex-row justify-center items-center">
        <Image source={image} className="size-7" />
      </View>
      <View className="">
        <Text className="text-gray-200">{title}</Text>
        <Text className="mt-1 font-semibold text-dark-100">{desc}</Text>
      </View>
    </View>
  );
};

export default DetailCard;
