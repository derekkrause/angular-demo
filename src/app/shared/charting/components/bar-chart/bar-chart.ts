import { Component, computed, inject, input } from '@angular/core';
import { EchartsBaseChart } from '../echarts-base-chart/echarts-base-chart';
import { ChartThemeService } from '../../services/chart-theme.service';
import { Theme, ThemeService } from '@app/core/theme/services/theme.service';
import { EChartsCoreOption } from 'echarts/core';

@Component({
  selector: 'app-bar-chart',
  imports: [EchartsBaseChart],
  templateUrl: './bar-chart.html',
  styleUrl: './bar-chart.scss',
})
export class BarChart<T extends { x: string | number, y: string | number }> {
  readonly #appThemeService = inject(ThemeService);
  readonly #chartThemeService = inject(ChartThemeService);

  readonly data = input.required<T[]>();

  protected readonly userSelectedTheme = computed<Theme>(() => {
    return this.#appThemeService.isDarkMode() ? 'dark' : 'light';
  });

  protected readonly ariaLabel = computed<string>(() => {
    const summary = this.data().map(item => `${item.x}: ${item.y}`).join(', ');
    return `Bar chart showing the following data: ${summary}`;
  });

  protected readonly chartOptions = computed<EChartsCoreOption>(() => {
    // reading to update options when theme changes
    this.#appThemeService.isDarkMode();

    const theme = this.#chartThemeService.getTheme();

    return {
      backgroundColor: theme.surfaceContainer,

      color: [theme.error, theme.primary, theme.secondary],

      aria: {
        enabled: true,
        decal: {
          show: true,
        },
      },

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        backgroundColor: theme.surfaceContainer,
        borderColor: theme.outlineVariant,
        textStyle: {
          color: theme.text,
        },
      },

      grid: {
        top: 24,
        right: 20,
        bottom: 44,
        left: 52,
        containLabel: true,
      },

      xAxis: {
        type: 'value',
        min: 0,
        minInterval: 1,
        data: this.data().map((item) => item.y),

        axisLine: {
          lineStyle: {
            color: theme.outline,
          },
        },

        axisTick: {
          alignWithLabel: true,
        },

        axisLabel: {
          color: theme.mutedText,
        },
      },

      yAxis: {
        type: 'category',
        data: this.data().map(item => item.y),

        axisLabel: {
          color: theme.mutedText,
        },

        splitLine: {
          lineStyle: {
            color: theme.outlineVariant,
          },
        },
      },

      series: [
        {
          name: 'Products',
          type: 'bar',

          data: this.data().map((item) => item.x),

          barMaxWidth: 72,

          itemStyle: {
            borderRadius: [6, 6, 0, 0],
          },

          emphasis: {
            focus: 'series',
          },
        },
      ],
    };
  });
}
