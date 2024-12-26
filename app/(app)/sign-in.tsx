import { tabStyles } from "@/assets/styles";
import CustomView from "@/components/App/Views/CustomView";
import { useSupabase } from "@/context/supabase-provider";
import { type SignIn, signInSchema } from "@/schemas/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import { makeRedirectUri } from "expo-auth-session";
import { router } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Divider,
  HelperText,
  IconButton,
  Text,
  TextInput,
} from "react-native-paper";

const redirectTo = makeRedirectUri();

export default function SignIn() {
  const { sendMagicLink, performOAuth } = useSupabase();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
  });
  const onSubmit: SubmitHandler<SignIn> = async ({ email }) => {
    await sendMagicLink(email, redirectTo);
    return router.navigate(`/(app)/check-email?email=${email}`, {});
  };
  return (
    <CustomView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text variant="headlineSmall" style={{ fontWeight: "bold" }}>
          Get Started
        </Text>
        <View>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Email"
                value={value}
                onBlur={onBlur}
                mode="outlined"
                style={styles.input}
                error={!!errors.email}
                onChangeText={onChange}
                placeholder="test@email.com"
                left={<TextInput.Icon icon="email" />}
              />
            )}
          />
          <HelperText type="error" padding="none" visible={!!errors.email}>
            {errors.email?.message}
          </HelperText>
        </View>
        <Button
          mode="contained"
          loading={isSubmitting}
          style={tabStyles.button}
          onPress={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Loading..." : "Send Link"}
        </Button>
        <Divider bold={true} style={{ marginTop: 10 }} leftInset={true} />
        <View style={styles.section}>
          <IconButton
            size={25}
            icon="google"
            mode="contained"
            style={styles.iconButton}
            onPress={() => performOAuth("google", redirectTo)}
          />
          <IconButton
            size={25}
            icon="twitter"
            mode="contained"
            style={styles.iconButton}
            onPress={() => performOAuth("twitter", redirectTo)}
          />
        </View>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    gap: 10,
    width: "90%",
    maxWidth: 350,
    flexDirection: "column",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    width: "100%",
  },
  iconButton: {
    borderRadius: 8,
  },
});
