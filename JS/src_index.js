(function(Chart) {

  var Stacked100Plugin = {
    id: "stacked100",

    beforeInit: function(chartInstance, pluginOptions) {
      if (!pluginOptions.enable) return;

      var xAxes = chartInstance.options.scales.xAxes;
      var yAxes = chartInstance.options.scales.yAxes;
      var isVertical = chartInstance.config.type === "bar" || chartInstance.config.type === "line";

      [xAxes, yAxes].forEach(function(axes) {
        axes.forEach(function(hash) {
          hash.stacked = true;
        });
      });
      (isVertical ? yAxes : xAxes).forEach(function(hash) {
        if (!hash.ticks.min) {
          var hasNegative = chartInstance.data.datasets.some(function(dataset) {
            return dataset.data.some(function(value) {
              return value < 0;
            });
          });
          hash.ticks.min = hasNegative ? -100 : 0;
        }
        if (!hash.ticks.max) hash.ticks.max = 100;
      });

      // Replace tooltips
      if (pluginOptions.hasOwnProperty("replaceTooltipLabel") && !pluginOptions.replaceTooltipLabel) return;
      chartInstance.options.tooltips.callbacks.label = tooltipLabel(isHorizontalChart(chartInstance));
    },

    beforeDatasetsUpdate: function(chartInstance, pluginOptions) {
      if (!pluginOptions.enable) return;

      setOriginalData(chartInstance.data);
      var precision = getPrecision(pluginOptions);
      calculateRate(chartInstance.data, isHorizontalChart(chartInstance), precision);
      reflectData(chartInstance.data.calculatedData, chartInstance.data.datasets);
    },

    afterDatasetsUpdate: function(chartInstance, pluginOptions) {
      if (!pluginOptions.enable) return;

      reflectData(chartInstance.data.originalData, chartInstance.data.datasets);
    }
  };

  Chart.pluginService.register(Stacked100Plugin);
}.call(this, Chart));
