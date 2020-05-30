import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const TimelineCom = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid fixed>
        <Grid item sx={12}>
          <Timeline mode="alternate">
            <Timeline.Item>SDN CIWARUGA 2 BANDUNG</Timeline.Item>
            <Timeline.Item color="green">SMP PASUNDAN 12 BANDUNG</Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
            >
              SMA PASUNDAN 5 BANDUNG | IPS
            </Timeline.Item>
            <Timeline.Item color="red">
              KAMPUS POLITEKNIK POS INDONESIA BANDUNG | D4 Teknik Informatika
            </Timeline.Item>
          </Timeline>
        </Grid>
      </Grid>
    </div>
  );
};

export default TimelineCom;
