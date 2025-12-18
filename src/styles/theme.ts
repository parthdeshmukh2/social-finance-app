import {createTheme, SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

export const specialGrey = "#263238";
export const specialGreyLight = "#37474F";

export type SxProp = SxProps<Theme>;

declare module '@mui/material/styles' {
    interface Theme {

    }

    // allow configuration using `createTheme`
    interface ThemeOptions {

    }
}

export const theme = createTheme({
    palette: {
        mode: "dark"
    }
});

export const krmrPlateDark = {
    mainBg: '#14213D',
    themeBg:"#8BAE66",
    primaryButtonBg:"#8BAE66",
    themeMenuItemColor:'#8BAE66',
    secondaryBg:"#5A7863",
    mainTextColor: "#8BAE66",
    placeholder: "#8BAE66",
    menuItemColor: "#14213D",
    connectorText: "#FFFFFF",
    bottomItemColor: "#8BAE66",
    bottomMenuItem: "#ffffff",
    cancelButton: "#ffffff",
    newPostContainer: "#32446A",
    postContainer: "#32446A",
    newPostButton: "#14213D",
    newPostBorder: "#8BAE66",
    settingButtonBg: "#32446A",
    cawDirectBg: "#233356",
    msgSearchBg: "#576072",
    starIcon: "#14213D",
    iconButtonColor: "#b9b9b9",
    newCommentBox:"#32446A",
    acardionBg:"#14213D",
    acardionnText:"#8BAE66"
}

export const krmrPlateLight = {
    mainBg: '#FFFFFF',
    themeBg:"#8BAE66",
    primaryButtonBg:"#8BAE66",
    themeMenuItemColor:'#8BAE66',
    secondaryBg:"#5A7863",
    mainTextColor: "#14213D",
    placeholder: "rgba(0, 0, 0, 0.61)",
    menuItemColor: "#FFFFFF",
    connectorText: "#000000",
    bottomItemColor: "#8BAE66",
    bottomMenuItem: "#14213D",
    cancelButton: "#14213D",
    newPostContainer: "#FFFFFF",
    postContainer: "#F8F8F8",
    newPostButton: "#8BAE66",
    newPostBorder: "#14213D",
    settingButtonBg: "#F6F6F6",
    cawDirectBg: "#F9F9F9",
    msgSearchBg: "#F2F2F2",
    starIcon: "#14213D",
    iconButtonColor: "#727272",
    newCommentBox: "#F8F8F8",
    acardionBg:"#FFFFFF",
    acardionnText:"#000"
}

export const krmrBreakpoints = {
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1200,
}

