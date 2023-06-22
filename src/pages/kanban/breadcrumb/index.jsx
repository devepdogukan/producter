import React from "react";
import styles from "./breadcrumb.module.scss";
import ArrowLeft from "@/icons/arrow-left";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import HourGlass from "@/icons/hourglass";
import Typography from "@/components/Typography";
import People from "@/icons/people";
import Calendar from "@/icons/calendar";
import Grid from "@/icons/grid";
import Flex from "@/icons/flex";

export default function Breadcrumb() {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.information}>
        <div className={styles.back}>
          <ArrowLeft />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.stack}>
          <Badge color="primary">
            <HourGlass />
          </Badge>
          <Typography>SPR-06</Typography>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.stack}>
          <Badge color="blue">
            <People />
          </Badge>
          <Typography>TEAM-10</Typography>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.action}>
          <Typography fontWeight="600" color="darkPrimary">
            New Sprint Name
          </Typography>

          <div>
            <Badge size="16px" variant="text" color="red">
              <Calendar />
            </Badge>
          </div>

          <div style={{ marginInline: "4px 12px" }}>
            <Badge size="16px" variant="text">
              <People width="16px" height="16px" />
            </Badge>
          </div>
          <Button color="lightBlue" padding="8px 12px">
            <Typography fontWeight="600" color="blue">Complete Sprint</Typography>
          </Button>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.divider}></div>
        <Button>
          <Grid />
        </Button>
        <Button color="blue">
          <Flex />
        </Button>
      </div>
    </div>
  );
}
