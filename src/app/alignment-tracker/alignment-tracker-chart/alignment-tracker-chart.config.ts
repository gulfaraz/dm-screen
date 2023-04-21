const scale = 5;
const margin = { top: 20, right: 30, bottom: 30, left: 60 };
const padding = 1;

const jitterMinimum = 0;
const jitterFactor = 0.5;

const jitter = () =>
    (Math.random() < 0.5 ? +1 : -1) *
    Math.max(jitterMinimum, Math.random() * jitterFactor);

const colour = (colours: string[]) =>
    colours[Math.floor(Math.random() * colours.length)];

export default {
    scale,
    margin,
    width: 610 - margin.left - margin.right,
    height: 550 - margin.top - margin.bottom,
    padding,
    axisLabelPadding: 15,
    paddedDomain: [-(scale + padding), scale + padding],
    circleRadius: 10,
    tickSize: 0,
    tooltipShowOpacity: 0.8,
    tooltipHideOpacity: 0,
    transitionShowDuration: 100,
    transitionHideDuration: 200,
    scaleThreshold: Math.floor(scale / 2),
    jitter,
    colour,
};
