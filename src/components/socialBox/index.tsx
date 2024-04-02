import { FunctionComponent } from "react";

const SocialBox = (props: { iconSocial: FunctionComponent }) => {
  return (
    <div className="p-2.5 shadow-social-box drop-shadow-sm rounded-lg bg-[var(--logo-bg)] border border-[var(--upgrade-box)]">
      {props.iconSocial && <props.iconSocial />}
    </div>
  );
};

export default SocialBox;
