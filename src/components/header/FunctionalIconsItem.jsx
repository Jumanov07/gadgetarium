import { Badge, styled, Tooltip, tooltipClasses } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FunctionalIconsItemTooltipTitle from "./FunctionalIconsItemTooltipTitle";

const FunctionalIconsItem = ({
  placementTooltip,
  className,
  badgeContent,
  color,
  iconDefault,
  focused,
  iconRemoveItem,
  link,
  ...props
}) => {
  const [state, setState] = useState(focused);

  const toggleHandler = () => {
    setState((prevState) => !prevState);
  };

  return (
    <>
      <StyledTooltip
        placement={placementTooltip}
        title={<FunctionalIconsItemTooltipTitle {...props} focused={state} />}
        className={className}
        onClick={toggleHandler}
      >
        <StyledBadge badgeContent={badgeContent?.length} color={color}>
          <Link to={link}>{!state ? iconDefault : iconRemoveItem}</Link>
        </StyledBadge>
      </StyledTooltip>
    </>
  );
};

export default FunctionalIconsItem;

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`&.show_cart_items .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    maxWidth: 550,
  },
  [`&.show_cart_items .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(1),
    color: theme.palette.common.black,
    boxShadow: "rgba(0,0,0,0.5) 0 1px 2px",
  },
}));

const StyledBadge = styled(Badge)(() => ({
  "& svg": {
    width: "30px",
    height: "30px",
  },
}));
