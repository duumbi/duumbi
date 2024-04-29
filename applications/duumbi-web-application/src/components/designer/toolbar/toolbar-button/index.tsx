import { Button, Tooltip } from "antd";
import { ToolbarItem } from "../../../../types";



export const ToolbarButton = ({
  title,
  icon,
}: ToolbarItem): JSX.Element => {
  const Icon = icon;

  return (
    <Tooltip title={title}>
      <Button shape="default" size="large" type="dashed" icon={<Icon />} />
    </Tooltip>
  );
};
