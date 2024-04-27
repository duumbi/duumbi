import { Button, Tooltip } from "antd";
import { IconType } from "react-icons";

interface ToolbarButtonProps {
  title: string;
  icon: IconType;
}

export const ToolbarButton = ({
  title,
  icon,
}: ToolbarButtonProps): JSX.Element => {
  const Icon = icon;

  return (
    <Tooltip title={title}>
      <Button shape="default" size="large" type="dashed" icon={<Icon />} />
    </Tooltip>
  );
};
