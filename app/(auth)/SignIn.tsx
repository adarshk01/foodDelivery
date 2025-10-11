import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { signIn } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const submit = async () => {
    const { email, password } = form;
    if (!email || !password)
      return Alert.alert("Error", "please enter valid email or password");
    setIsSubmitting(true);
    try {
      await signIn({ email, password });

      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => {
          setForm((prev) => ({
            ...prev,
            email: text,
          }));
        }}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) => {
          setForm((prev) => ({
            ...prev,
            password: text,
          }));
        }}
        label="Password"
        secureTextEntry={true}
      />

      <CustomButton title="Sign In" isLoading={isSubmitting} onPress={submit} />
      <View className="flex-row justify-center">
        <View className=" ">
          <Text className="base-regular text-gray-100">
            Don't have and account?
          </Text>
          <Link
            href="/(auth)/SignUp"
            className="base-bold text-primary text-center"
          >
            Sign Up
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
