var breakpoint_width = 600;
var map = null;
var view = null;
var charts = {};
var drawnCharts = {
  minYear: 9999,
  maxYear: 0,
  minValue: 9999,
  maxValue: 0,
  chartElements: {}
}

//configの読み込み
var json_url = "aplat_setting.json";
$.ajaxSetup({ async: false });
$.getJSON(json_url, function (json) {
  config = json;
});
$.ajaxSetup({ async: true });


var base_webmap_id = config.base_webmap_id;
var basemap_group_id = config.basemap_group_id;
var default_extend = config.default_extend;

//グラフ複数選択要素
var graphElements = config.chart_setting.elements;

//URLパラメータの取得
var urlParameters = {
  "display": getParam("display"),
  "kansho": getParam("kansho"),
  "shihyo": getParam("shihyo"),
  "year": getParam("year"),
  "month": getParam("month"),
  "prefecture1": getParam("prefecture1"),
  "observatory1": getParam("observatory1"),
  "prefecture2": getParam("prefecture2"),
  "observatory2": getParam("observatory2"),
  "prefecture3": getParam("prefecture3"),
  "observatory3": getParam("observatory3"),
  "expand": getParam("expand"),
}

require([
  "esri/portal/Portal",
  "esri/identity/OAuthInfo",
  "esri/identity/IdentityManager",
  "esri/core/reactiveUtils",
  "esri/Map",
  "esri/WebMap",
  "esri/Basemap",
  "esri/views/MapView",
  "esri/layers/TileLayer",
  "esri/layers/FeatureLayer",
  "esri/widgets/Home",
  "esri/widgets/Swipe",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Slider",
  "esri/widgets/ScaleBar",
  "esri/geometry/Extent",
  "esri/renderers/Renderer",
  "esri/widgets/BasemapGallery/support/LocalBasemapsSource"
], function (Portal, OAuthInfo, identityManager, reactiveUtils, Map, WebMap, Basemap, MapView, TileLayer, FeatureLayer,
  Home, Swipe, Legend, Expand, BasemapGallery, Slider, ScaleBar, Extent, Renderer, LocalBasemapsSource) {

  var portalUrl = "https://nies.maps.arcgis.com";

  var info = new OAuthInfo({
    appId: config.appId,
    popup: false
  });

  identityManager.registerOAuthInfos([info]);
  identityManager.getCredential(portalUrl);

  initForm();

  map = new WebMap({
    portalItem: {
      id: base_webmap_id
    }
  });

  view = new MapView({
    container: "mapviewCanvas",
    map: map,
    zoom: 14,
    constraints: {
      lods: [{ scale: 250000 }, { scale: 500000 }, { scale: 1000000 }, { scale: 2500000 },
      { scale: 5000000 }, { scale: 10000000 }, { scale: 25000000 }, { scale: 50000000 }],
    }
  });

  var shihyoLayer = null;
  var kanshoDisconnectTable = null;
  var amedasDisconnectTable = null;
  var yearEvaluationTable = null;
  var monthEvaluationTable = null;

  var homeBtn = new Home({
    view: view
  });
  view.ui.add(homeBtn, "top-left");

  //スケールバー
  var scaleBar = new ScaleBar({
    view: view,
    style: "line",
    unit: "metric"
  });
  view.ui.add(scaleBar, "bottom-left");

  //マップ設定
  const mapSettingWidget = document.getElementById("mapSettingWidget");
  mapSettingWidget.style.display = "block";

  var settingExpand = new Expand({
    view: view,
    expandIconClass: "esri-icon-settings",
    content: mapSettingWidget,
    expanded: false,
    mode: "floating"
  });

  view.ui.add(settingExpand, "top-left");

  //凡例
  var legend = new Legend({
    view: view
  });

  var lgExpand = new Expand({
    view: view,
    content: legend,
    expanded: true,
    mode: "floating"
  });

  view.ui.add(lgExpand, "bottom-right");

  //背景地図選択
  var basemapGallery = new BasemapGallery({
    view: view,
    source: {
      query: {
        id: basemap_group_id
      }
    },
    container: document.createElement("div")
  });

  var bgExpand = new Expand({
    view: view,
    content: basemapGallery,
    expanded: false,
    mode: "floating"
  });

  basemapGallery.watch("activeBasemap", function () {
    var mobileSize =
      view.heightBreakpoint === "xsmall" ||
      view.widthBreakpoint === "xsmall";

    if (mobileSize) {
      bgExpand.collapse();
    }
  });
  view.ui.add(bgExpand, "top-right");

  var yearSlider = new Slider({
    container: "yearselector",
    steps: 1,
    labelInputsEnabled: true,
    labelFormatFunction: function (value, type) {
      return value + "年";
    },
    values: [config.defalt_year],
    visibleElements: {
      labels: true,
      rangeLabels: true
    }
  });

  map.when(function () {
    setForm(true);


    //修正
    if (urlParameters.prefecture1 || urlParameters.observatory1) {
      setMapLayerFilter(true);
    } else {
      setMapLayerFilter(false);
    }

    draw_charts();
  });

  view.extent = default_extend;


  //イベント処理
  $('#attentionButton').click(function () {
    $('#attentionDialog').fadeIn();
  });

  $('#agreebutton').click(function () {
    $(this).parents('#attentionDialog').fadeOut();
  });

  $('#smartFooterButton').click(function () {
    $('#smartFooterDialog').fadeIn();
  });

  $('#closebutton').click(function () {
    $(this).parents('#smartFooterDialog').fadeOut();
  });

  $('#displayselector').on("calciteRadioGroupChange", function (event) {
    if (event.target.value == "mapview") {
      $("#mapviewDiv").show();
      $("#graphviewDiv").hide();
      $("#map_observatory").show();
      $("#graph_observatory").hide();
      $(".subObservatory").hide();
    } else {
      $("#mapviewDiv").hide();
      $("#graphviewDiv").show();
      $("#map_observatory").hide();
      $("#graph_observatory").show();
      $(".subObservatory").show();
    }
    setForm(false);
  });

  $('#shihyoselector').on("calciteSelectChange", function (event) {
    setForm(false);
    setMapLayerFilter(true);
    draw_charts();
  });

  $('#kanshoselector').on("calciteRadioGroupChange", function (event) {
    setForm(false);

    for (const graphElement of graphElements) {
      setObservatoryselector(graphElement, false);
    }
    setMapLayerFilter(true);
    draw_charts();
  });

  for (const graphElement of graphElements) {
    $(`#${graphElement.prefectureSecector}`).on("calciteSelectChange", function (event) {
      setObservatoryselector(graphElement, true);
      setForm(false);
      setMapLayerFilter(true);
      draw_charts();
    });

    $(`#${graphElement.observatorySecector}`).on("calciteSelectChange", function (event) {
      setForm(false);
      setMapLayerFilter(true);
      draw_charts();
    });

    //グラフ拡大ボタンのクリック
    $(`#${graphElement.expand}`).on("click", function (event) {
      //修正
      $('#chartDialog').fadeIn();

      //グラフの表示
      if (drawnCharts.chartElements["chartDialogCanvas"]) {
        drawnCharts.chartElements["chartDialogCanvas"].destroy();
      }

      let chartData = JSON.parse(JSON.stringify(drawnCharts.chartDatas[graphElement.canvas]));
      chartData.canvas = "chartDialogCanvas";
      drawnCharts.chartDatas[chartData.canvas] = chartData;
      update_chart(chartData);

      $("#exportsizeselector").val("SVGA");
      $("#chartDialogCanvas").attr('width', 800);
      $("#chartDialogCanvas").attr('height', 600);
      $("#chartDialogContent").css('width', 800);
      $("#chartDialogContent").css('height', 600);
    });
  }

  $("#saveChartImage").on("click", function (event) {
    const chartData = drawnCharts.chartDatas["chartDialogCanvas"]

    var export_text = chartData.title + "_グラフ";
    var ctx = document.getElementById("chartDialogCanvas");

    var a = document.createElement('a');
    a.href = ctx.toDataURL();
    a.download = export_text + '.png';
    a.click();

  });

  $("#chartDialogClose").on("click", function (event) {
    $('#chartDialog').fadeOut();
  });

  yearSlider.on("thumb-change", function (event) {
    setMapLayerFilter(false);
  });
  yearSlider.on("thumb-drag", function (event) {
    setMapLayerFilter(false);
  });

  $('#monthselector').on("calciteSelectChange", function (event) {
    setForm(false);
    setMapLayerFilter(false);
    draw_charts();
  });

  $('#csv_observatory').click(function () {
    download_csv(0);
  });

  $('#csv_maparea').click(function () {
    download_csv(1);
  });

  $('#map_observatory').click(function () {
    startMapDownload();
  });

  $('#mapscalecheckbox').on("calciteCheckboxChange", function (event) {
    const checkbox = document.getElementById("mapscalecheckbox");
    const selector = document.getElementById("mapscaleselector");
    if (checkbox.checked) {
      selector.removeAttribute("disabled");
    } else {
      selector.setAttribute("disabled", true);
    }
  });

  $('#mapscaleselector').on("calciteSelectChange", function (event) {
    view.scale = event.target.value;
  });

  //マップの縮尺変更時に固定縮尺の表示も切り替える
  reactiveUtils.when(() => view.stationary === true, () => {
    if (view.scale) {
      const selector = document.getElementById("mapscaleselector");
      selector.value = view.scale;
    }
  });

  //グラフサイズ変更
  $('#exportsizeselector').on("calciteSelectChange", function (event) {

    switch ($("#exportsizeselector").val()) {
      case "SVGA":
        $("#chartDialogCanvas").attr('width', 800);
        $("#chartDialogCanvas").attr('height', 600);
        $("#chartDialogContent").css('width', 800);
        $("#chartDialogContent").css('height', 600);
        break;
      case "XGA":
        $("#chartDialogCanvas").attr('width', 1024);
        $("#chartDialogCanvas").attr('height', 768);
        $("#chartDialogContent").css('width', 1024);
        $("#chartDialogContent").css('height', 768);
        break;
      case "WXGA":
        $("#chartDialogCanvas").attr('width', 1280);
        $("#chartDialogCanvas").attr('height', 800);
        $("#chartDialogContent").css('width', 1280);
        $("#chartDialogContent").css('height', 800);
        break;
      default:
        break;
    }
    drawnCharts.chartElements["chartDialogCanvas"].destroy();
    const chartData = drawnCharts.chartDatas["chartDialogCanvas"];
    update_chart(chartData);

    // draw_charts();
  });

  //サイドパネルの展開・折りたたみ処理
  $("#sideExpand").on("click", function (event) {
    var dispShowVW = "calc(100vw - 60px)";
    var dispHideVW = "60vw";
    if (window.innerWidth < breakpoint_width) {
      dispShowVW = "calc(100vw - 60px)";
      dispHideVW = "calc(100vw - 60px)";
    }

    if (event.target.icon == "chevrons-left") { //展開
      $("#sideExpand").attr("icon", "chevrons-right");
      $("#sideDiv").css('display', 'none');
      $("#displayDiv").css('width', dispShowVW);
    } else {  //折りたたみ
      $("#sideExpand").attr("icon", "chevrons-left");
      $("#sideDiv").css('display', 'block');
      $("#displayDiv").css('width', dispHideVW);
    }
    draw_charts();
  });




  function initForm() {
    var selector = document.getElementById("shihyoselector");

    var shihyo = config.shihyo;
    var group = null;
    var group_title = "";
    for (var i = 0; i < shihyo.length; i++) {
      var title = shihyo[i]["title"];
      var label = shihyo[i]["label"];
      var bunrui = shihyo[i]["bunrui"];

      if (bunrui != group_title) {
        group = document.createElement("calcite-option-group");
        group.setAttribute('label', bunrui);
        group.innerHTML = bunrui;
        selector.appendChild(group);
        group_title = bunrui;
      }

      var option = document.createElement("calcite-option");
      option.setAttribute('value', title);
      option.innerHTML = label;

      if (i == 0) {
        option.setAttribute('selected', true);
      }
      group.appendChild(option);
    }

    $("#shihyoselector").val(config.shihyo[0].title);
  }

  async function setForm(init_flg) {

    var display = $('#displayselector').val();
    if (urlParameters.display) {
      $('#displayselector').val(urlParameters.display);
      display = urlParameters.display;
      urlParameters.display = null;
    }

    var shihyo = $('#shihyoselector').val();
    if (urlParameters.shihyo) {
      $('#shihyoselector').val(urlParameters.shihyo);
      shihyo = urlParameters.shihyo;
      urlParameters.shihyo = null;
    }
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;

    var kansho = $('#kanshoselector').val();
    if (urlParameters.kansho) {
      $('#kanshoselector').val(urlParameters.kansho);
      kansho = urlParameters.kansho;
      urlParameters.kansho = null;
    }

    var month = $('#monthselector').val();
    if (urlParameters.month) {
      $('#monthselector').val(urlParameters.month);
      month = urlParameters.month;
      urlParameters.month = null;
    }


    if (display == "graphview") {
      $("#mapviewDiv").hide();
      $("#graphviewDiv").show();
      $("#map_observatory").hide();
      $("#graph_observatory").show();
      $(".subObservatory").show();
      $('#yearselector-label').addClass('hidden');
      $('#yearselectorDiv').addClass('hidden');
    } else {
      $("#mapviewDiv").show();
      $("#graphviewDiv").hide();
      $("#map_observatory").show();
      $("#graph_observatory").hide();
      $(".subObservatory").hide();
      $('#yearselector-label').removeClass('hidden');
      $('#yearselectorDiv').removeClass('hidden');
    }

    if (bunrui == "年間値") {
      $('#monthselectorDiv').addClass('hidden');
    } else {
      $('#monthselectorDiv').removeClass('hidden');
    }

    //レイヤーの初期化
    var layers = map.allLayers.items;
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].type != "feature") {
        continue;
      }

      if (layers[i].title == (shihyo)) {
        shihyoLayer = layers[i];
        legend.layerInfos.layer = shihyoLayer;
        layers[i].visible = true;
      } else {
        layers[i].visible = false;
      }
    }

    //テーブルの初期化
    var tables = map.allTables.items;
    for (let i = 0; i < tables.length; i++) {
      if (tables[i].title == config.disconnect.kansho_table) {
        kanshoDisconnectTable = tables[i];
      }
      if (tables[i].title == config.disconnect.amedas_table) {
        amedasDisconnectTable = tables[i];
      }
      if (tables[i].title == config.evaluation.year_table) {
        yearEvaluationTable = tables[i];
      }
      if (tables[i].title == config.evaluation.month_table) {
        monthEvaluationTable = tables[i];
      }
    }

    let query = shihyoLayer.createQuery();

    var expression = "";
    if (kansho != "すべて") {
      expression = "官署 = '" + kansho + "'";
    }

    if (bunrui == "月別値") {
      if (expression != "") {
        expression = expression + " AND ";
      }
      expression = expression + "月 = " + month;
    }
    query.where = expression;

    query.outFields = [
      "年"
    ];

    query.outStatistics = [
      {
        statisticType: "min",
        onStatisticField: "年",
        outStatisticFieldName: "最小年"
      },
      {
        statisticType: "max",
        onStatisticField: "年",
        outStatisticFieldName: "最大年"
      }
    ];
    query.returnGeometry = false;

    var response = await shihyoLayer.queryFeatures(query);
    var features = response.features;
    var min_year = features[0].attributes["最小年"];
    var max_year = features[0].attributes["最大年"];

    yearSlider.min = min_year;
    yearSlider.max = max_year;

    var year = yearSlider.values[0];
    if (urlParameters.year) {
      yearSlider.values[0] = urlParameters.year;
      setMapLayerFilter(false);
      year = Number(urlParameters.year);
      urlParameters.year = null;
    }

    //修正
    if (!init_flg) {
      return;
    }

    for (const graphElement of graphElements) {
      setPrefectureselector(graphElement, init_flg);
    }
  }

  async function setPrefectureselector(graphElement, init_flg) {

    const prefectureElement = graphElement.prefectureSecector;
    $(`#${prefectureElement} > calcite-option`).remove();
    const item = document.createElement("calcite-option");
    item.setAttribute("label", "全国");
    item.setAttribute("value", "全国");
    $(`#${prefectureElement}`).append(item);
    $(`#${prefectureElement}`).val("全国");

    for (var i = 0; i < config.prefecture.length; i++) {
      var area = config.prefecture[i];
      const item = document.createElement("calcite-option");
      item.setAttribute("label", area);
      item.setAttribute("value", area);
      $(`#${prefectureElement}`).append(item);
    }

    if (urlParameters[prefectureElement]) {
      $(`#${prefectureElement}`).val(urlParameters[prefectureElement]);
      urlParameters[prefectureElement] = null;
    }

    setObservatoryselector(graphElement, init_flg);
  }

  async function setObservatoryselector(graphElement, init_flg) {

    const prefectureElement = graphElement.prefectureSecector;
    const observatoryElement = graphElement.observatorySecector;

    var display = $('#displayselector').val();
    var prefecture = $(`#${prefectureElement}`).val();
    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var month = $('#monthselector').val();
    var kansho = $('#kanshoselector').val();

    let query = shihyoLayer.createQuery();

    var expression = "";
    if (kansho != "すべて") {
      expression = "官署 = '" + kansho + "'";
    }

    if (bunrui == "月別値") {
      if (expression == "") {
        expression = "月 = " + month;
      } else {
        expression = expression + " AND 月 = " + month;
      }
    }

    if (prefecture == "全国") {
      query.where = expression;
    } else {
      if (expression == "") {
        query.where = "都道府県= '" + prefecture + "'";
      } else {
        query.where = expression + " AND 都道府県= '" + prefecture + "'";
      }
    }

    query.outFields = [
      "官署", "地点番号", "観測地点名"
    ];
    query.orderByFields = ["官署 DESC", "地点番号"];
    query.groupByFieldsForStatistics = ["官署", "地点番号", "観測地点名"];

    query.outStatistics = [
      {
        statisticType: "min",
        onStatisticField: "官署",
        outStatisticFieldName: "官署リスト"
      },
      {
        statisticType: "min",
        onStatisticField: "観測地点名",
        outStatisticFieldName: "観測地点名リスト"
      }
    ];
    query.returnGeometry = false;

    $(`#${observatoryElement} > calcite-option-group`).remove();
    $(`#${observatoryElement} > calcite-option`).remove();
    const item = document.createElement("calcite-option");
    item.setAttribute("label", "");
    item.setAttribute("value", "");
    $(`#${observatoryElement}`).append(item);
    $(`#${observatoryElement}`).val("");

    var response = await shihyoLayer.queryFeatures(query);
    var features = response.features;

    var oldKansho = "";
    var group
    for (var i = 0; i < features.length; i++) {
      var kansho = features[i].attributes["官署リスト"];
      if (oldKansho != kansho) {
        group = document.createElement("calcite-option-group");
        group.setAttribute('label', kansho);
        group.innerHTML = kansho;
        $(`#${observatoryElement}`).append(group);
        oldKansho = kansho;
      }

      var area = features[i].attributes["観測地点名リスト"];
      const item = document.createElement("calcite-option");
      item.setAttribute("label", area);
      item.setAttribute("value", area);
      group.append(item);
    }

    if (urlParameters[observatoryElement]) {
      $(`#${observatoryElement}`).val(urlParameters[observatoryElement]);
      urlParameters[observatoryElement] = null;
    }
  }

  function setMapLayerFilter(zoom_flg) {
    //修正
    var prefecture = $('#prefectureselector1').val();
    var observatory = $('#observatoryselector1').val();
    var year = yearSlider.values[0];
    var month = $('#monthselector').val();
    var kansho = $('#kanshoselector').val();
    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;

    shihyoLayer.definitionExpression = "";

    var expression = "年 = " + String(year);

    if (bunrui == "月別値") {
      expression = expression + " AND 月 = " + month;
    }

    if (kansho != "すべて") {
      expression = expression + " AND 官署 = '" + kansho + "'";
    }

    if (prefecture != "全国" && observatory != "") {
      shihyoLayer.definitionExpression = expression + " AND 都道府県 = '" + prefecture + "' AND 観測地点名 = '" + observatory + "'";

      if (zoom_flg) {
        zoomToLayer();
      }
    } else if (observatory != "") {
      shihyoLayer.definitionExpression = expression + " AND 観測地点名 = '" + observatory + "'";

      if (zoom_flg) {
        zoomToLayer();
      }
    } else if (prefecture != "全国") {
      shihyoLayer.definitionExpression = expression + " AND 都道府県 = '" + prefecture + "'";
      if (zoom_flg) {
        zoomToLayer();
      }
    } else {
      shihyoLayer.definitionExpression = expression;
      if (zoom_flg) {
        view.extent = default_extend;
      }
    }


    function zoomToLayer() {
      const checkbox = document.getElementById("mapscalecheckbox");
      const selector = document.getElementById("mapscaleselector");
      let opts = {
        duration: 2000
      };
      return shihyoLayer.queryExtent().then(function (response) {
        if (response.extent) {
          if (checkbox.checked) {
            view.goTo({
              center: response.extent.center,
              scale: selector.value
            }, opts);
          } else {
            view.goTo(response.extent.clone().expand(1.2), opts);
          }
        }
      });
    }
  }



  //グラフの再描画
  async function draw_charts() {

    if (shihyoLayer == null) {
      return;
    }

    //初期化
    for (const chart in drawnCharts.chartElements) {
      if (drawnCharts.chartElements[chart] != null) {
        drawnCharts.chartElements[chart].destroy();
      }
    }
    drawnCharts = {
      minYear: 9999,
      maxYear: 0,
      minValue: 9999,
      maxValue: 0,
      chartElements: {},
      chartDatas: {}
    }

    //各グラフの値を取得
    var datas = [];
    for (const graphElement of graphElements) {

      var chartData = await queryChartData(graphElement);
      if (chartData == null || chartData.labels.length == 0) {
        continue;
      }

      //グラフの年表示範囲を取得
      if (Number(chartData.labels[0]) < drawnCharts.minYear) {
        drawnCharts.minYear = Number(chartData.labels[0]);
      }
      if (Number(chartData.labels[chartData.labels.length - 1]) > drawnCharts.maxYear) {
        drawnCharts.maxYear = Number(chartData.labels[chartData.labels.length - 1]);
      }
      //グラフの値表示範囲を取得
      let values = chartData.datas.filter(value => value != null);
      if (Math.min(...values) < drawnCharts.minValue) {
        drawnCharts.minValue = Math.min(...values);
      }
      if (Math.max(...values) > drawnCharts.maxValue) {
        drawnCharts.maxValue = Math.max(...values);
      }

      datas.push(chartData);
    }

    for (const data of datas) {
      //最小の年までラベル、値を挿入
      if (Number(data.labels[0]) > drawnCharts.minYear) {
        var fill_year = Number(data.labels[0]) - 1;
        while (fill_year != drawnCharts.minYear) {
          data.labels.unshift(fill_year);
          data.datas.unshift(null);
          data.nulls.unshift(null);
          if (data.evaluationValues.evaluable == true) {
            data.evaluationValues.values.unshift({
              year: fill_year,
              value: null
            });
          }
          data.movingAverages.unshift({
            year: fill_year,
            value: null
          });
          data.disconnectValues.unshift(null);
          fill_year--;
        }
      }
      //最大の年までラベル、値を挿入
      if (Number(data.labels[data.length - 1]) < drawnCharts.maxYear) {
        var fill_year = Number(data.labels[data.length - 1]) + 1;
        while (fill_year != drawnCharts.maxYear) {
          data.labels.push(fill_year);
          data.datas.push(null);
          data.nulls.push(null);
          if (data.evaluationValues.evaluable == true) {
            data.evaluationValues.values.push({
              year: fill_year,
              value: null
            });
          }
          data.movingAverages.push({
            year: fill_year,
            value: null
          });
          data.disconnectValues.push(null);
          fill_year++;
        }
      }

      //グラフの描画
      update_chart(data);
    }

  }

  //個別のグラフデータを取得
  async function queryChartData(graphElement) {

    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var shihyotxt = $('#shihyoselector calcite-option:selected').text();
    var prefecture = $(`#${graphElement.prefectureSecector}`).val();
    var observatory = $(`#${graphElement.observatorySecector}`).val();

    var chitenId = await getChitenId(graphElement);
    if (chitenId == null) {
      $(`#${graphElement.disableDiv}`).show();
      $(`#${graphElement.canvas}`).hide();
      $(`#${graphElement.expand}`).hide();
      return null;
    } else {
      $(`#${graphElement.disableDiv}`).hide();
      $(`#${graphElement.canvas}`).show();
      $(`#${graphElement.expand}`).show();
    }

    var month = $('#monthselector').val();
    var monthtxt = $('#monthselector calcite-option:selected').text();

    var kansho = $('#kanshoselector').val();
    var field = config.shihyo.find(v => v.title === shihyo).field;

    //グラフ作成
    let query = shihyoLayer.createQuery();
    query.outFields = [
      "年", field
    ];
    query.orderByFields = "年";
    query.groupByFieldsForStatistics = "年";

    var expression = field + " <> " + String(32767);
    if (kansho != "すべて") {
      expression = expression + " AND 官署 = '" + kansho + "'"
    }
    if (bunrui == "月別値") {
      chart_title = chart_title + "　" + monthtxt;
      expression = expression + " AND 月 = " + month;
    }

    if (prefecture != "全国") {
      expression = expression + " AND 都道府県 = '" + prefecture + "'";
    }

    query.where = expression + " AND 観測地点名 = '" + observatory + "'";
    query.returnGeometry = false;

    var response = await shihyoLayer.queryFeatures(query);
    var features = response.features;

    var datasets = [];
    var labels = [];
    var datas = [];
    var nulls = [];

    var before_year = "";
    for (var i = 0; i < features.length; i++) {
      var year = features[i].attributes["年"];
      var value = features[i].attributes[field];

      //年の開始は5の倍数
      if (i == 0) {
        var fill_year = Math.floor(year / 5) * 5;
        while (fill_year != year) {
          labels.push(fill_year);
          datas.push(null);
          nulls.push(null);
          datasets.push({
            type: "blank",
            year: fill_year,
            value: null
          });
          fill_year++;
        }
        before_year = year - 1;
      }

      //データ欠落年はnullをセット
      while ((before_year + 1) < year) {
        before_year++;
        labels.push(before_year);
        datas.push(null);
        nulls.push(0);

        datasets.push({
          type: "nodata",
          year: before_year,
          value: null
        });
      }

      labels.push(year);
      datas.push(Math.round(value * 100) / 100);
      nulls.push(null);

      datasets.push({
        type: "normal",
        year: year,
        value: Math.round(value * 100) / 100
      });

      before_year = year;
    }

    const normalDatasets = datasets.filter(n => n.type === "normal")
    const startYear = normalDatasets[0].year;
    const endYear = normalDatasets[normalDatasets.length - 1].year;

    if (normalDatasets.length == 0) return null;

    var chart_title = observatory + "観測所";
    chart_title = `${observatory}観測所　${startYear}年～${endYear}年`;

    //統計評価
    var evaluationValues = await getEvaluationValues(graphElement, chitenId);
    if (evaluationValues["evaluable"] == true) {
      evaluationValues = getEvaluationLine(evaluationValues, datasets);
    }

    //中央移動平均
    const movingAverages = getMovingAverage(datasets);

    //統計切断
    const disconnectValues = await getDisconnectValue(graphElement, chitenId, datasets);

    return {
      chitenId: chitenId,
      canvas: graphElement.canvas,
      title: chart_title,
      labels: labels,
      datas: datas,
      nulls: nulls,
      datasets: datasets,
      evaluationValues: evaluationValues,
      movingAverages: movingAverages,
      disconnectValues: disconnectValues
    }
  }

  //統計切断情報を取得
  async function getDisconnectValue(graphElement, chitenId, datasets) {
    var shihyo = $('#shihyoselector').val();
    var kansho = $(`#${graphElement.observatorySecector} calcite-option:selected`).parent().text();

    var cuttings = [];

    //気象官署の場合の切断情報の取得
    if (kansho == "気象官署") {
      const disconnect = config.shihyo.find(n => n.title == shihyo).disconnect.kansho;

      const query = kanshoDisconnectTable.createQuery();
      query.where = `地点番号 = ${chitenId}`;
      query.outFields = ["年", "月", "区分", disconnect.field, "内容"]
      query.orderByFields = ["年", "月"];

      const result = await kanshoDisconnectTable.queryFeatures(query);
      for (const feature of result.features) {
        const year = feature["attributes"]["年"];
        const month = feature["attributes"]["月"];
        const kubun = feature["attributes"]["区分"];
        const data = feature["attributes"][disconnect.field];
        const naiyo = feature["attributes"]["内容"];
        for (const hitData of disconnect.hitDatas) {
          if (kubun == hitData.kubun && data == hitData.data) {
            // console.log("気象官署切断", year, month, kubun, data, naiyo);
            cuttings.push({
              year: year,
              month: month,
              evaluable: hitData.evaluable
            });
          }
        }
      }

      //アメダスの場合の切断情報の取得
    } else if (kansho == "アメダス") {
      const disconnect = config.shihyo.find(n => n.title == shihyo).disconnect.amedas;

      const query = amedasDisconnectTable.createQuery();
      query.where = `観測所番号 = ${chitenId}`;
      query.outFields = ["年", "月", disconnect.field]
      query.orderByFields = ["年", "月"];

      const result = await amedasDisconnectTable.queryFeatures(query);
      for (const feature of result.features) {
        const year = feature["attributes"]["年"];
        const month = feature["attributes"]["月"];
        const data = feature["attributes"][disconnect.field];
        for (const hitData of disconnect.hitDatas) {
          if (data == hitData.data) {
            // console.log("アメダス切断", year, month, data);
            cuttings.push({
              year: year,
              month: month,
              evaluable: hitData.evaluable
            });
          }
        }
      }
    }

    var disconnectValues = [];
    const len = datasets.length;
    for (let i = 0; i < len; i++) {
      const currentYear = datasets[i].year;

      const hitDatas = cuttings.filter(n => n.year == currentYear);
      if (hitDatas.length > 0) {
        disconnectValues.push(1);
      } else {
        disconnectValues.push(null);
      }
    }
    return disconnectValues;
  }

  //統計評価テーブルの取得
  async function getEvaluationValues(graphElement, chitenId) {
    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var month = $('#monthselector').val();
    var kansho = $(`#${graphElement.observatorySecector} calcite-option:selected`).parent().text();

    var returnValues = {
      "evaluable": false,
      "p": null,
      "slope": null,
      "intercept": null
    };

    //指標として統計評価をしない場合
    const configShihyo = config.shihyo.find(v => v.title === shihyo);
    var evaluable = true;
    if (kansho == "気象官署") {
      evaluable = configShihyo.disconnect.kansho.evaluable;
    } else {
      evaluable = configShihyo.disconnect.amedas.evaluable;
    }
    if (evaluable == false) {
      return returnValues;
    }

    //地点として統計評価をしない場合
    const configExclusion_list = config.evaluation.exclusion_list.find(v => v.chiten === chitenId);
    if (configExclusion_list) {
      if (configExclusion_list.shihyo.find(n => n == shihyo)) {
        return returnValues;
      }
    }

    var evaluationTable = null;
    var where = null;
    if (bunrui == "年間値") {
      evaluationTable = yearEvaluationTable;
      where = `地点番号 = ${chitenId} And 指標 = '${shihyo}'`;
    } else {
      evaluationTable = monthEvaluationTable;
      where = `地点番号 = ${chitenId} And 指標 = '${shihyo}' And 月 = '${month}'`;
    }
    const query = evaluationTable.createQuery();
    query.where = where;
    query.outFields = ["p", "slope", "intercept"];
    const result = await evaluationTable.queryFeatures(query);

    if (result.features.length > 0) {
      const attributes = result.features[0].attributes;
      if (attributes["p"] >= config.evaluation.evaluable_p_min && attributes["p"] <= config.evaluation.evaluable_p_max) {
        returnValues = {
          "evaluable": true,
          "p": attributes["p"],
          "slope": attributes["slope"],
          "intercept": attributes["intercept"]
        };
      }
    }
    return returnValues;
  }

  //トレンドの直線データを取得
  function getEvaluationLine(evaluationValues, datasets) {

    let valuebles = datasets.filter((n) => n.type === "normal");
    const len = valuebles.length;
    const a = evaluationValues["slope"];
    const b = evaluationValues["intercept"];
    let values = [];
    const firstYear = valuebles[0].year;
    for (const dataset of datasets) {

      if (dataset.year == valuebles[0].year) {
        values.push({
          year: dataset.year,
          value: b
        });
      } else if (dataset.year == valuebles[len - 1].year) {
        values.push({
          year: dataset.year,
          value: (valuebles[len - 1].year - valuebles[0].year) * a + b
        });
      } else {
        values.push({
          year: dataset.year,
          value: null
        });
      }
    }

    evaluationValues["values"] = values;
    return evaluationValues;
  }


  //移動平均を求める
  function getMovingAverage(datasets) {
    const beforeOffset = config.chart_setting.average.beforeOffset;
    const afterOffset = config.chart_setting.average.afterOffset;
    const len = datasets.length;
    const valuebles = datasets.filter(n => n.type != "blank");

    if (valuebles.length == 0) {
      return [];
    }

    let calcStartYear = valuebles[0].year + beforeOffset;
    if (calcStartYear > valuebles[valuebles.length - 1].year) {
      calcStartYear = valuebles[valuebles.length - 1].year;
    }

    let calcEndYear = valuebles[valuebles.length - 1].year - afterOffset;
    if (calcEndYear < valuebles[0].year) {
      calcEndYear = valuebles[0].year;
    }
    if (calcStartYear == calcEndYear) {
      return [];
    }

    let movingAverages = [];
    for (let i = 0; i < len; i++) {
      const currentYear = datasets[i].year;
      if (currentYear < calcStartYear || currentYear > calcEndYear) {
        movingAverages.push({
          year: currentYear,
          value: null
        });
      } else {
        const startYear = currentYear - beforeOffset;
        const endYear = currentYear + afterOffset;

        let count = 0;
        let total = 0;
        for (let j = startYear; j <= endYear; j++) {
          const currentValue = datasets.find(n => n.year === j).value;
          if (currentValue === null) {
            count = 0;
            break;
          };
          count += 1;
          total += currentValue;
        }
        if (count === 0) {
          movingAverages.push({
            year: currentYear,
            value: null
          });
        } else {
          let average = Math.floor((total / count) * 100) / 100;
          movingAverages.push({
            year: currentYear,
            value: average
          });
        }
      }
    }
    return movingAverages;
  }


  //グラフの描画
  function update_chart(chartData) {

    const element = chartData.canvas;
    const chart_title = chartData.title;
    const labels = chartData.labels;
    const datas = chartData.datas;
    var nulls = chartData.nulls;
    let movingAverages = chartData.movingAverages.map(n => n.value);
    var disconnectValues = chartData.disconnectValues;

    var ctx = document.getElementById(element).getContext('2d');

    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var shihyotxt = $('#shihyoselector calcite-option:selected').text();
    // var prefecture = $('#prefectureselector').val();
    // var observatory = $('#observatoryselector').val();
    var month = $('#monthselector').val();

    var chart_type = config["shihyo"].find(value => value.title == shihyo).chart;
    var borderColor = config["shihyo"].find(value => value.title == shihyo).borderColor;
    var backgroundColor = config["shihyo"].find(value => value.title == shihyo).backgroundColor;
    var yAxesStep = config["shihyo"].find(value => value.title == shihyo).yAxesStep;

    var titleSize = config.chart_setting.layout.desktop.titleSize;
    var subtitleSize = config.chart_setting.layout.desktop.subtitleSize;
    var scalesSize = config.chart_setting.layout.desktop.scalesSize;
    var legendPosition = config.chart_setting.layout.desktop.legendPosition;

    if (element != "chartDialogCanvas" && window.innerWidth < breakpoint_width) {
      titleSize = config.chart_setting.layout.mobile.titleSize;
      subtitleSize = config.chart_setting.layout.mobile.subtitleSize;
      scalesSize = config.chart_setting.layout.mobile.scalesSize;
      legendPosition = config.chart_setting.layout.mobile.legendPosition;
    }

    var yLabel = shihyotxt;

    //最小値と最大値からY軸の範囲を設定
    var yAxesMin = Math.floor(drawnCharts.minValue / yAxesStep) * yAxesStep;
    if (chart_type == "bar") {
      yAxesMin = 0;
    }
    var yAxesMax = Math.ceil(drawnCharts.maxValue / yAxesStep) * yAxesStep;
    if (yAxesMin == yAxesMax) {
      yAxesMax = yAxesMax + yAxesStep;
    }

    //欠測値のY軸表示高さ
    nulls = nulls.map(value => {
      if (value == null) {
        return null;
      } else {
        return yAxesMin;
      }
    });
    //切断情報のY軸表示高さ
    disconnectValues = disconnectValues.map(value => {
      if (value == null) {
        return null;
      } else {
        return yAxesMin;
      }
    });

    var datasets = [];

    //統計切断のグラフ
    if (disconnectValues.filter(n => n != null).length > 0) {
      datasets.push({
        label: config.chart_setting.disconnect.label,
        type: "line",
        data: disconnectValues,
        pointBorderColor: config.chart_setting.disconnect.pointBorderColor,
        pointBackgroundColor: config.chart_setting.disconnect.pointBorderColor,
        borderColor: config.chart_setting.disconnect.pointBorderColor,
        backgroundColor: config.chart_setting.disconnect.pointBorderColor,
        pointStyle: 'triangle',
        showLine: false,
        spanGaps: true,
        pointRadius: 10,
        pointHoverRadius: 15
      });
    }


    //欠測値のグラフ
    if (nulls.filter(n => n != null).length > 0) {
      datasets.push({
        label: config.chart_setting.nodata.label,
        type: "line",
        data: nulls,
        pointBorderColor: config.chart_setting.nodata.pointBorderColor,
        pointBackgroundColor: config.chart_setting.nodata.pointBorderColor,
        borderColor: config.chart_setting.nodata.pointBorderColor,
        pointStyle: 'crossRot',
        showLine: false,
        spanGaps: true,
        pointRadius: 10,
        pointHoverRadius: 15
      });
    }

    //トレンドデータのグラフ(統計切断がない場合のみ表示)
    if (chartData.evaluationValues.evaluable == true && disconnectValues.filter(n => n != null).length == 0) {
      const rTrend = Math.floor(chartData.evaluationValues.slope * 1000) / 1000;
      const trendValues = chartData.evaluationValues.values.map(n => n.value);
      console.log(chartData.evaluationValues);
      datasets.push({
        label: config.chart_setting.trend.label + " (R=" + rTrend + ")",
        // label: `p=${chartData.evaluationValues.p} slope=${chartData.evaluationValues.slope} intercept=${chartData.evaluationValues.intercept}`,
        type: "line",
        data: trendValues,
        borderColor: config.chart_setting.trend.borderColor,
        backgroundColor: config.chart_setting.trend.borderColor,
        lineTension: 0,
        borderWidth: 2,
        pointStyle: 'rect',
        pointRadius: 0,
        spanGaps: true,
        fill: false
      });
    }

    //移動平均のグラフ
    datasets.push({
      label: config.chart_setting.average.label,
      type: "line",
      data: movingAverages,
      borderColor: config.chart_setting.average.borderColor,
      backgroundColor: config.chart_setting.average.borderColor,
      lineTension: 0.4,
      borderWidth: 2,
      pointStyle: 'rect',
      spanGaps: false,
      pointRadius: 0,
      fill: false
    });

    //通常データのグラフ
    datasets.push({
      label: shihyotxt,
      type: chart_type,
      data: datas,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      lineTension: 0,
      pointStyle: 'circle',
      borderWidth: 0.5,
      radius: 3,
      spanGaps: true,
      fill: false
    });

    drawnCharts.chartDatas[element] = chartData;

    //チャートエレメントのクリア
    if (drawnCharts.chartElements[element] != null) {
      drawnCharts.chartElements[element].destroy();
    }

    drawnCharts.chartElements[element] = new Chart(ctx, {
      type: chart_type,
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        title: {
          display: true,
          fontSize: titleSize,
          fontColor: '#000000',
          padding: 20,
          text: chart_title
        },
        plugins: {
          chartJsPluginSubtitle: {
            display: true,
            fontSize: subtitleSize,
            fontColor: '#000000',
            text: "データは気象庁提供、国立環境研究所が解析したデータを基に作成"
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0
          }
        },
        legend: {
          display: true,
          position: legendPosition,
          fontSize: 12,
          labels: {
            fontColor: '#000000',
            boxWidth: 20,
            usePointStyle: true,
            padding: 10
          }
        },
        tooltips: {
          // mode: 'nearest',
          titleFontSize: 14,
          bodyFontSize: 14,
          callbacks: {
            title: function (tooltipItem, data) {
              return "";
            },
            label: function (tooltipItem, data) {
              if (data.datasets[tooltipItem.datasetIndex].label === config.chart_setting.disconnect.label) {
                return data.labels[tooltipItem.index] + "年：" + config.chart_setting.disconnect.label;
              } else if (data.datasets[tooltipItem.datasetIndex].label === config.chart_setting.nodata.label) {
                return data.labels[tooltipItem.index] + "年：" + config.chart_setting.nodata.label;
              } else {
                return data.labels[tooltipItem.index] + "年" + "：" + tooltipItem.yLabel;
              }
            }
          }
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: '観測年',
              fontSize: scalesSize,
              fontColor: '#000000'
            },
            gridLines: {
              display: false
            },
            ticks: {
              min: drawnCharts.minYear,
              max: drawnCharts.maxYear,
              autoSkip: false,
              fontColor: '#000000',
              callback: function (value, index, values) {
                if (value % 5 == 0) {
                  return value + "年";
                } else {
                  return "";
                }
              }
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: yLabel,
              fontSize: scalesSize,
              fontColor: '#000000',
              stepSize: yAxesStep,
            },
            ticks: {
              min: yAxesMin,
              max: yAxesMax,
              fontColor: '#000000',
              stepSize: yAxesStep,
              userCallback: function (label, index, labels) {
                if (Math.floor(label) === label) {
                  return label;
                }
              }
            }
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  //選択された観測所が単一であれば地点番号を取得
  async function getChitenId(graphElement) {
    var prefecture = $(`#${graphElement.prefectureSecector}`).val();
    var observatory = $(`#${graphElement.observatorySecector}`).val();
    var kansho = $('#kanshoselector').val();

    var chitenId = null;
    if (shihyoLayer == null) {
      return chitenId;
    }
    if (observatory == "") {
      return chitenId;
    }

    var query = shihyoLayer.createQuery();
    var expression = "観測地点名 = '" + observatory + "'";

    if (kansho != "すべて") {
      expression = expression + " AND 官署 = '" + kansho + "'";
    }

    if (prefecture != "全国") {
      expression = expression + " AND 都道府県 = '" + prefecture + "'";
    }
    query.where = expression;
    query.outFields = ["地点番号"];
    query.groupByFieldsForStatistics = "地点番号";
    query.returnDistinctValues = true;
    query.returnGeometry = false;

    var response = await shihyoLayer.queryFeatures(query);
    var features = response.features;
    if (features.length == 1) {
      chitenId = features[0].attributes["地点番号"];
    }

    return chitenId;
  }

  async function download_csv(flg) {
    const loadingScrim = document.getElementById("loadingScrim");
    loadingScrim.classList.remove("hidden");

    var display = $('#displayselector').val();
    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var shihyotxt = $('#shihyoselector calcite-option:selected').text();
    var prefecture1 = $('#prefectureselector1').val();
    var observatory1 = $('#observatoryselector1').val();
    var year = yearSlider.values[0];
    var month = $('#monthselector').val();
    var kansho = $('#kanshoselector').val();
    var field = config.shihyo.find(v => v.title === shihyo).field;

    var fields = ["地点番号", "都道府県", "観測地点名", "緯度", "経度", "年", field];
    if (bunrui == "月別値") {
      fields = ["地点番号", "都道府県", "観測地点名", "緯度", "経度", "年", "月", field];
    }

    var query = shihyoLayer.createQuery();
    query.where = "1=1"; //条件リセット

    if (flg == 0) {
      if (display == "mapview") {
        if (prefecture1 != "全国" && observatory1 != "") {
          if (kansho != "すべて") {
            query.where = "官署 = '" + kansho + "' AND 都道府県 = '" + prefecture1 + "' AND 観測地点名 = '" + observatory1 + "'";
          } else {
            query.where = "都道府県 = '" + prefecture1 + "' AND 観測地点名 = '" + observatory1 + "'";
          }
          shihyotxt = shihyotxt + "_" + observatory1;
        } else if (observatory1 != "") {
          if (kansho != "すべて") {
            query.where = "官署 = '" + kansho + "' AND 観測地点名 = '" + observatory1 + "'";
          } else {
            query.where = "観測地点名 = '" + observatory1 + "'";
          }
          shihyotxt = shihyotxt + "_" + observatory1;
        } else if (prefecture1 != "全国") {
          if (kansho != "すべて") {
            query.where = "官署 = '" + kansho + "' AND 都道府県 = '" + prefecture1 + "'";
          } else {
            query.where = "都道府県 = '" + prefecture1 + "'";
          }
          shihyotxt = shihyotxt + "_" + prefecture1;
        } else {
          if (kansho != "すべて") {
            query.where = "官署 = '" + kansho + "'";
          }
          shihyotxt = shihyotxt + "_全国";
        }
      } else {
        //グラフで表示されている地点のデータを出力
        var chitenIds = [];
        Object.keys(drawnCharts.chartDatas).forEach(function (key) {
          chitenIds.push(drawnCharts.chartDatas[key].chitenId);
        });

        if (chitenIds.length == 0) return;

        query.where = "地点番号 in (" + chitenIds.join(',') + ")";
      }
    } else {
      query.geometry = view.extent;
      shihyotxt = shihyotxt + "_マップ範囲のみ";
    }

    query.outFields = fields;

    query.orderByFields = "地点番号,年";
    if (bunrui == "月別値") {
      query.orderByFields = "地点番号,年,月";
    }

    query.returnGeometry = false;

    var records = [];

    const perRecord = 2000;
    var startRecord = 0;
    var endRecord = startRecord + perRecord;

    while (true) {
      query.num = perRecord;
      query.start = startRecord;
      query.end = endRecord;
      var response = await shihyoLayer.queryFeatures(query);

      var features = response.features;

      if (features.length == 0) break;

      for (let i = 0; i < features.length; ++i) {
        var att = features[i].attributes;

        var record = [];
        for (let j = 0; j < fields.length; ++j) {
          record.push(att[fields[j]]);
        }
        records.push(record);
      }

      startRecord = endRecord;
      endRecord = startRecord + perRecord;
    }
    startCsvDownload(shihyotxt, fields, records);
    loadingScrim.classList.add("hidden");


    //CSVデータの保存
    function startCsvDownload(shihyo, fields, records) {
      const filename = kansho + "_" + shihyo + '.csv';

      var csv_text = fields.join(',') + "\r\n";

      for (let i = 0; i < records.length; ++i) {
        for (let j = 0; j < records[i].length; ++j) {
          csv_text = csv_text + records[i][j] + ",";
        }
        csv_text = csv_text + "\r\n";
      }

      const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
      const blob = new Blob([bom, csv_text], { type: 'text/csv' });

      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, filename);
      } else {
        const url = (window.URL || window.webkitURL).createObjectURL(blob);
        const download = document.createElement('a');
        download.href = url;
        download.download = filename;
        download.click();
        (window.URL || window.webkitURL).revokeObjectURL(url);
      }
    }
  }

  //マップ画像の保存
  async function startMapDownload() {
    //修正
    var prefecture = $('#prefectureselector1').val();
    var observatory = $('#observatoryselector1').val();
    var year = yearSlider.values[0];
    var month = $('#monthselector').val();
    var kansho = $('#kanshoselector').val();
    var shihyo = $('#shihyoselector').val();
    var bunrui = config.shihyo.find(v => v.title === shihyo).bunrui;
    var shihyotxt = $('#shihyoselector calcite-option:selected').text();
    var titleHeight = 60;

    var mapScreenshot = await view.takeScreenshot();
    var mapImg = new Image();
    mapImg.src = mapScreenshot.dataUrl;
    await mapImg.onload;
    var legendImgUrl = await domtoimage.toPng($(".esri-legend")[0]);
    const legendImg = new Image();
    legendImg.src = legendImgUrl;
    await legendImg.onload;

    var export_canvas = document.getElementById('export_canvas');
    export_canvas.width = mapImg.width;
    export_canvas.height = mapImg.height + 60;
    const ctx = export_canvas.getContext("2d");


    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, export_canvas.width, export_canvas.height);

    var legendDw = 150;
    var legendDh = 200;
    var legendDx = export_canvas.width - legendDw - 2;
    var legendDy = export_canvas.height - legendDh - 2;

    ctx.drawImage(mapImg, 0, 0, mapImg.width, mapImg.height, 0, titleHeight, mapImg.width, mapImg.height);
    ctx.drawImage(legendImg, 0, 0, legendImg.width, legendImg.height, legendDx, legendDy, legendDw, legendDh);

    var export_text = "";

    if (observatory != "") {
      export_text = observatory + "_";
    } else if (prefecture != "全国") {
      export_text = prefecture + "_";
    }

    export_text = export_text + shihyotxt + "_";

    if (bunrui == "年間値") {
      export_text += year + "年";
    } else {
      export_text += year + "年" + month + "月";
    }
    export_text += "_分布";

    ctx.fillStyle = "black";
    ctx.font = "24px serif";

    if (window.innerWidth < breakpoint_width) {
      ctx.font = "12px serif";
    }

    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(export_text, 10, 10);

    var a = document.createElement('a');
    a.href = export_canvas.toDataURL();
    a.download = export_text + '.png';
    a.click();
  }
});

//URLパラメータの取得
function getParam(name) {
  var url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}