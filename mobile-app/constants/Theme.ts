import  Colors from "./Colors";

export default {
  colors:{
    light: {
      tint:{
        primary: Colors.brand.primary[300],
        secondary: Colors.brand.secondary[300],
        tertiary: Colors.brand.tertiary[300],
      },
      card:Colors.neutral[100],
      background:Colors.neutral[300],
      text:Colors.neutral[900],
      secondaryText:Colors.neutral[600],
      tertiaryText:Colors.neutral[400],
      divider:Colors.neutral[300],
      border:Colors.neutral[300],
      disabled:Colors.neutral[300],
      warning:Colors.functional.warning[300],
      error:Colors.functional.error[100],
      success:Colors.functional.success[100],
      info:Colors.functional.info[100],
    },
    dark: {
      tint:{
        primary: Colors.brand.primary[400],
        secondary: Colors.brand.secondary[400],
        tertiary: Colors.brand.tertiary[400],
      },
      card:Colors.neutral[800],
      background:Colors.neutral[900],
      text:Colors.neutral[100],
      secondaryText:Colors.neutral[600],
      tertiaryText:Colors.neutral[400],
      divider:Colors.neutral[500],
      border:Colors.neutral[500],
      disabled:Colors.neutral[500],
      warning:Colors.functional.warning[300],
      error:Colors.functional.error[100],
      success:Colors.functional.success[100],
      info:Colors.functional.info[100],
    },
  },
  shadow:{
    s:4,
    m:8,
    l:12,
  },
  icon:{
    s:24,
    m:32,
    l:48,
  },
  spacing:{
    s:8,
    m:16,
    l:24,
    xl:40,
  },
};

