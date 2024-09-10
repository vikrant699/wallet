import { Platform } from "react-native";

import { statusCodes } from "../../common/libraries/googleSignInNative";
import { CustomDialogHandles } from "../../common/components/CustomDialog";
import { login } from "../../store/slices/authSlice";
import { NavigationType } from "../../common/typesAndInterfaces/types";
import { AppDispatch } from "../../store/store";

interface ErrorType {
  code: string;
  status: number;
  message: string;
}

const handleError = (error: ErrorType, errorDialog: CustomDialogHandles) => {
  const ignoreErrorCodes = ["ERR_REQUEST_CANCELED", "UNKNOWN"];
  if (Platform.OS === "android") {
    if (error.code === statusCodes?.SIGN_IN_CANCELLED) {
      return;
    } else if (error.code === statusCodes?.PLAY_SERVICES_NOT_AVAILABLE) {
      errorDialog.showDialog("Error", "Google Play Services not found.");
    } else {
      errorDialog.showDialog("Error", "Something went wrong.");
    }
  }
  if (!ignoreErrorCodes.includes(error.code))
    errorDialog.showDialog("Error", "Something went wrong.");
};

export const handleSocialSignIn = async (
  signInMethod: () => Promise<{ data: any; error: ErrorType }>,
  loginType: string,
  navigation: NavigationType,
  dispatch: AppDispatch,
  errorDialog: CustomDialogHandles
) => {
  const { data, error } = await signInMethod();
  if (error) handleError(error, errorDialog);

  const userId = data?.session?.user?.id;
  if (userId) {
    dispatch(login({ userId, loginType }));
    navigation.replace("Home");
  }
};