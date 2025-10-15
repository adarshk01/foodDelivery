import CustomHeader from "@/components/CustomHeader";
import DetailCard from "@/components/DetailCard";
import { images } from "@/constants";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profileDetails = [
  { Title: "Full Name", desc: "Adarsh Kamble", image: images.user },
  { Title: "Email", desc: "adarshkamble01@gmail.com", image: images.envelope },
  { Title: "Phone number", desc: "+91-8793112422", image: images.phone },
  {
    Title: "Address",
    desc: "58, sesh nagar, manewada, nagpur",
    image: images.location,
  },
];

const Profile = () => {
  return (
    <SafeAreaView className="h-full  bg-[#fafafa] px-5">
      <CustomHeader title="Profile" />
      <View className="flex-row justify-center">
        <Image source={images.final} className="size-32 z-10" />
        <View className="h-28 w-28 border-4 border-gray-700/50 rounded-full absolute z-20 top-2"></View>
        <View className="bg-primary h-7 w-7 rounded-full z-30 absolute top-20 left-56 flex-row justify-center items-center">
          <Image source={images.pencil} className=" size-4" />
        </View>
      </View>

      <View className="bg-white h-fit px-3 py-3 rounded-2xl mt-7">
        <FlatList
          data={profileDetails}
          renderItem={({ item, index }) => {
            return (
              <DetailCard
                title={item.Title}
                desc={item.desc}
                image={item.image}
              />
            );
          }}
          scrollEnabled={false}
        ></FlatList>
      </View>
      <TouchableOpacity className="w-full bg-[#fff9f2] p-4 rounded-full border border-primary mt-10">
        <Text className="font-semibold text-primary text-center">
          Edit Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-full bg-[#faf1f1] p-4 rounded-full border border-pink-400 mt-5 flex-row justify-center items-center gap-x-2">
        <Image source={images.logout} className="size-6 mix-blend-multiply" />
        <Text className="font-semibold text-pink-400 text-center  ">
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
