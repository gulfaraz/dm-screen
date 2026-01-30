import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import * as d3 from 'd3';

import {
    Character,
    Alignment,
    SetCharacterAlignmentEvent,
} from '../alignment-tracker.character';
import config from './alignment-tracker-chart.config';

@Component({
    selector: 'app-alignment-tracker-chart',
    templateUrl: './alignment-tracker-chart.component.html',
})
export class AlignmentTrackerChartComponent
    implements AfterViewInit, OnChanges
{
    @Input() characters!: Character[];
    @Input() character!: Character | null;
    @ViewChild('containerElement') containerElement!: ElementRef;
    @Output() setCharacterAlignmentEvent =
        new EventEmitter<SetCharacterAlignmentEvent>();

    svg!: d3.Selection<SVGGElement, unknown, null, undefined>;
    x!: d3.ScaleLinear<number, number>;
    y!: d3.ScaleLinear<number, number>;
    tooltip!: d3.Selection<HTMLDivElement, unknown, HTMLElement, unknown>;

    ngAfterViewInit() {
        this.createChart();
    }

    ngOnChanges(changes: SimpleChanges) {
        if ('characters' in changes) this.updateChart();
        if ('character' in changes) {
            const currentCharacter = changes['character'].currentValue;
            const previousCharacter = changes['character'].previousValue;
            if (currentCharacter) this.fillCharacterCircle(currentCharacter);
            else if (previousCharacter)
                this.clearCharacterCircle(previousCharacter);
        }
    }

    onDragEnd = (dragEvent: DragEvent, character: Character) =>
        this.setCharacterAlignmentEvent.emit({
            character,
            ethical: this.x.invert(dragEvent.x),
            moral: this.y.invert(dragEvent.y),
        });

    drag = d3
        .drag<Element, Character>()
        .on('drag', function onDrag(dragEvent: DragEvent) {
            d3.select(this).attr('cx', dragEvent.x).attr('cy', dragEvent.y);
        })
        .on('end', this.onDragEnd);

    createXAxis = () => {
        this.x = d3
            .scaleLinear()
            .domain(config.paddedDomain)
            .range([0, config.width])
            .clamp(true);

        const axisBottom = d3
            .axisBottom(this.x)
            .tickSize(config.tickSize)
            .tickFormat(() => '');

        this.svg
            .append('g')
            .attr('transform', `translate(0,${config.height / 2})`)
            .call(axisBottom);
    };

    createYAxis = () => {
        this.y = d3
            .scaleLinear()
            .domain(config.paddedDomain)
            .range([config.height, 0])
            .clamp(true);

        const axisLeft = d3
            .axisLeft(this.y)
            .tickSize(config.tickSize)
            .tickFormat(() => '');

        this.svg
            .append('g')
            .attr('transform', `translate(${config.width / 2},0)`)
            .call(axisLeft);
    };

    labelAxes = () => {
        const axisLabels = this.svg.append('g');
        axisLabels
            .append('text')
            .attr('x', (config.width + config.axisLabelPadding) / 2)
            .attr('y', config.axisLabelPadding)
            .text(Alignment.Good);
        axisLabels
            .append('text')
            .attr('x', (config.width + config.axisLabelPadding) / 2 - 42)
            .attr('y', config.height)
            .text(Alignment.Evil);
        axisLabels
            .append('text')
            .attr('x', config.width - 48)
            .attr('y', config.height / 2 + config.axisLabelPadding + 6)
            .text(Alignment.Lawful);
        axisLabels
            .append('text')
            .attr('x', 0)
            .attr('y', (config.height - config.axisLabelPadding) / 2)
            .text(Alignment.Chaotic);
        axisLabels
            .append('text')
            .attr('x', (config.width + config.axisLabelPadding) / 2)
            .attr('y', (config.height - config.axisLabelPadding) / 2)
            .text(Alignment.Neutral);
    };

    createChart = () => {
        this.svg = d3
            .select(this.containerElement.nativeElement)
            .append('svg')
            .attr(
                'width',
                config.width + config.margin.left + config.margin.right,
            )
            .attr(
                'height',
                config.height + config.margin.top + config.margin.bottom,
            )
            .append('g')
            .attr(
                'transform',
                `translate(${config.margin.left},${config.margin.top})`,
            );

        this.createXAxis();
        this.createYAxis();
        this.labelAxes();

        this.updateChart();
    };

    updateChart = () => {
        if (this.svg) {
            this.svg.selectAll('circle').remove();
            d3.selectAll('.tooltip').remove();

            this.tooltip = d3
                .select('body')
                .append('div')
                .attr('class', 'tooltip');

            this.svg
                .append('g')
                .selectAll('dot')
                .data(this.characters)
                .enter()
                .append('circle')
                .attr('cx', (character: Character) => this.x(character.ethical))
                .attr('cy', (character: Character) => this.y(character.moral))
                .attr('r', config.circleRadius)
                .attr('name', (character: Character) => character.name)
                .style('stroke', (character: Character) => character.colour)
                .style('fill', 'transparent')
                .on('mouseover', this.onMouseOver)
                .on('mouseout', this.onMouseOut);

            this.drag(this.svg.selectAll('circle'));
        }
    };

    onMouseOver = (mouseEvent: MouseEvent, character: Character) => {
        d3.select(mouseEvent.target as Element)
            .transition()
            .duration(config.transitionShowDuration)
            .style('fill', character.colour);

        this.tooltip
            .transition()
            .duration(config.transitionShowDuration)
            .style('opacity', config.tooltipShowOpacity);
        this.tooltip
            .html(character.name + '<br />' + character.alignment())
            .style('left', mouseEvent.pageX + 10 + 'px')
            .style('top', mouseEvent.pageY + 15 + 'px')
            .style('background', character.colour);
    };

    onMouseOut = (mouseEvent: MouseEvent) => {
        d3.select(mouseEvent.target as Element)
            .transition()
            .duration(config.transitionHideDuration)
            .style('fill', 'transparent');

        this.tooltip
            .transition()
            .duration(config.transitionHideDuration)
            .style('opacity', config.tooltipHideOpacity);
    };

    fillCharacterCircle = (character: Character) =>
        d3
            .select(`[name='${character.name}']`)
            .transition()
            .duration(config.transitionShowDuration)
            .style('fill', character.colour)
            .attr('r', config.circleRadius * 1.5);

    clearCharacterCircle = (character: Character) =>
        d3
            .select(`[name='${character.name}']`)
            .transition()
            .duration(config.transitionShowDuration)
            .style('fill', 'transparent')
            .attr('r', config.circleRadius);
}
