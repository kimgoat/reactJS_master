import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      ligter: string;
    };
    white: {
      ligter: string;
      darker: string;
    };
  }
}
