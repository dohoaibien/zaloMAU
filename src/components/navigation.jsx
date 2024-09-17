import { useVirtualKeyboardVisible } from "hooks";
import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BottomNavigation, Icon } from "zmp-ui";

const tabs = {
    "/": { label: "Trang chủ", icon: <Icon icon="zi-home" />,},
    "/library": { label: "Nhật ký", icon: <Icon icon="zi-more-grid" />,},
    "/notification": { label: "Thông báo", icon: <Icon icon="zi-notif" />,},
    "/profile": { label: "Cá nhân", icon: <Icon icon="zi-user" />,},
  };