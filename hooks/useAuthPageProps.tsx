import { useMemo } from "react";
import { pageConfig, PageProps } from "@gaddario98/react-pages";
import { Button, Image, Paragraph } from "@gaddario98/react-ionic-ui";

export interface UseAuthPageProps {
  image?: React.ComponentProps<typeof Image>;
  controlText?: React.ComponentProps<typeof Paragraph>;
  login?: React.ComponentProps<typeof Button>;
  signup?: React.ComponentProps<typeof Button>;
  reportProblem?: React.ComponentProps<typeof Button>;
}

export const useIonicReactAuthPageProps = (
  props: UseAuthPageProps
): PageProps => {
  const authPageProps = useMemo(
    (): PageProps => ({
      ns: "auth",
      id: "Control",
      contents: [
        {
          type: "custom",
          component: (
            <Image
              {...props?.image}
              src={props.image?.src ?? pageConfig.authPageImage}
              alt={props?.image?.alt ?? "auth-image"}
              resizeMode={props?.image?.resizeMode ?? "contain"}
              className={`h-full flex-1 ${props?.image?.className ?? ""}`}
            />
          ),
          hidden: !props.image?.src && !pageConfig.authPageImage,
        },
        {
          type: "custom",
          component: (
            <Paragraph
              {...props.controlText}
              description={
                typeof props.controlText?.description !== "string"
                  ? {
                      ...props.controlText?.description,
                      text:
                        props.controlText?.description?.text ?? "controlText",

                      className: `justify-center items-center ${props.controlText?.descriptionClassName ?? ""}`,
                    }
                  : (props.controlText?.description ?? "controlText")
              }
            />
          ),
        },
        {
          type: "custom",
          component: (
            <Button
              {...props.login}
              text={props.login?.text ?? "login"}
              ns="auth"
              variant={props.login?.variant ?? "contained"}
            />
          ),
        },
        {
          type: "custom",
          component: (
            <Button
              {...props.signup}
              text={props.signup?.text ?? "createAccount"}
              ns="auth"
              variant={props.signup?.variant ?? "outlined"}
              color={props.signup?.color ?? "secondary"}
            />
          ),
        },
        {
          type: "custom",
          component: (
            <Button
              {...props.reportProblem}
              text={props.reportProblem?.text ?? "reportProblem"}
              ns="settings"
              onClick={props.reportProblem?.onClick}
              variant={props.reportProblem?.variant ?? "text"}
              color={props.reportProblem?.color ?? "error"}
            />
          ),
        },
      ],
    }),
    [props]
  );

  return authPageProps;
};
